
# Create Access Token Request

Request for creating a new Access Token

## Structure

`CreateAccessTokenRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `expiresIn` | `number \| undefined` | Optional | Minutes to expire the token |

## Example

```ts
import { CreateAccessTokenRequest } from 'pagarmeapisdklib';

const createAccessTokenRequest: CreateAccessTokenRequest = {
  expiresIn: 204,
};
```

