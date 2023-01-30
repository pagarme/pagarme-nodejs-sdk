
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
  "name": "name0",
  "description": "description0",
  "status": "status8",
  "pricing_scheme": {
    "scheme_type": "scheme_type8",
    "price_brackets": [
      {
        "start_quantity": 119,
        "price": 57,
        "end_quantity": null,
        "overage_price": null
      },
      {
        "start_quantity": 120,
        "price": 58,
        "end_quantity": null,
        "overage_price": null
      },
      {
        "start_quantity": 121,
        "price": 59,
        "end_quantity": null,
        "overage_price": null
      }
    ],
    "price": null,
    "minimum_price": null,
    "percentage": null
  },
  "quantity": null,
  "cycles": null
}
```

