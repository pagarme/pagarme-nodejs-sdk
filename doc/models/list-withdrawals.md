
# List Withdrawals

## Structure

`ListWithdrawals`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`GetWithdrawResponse[]`](../../doc/models/get-withdraw-response.md) | Required | The Increments response |
| `paging` | [`PagingResponse`](../../doc/models/paging-response.md) | Required | Paging object |

## Example (as JSON)

```json
{
  "data": [
    {
      "id": null,
      "gateway_id": null,
      "amount": null,
      "status": null,
      "created_at": null,
      "updated_at": null,
      "metadata": null,
      "fee": null,
      "funding_date": null,
      "funding_estimated_date": null,
      "type": null,
      "source": null,
      "target": null
    },
    {
      "id": null,
      "gateway_id": null,
      "amount": null,
      "status": null,
      "created_at": null,
      "updated_at": null,
      "metadata": null,
      "fee": null,
      "funding_date": null,
      "funding_estimated_date": null,
      "type": null,
      "source": null,
      "target": null
    }
  ],
  "paging": {
    "total": null,
    "previous": null,
    "next": null
  }
}
```

