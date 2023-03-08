package io.littlehorse.server.streamsimpl.coreprocessors.repartitioncommand.repartitionsubcommand;

import com.google.protobuf.MessageOrBuilder;
import io.littlehorse.common.model.GETable;
import io.littlehorse.common.model.metrics.WfSpecMetrics;
import io.littlehorse.common.util.LHUtil;
import io.littlehorse.jlib.common.LHLibUtil;
import io.littlehorse.jlib.common.proto.MetricsWindowLengthPb;
import io.littlehorse.jlib.common.proto.WfMetricUpdatePb;
import io.littlehorse.jlib.common.proto.WfMetricUpdatePbOrBuilder;
import io.littlehorse.server.streamsimpl.coreprocessors.repartitioncommand.RepartitionSubCommand;
import io.littlehorse.server.streamsimpl.storeinternals.LHStoreWrapper;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import org.apache.kafka.streams.processor.api.ProcessorContext;

public class WfMetricUpdate
    extends GETable<WfMetricUpdatePb>
    implements RepartitionSubCommand {

    public Date windowStart;
    public MetricsWindowLengthPb type;
    public long numEntries;
    public long startToCompleteMax;
    public long startToCompleteTotal;
    public long totalCompleted;
    public long totalErrored;
    public long totalStarted;

    public List<Integer> seenPartitions;
    public String wfSpecName;

    public WfMetricUpdate() {
        seenPartitions = new ArrayList<>();
    }

    public Class<WfMetricUpdatePb> getProtoBaseClass() {
        return WfMetricUpdatePb.class;
    }

    public WfMetricUpdatePb.Builder toProto() {
        WfMetricUpdatePb.Builder out = WfMetricUpdatePb
            .newBuilder()
            .setWindowStart(LHLibUtil.fromDate(windowStart))
            .setType(type)
            .setWfSpecName(wfSpecName)
            .setTotalCompleted(totalCompleted)
            .setTotalErrored(totalErrored)
            .setTotalStarted(totalStarted)
            .setStartToCompleteTotal(startToCompleteTotal)
            .setStartToCompleteMax(startToCompleteMax)
            .setNumEntries(numEntries);

        return out;
    }

    public void initFrom(MessageOrBuilder proto) {
        WfMetricUpdatePbOrBuilder p = (WfMetricUpdatePbOrBuilder) proto;
        windowStart = LHLibUtil.fromProtoTs(p.getWindowStart());
        type = p.getType();
        wfSpecName = p.getWfSpecName();
        totalCompleted = p.getTotalCompleted();
        totalErrored = p.getTotalErrored();
        totalStarted = p.getTotalStarted();
        startToCompleteTotal = p.getStartToCompleteTotal();
        startToCompleteMax = p.getStartToCompleteMax();
        numEntries = p.getNumEntries();
    }

    public void merge(WfMetricUpdate o) {
        if (!o.windowStart.equals(windowStart)) {
            throw new RuntimeException("Merging non-matched windows!");
        }
        if (!o.type.equals(type)) {
            throw new RuntimeException("Merging non-matched windows!");
        }

        numEntries += o.numEntries;
        if (o.startToCompleteMax > startToCompleteMax) {
            startToCompleteMax = o.startToCompleteMax;
        }
        startToCompleteTotal += o.startToCompleteTotal;

        if (o.startToCompleteMax > startToCompleteMax) {
            startToCompleteMax = o.startToCompleteMax;
        }
        startToCompleteTotal += o.startToCompleteTotal;

        totalCompleted += o.totalCompleted;
        totalErrored += o.totalErrored;
        totalStarted += o.totalStarted;

        for (Integer seenPartition : o.seenPartitions) {
            seenPartitions.add(seenPartition);
        }
    }

    public WfSpecMetrics toResponse() {
        WfSpecMetrics out = new WfSpecMetrics();
        out.startToCompleteAvg =
            numEntries > 0 ? startToCompleteTotal / numEntries : 0;
        out.startToCompleteMax = startToCompleteMax;
        out.wfSpecName = wfSpecName;
        out.totalCompleted = totalCompleted;
        out.totalStarted = totalStarted;
        out.totalErrored = totalErrored;
        out.windowStart = windowStart;
        out.type = type;

        return out;
    }

    public void process(LHStoreWrapper store, ProcessorContext<Void, Void> ctx) {
        WfMetricUpdate previous = store.get(getObjectId(), getClass());
        if (previous != null) {
            merge(previous);
        }
        store.put(this);
        store.put(toResponse());
    }

    public Date getCreatedAt() {
        return windowStart;
    }

    public String getPartitionKey() {
        return wfSpecName;
    }

    public static String getPrefix(MetricsWindowLengthPb type, Date time) {
        return type + "/" + LHUtil.toLhDbFormat(time) + "/";
    }

    public static String getObjectId(
        MetricsWindowLengthPb type,
        Date windowStart,
        String wfSpecName
    ) {
        return type + "/" + LHUtil.toLhDbFormat(windowStart) + "/" + wfSpecName;
    }

    public String getObjectId() {
        return getObjectId(type, windowStart, wfSpecName);
    }
}