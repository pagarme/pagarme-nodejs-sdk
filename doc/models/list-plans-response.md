
# List Plans Response

Response object for listing plans

## Structure

`ListPlansResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`GetPlanResponse[] \| null \| undefined`](../../doc/models/get-plan-response.md) | Optional | The plan objects |
| `paging` | [`PagingResponse \| null \| undefined`](../../doc/models/paging-response.md) | Optional | Paging object |

## Example

```ts
import { ListPlansResponse } from 'pagarmeapisdklib';

const listPlansResponse: ListPlansResponse = {
  data: [
    null
  ],
  paging: null,
};
```

