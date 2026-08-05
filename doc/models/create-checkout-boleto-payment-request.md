
# Create Checkout Boleto Payment Request

## Structure

`CreateCheckoutBoletoPaymentRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `bank` | `string` | Required | Bank identifier |
| `instructions` | `string` | Required | Instructions |
| `dueAt` | `string` | Required | Due date |

## Example

```ts
import { CreateCheckoutBoletoPaymentRequest } from 'pagarmeapisdklib';

const createCheckoutBoletoPaymentRequest: CreateCheckoutBoletoPaymentRequest = {
  bank: 'bank6',
  instructions: 'instructions6',
  dueAt: '2016-03-13T12:52:32.123Z',
};
```

