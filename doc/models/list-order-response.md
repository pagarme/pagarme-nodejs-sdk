
# List Order Response

Response object for listing order objects

## Structure

`ListOrderResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`GetOrderResponse[] \| undefined`](../../doc/models/get-order-response.md) | Optional | The order object |
| `paging` | [`PagingResponse \| undefined`](../../doc/models/paging-response.md) | Optional | Paging object |

## Example (as JSON)

```json
{
  "data": [
    {
      "id": "id5",
      "code": "code3",
      "currency": "currency5",
      "items": [
        {
          "id": "id2",
          "amount": 180,
          "description": "description2",
          "quantity": 38,
          "category": "category0"
        },
        {
          "id": "id3",
          "amount": 181,
          "description": "description3",
          "quantity": 39,
          "category": "category1"
        }
      ],
      "customer": {
        "id": "id5",
        "name": "name5",
        "email": "email9",
        "delinquent": true,
        "created_at": "2016-03-13T12:52:32.123Z"
      }
    },
    {
      "id": "id6",
      "code": "code4",
      "currency": "currency6",
      "items": [
        {
          "id": "id3",
          "amount": 181,
          "description": "description3",
          "quantity": 39,
          "category": "category1"
        },
        {
          "id": "id4",
          "amount": 182,
          "description": "description4",
          "quantity": 40,
          "category": "category2"
        },
        {
          "id": "id5",
          "amount": 183,
          "description": "description5",
          "quantity": 41,
          "category": "category3"
        }
      ],
      "customer": {
        "id": "id6",
        "name": "name6",
        "email": "email0",
        "delinquent": false,
        "created_at": "2016-03-13T12:52:32.123Z"
      }
    }
  ],
  "paging": {
    "total": 6,
    "previous": "previous2",
    "next": "next8"
  }
}
```

