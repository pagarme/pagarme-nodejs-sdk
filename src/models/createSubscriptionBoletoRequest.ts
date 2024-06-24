/**
 * PagarmeApiSDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, nullable, number, object, optional, Schema } from '../schema';
import {
  CreateFineRequest,
  createFineRequestSchema,
} from './createFineRequest';
import {
  CreateInterestRequest,
  createInterestRequestSchema,
} from './createInterestRequest';

/** Information about fines and interest on the "boleto" used from payment */
export interface CreateSubscriptionBoletoRequest {
  interest?: CreateInterestRequest;
  fine?: CreateFineRequest;
  maxDaysToPayPastDue?: number | null;
}

export const createSubscriptionBoletoRequestSchema: Schema<CreateSubscriptionBoletoRequest> = object(
  {
    interest: ['interest', optional(lazy(() => createInterestRequestSchema))],
    fine: ['fine', optional(lazy(() => createFineRequestSchema))],
    maxDaysToPayPastDue: [
      'max_days_to_pay_past_due',
      optional(nullable(number())),
    ],
  }
);
