
# List Customers Response

Response for listing the customers

## Structure

`ListCustomersResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`GetCustomerResponse[] \| undefined`](../../doc/models/get-customer-response.md) | Optional | The customer object |
| `paging` | [`PagingResponse \| undefined`](../../doc/models/paging-response.md) | Optional | Paging object |

## Example (as JSON)

```json
{
  "data": [
    {
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
          "address": {
            "id": "id7",
            "street": "street7",
            "number": "number5",
            "complement": "complement3",
            "zip_code": "zip_code1",
            "neighborhood": "neighborhood3",
            "city": "city7",
            "state": "state3",
            "country": "country1",
            "status": "status9",
            "created_at": "2016-03-13T12:52:32.123Z",
            "updated_at": "2016-03-13T12:52:32.123Z",
            "customer": {},
            "metadata": {
              "key0": "metadata8",
              "key1": "metadata9",
              "key2": "metadata0"
            },
            "line_1": "line_11",
            "line_2": "line_25",
            "deleted_at": "2016-03-13T12:52:32.123Z"
          },
          "metadata": {
            "key0": "metadata2",
            "key1": "metadata3",
            "key2": "metadata4"
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
          "fb_id": 169,
          "code": "code9",
          "document_type": "document_type9"
        },
        "metadata": {
          "key0": "metadata2",
          "key1": "metadata3"
        },
        "line_1": "line_15",
        "line_2": "line_29",
        "deleted_at": "2016-03-13T12:52:32.123Z"
      },
      "metadata": {
        "key0": "metadata4",
        "key1": "metadata3"
      },
      "phones": {
        "home_phone": {},
        "mobile_phone": {}
      },
      "fb_id": 119,
      "code": "code3",
      "document_type": "document_type3"
    },
    {
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
          "address": {
            "id": "id8",
            "street": "street8",
            "number": "number6",
            "complement": "complement4",
            "zip_code": "zip_code2",
            "neighborhood": "neighborhood4",
            "city": "city8",
            "state": "state4",
            "country": "country2",
            "status": "status0",
            "created_at": "2016-03-13T12:52:32.123Z",
            "updated_at": "2016-03-13T12:52:32.123Z",
            "customer": {},
            "metadata": {
              "key0": "metadata9"
            },
            "line_1": "line_12",
            "line_2": "line_26",
            "deleted_at": "2016-03-13T12:52:32.123Z"
          },
          "metadata": {
            "key0": "metadata3"
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
          "fb_id": 170,
          "code": "code0",
          "document_type": "document_type0"
        },
        "metadata": {
          "key0": "metadata3",
          "key1": "metadata4",
          "key2": "metadata5"
        },
        "line_1": "line_16",
        "line_2": "line_20",
        "deleted_at": "2016-03-13T12:52:32.123Z"
      },
      "metadata": {
        "key0": "metadata3",
        "key1": "metadata2",
        "key2": "metadata1"
      },
      "phones": {
        "home_phone": {},
        "mobile_phone": {}
      },
      "fb_id": 120,
      "code": "code4",
      "document_type": "document_type4"
    }
  ],
  "paging": {
    "total": 6,
    "previous": "previous2",
    "next": "next8"
  }
}
```

