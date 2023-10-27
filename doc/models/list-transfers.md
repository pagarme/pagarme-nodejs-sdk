
# List Transfers

## Structure

`ListTransfers`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`GetTransfer[]`](../../doc/models/get-transfer.md) | Required | The Increments response |
| `paging` | [`PagingResponse`](../../doc/models/paging-response.md) | Required | Paging object |

## Example (as JSON)

```json
{
  "data": [
    {
      "id": "id0",
      "gateway_id": "gateway_id0",
      "amount": 236,
      "status": "status2",
      "created_at": "2016-03-13T12:52:32.123Z",
      "updated_at": "2016-03-13T12:52:32.123Z",
      "metadata": {
        "key0": "metadata7",
        "key1": "metadata6"
      },
      "fee": 194,
      "funding_date": "2016-03-13T12:52:32.123Z",
      "funding_estimated_date": "2016-03-13T12:52:32.123Z",
      "type": "type0",
      "source": {
        "source_id": "source_id8",
        "type": "type6"
      },
      "target": {
        "target_id": "target_id2",
        "type": "type8"
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

