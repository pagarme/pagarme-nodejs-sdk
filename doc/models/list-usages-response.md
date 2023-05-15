
# List Usages Response

Response model for listing the usages from a subscription item

## Structure

`ListUsagesResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`GetUsageResponse[] \| undefined`](../../doc/models/get-usage-response.md) | Optional | The usage objects |
| `paging` | [`PagingResponse \| undefined`](../../doc/models/paging-response.md) | Optional | Paging object |

## Example (as JSON)

```json
{
  "data": [
    {
      "id": "id5",
      "quantity": 235,
      "description": "description5",
      "used_at": "2016-03-13T12:52:32.123Z",
      "created_at": "2016-03-13T12:52:32.123Z"
    },
    {
      "id": "id6",
      "quantity": 236,
      "description": "description6",
      "used_at": "2016-03-13T12:52:32.123Z",
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

