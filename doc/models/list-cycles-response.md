
# List Cycles Response

Response object for listing subscription cycles

## Structure

`ListCyclesResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`GetPeriodResponse[] \| null \| undefined`](../../doc/models/get-period-response.md) | Optional | The subscription cycles objects |
| `paging` | [`PagingResponse \| null \| undefined`](../../doc/models/paging-response.md) | Optional | Paging object |

## Example

```ts
import { ListCyclesResponse } from 'pagarmeapisdklib';

const listCyclesResponse: ListCyclesResponse = {
  data: [
    null,
    {
    },
    {
    }
  ],
  paging: null,
};
```

