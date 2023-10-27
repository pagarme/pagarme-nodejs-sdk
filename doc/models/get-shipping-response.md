
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

## Example (as JSON)

```json
{
  "amount": 214,
  "description": "description8",
  "recipient_name": "recipient_name6",
  "recipient_phone": "recipient_phone0",
  "address": {
    "id": "id6",
    "street": "street6",
    "number": "number4",
    "complement": "complement2",
    "zip_code": "zip_code0"
  }
}
```

