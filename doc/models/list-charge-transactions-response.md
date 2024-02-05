
# List Charge Transactions Response

Response object for listing charge transactions

## Structure

`ListChargeTransactionsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`GetTransactionResponse[] \| null \| undefined`](../../doc/models/get-transaction-response.md) | Optional | The charge transactions objects |
| `paging` | [`PagingResponse \| null \| undefined`](../../doc/models/paging-response.md) | Optional | Paging object |

## Example (as JSON)

```json
{
  "data": [
    {
      "gateway_id": "gateway_id8",
      "amount": 40,
      "status": "status6",
      "success": false,
      "created_at": "2016-03-13T12:52:32.123Z",
      "statement_descriptor": "statement_descriptor2",
      "acquirer_name": "acquirer_name6",
      "acquirer_affiliation_code": "acquirer_affiliation_code6",
      "acquirer_tid": "acquirer_tid8",
      "acquirer_nsu": "acquirer_nsu8"
    },
    {
      "gateway_id": "gateway_id8",
      "amount": 40,
      "status": "status6",
      "success": false,
      "created_at": "2016-03-13T12:52:32.123Z",
      "statement_descriptor": "statement_descriptor2",
      "acquirer_name": "acquirer_name6",
      "acquirer_affiliation_code": "acquirer_affiliation_code6",
      "acquirer_tid": "acquirer_tid8",
      "acquirer_nsu": "acquirer_nsu8"
    }
  ],
  "paging": {
    "total": 6,
    "previous": "previous2",
    "next": "next8"
  }
}
```

