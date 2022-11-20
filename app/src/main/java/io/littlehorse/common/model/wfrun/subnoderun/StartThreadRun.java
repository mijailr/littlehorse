package io.littlehorse.common.model.wfrun.subnoderun;

import com.google.protobuf.MessageOrBuilder;
import io.littlehorse.common.LHConstants;
import io.littlehorse.common.exceptions.LHVarSubError;
import io.littlehorse.common.model.event.WfRunEvent;
import io.littlehorse.common.model.meta.VariableAssignment;
import io.littlehorse.common.model.meta.subnode.StartThreadNode;
import io.littlehorse.common.model.wfrun.Failure;
import io.littlehorse.common.model.wfrun.SubNodeRun;
import io.littlehorse.common.model.wfrun.ThreadRun;
import io.littlehorse.common.model.wfrun.VariableValue;
import io.littlehorse.common.proto.LHStatusPb;
import io.littlehorse.common.proto.StartThreadRunPb;
import io.littlehorse.common.proto.StartThreadRunPbOrBuilder;
import io.littlehorse.common.proto.TaskResultCodePb;
import io.littlehorse.common.proto.VariableTypePb;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

public class StartThreadRun extends SubNodeRun<StartThreadRunPb> {

    public Integer childThreadId;
    public String threadSpecName;

    public Class<StartThreadRunPb> getProtoBaseClass() {
        return StartThreadRunPb.class;
    }

    public void initFrom(MessageOrBuilder p) {
        StartThreadRunPbOrBuilder proto = (StartThreadRunPbOrBuilder) p;
        if (proto.hasChildThreadId()) childThreadId = proto.getChildThreadId();
        threadSpecName = proto.getThreadSpecName();
    }

    public StartThreadRunPb.Builder toProto() {
        StartThreadRunPb.Builder out = StartThreadRunPb
            .newBuilder()
            .setThreadSpecName(threadSpecName);

        if (childThreadId != null) {
            out.setChildThreadId(childThreadId);
        }

        return out;
    }

    public static StartThreadRun fromProto(StartThreadRunPbOrBuilder p) {
        StartThreadRun out = new StartThreadRun();
        out.initFrom(p);
        return out;
    }

    public void processEvent(WfRunEvent event) {
        // I don't believe there's anything to do here.
    }

    public boolean advanceIfPossible(Date time) {
        // nothing to do
        return nodeRun.threadRun.advance(time);
    }

    public void arrive(Date time) {
        StartThreadNode stn = getNode().startThreadNode;
        Map<String, VariableValue> variables = new HashMap<>();

        try {
            for (Map.Entry<String, VariableAssignment> e : stn.variables.entrySet()) {
                variables.put(
                    e.getKey(),
                    nodeRun.threadRun.assignVariable(e.getValue())
                );
            }
        } catch (LHVarSubError exn) {
            Failure failure = new Failure();
            failure.message =
                "Failed constructing input variables for thread: " + exn.getMessage();

            failure.failureCode = TaskResultCodePb.FAILED;
            failure.failureName = LHConstants.VAR_SUB_ERROR;

            nodeRun.fail(failure, time);
        }

        ThreadRun child = nodeRun.threadRun.wfRun.startThread(
            nodeRun.getNode().startThreadNode.threadSpecName,
            time,
            nodeRun.threadRunNumber,
            variables
        );

        nodeRun.threadRun.childThreadIds.add(child.number);

        if (child.status == LHStatusPb.ERROR) {
            Failure failure = new Failure();
            failure.message =
                "Failed launching child thread. See child for details, id: " +
                child.number;

            failure.failureCode = TaskResultCodePb.FAILED;
            failure.failureName = LHConstants.CHILD_FAILURE;
            nodeRun.fail(failure, time);
        } else {
            // Then the variable output of this node is just the int thread id.
            VariableValue output = new VariableValue();
            output.type = VariableTypePb.INT;
            output.intVal = Long.valueOf(child.number);

            nodeRun.complete(output, time);
        }
    }
}