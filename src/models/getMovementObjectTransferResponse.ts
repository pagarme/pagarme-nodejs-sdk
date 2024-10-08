/**
 * PagarmeApiSDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { nullable, object, optional, Schema, string } from '../schema';
import { GetMovementObjectBaseResponse } from './getMovementObjectBaseResponse';

export interface GetMovementObjectTransferResponse extends GetMovementObjectBaseResponse {
  sourceType?: string | null;
  sourceId?: string | null;
  targetType?: string | null;
  targetId?: string | null;
  fee?: string | null;
  fundingDate?: string | null;
  fundingEstimatedDate?: string | null;
  bankAccount?: string | null;
}

export const getMovementObjectTransferResponseSchema: Schema<GetMovementObjectTransferResponse> = object(
  {
    sourceType: ['source_type', optional(nullable(string()))],
    sourceId: ['source_id', optional(nullable(string()))],
    targetType: ['target_type', optional(nullable(string()))],
    targetId: ['target_id', optional(nullable(string()))],
    fee: ['fee', optional(nullable(string()))],
    fundingDate: ['funding_date', optional(nullable(string()))],
    fundingEstimatedDate: [
      'funding_estimated_date',
      optional(nullable(string())),
    ],
    bankAccount: ['bank_account', optional(nullable(string()))],
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
