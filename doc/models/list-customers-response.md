
# List Customers Response

Response for listing the customers

## Structure

`ListCustomersResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`GetCustomerResponse[] \| null`](../../doc/models/get-customer-response.md) | Required | The customer object |
| `paging` | [`PagingResponse \| null`](../../doc/models/paging-response.md) | Required | Paging object |

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
        "customer": null,
        "metadata": {
          "key0": "metadata2",
          "key1": "metadata3"
        },
        "line_1": "line_15",
        "line_2": "line_29",
        "deleted_at": null
      },
      "metadata": {
        "key0": "metadata4",
        "key1": "metadata3"
      },
      "phones": {
        "home_phone": null,
        "mobile_phone": null
      },
      "fb_id": null,
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
        "customer": null,
        "metadata": {
          "key0": "metadata3",
          "key1": "metadata4",
          "key2": "metadata5"
        },
        "line_1": "line_16",
        "line_2": "line_20",
        "deleted_at": null
      },
      "metadata": {
        "key0": "metadata3",
        "key1": "metadata2",
        "key2": "metadata1"
      },
      "phones": {
        "home_phone": null,
        "mobile_phone": null
      },
      "fb_id": null,
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

