
# List Increments Response

## Structure

`ListIncrementsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`GetIncrementResponse[] \| null \| undefined`](../../doc/models/get-increment-response.md) | Optional | The Increments response |
| `paging` | [`PagingResponse \| null \| undefined`](../../doc/models/paging-response.md) | Optional | Paging object |

## Example

```ts
import { ListIncrementsResponse } from 'pagarmeapisdklib';

const listIncrementsResponse: ListIncrementsResponse = {
  data: [
    null,
    {
    }
  ],
  paging: null,
};
```

