
# List Charge Transactions Response

Response object for listing charge transactions

## Structure

`ListChargeTransactionsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`GetTransactionResponse[] \| null \| undefined`](../../doc/models/get-transaction-response.md) | Optional | The charge transactions objects |
| `paging` | [`PagingResponse \| null \| undefined`](../../doc/models/paging-response.md) | Optional | Paging object |

## Example

```ts
import { ListChargeTransactionsResponse } from 'pagarmeapisdklib';

const listChargeTransactionsResponse: ListChargeTransactionsResponse = {
  data: [
    null
  ],
  paging: null,
};
```

