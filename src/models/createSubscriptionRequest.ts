/**
 * PagarmeApiSDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  dict,
  lazy,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import {
  CreateCardRequest,
  createCardRequestSchema,
} from './createCardRequest';
import {
  CreateCustomerRequest,
  createCustomerRequestSchema,
} from './createCustomerRequest';
import {
  CreateDiscountRequest,
  createDiscountRequestSchema,
} from './createDiscountRequest';
import {
  CreateIncrementRequest,
  createIncrementRequestSchema,
} from './createIncrementRequest';
import {
  CreatePeriodRequest,
  createPeriodRequestSchema,
} from './createPeriodRequest';
import {
  CreatePricingSchemeRequest,
  createPricingSchemeRequestSchema,
} from './createPricingSchemeRequest';
import {
  CreateSetupRequest,
  createSetupRequestSchema,
} from './createSetupRequest';
import {
  CreateShippingRequest,
  createShippingRequestSchema,
} from './createShippingRequest';
import {
  CreateSubMerchantRequest,
  createSubMerchantRequestSchema,
} from './createSubMerchantRequest';
import {
  CreateSubscriptionBoletoRequest,
  createSubscriptionBoletoRequestSchema,
} from './createSubscriptionBoletoRequest';
import {
  CreateSubscriptionItemRequest,
  createSubscriptionItemRequestSchema,
} from './createSubscriptionItemRequest';
import {
  CreateSubscriptionSplitRequest,
  createSubscriptionSplitRequestSchema,
} from './createSubscriptionSplitRequest';

/** Request for creating a subcription */
export interface CreateSubscriptionRequest {
  /** Customer */
  customer: CreateCustomerRequest;
  /** Card */
  card: CreateCardRequest;
  /** Subscription code */
  code: string;
  /** Payment method */
  paymentMethod: string;
  /** Billing type */
  billingType: string;
  /** Statement descriptor for credit card subscriptions */
  statementDescriptor: string;
  /** Subscription description */
  description: string;
  /** Currency */
  currency: string;
  /** Interval */
  interval: string;
  /** Interval count */
  intervalCount: number;
  /** Subscription pricing scheme */
  pricingScheme: CreatePricingSchemeRequest;
  /** Subscription items */
  items: CreateSubscriptionItemRequest[];
  /** Shipping */
  shipping: CreateShippingRequest;
  /** Discounts */
  discounts: CreateDiscountRequest[];
  /** Metadata */
  metadata: Record<string, string>;
  /** Setup data */
  setup?: CreateSetupRequest;
  /** Plan id */
  planId?: string;
  /** Customer id */
  customerId?: string;
  /** Card id */
  cardId?: string;
  /** Billing day */
  billingDay?: number;
  /** Number of installments */
  installments?: number;
  /** Subscription start date */
  startAt?: string;
  /** Subscription minimum price */
  minimumPrice?: number;
  /** Number of cycles */
  cycles?: number;
  /** Card token */
  cardToken?: string;
  /** Gateway Affiliation code */
  gatewayAffiliationId?: string;
  /** Quantity */
  quantity?: number;
  /** Days until boleto expires */
  boletoDueDays?: number;
  /** Increments */
  increments: CreateIncrementRequest[];
  period?: CreatePeriodRequest;
  /** SubMerchant */
  submerchant?: CreateSubMerchantRequest;
  /** Subscription's split */
  split?: CreateSubscriptionSplitRequest;
  /** Information about fines and interest on the "boleto" used from payment */
  boleto?: CreateSubscriptionBoletoRequest;
  /** Business model identifier */
  indirectAcceptor?: string;
}

export const createSubscriptionRequestSchema: Schema<CreateSubscriptionRequest> = object(
  {
    customer: ['customer', lazy(() => createCustomerRequestSchema)],
    card: ['card', lazy(() => createCardRequestSchema)],
    code: ['code', string()],
    paymentMethod: ['payment_method', string()],
    billingType: ['billing_type', string()],
    statementDescriptor: ['statement_descriptor', string()],
    description: ['description', string()],
    currency: ['currency', string()],
    interval: ['interval', string()],
    intervalCount: ['interval_count', number()],
    pricingScheme: [
      'pricing_scheme',
      lazy(() => createPricingSchemeRequestSchema),
    ],
    items: ['items', array(lazy(() => createSubscriptionItemRequestSchema))],
    shipping: ['shipping', lazy(() => createShippingRequestSchema)],
    discounts: ['discounts', array(lazy(() => createDiscountRequestSchema))],
    metadata: ['metadata', dict(string())],
    setup: ['setup', optional(lazy(() => createSetupRequestSchema))],
    planId: ['plan_id', optional(string())],
    customerId: ['customer_id', optional(string())],
    cardId: ['card_id', optional(string())],
    billingDay: ['billing_day', optional(number())],
    installments: ['installments', optional(number())],
    startAt: ['start_at', optional(string())],
    minimumPrice: ['minimum_price', optional(number())],
    cycles: ['cycles', optional(number())],
    cardToken: ['card_token', optional(string())],
    gatewayAffiliationId: ['gateway_affiliation_id', optional(string())],
    quantity: ['quantity', optional(number())],
    boletoDueDays: ['boleto_due_days', optional(number())],
    increments: ['increments', array(lazy(() => createIncrementRequestSchema))],
    period: ['period', optional(lazy(() => createPeriodRequestSchema))],
    submerchant: [
      'submerchant',
      optional(lazy(() => createSubMerchantRequestSchema)),
    ],
    split: [
      'split',
      optional(lazy(() => createSubscriptionSplitRequestSchema)),
    ],
    boleto: [
      'boleto',
      optional(lazy(() => createSubscriptionBoletoRequestSchema)),
    ],
    indirectAcceptor: ['indirect_acceptor', optional(string())],
  }
);
