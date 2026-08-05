
# List Subscriptions Response

Response object for listing subscriptions

## Structure

`ListSubscriptionsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`GetSubscriptionResponse[] \| null \| undefined`](../../doc/models/get-subscription-response.md) | Optional | The subscription objects |
| `paging` | [`PagingResponse \| null \| undefined`](../../doc/models/paging-response.md) | Optional | Paging object |

## Example

```ts
import { ListSubscriptionsResponse } from 'pagarmeapisdklib';

const listSubscriptionsResponse: ListSubscriptionsResponse = {
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

