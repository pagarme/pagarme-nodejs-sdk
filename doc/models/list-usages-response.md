
# List Usages Response

Response model for listing the usages from a subscription item

## Structure

`ListUsagesResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`GetUsageResponse[] \| null \| undefined`](../../doc/models/get-usage-response.md) | Optional | The usage objects |
| `paging` | [`PagingResponse \| null \| undefined`](../../doc/models/paging-response.md) | Optional | Paging object |

## Example

```ts
import { ListUsagesResponse } from 'pagarmeapisdklib';

const listUsagesResponse: ListUsagesResponse = {
  data: [
    null
  ],
  paging: null,
};
```

