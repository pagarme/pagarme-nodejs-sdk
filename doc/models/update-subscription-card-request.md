
# Update Subscription Card Request

Request for updating the card from a subscription

## Structure

`UpdateSubscriptionCardRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `card` | [`CreateCardRequest`](../../doc/models/create-card-request.md) | Required | Credit card data |
| `cardId` | `string` | Required | Credit card id |

## Example (as JSON)

```json
{
  "card": {
    "number": null,
    "holder_name": null,
    "exp_month": null,
    "exp_year": null,
    "cvv": null,
    "billing_address": null,
    "brand": null,
    "billing_address_id": null,
    "metadata": null,
    "type": "credit",
    "options": null,
    "private_label": null,
    "label": null
  },
  "card_id": null
}
```

