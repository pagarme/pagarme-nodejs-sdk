
# Get Bank Transfer Transaction Response

Response object for getting a bank transfer transaction

## Structure

`GetBankTransferTransactionResponse`

## Inherits From

[`GetTransactionResponse`](../../doc/models/get-transaction-response.md)

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `url` | `string \| undefined` | Optional | Payment url |
| `bankTid` | `string \| undefined` | Optional | Transaction identifier for the bank |
| `bank` | `string \| undefined` | Optional | Bank |
| `paidAt` | `string \| undefined` | Optional | Payment date |
| `paidAmount` | `number \| undefined` | Optional | Paid amount |

## Example

```ts
import { GetBankTransferTransactionResponse } from 'pagarmeapisdklib';

const getBankTransferTransactionResponse: GetBankTransferTransactionResponse = {
  url: 'url6',
  bankTid: 'bank_tid6',
  bank: 'bank0',
  paidAt: '2016-03-13T12:52:32.123Z',
  paidAmount: 62,
  gatewayId: 'gateway_id8',
  amount: 40,
  status: 'status6',
  success: false,
  createdAt: '2016-03-13T12:52:32.123Z',
};
```

