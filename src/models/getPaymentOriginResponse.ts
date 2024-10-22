/**
 * PagarmeApiSDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

export interface GetPaymentOriginResponse {
  chargeId?: string;
  brandId?: string;
}

export const getPaymentOriginResponseSchema: Schema<GetPaymentOriginResponse> = object(
  {
    chargeId: ['charge_id', optional(string())],
    brandId: ['brand_id', optional(string())],
  }
);