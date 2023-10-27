
# List Order Response

Response object for listing order objects

## Structure

`ListOrderResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`GetOrderResponse[] \| null \| undefined`](../../doc/models/get-order-response.md) | Optional | The order object |
| `paging` | [`PagingResponse \| null \| undefined`](../../doc/models/paging-response.md) | Optional | Paging object |

## Example (as JSON)

```json
{
  "data": [
    {
      "id": "id0",
      "code": "code8",
      "currency": "currency0",
      "items": [
        {
          "id": "id8",
          "amount": 164,
          "description": "description2",
          "quantity": 22,
          "category": "category6"
        },
        {
          "id": "id8",
          "amount": 164,
          "description": "description2",
          "quantity": 22,
          "category": "category6"
        },
        {
          "id": "id8",
          "amount": 164,
          "description": "description2",
          "quantity": 22,
          "category": "category6"
        }
      ],
      "customer": {
        "id": "id0",
        "name": "name0",
        "email": "email6",
        "delinquent": false,
        "created_at": "2016-03-13T12:52:32.123Z"
      }
    },
    {
      "id": "id0",
      "code": "code8",
      "currency": "currency0",
      "items": [
        {
          "id": "id8",
          "amount": 164,
          "description": "description2",
          "quantity": 22,
          "category": "category6"
        },
        {
          "id": "id8",
          "amount": 164,
          "description": "description2",
          "quantity": 22,
          "category": "category6"
        },
        {
          "id": "id8",
          "amount": 164,
          "description": "description2",
          "quantity": 22,
          "category": "category6"
        }
      ],
      "customer": {
        "id": "id0",
        "name": "name0",
        "email": "email6",
        "delinquent": false,
        "created_at": "2016-03-13T12:52:32.123Z"
      }
    },
    {
      "id": "id0",
      "code": "code8",
      "currency": "currency0",
      "items": [
        {
          "id": "id8",
          "amount": 164,
          "description": "description2",
          "quantity": 22,
          "category": "category6"
        },
        {
          "id": "id8",
          "amount": 164,
          "description": "description2",
          "quantity": 22,
          "category": "category6"
        },
        {
          "id": "id8",
          "amount": 164,
          "description": "description2",
          "quantity": 22,
          "category": "category6"
        }
      ],
      "customer": {
        "id": "id0",
        "name": "name0",
        "email": "email6",
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

