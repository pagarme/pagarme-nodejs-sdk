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
  CreateAddressRequest,
  createAddressRequestSchema,
} from './createAddressRequest';

/** Request for updating a card */
export interface UpdateCardRequest {
  /** Holder name */
  holderName: string;
  /** Expiration month */
  expMonth: number;
  /** Expiration year */
  expYear: number;
  /** Id of the address to be used as billing address */
  billingAddressId?: string | null;
  /** Billing address */
  billingAddress: CreateAddressRequest;
  /** Metadata */
  metadata: Record<string, string>;
  label: string;
}

export const updateCardRequestSchema: Schema<UpdateCardRequest> = object({
  holderName: ['holder_name', string()],
  expMonth: ['exp_month', number()],
  expYear: ['exp_year', number()],
  billingAddressId: ['billing_address_id', optional(nullable(string()))],
  billingAddress: ['billing_address', lazy(() => createAddressRequestSchema)],
  metadata: ['metadata', dict(string())],
  label: ['label', string()],
});
