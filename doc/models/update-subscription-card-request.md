
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
    "type": "credit"
  },
  "card_id": null
}
```

