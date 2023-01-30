
# Create Debit Card Payment Request

The settings for creating a debit card payment

## Structure

`CreateDebitCardPaymentRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `statementDescriptor` | `string \| undefined` | Optional | The text that will be shown on the debit card's statement |
| `card` | [`CreateCardRequest \| undefined`](../../doc/models/create-card-request.md) | Optional | Debit card data |
| `cardId` | `string \| undefined` | Optional | The debit card id |
| `cardToken` | `string \| undefined` | Optional | The debit card token |
| `recurrence` | `boolean \| undefined` | Optional | Indicates a recurrence |
| `authentication` | [`CreatePaymentAuthenticationRequest \| undefined`](../../doc/models/create-payment-authentication-request.md) | Optional | The payment authentication request |
| `token` | [`CreateCardPaymentContactlessRequest \| undefined`](../../doc/models/create-card-payment-contactless-request.md) | Optional | The Debit card payment token request |

## Example (as JSON)

```json
{
  "statement_descriptor": null,
  "card": null,
  "card_id": null,
  "card_token": null,
  "recurrence": null,
  "authentication": null,
  "token": null
}
```

