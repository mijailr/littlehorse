// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: internal_server.proto

package io.littlehorse.common.proto;

public interface TagPbOrBuilder extends
    // @@protoc_insertion_point(interface_extends:littlehorse.TagPb)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <pre>
   * The following info is also stored in the key of the Tag in the store.
   * </pre>
   *
   * <code>.littlehorse.GetableClassEnumPb object_type = 1;</code>
   * @return The enum numeric value on the wire for objectType.
   */
  int getObjectTypeValue();
  /**
   * <pre>
   * The following info is also stored in the key of the Tag in the store.
   * </pre>
   *
   * <code>.littlehorse.GetableClassEnumPb object_type = 1;</code>
   * @return The objectType.
   */
  io.littlehorse.common.proto.GetableClassEnumPb getObjectType();

  /**
   * <code>repeated .littlehorse.AttributePb attributes = 2;</code>
   */
  java.util.List<io.littlehorse.common.proto.AttributePb> 
      getAttributesList();
  /**
   * <code>repeated .littlehorse.AttributePb attributes = 2;</code>
   */
  io.littlehorse.common.proto.AttributePb getAttributes(int index);
  /**
   * <code>repeated .littlehorse.AttributePb attributes = 2;</code>
   */
  int getAttributesCount();
  /**
   * <code>repeated .littlehorse.AttributePb attributes = 2;</code>
   */
  java.util.List<? extends io.littlehorse.common.proto.AttributePbOrBuilder> 
      getAttributesOrBuilderList();
  /**
   * <code>repeated .littlehorse.AttributePb attributes = 2;</code>
   */
  io.littlehorse.common.proto.AttributePbOrBuilder getAttributesOrBuilder(
      int index);

  /**
   * <code>string described_object_id = 3;</code>
   * @return The describedObjectId.
   */
  java.lang.String getDescribedObjectId();
  /**
   * <code>string described_object_id = 3;</code>
   * @return The bytes for describedObjectId.
   */
  com.google.protobuf.ByteString
      getDescribedObjectIdBytes();

  /**
   * <code>.google.protobuf.Timestamp created = 4;</code>
   * @return Whether the created field is set.
   */
  boolean hasCreated();
  /**
   * <code>.google.protobuf.Timestamp created = 4;</code>
   * @return The created.
   */
  com.google.protobuf.Timestamp getCreated();
  /**
   * <code>.google.protobuf.Timestamp created = 4;</code>
   */
  com.google.protobuf.TimestampOrBuilder getCreatedOrBuilder();

  /**
   * <pre>
   * The following is not stored in the key.
   * </pre>
   *
   * <code>.littlehorse.TagStorageTypePb tag_type = 5;</code>
   * @return The enum numeric value on the wire for tagType.
   */
  int getTagTypeValue();
  /**
   * <pre>
   * The following is not stored in the key.
   * </pre>
   *
   * <code>.littlehorse.TagStorageTypePb tag_type = 5;</code>
   * @return The tagType.
   */
  io.littlehorse.common.proto.TagStorageTypePb getTagType();

  /**
   * <code>string store_key = 7;</code>
   * @return The storeKey.
   */
  java.lang.String getStoreKey();
  /**
   * <code>string store_key = 7;</code>
   * @return The bytes for storeKey.
   */
  com.google.protobuf.ByteString
      getStoreKeyBytes();
}
