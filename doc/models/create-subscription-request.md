
# Create Subscription Request

Request for creating a subcription

## Structure

`CreateSubscriptionRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customer` | [`CreateCustomerRequest`](../../doc/models/create-customer-request.md) | Required | Customer |
| `card` | [`CreateCardRequest`](../../doc/models/create-card-request.md) | Required | Card |
| `code` | `string` | Required | Subscription code |
| `paymentMethod` | `string` | Required | Payment method |
| `billingType` | `string` | Required | Billing type |
| `statementDescriptor` | `string` | Required | Statement descriptor for credit card subscriptions |
| `description` | `string` | Required | Subscription description |
| `currency` | `string` | Required | Currency |
| `interval` | `string` | Required | Interval |
| `intervalCount` | `number` | Required | Interval count |
| `pricingScheme` | [`CreatePricingSchemeRequest`](../../doc/models/create-pricing-scheme-request.md) | Required | Subscription pricing scheme |
| `items` | [`CreateSubscriptionItemRequest[]`](../../doc/models/create-subscription-item-request.md) | Required | Subscription items |
| `shipping` | [`CreateShippingRequest`](../../doc/models/create-shipping-request.md) | Required | Shipping |
| `discounts` | [`CreateDiscountRequest[]`](../../doc/models/create-discount-request.md) | Required | Discounts |
| `metadata` | `Record<string, string>` | Required | Metadata |
| `setup` | [`CreateSetupRequest \| undefined`](../../doc/models/create-setup-request.md) | Optional | Setup data |
| `planId` | `string \| undefined` | Optional | Plan id |
| `customerId` | `string \| undefined` | Optional | Customer id |
| `cardId` | `string \| undefined` | Optional | Card id |
| `billingDay` | `number \| undefined` | Optional | Billing day |
| `installments` | `number \| undefined` | Optional | Number of installments |
| `startAt` | `string \| undefined` | Optional | Subscription start date |
| `minimumPrice` | `number \| undefined` | Optional | Subscription minimum price |
| `cycles` | `number \| undefined` | Optional | Number of cycles |
| `cardToken` | `string \| undefined` | Optional | Card token |
| `gatewayAffiliationId` | `string \| undefined` | Optional | Gateway Affiliation code |
| `quantity` | `number \| undefined` | Optional | Quantity |
| `boletoDueDays` | `number \| undefined` | Optional | Days until boleto expires |
| `increments` | [`CreateIncrementRequest[]`](../../doc/models/create-increment-request.md) | Required | Increments |
| `period` | [`CreatePeriodRequest \| undefined`](../../doc/models/create-period-request.md) | Optional | - |
| `submerchant` | [`CreateSubMerchantRequest \| undefined`](../../doc/models/create-sub-merchant-request.md) | Optional | SubMerchant |
| `split` | [`CreateSubscriptionSplitRequest \| undefined`](../../doc/models/create-subscription-split-request.md) | Optional | Subscription's split |
| `boleto` | [`CreateSubscriptionBoletoRequest \| undefined`](../../doc/models/create-subscription-boleto-request.md) | Optional | Information about fines and interest on the "boleto" used from payment |
| `indirectAcceptor` | `string \| undefined` | Optional | Business model identifier |

## Example

```ts
import { CreateSubscriptionRequest } from 'pagarmeapisdklib';

const createSubscriptionRequest: CreateSubscriptionRequest = {
  customer: {
    name: 'Tony Stark',
    email: '',
    document: '',
    type: '',
    address: {},
    metadata: {},
    phones: {},
    code: '',
    gender: 'gender6',
    documentType: 'document_type8',
  },
  card: {
    number: 'number6',
    holderName: 'holder_name2',
    expMonth: 228,
    expYear: 68,
    cvv: 'cvv4',
    type: 'credit',
  },
  code: '',
  paymentMethod: '',
  billingType: '',
  statementDescriptor: '',
  description: '',
  currency: '',
  interval: '',
  intervalCount: 0,
  pricingScheme: {},
  items: [
    {
      description: '',
      pricingScheme: {},
      id: '',
      planItemId: '',
      discounts: [
        {}
      ],
      name: '',
      cycles: 214,
      quantity: 22,
      minimumPrice: 222,
    }
  ],
  shipping: {},
  discounts: [
    {}
  ],
  metadata: {},
  increments: [
    {}
  ],
  setup: {},
  planId: 'plan_id8',
  customerId: 'customer_id4',
  cardId: 'card_id2',
  billingDay: 226,
};
```

