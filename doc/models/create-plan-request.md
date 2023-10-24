
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
      "name": "name8",
      "pricing_scheme": {
        "scheme_type": "scheme_type8",
        "price_brackets": [
          {
            "start_quantity": 144,
            "price": 174,
            "end_quantity": 152,
            "overage_price": 166
          },
          {
            "start_quantity": 144,
            "price": 174,
            "end_quantity": 152,
            "overage_price": 166
          },
          {
            "start_quantity": 144,
            "price": 174,
            "end_quantity": 152,
            "overage_price": 166
          }
        ],
        "price": 166,
        "minimum_price": 6,
        "percentage": 251.76
      },
      "id": "id8",
      "description": "description2",
      "cycles": 214,
      "quantity": 22
    }
  ],
  "shippable": false,
  "payment_methods": [
    "payment_methods5",
    "payment_methods4"
  ],
  "installments": [
    195,
    196
  ],
  "currency": "currency0",
  "interval": "interval8",
  "interval_count": 158,
  "billing_days": [
    159
  ],
  "billing_type": "billing_type4",
  "pricing_scheme": {
    "scheme_type": "scheme_type8",
    "price_brackets": [
      {
        "start_quantity": 144,
        "price": 174,
        "end_quantity": 152,
        "overage_price": 166
      },
      {
        "start_quantity": 144,
        "price": 174,
        "end_quantity": 152,
        "overage_price": 166
      },
      {
        "start_quantity": 144,
        "price": 174,
        "end_quantity": 152,
        "overage_price": 166
      }
    ],
    "price": 166,
    "minimum_price": 6,
    "percentage": 251.76
  },
  "metadata": {
    "key0": "metadata7"
  },
  "minimum_price": 156,
  "cycles": 164,
  "quantity": 144,
  "trial_period_days": 130
}
```

