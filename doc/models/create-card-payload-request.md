
# Create Card Payload Request

## Structure

`CreateCardPayloadRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | `string \| null \| undefined` | Optional | - |
| `googlePay` | [`CreateGooglePayRequest \| null \| undefined`](../../doc/models/create-google-pay-request.md) | Optional | - |

## Example

```ts
import { CreateCardPayloadRequest } from 'pagarmeapisdklib';

const createCardPayloadRequest: CreateCardPayloadRequest = {
  type: 'type2',
  googlePay: null,
};
```

