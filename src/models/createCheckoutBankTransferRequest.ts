/**
 * PagarmeApiSDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, number, object, Schema, string } from '../schema';

/** Checkout bank transfer payment request */
export interface CreateCheckoutBankTransferRequest {
  /** Bank */
  bank: string[];
  /** Number of retries for processing */
  retries: number;
}

export const createCheckoutBankTransferRequestSchema: Schema<CreateCheckoutBankTransferRequest> = object(
  { bank: ['bank', array(string())], retries: ['retries', number()] }
);
