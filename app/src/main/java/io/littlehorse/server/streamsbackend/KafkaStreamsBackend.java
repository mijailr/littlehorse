package io.littlehorse.server.streamsbackend;

import com.google.protobuf.MessageOrBuilder;
import io.grpc.health.v1.HealthCheckResponse.ServingStatus;
import io.grpc.protobuf.services.HealthStatusManager;
import io.littlehorse.common.LHConfig;
import io.littlehorse.common.LHConstants;
import io.littlehorse.common.exceptions.LHConnectionError;
import io.littlehorse.common.exceptions.LHSerdeError;
import io.littlehorse.common.model.LHSerializable;
import io.littlehorse.common.model.command.AbstractResponse;
import io.littlehorse.common.model.command.Command;
import io.littlehorse.common.model.command.SubCommand;
import io.littlehorse.common.model.meta.ExternalEventDef;
import io.littlehorse.common.model.meta.TaskDef;
import io.littlehorse.common.model.meta.WfSpec;
import io.littlehorse.common.model.wfrun.WfRun;
import io.littlehorse.common.proto.GetWfRunPb;
import io.littlehorse.common.proto.GetWfRunReplyPb;
import io.littlehorse.common.proto.LHResponseCodePb;
import io.littlehorse.common.util.LHProducer;
import io.littlehorse.common.util.LHUtil;
import io.littlehorse.server.ServerTopology;
import io.littlehorse.server.streamsbackend.storeinternals.LHKafkaStoreInternalCommServer;
import io.littlehorse.server.streamsbackend.storeinternals.utils.StoreUtils;
import java.io.IOException;
import java.util.Date;
import java.util.concurrent.Future;
import org.apache.kafka.clients.producer.RecordMetadata;
import org.apache.kafka.common.utils.Bytes;
import org.apache.kafka.streams.KafkaStreams;
import org.apache.kafka.streams.KafkaStreams.State;
import org.apache.kafka.streams.KafkaStreams.StateListener;
import org.apache.kafka.streams.Topology;

public class KafkaStreamsBackend {

    private KafkaStreams coreStreams;
    private KafkaStreams timerStreams;
    private KafkaStreams tagStreams;
    private LHConfig config;

    private LHKafkaStoreInternalCommServer backendInternalComms;
    private LHProducer producer;

    public void init(LHConfig config, HealthStatusManager grpcHealthCheckThingy) {
        Topology coreTopo = ServerTopology.initCoreTopology(config);
        // Topology timerTopo = ServerTopology.initTimerTopology(config);
        // Topology taggingTopo = ServerTopology.initTaggingTopology(config);

        coreStreams = new KafkaStreams(coreTopo, config.getStreamsConfig("core"));
        // timerStreams = new KafkaStreams(timerTopo, config.getStreamsConfig("timer"));
        // tagStreams = new KafkaStreams(taggingTopo, config.getStreamsConfig("tag"));

        coreStreams.setStateListener(
            new LHBackendStateListener("core", grpcHealthCheckThingy)
        );
        // timerStreams.setStateListener(
        //     new LHBackendStateListener("timer", grpcHealthCheckThingy)
        // );
        // tagStreams.setStateListener(
        //     new LHBackendStateListener("tag", grpcHealthCheckThingy)
        // );

        this.config = config;
        this.producer = new LHProducer(config, false);

        backendInternalComms =
            new LHKafkaStoreInternalCommServer(config, coreStreams);
    }

    public WfSpec getWfSpec(String name, Integer version) throws LHConnectionError {
        Bytes specBytes = null;
        String partitionKey = LHConstants.META_PARTITION_KEY;
        if (version == null) {
            specBytes =
                backendInternalComms.getLastFromPrefix(
                    WfSpec.getPrefixByName(name),
                    partitionKey
                );
        } else {
            specBytes =
                backendInternalComms.getBytes(
                    WfSpec.getFullKey(name, version),
                    partitionKey
                );
        }

        if (specBytes == null) {
            return null;
        } else {
            try {
                return LHSerializable.fromBytes(
                    specBytes.get(),
                    WfSpec.class,
                    config
                );
            } catch (LHSerdeError exn) {
                throw new LHConnectionError(
                    exn,
                    "Unexpected failure to read response"
                );
            }
        }
    }

    public TaskDef getTaskDef(String name, Integer version) throws LHConnectionError {
        Bytes specBytes = null;
        String partitionKey = LHConstants.META_PARTITION_KEY;
        if (version == null) {
            specBytes =
                backendInternalComms.getLastFromPrefix(
                    TaskDef.getPrefixByName(name),
                    partitionKey
                );
        } else {
            specBytes =
                backendInternalComms.getBytes(
                    TaskDef.getFullKey(name, version),
                    partitionKey
                );
        }

        if (specBytes == null) {
            return null;
        } else {
            try {
                return LHSerializable.fromBytes(
                    specBytes.get(),
                    TaskDef.class,
                    config
                );
            } catch (LHSerdeError exn) {
                throw new LHConnectionError(
                    exn,
                    "Unexpected failure to read response"
                );
            }
        }
    }

    public ExternalEventDef getExternalEventDef(String name, Integer version)
        throws LHConnectionError {
        Bytes specBytes = null;
        String partitionKey = LHConstants.META_PARTITION_KEY;
        if (version == null) {
            specBytes =
                backendInternalComms.getLastFromPrefix(
                    ExternalEventDef.getPrefixByName(name),
                    partitionKey
                );
        } else {
            specBytes =
                backendInternalComms.getBytes(
                    ExternalEventDef.getFullKey(name, version),
                    partitionKey
                );
        }

        if (specBytes == null) {
            return null;
        } else {
            try {
                return LHSerializable.fromBytes(
                    specBytes.get(),
                    ExternalEventDef.class,
                    config
                );
            } catch (LHSerdeError exn) {
                throw new LHConnectionError(
                    exn,
                    "Unexpected failure to read response"
                );
            }
        }
    }

    public <U extends MessageOrBuilder, T extends AbstractResponse<U>> T process(
        SubCommand<?> subCmd,
        Class<T> cls
    ) {
        if (!subCmd.hasResponse()) {
            throw new RuntimeException(
                "Not possible; expected only respondable commands."
            );
        }

        T out;
        try {
            out = cls.getDeclaredConstructor().newInstance();
        } catch (Exception exn) {
            // Not possible
            exn.printStackTrace();
            throw new RuntimeException(exn);
        }

        Command command = new Command();
        command.time = new Date();
        command.setSubCommand(subCmd);

        // TODO: allow client to set this on request to enable idempotent retries.
        command.commandId = LHUtil.generateGuid();

        // Now we need to record the command and wait for the processing.
        Future<RecordMetadata> rec = producer.send(
            command.getPartitionKey(), // partition key
            command, // payload
            config.getCoreCmdTopicName() // topic name
        );

        // Wait for the record to commit to kafka
        try {
            rec.get();
        } catch (Exception exn) {
            out.code = LHResponseCodePb.CONNECTION_ERROR;
            out.message = "May have failed recording event: " + exn.getMessage();
            return out;
        }

        // Now we make the call to wait for the processing on the correct node.
        try {
            Bytes raw = backendInternalComms.waitForProcessing(command);
            if (raw == null) {
                return null;
            } else {
                try {
                    // This is if everything goes according to plan.
                    LHUtil.log("Everything worked!");
                    return LHSerializable.fromBytes(raw.get(), cls, config);
                } catch (LHSerdeError exn) {
                    out.code = LHResponseCodePb.CONNECTION_ERROR;
                    out.message = "Got an unreadable response: " + exn.getMessage();
                }
            }
        } catch (LHConnectionError exn) {
            out.code = LHResponseCodePb.CONNECTION_ERROR;
            out.message = "Request status pending: " + exn.getMessage();
        }
        return out;
    }

    public GetWfRunReplyPb getWfRun(GetWfRunPb req) {
        String partitionKey = req.getId();
        String storeKey = StoreUtils.getStoreKey(req.getId(), WfRun.class);

        GetWfRunReplyPb.Builder out = GetWfRunReplyPb.newBuilder();
        try {
            Bytes resp = backendInternalComms.getBytes(storeKey, partitionKey);
            if (resp == null) {
                out.setCode(LHResponseCodePb.NOT_FOUND_ERROR);
            } else {
                out.setCode(LHResponseCodePb.OK);
                out.setResult(
                    LHSerializable
                        .fromBytes(resp.get(), WfRun.class, config)
                        .toProto()
                );
            }
        } catch (LHConnectionError exn) {
            out.setCode(LHResponseCodePb.CONNECTION_ERROR);
            out.setMessage("Failed connecting to backend: " + exn.getMessage());
        } catch (LHSerdeError exn) {
            out.setCode(LHResponseCodePb.CONNECTION_ERROR);
            out.setMessage(
                "Got an invalid response from backend: " + exn.getMessage()
            );
        }

        return out.build();
    }

    public void start() throws IOException {
        coreStreams.start();
        // timerStreams.start();
        // tagStreams.start();
        backendInternalComms.start();
    }

    public void close() {
        coreStreams.close();
        timerStreams.close();
        tagStreams.close();
        backendInternalComms.close();
    }
}

class LHBackendStateListener implements StateListener {

    private String componentName;
    private HealthStatusManager grpcHealthCheckThingy;

    public LHBackendStateListener(
        String componentName,
        HealthStatusManager grpcHealthCheckThingy
    ) {
        this.componentName = componentName;
        this.grpcHealthCheckThingy = grpcHealthCheckThingy;
    }

    public void onChange(State newState, State oldState) {
        LHUtil.log(new Date(), "New state for", componentName + ":", newState);
        if (newState == State.RUNNING) {
            grpcHealthCheckThingy.setStatus(componentName, ServingStatus.SERVING);
        } else {
            grpcHealthCheckThingy.setStatus(componentName, ServingStatus.NOT_SERVING);
        }
    }
}
