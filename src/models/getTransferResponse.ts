/**
 * PagarmeApiSDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  dict,
  lazy,
  nullable,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import {
  GetBankAccountResponse,
  getBankAccountResponseSchema,
} from './getBankAccountResponse';

/** Transfer response */
export interface GetTransferResponse {
  /** Id */
  id?: string | null;
  /** Transfer amount */
  amount?: number | null;
  /** Transfer status */
  status?: string | null;
  /** Transfer creation date */
  createdAt?: string | null;
  /** Transfer last update date */
  updatedAt?: string | null;
  /** Bank account */
  bankAccount?: GetBankAccountResponse | null;
  /** Metadata */
  metadata?: Record<string, string> | null;
}

export const getTransferResponseSchema: Schema<GetTransferResponse> = object({
  id: ['id', optional(nullable(string()))],
  amount: ['amount', optional(nullable(number()))],
  status: ['status', optional(nullable(string()))],
  createdAt: ['created_at', optional(nullable(string()))],
  updatedAt: ['updated_at', optional(nullable(string()))],
  bankAccount: [
    'bank_account',
    optional(nullable(lazy(() => getBankAccountResponseSchema))),
  ],
  metadata: ['metadata', optional(nullable(dict(string())))],
});
