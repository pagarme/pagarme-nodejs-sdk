
# List Access Tokens Response

Response object for listing access tokens

## Structure

`ListAccessTokensResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`GetAccessTokenResponse[] \| null \| undefined`](../../doc/models/get-access-token-response.md) | Optional | The access token objects |
| `paging` | [`PagingResponse \| null \| undefined`](../../doc/models/paging-response.md) | Optional | Paging object |

## Example

```ts
import { ListAccessTokensResponse } from 'pagarmeapisdklib';

const listAccessTokensResponse: ListAccessTokensResponse = {
  data: [
    null,
    {
    }
  ],
  paging: null,
};
```

