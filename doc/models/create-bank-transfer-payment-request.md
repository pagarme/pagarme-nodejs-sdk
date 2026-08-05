
# Create Bank Transfer Payment Request

Request for creating a bank transfer payment

## Structure

`CreateBankTransferPaymentRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `bank` | `string` | Required | Bank |
| `retries` | `number` | Required | Number of retries |

## Example

```ts
import { CreateBankTransferPaymentRequest } from 'pagarmeapisdklib';

const createBankTransferPaymentRequest: CreateBankTransferPaymentRequest = {
  bank: 'bank6',
  retries: 20,
};
```

