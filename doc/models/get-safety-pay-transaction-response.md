
# Get Safety Pay Transaction Response

Response object for getting a safety pay transaction

## Structure

`GetSafetyPayTransactionResponse`

## Inherits From

[`GetTransactionResponse`](../../doc/models/get-transaction-response.md)

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `url` | `string \| null \| undefined` | Optional | Payment url |
| `bankTid` | `string \| null \| undefined` | Optional | Transaction identifier on bank |
| `paidAt` | `string \| null \| undefined` | Optional | Payment date |
| `paidAmount` | `number \| null \| undefined` | Optional | Paid amount |

## Example

```ts
import { GetSafetyPayTransactionResponse } from 'pagarmeapisdklib';

const getSafetyPayTransactionResponse: GetSafetyPayTransactionResponse = {
  url: 'url0',
  bankTid: 'bank_tid0',
  paidAt: '2016-03-13T12:52:32.123Z',
  paidAmount: 4,
  gatewayId: 'gateway_id8',
  amount: 40,
  status: 'status6',
  success: false,
  createdAt: '2016-03-13T12:52:32.123Z',
};
```

