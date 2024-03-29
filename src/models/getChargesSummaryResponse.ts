/**
 * PagarmeApiSDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { nullable, number, object, optional, Schema } from '../schema';

export interface GetChargesSummaryResponse {
  total?: number | null;
}

export const getChargesSummaryResponseSchema: Schema<GetChargesSummaryResponse> = object(
  { total: ['total', optional(nullable(number()))] }
);
