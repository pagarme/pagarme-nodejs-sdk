/**
 * PagarmeApiSDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, nullable, object, optional, Schema, string } from '../schema';

/** Bank transfer checkout response */
export interface GetCheckoutBankTransferPaymentResponse {
  /** bank list response */
  bank?: string[] | null;
}

export const getCheckoutBankTransferPaymentResponseSchema: Schema<GetCheckoutBankTransferPaymentResponse> = object(
  { bank: ['bank', optional(nullable(array(string())))] }
);
