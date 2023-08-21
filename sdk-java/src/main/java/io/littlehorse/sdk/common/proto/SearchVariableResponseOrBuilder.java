// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: service.proto

package io.littlehorse.sdk.common.proto;

public interface SearchVariableResponseOrBuilder extends
    // @@protoc_insertion_point(interface_extends:littlehorse.SearchVariableResponse)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <code>.littlehorse.LHResponseCode code = 1;</code>
   * @return The enum numeric value on the wire for code.
   */
  int getCodeValue();
  /**
   * <code>.littlehorse.LHResponseCode code = 1;</code>
   * @return The code.
   */
  io.littlehorse.sdk.common.proto.LHResponseCode getCode();

  /**
   * <code>optional string message = 2;</code>
   * @return Whether the message field is set.
   */
  boolean hasMessage();
  /**
   * <code>optional string message = 2;</code>
   * @return The message.
   */
  java.lang.String getMessage();
  /**
   * <code>optional string message = 2;</code>
   * @return The bytes for message.
   */
  com.google.protobuf.ByteString
      getMessageBytes();

  /**
   * <code>repeated .littlehorse.VariableId results = 3;</code>
   */
  java.util.List<io.littlehorse.sdk.common.proto.VariableId> 
      getResultsList();
  /**
   * <code>repeated .littlehorse.VariableId results = 3;</code>
   */
  io.littlehorse.sdk.common.proto.VariableId getResults(int index);
  /**
   * <code>repeated .littlehorse.VariableId results = 3;</code>
   */
  int getResultsCount();
  /**
   * <code>repeated .littlehorse.VariableId results = 3;</code>
   */
  java.util.List<? extends io.littlehorse.sdk.common.proto.VariableIdOrBuilder> 
      getResultsOrBuilderList();
  /**
   * <code>repeated .littlehorse.VariableId results = 3;</code>
   */
  io.littlehorse.sdk.common.proto.VariableIdOrBuilder getResultsOrBuilder(
      int index);

  /**
   * <code>optional bytes bookmark = 4;</code>
   * @return Whether the bookmark field is set.
   */
  boolean hasBookmark();
  /**
   * <code>optional bytes bookmark = 4;</code>
   * @return The bookmark.
   */
  com.google.protobuf.ByteString getBookmark();
}