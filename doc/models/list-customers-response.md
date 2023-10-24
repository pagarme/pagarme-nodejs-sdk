
# List Customers Response

Response for listing the customers

## Structure

`ListCustomersResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`GetCustomerResponse[] \| null \| undefined`](../../doc/models/get-customer-response.md) | Optional | The customer object |
| `paging` | [`PagingResponse \| null \| undefined`](../../doc/models/paging-response.md) | Optional | Paging object |

## Example (as JSON)

```json
{
  "data": [
    {
      "id": "id0",
      "name": "name0",
      "email": "email6",
      "delinquent": false,
      "created_at": "2016-03-13T12:52:32.123Z"
    },
    {
      "id": "id0",
      "name": "name0",
      "email": "email6",
      "delinquent": false,
      "created_at": "2016-03-13T12:52:32.123Z"
    }
  ],
  "paging": {
    "total": 6,
    "previous": "previous2",
    "next": "next8"
  }
}
```

