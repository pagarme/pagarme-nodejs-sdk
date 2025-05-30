/**
 * PagarmeApiSDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, lazy, object, optional, Schema, string } from '../schema';
import {
  CreateCardRequest,
  createCardRequestSchema,
} from './createCardRequest';
import {
  CreatePaymentOriginRequest,
  createPaymentOriginRequestSchema,
} from './createPaymentOriginRequest';

/** Request for updating card data */
export interface UpdateChargeCardRequest {
  /** Indicates if the subscriptions using this card must also be updated */
  updateSubscription: boolean;
  /** Card id */
  cardId: string;
  /** Card data */
  card: CreateCardRequest;
  /** Indicates a recurrence */
  recurrence: boolean;
  initiatedType?: string;
  recurrenceModel?: string;
  paymentOrigin?: CreatePaymentOriginRequest;
  /** Business model identifier */
  indirectAcceptor?: string;
}

export const updateChargeCardRequestSchema: Schema<UpdateChargeCardRequest> = object(
  {
    updateSubscription: ['update_subscription', boolean()],
    cardId: ['card_id', string()],
    card: ['card', lazy(() => createCardRequestSchema)],
    recurrence: ['recurrence', boolean()],
    initiatedType: ['initiated_type', optional(string())],
    recurrenceModel: ['recurrence_model', optional(string())],
    paymentOrigin: [
      'payment_origin',
      optional(lazy(() => createPaymentOriginRequestSchema)),
    ],
    indirectAcceptor: ['indirect_acceptor', optional(string())],
  }
);
