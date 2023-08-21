// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: service.proto

package io.littlehorse.sdk.common.proto;

/**
 * Protobuf type {@code littlehorse.PutTaskDefRequest}
 */
public final class PutTaskDefRequest extends
    com.google.protobuf.GeneratedMessageV3 implements
    // @@protoc_insertion_point(message_implements:littlehorse.PutTaskDefRequest)
    PutTaskDefRequestOrBuilder {
private static final long serialVersionUID = 0L;
  // Use PutTaskDefRequest.newBuilder() to construct.
  private PutTaskDefRequest(com.google.protobuf.GeneratedMessageV3.Builder<?> builder) {
    super(builder);
  }
  private PutTaskDefRequest() {
    name_ = "";
    inputVars_ = java.util.Collections.emptyList();
  }

  @java.lang.Override
  @SuppressWarnings({"unused"})
  protected java.lang.Object newInstance(
      UnusedPrivateParameter unused) {
    return new PutTaskDefRequest();
  }

  @java.lang.Override
  public final com.google.protobuf.UnknownFieldSet
  getUnknownFields() {
    return this.unknownFields;
  }
  public static final com.google.protobuf.Descriptors.Descriptor
      getDescriptor() {
    return io.littlehorse.sdk.common.proto.Service.internal_static_littlehorse_PutTaskDefRequest_descriptor;
  }

  @java.lang.Override
  protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internalGetFieldAccessorTable() {
    return io.littlehorse.sdk.common.proto.Service.internal_static_littlehorse_PutTaskDefRequest_fieldAccessorTable
        .ensureFieldAccessorsInitialized(
            io.littlehorse.sdk.common.proto.PutTaskDefRequest.class, io.littlehorse.sdk.common.proto.PutTaskDefRequest.Builder.class);
  }

  public static final int NAME_FIELD_NUMBER = 1;
  @SuppressWarnings("serial")
  private volatile java.lang.Object name_ = "";
  /**
   * <code>string name = 1;</code>
   * @return The name.
   */
  @java.lang.Override
  public java.lang.String getName() {
    java.lang.Object ref = name_;
    if (ref instanceof java.lang.String) {
      return (java.lang.String) ref;
    } else {
      com.google.protobuf.ByteString bs = 
          (com.google.protobuf.ByteString) ref;
      java.lang.String s = bs.toStringUtf8();
      name_ = s;
      return s;
    }
  }
  /**
   * <code>string name = 1;</code>
   * @return The bytes for name.
   */
  @java.lang.Override
  public com.google.protobuf.ByteString
      getNameBytes() {
    java.lang.Object ref = name_;
    if (ref instanceof java.lang.String) {
      com.google.protobuf.ByteString b = 
          com.google.protobuf.ByteString.copyFromUtf8(
              (java.lang.String) ref);
      name_ = b;
      return b;
    } else {
      return (com.google.protobuf.ByteString) ref;
    }
  }

  public static final int INPUT_VARS_FIELD_NUMBER = 2;
  @SuppressWarnings("serial")
  private java.util.List<io.littlehorse.sdk.common.proto.VariableDef> inputVars_;
  /**
   * <code>repeated .littlehorse.VariableDef input_vars = 2;</code>
   */
  @java.lang.Override
  public java.util.List<io.littlehorse.sdk.common.proto.VariableDef> getInputVarsList() {
    return inputVars_;
  }
  /**
   * <code>repeated .littlehorse.VariableDef input_vars = 2;</code>
   */
  @java.lang.Override
  public java.util.List<? extends io.littlehorse.sdk.common.proto.VariableDefOrBuilder> 
      getInputVarsOrBuilderList() {
    return inputVars_;
  }
  /**
   * <code>repeated .littlehorse.VariableDef input_vars = 2;</code>
   */
  @java.lang.Override
  public int getInputVarsCount() {
    return inputVars_.size();
  }
  /**
   * <code>repeated .littlehorse.VariableDef input_vars = 2;</code>
   */
  @java.lang.Override
  public io.littlehorse.sdk.common.proto.VariableDef getInputVars(int index) {
    return inputVars_.get(index);
  }
  /**
   * <code>repeated .littlehorse.VariableDef input_vars = 2;</code>
   */
  @java.lang.Override
  public io.littlehorse.sdk.common.proto.VariableDefOrBuilder getInputVarsOrBuilder(
      int index) {
    return inputVars_.get(index);
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
    if (!com.google.protobuf.GeneratedMessageV3.isStringEmpty(name_)) {
      com.google.protobuf.GeneratedMessageV3.writeString(output, 1, name_);
    }
    for (int i = 0; i < inputVars_.size(); i++) {
      output.writeMessage(2, inputVars_.get(i));
    }
    getUnknownFields().writeTo(output);
  }

  @java.lang.Override
  public int getSerializedSize() {
    int size = memoizedSize;
    if (size != -1) return size;

    size = 0;
    if (!com.google.protobuf.GeneratedMessageV3.isStringEmpty(name_)) {
      size += com.google.protobuf.GeneratedMessageV3.computeStringSize(1, name_);
    }
    for (int i = 0; i < inputVars_.size(); i++) {
      size += com.google.protobuf.CodedOutputStream
        .computeMessageSize(2, inputVars_.get(i));
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
    if (!(obj instanceof io.littlehorse.sdk.common.proto.PutTaskDefRequest)) {
      return super.equals(obj);
    }
    io.littlehorse.sdk.common.proto.PutTaskDefRequest other = (io.littlehorse.sdk.common.proto.PutTaskDefRequest) obj;

    if (!getName()
        .equals(other.getName())) return false;
    if (!getInputVarsList()
        .equals(other.getInputVarsList())) return false;
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
    hash = (37 * hash) + NAME_FIELD_NUMBER;
    hash = (53 * hash) + getName().hashCode();
    if (getInputVarsCount() > 0) {
      hash = (37 * hash) + INPUT_VARS_FIELD_NUMBER;
      hash = (53 * hash) + getInputVarsList().hashCode();
    }
    hash = (29 * hash) + getUnknownFields().hashCode();
    memoizedHashCode = hash;
    return hash;
  }

  public static io.littlehorse.sdk.common.proto.PutTaskDefRequest parseFrom(
      java.nio.ByteBuffer data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static io.littlehorse.sdk.common.proto.PutTaskDefRequest parseFrom(
      java.nio.ByteBuffer data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static io.littlehorse.sdk.common.proto.PutTaskDefRequest parseFrom(
      com.google.protobuf.ByteString data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static io.littlehorse.sdk.common.proto.PutTaskDefRequest parseFrom(
      com.google.protobuf.ByteString data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static io.littlehorse.sdk.common.proto.PutTaskDefRequest parseFrom(byte[] data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static io.littlehorse.sdk.common.proto.PutTaskDefRequest parseFrom(
      byte[] data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static io.littlehorse.sdk.common.proto.PutTaskDefRequest parseFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static io.littlehorse.sdk.common.proto.PutTaskDefRequest parseFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input, extensionRegistry);
  }
  public static io.littlehorse.sdk.common.proto.PutTaskDefRequest parseDelimitedFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input);
  }
  public static io.littlehorse.sdk.common.proto.PutTaskDefRequest parseDelimitedFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input, extensionRegistry);
  }
  public static io.littlehorse.sdk.common.proto.PutTaskDefRequest parseFrom(
      com.google.protobuf.CodedInputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static io.littlehorse.sdk.common.proto.PutTaskDefRequest parseFrom(
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
  public static Builder newBuilder(io.littlehorse.sdk.common.proto.PutTaskDefRequest prototype) {
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
   * Protobuf type {@code littlehorse.PutTaskDefRequest}
   */
  public static final class Builder extends
      com.google.protobuf.GeneratedMessageV3.Builder<Builder> implements
      // @@protoc_insertion_point(builder_implements:littlehorse.PutTaskDefRequest)
      io.littlehorse.sdk.common.proto.PutTaskDefRequestOrBuilder {
    public static final com.google.protobuf.Descriptors.Descriptor
        getDescriptor() {
      return io.littlehorse.sdk.common.proto.Service.internal_static_littlehorse_PutTaskDefRequest_descriptor;
    }

    @java.lang.Override
    protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
        internalGetFieldAccessorTable() {
      return io.littlehorse.sdk.common.proto.Service.internal_static_littlehorse_PutTaskDefRequest_fieldAccessorTable
          .ensureFieldAccessorsInitialized(
              io.littlehorse.sdk.common.proto.PutTaskDefRequest.class, io.littlehorse.sdk.common.proto.PutTaskDefRequest.Builder.class);
    }

    // Construct using io.littlehorse.sdk.common.proto.PutTaskDefRequest.newBuilder()
    private Builder() {

    }

    private Builder(
        com.google.protobuf.GeneratedMessageV3.BuilderParent parent) {
      super(parent);

    }
    @java.lang.Override
    public Builder clear() {
      super.clear();
      bitField0_ = 0;
      name_ = "";
      if (inputVarsBuilder_ == null) {
        inputVars_ = java.util.Collections.emptyList();
      } else {
        inputVars_ = null;
        inputVarsBuilder_.clear();
      }
      bitField0_ = (bitField0_ & ~0x00000002);
      return this;
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.Descriptor
        getDescriptorForType() {
      return io.littlehorse.sdk.common.proto.Service.internal_static_littlehorse_PutTaskDefRequest_descriptor;
    }

    @java.lang.Override
    public io.littlehorse.sdk.common.proto.PutTaskDefRequest getDefaultInstanceForType() {
      return io.littlehorse.sdk.common.proto.PutTaskDefRequest.getDefaultInstance();
    }

    @java.lang.Override
    public io.littlehorse.sdk.common.proto.PutTaskDefRequest build() {
      io.littlehorse.sdk.common.proto.PutTaskDefRequest result = buildPartial();
      if (!result.isInitialized()) {
        throw newUninitializedMessageException(result);
      }
      return result;
    }

    @java.lang.Override
    public io.littlehorse.sdk.common.proto.PutTaskDefRequest buildPartial() {
      io.littlehorse.sdk.common.proto.PutTaskDefRequest result = new io.littlehorse.sdk.common.proto.PutTaskDefRequest(this);
      buildPartialRepeatedFields(result);
      if (bitField0_ != 0) { buildPartial0(result); }
      onBuilt();
      return result;
    }

    private void buildPartialRepeatedFields(io.littlehorse.sdk.common.proto.PutTaskDefRequest result) {
      if (inputVarsBuilder_ == null) {
        if (((bitField0_ & 0x00000002) != 0)) {
          inputVars_ = java.util.Collections.unmodifiableList(inputVars_);
          bitField0_ = (bitField0_ & ~0x00000002);
        }
        result.inputVars_ = inputVars_;
      } else {
        result.inputVars_ = inputVarsBuilder_.build();
      }
    }

    private void buildPartial0(io.littlehorse.sdk.common.proto.PutTaskDefRequest result) {
      int from_bitField0_ = bitField0_;
      if (((from_bitField0_ & 0x00000001) != 0)) {
        result.name_ = name_;
      }
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
      if (other instanceof io.littlehorse.sdk.common.proto.PutTaskDefRequest) {
        return mergeFrom((io.littlehorse.sdk.common.proto.PutTaskDefRequest)other);
      } else {
        super.mergeFrom(other);
        return this;
      }
    }

    public Builder mergeFrom(io.littlehorse.sdk.common.proto.PutTaskDefRequest other) {
      if (other == io.littlehorse.sdk.common.proto.PutTaskDefRequest.getDefaultInstance()) return this;
      if (!other.getName().isEmpty()) {
        name_ = other.name_;
        bitField0_ |= 0x00000001;
        onChanged();
      }
      if (inputVarsBuilder_ == null) {
        if (!other.inputVars_.isEmpty()) {
          if (inputVars_.isEmpty()) {
            inputVars_ = other.inputVars_;
            bitField0_ = (bitField0_ & ~0x00000002);
          } else {
            ensureInputVarsIsMutable();
            inputVars_.addAll(other.inputVars_);
          }
          onChanged();
        }
      } else {
        if (!other.inputVars_.isEmpty()) {
          if (inputVarsBuilder_.isEmpty()) {
            inputVarsBuilder_.dispose();
            inputVarsBuilder_ = null;
            inputVars_ = other.inputVars_;
            bitField0_ = (bitField0_ & ~0x00000002);
            inputVarsBuilder_ = 
              com.google.protobuf.GeneratedMessageV3.alwaysUseFieldBuilders ?
                 getInputVarsFieldBuilder() : null;
          } else {
            inputVarsBuilder_.addAllMessages(other.inputVars_);
          }
        }
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
              name_ = input.readStringRequireUtf8();
              bitField0_ |= 0x00000001;
              break;
            } // case 10
            case 18: {
              io.littlehorse.sdk.common.proto.VariableDef m =
                  input.readMessage(
                      io.littlehorse.sdk.common.proto.VariableDef.parser(),
                      extensionRegistry);
              if (inputVarsBuilder_ == null) {
                ensureInputVarsIsMutable();
                inputVars_.add(m);
              } else {
                inputVarsBuilder_.addMessage(m);
              }
              break;
            } // case 18
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

    private java.lang.Object name_ = "";
    /**
     * <code>string name = 1;</code>
     * @return The name.
     */
    public java.lang.String getName() {
      java.lang.Object ref = name_;
      if (!(ref instanceof java.lang.String)) {
        com.google.protobuf.ByteString bs =
            (com.google.protobuf.ByteString) ref;
        java.lang.String s = bs.toStringUtf8();
        name_ = s;
        return s;
      } else {
        return (java.lang.String) ref;
      }
    }
    /**
     * <code>string name = 1;</code>
     * @return The bytes for name.
     */
    public com.google.protobuf.ByteString
        getNameBytes() {
      java.lang.Object ref = name_;
      if (ref instanceof String) {
        com.google.protobuf.ByteString b = 
            com.google.protobuf.ByteString.copyFromUtf8(
                (java.lang.String) ref);
        name_ = b;
        return b;
      } else {
        return (com.google.protobuf.ByteString) ref;
      }
    }
    /**
     * <code>string name = 1;</code>
     * @param value The name to set.
     * @return This builder for chaining.
     */
    public Builder setName(
        java.lang.String value) {
      if (value == null) { throw new NullPointerException(); }
      name_ = value;
      bitField0_ |= 0x00000001;
      onChanged();
      return this;
    }
    /**
     * <code>string name = 1;</code>
     * @return This builder for chaining.
     */
    public Builder clearName() {
      name_ = getDefaultInstance().getName();
      bitField0_ = (bitField0_ & ~0x00000001);
      onChanged();
      return this;
    }
    /**
     * <code>string name = 1;</code>
     * @param value The bytes for name to set.
     * @return This builder for chaining.
     */
    public Builder setNameBytes(
        com.google.protobuf.ByteString value) {
      if (value == null) { throw new NullPointerException(); }
      checkByteStringIsUtf8(value);
      name_ = value;
      bitField0_ |= 0x00000001;
      onChanged();
      return this;
    }

    private java.util.List<io.littlehorse.sdk.common.proto.VariableDef> inputVars_ =
      java.util.Collections.emptyList();
    private void ensureInputVarsIsMutable() {
      if (!((bitField0_ & 0x00000002) != 0)) {
        inputVars_ = new java.util.ArrayList<io.littlehorse.sdk.common.proto.VariableDef>(inputVars_);
        bitField0_ |= 0x00000002;
       }
    }

    private com.google.protobuf.RepeatedFieldBuilderV3<
        io.littlehorse.sdk.common.proto.VariableDef, io.littlehorse.sdk.common.proto.VariableDef.Builder, io.littlehorse.sdk.common.proto.VariableDefOrBuilder> inputVarsBuilder_;

    /**
     * <code>repeated .littlehorse.VariableDef input_vars = 2;</code>
     */
    public java.util.List<io.littlehorse.sdk.common.proto.VariableDef> getInputVarsList() {
      if (inputVarsBuilder_ == null) {
        return java.util.Collections.unmodifiableList(inputVars_);
      } else {
        return inputVarsBuilder_.getMessageList();
      }
    }
    /**
     * <code>repeated .littlehorse.VariableDef input_vars = 2;</code>
     */
    public int getInputVarsCount() {
      if (inputVarsBuilder_ == null) {
        return inputVars_.size();
      } else {
        return inputVarsBuilder_.getCount();
      }
    }
    /**
     * <code>repeated .littlehorse.VariableDef input_vars = 2;</code>
     */
    public io.littlehorse.sdk.common.proto.VariableDef getInputVars(int index) {
      if (inputVarsBuilder_ == null) {
        return inputVars_.get(index);
      } else {
        return inputVarsBuilder_.getMessage(index);
      }
    }
    /**
     * <code>repeated .littlehorse.VariableDef input_vars = 2;</code>
     */
    public Builder setInputVars(
        int index, io.littlehorse.sdk.common.proto.VariableDef value) {
      if (inputVarsBuilder_ == null) {
        if (value == null) {
          throw new NullPointerException();
        }
        ensureInputVarsIsMutable();
        inputVars_.set(index, value);
        onChanged();
      } else {
        inputVarsBuilder_.setMessage(index, value);
      }
      return this;
    }
    /**
     * <code>repeated .littlehorse.VariableDef input_vars = 2;</code>
     */
    public Builder setInputVars(
        int index, io.littlehorse.sdk.common.proto.VariableDef.Builder builderForValue) {
      if (inputVarsBuilder_ == null) {
        ensureInputVarsIsMutable();
        inputVars_.set(index, builderForValue.build());
        onChanged();
      } else {
        inputVarsBuilder_.setMessage(index, builderForValue.build());
      }
      return this;
    }
    /**
     * <code>repeated .littlehorse.VariableDef input_vars = 2;</code>
     */
    public Builder addInputVars(io.littlehorse.sdk.common.proto.VariableDef value) {
      if (inputVarsBuilder_ == null) {
        if (value == null) {
          throw new NullPointerException();
        }
        ensureInputVarsIsMutable();
        inputVars_.add(value);
        onChanged();
      } else {
        inputVarsBuilder_.addMessage(value);
      }
      return this;
    }
    /**
     * <code>repeated .littlehorse.VariableDef input_vars = 2;</code>
     */
    public Builder addInputVars(
        int index, io.littlehorse.sdk.common.proto.VariableDef value) {
      if (inputVarsBuilder_ == null) {
        if (value == null) {
          throw new NullPointerException();
        }
        ensureInputVarsIsMutable();
        inputVars_.add(index, value);
        onChanged();
      } else {
        inputVarsBuilder_.addMessage(index, value);
      }
      return this;
    }
    /**
     * <code>repeated .littlehorse.VariableDef input_vars = 2;</code>
     */
    public Builder addInputVars(
        io.littlehorse.sdk.common.proto.VariableDef.Builder builderForValue) {
      if (inputVarsBuilder_ == null) {
        ensureInputVarsIsMutable();
        inputVars_.add(builderForValue.build());
        onChanged();
      } else {
        inputVarsBuilder_.addMessage(builderForValue.build());
      }
      return this;
    }
    /**
     * <code>repeated .littlehorse.VariableDef input_vars = 2;</code>
     */
    public Builder addInputVars(
        int index, io.littlehorse.sdk.common.proto.VariableDef.Builder builderForValue) {
      if (inputVarsBuilder_ == null) {
        ensureInputVarsIsMutable();
        inputVars_.add(index, builderForValue.build());
        onChanged();
      } else {
        inputVarsBuilder_.addMessage(index, builderForValue.build());
      }
      return this;
    }
    /**
     * <code>repeated .littlehorse.VariableDef input_vars = 2;</code>
     */
    public Builder addAllInputVars(
        java.lang.Iterable<? extends io.littlehorse.sdk.common.proto.VariableDef> values) {
      if (inputVarsBuilder_ == null) {
        ensureInputVarsIsMutable();
        com.google.protobuf.AbstractMessageLite.Builder.addAll(
            values, inputVars_);
        onChanged();
      } else {
        inputVarsBuilder_.addAllMessages(values);
      }
      return this;
    }
    /**
     * <code>repeated .littlehorse.VariableDef input_vars = 2;</code>
     */
    public Builder clearInputVars() {
      if (inputVarsBuilder_ == null) {
        inputVars_ = java.util.Collections.emptyList();
        bitField0_ = (bitField0_ & ~0x00000002);
        onChanged();
      } else {
        inputVarsBuilder_.clear();
      }
      return this;
    }
    /**
     * <code>repeated .littlehorse.VariableDef input_vars = 2;</code>
     */
    public Builder removeInputVars(int index) {
      if (inputVarsBuilder_ == null) {
        ensureInputVarsIsMutable();
        inputVars_.remove(index);
        onChanged();
      } else {
        inputVarsBuilder_.remove(index);
      }
      return this;
    }
    /**
     * <code>repeated .littlehorse.VariableDef input_vars = 2;</code>
     */
    public io.littlehorse.sdk.common.proto.VariableDef.Builder getInputVarsBuilder(
        int index) {
      return getInputVarsFieldBuilder().getBuilder(index);
    }
    /**
     * <code>repeated .littlehorse.VariableDef input_vars = 2;</code>
     */
    public io.littlehorse.sdk.common.proto.VariableDefOrBuilder getInputVarsOrBuilder(
        int index) {
      if (inputVarsBuilder_ == null) {
        return inputVars_.get(index);  } else {
        return inputVarsBuilder_.getMessageOrBuilder(index);
      }
    }
    /**
     * <code>repeated .littlehorse.VariableDef input_vars = 2;</code>
     */
    public java.util.List<? extends io.littlehorse.sdk.common.proto.VariableDefOrBuilder> 
         getInputVarsOrBuilderList() {
      if (inputVarsBuilder_ != null) {
        return inputVarsBuilder_.getMessageOrBuilderList();
      } else {
        return java.util.Collections.unmodifiableList(inputVars_);
      }
    }
    /**
     * <code>repeated .littlehorse.VariableDef input_vars = 2;</code>
     */
    public io.littlehorse.sdk.common.proto.VariableDef.Builder addInputVarsBuilder() {
      return getInputVarsFieldBuilder().addBuilder(
          io.littlehorse.sdk.common.proto.VariableDef.getDefaultInstance());
    }
    /**
     * <code>repeated .littlehorse.VariableDef input_vars = 2;</code>
     */
    public io.littlehorse.sdk.common.proto.VariableDef.Builder addInputVarsBuilder(
        int index) {
      return getInputVarsFieldBuilder().addBuilder(
          index, io.littlehorse.sdk.common.proto.VariableDef.getDefaultInstance());
    }
    /**
     * <code>repeated .littlehorse.VariableDef input_vars = 2;</code>
     */
    public java.util.List<io.littlehorse.sdk.common.proto.VariableDef.Builder> 
         getInputVarsBuilderList() {
      return getInputVarsFieldBuilder().getBuilderList();
    }
    private com.google.protobuf.RepeatedFieldBuilderV3<
        io.littlehorse.sdk.common.proto.VariableDef, io.littlehorse.sdk.common.proto.VariableDef.Builder, io.littlehorse.sdk.common.proto.VariableDefOrBuilder> 
        getInputVarsFieldBuilder() {
      if (inputVarsBuilder_ == null) {
        inputVarsBuilder_ = new com.google.protobuf.RepeatedFieldBuilderV3<
            io.littlehorse.sdk.common.proto.VariableDef, io.littlehorse.sdk.common.proto.VariableDef.Builder, io.littlehorse.sdk.common.proto.VariableDefOrBuilder>(
                inputVars_,
                ((bitField0_ & 0x00000002) != 0),
                getParentForChildren(),
                isClean());
        inputVars_ = null;
      }
      return inputVarsBuilder_;
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


    // @@protoc_insertion_point(builder_scope:littlehorse.PutTaskDefRequest)
  }

  // @@protoc_insertion_point(class_scope:littlehorse.PutTaskDefRequest)
  private static final io.littlehorse.sdk.common.proto.PutTaskDefRequest DEFAULT_INSTANCE;
  static {
    DEFAULT_INSTANCE = new io.littlehorse.sdk.common.proto.PutTaskDefRequest();
  }

  public static io.littlehorse.sdk.common.proto.PutTaskDefRequest getDefaultInstance() {
    return DEFAULT_INSTANCE;
  }

  private static final com.google.protobuf.Parser<PutTaskDefRequest>
      PARSER = new com.google.protobuf.AbstractParser<PutTaskDefRequest>() {
    @java.lang.Override
    public PutTaskDefRequest parsePartialFrom(
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

  public static com.google.protobuf.Parser<PutTaskDefRequest> parser() {
    return PARSER;
  }

  @java.lang.Override
  public com.google.protobuf.Parser<PutTaskDefRequest> getParserForType() {
    return PARSER;
  }

  @java.lang.Override
  public io.littlehorse.sdk.common.proto.PutTaskDefRequest getDefaultInstanceForType() {
    return DEFAULT_INSTANCE;
  }

}
