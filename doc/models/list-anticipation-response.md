
# List Anticipation Response

Anticipations

## Structure

`ListAnticipationResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`GetAnticipationResponse[] \| null`](../../doc/models/get-anticipation-response.md) | Required | Anticipations |
| `paging` | [`PagingResponse \| null`](../../doc/models/paging-response.md) | Required | Paging |

## Example (as JSON)

```json
{
  "data": [
    {
      "id": "id5",
      "requested_amount": 157,
      "approved_amount": 211,
      "recipient": null,
      "pgid": "pgid1",
      "created_at": "2016-03-13T12:52:32.123Z",
      "updated_at": "2016-03-13T12:52:32.123Z",
      "payment_date": "2016-03-13T12:52:32.123Z",
      "status": "status7",
      "timeframe": "timeframe7"
    },
    {
      "id": "id6",
      "requested_amount": 158,
      "approved_amount": 212,
      "recipient": null,
      "pgid": "pgid2",
      "created_at": "2016-03-13T12:52:32.123Z",
      "updated_at": "2016-03-13T12:52:32.123Z",
      "payment_date": "2016-03-13T12:52:32.123Z",
      "status": "status8",
      "timeframe": "timeframe8"
    }
  ],
  "paging": {
    "total": 6,
    "previous": "previous2",
    "next": "next8"
  }
}
```

