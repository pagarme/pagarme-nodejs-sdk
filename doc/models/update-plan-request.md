
# Update Plan Request

Request for updating a plan

## Structure

`UpdatePlanRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string` | Required | Plan's name |
| `description` | `string` | Required | Description |
| `installments` | `number[]` | Required | Number os installments |
| `statementDescriptor` | `string` | Required | Text that will be shown on the credit card's statement |
| `currency` | `string` | Required | Currency |
| `interval` | `string` | Required | Interval |
| `intervalCount` | `number` | Required | Interval count |
| `paymentMethods` | `string[]` | Required | Payment methods accepted by the plan |
| `billingType` | `string` | Required | Billing type |
| `status` | `string` | Required | Plan status |
| `shippable` | `boolean` | Required | Indicates if the plan is shippable |
| `billingDays` | `number[]` | Required | Billing days accepted by the plan |
| `metadata` | `Record<string, string>` | Required | Metadata |
| `minimumPrice` | `number \| undefined` | Optional | Minimum price |
| `trialPeriodDays` | `number \| undefined` | Optional | Number of trial period in days, where the customer will not be charged |

## Example

```ts
import { UpdatePlanRequest } from 'pagarmeapisdklib';

const updatePlanRequest: UpdatePlanRequest = {
  name: 'name8',
  description: 'description8',
  installments: [
    139,
    140,
    141
  ],
  statementDescriptor: 'statement_descriptor8',
  currency: 'currency8',
  interval: 'interval6',
  intervalCount: 102,
  paymentMethods: [
    'payment_methods3',
    'payment_methods2'
  ],
  billingType: 'billing_type8',
  status: 'status0',
  shippable: false,
  billingDays: [
    103,
    104
  ],
  metadata: {
    'key0': 'metadata5',
    'key1': 'metadata6',
    'key2': 'metadata7'
  },
  minimumPrice: 156,
  trialPeriodDays: 74,
};
```

