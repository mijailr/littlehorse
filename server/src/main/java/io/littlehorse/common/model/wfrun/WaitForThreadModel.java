package io.littlehorse.common.model.wfrun;

import com.google.protobuf.Message;
import io.littlehorse.common.LHConstants;
import io.littlehorse.common.exceptions.LHVarSubError;
import io.littlehorse.common.model.LHSerializable;
import io.littlehorse.common.model.meta.ThreadToWaitForModel;
import io.littlehorse.common.util.LHUtil;
import io.littlehorse.sdk.common.proto.LHStatus;
import io.littlehorse.sdk.common.proto.WaitForThreadsRun.WaitForThread;
import java.util.Date;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class WaitForThreadModel extends LHSerializable<WaitForThread> {

    private Date threadEndTime;
    private LHStatus threadStatus;
    private int threadRunNumber;

    public Class<WaitForThread> getProtoBaseClass() {
        return WaitForThread.class;
    }

    public WaitForThreadModel() {}

    public WaitForThreadModel(NodeRunModel waitForThreadNodeRunModel, ThreadToWaitForModel threadToWaitFor)
            throws LHVarSubError {
        ThreadRunModel parentThreadRunModel = waitForThreadNodeRunModel.getThreadRun();
        this.threadRunNumber = parentThreadRunModel
                .assignVariable(threadToWaitFor.getThreadRunNumber())
                .asInt()
                .intVal
                .intValue();

        ThreadRunModel threadRunModel = parentThreadRunModel.getWfRunModel().getThreadRun(threadRunNumber);

        if (threadRunModel == null) {
            throw new LHVarSubError(null, "Couldn't wait for nonexistent threadRun: " + threadRunNumber);
        }

        // Make sure we're not waiting for a parent thread or grandparent, etc.
        ThreadRunModel potentialParent = parentThreadRunModel;
        while (potentialParent != null) {
            if (potentialParent.number == this.threadRunNumber) {
                waitForThreadNodeRunModel.fail(
                        new FailureModel(
                                "Determined threadrunnumber " + threadRunNumber + " is a parent!",
                                LHConstants.VAR_SUB_ERROR),
                        waitForThreadNodeRunModel.getDao().getEventTime());
            }
            potentialParent = potentialParent.getParent();
        }

        this.threadStatus = threadRunModel.getStatus();
    }

    public void initFrom(Message proto) {
        WaitForThread p = (WaitForThread) proto;
        if (p.hasThreadEndTime()) {
            threadEndTime = LHUtil.fromProtoTs(p.getThreadEndTime());
        }
        threadStatus = p.getThreadStatus();
        threadRunNumber = p.getThreadRunNumber();
    }

    public WaitForThread.Builder toProto() {
        WaitForThread.Builder out =
                WaitForThread.newBuilder().setThreadStatus(threadStatus).setThreadRunNumber(threadRunNumber);
        if (threadEndTime != null) {
            out.setThreadEndTime(LHUtil.fromDate(threadEndTime));
        }
        return out;
    }
}