/**
 * PagarmeApiSDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { dict, object, Schema, string } from '../schema';

/** Request for updating an metadata */
export interface UpdateMetadataRequest {
  /** Metadata */
  metadata: Record<string, string>;
}

export const updateMetadataRequestSchema: Schema<UpdateMetadataRequest> = object(
  { metadata: ['metadata', dict(string())] }
);
