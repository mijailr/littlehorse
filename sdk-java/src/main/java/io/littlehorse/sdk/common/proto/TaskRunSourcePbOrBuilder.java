// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: service.proto

package io.littlehorse.sdk.common.proto;

public interface TaskRunSourcePbOrBuilder extends
    // @@protoc_insertion_point(interface_extends:littlehorse.TaskRunSourcePb)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <code>.littlehorse.TaskNodeReferencePb task_node = 1;</code>
   * @return Whether the taskNode field is set.
   */
  boolean hasTaskNode();
  /**
   * <code>.littlehorse.TaskNodeReferencePb task_node = 1;</code>
   * @return The taskNode.
   */
  io.littlehorse.sdk.common.proto.TaskNodeReferencePb getTaskNode();
  /**
   * <code>.littlehorse.TaskNodeReferencePb task_node = 1;</code>
   */
  io.littlehorse.sdk.common.proto.TaskNodeReferencePbOrBuilder getTaskNodeOrBuilder();

  /**
   * <code>.littlehorse.UserTaskTriggerReferencePb user_task_trigger = 2;</code>
   * @return Whether the userTaskTrigger field is set.
   */
  boolean hasUserTaskTrigger();
  /**
   * <code>.littlehorse.UserTaskTriggerReferencePb user_task_trigger = 2;</code>
   * @return The userTaskTrigger.
   */
  io.littlehorse.sdk.common.proto.UserTaskTriggerReferencePb getUserTaskTrigger();
  /**
   * <code>.littlehorse.UserTaskTriggerReferencePb user_task_trigger = 2;</code>
   */
  io.littlehorse.sdk.common.proto.UserTaskTriggerReferencePbOrBuilder getUserTaskTriggerOrBuilder();

  public io.littlehorse.sdk.common.proto.TaskRunSourcePb.TaskRunSourceCase getTaskRunSourceCase();
}