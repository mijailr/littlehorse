// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: wf_spec.proto

package io.littlehorse.common.proto;

/**
 * Protobuf enum {@code lh_proto.VariableMutationTypePb}
 */
public enum VariableMutationTypePb
    implements com.google.protobuf.ProtocolMessageEnum {
  /**
   * <code>ASSIGN = 0;</code>
   */
  ASSIGN(0),
  /**
   * <code>ADD = 1;</code>
   */
  ADD(1),
  /**
   * <code>EXTEND = 2;</code>
   */
  EXTEND(2),
  /**
   * <code>SUBTRACT = 3;</code>
   */
  SUBTRACT(3),
  /**
   * <code>MULTIPLY = 4;</code>
   */
  MULTIPLY(4),
  /**
   * <code>DIVIDE = 5;</code>
   */
  DIVIDE(5),
  /**
   * <code>REMOVE_IF_PRESENT = 6;</code>
   */
  REMOVE_IF_PRESENT(6),
  /**
   * <code>REMOVE_INDEX = 7;</code>
   */
  REMOVE_INDEX(7),
  /**
   * <code>REMOVE_KEY = 8;</code>
   */
  REMOVE_KEY(8),
  UNRECOGNIZED(-1),
  ;

  /**
   * <code>ASSIGN = 0;</code>
   */
  public static final int ASSIGN_VALUE = 0;
  /**
   * <code>ADD = 1;</code>
   */
  public static final int ADD_VALUE = 1;
  /**
   * <code>EXTEND = 2;</code>
   */
  public static final int EXTEND_VALUE = 2;
  /**
   * <code>SUBTRACT = 3;</code>
   */
  public static final int SUBTRACT_VALUE = 3;
  /**
   * <code>MULTIPLY = 4;</code>
   */
  public static final int MULTIPLY_VALUE = 4;
  /**
   * <code>DIVIDE = 5;</code>
   */
  public static final int DIVIDE_VALUE = 5;
  /**
   * <code>REMOVE_IF_PRESENT = 6;</code>
   */
  public static final int REMOVE_IF_PRESENT_VALUE = 6;
  /**
   * <code>REMOVE_INDEX = 7;</code>
   */
  public static final int REMOVE_INDEX_VALUE = 7;
  /**
   * <code>REMOVE_KEY = 8;</code>
   */
  public static final int REMOVE_KEY_VALUE = 8;


  public final int getNumber() {
    if (this == UNRECOGNIZED) {
      throw new java.lang.IllegalArgumentException(
          "Can't get the number of an unknown enum value.");
    }
    return value;
  }

  /**
   * @param value The numeric wire value of the corresponding enum entry.
   * @return The enum associated with the given numeric wire value.
   * @deprecated Use {@link #forNumber(int)} instead.
   */
  @java.lang.Deprecated
  public static VariableMutationTypePb valueOf(int value) {
    return forNumber(value);
  }

  /**
   * @param value The numeric wire value of the corresponding enum entry.
   * @return The enum associated with the given numeric wire value.
   */
  public static VariableMutationTypePb forNumber(int value) {
    switch (value) {
      case 0: return ASSIGN;
      case 1: return ADD;
      case 2: return EXTEND;
      case 3: return SUBTRACT;
      case 4: return MULTIPLY;
      case 5: return DIVIDE;
      case 6: return REMOVE_IF_PRESENT;
      case 7: return REMOVE_INDEX;
      case 8: return REMOVE_KEY;
      default: return null;
    }
  }

  public static com.google.protobuf.Internal.EnumLiteMap<VariableMutationTypePb>
      internalGetValueMap() {
    return internalValueMap;
  }
  private static final com.google.protobuf.Internal.EnumLiteMap<
      VariableMutationTypePb> internalValueMap =
        new com.google.protobuf.Internal.EnumLiteMap<VariableMutationTypePb>() {
          public VariableMutationTypePb findValueByNumber(int number) {
            return VariableMutationTypePb.forNumber(number);
          }
        };

  public final com.google.protobuf.Descriptors.EnumValueDescriptor
      getValueDescriptor() {
    if (this == UNRECOGNIZED) {
      throw new java.lang.IllegalStateException(
          "Can't get the descriptor of an unrecognized enum value.");
    }
    return getDescriptor().getValues().get(ordinal());
  }
  public final com.google.protobuf.Descriptors.EnumDescriptor
      getDescriptorForType() {
    return getDescriptor();
  }
  public static final com.google.protobuf.Descriptors.EnumDescriptor
      getDescriptor() {
    return io.littlehorse.common.proto.WfSpec.getDescriptor().getEnumTypes().get(1);
  }

  private static final VariableMutationTypePb[] VALUES = values();

  public static VariableMutationTypePb valueOf(
      com.google.protobuf.Descriptors.EnumValueDescriptor desc) {
    if (desc.getType() != getDescriptor()) {
      throw new java.lang.IllegalArgumentException(
        "EnumValueDescriptor is not for this type.");
    }
    if (desc.getIndex() == -1) {
      return UNRECOGNIZED;
    }
    return VALUES[desc.getIndex()];
  }

  private final int value;

  private VariableMutationTypePb(int value) {
    this.value = value;
  }

  // @@protoc_insertion_point(enum_scope:lh_proto.VariableMutationTypePb)
}
