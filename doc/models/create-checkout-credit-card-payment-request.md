
# Create Checkout Credit Card Payment Request

Checkout card payment request

## Structure

`CreateCheckoutCreditCardPaymentRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `statementDescriptor` | `string \| undefined` | Optional | Card invoice text descriptor |
| `installments` | [`CreateCheckoutCardInstallmentOptionRequest[] \| undefined`](../../doc/models/create-checkout-card-installment-option-request.md) | Optional | Payment installment options |
| `authentication` | [`CreatePaymentAuthenticationRequest \| undefined`](../../doc/models/create-payment-authentication-request.md) | Optional | Creates payment authentication |
| `capture` | `boolean \| undefined` | Optional | Authorize and capture? |

## Example

```ts
import { CreateCheckoutCreditCardPaymentRequest } from 'pagarmeapisdklib';

const createCheckoutCreditCardPaymentRequest: CreateCheckoutCreditCardPaymentRequest = {
  statementDescriptor: 'statement_descriptor8',
  installments: [
    {},
    {
      number: 0,
      total: 0,
    }
  ],
  authentication: {},
  capture: false,
};
```

