
# Get Cash Transaction Response

Response object for getting a cash transaction

## Structure

`GetCashTransactionResponse`

## Inherits From

[`GetTransactionResponse`](../../doc/models/get-transaction-response.md)

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `description` | `string \| null` | Required | Description |

## Example (as JSON)

```json
{
  "gateway_id": "gateway_id0",
  "amount": 226,
  "status": "status2",
  "success": false,
  "created_at": "2016-03-13T12:52:32.123Z",
  "updated_at": "2016-03-13T12:52:32.123Z",
  "attempt_count": 202,
  "max_attempts": 190,
  "splits": [
    {
      "type": "type8",
      "amount": 158,
      "recipient": null,
      "gateway_id": "gateway_id8",
      "options": null,
      "id": "id2"
    },
    {
      "type": "type7",
      "amount": 159,
      "recipient": null,
      "gateway_id": "gateway_id7",
      "options": null,
      "id": "id3"
    },
    {
      "type": "type6",
      "amount": 160,
      "recipient": null,
      "gateway_id": "gateway_id6",
      "options": null,
      "id": "id4"
    }
  ],
  "next_attempt": null,
  "transaction_type": "cash",
  "id": "id0",
  "gateway_response": {
    "code": "code0",
    "errors": [
      {
        "message": "message7"
      },
      {
        "message": "message8"
      },
      {
        "message": "message9"
      }
    ]
  },
  "antifraud_response": {
    "status": "status0",
    "return_code": "return_code8",
    "return_message": "return_message6",
    "provider_name": "provider_name6",
    "score": "score8"
  },
  "metadata": null,
  "split": [
    {
      "type": "type2",
      "amount": 172,
      "recipient": null,
      "gateway_id": "gateway_id2",
      "options": null,
      "id": "id8"
    },
    {
      "type": "type1",
      "amount": 173,
      "recipient": null,
      "gateway_id": "gateway_id1",
      "options": null,
      "id": "id9"
    }
  ],
  "interest": null,
  "fine": null,
  "max_days_to_pay_past_due": null,
  "description": "description0"
}
```

