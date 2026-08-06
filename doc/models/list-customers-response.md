
# List Customers Response

Response for listing the customers

## Structure

`ListCustomersResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`GetCustomerResponse[] \| null \| undefined`](../../doc/models/get-customer-response.md) | Optional | The customer object |
| `paging` | [`PagingResponse \| null \| undefined`](../../doc/models/paging-response.md) | Optional | Paging object |

## Example

```ts
import { ListCustomersResponse } from 'pagarmeapisdklib';

const listCustomersResponse: ListCustomersResponse = {
  data: [
    null
  ],
  paging: null,
};
```

