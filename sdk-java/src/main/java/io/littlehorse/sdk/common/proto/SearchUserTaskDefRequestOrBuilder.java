// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: service.proto

package io.littlehorse.sdk.common.proto;

public interface SearchUserTaskDefRequestOrBuilder extends
    // @@protoc_insertion_point(interface_extends:littlehorse.SearchUserTaskDefRequest)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <code>optional bytes bookmark = 1;</code>
   * @return Whether the bookmark field is set.
   */
  boolean hasBookmark();
  /**
   * <code>optional bytes bookmark = 1;</code>
   * @return The bookmark.
   */
  com.google.protobuf.ByteString getBookmark();

  /**
   * <code>optional int32 limit = 2;</code>
   * @return Whether the limit field is set.
   */
  boolean hasLimit();
  /**
   * <code>optional int32 limit = 2;</code>
   * @return The limit.
   */
  int getLimit();

  /**
   * <code>string prefix = 3;</code>
   * @return Whether the prefix field is set.
   */
  boolean hasPrefix();
  /**
   * <code>string prefix = 3;</code>
   * @return The prefix.
   */
  java.lang.String getPrefix();
  /**
   * <code>string prefix = 3;</code>
   * @return The bytes for prefix.
   */
  com.google.protobuf.ByteString
      getPrefixBytes();

  /**
   * <code>string name = 4;</code>
   * @return Whether the name field is set.
   */
  boolean hasName();
  /**
   * <code>string name = 4;</code>
   * @return The name.
   */
  java.lang.String getName();
  /**
   * <code>string name = 4;</code>
   * @return The bytes for name.
   */
  com.google.protobuf.ByteString
      getNameBytes();

  public io.littlehorse.sdk.common.proto.SearchUserTaskDefRequest.UserTaskDefCriteriaCase getUserTaskDefCriteriaCase();
}