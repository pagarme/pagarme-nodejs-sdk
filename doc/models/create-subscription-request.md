
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

## Example (as JSON)

```json
{
  "customer": {
    "name": "{\n    \"name\": \"Tony Stark\"\n}",
    "email": null,
    "document": null,
    "type": null,
    "address": null,
    "metadata": null,
    "phones": null,
    "code": null
  },
  "card": {
    "type": "credit"
  },
  "code": null,
  "payment_method": null,
  "billing_type": null,
  "statement_descriptor": null,
  "description": null,
  "currency": null,
  "interval": null,
  "interval_count": null,
  "pricing_scheme": null,
  "items": null,
  "shipping": null,
  "discounts": null,
  "metadata": null,
  "increments": null
}
```

