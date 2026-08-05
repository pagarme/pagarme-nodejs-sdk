
# List Invoices Response

Response object for listing invoices

## Structure

`ListInvoicesResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`GetInvoiceResponse[] \| null \| undefined`](../../doc/models/get-invoice-response.md) | Optional | The Invoice objects |
| `paging` | [`PagingResponse \| null \| undefined`](../../doc/models/paging-response.md) | Optional | Paging object |

## Example

```ts
import { ListInvoicesResponse } from 'pagarmeapisdklib';

const listInvoicesResponse: ListInvoicesResponse = {
  data: [
    null
  ],
  paging: null,
};
```

