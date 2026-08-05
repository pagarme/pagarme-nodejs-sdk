
# Create Payment Authentication Request

The payment authentication request

## Structure

`CreatePaymentAuthenticationRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | `string` | Required | The Authentication type |
| `threedSecure` | [`CreateThreeDSecureRequest`](../../doc/models/create-three-d-secure-request.md) | Required | The 3D-S authentication object |

## Example

```ts
import { CreatePaymentAuthenticationRequest } from 'pagarmeapisdklib';

const createPaymentAuthenticationRequest: CreatePaymentAuthenticationRequest = {
  type: 'type6',
  threedSecure: {},
};
```

