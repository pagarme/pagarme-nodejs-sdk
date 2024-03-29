/**
 * PagarmeApiSDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, nullable, object, optional, Schema } from '../schema';
import { GetPhoneResponse, getPhoneResponseSchema } from './getPhoneResponse';

export interface GetPhonesResponse {
  homePhone?: GetPhoneResponse | null;
  mobilePhone?: GetPhoneResponse | null;
}

export const getPhonesResponseSchema: Schema<GetPhonesResponse> = object({
  homePhone: [
    'home_phone',
    optional(nullable(lazy(() => getPhoneResponseSchema))),
  ],
  mobilePhone: [
    'mobile_phone',
    optional(nullable(lazy(() => getPhoneResponseSchema))),
  ],
});
