
# Create Shipping Request

Shipping data

## Structure

`CreateShippingRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amount` | `number` | Required | Shipping amount |
| `description` | `string` | Required | Description |
| `recipientName` | `string` | Required | Recipient name |
| `recipientPhone` | `string` | Required | Recipient phone number |
| `addressId` | `string` | Required | The id of the address that will be used for shipping |
| `address` | [`CreateAddressRequest`](../../doc/models/create-address-request.md) | Required | Address data |
| `maxDeliveryDate` | `string \| undefined` | Optional | Data máxima de entrega |
| `estimatedDeliveryDate` | `string \| undefined` | Optional | Prazo estimado de entrega |
| `type` | `string` | Required | Shipping type |

## Example

```ts
import { CreateShippingRequest } from 'pagarmeapisdklib';

const createShippingRequest: CreateShippingRequest = {
  amount: 44,
  description: 'description0',
  recipientName: 'recipient_name8',
  recipientPhone: 'recipient_phone2',
  addressId: 'address_id0',
  address: {},
  type: 'type0',
  maxDeliveryDate: '2016-03-13T12:52:32.123Z',
  estimatedDeliveryDate: '2016-03-13T12:52:32.123Z',
};
```

