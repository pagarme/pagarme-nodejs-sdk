
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
    "customer": {
      "id": "id6",
      "name": "name6",
      "email": "email0",
      "delinquent": false,
      "created_at": "2016-03-13T12:52:32.123Z",
      "updated_at": "2016-03-13T12:52:32.123Z",
      "document": "document0",
      "type": "type4",
      "fb_access_token": "fb_access_token0",
      "address": {
        "id": "id2",
        "street": "street2",
        "number": "number0",
        "complement": "complement8",
        "zip_code": "zip_code6",
        "neighborhood": "neighborhood8",
        "city": "city2",
        "state": "state8",
        "country": "country6",
        "status": "status4",
        "created_at": "2016-03-13T12:52:32.123Z",
        "updated_at": "2016-03-13T12:52:32.123Z",
        "customer": {
          "id": "id2",
          "name": "name2",
          "email": "email4",
          "delinquent": false,
          "created_at": "2016-03-13T12:52:32.123Z",
          "updated_at": "2016-03-13T12:52:32.123Z",
          "document": "document6",
          "type": "type2",
          "fb_access_token": "fb_access_token6",
          "address": {},
          "metadata": {
            "key0": "metadata9"
          },
          "phones": {
            "home_phone": {
              "country_code": "country_code4",
              "number": "number2",
              "area_code": "area_code4"
            },
            "mobile_phone": {
              "country_code": "country_code4",
              "number": "number8",
              "area_code": "area_code4"
            }
          },
          "fb_id": 52,
          "code": "code0",
          "document_type": "document_type0"
        },
        "metadata": {
          "key0": "metadata7",
          "key1": "metadata6",
          "key2": "metadata5"
        },
        "line_1": "line_16",
        "line_2": "line_20",
        "deleted_at": "2016-03-13T12:52:32.123Z"
      },
      "metadata": {
        "key0": "metadata7",
        "key1": "metadata8"
      },
      "phones": {
        "home_phone": {},
        "mobile_phone": {}
      },
      "fb_id": 2,
      "code": "code4",
      "document_type": "document_type4"
    },
    "metadata": {
      "key0": "metadata3",
      "key1": "metadata2",
      "key2": "metadata1"
    },
    "line_1": "line_10",
    "line_2": "line_24",
    "deleted_at": "2016-03-13T12:52:32.123Z"
  },
  "max_delivery_date": "2016-03-13T12:52:32.123Z",
  "estimated_delivery_date": "2016-03-13T12:52:32.123Z",
  "type": "type0"
}
```

