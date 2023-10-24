
# Update Plan Item Request

Request for updating a plan item

## Structure

`UpdatePlanItemRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string` | Required | Item name |
| `description` | `string` | Required | Description |
| `status` | `string` | Required | Item status |
| `pricingScheme` | [`UpdatePricingSchemeRequest`](../../doc/models/update-pricing-scheme-request.md) | Required | Pricing scheme |
| `quantity` | `number \| undefined` | Optional | Quantity |
| `cycles` | `number \| undefined` | Optional | Number of cycles that the item will be charged |

## Example (as JSON)

```json
{
  "name": "name6",
  "description": "description6",
  "status": "status8",
  "pricing_scheme": {
    "scheme_type": "scheme_type8",
    "price_brackets": [
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
  "quantity": 200,
  "cycles": 36
}
```

