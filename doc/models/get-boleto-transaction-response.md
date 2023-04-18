
# Get Boleto Transaction Response

Response object for getting a boleto transaction

## Structure

`GetBoletoTransactionResponse`

## Inherits From

[`GetTransactionResponse`](../../doc/models/get-transaction-response.md)

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `url` | `string \| undefined` | Optional | - |
| `barcode` | `string \| undefined` | Optional | - |
| `nossoNumero` | `string \| undefined` | Optional | - |
| `bank` | `string \| undefined` | Optional | - |
| `documentNumber` | `string \| undefined` | Optional | - |
| `instructions` | `string \| undefined` | Optional | - |
| `billingAddress` | [`GetBillingAddressResponse \| undefined`](../../doc/models/get-billing-address-response.md) | Optional | - |
| `dueAt` | `string \| undefined` | Optional | - |
| `qrCode` | `string \| undefined` | Optional | - |
| `line` | `string \| undefined` | Optional | - |
| `pdfPassword` | `string \| undefined` | Optional | - |
| `pdf` | `string \| undefined` | Optional | - |
| `paidAt` | `string \| undefined` | Optional | - |
| `paidAmount` | `string \| undefined` | Optional | - |
| `type` | `string \| undefined` | Optional | - |
| `creditAt` | `string \| undefined` | Optional | - |
| `statementDescriptor` | `string \| undefined` | Optional | Soft Descriptor |

## Example (as JSON)

```json
{
  "gateway_id": "gateway_id4",
  "amount": 250,
  "status": "status2",
  "success": false,
  "created_at": "2016-03-13T12:52:32.123Z",
  "updated_at": "2016-03-13T12:52:32.123Z",
  "attempt_count": 30,
  "max_attempts": 214,
  "splits": [
    {
      "type": "type0",
      "amount": 114,
      "recipient": {
        "id": "id8",
        "name": "name8",
        "email": "email8",
        "document": "document8",
        "description": "description2",
        "type": "type2",
        "status": "status0",
        "created_at": "2016-03-13T12:52:32.123Z",
        "updated_at": "2016-03-13T12:52:32.123Z",
        "deleted_at": "2016-03-13T12:52:32.123Z",
        "default_bank_account": {
          "id": "id6",
          "holder_name": "holder_name2",
          "holder_type": "holder_type8",
          "bank": "bank4",
          "branch_number": "branch_number2",
          "branch_check_digit": "branch_check_digit2",
          "account_number": "account_number6",
          "account_check_digit": "account_check_digit2",
          "type": "type4",
          "status": "status8",
          "created_at": "2016-03-13T12:52:32.123Z",
          "updated_at": "2016-03-13T12:52:32.123Z",
          "deleted_at": "2016-03-13T12:52:32.123Z",
          "recipient": {
            "id": "id8",
            "name": "name8",
            "email": "email8",
            "document": "document8",
            "description": "description8",
            "type": "type2",
            "status": "status0",
            "created_at": "2016-03-13T12:52:32.123Z",
            "updated_at": "2016-03-13T12:52:32.123Z",
            "deleted_at": "2016-03-13T12:52:32.123Z",
            "default_bank_account": {
              "id": "id6",
              "holder_name": "holder_name2",
              "holder_type": "holder_type8",
              "bank": "bank4",
              "branch_number": "branch_number2",
              "branch_check_digit": "branch_check_digit2",
              "account_number": "account_number6",
              "account_check_digit": "account_check_digit2",
              "type": "type6",
              "status": "status8",
              "created_at": "2016-03-13T12:52:32.123Z",
              "updated_at": "2016-03-13T12:52:32.123Z",
              "deleted_at": "2016-03-13T12:52:32.123Z",
              "recipient": {},
              "metadata": {
                "key0": "metadata3"
              },
              "pix_key": "pix_key0"
            },
            "gateway_recipients": [
              {
                "gateway": "gateway2",
                "status": "status4",
                "pgid": "pgid8",
                "created_at": "created_at0",
                "updated_at": "updated_at8"
              }
            ],
            "metadata": {
              "key0": "metadata5"
            },
            "automatic_anticipation_settings": {
              "enabled": false,
              "type": "type8",
              "volume_percentage": 134,
              "delay": 156,
              "days": [
                132,
                133,
                134
              ]
            },
            "transfer_settings": {
              "transfer_enabled": false,
              "transfer_interval": "transfer_interval6",
              "transfer_day": 44
            },
            "code": "code6",
            "payment_mode": "payment_mode2"
          },
          "metadata": {
            "key0": "metadata3"
          },
          "pix_key": "pix_key0"
        },
        "gateway_recipients": [
          {}
        ],
        "metadata": {
          "key0": "metadata5"
        },
        "automatic_anticipation_settings": {
          "enabled": false,
          "type": "type8",
          "volume_percentage": 204,
          "delay": 86,
          "days": [
            62,
            63,
            64
          ]
        },
        "transfer_settings": {
          "transfer_enabled": false,
          "transfer_interval": "transfer_interval6",
          "transfer_day": 114
        },
        "code": "code6",
        "payment_mode": "payment_mode8"
      },
      "gateway_id": "gateway_id0",
      "options": {
        "liable": false,
        "charge_processing_fee": false,
        "charge_remainder_fee": "charge_remainder_fee0"
      },
      "id": "id0"
    },
    {
      "type": "type1",
      "amount": 115,
      "recipient": {
        "id": "id9",
        "name": "name9",
        "email": "email7",
        "document": "document7",
        "description": "description1",
        "type": "type1",
        "status": "status9",
        "created_at": "2016-03-13T12:52:32.123Z",
        "updated_at": "2016-03-13T12:52:32.123Z",
        "deleted_at": "2016-03-13T12:52:32.123Z",
        "default_bank_account": {
          "id": "id7",
          "holder_name": "holder_name3",
          "holder_type": "holder_type9",
          "bank": "bank5",
          "branch_number": "branch_number3",
          "branch_check_digit": "branch_check_digit3",
          "account_number": "account_number7",
          "account_check_digit": "account_check_digit3",
          "type": "type3",
          "status": "status9",
          "created_at": "2016-03-13T12:52:32.123Z",
          "updated_at": "2016-03-13T12:52:32.123Z",
          "deleted_at": "2016-03-13T12:52:32.123Z",
          "recipient": {
            "id": "id9",
            "name": "name9",
            "email": "email7",
            "document": "document7",
            "description": "description9",
            "type": "type1",
            "status": "status1",
            "created_at": "2016-03-13T12:52:32.123Z",
            "updated_at": "2016-03-13T12:52:32.123Z",
            "deleted_at": "2016-03-13T12:52:32.123Z",
            "default_bank_account": {
              "id": "id7",
              "holder_name": "holder_name3",
              "holder_type": "holder_type9",
              "bank": "bank5",
              "branch_number": "branch_number3",
              "branch_check_digit": "branch_check_digit3",
              "account_number": "account_number7",
              "account_check_digit": "account_check_digit3",
              "type": "type7",
              "status": "status9",
              "created_at": "2016-03-13T12:52:32.123Z",
              "updated_at": "2016-03-13T12:52:32.123Z",
              "deleted_at": "2016-03-13T12:52:32.123Z",
              "recipient": {},
              "metadata": {
                "key0": "metadata4",
                "key1": "metadata3",
                "key2": "metadata2"
              },
              "pix_key": "pix_key1"
            },
            "gateway_recipients": [
              {
                "gateway": "gateway3",
                "status": "status5",
                "pgid": "pgid9",
                "created_at": "created_at1",
                "updated_at": "updated_at9"
              },
              {
                "gateway": "gateway4",
                "status": "status6",
                "pgid": "pgid0",
                "created_at": "created_at2",
                "updated_at": "updated_at0"
              }
            ],
            "metadata": {
              "key0": "metadata4",
              "key1": "metadata5",
              "key2": "metadata6"
            },
            "automatic_anticipation_settings": {
              "enabled": true,
              "type": "type7",
              "volume_percentage": 133,
              "delay": 157,
              "days": [
                133
              ]
            },
            "transfer_settings": {
              "transfer_enabled": true,
              "transfer_interval": "transfer_interval5",
              "transfer_day": 43
            },
            "code": "code7",
            "payment_mode": "payment_mode3"
          },
          "metadata": {
            "key0": "metadata4",
            "key1": "metadata3",
            "key2": "metadata2"
          },
          "pix_key": "pix_key9"
        },
        "gateway_recipients": [
          {},
          {}
        ],
        "metadata": {
          "key0": "metadata4",
          "key1": "metadata5",
          "key2": "metadata6"
        },
        "automatic_anticipation_settings": {
          "enabled": true,
          "type": "type7",
          "volume_percentage": 203,
          "delay": 87,
          "days": [
            63
          ]
        },
        "transfer_settings": {
          "transfer_enabled": true,
          "transfer_interval": "transfer_interval5",
          "transfer_day": 113
        },
        "code": "code7",
        "payment_mode": "payment_mode7"
      },
      "gateway_id": "gateway_id1",
      "options": {
        "liable": true,
        "charge_processing_fee": true,
        "charge_remainder_fee": "charge_remainder_fee1"
      },
      "id": "id9"
    }
  ],
  "next_attempt": "2016-03-13T12:52:32.123Z",
  "transaction_type": "boleto",
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
  "metadata": {
    "key0": "metadata7",
    "key1": "metadata8",
    "key2": "metadata9"
  },
  "split": [
    {
      "type": "type6",
      "amount": 196,
      "recipient": {
        "id": "id6",
        "name": "name6",
        "email": "email0",
        "document": "document0",
        "description": "description4",
        "type": "type4",
        "status": "status2",
        "created_at": "2016-03-13T12:52:32.123Z",
        "updated_at": "2016-03-13T12:52:32.123Z",
        "deleted_at": "2016-03-13T12:52:32.123Z",
        "default_bank_account": {
          "id": "id4",
          "holder_name": "holder_name0",
          "holder_type": "holder_type6",
          "bank": "bank2",
          "branch_number": "branch_number0",
          "branch_check_digit": "branch_check_digit0",
          "account_number": "account_number4",
          "account_check_digit": "account_check_digit0",
          "type": "type6",
          "status": "status6",
          "created_at": "2016-03-13T12:52:32.123Z",
          "updated_at": "2016-03-13T12:52:32.123Z",
          "deleted_at": "2016-03-13T12:52:32.123Z",
          "recipient": {
            "id": "id6",
            "name": "name6",
            "email": "email0",
            "document": "document0",
            "description": "description6",
            "type": "type4",
            "status": "status2",
            "created_at": "2016-03-13T12:52:32.123Z",
            "updated_at": "2016-03-13T12:52:32.123Z",
            "deleted_at": "2016-03-13T12:52:32.123Z",
            "default_bank_account": {
              "id": "id4",
              "holder_name": "holder_name0",
              "holder_type": "holder_type6",
              "bank": "bank2",
              "branch_number": "branch_number0",
              "branch_check_digit": "branch_check_digit0",
              "account_number": "account_number4",
              "account_check_digit": "account_check_digit0",
              "type": "type4",
              "status": "status6",
              "created_at": "2016-03-13T12:52:32.123Z",
              "updated_at": "2016-03-13T12:52:32.123Z",
              "deleted_at": "2016-03-13T12:52:32.123Z",
              "recipient": {},
              "metadata": {
                "key0": "metadata1",
                "key1": "metadata0",
                "key2": "metadata9"
              },
              "pix_key": "pix_key2"
            },
            "gateway_recipients": [
              {
                "gateway": "gateway0",
                "status": "status2",
                "pgid": "pgid6",
                "created_at": "created_at8",
                "updated_at": "updated_at6"
              },
              {
                "gateway": "gateway1",
                "status": "status3",
                "pgid": "pgid7",
                "created_at": "created_at9",
                "updated_at": "updated_at7"
              }
            ],
            "metadata": {
              "key0": "metadata7",
              "key1": "metadata8",
              "key2": "metadata9"
            },
            "automatic_anticipation_settings": {
              "enabled": false,
              "type": "type0",
              "volume_percentage": 128,
              "delay": 162,
              "days": [
                138
              ]
            },
            "transfer_settings": {
              "transfer_enabled": false,
              "transfer_interval": "transfer_interval8",
              "transfer_day": 38
            },
            "code": "code4",
            "payment_mode": "payment_mode0"
          },
          "metadata": {
            "key0": "metadata1",
            "key1": "metadata0",
            "key2": "metadata9"
          },
          "pix_key": "pix_key2"
        },
        "gateway_recipients": [
          {},
          {}
        ],
        "metadata": {
          "key0": "metadata7",
          "key1": "metadata8",
          "key2": "metadata9"
        },
        "automatic_anticipation_settings": {
          "enabled": false,
          "type": "type0",
          "volume_percentage": 198,
          "delay": 92,
          "days": [
            68
          ]
        },
        "transfer_settings": {
          "transfer_enabled": false,
          "transfer_interval": "transfer_interval8",
          "transfer_day": 108
        },
        "code": "code4",
        "payment_mode": "payment_mode0"
      },
      "gateway_id": "gateway_id6",
      "options": {
        "liable": false,
        "charge_processing_fee": false,
        "charge_remainder_fee": "charge_remainder_fee6"
      },
      "id": "id4"
    },
    {
      "type": "type5",
      "amount": 197,
      "recipient": {
        "id": "id7",
        "name": "name7",
        "email": "email9",
        "document": "document9",
        "description": "description3",
        "type": "type3",
        "status": "status1",
        "created_at": "2016-03-13T12:52:32.123Z",
        "updated_at": "2016-03-13T12:52:32.123Z",
        "deleted_at": "2016-03-13T12:52:32.123Z",
        "default_bank_account": {
          "id": "id5",
          "holder_name": "holder_name1",
          "holder_type": "holder_type7",
          "bank": "bank3",
          "branch_number": "branch_number1",
          "branch_check_digit": "branch_check_digit1",
          "account_number": "account_number5",
          "account_check_digit": "account_check_digit1",
          "type": "type5",
          "status": "status7",
          "created_at": "2016-03-13T12:52:32.123Z",
          "updated_at": "2016-03-13T12:52:32.123Z",
          "deleted_at": "2016-03-13T12:52:32.123Z",
          "recipient": {
            "id": "id7",
            "name": "name7",
            "email": "email9",
            "document": "document9",
            "description": "description7",
            "type": "type3",
            "status": "status1",
            "created_at": "2016-03-13T12:52:32.123Z",
            "updated_at": "2016-03-13T12:52:32.123Z",
            "deleted_at": "2016-03-13T12:52:32.123Z",
            "default_bank_account": {
              "id": "id5",
              "holder_name": "holder_name1",
              "holder_type": "holder_type7",
              "bank": "bank3",
              "branch_number": "branch_number1",
              "branch_check_digit": "branch_check_digit1",
              "account_number": "account_number5",
              "account_check_digit": "account_check_digit1",
              "type": "type5",
              "status": "status7",
              "created_at": "2016-03-13T12:52:32.123Z",
              "updated_at": "2016-03-13T12:52:32.123Z",
              "deleted_at": "2016-03-13T12:52:32.123Z",
              "recipient": {},
              "metadata": {
                "key0": "metadata2",
                "key1": "metadata1"
              },
              "pix_key": "pix_key1"
            },
            "gateway_recipients": [
              {
                "gateway": "gateway1",
                "status": "status3",
                "pgid": "pgid7",
                "created_at": "created_at9",
                "updated_at": "updated_at7"
              },
              {
                "gateway": "gateway2",
                "status": "status4",
                "pgid": "pgid8",
                "created_at": "created_at0",
                "updated_at": "updated_at8"
              },
              {
                "gateway": "gateway3",
                "status": "status5",
                "pgid": "pgid9",
                "created_at": "created_at1",
                "updated_at": "updated_at9"
              }
            ],
            "metadata": {
              "key0": "metadata6",
              "key1": "metadata7"
            },
            "automatic_anticipation_settings": {
              "enabled": true,
              "type": "type9",
              "volume_percentage": 127,
              "delay": 163,
              "days": [
                139,
                140
              ]
            },
            "transfer_settings": {
              "transfer_enabled": true,
              "transfer_interval": "transfer_interval7",
              "transfer_day": 37
            },
            "code": "code5",
            "payment_mode": "payment_mode1"
          },
          "metadata": {
            "key0": "metadata2",
            "key1": "metadata1"
          },
          "pix_key": "pix_key1"
        },
        "gateway_recipients": [
          {},
          {},
          {}
        ],
        "metadata": {
          "key0": "metadata6",
          "key1": "metadata7"
        },
        "automatic_anticipation_settings": {
          "enabled": true,
          "type": "type9",
          "volume_percentage": 197,
          "delay": 93,
          "days": [
            69,
            70
          ]
        },
        "transfer_settings": {
          "transfer_enabled": true,
          "transfer_interval": "transfer_interval7",
          "transfer_day": 107
        },
        "code": "code5",
        "payment_mode": "payment_mode9"
      },
      "gateway_id": "gateway_id5",
      "options": {
        "liable": true,
        "charge_processing_fee": true,
        "charge_remainder_fee": "charge_remainder_fee5"
      },
      "id": "id5"
    }
  ],
  "interest": {
    "days": 116,
    "type": "type6",
    "amount": 190
  },
  "fine": {
    "days": 174,
    "type": "type2",
    "amount": 248
  },
  "max_days_to_pay_past_due": 162,
  "url": "url4",
  "barcode": "barcode0",
  "nosso_numero": "nosso_numero0",
  "bank": "bank8",
  "document_number": "document_number6",
  "instructions": "instructions2",
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
  "due_at": "2016-03-13T12:52:32.123Z",
  "qr_code": "qr_code6",
  "line": "line2",
  "pdf_password": "pdf_password8",
  "pdf": "pdf0",
  "paid_at": "2016-03-13T12:52:32.123Z",
  "paid_amount": "paid_amount8",
  "type": "type0",
  "credit_at": "2016-03-13T12:52:32.123Z",
  "statement_descriptor": "statement_descriptor0"
}
```

