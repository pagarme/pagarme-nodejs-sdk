
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
| `initiatedType` | `string \| undefined` | Optional | - |
| `recurrenceModel` | `string \| undefined` | Optional | - |
| `paymentOrigin` | [`CreatePaymentOriginRequest \| undefined`](../../doc/models/create-payment-origin-request.md) | Optional | - |
| `indirectAcceptor` | `string \| undefined` | Optional | Business model identifier |

## Example (as JSON)

```json
{
  "update_subscription": false,
  "card_id": "card_id2",
  "card": {
    "type": "credit",
    "number": "number6",
    "holder_name": "holder_name2",
    "exp_month": 228,
    "exp_year": 68,
    "cvv": "cvv4"
  },
  "recurrence": false,
  "initiated_type": "initiated_type8",
  "recurrence_model": "recurrence_model6",
  "payment_origin": {
    "brand_id": "brand_id8",
    "charge_id": "charge_id2"
  },
  "indirect_acceptor": "indirect_acceptor2"
}
```

