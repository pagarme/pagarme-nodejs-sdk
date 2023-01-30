
# List Transfer Response

List of paginated transfer objects

## Structure

`ListTransferResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`GetTransferResponse[] \| null`](../../doc/models/get-transfer-response.md) | Required | Transfers |
| `paging` | [`PagingResponse \| null`](../../doc/models/paging-response.md) | Required | Paging |

## Example (as JSON)

```json
{
  "data": [
    {
      "id": "id5",
      "amount": 121,
      "status": "status7",
      "created_at": "2016-03-13T12:52:32.123Z",
      "updated_at": "2016-03-13T12:52:32.123Z",
      "bank_account": {
        "id": "id9",
        "holder_name": "holder_name5",
        "holder_type": "holder_type1",
        "bank": "bank7",
        "branch_number": "branch_number5",
        "branch_check_digit": "branch_check_digit5",
        "account_number": "account_number9",
        "account_check_digit": "account_check_digit5",
        "type": "type9",
        "status": "status1",
        "created_at": "2016-03-13T12:52:32.123Z",
        "updated_at": "2016-03-13T12:52:32.123Z",
        "deleted_at": "2016-03-13T12:52:32.123Z",
        "recipient": null,
        "metadata": {
          "key0": "metadata0",
          "key1": "metadata1",
          "key2": "metadata2"
        },
        "pix_key": "pix_key3"
      },
      "metadata": {
        "key0": "metadata4",
        "key1": "metadata3"
      }
    },
    {
      "id": "id6",
      "amount": 122,
      "status": "status8",
      "created_at": "2016-03-13T12:52:32.123Z",
      "updated_at": "2016-03-13T12:52:32.123Z",
      "bank_account": {
        "id": "id0",
        "holder_name": "holder_name6",
        "holder_type": "holder_type2",
        "bank": "bank8",
        "branch_number": "branch_number6",
        "branch_check_digit": "branch_check_digit6",
        "account_number": "account_number0",
        "account_check_digit": "account_check_digit6",
        "type": "type0",
        "status": "status2",
        "created_at": "2016-03-13T12:52:32.123Z",
        "updated_at": "2016-03-13T12:52:32.123Z",
        "deleted_at": "2016-03-13T12:52:32.123Z",
        "recipient": null,
        "metadata": {
          "key0": "metadata1"
        },
        "pix_key": "pix_key4"
      },
      "metadata": {
        "key0": "metadata3",
        "key1": "metadata2",
        "key2": "metadata1"
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

