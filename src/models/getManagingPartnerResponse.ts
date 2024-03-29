/**
 * PagarmeApiSDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  boolean,
  lazy,
  nullable,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import {
  GetPhoneNumberResponse,
  getPhoneNumberResponseSchema,
} from './getPhoneNumberResponse';
import {
  GetRegisterInformationAddressResponse,
  getRegisterInformationAddressResponseSchema,
} from './getRegisterInformationAddressResponse';

/** Response object for getting an ManagingPartnerResponse */
export interface GetManagingPartnerResponse {
  name?: string | null;
  email?: string | null;
  document?: string | null;
  type?: string | null;
  motherName?: string | null;
  birthdate?: string | null;
  monthlyIncome?: string | null;
  professionalOccupation?: string | null;
  selfDeclaredRepresentative?: boolean;
  address?: GetRegisterInformationAddressResponse | null;
  phoneNumbers?: GetPhoneNumberResponse[] | null;
}

export const getManagingPartnerResponseSchema: Schema<GetManagingPartnerResponse> = object(
  {
    name: ['name', optional(nullable(string()))],
    email: ['email', optional(nullable(string()))],
    document: ['document', optional(nullable(string()))],
    type: ['type', optional(nullable(string()))],
    motherName: ['mother_name', optional(nullable(string()))],
    birthdate: ['birthdate', optional(nullable(string()))],
    monthlyIncome: ['monthly_income', optional(nullable(string()))],
    professionalOccupation: [
      'professional_occupation',
      optional(nullable(string())),
    ],
    selfDeclaredRepresentative: [
      'self_declared_representative',
      optional(boolean()),
    ],
    address: [
      'address',
      optional(
        nullable(lazy(() => getRegisterInformationAddressResponseSchema))
      ),
    ],
    phoneNumbers: [
      'phone_numbers',
      optional(nullable(array(lazy(() => getPhoneNumberResponseSchema)))),
    ],
  }
);
