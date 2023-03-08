package io.littlehorse.common.model.observabilityevent.events;

import com.google.protobuf.MessageOrBuilder;
import io.littlehorse.common.LHDAO;
import io.littlehorse.common.model.observabilityevent.SubEvent;
import io.littlehorse.jlib.common.proto.InterruptedOePb;
import io.littlehorse.jlib.common.proto.InterruptedOePbOrBuilder;
import java.util.Date;

public class InterruptedOe extends SubEvent<InterruptedOePb> {

    public String extEvtDefName;
    public String extEvtGuid;
    public int interruptedThread;

    public Class<InterruptedOePb> getProtoBaseClass() {
        return InterruptedOePb.class;
    }

    public InterruptedOePb.Builder toProto() {
        InterruptedOePb.Builder out = InterruptedOePb
            .newBuilder()
            .setInterruptedThread(interruptedThread)
            .setExtEvtDefName(extEvtDefName)
            .setExtEvtGuid(extEvtGuid);
        return out;
    }

    public void initFrom(MessageOrBuilder proto) {
        InterruptedOePbOrBuilder p = (InterruptedOePbOrBuilder) proto;
        extEvtDefName = p.getExtEvtDefName();
        extEvtGuid = p.getExtEvtGuid();
        interruptedThread = p.getInterruptedThread();
    }

    public void updateMetrics(LHDAO dao, Date time, String wfRunId) {
        // Nothing to do yet
    }
}