
# List Discounts Response

## Structure

`ListDiscountsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`GetDiscountResponse[] \| null \| undefined`](../../doc/models/get-discount-response.md) | Optional | The Discounts response |
| `paging` | [`PagingResponse \| null \| undefined`](../../doc/models/paging-response.md) | Optional | Paging object |

## Example

```ts
import { ListDiscountsResponse } from 'pagarmeapisdklib';

const listDiscountsResponse: ListDiscountsResponse = {
  data: [
    null,
    {
    }
  ],
  paging: null,
};
```

