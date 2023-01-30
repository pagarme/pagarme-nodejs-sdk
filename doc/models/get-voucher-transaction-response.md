
# Get Voucher Transaction Response

Response for voucher transactions

## Structure

`GetVoucherTransactionResponse`

## Inherits From

[`GetTransactionResponse`](../../doc/models/get-transaction-response.md)

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `statementDescriptor` | `string \| null` | Required | Text that will appear on the voucher's statement |
| `acquirerName` | `string \| null` | Required | Acquirer name |
| `acquirerAffiliationCode` | `string \| null` | Required | Acquirer affiliation code |
| `acquirerTid` | `string \| null` | Required | Acquirer TID |
| `acquirerNsu` | `string \| null` | Required | Acquirer NSU |
| `acquirerAuthCode` | `string \| null` | Required | Acquirer authorization code |
| `acquirerMessage` | `string \| null` | Required | acquirer_message |
| `acquirerReturnCode` | `string \| null` | Required | Acquirer return code |
| `operationType` | `string \| null` | Required | Operation type |
| `card` | [`GetCardResponse \| null`](../../doc/models/get-card-response.md) | Required | Card data |

## Example (as JSON)

```json
{
  "gateway_id": "gateway_id4",
  "amount": 24,
  "status": "status2",
  "success": false,
  "created_at": "2016-03-13T12:52:32.123Z",
  "updated_at": "2016-03-13T12:52:32.123Z",
  "attempt_count": 0,
  "max_attempts": 244,
  "splits": [
    {
      "type": "type0",
      "amount": 248,
      "recipient": null,
      "gateway_id": "gateway_id0",
      "options": null,
      "id": "id0"
    },
    {
      "type": "type9",
      "amount": 249,
      "recipient": null,
      "gateway_id": "gateway_id9",
      "options": null,
      "id": "id1"
    }
  ],
  "next_attempt": null,
  "transaction_type": "voucher",
  "id": "id6",
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
    "status": "status6",
    "return_code": "return_code4",
    "return_message": "return_message8",
    "provider_name": "provider_name8",
    "score": "score4"
  },
  "metadata": null,
  "split": [
    {
      "type": "type6",
      "amount": 226,
      "recipient": null,
      "gateway_id": "gateway_id6",
      "options": null,
      "id": "id4"
    },
    {
      "type": "type5",
      "amount": 227,
      "recipient": null,
      "gateway_id": "gateway_id5",
      "options": null,
      "id": "id5"
    }
  ],
  "interest": null,
  "fine": null,
  "max_days_to_pay_past_due": null,
  "statement_descriptor": "statement_descriptor0",
  "acquirer_name": "acquirer_name4",
  "acquirer_affiliation_code": "acquirer_affiliation_code8",
  "acquirer_tid": "acquirer_tid0",
  "acquirer_nsu": "acquirer_nsu0",
  "acquirer_auth_code": "acquirer_auth_code8",
  "acquirer_message": "acquirer_message0",
  "acquirer_return_code": "acquirer_return_code8",
  "operation_type": "operation_type6",
  "card": {
    "id": "id6",
    "last_four_digits": "last_four_digits2",
    "brand": "brand0",
    "holder_name": "holder_name2",
    "exp_month": 228,
    "exp_year": 68,
    "status": "status2",
    "created_at": "2016-03-13T12:52:32.123Z",
    "updated_at": "2016-03-13T12:52:32.123Z",
    "billing_address": {
      "street": "street8",
      "number": "number4",
      "zip_code": "zip_code2",
      "neighborhood": "neighborhood4",
      "city": "city2",
      "state": "state6",
      "country": "country2",
      "complement": "complement6",
      "line_1": "line_18",
      "line_2": "line_26"
    },
    "customer": null,
    "metadata": {
      "key0": "metadata7"
    },
    "type": "type4",
    "holder_document": "holder_document0",
    "deleted_at": null,
    "first_six_digits": "first_six_digits6",
    "label": "label6"
  }
}
```

