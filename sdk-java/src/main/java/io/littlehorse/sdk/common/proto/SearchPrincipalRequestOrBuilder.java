// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: service.proto

package io.littlehorse.sdk.common.proto;

public interface SearchPrincipalRequestOrBuilder extends
    // @@protoc_insertion_point(interface_extends:littlehorse.SearchPrincipalRequest)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <pre>
   * Bookmark for cursor-based pagination; pass if applicable.
   * </pre>
   *
   * <code>optional bytes bookmark = 1;</code>
   * @return Whether the bookmark field is set.
   */
  boolean hasBookmark();
  /**
   * <pre>
   * Bookmark for cursor-based pagination; pass if applicable.
   * </pre>
   *
   * <code>optional bytes bookmark = 1;</code>
   * @return The bookmark.
   */
  com.google.protobuf.ByteString getBookmark();

  /**
   * <pre>
   * Maximum results to return in one request.
   * </pre>
   *
   * <code>optional int32 limit = 2;</code>
   * @return Whether the limit field is set.
   */
  boolean hasLimit();
  /**
   * <pre>
   * Maximum results to return in one request.
   * </pre>
   *
   * <code>optional int32 limit = 2;</code>
   * @return The limit.
   */
  int getLimit();

  /**
   * <code>optional .google.protobuf.Timestamp earliest_start = 3;</code>
   * @return Whether the earliestStart field is set.
   */
  boolean hasEarliestStart();
  /**
   * <code>optional .google.protobuf.Timestamp earliest_start = 3;</code>
   * @return The earliestStart.
   */
  com.google.protobuf.Timestamp getEarliestStart();
  /**
   * <code>optional .google.protobuf.Timestamp earliest_start = 3;</code>
   */
  com.google.protobuf.TimestampOrBuilder getEarliestStartOrBuilder();

  /**
   * <code>optional .google.protobuf.Timestamp latest_start = 4;</code>
   * @return Whether the latestStart field is set.
   */
  boolean hasLatestStart();
  /**
   * <code>optional .google.protobuf.Timestamp latest_start = 4;</code>
   * @return The latestStart.
   */
  com.google.protobuf.Timestamp getLatestStart();
  /**
   * <code>optional .google.protobuf.Timestamp latest_start = 4;</code>
   */
  com.google.protobuf.TimestampOrBuilder getLatestStartOrBuilder();

  /**
   * <pre>
   * 
   * </pre>
   *
   * <code>bool isAdmin = 5;</code>
   * @return Whether the isAdmin field is set.
   */
  boolean hasIsAdmin();
  /**
   * <pre>
   * 
   * </pre>
   *
   * <code>bool isAdmin = 5;</code>
   * @return The isAdmin.
   */
  boolean getIsAdmin();

  /**
   * <pre>
   * 
   * </pre>
   *
   * <code>string tenantId = 6;</code>
   * @return Whether the tenantId field is set.
   */
  boolean hasTenantId();
  /**
   * <pre>
   * 
   * </pre>
   *
   * <code>string tenantId = 6;</code>
   * @return The tenantId.
   */
  java.lang.String getTenantId();
  /**
   * <pre>
   * 
   * </pre>
   *
   * <code>string tenantId = 6;</code>
   * @return The bytes for tenantId.
   */
  com.google.protobuf.ByteString
      getTenantIdBytes();

  io.littlehorse.sdk.common.proto.SearchPrincipalRequest.PrincipalCriteriaCase getPrincipalCriteriaCase();
}