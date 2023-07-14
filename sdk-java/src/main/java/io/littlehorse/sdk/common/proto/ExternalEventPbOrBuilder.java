// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: service.proto

package io.littlehorse.sdk.common.proto;

public interface ExternalEventPbOrBuilder extends
    // @@protoc_insertion_point(interface_extends:littlehorse.ExternalEventPb)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <code>string wf_run_id = 1;</code>
   * @return The wfRunId.
   */
  java.lang.String getWfRunId();
  /**
   * <code>string wf_run_id = 1;</code>
   * @return The bytes for wfRunId.
   */
  com.google.protobuf.ByteString
      getWfRunIdBytes();

  /**
   * <code>string external_event_def_name = 2;</code>
   * @return The externalEventDefName.
   */
  java.lang.String getExternalEventDefName();
  /**
   * <code>string external_event_def_name = 2;</code>
   * @return The bytes for externalEventDefName.
   */
  com.google.protobuf.ByteString
      getExternalEventDefNameBytes();

  /**
   * <code>string guid = 3;</code>
   * @return The guid.
   */
  java.lang.String getGuid();
  /**
   * <code>string guid = 3;</code>
   * @return The bytes for guid.
   */
  com.google.protobuf.ByteString
      getGuidBytes();

  /**
   * <code>.google.protobuf.Timestamp created_at = 4;</code>
   * @return Whether the createdAt field is set.
   */
  boolean hasCreatedAt();
  /**
   * <code>.google.protobuf.Timestamp created_at = 4;</code>
   * @return The createdAt.
   */
  com.google.protobuf.Timestamp getCreatedAt();
  /**
   * <code>.google.protobuf.Timestamp created_at = 4;</code>
   */
  com.google.protobuf.TimestampOrBuilder getCreatedAtOrBuilder();

  /**
   * <code>.littlehorse.VariableValuePb content = 5;</code>
   * @return Whether the content field is set.
   */
  boolean hasContent();
  /**
   * <code>.littlehorse.VariableValuePb content = 5;</code>
   * @return The content.
   */
  io.littlehorse.sdk.common.proto.VariableValuePb getContent();
  /**
   * <code>.littlehorse.VariableValuePb content = 5;</code>
   */
  io.littlehorse.sdk.common.proto.VariableValuePbOrBuilder getContentOrBuilder();

  /**
   * <code>optional int32 thread_run_number = 6;</code>
   * @return Whether the threadRunNumber field is set.
   */
  boolean hasThreadRunNumber();
  /**
   * <code>optional int32 thread_run_number = 6;</code>
   * @return The threadRunNumber.
   */
  int getThreadRunNumber();

  /**
   * <code>optional int32 node_run_position = 7;</code>
   * @return Whether the nodeRunPosition field is set.
   */
  boolean hasNodeRunPosition();
  /**
   * <code>optional int32 node_run_position = 7;</code>
   * @return The nodeRunPosition.
   */
  int getNodeRunPosition();

  /**
   * <code>bool claimed = 8;</code>
   * @return The claimed.
   */
  boolean getClaimed();
}