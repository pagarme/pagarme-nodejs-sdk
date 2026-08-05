
# Create Checkout Debit Card Payment Request

Checkout credit card payment request

## Structure

`CreateCheckoutDebitCardPaymentRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `statementDescriptor` | `string \| undefined` | Optional | Card invoice text descriptor |
| `authentication` | [`CreatePaymentAuthenticationRequest`](../../doc/models/create-payment-authentication-request.md) | Required | Creates payment authentication |

## Example

```ts
import { CreateCheckoutDebitCardPaymentRequest } from 'pagarmeapisdklib';

const createCheckoutDebitCardPaymentRequest: CreateCheckoutDebitCardPaymentRequest = {
  authentication: {},
  statementDescriptor: 'statement_descriptor8',
};
```

