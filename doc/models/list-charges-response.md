
# List Charges Response

Response object for listing charges

## Structure

`ListChargesResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`GetChargeResponse[] \| null \| undefined`](../../doc/models/get-charge-response.md) | Optional | The charge objects |
| `paging` | [`PagingResponse \| null \| undefined`](../../doc/models/paging-response.md) | Optional | Paging object |

## Example

```ts
import { ListChargesResponse } from 'pagarmeapisdklib';

const listChargesResponse: ListChargesResponse = {
  data: [
    null
  ],
  paging: null,
};
```

