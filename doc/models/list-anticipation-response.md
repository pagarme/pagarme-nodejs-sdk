
# List Anticipation Response

Anticipations

## Structure

`ListAnticipationResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`GetAnticipationResponse[] \| undefined`](../../doc/models/get-anticipation-response.md) | Optional | Anticipations |
| `paging` | [`PagingResponse \| undefined`](../../doc/models/paging-response.md) | Optional | Paging |

## Example (as JSON)

```json
{
  "data": [
    {
      "id": "id5",
      "requested_amount": 157,
      "approved_amount": 211,
      "recipient": {
        "id": "id7",
        "name": "name7",
        "email": "email1",
        "document": "document1",
        "description": "description7"
      },
      "pgid": "pgid1"
    },
    {
      "id": "id6",
      "requested_amount": 158,
      "approved_amount": 212,
      "recipient": {
        "id": "id8",
        "name": "name8",
        "email": "email2",
        "document": "document2",
        "description": "description8"
      },
      "pgid": "pgid2"
    }
  ],
  "paging": {
    "total": 6,
    "previous": "previous2",
    "next": "next8"
  }
}
```

