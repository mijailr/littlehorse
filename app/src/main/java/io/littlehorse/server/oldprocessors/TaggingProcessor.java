package io.littlehorse.server.oldprocessors;

import io.littlehorse.common.LHConstants;
import io.littlehorse.common.model.GETable;
import io.littlehorse.common.model.server.IndexEntryAction;
import io.littlehorse.common.model.server.Tag;
import io.littlehorse.common.model.server.Tags;
import io.littlehorse.common.proto.IndexActionEnum;
import io.littlehorse.server.oldprocessors.util.GenericOutput;
import java.util.ArrayList;
import java.util.List;
import org.apache.kafka.streams.processor.api.Processor;
import org.apache.kafka.streams.processor.api.ProcessorContext;
import org.apache.kafka.streams.processor.api.Record;
import org.apache.kafka.streams.state.KeyValueStore;

public class TaggingProcessor
    implements Processor<String, GenericOutput, String, IndexEntryAction> {

    private ProcessorContext<String, IndexEntryAction> ctx;
    private KeyValueStore<String, Tags> store;
    private String storeName;

    public TaggingProcessor(Class<? extends GETable<?>> cls) {
        this.storeName = GETable.getTagStoreName(cls);
    }

    public void init(final ProcessorContext<String, IndexEntryAction> ctx) {
        this.ctx = ctx;
        this.store = ctx.getStateStore(storeName);
    }

    public void process(final Record<String, GenericOutput> record) {
        String objectId = new String(
            record.headers().lastHeader(LHConstants.OBJECT_ID_HEADER).value()
        );
        GETable<?> newT = record.value().thingToTag;

        Tags oldEntriesObj = store.get(objectId);
        List<Tag> oldIdx =
            (oldEntriesObj == null ? new ArrayList<>() : oldEntriesObj.entries);

        List<Tag> newIdx = (newT == null ? new ArrayList<>() : newT.getTags());

        if (newT == null) {
            store.delete(objectId);
        } else {
            Tags newIdxEntries = new Tags();
            newIdxEntries.entries = newIdx;
            store.put(objectId, newIdxEntries);
        }

        for (Tag ie : newIdx) {
            if (!oldIdx.contains(ie)) {
                IndexEntryAction action = new IndexEntryAction();
                action.action = IndexActionEnum.CREATE_IDX_ENTRY;
                action.indexEntry = ie;
                Record<String, IndexEntryAction> rec = new Record<>(
                    ie.getPartitionKey(),
                    action,
                    ie.createdAt.getTime()
                );
                rec.headers().add(LHConstants.OBJECT_ID_HEADER, objectId.getBytes());
                ctx.forward(rec);
            }
        }
        for (Tag ie : oldIdx) {
            if (!newIdx.contains(ie)) {
                IndexEntryAction action = new IndexEntryAction();
                action.action = IndexActionEnum.DELETE_IDX_ENTRY;
                action.indexEntry = ie;
                ctx.forward(
                    new Record<String, IndexEntryAction>(
                        ie.getPartitionKey(),
                        action,
                        ie.createdAt.getTime()
                    )
                );
            }
        }
    }
}