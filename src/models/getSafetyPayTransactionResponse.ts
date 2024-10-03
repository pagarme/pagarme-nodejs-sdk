/**
 * PagarmeApiSDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  boolean,
  dict,
  lazy,
  nullable,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import { getAntifraudResponseSchema } from './getAntifraudResponse';
import { getFineResponseSchema } from './getFineResponse';
import { getGatewayResponseResponseSchema } from './getGatewayResponseResponse';
import { getInterestResponseSchema } from './getInterestResponse';
import { getSplitResponseSchema } from './getSplitResponse';
import { GetTransactionResponse } from './getTransactionResponse';

/** Response object for getting a safety pay transaction */
export interface GetSafetyPayTransactionResponse extends GetTransactionResponse {
  /** Payment url */
  url?: string | null;
  /** Transaction identifier on bank */
  bankTid?: string | null;
  /** Payment date */
  paidAt?: string | null;
  /** Paid amount */
  paidAmount?: number | null;
}

export const getSafetyPayTransactionResponseSchema: Schema<GetSafetyPayTransactionResponse> = object(
  {
    url: ['url', optional(nullable(string()))],
    bankTid: ['bank_tid', optional(nullable(string()))],
    paidAt: ['paid_at', optional(nullable(string()))],
    paidAmount: ['paid_amount', optional(nullable(number()))],
    gatewayId: ['gateway_id', optional(nullable(string()))],
    amount: ['amount', optional(nullable(number()))],
    status: ['status', optional(nullable(string()))],
    success: ['success', optional(nullable(boolean()))],
    createdAt: ['created_at', optional(nullable(string()))],
    updatedAt: ['updated_at', optional(nullable(string()))],
    attemptCount: ['attempt_count', optional(nullable(number()))],
    maxAttempts: ['max_attempts', optional(nullable(number()))],
    splits: [
      'splits',
      optional(nullable(array(lazy(() => getSplitResponseSchema)))),
    ],
    nextAttempt: ['next_attempt', optional(nullable(string()))],
    id: ['id', optional(nullable(string()))],
    gatewayResponse: [
      'gateway_response',
      optional(nullable(lazy(() => getGatewayResponseResponseSchema))),
    ],
    antifraudResponse: [
      'antifraud_response',
      optional(nullable(lazy(() => getAntifraudResponseSchema))),
    ],
    metadata: ['metadata', optional(nullable(dict(string())))],
    split: [
      'split',
      optional(nullable(array(lazy(() => getSplitResponseSchema)))),
    ],
    interest: [
      'interest',
      optional(nullable(lazy(() => getInterestResponseSchema))),
    ],
    fine: ['fine', optional(nullable(lazy(() => getFineResponseSchema)))],
    maxDaysToPayPastDue: [
      'max_days_to_pay_past_due',
      optional(nullable(number())),
    ],
    transactionType: ['transaction_type', optional(string())],
  }
);
