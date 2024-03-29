/**
 * PagarmeApiSDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  lazy,
  nullable,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import {
  GetPriceBracketResponse,
  getPriceBracketResponseSchema,
} from './getPriceBracketResponse';

/** Response object for getting a pricing scheme */
export interface GetPricingSchemeResponse {
  price?: number | null;
  schemeType?: string | null;
  priceBrackets?: GetPriceBracketResponse[] | null;
  minimumPrice?: number | null;
  /** percentual value used in pricing_scheme Percent */
  percentage?: number | null;
}

export const getPricingSchemeResponseSchema: Schema<GetPricingSchemeResponse> = object(
  {
    price: ['price', optional(nullable(number()))],
    schemeType: ['scheme_type', optional(nullable(string()))],
    priceBrackets: [
      'price_brackets',
      optional(nullable(array(lazy(() => getPriceBracketResponseSchema)))),
    ],
    minimumPrice: ['minimum_price', optional(nullable(number()))],
    percentage: ['percentage', optional(nullable(number()))],
  }
);
