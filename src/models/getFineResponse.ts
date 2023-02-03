/**
 * PagarmeApiSDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { nullable, number, object, optional, Schema, string } from '../schema';

/** Fine Response */
export interface GetFineResponse {
  /** Days */
  days?: number | null;
  /** Type */
  type?: string | null;
  /** Amount */
  amount?: number | null;
}

export const getFineResponseSchema: Schema<GetFineResponse> = object({
  days: ['days', optional(nullable(number()))],
  type: ['type', optional(nullable(string()))],
  amount: ['amount', optional(nullable(number()))],
});
