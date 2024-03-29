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
  GetBillingAddressResponse,
  getBillingAddressResponseSchema,
} from './getBillingAddressResponse';
import {
  GetCustomerResponse,
  getCustomerResponseSchema,
} from './getCustomerResponse';

/** Response object for getting a credit card */
export interface GetCardResponse {
  id?: string | null;
  lastFourDigits?: string | null;
  brand?: string | null;
  holderName?: string | null;
  expMonth?: number | null;
  expYear?: number | null;
  status?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
  billingAddress?: GetBillingAddressResponse | null;
  customer?: GetCustomerResponse | null;
  metadata?: Record<string, string> | null;
  /** Card type */
  type?: string | null;
  /** Document number for the card's holder */
  holderDocument?: string | null;
  deletedAt?: string | null;
  /** First six digits */
  firstSixDigits?: string | null;
  label?: string | null;
}

export const getCardResponseSchema: Schema<GetCardResponse> = object({
  id: ['id', optional(nullable(string()))],
  lastFourDigits: ['last_four_digits', optional(nullable(string()))],
  brand: ['brand', optional(nullable(string()))],
  holderName: ['holder_name', optional(nullable(string()))],
  expMonth: ['exp_month', optional(nullable(number()))],
  expYear: ['exp_year', optional(nullable(number()))],
  status: ['status', optional(nullable(string()))],
  createdAt: ['created_at', optional(nullable(string()))],
  updatedAt: ['updated_at', optional(nullable(string()))],
  billingAddress: [
    'billing_address',
    optional(nullable(lazy(() => getBillingAddressResponseSchema))),
  ],
  customer: [
    'customer',
    optional(nullable(lazy(() => getCustomerResponseSchema))),
  ],
  metadata: ['metadata', optional(nullable(dict(string())))],
  type: ['type', optional(nullable(string()))],
  holderDocument: ['holder_document', optional(nullable(string()))],
  deletedAt: ['deleted_at', optional(nullable(string()))],
  firstSixDigits: ['first_six_digits', optional(nullable(string()))],
  label: ['label', optional(nullable(string()))],
});
