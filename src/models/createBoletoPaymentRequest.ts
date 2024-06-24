/**
 * PagarmeApiSDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
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
import {
  CreateFineRequest,
  createFineRequestSchema,
} from './createFineRequest';
import {
  CreateInterestRequest,
  createInterestRequestSchema,
} from './createInterestRequest';

/** Contains the settings for creating a boleto payment */
export interface CreateBoletoPaymentRequest {
  /** Number of retries */
  retries: number;
  /** The bank code, containing three characters. The available codes are on the API specification */
  bank?: string | null;
  /** The instructions field that will be printed on the boleto. */
  instructions: string;
  /** Boleto due date */
  dueAt?: string | null;
  /** Card's billing address */
  billingAddress: CreateAddressRequest;
  /** The address id for the billing address */
  billingAddressId?: string | null;
  /** Customer identification number with the bank */
  nossoNumero?: string | null;
  /** Boleto identification */
  documentNumber: string;
  /** Soft Descriptor */
  statementDescriptor: string;
  interest?: CreateInterestRequest | null;
  fine?: CreateFineRequest | null;
  maxDaysToPayPastDue?: number | null;
}

export const createBoletoPaymentRequestSchema: Schema<CreateBoletoPaymentRequest> = object(
  {
    retries: ['retries', number()],
    bank: ['bank', optional(nullable(string()))],
    instructions: ['instructions', string()],
    dueAt: ['due_at', optional(nullable(string()))],
    billingAddress: ['billing_address', lazy(() => createAddressRequestSchema)],
    billingAddressId: ['billing_address_id', optional(nullable(string()))],
    nossoNumero: ['nosso_numero', optional(nullable(string()))],
    documentNumber: ['document_number', string()],
    statementDescriptor: ['statement_descriptor', string()],
    interest: [
      'interest',
      optional(nullable(lazy(() => createInterestRequestSchema))),
    ],
    fine: ['fine', optional(nullable(lazy(() => createFineRequestSchema)))],
    maxDaysToPayPastDue: [
      'max_days_to_pay_past_due',
      optional(nullable(number())),
    ],
  }
);
