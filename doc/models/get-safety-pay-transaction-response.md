
# Get Safety Pay Transaction Response

Response object for getting a safety pay transaction

## Structure

`GetSafetyPayTransactionResponse`

## Inherits From

[`GetTransactionResponse`](../../doc/models/get-transaction-response.md)

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `url` | `string \| null` | Required | Payment url |
| `bankTid` | `string \| null` | Required | Transaction identifier on bank |
| `paidAt` | `string \| undefined` | Optional | Payment date |
| `paidAmount` | `number \| undefined` | Optional | Paid amount |

## Example (as JSON)

```json
{
  "gateway_id": "gateway_id6",
  "amount": 62,
  "status": "status6",
  "success": false,
  "created_at": "2016-03-13T12:52:32.123Z",
  "updated_at": "2016-03-13T12:52:32.123Z",
  "attempt_count": 218,
  "max_attempts": 26,
  "splits": [
    {
      "type": "type6",
      "amount": 86,
      "recipient": null,
      "gateway_id": "gateway_id6",
      "options": null,
      "id": "id4"
    },
    {
      "type": "type7",
      "amount": 87,
      "recipient": null,
      "gateway_id": "gateway_id7",
      "options": null,
      "id": "id3"
    }
  ],
  "next_attempt": null,
  "transaction_type": "safetypay",
  "id": "id4",
  "gateway_response": {
    "code": "code4",
    "errors": [
      {
        "message": "message1"
      },
      {
        "message": "message2"
      }
    ]
  },
  "antifraud_response": {
    "status": "status4",
    "return_code": "return_code2",
    "return_message": "return_message0",
    "provider_name": "provider_name0",
    "score": "score2"
  },
  "metadata": null,
  "split": [
    {
      "type": "type8",
      "amount": 8,
      "recipient": null,
      "gateway_id": "gateway_id8",
      "options": null,
      "id": "id2"
    }
  ],
  "interest": null,
  "fine": null,
  "max_days_to_pay_past_due": null,
  "url": "url4",
  "bank_tid": "bank_tid4",
  "paid_at": null,
  "paid_amount": null
}
```

