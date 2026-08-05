
# Get Checkout Credit Card Payment Response

## Structure

`GetCheckoutCreditCardPaymentResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `statementDescriptor` | `string \| null \| undefined` | Optional | Descrição na fatura |
| `installments` | [`GetCheckoutCardInstallmentOptionsResponse[] \| null \| undefined`](../../doc/models/get-checkout-card-installment-options-response.md) | Optional | Parcelas |
| `authentication` | [`GetPaymentAuthenticationResponse \| null \| undefined`](../../doc/models/get-payment-authentication-response.md) | Optional | Payment Authentication response |

## Example

```ts
import { GetCheckoutCreditCardPaymentResponse } from 'pagarmeapisdklib';

const getCheckoutCreditCardPaymentResponse: GetCheckoutCreditCardPaymentResponse = {
  statementDescriptor: 'statementDescriptor2',
  installments: [
    null,
    {
      number: null,
      total: null,
    },
    {
      number: null,
      total: null,
    }
  ],
  authentication: null,
};
```

