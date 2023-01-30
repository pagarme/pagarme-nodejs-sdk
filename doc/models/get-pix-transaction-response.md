
# Get Pix Transaction Response

Response object when getting a pix transaction

## Structure

`GetPixTransactionResponse`

## Inherits From

[`GetTransactionResponse`](../../doc/models/get-transaction-response.md)

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `qrCode` | `string \| null` | Required | - |
| `qrCodeUrl` | `string \| null` | Required | - |
| `expiresAt` | `string \| null` | Required | - |
| `additionalInformation` | [`PixAdditionalInformation[] \| null`](../../doc/models/pix-additional-information.md) | Required | - |
| `endToEndId` | `string \| null` | Required | - |
| `payer` | [`GetPixPayerResponse \| null`](../../doc/models/get-pix-payer-response.md) | Required | - |

## Example (as JSON)

```json
{
  "gateway_id": "gateway_id6",
  "amount": 190,
  "status": "status4",
  "success": false,
  "created_at": "2016-03-13T12:52:32.123Z",
  "updated_at": "2016-03-13T12:52:32.123Z",
  "attempt_count": 90,
  "max_attempts": 154,
  "splits": [
    {
      "type": "type2",
      "amount": 82,
      "recipient": null,
      "gateway_id": "gateway_id2",
      "options": null,
      "id": "id8"
    },
    {
      "type": "type3",
      "amount": 81,
      "recipient": null,
      "gateway_id": "gateway_id3",
      "options": null,
      "id": "id7"
    }
  ],
  "next_attempt": null,
  "transaction_type": "pix",
  "id": "id4",
  "gateway_response": {
    "code": "code2",
    "errors": [
      {
        "message": "message9"
      },
      {
        "message": "message0"
      },
      {
        "message": "message1"
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
      "amount": 136,
      "recipient": null,
      "gateway_id": "gateway_id8",
      "options": null,
      "id": "id2"
    },
    {
      "type": "type7",
      "amount": 137,
      "recipient": null,
      "gateway_id": "gateway_id7",
      "options": null,
      "id": "id3"
    }
  ],
  "interest": null,
  "fine": null,
  "max_days_to_pay_past_due": null,
  "qr_code": "qr_code6",
  "qr_code_url": "qr_code_url2",
  "expires_at": "2016-03-13T12:52:32.123Z",
  "additional_information": [
    {
      "Name": "Name5",
      "Value": "Value7"
    },
    {
      "Name": "Name6",
      "Value": "Value6"
    }
  ],
  "end_to_end_id": "end_to_end_id0",
  "payer": {
    "name": "name8",
    "document": "document2",
    "document_type": "document_type6",
    "bank_account": {
      "bank_name": "bank_name8",
      "ispb": "ispb6",
      "branch_code": "branch_code0",
      "account_number": "account_number2"
    }
  }
}
```

