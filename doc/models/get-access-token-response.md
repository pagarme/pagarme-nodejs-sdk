
# Get Access Token Response

Response object for getting a access token

## Structure

`GetAccessTokenResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| null \| undefined` | Optional | - |
| `code` | `string \| null \| undefined` | Optional | - |
| `status` | `string \| null \| undefined` | Optional | - |
| `createdAt` | `string \| null \| undefined` | Optional | - |
| `customer` | [`GetCustomerResponse \| null \| undefined`](../../doc/models/get-customer-response.md) | Optional | - |

## Example

```ts
import { GetAccessTokenResponse } from 'pagarmeapisdklib';

const getAccessTokenResponse: GetAccessTokenResponse = {
  id: 'id2',
  code: 'code0',
  status: 'status6',
  createdAt: '2016-03-13T12:52:32.123Z',
  customer: null,
};
```

