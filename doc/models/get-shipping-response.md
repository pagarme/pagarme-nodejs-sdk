
# Get Shipping Response

Response object for getting the shipping data

## Structure

`GetShippingResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amount` | `number \| null \| undefined` | Optional | - |
| `description` | `string \| null \| undefined` | Optional | - |
| `recipientName` | `string \| null \| undefined` | Optional | - |
| `recipientPhone` | `string \| null \| undefined` | Optional | - |
| `address` | [`GetAddressResponse \| null \| undefined`](../../doc/models/get-address-response.md) | Optional | - |
| `maxDeliveryDate` | `string \| null \| undefined` | Optional | Data máxima de entrega |
| `estimatedDeliveryDate` | `string \| null \| undefined` | Optional | Prazo estimado de entrega |
| `type` | `string \| null \| undefined` | Optional | Shipping Type |

## Example

```ts
import { GetShippingResponse } from 'pagarmeapisdklib';

const getShippingResponse: GetShippingResponse = {
  amount: 228,
  description: 'description8',
  recipientName: 'recipient_name0',
  recipientPhone: 'recipient_phone4',
  address: null,
};
```

