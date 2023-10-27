
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

## Example (as JSON)

```json
{
  "amount": 136,
  "description": "description4",
  "recipient_name": "recipient_name4",
  "recipient_phone": "recipient_phone8",
  "address_id": "address_id4",
  "address": {
    "street": "street6",
    "number": "number4",
    "zip_code": "zip_code0",
    "neighborhood": "neighborhood2",
    "city": "city6",
    "state": "state2",
    "country": "country0",
    "complement": "complement2",
    "metadata": {
      "key0": "metadata3",
      "key1": "metadata2",
      "key2": "metadata1"
    },
    "line_1": "line_10",
    "line_2": "line_24"
  },
  "max_delivery_date": "2016-03-13T12:52:32.123Z",
  "estimated_delivery_date": "2016-03-13T12:52:32.123Z",
  "type": "type4"
}
```

