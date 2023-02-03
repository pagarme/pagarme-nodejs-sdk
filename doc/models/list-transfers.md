
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
      "id": "id5",
      "gateway_id": "gateway_id5",
      "amount": 121,
      "status": "status7",
      "created_at": "2016-03-13T12:52:32.123Z",
      "updated_at": "2016-03-13T12:52:32.123Z",
      "metadata": null,
      "fee": null,
      "funding_date": null,
      "funding_estimated_date": null,
      "type": "type5",
      "source": {
        "source_id": null,
        "type": null
      },
      "target": {
        "target_id": null,
        "type": null
      }
    },
    {
      "id": "id6",
      "gateway_id": "gateway_id6",
      "amount": 122,
      "status": "status8",
      "created_at": "2016-03-13T12:52:32.123Z",
      "updated_at": "2016-03-13T12:52:32.123Z",
      "metadata": null,
      "fee": null,
      "funding_date": null,
      "funding_estimated_date": null,
      "type": "type6",
      "source": {
        "source_id": null,
        "type": null
      },
      "target": {
        "target_id": null,
        "type": null
      }
    }
  ],
  "paging": {
    "total": null,
    "previous": null,
    "next": null
  }
}
```

