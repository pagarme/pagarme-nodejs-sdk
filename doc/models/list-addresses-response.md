
# List Addresses Response

Response object for listing addresses

## Structure

`ListAddressesResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`GetAddressResponse[] \| null \| undefined`](../../doc/models/get-address-response.md) | Optional | The address objects |
| `paging` | [`PagingResponse \| null \| undefined`](../../doc/models/paging-response.md) | Optional | Paging object |

## Example

```ts
import { ListAddressesResponse } from 'pagarmeapisdklib';

const listAddressesResponse: ListAddressesResponse = {
  data: [
    null,
    {
    }
  ],
  paging: null,
};
```

