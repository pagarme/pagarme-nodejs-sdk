/**
 * PagarmeApiSDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, optional, Schema, string } from '../schema';

export interface CreateConfirmPaymentRequest {
  /** Description */
  description: string;
  /** Amount */
  amount?: number;
  /** Code reference */
  code: string;
}

export const createConfirmPaymentRequestSchema: Schema<CreateConfirmPaymentRequest> = object(
  {
    description: ['description', string()],
    amount: ['Amount', optional(number())],
    code: ['Code', string()],
  }
);
