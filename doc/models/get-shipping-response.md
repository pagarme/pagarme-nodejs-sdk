
# Get Shipping Response

Response object for getting the shipping data

## Structure

`GetShippingResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amount` | `number \| undefined` | Optional | - |
| `description` | `string \| undefined` | Optional | - |
| `recipientName` | `string \| undefined` | Optional | - |
| `recipientPhone` | `string \| undefined` | Optional | - |
| `address` | [`GetAddressResponse \| undefined`](../../doc/models/get-address-response.md) | Optional | - |
| `maxDeliveryDate` | `string \| undefined` | Optional | Data máxima de entrega |
| `estimatedDeliveryDate` | `string \| undefined` | Optional | Prazo estimado de entrega |
| `type` | `string \| undefined` | Optional | Shipping Type |

## Example (as JSON)

```json
{
  "amount": null,
  "description": null,
  "recipient_name": null,
  "recipient_phone": null,
  "address": null,
  "max_delivery_date": null,
  "estimated_delivery_date": null,
  "type": null
}
```

