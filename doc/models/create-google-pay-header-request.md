
# Create Google Pay Header Request

The GooglePay header request

## Structure

`CreateGooglePayHeaderRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `ephemeralPublicKey` | `string` | Required | X.509 encoded key bytes, Base64 encoded as a string |

## Example

```ts
import { CreateGooglePayHeaderRequest } from 'pagarmeapisdklib';

const createGooglePayHeaderRequest: CreateGooglePayHeaderRequest = {
  ephemeralPublicKey: 'ephemeral_public_key2',
};
```

