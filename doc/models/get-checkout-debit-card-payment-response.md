
# Get Checkout Debit Card Payment Response

## Structure

`GetCheckoutDebitCardPaymentResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `statementDescriptor` | `string \| null \| undefined` | Optional | Descrição na fatura |
| `authentication` | [`GetPaymentAuthenticationResponse \| null \| undefined`](../../doc/models/get-payment-authentication-response.md) | Optional | Payment Authentication response object data |

## Example

```ts
import { GetCheckoutDebitCardPaymentResponse } from 'pagarmeapisdklib';

const getCheckoutDebitCardPaymentResponse: GetCheckoutDebitCardPaymentResponse = {
  statementDescriptor: 'statement_descriptor6',
  authentication: null,
};
```

