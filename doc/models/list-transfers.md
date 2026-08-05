
# List Transfers

## Structure

`ListTransfers`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`GetTransfer[]`](../../doc/models/get-transfer.md) | Required | The Increments response |
| `paging` | [`PagingResponse`](../../doc/models/paging-response.md) | Required | Paging object |

## Example

```ts
import { ListTransfers } from 'pagarmeapisdklib';

const listTransfers: ListTransfers = {
  data: [
    {}
  ],
  paging: {},
};
```

