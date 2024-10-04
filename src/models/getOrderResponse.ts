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
import {
  GetChargeResponse,
  getChargeResponseSchema,
} from './getChargeResponse';
import {
  GetCheckoutPaymentResponse,
  getCheckoutPaymentResponseSchema,
} from './getCheckoutPaymentResponse';
import {
  GetCustomerResponse,
  getCustomerResponseSchema,
} from './getCustomerResponse';
import {
  GetDeviceResponse,
  getDeviceResponseSchema,
} from './getDeviceResponse';
import {
  GetLocationResponse,
  getLocationResponseSchema,
} from './getLocationResponse';
import {
  GetOrderItemResponse,
  getOrderItemResponseSchema,
} from './getOrderItemResponse';
import {
  GetShippingResponse,
  getShippingResponseSchema,
} from './getShippingResponse';

/** Response object for getting an Order */
export interface GetOrderResponse {
  id?: string | null;
  code?: string | null;
  amount?: number | null;
  currency?: string | null;
  /** Indicates whether the order is closed */
  closed?: boolean | null;
  items?: GetOrderItemResponse[] | null;
  customer?: GetCustomerResponse | null;
  status?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
  closedAt?: string | null;
  charges?: GetChargeResponse[] | null;
  invoiceUrl?: string | null;
  shipping?: GetShippingResponse | null;
  metadata?: Record<string, string> | null;
  /** Checkout Payment Settings Response */
  checkouts?: GetCheckoutPaymentResponse[] | null;
  /** Ip address */
  ip?: string | null;
  /** Session id */
  sessionId?: string | null;
  /** Location */
  location?: GetLocationResponse | null;
  /** Device's informations */
  device?: GetDeviceResponse | null;
}

export const getOrderResponseSchema: Schema<GetOrderResponse> = object({
  id: ['id', optional(nullable(string()))],
  code: ['code', optional(nullable(string()))],
  amount: ['amount', optional(nullable(number()))],
  currency: ['currency', optional(nullable(string()))],
  closed: ['closed', optional(nullable(boolean()))],
  items: [
    'items',
    optional(nullable(array(lazy(() => getOrderItemResponseSchema)))),
  ],
  customer: [
    'customer',
    optional(nullable(lazy(() => getCustomerResponseSchema))),
  ],
  status: ['status', optional(nullable(string()))],
  createdAt: ['created_at', optional(nullable(string()))],
  updatedAt: ['updated_at', optional(nullable(string()))],
  closedAt: ['closed_at', optional(nullable(string()))],
  charges: [
    'charges',
    optional(nullable(array(lazy(() => getChargeResponseSchema)))),
  ],
  invoiceUrl: ['invoice_url', optional(nullable(string()))],
  shipping: [
    'shipping',
    optional(nullable(lazy(() => getShippingResponseSchema))),
  ],
  metadata: ['metadata', optional(nullable(dict(string())))],
  checkouts: [
    'checkouts',
    optional(nullable(array(lazy(() => getCheckoutPaymentResponseSchema)))),
  ],
  ip: ['ip', optional(nullable(string()))],
  sessionId: ['session_id', optional(nullable(string()))],
  location: [
    'location',
    optional(nullable(lazy(() => getLocationResponseSchema))),
  ],
  device: ['device', optional(nullable(lazy(() => getDeviceResponseSchema)))],
});
