
# Update Subscription Payment Method Request

Request for updating a subscription's payment method

## Structure

`UpdateSubscriptionPaymentMethodRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `paymentMethod` | `string` | Required | The new payment method |
| `cardId` | `string` | Required | Card id |
| `card` | [`CreateCardRequest`](../../doc/models/create-card-request.md) | Required | Card data |
| `cardToken` | `string \| undefined` | Optional | The Card Token |
| `boleto` | [`CreateSubscriptionBoletoRequest \| undefined`](../../doc/models/create-subscription-boleto-request.md) | Optional | Information about fines and interest on the "boleto" used from payment |
| `indirectAcceptor` | `string \| null \| undefined` | Optional | Business model identifier |

## Example (as JSON)

```json
{
  "payment_method": "payment_method4",
  "card_id": "card_id2",
  "card": {
    "type": "credit",
    "number": "number6",
    "holder_name": "holder_name2",
    "exp_month": 228,
    "exp_year": 68,
    "cvv": "cvv4"
  },
  "card_token": "card_token4",
  "boleto": {
    "interest": {
      "days": 156,
      "type": "type0",
      "amount": 230
    },
    "fine": {
      "days": 138,
      "type": "type2",
      "amount": 212
    },
    "max_days_to_pay_past_due": 118
  },
  "indirect_acceptor": "indirect_acceptor2"
}
```

