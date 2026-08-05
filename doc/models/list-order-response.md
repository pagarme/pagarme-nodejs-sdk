
# List Order Response

Response object for listing order objects

## Structure

`ListOrderResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`GetOrderResponse[] \| null \| undefined`](../../doc/models/get-order-response.md) | Optional | The order object |
| `paging` | [`PagingResponse \| null \| undefined`](../../doc/models/paging-response.md) | Optional | Paging object |

## Example

```ts
import { ListOrderResponse } from 'pagarmeapisdklib';

const listOrderResponse: ListOrderResponse = {
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

