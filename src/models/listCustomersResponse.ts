/**
 * PagarmeApiSDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, nullable, object, optional, Schema } from '../schema';
import {
  GetCustomerResponse,
  getCustomerResponseSchema,
} from './getCustomerResponse';
import { PagingResponse, pagingResponseSchema } from './pagingResponse';

/** Response for listing the customers */
export interface ListCustomersResponse {
  /** The customer object */
  data?: GetCustomerResponse[] | null;
  /** Paging object */
  paging?: PagingResponse | null;
}

export const listCustomersResponseSchema: Schema<ListCustomersResponse> = object(
  {
    data: [
      'data',
      optional(nullable(array(lazy(() => getCustomerResponseSchema)))),
    ],
    paging: ['paging', optional(nullable(lazy(() => pagingResponseSchema)))],
  }
);
