/**
 * PagarmeApiSDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { nullable, object, optional, Schema, string } from '../schema';
import { GetMovementObjectBaseResponse } from './getMovementObjectBaseResponse';

/** Generic response object for getting a MovementObjectRefund. */
export interface GetMovementObjectRefundResponse extends GetMovementObjectBaseResponse {
  fraudCoverageFee?: string | null;
  chargeFeeRecipientId?: string | null;
  bankAccountId?: string | null;
  localTransactionId?: string | null;
  updatedAt?: string | null;
}

export const getMovementObjectRefundResponseSchema: Schema<GetMovementObjectRefundResponse> = object(
  {
    fraudCoverageFee: ['fraud_coverage_fee', optional(nullable(string()))],
    chargeFeeRecipientId: [
      'charge_fee_recipient_id',
      optional(nullable(string())),
    ],
    bankAccountId: ['bank_account_id', optional(nullable(string()))],
    localTransactionId: ['local_transaction_id', optional(nullable(string()))],
    updatedAt: ['updated_at', optional(nullable(string()))],
    id: ['id', optional(nullable(string()))],
    status: ['status', optional(nullable(string()))],
    amount: ['amount', optional(nullable(string()))],
    createdAt: ['created_at', optional(nullable(string()))],
    type: ['type', optional(nullable(string()))],
    chargeId: ['charge_id', optional(nullable(string()))],
    gatewayId: ['gateway_id', optional(nullable(string()))],
    object: ['object', optional(string())],
  }
);
