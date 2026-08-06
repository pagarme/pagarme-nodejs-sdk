
# List Transfer Response

List of paginated transfer objects

## Structure

`ListTransferResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`GetTransferResponse[] \| null \| undefined`](../../doc/models/get-transfer-response.md) | Optional | Transfers |
| `paging` | [`PagingResponse \| null \| undefined`](../../doc/models/paging-response.md) | Optional | Paging |

## Example

```ts
import { ListTransferResponse } from 'pagarmeapisdklib';

const listTransferResponse: ListTransferResponse = {
  data: [
    null
  ],
  paging: null,
};
```

