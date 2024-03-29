/**
 * PagarmeApiSDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { nullable, object, optional, Schema, string } from '../schema';

export interface GetCheckoutBoletoPaymentResponse {
  /** Data de vencimento do boleto */
  dueAt?: string | null;
  /** Instruções do boleto */
  instructions?: string | null;
}

export const getCheckoutBoletoPaymentResponseSchema: Schema<GetCheckoutBoletoPaymentResponse> = object(
  {
    dueAt: ['due_at', optional(nullable(string()))],
    instructions: ['instructions', optional(nullable(string()))],
  }
);
