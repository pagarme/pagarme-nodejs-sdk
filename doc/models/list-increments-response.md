
# List Increments Response

## Structure

`ListIncrementsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`GetIncrementResponse[] \| undefined`](../../doc/models/get-increment-response.md) | Optional | The Increments response |
| `paging` | [`PagingResponse \| undefined`](../../doc/models/paging-response.md) | Optional | Paging object |

## Example (as JSON)

```json
{
  "data": [
    {
      "id": "id5",
      "value": 145.67,
      "increment_type": "increment_type7",
      "status": "status7",
      "created_at": "2016-03-13T12:52:32.123Z"
    },
    {
      "id": "id6",
      "value": 145.68,
      "increment_type": "increment_type8",
      "status": "status8",
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

