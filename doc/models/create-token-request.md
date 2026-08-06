
# Create Token Request

Token data

## Structure

`CreateTokenRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | `string` | Required | Token type<br><br>**Default**: `'card'` |
| `card` | [`CreateCardTokenRequest`](../../doc/models/create-card-token-request.md) | Required | Card data |

## Example

```ts
import { CreateTokenRequest } from 'pagarmeapisdklib';

const createTokenRequest: CreateTokenRequest = {
  type: 'card',
  card: {},
};
```

