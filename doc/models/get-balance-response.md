
# Get Balance Response

Balance

## Structure

`GetBalanceResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `currency` | `string \| null \| undefined` | Optional | Currency (official ISO 4217 currency names) |
| `availableAmount` | `bigint \| null \| undefined` | Optional | Amount available for transferring in cents |
| `recipient` | [`GetRecipientResponse \| null \| undefined`](../../doc/models/get-recipient-response.md) | Optional | Recipient |
| `transferredAmount` | `bigint \| null \| undefined` | Optional | Amount transfered in cents |
| `waitingFundsAmount` | `bigint \| null \| undefined` | Optional | Amount waiting in cents |
| `paymentProfileId` | `string \| null` | Required | Operational id of merchant in payments operations (new) |

## Example

```ts
import { GetBalanceResponse } from 'pagarmeapisdklib';

const getBalanceResponse: GetBalanceResponse = {
  paymentProfileId: 'pp_abcdefghoj20klmn09k',
  currency: 'BRL',
  availableAmount: BigInt(4996),
  recipient: {
    id: 're_abcdefghoj20klmn09k',
    name: 'Lojista Recebedor LTDA',
    email: 'email@stone.com.br',
    document: '01032644222100',
    description: null,
    type: null,
    status: 'active',
    createdAt: '2026-06-22T19:13:52Z',
    updatedAt: null,
    deletedAt: null,
    code: null,
    paymentMode: null,
  },
  transferredAmount: null,
  waitingFundsAmount: BigInt(0),
};
```

