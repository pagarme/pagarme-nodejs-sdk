
# Create Plan Item Request

Request for creating a plan item

## Structure

`CreatePlanItemRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string` | Required | Item name |
| `pricingScheme` | [`CreatePricingSchemeRequest`](../../doc/models/create-pricing-scheme-request.md) | Required | Item's pricing scheme |
| `id` | `string` | Required | Item's id |
| `description` | `string` | Required | Item's description |
| `cycles` | `number \| undefined` | Optional | Number of cycles where the item will be charged |
| `quantity` | `number \| undefined` | Optional | Quantity |

## Example (as JSON)

```json
{
  "name": "name0",
  "pricing_scheme": {
    "scheme_type": "scheme_type8",
    "price_brackets": null,
    "price": null,
    "minimum_price": null,
    "percentage": null
  },
  "id": "id0",
  "description": "description0",
  "cycles": null,
  "quantity": null
}
```

