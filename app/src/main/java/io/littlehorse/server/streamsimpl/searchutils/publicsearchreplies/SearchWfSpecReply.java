package io.littlehorse.server.streamsimpl.searchutils.publicsearchreplies;

import com.google.protobuf.ByteString;
import com.google.protobuf.MessageOrBuilder;
import io.littlehorse.common.model.meta.WfSpec;
import io.littlehorse.jlib.common.proto.SearchWfSpecReplyPb;
import io.littlehorse.jlib.common.proto.SearchWfSpecReplyPbOrBuilder;
import io.littlehorse.jlib.common.proto.WfSpecIdPb;
import io.littlehorse.server.streamsimpl.searchutils.LHPublicSearchReply;

public class SearchWfSpecReply extends LHPublicSearchReply<SearchWfSpecReplyPb> {

    public Class<SearchWfSpecReplyPb> getProtoBaseClass() {
        return SearchWfSpecReplyPb.class;
    }

    public SearchWfSpecReplyPb.Builder toProto() {
        SearchWfSpecReplyPb.Builder out = SearchWfSpecReplyPb
            .newBuilder()
            .setCode(code);
        if (message != null) out.setMessage(message);
        if (bookmark != null) out.setBookmark(ByteString.copyFrom(bookmark));

        for (String objectId : objectIds) {
            out.addIds(WfSpec.parseId(objectId));
        }

        return out;
    }

    public void initFrom(MessageOrBuilder proto) {
        SearchWfSpecReplyPbOrBuilder p = (SearchWfSpecReplyPbOrBuilder) proto;
        code = p.getCode();
        if (p.hasMessage()) message = p.getMessage();
        if (p.hasBookmark()) bookmark = p.getBookmark().toByteArray();

        for (WfSpecIdPb id : p.getIdsList()) {
            objectIds.add(WfSpec.getObjectId(id));
        }
    }
}