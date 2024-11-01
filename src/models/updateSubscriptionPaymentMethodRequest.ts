/**
 * PagarmeApiSDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, nullable, object, optional, Schema, string } from '../schema';
import {
  CreateCardRequest,
  createCardRequestSchema,
} from './createCardRequest';
import {
  CreateSubscriptionBoletoRequest,
  createSubscriptionBoletoRequestSchema,
} from './createSubscriptionBoletoRequest';

/** Request for updating a subscription's payment method */
export interface UpdateSubscriptionPaymentMethodRequest {
  /** The new payment method */
  paymentMethod: string;
  /** Card id */
  cardId: string;
  /** Card data */
  card: CreateCardRequest;
  /** The Card Token */
  cardToken?: string;
  /** Information about fines and interest on the "boleto" used from payment */
  boleto?: CreateSubscriptionBoletoRequest;
  /** Business model identifier */
  indirectAcceptor?: string | null;
}

export const updateSubscriptionPaymentMethodRequestSchema: Schema<UpdateSubscriptionPaymentMethodRequest> = object(
  {
    paymentMethod: ['payment_method', string()],
    cardId: ['card_id', string()],
    card: ['card', lazy(() => createCardRequestSchema)],
    cardToken: ['card_token', optional(string())],
    boleto: [
      'boleto',
      optional(lazy(() => createSubscriptionBoletoRequestSchema)),
    ],
    indirectAcceptor: ['indirect_acceptor', optional(nullable(string()))],
  }
);
