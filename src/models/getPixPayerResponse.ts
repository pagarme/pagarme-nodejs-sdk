/**
 * PagarmeApiSDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, nullable, object, optional, Schema, string } from '../schema';
import {
  GetPixBankAccountResponse,
  getPixBankAccountResponseSchema,
} from './getPixBankAccountResponse';

/** Pix payer data. */
export interface GetPixPayerResponse {
  name?: string | null;
  document?: string | null;
  documentType?: string | null;
  bankAccount?: GetPixBankAccountResponse | null;
}

export const getPixPayerResponseSchema: Schema<GetPixPayerResponse> = object({
  name: ['name', optional(nullable(string()))],
  document: ['document', optional(nullable(string()))],
  documentType: ['document_type', optional(nullable(string()))],
  bankAccount: [
    'bank_account',
    optional(nullable(lazy(() => getPixBankAccountResponseSchema))),
  ],
});
