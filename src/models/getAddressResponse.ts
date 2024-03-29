/**
 * PagarmeApiSDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  dict,
  lazy,
  nullable,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import {
  GetCustomerResponse,
  getCustomerResponseSchema,
} from './getCustomerResponse';

/** Response object for getting an Address */
export interface GetAddressResponse {
  id?: string | null;
  street?: string | null;
  number?: string | null;
  complement?: string | null;
  zipCode?: string | null;
  neighborhood?: string | null;
  city?: string | null;
  state?: string | null;
  country?: string | null;
  status?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
  customer?: GetCustomerResponse | null;
  metadata?: Record<string, string> | null;
  /** Line 1 for address */
  line1?: string | null;
  /** Line 2 for address */
  line2?: string | null;
  deletedAt?: string | null;
}

export const getAddressResponseSchema: Schema<GetAddressResponse> = object({
  id: ['id', optional(nullable(string()))],
  street: ['street', optional(nullable(string()))],
  number: ['number', optional(nullable(string()))],
  complement: ['complement', optional(nullable(string()))],
  zipCode: ['zip_code', optional(nullable(string()))],
  neighborhood: ['neighborhood', optional(nullable(string()))],
  city: ['city', optional(nullable(string()))],
  state: ['state', optional(nullable(string()))],
  country: ['country', optional(nullable(string()))],
  status: ['status', optional(nullable(string()))],
  createdAt: ['created_at', optional(nullable(string()))],
  updatedAt: ['updated_at', optional(nullable(string()))],
  customer: [
    'customer',
    optional(nullable(lazy(() => getCustomerResponseSchema))),
  ],
  metadata: ['metadata', optional(nullable(dict(string())))],
  line1: ['line_1', optional(nullable(string()))],
  line2: ['line_2', optional(nullable(string()))],
  deletedAt: ['deleted_at', optional(nullable(string()))],
});
