package io.littlehorse.common.model.command.subcommand;

import com.google.protobuf.MessageOrBuilder;
import io.littlehorse.common.model.LHSerializable;
import io.littlehorse.common.model.event.WfRunSubEvent;
import io.littlehorse.common.model.wfrun.VariableValue;
import io.littlehorse.common.proto.VariableValuePb;
import io.littlehorse.common.proto.WfRunRequestPb;
import io.littlehorse.common.proto.WfRunRequestPbOrBuilder;
import io.littlehorse.common.util.LHUtil;
import java.util.HashMap;
import java.util.Map;

public class WfRunRequest
    extends LHSerializable<WfRunRequestPb>
    implements WfRunSubEvent {

    public String wfRunId;
    public String wfSpecId;
    public Map<String, VariableValue> variables;

    public WfRunRequest() {
        variables = new HashMap<>();
    }

    public WfRunRequestPb.Builder toProto() {
        if (wfRunId == null) {
            wfRunId = LHUtil.generateGuid();
        }
        WfRunRequestPb.Builder b = WfRunRequestPb
            .newBuilder()
            .setWfRunId(wfRunId)
            .setWfSpecId(wfSpecId);

        for (Map.Entry<String, VariableValue> e : variables.entrySet()) {
            b.putVariables(e.getKey(), e.getValue().toProto().build());
        }

        return b;
    }

    public void initFrom(MessageOrBuilder p) {
        WfRunRequestPbOrBuilder proto = (WfRunRequestPbOrBuilder) p;
        if (proto.hasWfRunId()) {
            wfRunId = proto.getWfRunId();
        } else {
            wfRunId = LHUtil.generateGuid();
        }
        wfSpecId = proto.getWfSpecId();

        for (Map.Entry<String, VariableValuePb> e : proto
            .getVariablesMap()
            .entrySet()) {
            variables.put(e.getKey(), VariableValue.fromProto(e.getValue()));
        }
    }

    public Class<WfRunRequestPb> getProtoBaseClass() {
        return WfRunRequestPb.class;
    }

    public static WfRunRequest fromProto(WfRunRequestPbOrBuilder proto) {
        WfRunRequest out = new WfRunRequest();
        out.initFrom(proto);
        return out;
    }

    public Integer getThreadRunNumber() {
        return 0;
    }

    public Integer getNodeRunPosition() {
        return 0;
    }
}