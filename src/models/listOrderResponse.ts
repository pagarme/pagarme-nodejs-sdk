/**
 * PagarmeApiSDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, nullable, object, optional, Schema } from '../schema';
import { GetOrderResponse, getOrderResponseSchema } from './getOrderResponse';
import { PagingResponse, pagingResponseSchema } from './pagingResponse';

/** Response object for listing order objects */
export interface ListOrderResponse {
  /** The order object */
  data?: GetOrderResponse[] | null;
  /** Paging object */
  paging?: PagingResponse | null;
}

export const listOrderResponseSchema: Schema<ListOrderResponse> = object({
  data: ['data', optional(nullable(array(lazy(() => getOrderResponseSchema))))],
  paging: ['paging', optional(nullable(lazy(() => pagingResponseSchema)))],
});
