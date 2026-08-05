
# Create Plan Request

Request for creating a plan

## Structure

`CreatePlanRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string` | Required | Plan's name |
| `description` | `string` | Required | Description |
| `statementDescriptor` | `string` | Required | Text that will be printed on the credit card's statement |
| `items` | [`CreatePlanItemRequest[]`](../../doc/models/create-plan-item-request.md) | Required | Plan items |
| `shippable` | `boolean` | Required | Indicates if the plan is shippable |
| `paymentMethods` | `string[]` | Required | Allowed payment methods for the plan |
| `installments` | `number[]` | Required | Number of installments |
| `currency` | `string` | Required | Currency |
| `interval` | `string` | Required | Interval |
| `intervalCount` | `number` | Required | Interval counts between two charges. For instance, if the interval is 'month' and count is 2, the customer will be charged once every two months. |
| `billingDays` | `number[]` | Required | Allowed billings days for the subscription, in case the plan type is 'exact_day' |
| `billingType` | `string` | Required | Billing type |
| `pricingScheme` | [`CreatePricingSchemeRequest`](../../doc/models/create-pricing-scheme-request.md) | Required | Plan's pricing scheme |
| `metadata` | `Record<string, string>` | Required | Metadata |
| `minimumPrice` | `number \| undefined` | Optional | Minimum price that will be charged |
| `cycles` | `number \| undefined` | Optional | Number of cycles |
| `quantity` | `number \| undefined` | Optional | Quantity |
| `trialPeriodDays` | `number \| undefined` | Optional | Trial period, where the customer will not be charged. |

## Example

```ts
import { CreatePlanRequest } from 'pagarmeapisdklib';

const createPlanRequest: CreatePlanRequest = {
  name: '',
  description: '',
  statementDescriptor: '',
  items: [
    {}
  ],
  shippable: false,
  paymentMethods: [],
  installments: [],
  currency: '',
  interval: '',
  intervalCount: 0,
  billingDays: [],
  billingType: '',
  pricingScheme: {},
  metadata: {},
  minimumPrice: 56,
  cycles: 48,
  quantity: 188,
  trialPeriodDays: 174,
};
```

