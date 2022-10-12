package io.littlehorse.common.model.wfrun;

import com.fasterxml.jackson.annotation.JsonIgnore;
import io.littlehorse.common.model.meta.Node;
import io.littlehorse.common.proto.LHStatusPb;
import io.littlehorse.common.proto.NodePb.NodeCase;
import io.littlehorse.common.proto.NodeRunStatePb;
import io.littlehorse.common.proto.NodeRunStatePbOrBuilder;
import io.littlehorse.common.proto.TaskResultCodePb;

public class NodeRunState {

    public String nodeName;
    public int attemptNumber;
    public int position;
    public int number;
    public LHStatusPb status;
    public TaskResultCodePb resultCode;
    public String errorMessage;

    public NodeRunState() {}

    // Below are implementation details
    @JsonIgnore
    public ThreadRun threadRun;

    @JsonIgnore
    public Node getNode() {
        return threadRun.getThreadSpec().nodes.get(nodeName);
    }

    // Have Jackson ignore this because otherwise NullPointerException encountered.
    // That's because the getNode() requires the threadSpec() being set.
    @JsonIgnore
    public NodeCase getNodeType() {
        return getNode().type;
    }

    public NodeRunStatePb.Builder toProto() {
        NodeRunStatePb.Builder b = NodeRunStatePb
            .newBuilder()
            .setNumber(number)
            .setNodeName(nodeName)
            .setAttemptNumber(attemptNumber)
            .setStatus(status)
            .setNodeName(nodeName)
            .setPosition(position);

        if (resultCode != null) b.setResultCode(resultCode);
        if (errorMessage != null) b.setErrorMessage(errorMessage);

        return b;
    }

    public static NodeRunState fromProto(NodeRunStatePbOrBuilder proto) {
        NodeRunState out = new NodeRunState();
        out.number = proto.getNumber();
        out.nodeName = proto.getNodeName();
        out.attemptNumber = proto.getAttemptNumber();
        out.status = proto.getStatus();
        out.position = proto.getPosition();
        if (proto.hasResultCode()) out.resultCode = proto.getResultCode();
        if (proto.hasErrorMessage()) out.errorMessage = proto.getErrorMessage();
        return out;
    }

    public boolean isInProgress() {
        return (
            status != LHStatusPb.COMPLETED &&
            status != LHStatusPb.ERROR &&
            status != LHStatusPb.HALTED
        );
    }
}
