package io.littlehorse.scheduler.serde;

import org.apache.kafka.common.serialization.Serializer;
import io.littlehorse.common.LHConfig;
import io.littlehorse.scheduler.SchedulerOutput;

public class SchedulerOutputTsrSer implements Serializer<SchedulerOutput> {
    private LHConfig config;

    public SchedulerOutputTsrSer(LHConfig config) {
        this.config = config;
    }

    public byte[] serialize(String topic, SchedulerOutput input) {
        return input.request.toBytes(config);
    }
}
