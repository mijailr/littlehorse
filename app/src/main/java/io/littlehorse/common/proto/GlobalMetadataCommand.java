// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: global_metadata_command.proto

package io.littlehorse.common.proto;

public final class GlobalMetadataCommand {
  private GlobalMetadataCommand() {}
  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistryLite registry) {
  }

  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistry registry) {
    registerAllExtensions(
        (com.google.protobuf.ExtensionRegistryLite) registry);
  }
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_lh_proto_MetadataCmdPb_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_lh_proto_MetadataCmdPb_fieldAccessorTable;

  public static com.google.protobuf.Descriptors.FileDescriptor
      getDescriptor() {
    return descriptor;
  }
  private static  com.google.protobuf.Descriptors.FileDescriptor
      descriptor;
  static {
    java.lang.String[] descriptorData = {
      "\n\035global_metadata_command.proto\022\010lh_prot" +
      "o\032\rwf_spec.proto\"\303\001\n\rMetadataCmdPb\022-\n\017wf" +
      "_spec_created\030\001 \001(\0132\022.lh_proto.WfSpecPbH" +
      "\000\022/\n\020task_def_created\030\002 \001(\0132\023.lh_proto.T" +
      "askDefPbH\000\022B\n\032external_event_def_created" +
      "\030\003 \001(\0132\034.lh_proto.ExternalEventDefPbH\000B\016" +
      "\n\014metadata_cmdB(\n\033io.littlehorse.common." +
      "protoP\001Z\007.;modelb\006proto3"
    };
    descriptor = com.google.protobuf.Descriptors.FileDescriptor
      .internalBuildGeneratedFileFrom(descriptorData,
        new com.google.protobuf.Descriptors.FileDescriptor[] {
          io.littlehorse.common.proto.WfSpec.getDescriptor(),
        });
    internal_static_lh_proto_MetadataCmdPb_descriptor =
      getDescriptor().getMessageTypes().get(0);
    internal_static_lh_proto_MetadataCmdPb_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_lh_proto_MetadataCmdPb_descriptor,
        new java.lang.String[] { "WfSpecCreated", "TaskDefCreated", "ExternalEventDefCreated", "MetadataCmd", });
    io.littlehorse.common.proto.WfSpec.getDescriptor();
  }

  // @@protoc_insertion_point(outer_class_scope)
}