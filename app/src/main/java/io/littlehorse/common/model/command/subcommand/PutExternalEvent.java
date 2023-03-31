package io.littlehorse.common.model.command.subcommand;

import com.google.protobuf.Message;
import io.littlehorse.common.LHConfig;
import io.littlehorse.common.LHConstants;
import io.littlehorse.common.LHDAO;
import io.littlehorse.common.model.command.SubCommand;
import io.littlehorse.common.model.command.subcommandresponse.PutExternalEventReply;
import io.littlehorse.common.model.meta.ExternalEventDef;
import io.littlehorse.common.model.meta.WfSpec;
import io.littlehorse.common.model.observabilityevent.ObservabilityEvent;
import io.littlehorse.common.model.observabilityevent.events.ExtEvtRegisteredOe;
import io.littlehorse.common.model.wfrun.ExternalEvent;
import io.littlehorse.common.model.wfrun.Failure;
import io.littlehorse.common.model.wfrun.VariableValue;
import io.littlehorse.common.model.wfrun.WfRun;
import io.littlehorse.common.util.LHUtil;
import io.littlehorse.jlib.common.proto.LHResponseCodePb;
import io.littlehorse.jlib.common.proto.PutExternalEventPb;
import io.littlehorse.jlib.common.proto.TaskResultCodePb;
import java.util.Date;

public class PutExternalEvent extends SubCommand<PutExternalEventPb> {

    public String wfRunId;
    public String externalEventDefName;
    public String guid;
    public VariableValue content;
    public Integer threadRunNumber;
    public Integer nodeRunPosition;

    public String getPartitionKey() {
        return wfRunId;
    }

    public Class<PutExternalEventPb> getProtoBaseClass() {
        return PutExternalEventPb.class;
    }

    public PutExternalEventPb.Builder toProto() {
        PutExternalEventPb.Builder out = PutExternalEventPb
            .newBuilder()
            .setWfRunId(wfRunId)
            .setExternalEventDefName(externalEventDefName)
            .setContent(content.toProto());

        if (guid != null) out.setGuid(guid);
        if (threadRunNumber != null) out.setThreadRunNumber(threadRunNumber);
        if (nodeRunPosition != null) out.setNodeRunPosition(nodeRunPosition);

        return out;
    }

    public boolean hasResponse() {
        return true;
    }

    public PutExternalEventReply process(LHDAO dao, LHConfig config) {
        PutExternalEventReply out = new PutExternalEventReply();

        ExternalEventDef eed = dao.getExternalEventDef(externalEventDefName);
        if (eed == null) {
            out.code = LHResponseCodePb.NOT_FOUND_ERROR;
            out.message = "No ExternalEventDef named " + externalEventDefName;
            return out;
        }

        if (guid == null) guid = LHUtil.generateGuid();
        ExternalEvent evt = new ExternalEvent();
        evt.wfRunId = wfRunId;
        evt.content = content;
        evt.externalEventDefName = externalEventDefName;
        evt.guid = guid;
        evt.nodeRunPosition = nodeRunPosition;
        evt.threadRunNumber = threadRunNumber;
        evt.claimed = false;

        dao.saveExternalEvent(evt);

        ExtEvtRegisteredOe oe = new ExtEvtRegisteredOe();
        oe.extEvtDefName = evt.externalEventDefName;
        oe.guid = evt.guid;
        oe.content = evt.content;
        oe.threadRunNumber = evt.threadRunNumber;
        oe.nodeRunPosition = evt.nodeRunPosition;
        dao.addObservabilityEvent(new ObservabilityEvent(evt.wfRunId, oe));

        WfRun wfRun = dao.getWfRun(wfRunId);
        if (wfRun != null) {
            WfSpec spec = dao.getWfSpec(wfRun.wfSpecName, wfRun.wfSpecVersion);
            if (spec == null) {
                wfRun.threadRuns
                    .get(0)
                    .fail(
                        new Failure(
                            TaskResultCodePb.INTERNAL_ERROR,
                            "Appears wfSpec was deleted",
                            LHConstants.INTERNAL_ERROR
                        ),
                        new Date()
                    );
                out.code = LHResponseCodePb.NOT_FOUND_ERROR;
                out.message = "Apparently WfSpec was deleted!";
            } else {
                wfRun.wfSpec = spec;
                wfRun.cmdDao = dao;
                wfRun.processExternalEvent(evt);
                out.code = LHResponseCodePb.OK;
            }
            dao.saveWfRun(wfRun);
            dao.saveExternalEvent(evt);
        } else {
            // it's a pre-emptive event.
            out.code = LHResponseCodePb.OK;
        }

        out.result = evt;

        return out;
    }

    public void initFrom(Message proto) {
        PutExternalEventPb p = (PutExternalEventPb) proto;
        wfRunId = p.getWfRunId();
        externalEventDefName = p.getExternalEventDefName();
        content = VariableValue.fromProto(p.getContent());

        if (p.hasGuid()) guid = p.getGuid();
        if (p.hasThreadRunNumber()) threadRunNumber = p.getThreadRunNumber();
        if (p.hasNodeRunPosition()) nodeRunPosition = p.getNodeRunPosition();
    }

    public static PutExternalEvent fromProto(PutExternalEventPb p) {
        PutExternalEvent out = new PutExternalEvent();
        out.initFrom(p);
        return out;
    }
}
