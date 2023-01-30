
# Create Subscription Item Request

Request for creating a new subscription item

## Structure

`CreateSubscriptionItemRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `description` | `string` | Required | Item description |
| `pricingScheme` | [`CreatePricingSchemeRequest`](../../doc/models/create-pricing-scheme-request.md) | Required | Pricing scheme |
| `id` | `string` | Required | Item id |
| `planItemId` | `string` | Required | Plan item id |
| `discounts` | [`CreateDiscountRequest[]`](../../doc/models/create-discount-request.md) | Required | Discounts for the item |
| `name` | `string` | Required | Item name |
| `cycles` | `number \| undefined` | Optional | Number of cycles which the item will be charged |
| `quantity` | `number \| undefined` | Optional | Quantity of items |
| `minimumPrice` | `number \| undefined` | Optional | Minimum price |

## Example (as JSON)

```json
{
  "description": "description0",
  "pricing_scheme": {
    "scheme_type": "scheme_type8",
    "price_brackets": null,
    "price": null,
    "minimum_price": null,
    "percentage": null
  },
  "id": "id0",
  "plan_item_id": "plan_item_id0",
  "discounts": [
    {
      "value": 10.23,
      "discount_type": "discount_type9",
      "item_id": "item_id1",
      "cycles": null,
      "description": null
    },
    {
      "value": 10.24,
      "discount_type": "discount_type0",
      "item_id": "item_id2",
      "cycles": null,
      "description": null
    },
    {
      "value": 10.25,
      "discount_type": "discount_type1",
      "item_id": "item_id3",
      "cycles": null,
      "description": null
    }
  ],
  "name": "name0",
  "cycles": null,
  "quantity": null,
  "minimum_price": null
}
```

