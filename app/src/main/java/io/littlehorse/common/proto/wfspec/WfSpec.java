// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: wf_spec.proto

package io.littlehorse.common.proto.wfspec;

public final class WfSpec {
  private WfSpec() {}
  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistryLite registry) {
  }

  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistry registry) {
    registerAllExtensions(
        (com.google.protobuf.ExtensionRegistryLite) registry);
  }
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_lh_proto_EdgePb_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_lh_proto_EdgePb_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_lh_proto_NodePb_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_lh_proto_NodePb_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_lh_proto_TaskNodePb_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_lh_proto_TaskNodePb_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_lh_proto_EntrypointNodePb_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_lh_proto_EntrypointNodePb_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_lh_proto_ExitNodePb_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_lh_proto_ExitNodePb_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_lh_proto_ThreadSpecPb_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_lh_proto_ThreadSpecPb_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_lh_proto_ThreadSpecPb_NodesEntry_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_lh_proto_ThreadSpecPb_NodesEntry_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_lh_proto_WfSpecPb_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_lh_proto_WfSpecPb_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_lh_proto_WfSpecPb_ThreadSpecsEntry_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_lh_proto_WfSpecPb_ThreadSpecsEntry_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_lh_proto_TaskDefPb_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_lh_proto_TaskDefPb_fieldAccessorTable;

  public static com.google.protobuf.Descriptors.FileDescriptor
      getDescriptor() {
    return descriptor;
  }
  private static  com.google.protobuf.Descriptors.FileDescriptor
      descriptor;
  static {
    java.lang.String[] descriptorData = {
      "\n\rwf_spec.proto\022\010lh_proto\032\037google/protob" +
      "uf/timestamp.proto\032\016lh_proto.proto\" \n\006Ed" +
      "gePb\022\026\n\016sink_node_name\030\001 \001(\t\"\270\001\n\006NodePb\022" +
      "(\n\016outgoing_edges\030\001 \003(\0132\020.lh_proto.EdgeP" +
      "b\022$\n\004task\030\002 \001(\0132\024.lh_proto.TaskNodePbH\000\022" +
      "0\n\nentrypoint\030\003 \001(\0132\032.lh_proto.Entrypoin" +
      "tNodePbH\000\022$\n\004exit\030\004 \001(\0132\024.lh_proto.ExitN" +
      "odePbH\000B\006\n\004node\"f\n\nTaskNodePb\022\025\n\rtask_de" +
      "f_name\030\001 \001(\t\022\034\n\017timeout_seconds\030\002 \001(\005H\000\210" +
      "\001\001\022\017\n\007retries\030\003 \001(\005B\022\n\020_timeout_seconds\"" +
      "\022\n\020EntrypointNodePb\"\014\n\nExitNodePb\"\200\001\n\014Th" +
      "readSpecPb\0220\n\005nodes\030\001 \003(\0132!.lh_proto.Thr" +
      "eadSpecPb.NodesEntry\032>\n\nNodesEntry\022\013\n\003ke" +
      "y\030\001 \001(\t\022\037\n\005value\030\002 \001(\0132\020.lh_proto.NodePb" +
      ":\0028\001\"\356\002\n\010WfSpecPb\022\n\n\002id\030\001 \001(\t\022.\n\ncreated" +
      "_at\030\002 \001(\0132\032.google.protobuf.Timestamp\022.\n" +
      "\nupdated_at\030\003 \001(\0132\032.google.protobuf.Time" +
      "stamp\0229\n\014thread_specs\030\004 \003(\0132#.lh_proto.W" +
      "fSpecPb.ThreadSpecsEntry\022\036\n\026entrypoint_t" +
      "hread_name\030\005 \001(\t\022$\n\006status\030\006 \001(\0162\024.lh_pr" +
      "oto.LHStatusPb\022\014\n\004name\030\007 \001(\t\022\033\n\023last_upd" +
      "ated_offset\030\010 \001(\003\032J\n\020ThreadSpecsEntry\022\013\n" +
      "\003key\030\001 \001(\t\022%\n\005value\030\002 \001(\0132\026.lh_proto.Thr" +
      "eadSpecPb:\0028\001\"I\n\tTaskDefPb\022\014\n\004name\030\001 \001(\t" +
      "\022.\n\ncreated_at\030\002 \001(\0132\032.google.protobuf.T" +
      "imestampB/\n\"io.littlehorse.common.proto." +
      "wfspecP\001Z\007.;modelb\006proto3"
    };
    descriptor = com.google.protobuf.Descriptors.FileDescriptor
      .internalBuildGeneratedFileFrom(descriptorData,
        new com.google.protobuf.Descriptors.FileDescriptor[] {
          com.google.protobuf.TimestampProto.getDescriptor(),
          io.littlehorse.common.proto.LhProto.getDescriptor(),
        });
    internal_static_lh_proto_EdgePb_descriptor =
      getDescriptor().getMessageTypes().get(0);
    internal_static_lh_proto_EdgePb_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_lh_proto_EdgePb_descriptor,
        new java.lang.String[] { "SinkNodeName", });
    internal_static_lh_proto_NodePb_descriptor =
      getDescriptor().getMessageTypes().get(1);
    internal_static_lh_proto_NodePb_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_lh_proto_NodePb_descriptor,
        new java.lang.String[] { "OutgoingEdges", "Task", "Entrypoint", "Exit", "Node", });
    internal_static_lh_proto_TaskNodePb_descriptor =
      getDescriptor().getMessageTypes().get(2);
    internal_static_lh_proto_TaskNodePb_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_lh_proto_TaskNodePb_descriptor,
        new java.lang.String[] { "TaskDefName", "TimeoutSeconds", "Retries", "TimeoutSeconds", });
    internal_static_lh_proto_EntrypointNodePb_descriptor =
      getDescriptor().getMessageTypes().get(3);
    internal_static_lh_proto_EntrypointNodePb_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_lh_proto_EntrypointNodePb_descriptor,
        new java.lang.String[] { });
    internal_static_lh_proto_ExitNodePb_descriptor =
      getDescriptor().getMessageTypes().get(4);
    internal_static_lh_proto_ExitNodePb_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_lh_proto_ExitNodePb_descriptor,
        new java.lang.String[] { });
    internal_static_lh_proto_ThreadSpecPb_descriptor =
      getDescriptor().getMessageTypes().get(5);
    internal_static_lh_proto_ThreadSpecPb_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_lh_proto_ThreadSpecPb_descriptor,
        new java.lang.String[] { "Nodes", });
    internal_static_lh_proto_ThreadSpecPb_NodesEntry_descriptor =
      internal_static_lh_proto_ThreadSpecPb_descriptor.getNestedTypes().get(0);
    internal_static_lh_proto_ThreadSpecPb_NodesEntry_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_lh_proto_ThreadSpecPb_NodesEntry_descriptor,
        new java.lang.String[] { "Key", "Value", });
    internal_static_lh_proto_WfSpecPb_descriptor =
      getDescriptor().getMessageTypes().get(6);
    internal_static_lh_proto_WfSpecPb_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_lh_proto_WfSpecPb_descriptor,
        new java.lang.String[] { "Id", "CreatedAt", "UpdatedAt", "ThreadSpecs", "EntrypointThreadName", "Status", "Name", "LastUpdatedOffset", });
    internal_static_lh_proto_WfSpecPb_ThreadSpecsEntry_descriptor =
      internal_static_lh_proto_WfSpecPb_descriptor.getNestedTypes().get(0);
    internal_static_lh_proto_WfSpecPb_ThreadSpecsEntry_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_lh_proto_WfSpecPb_ThreadSpecsEntry_descriptor,
        new java.lang.String[] { "Key", "Value", });
    internal_static_lh_proto_TaskDefPb_descriptor =
      getDescriptor().getMessageTypes().get(7);
    internal_static_lh_proto_TaskDefPb_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_lh_proto_TaskDefPb_descriptor,
        new java.lang.String[] { "Name", "CreatedAt", });
    com.google.protobuf.TimestampProto.getDescriptor();
    io.littlehorse.common.proto.LhProto.getDescriptor();
  }

  // @@protoc_insertion_point(outer_class_scope)
}
