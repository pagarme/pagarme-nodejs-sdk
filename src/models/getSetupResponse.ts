/**
 * PagarmeApiSDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { nullable, number, object, optional, Schema, string } from '../schema';

/** Response object for getting the setup from a subscription */
export interface GetSetupResponse {
  id?: string | null;
  description?: string | null;
  amount?: number | null;
  status?: string | null;
}

export const getSetupResponseSchema: Schema<GetSetupResponse> = object({
  id: ['id', optional(nullable(string()))],
  description: ['description', optional(nullable(string()))],
  amount: ['amount', optional(nullable(number()))],
  status: ['status', optional(nullable(string()))],
});
