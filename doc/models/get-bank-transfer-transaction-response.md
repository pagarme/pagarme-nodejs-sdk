
# Get Bank Transfer Transaction Response

Response object for getting a bank transfer transaction

## Structure

`GetBankTransferTransactionResponse`

## Inherits From

[`GetTransactionResponse`](../../doc/models/get-transaction-response.md)

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `url` | `string` | Required | Payment url |
| `bankTid` | `string` | Required | Transaction identifier for the bank |
| `bank` | `string` | Required | Bank |
| `paidAt` | `string \| undefined` | Optional | Payment date |
| `paidAmount` | `number \| undefined` | Optional | Paid amount |

## Example (as JSON)

```json
{
  "gateway_id": "gateway_id2",
  "amount": 244,
  "status": "status0",
  "success": false,
  "created_at": "2016-03-13T12:52:32.123Z",
  "updated_at": "2016-03-13T12:52:32.123Z",
  "attempt_count": 36,
  "max_attempts": 208,
  "splits": [
    {
      "type": "type8",
      "amount": 136,
      "recipient": null,
      "gateway_id": "gateway_id8",
      "options": null,
      "id": "id2"
    }
  ],
  "next_attempt": null,
  "transaction_type": "bank_transfer",
  "id": "id8",
  "gateway_response": {
    "code": "code8",
    "errors": [
      {
        "message": "message5"
      },
      {
        "message": "message6"
      }
    ]
  },
  "antifraud_response": {
    "status": "status8",
    "return_code": "return_code6",
    "return_message": "return_message6",
    "provider_name": "provider_name6",
    "score": "score6"
  },
  "metadata": null,
  "split": [
    {
      "type": "type4",
      "amount": 190,
      "recipient": null,
      "gateway_id": "gateway_id4",
      "options": null,
      "id": "id6"
    },
    {
      "type": "type3",
      "amount": 191,
      "recipient": null,
      "gateway_id": "gateway_id3",
      "options": null,
      "id": "id7"
    },
    {
      "type": "type2",
      "amount": 192,
      "recipient": null,
      "gateway_id": "gateway_id2",
      "options": null,
      "id": "id8"
    }
  ],
  "interest": null,
  "fine": null,
  "max_days_to_pay_past_due": null,
  "url": "url4",
  "bank_tid": "bank_tid4",
  "bank": "bank8",
  "paid_at": null,
  "paid_amount": null
}
```

