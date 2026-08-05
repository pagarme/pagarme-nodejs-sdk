
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
| `initiatedType` | `string \| undefined` | Optional | - |
| `recurrenceModel` | `string \| undefined` | Optional | - |
| `paymentOrigin` | [`CreatePaymentOriginRequest \| undefined`](../../doc/models/create-payment-origin-request.md) | Optional | - |

## Example

```ts
import { CreateDebitCardPaymentRequest } from 'pagarmeapisdklib';

const createDebitCardPaymentRequest: CreateDebitCardPaymentRequest = {
  statementDescriptor: 'statement_descriptor0',
  card: {},
  cardId: 'card_id6',
  cardToken: 'card_token0',
  recurrence: false,
};
```

