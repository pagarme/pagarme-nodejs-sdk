
# List Transactions Files Response

Response object for listing of transactions files

## Structure

`ListTransactionsFilesResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`GetTransactionReportFileResponse[] \| undefined`](../../doc/models/get-transaction-report-file-response.md) | Optional | - |
| `paging` | [`PagingResponse \| undefined`](../../doc/models/paging-response.md) | Optional | Paging object |

## Example (as JSON)

```json
{
  "data": [
    {
      "name": "name5",
      "date": "2016-03-13T12:52:32.123Z"
    },
    {
      "name": "name6",
      "date": "2016-03-13T12:52:32.123Z"
    }
  ],
  "paging": {
    "total": 6,
    "previous": "previous2",
    "next": "next8"
  }
}
```

