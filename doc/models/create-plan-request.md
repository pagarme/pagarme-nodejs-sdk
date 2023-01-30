
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

## Example (as JSON)

```json
{
  "name": "name0",
  "description": "description0",
  "statement_descriptor": "statement_descriptor0",
  "items": [
    {
      "name": "name7",
      "pricing_scheme": {
        "scheme_type": "scheme_type1",
        "price_brackets": null,
        "price": null,
        "minimum_price": null,
        "percentage": null
      },
      "id": "id7",
      "description": "description7",
      "cycles": null,
      "quantity": null
    },
    {
      "name": "name8",
      "pricing_scheme": {
        "scheme_type": "scheme_type0",
        "price_brackets": null,
        "price": null,
        "minimum_price": null,
        "percentage": null
      },
      "id": "id8",
      "description": "description8",
      "cycles": null,
      "quantity": null
    }
  ],
  "shippable": false,
  "payment_methods": [
    "payment_methods5",
    "payment_methods6"
  ],
  "installments": [
    119,
    120,
    121
  ],
  "currency": "currency0",
  "interval": "interval2",
  "interval_count": 82,
  "billing_days": [
    143,
    144,
    145
  ],
  "billing_type": "billing_type6",
  "pricing_scheme": {
    "scheme_type": "scheme_type8",
    "price_brackets": null,
    "price": null,
    "minimum_price": null,
    "percentage": null
  },
  "metadata": {
    "key0": "metadata3",
    "key1": "metadata4",
    "key2": "metadata5"
  },
  "minimum_price": null,
  "cycles": null,
  "quantity": null,
  "trial_period_days": null
}
```

