
# List Subscription Items Response

Response model for listing subscription items

## Structure

`ListSubscriptionItemsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`GetSubscriptionItemResponse[] \| null \| undefined`](../../doc/models/get-subscription-item-response.md) | Optional | The subscription items |
| `paging` | [`PagingResponse \| null \| undefined`](../../doc/models/paging-response.md) | Optional | Paging object |

## Example

```ts
import { ListSubscriptionItemsResponse } from 'pagarmeapisdklib';

const listSubscriptionItemsResponse: ListSubscriptionItemsResponse = {
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

