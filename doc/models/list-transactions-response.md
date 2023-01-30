
# List Transactions Response

Response object for listing transactions

## Structure

`ListTransactionsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`GetTransactionResponse[] \| null`](../../doc/models/get-transaction-response.md) | Required | The transaction objects |
| `paging` | [`PagingResponse \| null`](../../doc/models/paging-response.md) | Required | Paging object |

## Example (as JSON)

```json
{
  "data": [
    {
      "gateway_id": "gateway_id5",
      "amount": 121,
      "status": "status7",
      "success": true,
      "created_at": "2016-03-13T12:52:32.123Z",
      "updated_at": "2016-03-13T12:52:32.123Z",
      "attempt_count": 97,
      "max_attempts": 85,
      "splits": [
        {
          "type": "type7",
          "amount": 53,
          "recipient": null,
          "gateway_id": "gateway_id3",
          "options": null,
          "id": "id7"
        },
        {
          "type": "type8",
          "amount": 54,
          "recipient": null,
          "gateway_id": "gateway_id2",
          "options": null,
          "id": "id8"
        },
        {
          "type": "type9",
          "amount": 55,
          "recipient": null,
          "gateway_id": "gateway_id1",
          "options": null,
          "id": "id9"
        }
      ],
      "next_attempt": null,
      "transaction_type": "transaction",
      "id": "id5",
      "gateway_response": {
        "code": "code5",
        "errors": [
          {
            "message": "message2"
          },
          {
            "message": "message3"
          },
          {
            "message": "message4"
          }
        ]
      },
      "antifraud_response": {
        "status": "status5",
        "return_code": "return_code3",
        "return_message": "return_message1",
        "provider_name": "provider_name1",
        "score": "score3"
      },
      "metadata": null,
      "split": [
        {
          "type": "type3",
          "amount": 67,
          "recipient": null,
          "gateway_id": "gateway_id3",
          "options": null,
          "id": "id3"
        },
        {
          "type": "type4",
          "amount": 68,
          "recipient": null,
          "gateway_id": "gateway_id4",
          "options": null,
          "id": "id4"
        }
      ],
      "interest": null,
      "fine": null,
      "max_days_to_pay_past_due": null
    },
    {
      "gateway_id": "gateway_id6",
      "amount": 122,
      "status": "status8",
      "success": false,
      "created_at": "2016-03-13T12:52:32.123Z",
      "updated_at": "2016-03-13T12:52:32.123Z",
      "attempt_count": 98,
      "max_attempts": 86,
      "splits": [
        {
          "type": "type8",
          "amount": 54,
          "recipient": null,
          "gateway_id": "gateway_id2",
          "options": null,
          "id": "id8"
        }
      ],
      "next_attempt": null,
      "transaction_type": "transaction",
      "id": "id6",
      "gateway_response": {
        "code": "code6",
        "errors": [
          {
            "message": "message3"
          }
        ]
      },
      "antifraud_response": {
        "status": "status6",
        "return_code": "return_code4",
        "return_message": "return_message2",
        "provider_name": "provider_name2",
        "score": "score4"
      },
      "metadata": null,
      "split": [
        {
          "type": "type4",
          "amount": 68,
          "recipient": null,
          "gateway_id": "gateway_id4",
          "options": null,
          "id": "id4"
        },
        {
          "type": "type5",
          "amount": 69,
          "recipient": null,
          "gateway_id": "gateway_id5",
          "options": null,
          "id": "id5"
        },
        {
          "type": "type6",
          "amount": 70,
          "recipient": null,
          "gateway_id": "gateway_id6",
          "options": null,
          "id": "id6"
        }
      ],
      "interest": null,
      "fine": null,
      "max_days_to_pay_past_due": null
    }
  ],
  "paging": {
    "total": 6,
    "previous": "previous2",
    "next": "next8"
  }
}
```

