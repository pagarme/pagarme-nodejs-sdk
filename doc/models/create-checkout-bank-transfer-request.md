
# Create Checkout Bank Transfer Request

Checkout bank transfer payment request

## Structure

`CreateCheckoutBankTransferRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `bank` | `string[]` | Required | Bank |
| `retries` | `number` | Required | Number of retries for processing |

## Example

```ts
import { CreateCheckoutBankTransferRequest } from 'pagarmeapisdklib';

const createCheckoutBankTransferRequest: CreateCheckoutBankTransferRequest = {
  bank: [
    'bank1',
    'bank2',
    'bank3'
  ],
  retries: 56,
};
```

