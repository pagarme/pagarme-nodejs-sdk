
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

## Example (as JSON)

```json
{
  "name": "name0",
  "description": "description0",
  "installments": [
    121,
    122,
    123
  ],
  "statement_descriptor": "statement_descriptor0",
  "currency": "currency0",
  "interval": "interval8",
  "interval_count": 84,
  "payment_methods": [
    "payment_methods5",
    "payment_methods6"
  ],
  "billing_type": "billing_type6",
  "status": "status8",
  "shippable": false,
  "billing_days": [
    171,
    170
  ],
  "metadata": {
    "key0": "metadata3",
    "key1": "metadata4",
    "key2": "metadata5"
  },
  "minimum_price": 174,
  "trial_period_days": 56
}
```

