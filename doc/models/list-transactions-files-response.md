
# List Transactions Files Response

Response object for listing of transactions files

## Structure

`ListTransactionsFilesResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`GetTransactionReportFileResponse[] \| null \| undefined`](../../doc/models/get-transaction-report-file-response.md) | Optional | - |
| `paging` | [`PagingResponse \| null \| undefined`](../../doc/models/paging-response.md) | Optional | Paging object |

## Example

```ts
import { ListTransactionsFilesResponse } from 'pagarmeapisdklib';

const listTransactionsFilesResponse: ListTransactionsFilesResponse = {
  data: [
    null
  ],
  paging: null,
};
```

