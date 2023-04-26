
# List Addresses Response

Response object for listing addresses

## Structure

`ListAddressesResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`GetAddressResponse[] \| undefined`](../../doc/models/get-address-response.md) | Optional | The address objects |
| `paging` | [`PagingResponse \| undefined`](../../doc/models/paging-response.md) | Optional | Paging object |

## Example (as JSON)

```json
{
  "data": [
    {
      "id": "id5",
      "street": "street5",
      "number": "number3",
      "complement": "complement1",
      "zip_code": "zip_code9",
      "neighborhood": "neighborhood1",
      "city": "city5",
      "state": "state1",
      "country": "country9",
      "status": "status7",
      "created_at": "2016-03-13T12:52:32.123Z",
      "updated_at": "2016-03-13T12:52:32.123Z",
      "customer": {
        "id": "id5",
        "name": "name5",
        "email": "email9",
        "delinquent": true,
        "created_at": "2016-03-13T12:52:32.123Z",
        "updated_at": "2016-03-13T12:52:32.123Z",
        "document": "document9",
        "type": "type5",
        "fb_access_token": "fb_access_token9",
        "address": {
          "id": "id1",
          "street": "street1",
          "number": "number9",
          "complement": "complement7",
          "zip_code": "zip_code5",
          "neighborhood": "neighborhood7",
          "city": "city1",
          "state": "state7",
          "country": "country5",
          "status": "status3",
          "created_at": "2016-03-13T12:52:32.123Z",
          "updated_at": "2016-03-13T12:52:32.123Z",
          "customer": {
            "id": "id1",
            "name": "name1",
            "email": "email5",
            "delinquent": true,
            "created_at": "2016-03-13T12:52:32.123Z",
            "updated_at": "2016-03-13T12:52:32.123Z",
            "document": "document5",
            "type": "type1",
            "fb_access_token": "fb_access_token5",
            "address": {},
            "metadata": {
              "key0": "metadata2"
            },
            "phones": {
              "home_phone": {
                "country_code": "country_code3",
                "number": "number1",
                "area_code": "area_code3"
              },
              "mobile_phone": {
                "country_code": "country_code3",
                "number": "number1",
                "area_code": "area_code3"
              }
            },
            "fb_id": 203,
            "code": "code9",
            "document_type": "document_type9"
          },
          "metadata": {
            "key0": "metadata2",
            "key1": "metadata3",
            "key2": "metadata4"
          },
          "line_1": "line_15",
          "line_2": "line_29",
          "deleted_at": "2016-03-13T12:52:32.123Z"
        },
        "metadata": {
          "key0": "metadata4",
          "key1": "metadata3",
          "key2": "metadata2"
        },
        "phones": {
          "home_phone": {},
          "mobile_phone": {}
        },
        "fb_id": 153,
        "code": "code3",
        "document_type": "document_type3"
      },
      "metadata": {
        "key0": "metadata4",
        "key1": "metadata3"
      },
      "line_1": "line_19",
      "line_2": "line_23",
      "deleted_at": "2016-03-13T12:52:32.123Z"
    },
    {
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
        "type": "type6",
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
            "email": "email6",
            "delinquent": false,
            "created_at": "2016-03-13T12:52:32.123Z",
            "updated_at": "2016-03-13T12:52:32.123Z",
            "document": "document6",
            "type": "type2",
            "fb_access_token": "fb_access_token6",
            "address": {},
            "metadata": {
              "key0": "metadata3",
              "key1": "metadata4"
            },
            "phones": {
              "home_phone": {
                "country_code": "country_code4",
                "number": "number2",
                "area_code": "area_code4"
              },
              "mobile_phone": {
                "country_code": "country_code4",
                "number": "number2",
                "area_code": "area_code4"
              }
            },
            "fb_id": 204,
            "code": "code0",
            "document_type": "document_type0"
          },
          "metadata": {
            "key0": "metadata3"
          },
          "line_1": "line_16",
          "line_2": "line_20",
          "deleted_at": "2016-03-13T12:52:32.123Z"
        },
        "metadata": {
          "key0": "metadata3"
        },
        "phones": {
          "home_phone": {},
          "mobile_phone": {}
        },
        "fb_id": 154,
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
    }
  ],
  "paging": {
    "total": 6,
    "previous": "previous2",
    "next": "next8"
  }
}
```

