
# Get Payment Authentication Response

Payment Authentication response

## Structure

`GetPaymentAuthenticationResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | `string \| null \| undefined` | Optional | - |
| `threedSecure` | [`GetThreeDSecureResponse \| null \| undefined`](../../doc/models/get-three-d-secure-response.md) | Optional | 3D-S payment authentication response |

## Example

```ts
import { GetPaymentAuthenticationResponse } from 'pagarmeapisdklib';

const getPaymentAuthenticationResponse: GetPaymentAuthenticationResponse = {
  type: 'type0',
  threedSecure: null,
};
```

