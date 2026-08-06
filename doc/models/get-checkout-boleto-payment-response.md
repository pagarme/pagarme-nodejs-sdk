
# Get Checkout Boleto Payment Response

## Structure

`GetCheckoutBoletoPaymentResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `dueAt` | `string \| null \| undefined` | Optional | Data de vencimento do boleto |
| `instructions` | `string \| null \| undefined` | Optional | Instruções do boleto |

## Example

```ts
import { GetCheckoutBoletoPaymentResponse } from 'pagarmeapisdklib';

const getCheckoutBoletoPaymentResponse: GetCheckoutBoletoPaymentResponse = {
  dueAt: '2016-03-13T12:52:32.123Z',
  instructions: 'instructions6',
};
```

