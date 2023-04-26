
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

## Example (as JSON)

```json
{
  "payment_method": null,
  "card_id": null,
  "card": {
    "type": "credit"
  }
}
```

