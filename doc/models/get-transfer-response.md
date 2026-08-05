
# Get Transfer Response

Transfer response

## Structure

`GetTransferResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| null \| undefined` | Optional | Id |
| `amount` | `number \| null \| undefined` | Optional | Transfer amount |
| `status` | `string \| null \| undefined` | Optional | Transfer status |
| `createdAt` | `string \| null \| undefined` | Optional | Transfer creation date |
| `updatedAt` | `string \| null \| undefined` | Optional | Transfer last update date |
| `bankAccount` | [`GetBankAccountResponse \| null \| undefined`](../../doc/models/get-bank-account-response.md) | Optional | Bank account |
| `metadata` | `Record<string, string> \| null \| undefined` | Optional | Metadata |

## Example

```ts
import { GetTransferResponse } from 'pagarmeapisdklib';

const getTransferResponse: GetTransferResponse = {
  id: 'id8',
  amount: 244,
  status: 'status0',
  createdAt: '2016-03-13T12:52:32.123Z',
  updatedAt: '2016-03-13T12:52:32.123Z',
};
```

