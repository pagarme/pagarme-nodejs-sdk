
# Update Charge Card Request

Request for updating card data

## Structure

`UpdateChargeCardRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `updateSubscription` | `boolean` | Required | Indicates if the subscriptions using this card must also be updated |
| `cardId` | `string` | Required | Card id |
| `card` | [`CreateCardRequest`](../../doc/models/create-card-request.md) | Required | Card data |
| `recurrence` | `boolean` | Required | Indicates a recurrence |

## Example (as JSON)

```json
{
  "update_subscription": null,
  "card_id": null,
  "card": {
    "type": "credit"
  },
  "recurrence": null
}
```

