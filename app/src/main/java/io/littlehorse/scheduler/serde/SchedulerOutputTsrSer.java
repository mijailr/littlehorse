package io.littlehorse.scheduler.serde;

import org.apache.kafka.common.serialization.Serializer;
import io.littlehorse.scheduler.SchedulerOutput;

public class SchedulerOutputTsrSer implements Serializer<SchedulerOutput> {

    public byte[] serialize(String topic, SchedulerOutput input) {
        return input.request.toProto().build().toByteArray();
    }
}
