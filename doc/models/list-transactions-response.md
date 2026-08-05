
# List Transactions Response

Response object for listing transactions

## Structure

`ListTransactionsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`GetTransactionResponse[] \| null \| undefined`](../../doc/models/get-transaction-response.md) | Optional | The transaction objects |
| `paging` | [`PagingResponse \| null \| undefined`](../../doc/models/paging-response.md) | Optional | Paging object |

## Example

```ts
import { ListTransactionsResponse } from 'pagarmeapisdklib';

const listTransactionsResponse: ListTransactionsResponse = {
  data: [
    null
  ],
  paging: null,
};
```

