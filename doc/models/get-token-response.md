
# Get Token Response

Token data

## Structure

`GetTokenResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| null \| undefined` | Optional | - |
| `type` | `string \| null \| undefined` | Optional | - |
| `createdAt` | `string \| null \| undefined` | Optional | - |
| `expiresAt` | `string \| null \| undefined` | Optional | - |
| `card` | [`GetCardTokenResponse \| null \| undefined`](../../doc/models/get-card-token-response.md) | Optional | - |

## Example

```ts
import { GetTokenResponse } from 'pagarmeapisdklib';

const getTokenResponse: GetTokenResponse = {
  id: 'id4',
  type: 'type6',
  createdAt: '2016-03-13T12:52:32.123Z',
  expiresAt: 'expires_at8',
  card: null,
};
```

