
# List Increments Response

## Structure

`ListIncrementsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`GetIncrementResponse[] \| null`](../../doc/models/get-increment-response.md) | Required | The Increments response |
| `paging` | [`PagingResponse \| null`](../../doc/models/paging-response.md) | Required | Paging object |

## Example (as JSON)

```json
{
  "data": [
    {
      "id": "id5",
      "value": 145.67,
      "increment_type": "increment_type7",
      "status": "status7",
      "created_at": "2016-03-13T12:52:32.123Z",
      "cycles": null,
      "deleted_at": null,
      "description": null,
      "subscription": null,
      "subscription_item": null
    },
    {
      "id": "id6",
      "value": 145.68,
      "increment_type": "increment_type8",
      "status": "status8",
      "created_at": "2016-03-13T12:52:32.123Z",
      "cycles": null,
      "deleted_at": null,
      "description": null,
      "subscription": null,
      "subscription_item": null
    }
  ],
  "paging": {
    "total": 6,
    "previous": "previous2",
    "next": "next8"
  }
}
```

