// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: node_run.proto

package io.littlehorse.sdk.common.proto;

/**
 * Protobuf type {@code littlehorse.ExternalEventRun}
 */
public final class ExternalEventRun extends
    com.google.protobuf.GeneratedMessageV3 implements
    // @@protoc_insertion_point(message_implements:littlehorse.ExternalEventRun)
    ExternalEventRunOrBuilder {
private static final long serialVersionUID = 0L;
  // Use ExternalEventRun.newBuilder() to construct.
  private ExternalEventRun(com.google.protobuf.GeneratedMessageV3.Builder<?> builder) {
    super(builder);
  }
  private ExternalEventRun() {
    externalEventDefName_ = "";
  }

  @java.lang.Override
  @SuppressWarnings({"unused"})
  protected java.lang.Object newInstance(
      UnusedPrivateParameter unused) {
    return new ExternalEventRun();
  }

  @java.lang.Override
  public final com.google.protobuf.UnknownFieldSet
  getUnknownFields() {
    return this.unknownFields;
  }
  public static final com.google.protobuf.Descriptors.Descriptor
      getDescriptor() {
    return io.littlehorse.sdk.common.proto.NodeRunOuterClass.internal_static_littlehorse_ExternalEventRun_descriptor;
  }

  @java.lang.Override
  protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internalGetFieldAccessorTable() {
    return io.littlehorse.sdk.common.proto.NodeRunOuterClass.internal_static_littlehorse_ExternalEventRun_fieldAccessorTable
        .ensureFieldAccessorsInitialized(
            io.littlehorse.sdk.common.proto.ExternalEventRun.class, io.littlehorse.sdk.common.proto.ExternalEventRun.Builder.class);
  }

  private int bitField0_;
  public static final int EXTERNAL_EVENT_DEF_NAME_FIELD_NUMBER = 1;
  @SuppressWarnings("serial")
  private volatile java.lang.Object externalEventDefName_ = "";
  /**
   * <code>string external_event_def_name = 1;</code>
   * @return The externalEventDefName.
   */
  @java.lang.Override
  public java.lang.String getExternalEventDefName() {
    java.lang.Object ref = externalEventDefName_;
    if (ref instanceof java.lang.String) {
      return (java.lang.String) ref;
    } else {
      com.google.protobuf.ByteString bs = 
          (com.google.protobuf.ByteString) ref;
      java.lang.String s = bs.toStringUtf8();
      externalEventDefName_ = s;
      return s;
    }
  }
  /**
   * <code>string external_event_def_name = 1;</code>
   * @return The bytes for externalEventDefName.
   */
  @java.lang.Override
  public com.google.protobuf.ByteString
      getExternalEventDefNameBytes() {
    java.lang.Object ref = externalEventDefName_;
    if (ref instanceof java.lang.String) {
      com.google.protobuf.ByteString b = 
          com.google.protobuf.ByteString.copyFromUtf8(
              (java.lang.String) ref);
      externalEventDefName_ = b;
      return b;
    } else {
      return (com.google.protobuf.ByteString) ref;
    }
  }

  public static final int EVENT_TIME_FIELD_NUMBER = 2;
  private com.google.protobuf.Timestamp eventTime_;
  /**
   * <code>optional .google.protobuf.Timestamp event_time = 2;</code>
   * @return Whether the eventTime field is set.
   */
  @java.lang.Override
  public boolean hasEventTime() {
    return ((bitField0_ & 0x00000001) != 0);
  }
  /**
   * <code>optional .google.protobuf.Timestamp event_time = 2;</code>
   * @return The eventTime.
   */
  @java.lang.Override
  public com.google.protobuf.Timestamp getEventTime() {
    return eventTime_ == null ? com.google.protobuf.Timestamp.getDefaultInstance() : eventTime_;
  }
  /**
   * <code>optional .google.protobuf.Timestamp event_time = 2;</code>
   */
  @java.lang.Override
  public com.google.protobuf.TimestampOrBuilder getEventTimeOrBuilder() {
    return eventTime_ == null ? com.google.protobuf.Timestamp.getDefaultInstance() : eventTime_;
  }

  public static final int EXTERNAL_EVENT_ID_FIELD_NUMBER = 3;
  private io.littlehorse.sdk.common.proto.ExternalEventId externalEventId_;
  /**
   * <code>optional .littlehorse.ExternalEventId external_event_id = 3;</code>
   * @return Whether the externalEventId field is set.
   */
  @java.lang.Override
  public boolean hasExternalEventId() {
    return ((bitField0_ & 0x00000002) != 0);
  }
  /**
   * <code>optional .littlehorse.ExternalEventId external_event_id = 3;</code>
   * @return The externalEventId.
   */
  @java.lang.Override
  public io.littlehorse.sdk.common.proto.ExternalEventId getExternalEventId() {
    return externalEventId_ == null ? io.littlehorse.sdk.common.proto.ExternalEventId.getDefaultInstance() : externalEventId_;
  }
  /**
   * <code>optional .littlehorse.ExternalEventId external_event_id = 3;</code>
   */
  @java.lang.Override
  public io.littlehorse.sdk.common.proto.ExternalEventIdOrBuilder getExternalEventIdOrBuilder() {
    return externalEventId_ == null ? io.littlehorse.sdk.common.proto.ExternalEventId.getDefaultInstance() : externalEventId_;
  }

  private byte memoizedIsInitialized = -1;
  @java.lang.Override
  public final boolean isInitialized() {
    byte isInitialized = memoizedIsInitialized;
    if (isInitialized == 1) return true;
    if (isInitialized == 0) return false;

    memoizedIsInitialized = 1;
    return true;
  }

  @java.lang.Override
  public void writeTo(com.google.protobuf.CodedOutputStream output)
                      throws java.io.IOException {
    if (!com.google.protobuf.GeneratedMessageV3.isStringEmpty(externalEventDefName_)) {
      com.google.protobuf.GeneratedMessageV3.writeString(output, 1, externalEventDefName_);
    }
    if (((bitField0_ & 0x00000001) != 0)) {
      output.writeMessage(2, getEventTime());
    }
    if (((bitField0_ & 0x00000002) != 0)) {
      output.writeMessage(3, getExternalEventId());
    }
    getUnknownFields().writeTo(output);
  }

  @java.lang.Override
  public int getSerializedSize() {
    int size = memoizedSize;
    if (size != -1) return size;

    size = 0;
    if (!com.google.protobuf.GeneratedMessageV3.isStringEmpty(externalEventDefName_)) {
      size += com.google.protobuf.GeneratedMessageV3.computeStringSize(1, externalEventDefName_);
    }
    if (((bitField0_ & 0x00000001) != 0)) {
      size += com.google.protobuf.CodedOutputStream
        .computeMessageSize(2, getEventTime());
    }
    if (((bitField0_ & 0x00000002) != 0)) {
      size += com.google.protobuf.CodedOutputStream
        .computeMessageSize(3, getExternalEventId());
    }
    size += getUnknownFields().getSerializedSize();
    memoizedSize = size;
    return size;
  }

  @java.lang.Override
  public boolean equals(final java.lang.Object obj) {
    if (obj == this) {
     return true;
    }
    if (!(obj instanceof io.littlehorse.sdk.common.proto.ExternalEventRun)) {
      return super.equals(obj);
    }
    io.littlehorse.sdk.common.proto.ExternalEventRun other = (io.littlehorse.sdk.common.proto.ExternalEventRun) obj;

    if (!getExternalEventDefName()
        .equals(other.getExternalEventDefName())) return false;
    if (hasEventTime() != other.hasEventTime()) return false;
    if (hasEventTime()) {
      if (!getEventTime()
          .equals(other.getEventTime())) return false;
    }
    if (hasExternalEventId() != other.hasExternalEventId()) return false;
    if (hasExternalEventId()) {
      if (!getExternalEventId()
          .equals(other.getExternalEventId())) return false;
    }
    if (!getUnknownFields().equals(other.getUnknownFields())) return false;
    return true;
  }

  @java.lang.Override
  public int hashCode() {
    if (memoizedHashCode != 0) {
      return memoizedHashCode;
    }
    int hash = 41;
    hash = (19 * hash) + getDescriptor().hashCode();
    hash = (37 * hash) + EXTERNAL_EVENT_DEF_NAME_FIELD_NUMBER;
    hash = (53 * hash) + getExternalEventDefName().hashCode();
    if (hasEventTime()) {
      hash = (37 * hash) + EVENT_TIME_FIELD_NUMBER;
      hash = (53 * hash) + getEventTime().hashCode();
    }
    if (hasExternalEventId()) {
      hash = (37 * hash) + EXTERNAL_EVENT_ID_FIELD_NUMBER;
      hash = (53 * hash) + getExternalEventId().hashCode();
    }
    hash = (29 * hash) + getUnknownFields().hashCode();
    memoizedHashCode = hash;
    return hash;
  }

  public static io.littlehorse.sdk.common.proto.ExternalEventRun parseFrom(
      java.nio.ByteBuffer data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static io.littlehorse.sdk.common.proto.ExternalEventRun parseFrom(
      java.nio.ByteBuffer data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static io.littlehorse.sdk.common.proto.ExternalEventRun parseFrom(
      com.google.protobuf.ByteString data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static io.littlehorse.sdk.common.proto.ExternalEventRun parseFrom(
      com.google.protobuf.ByteString data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static io.littlehorse.sdk.common.proto.ExternalEventRun parseFrom(byte[] data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static io.littlehorse.sdk.common.proto.ExternalEventRun parseFrom(
      byte[] data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static io.littlehorse.sdk.common.proto.ExternalEventRun parseFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static io.littlehorse.sdk.common.proto.ExternalEventRun parseFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input, extensionRegistry);
  }
  public static io.littlehorse.sdk.common.proto.ExternalEventRun parseDelimitedFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input);
  }
  public static io.littlehorse.sdk.common.proto.ExternalEventRun parseDelimitedFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input, extensionRegistry);
  }
  public static io.littlehorse.sdk.common.proto.ExternalEventRun parseFrom(
      com.google.protobuf.CodedInputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static io.littlehorse.sdk.common.proto.ExternalEventRun parseFrom(
      com.google.protobuf.CodedInputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input, extensionRegistry);
  }

  @java.lang.Override
  public Builder newBuilderForType() { return newBuilder(); }
  public static Builder newBuilder() {
    return DEFAULT_INSTANCE.toBuilder();
  }
  public static Builder newBuilder(io.littlehorse.sdk.common.proto.ExternalEventRun prototype) {
    return DEFAULT_INSTANCE.toBuilder().mergeFrom(prototype);
  }
  @java.lang.Override
  public Builder toBuilder() {
    return this == DEFAULT_INSTANCE
        ? new Builder() : new Builder().mergeFrom(this);
  }

  @java.lang.Override
  protected Builder newBuilderForType(
      com.google.protobuf.GeneratedMessageV3.BuilderParent parent) {
    Builder builder = new Builder(parent);
    return builder;
  }
  /**
   * Protobuf type {@code littlehorse.ExternalEventRun}
   */
  public static final class Builder extends
      com.google.protobuf.GeneratedMessageV3.Builder<Builder> implements
      // @@protoc_insertion_point(builder_implements:littlehorse.ExternalEventRun)
      io.littlehorse.sdk.common.proto.ExternalEventRunOrBuilder {
    public static final com.google.protobuf.Descriptors.Descriptor
        getDescriptor() {
      return io.littlehorse.sdk.common.proto.NodeRunOuterClass.internal_static_littlehorse_ExternalEventRun_descriptor;
    }

    @java.lang.Override
    protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
        internalGetFieldAccessorTable() {
      return io.littlehorse.sdk.common.proto.NodeRunOuterClass.internal_static_littlehorse_ExternalEventRun_fieldAccessorTable
          .ensureFieldAccessorsInitialized(
              io.littlehorse.sdk.common.proto.ExternalEventRun.class, io.littlehorse.sdk.common.proto.ExternalEventRun.Builder.class);
    }

    // Construct using io.littlehorse.sdk.common.proto.ExternalEventRun.newBuilder()
    private Builder() {
      maybeForceBuilderInitialization();
    }

    private Builder(
        com.google.protobuf.GeneratedMessageV3.BuilderParent parent) {
      super(parent);
      maybeForceBuilderInitialization();
    }
    private void maybeForceBuilderInitialization() {
      if (com.google.protobuf.GeneratedMessageV3
              .alwaysUseFieldBuilders) {
        getEventTimeFieldBuilder();
        getExternalEventIdFieldBuilder();
      }
    }
    @java.lang.Override
    public Builder clear() {
      super.clear();
      bitField0_ = 0;
      externalEventDefName_ = "";
      eventTime_ = null;
      if (eventTimeBuilder_ != null) {
        eventTimeBuilder_.dispose();
        eventTimeBuilder_ = null;
      }
      externalEventId_ = null;
      if (externalEventIdBuilder_ != null) {
        externalEventIdBuilder_.dispose();
        externalEventIdBuilder_ = null;
      }
      return this;
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.Descriptor
        getDescriptorForType() {
      return io.littlehorse.sdk.common.proto.NodeRunOuterClass.internal_static_littlehorse_ExternalEventRun_descriptor;
    }

    @java.lang.Override
    public io.littlehorse.sdk.common.proto.ExternalEventRun getDefaultInstanceForType() {
      return io.littlehorse.sdk.common.proto.ExternalEventRun.getDefaultInstance();
    }

    @java.lang.Override
    public io.littlehorse.sdk.common.proto.ExternalEventRun build() {
      io.littlehorse.sdk.common.proto.ExternalEventRun result = buildPartial();
      if (!result.isInitialized()) {
        throw newUninitializedMessageException(result);
      }
      return result;
    }

    @java.lang.Override
    public io.littlehorse.sdk.common.proto.ExternalEventRun buildPartial() {
      io.littlehorse.sdk.common.proto.ExternalEventRun result = new io.littlehorse.sdk.common.proto.ExternalEventRun(this);
      if (bitField0_ != 0) { buildPartial0(result); }
      onBuilt();
      return result;
    }

    private void buildPartial0(io.littlehorse.sdk.common.proto.ExternalEventRun result) {
      int from_bitField0_ = bitField0_;
      if (((from_bitField0_ & 0x00000001) != 0)) {
        result.externalEventDefName_ = externalEventDefName_;
      }
      int to_bitField0_ = 0;
      if (((from_bitField0_ & 0x00000002) != 0)) {
        result.eventTime_ = eventTimeBuilder_ == null
            ? eventTime_
            : eventTimeBuilder_.build();
        to_bitField0_ |= 0x00000001;
      }
      if (((from_bitField0_ & 0x00000004) != 0)) {
        result.externalEventId_ = externalEventIdBuilder_ == null
            ? externalEventId_
            : externalEventIdBuilder_.build();
        to_bitField0_ |= 0x00000002;
      }
      result.bitField0_ |= to_bitField0_;
    }

    @java.lang.Override
    public Builder clone() {
      return super.clone();
    }
    @java.lang.Override
    public Builder setField(
        com.google.protobuf.Descriptors.FieldDescriptor field,
        java.lang.Object value) {
      return super.setField(field, value);
    }
    @java.lang.Override
    public Builder clearField(
        com.google.protobuf.Descriptors.FieldDescriptor field) {
      return super.clearField(field);
    }
    @java.lang.Override
    public Builder clearOneof(
        com.google.protobuf.Descriptors.OneofDescriptor oneof) {
      return super.clearOneof(oneof);
    }
    @java.lang.Override
    public Builder setRepeatedField(
        com.google.protobuf.Descriptors.FieldDescriptor field,
        int index, java.lang.Object value) {
      return super.setRepeatedField(field, index, value);
    }
    @java.lang.Override
    public Builder addRepeatedField(
        com.google.protobuf.Descriptors.FieldDescriptor field,
        java.lang.Object value) {
      return super.addRepeatedField(field, value);
    }
    @java.lang.Override
    public Builder mergeFrom(com.google.protobuf.Message other) {
      if (other instanceof io.littlehorse.sdk.common.proto.ExternalEventRun) {
        return mergeFrom((io.littlehorse.sdk.common.proto.ExternalEventRun)other);
      } else {
        super.mergeFrom(other);
        return this;
      }
    }

    public Builder mergeFrom(io.littlehorse.sdk.common.proto.ExternalEventRun other) {
      if (other == io.littlehorse.sdk.common.proto.ExternalEventRun.getDefaultInstance()) return this;
      if (!other.getExternalEventDefName().isEmpty()) {
        externalEventDefName_ = other.externalEventDefName_;
        bitField0_ |= 0x00000001;
        onChanged();
      }
      if (other.hasEventTime()) {
        mergeEventTime(other.getEventTime());
      }
      if (other.hasExternalEventId()) {
        mergeExternalEventId(other.getExternalEventId());
      }
      this.mergeUnknownFields(other.getUnknownFields());
      onChanged();
      return this;
    }

    @java.lang.Override
    public final boolean isInitialized() {
      return true;
    }

    @java.lang.Override
    public Builder mergeFrom(
        com.google.protobuf.CodedInputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws java.io.IOException {
      if (extensionRegistry == null) {
        throw new java.lang.NullPointerException();
      }
      try {
        boolean done = false;
        while (!done) {
          int tag = input.readTag();
          switch (tag) {
            case 0:
              done = true;
              break;
            case 10: {
              externalEventDefName_ = input.readStringRequireUtf8();
              bitField0_ |= 0x00000001;
              break;
            } // case 10
            case 18: {
              input.readMessage(
                  getEventTimeFieldBuilder().getBuilder(),
                  extensionRegistry);
              bitField0_ |= 0x00000002;
              break;
            } // case 18
            case 26: {
              input.readMessage(
                  getExternalEventIdFieldBuilder().getBuilder(),
                  extensionRegistry);
              bitField0_ |= 0x00000004;
              break;
            } // case 26
            default: {
              if (!super.parseUnknownField(input, extensionRegistry, tag)) {
                done = true; // was an endgroup tag
              }
              break;
            } // default:
          } // switch (tag)
        } // while (!done)
      } catch (com.google.protobuf.InvalidProtocolBufferException e) {
        throw e.unwrapIOException();
      } finally {
        onChanged();
      } // finally
      return this;
    }
    private int bitField0_;

    private java.lang.Object externalEventDefName_ = "";
    /**
     * <code>string external_event_def_name = 1;</code>
     * @return The externalEventDefName.
     */
    public java.lang.String getExternalEventDefName() {
      java.lang.Object ref = externalEventDefName_;
      if (!(ref instanceof java.lang.String)) {
        com.google.protobuf.ByteString bs =
            (com.google.protobuf.ByteString) ref;
        java.lang.String s = bs.toStringUtf8();
        externalEventDefName_ = s;
        return s;
      } else {
        return (java.lang.String) ref;
      }
    }
    /**
     * <code>string external_event_def_name = 1;</code>
     * @return The bytes for externalEventDefName.
     */
    public com.google.protobuf.ByteString
        getExternalEventDefNameBytes() {
      java.lang.Object ref = externalEventDefName_;
      if (ref instanceof String) {
        com.google.protobuf.ByteString b = 
            com.google.protobuf.ByteString.copyFromUtf8(
                (java.lang.String) ref);
        externalEventDefName_ = b;
        return b;
      } else {
        return (com.google.protobuf.ByteString) ref;
      }
    }
    /**
     * <code>string external_event_def_name = 1;</code>
     * @param value The externalEventDefName to set.
     * @return This builder for chaining.
     */
    public Builder setExternalEventDefName(
        java.lang.String value) {
      if (value == null) { throw new NullPointerException(); }
      externalEventDefName_ = value;
      bitField0_ |= 0x00000001;
      onChanged();
      return this;
    }
    /**
     * <code>string external_event_def_name = 1;</code>
     * @return This builder for chaining.
     */
    public Builder clearExternalEventDefName() {
      externalEventDefName_ = getDefaultInstance().getExternalEventDefName();
      bitField0_ = (bitField0_ & ~0x00000001);
      onChanged();
      return this;
    }
    /**
     * <code>string external_event_def_name = 1;</code>
     * @param value The bytes for externalEventDefName to set.
     * @return This builder for chaining.
     */
    public Builder setExternalEventDefNameBytes(
        com.google.protobuf.ByteString value) {
      if (value == null) { throw new NullPointerException(); }
      checkByteStringIsUtf8(value);
      externalEventDefName_ = value;
      bitField0_ |= 0x00000001;
      onChanged();
      return this;
    }

    private com.google.protobuf.Timestamp eventTime_;
    private com.google.protobuf.SingleFieldBuilderV3<
        com.google.protobuf.Timestamp, com.google.protobuf.Timestamp.Builder, com.google.protobuf.TimestampOrBuilder> eventTimeBuilder_;
    /**
     * <code>optional .google.protobuf.Timestamp event_time = 2;</code>
     * @return Whether the eventTime field is set.
     */
    public boolean hasEventTime() {
      return ((bitField0_ & 0x00000002) != 0);
    }
    /**
     * <code>optional .google.protobuf.Timestamp event_time = 2;</code>
     * @return The eventTime.
     */
    public com.google.protobuf.Timestamp getEventTime() {
      if (eventTimeBuilder_ == null) {
        return eventTime_ == null ? com.google.protobuf.Timestamp.getDefaultInstance() : eventTime_;
      } else {
        return eventTimeBuilder_.getMessage();
      }
    }
    /**
     * <code>optional .google.protobuf.Timestamp event_time = 2;</code>
     */
    public Builder setEventTime(com.google.protobuf.Timestamp value) {
      if (eventTimeBuilder_ == null) {
        if (value == null) {
          throw new NullPointerException();
        }
        eventTime_ = value;
      } else {
        eventTimeBuilder_.setMessage(value);
      }
      bitField0_ |= 0x00000002;
      onChanged();
      return this;
    }
    /**
     * <code>optional .google.protobuf.Timestamp event_time = 2;</code>
     */
    public Builder setEventTime(
        com.google.protobuf.Timestamp.Builder builderForValue) {
      if (eventTimeBuilder_ == null) {
        eventTime_ = builderForValue.build();
      } else {
        eventTimeBuilder_.setMessage(builderForValue.build());
      }
      bitField0_ |= 0x00000002;
      onChanged();
      return this;
    }
    /**
     * <code>optional .google.protobuf.Timestamp event_time = 2;</code>
     */
    public Builder mergeEventTime(com.google.protobuf.Timestamp value) {
      if (eventTimeBuilder_ == null) {
        if (((bitField0_ & 0x00000002) != 0) &&
          eventTime_ != null &&
          eventTime_ != com.google.protobuf.Timestamp.getDefaultInstance()) {
          getEventTimeBuilder().mergeFrom(value);
        } else {
          eventTime_ = value;
        }
      } else {
        eventTimeBuilder_.mergeFrom(value);
      }
      bitField0_ |= 0x00000002;
      onChanged();
      return this;
    }
    /**
     * <code>optional .google.protobuf.Timestamp event_time = 2;</code>
     */
    public Builder clearEventTime() {
      bitField0_ = (bitField0_ & ~0x00000002);
      eventTime_ = null;
      if (eventTimeBuilder_ != null) {
        eventTimeBuilder_.dispose();
        eventTimeBuilder_ = null;
      }
      onChanged();
      return this;
    }
    /**
     * <code>optional .google.protobuf.Timestamp event_time = 2;</code>
     */
    public com.google.protobuf.Timestamp.Builder getEventTimeBuilder() {
      bitField0_ |= 0x00000002;
      onChanged();
      return getEventTimeFieldBuilder().getBuilder();
    }
    /**
     * <code>optional .google.protobuf.Timestamp event_time = 2;</code>
     */
    public com.google.protobuf.TimestampOrBuilder getEventTimeOrBuilder() {
      if (eventTimeBuilder_ != null) {
        return eventTimeBuilder_.getMessageOrBuilder();
      } else {
        return eventTime_ == null ?
            com.google.protobuf.Timestamp.getDefaultInstance() : eventTime_;
      }
    }
    /**
     * <code>optional .google.protobuf.Timestamp event_time = 2;</code>
     */
    private com.google.protobuf.SingleFieldBuilderV3<
        com.google.protobuf.Timestamp, com.google.protobuf.Timestamp.Builder, com.google.protobuf.TimestampOrBuilder> 
        getEventTimeFieldBuilder() {
      if (eventTimeBuilder_ == null) {
        eventTimeBuilder_ = new com.google.protobuf.SingleFieldBuilderV3<
            com.google.protobuf.Timestamp, com.google.protobuf.Timestamp.Builder, com.google.protobuf.TimestampOrBuilder>(
                getEventTime(),
                getParentForChildren(),
                isClean());
        eventTime_ = null;
      }
      return eventTimeBuilder_;
    }

    private io.littlehorse.sdk.common.proto.ExternalEventId externalEventId_;
    private com.google.protobuf.SingleFieldBuilderV3<
        io.littlehorse.sdk.common.proto.ExternalEventId, io.littlehorse.sdk.common.proto.ExternalEventId.Builder, io.littlehorse.sdk.common.proto.ExternalEventIdOrBuilder> externalEventIdBuilder_;
    /**
     * <code>optional .littlehorse.ExternalEventId external_event_id = 3;</code>
     * @return Whether the externalEventId field is set.
     */
    public boolean hasExternalEventId() {
      return ((bitField0_ & 0x00000004) != 0);
    }
    /**
     * <code>optional .littlehorse.ExternalEventId external_event_id = 3;</code>
     * @return The externalEventId.
     */
    public io.littlehorse.sdk.common.proto.ExternalEventId getExternalEventId() {
      if (externalEventIdBuilder_ == null) {
        return externalEventId_ == null ? io.littlehorse.sdk.common.proto.ExternalEventId.getDefaultInstance() : externalEventId_;
      } else {
        return externalEventIdBuilder_.getMessage();
      }
    }
    /**
     * <code>optional .littlehorse.ExternalEventId external_event_id = 3;</code>
     */
    public Builder setExternalEventId(io.littlehorse.sdk.common.proto.ExternalEventId value) {
      if (externalEventIdBuilder_ == null) {
        if (value == null) {
          throw new NullPointerException();
        }
        externalEventId_ = value;
      } else {
        externalEventIdBuilder_.setMessage(value);
      }
      bitField0_ |= 0x00000004;
      onChanged();
      return this;
    }
    /**
     * <code>optional .littlehorse.ExternalEventId external_event_id = 3;</code>
     */
    public Builder setExternalEventId(
        io.littlehorse.sdk.common.proto.ExternalEventId.Builder builderForValue) {
      if (externalEventIdBuilder_ == null) {
        externalEventId_ = builderForValue.build();
      } else {
        externalEventIdBuilder_.setMessage(builderForValue.build());
      }
      bitField0_ |= 0x00000004;
      onChanged();
      return this;
    }
    /**
     * <code>optional .littlehorse.ExternalEventId external_event_id = 3;</code>
     */
    public Builder mergeExternalEventId(io.littlehorse.sdk.common.proto.ExternalEventId value) {
      if (externalEventIdBuilder_ == null) {
        if (((bitField0_ & 0x00000004) != 0) &&
          externalEventId_ != null &&
          externalEventId_ != io.littlehorse.sdk.common.proto.ExternalEventId.getDefaultInstance()) {
          getExternalEventIdBuilder().mergeFrom(value);
        } else {
          externalEventId_ = value;
        }
      } else {
        externalEventIdBuilder_.mergeFrom(value);
      }
      bitField0_ |= 0x00000004;
      onChanged();
      return this;
    }
    /**
     * <code>optional .littlehorse.ExternalEventId external_event_id = 3;</code>
     */
    public Builder clearExternalEventId() {
      bitField0_ = (bitField0_ & ~0x00000004);
      externalEventId_ = null;
      if (externalEventIdBuilder_ != null) {
        externalEventIdBuilder_.dispose();
        externalEventIdBuilder_ = null;
      }
      onChanged();
      return this;
    }
    /**
     * <code>optional .littlehorse.ExternalEventId external_event_id = 3;</code>
     */
    public io.littlehorse.sdk.common.proto.ExternalEventId.Builder getExternalEventIdBuilder() {
      bitField0_ |= 0x00000004;
      onChanged();
      return getExternalEventIdFieldBuilder().getBuilder();
    }
    /**
     * <code>optional .littlehorse.ExternalEventId external_event_id = 3;</code>
     */
    public io.littlehorse.sdk.common.proto.ExternalEventIdOrBuilder getExternalEventIdOrBuilder() {
      if (externalEventIdBuilder_ != null) {
        return externalEventIdBuilder_.getMessageOrBuilder();
      } else {
        return externalEventId_ == null ?
            io.littlehorse.sdk.common.proto.ExternalEventId.getDefaultInstance() : externalEventId_;
      }
    }
    /**
     * <code>optional .littlehorse.ExternalEventId external_event_id = 3;</code>
     */
    private com.google.protobuf.SingleFieldBuilderV3<
        io.littlehorse.sdk.common.proto.ExternalEventId, io.littlehorse.sdk.common.proto.ExternalEventId.Builder, io.littlehorse.sdk.common.proto.ExternalEventIdOrBuilder> 
        getExternalEventIdFieldBuilder() {
      if (externalEventIdBuilder_ == null) {
        externalEventIdBuilder_ = new com.google.protobuf.SingleFieldBuilderV3<
            io.littlehorse.sdk.common.proto.ExternalEventId, io.littlehorse.sdk.common.proto.ExternalEventId.Builder, io.littlehorse.sdk.common.proto.ExternalEventIdOrBuilder>(
                getExternalEventId(),
                getParentForChildren(),
                isClean());
        externalEventId_ = null;
      }
      return externalEventIdBuilder_;
    }
    @java.lang.Override
    public final Builder setUnknownFields(
        final com.google.protobuf.UnknownFieldSet unknownFields) {
      return super.setUnknownFields(unknownFields);
    }

    @java.lang.Override
    public final Builder mergeUnknownFields(
        final com.google.protobuf.UnknownFieldSet unknownFields) {
      return super.mergeUnknownFields(unknownFields);
    }


    // @@protoc_insertion_point(builder_scope:littlehorse.ExternalEventRun)
  }

  // @@protoc_insertion_point(class_scope:littlehorse.ExternalEventRun)
  private static final io.littlehorse.sdk.common.proto.ExternalEventRun DEFAULT_INSTANCE;
  static {
    DEFAULT_INSTANCE = new io.littlehorse.sdk.common.proto.ExternalEventRun();
  }

  public static io.littlehorse.sdk.common.proto.ExternalEventRun getDefaultInstance() {
    return DEFAULT_INSTANCE;
  }

  private static final com.google.protobuf.Parser<ExternalEventRun>
      PARSER = new com.google.protobuf.AbstractParser<ExternalEventRun>() {
    @java.lang.Override
    public ExternalEventRun parsePartialFrom(
        com.google.protobuf.CodedInputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      Builder builder = newBuilder();
      try {
        builder.mergeFrom(input, extensionRegistry);
      } catch (com.google.protobuf.InvalidProtocolBufferException e) {
        throw e.setUnfinishedMessage(builder.buildPartial());
      } catch (com.google.protobuf.UninitializedMessageException e) {
        throw e.asInvalidProtocolBufferException().setUnfinishedMessage(builder.buildPartial());
      } catch (java.io.IOException e) {
        throw new com.google.protobuf.InvalidProtocolBufferException(e)
            .setUnfinishedMessage(builder.buildPartial());
      }
      return builder.buildPartial();
    }
  };

  public static com.google.protobuf.Parser<ExternalEventRun> parser() {
    return PARSER;
  }

  @java.lang.Override
  public com.google.protobuf.Parser<ExternalEventRun> getParserForType() {
    return PARSER;
  }

  @java.lang.Override
  public io.littlehorse.sdk.common.proto.ExternalEventRun getDefaultInstanceForType() {
    return DEFAULT_INSTANCE;
  }

}
