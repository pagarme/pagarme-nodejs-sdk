
# Get Shipping Response

Response object for getting the shipping data

## Structure

`GetShippingResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amount` | `number \| null` | Required | - |
| `description` | `string \| null` | Required | - |
| `recipientName` | `string \| null` | Required | - |
| `recipientPhone` | `string \| null` | Required | - |
| `address` | [`GetAddressResponse \| null`](../../doc/models/get-address-response.md) | Required | - |
| `maxDeliveryDate` | `string \| undefined` | Optional | Data máxima de entrega |
| `estimatedDeliveryDate` | `string \| undefined` | Optional | Prazo estimado de entrega |
| `type` | `string \| null` | Required | Shipping Type |

## Example (as JSON)

```json
{
  "amount": 46,
  "description": "description0",
  "recipient_name": "recipient_name8",
  "recipient_phone": "recipient_phone2",
  "address": {
    "id": "id6",
    "street": "street6",
    "number": "number4",
    "complement": "complement2",
    "zip_code": "zip_code0",
    "neighborhood": "neighborhood2",
    "city": "city6",
    "state": "state2",
    "country": "country0",
    "status": "status8",
    "created_at": "2016-03-13T12:52:32.123Z",
    "updated_at": "2016-03-13T12:52:32.123Z",
    "customer": null,
    "metadata": {
      "key0": "metadata3",
      "key1": "metadata2",
      "key2": "metadata1"
    },
    "line_1": "line_10",
    "line_2": "line_24",
    "deleted_at": null
  },
  "max_delivery_date": null,
  "estimated_delivery_date": null,
  "type": "type0"
}
```

