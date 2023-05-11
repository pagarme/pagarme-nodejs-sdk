
# List Plans Response

Response object for listing plans

## Structure

`ListPlansResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`GetPlanResponse[] \| undefined`](../../doc/models/get-plan-response.md) | Optional | The plan objects |
| `paging` | [`PagingResponse \| undefined`](../../doc/models/paging-response.md) | Optional | Paging object |

## Example (as JSON)

```json
{
  "data": [
    {
      "id": "id5",
      "name": "name5",
      "description": "description5",
      "url": "url9",
      "statement_descriptor": "statement_descriptor5"
    },
    {
      "id": "id6",
      "name": "name6",
      "description": "description6",
      "url": "url0",
      "statement_descriptor": "statement_descriptor6"
    }
  ],
  "paging": {
    "total": 6,
    "previous": "previous2",
    "next": "next8"
  }
}
```

