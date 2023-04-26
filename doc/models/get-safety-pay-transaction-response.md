
# Get Safety Pay Transaction Response

Response object for getting a safety pay transaction

## Structure

`GetSafetyPayTransactionResponse`

## Inherits From

[`GetTransactionResponse`](../../doc/models/get-transaction-response.md)

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `url` | `string \| undefined` | Optional | Payment url |
| `bankTid` | `string \| undefined` | Optional | Transaction identifier on bank |
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
      "recipient": {
        "id": "id4",
        "name": "name4",
        "email": "email2",
        "document": "document2",
        "description": "description6",
        "type": "type6",
        "status": "status4",
        "created_at": "2016-03-13T12:52:32.123Z",
        "updated_at": "2016-03-13T12:52:32.123Z",
        "deleted_at": "2016-03-13T12:52:32.123Z",
        "default_bank_account": {
          "id": "id2",
          "holder_name": "holder_name8",
          "holder_type": "holder_type4",
          "bank": "bank0",
          "branch_number": "branch_number8",
          "branch_check_digit": "branch_check_digit8",
          "account_number": "account_number2",
          "account_check_digit": "account_check_digit8",
          "type": "type8",
          "status": "status4",
          "created_at": "2016-03-13T12:52:32.123Z",
          "updated_at": "2016-03-13T12:52:32.123Z",
          "deleted_at": "2016-03-13T12:52:32.123Z",
          "recipient": {
            "id": "id4",
            "name": "name4",
            "email": "email2",
            "document": "document8",
            "description": "description4",
            "type": "type6",
            "status": "status6",
            "created_at": "2016-03-13T12:52:32.123Z",
            "updated_at": "2016-03-13T12:52:32.123Z",
            "deleted_at": "2016-03-13T12:52:32.123Z",
            "default_bank_account": {
              "id": "id2",
              "holder_name": "holder_name8",
              "holder_type": "holder_type4",
              "bank": "bank0",
              "branch_number": "branch_number8",
              "branch_check_digit": "branch_check_digit8",
              "account_number": "account_number2",
              "account_check_digit": "account_check_digit8",
              "type": "type2",
              "status": "status4",
              "created_at": "2016-03-13T12:52:32.123Z",
              "updated_at": "2016-03-13T12:52:32.123Z",
              "deleted_at": "2016-03-13T12:52:32.123Z",
              "recipient": {},
              "metadata": {
                "key0": "metadata7"
              },
              "pix_key": "pix_key6"
            },
            "gateway_recipients": [
              {
                "gateway": "gateway8",
                "status": "status0",
                "pgid": "pgid4",
                "created_at": "created_at6",
                "updated_at": "updated_at4"
              }
            ],
            "metadata": {
              "key0": "metadata9"
            },
            "automatic_anticipation_settings": {
              "enabled": false,
              "type": "type2",
              "volume_percentage": 162,
              "delay": 128,
              "days": [
                104,
                105,
                106
              ]
            },
            "transfer_settings": {
              "transfer_enabled": false,
              "transfer_interval": "transfer_interval0",
              "transfer_day": 72
            },
            "code": "code2",
            "payment_mode": "payment_mode8"
          },
          "metadata": {
            "key0": "metadata9"
          },
          "pix_key": "pix_key4"
        },
        "gateway_recipients": [
          {}
        ],
        "metadata": {
          "key0": "metadata9"
        },
        "automatic_anticipation_settings": {
          "enabled": false,
          "type": "type2",
          "volume_percentage": 232,
          "delay": 58,
          "days": [
            34,
            35,
            36
          ]
        },
        "transfer_settings": {
          "transfer_enabled": false,
          "transfer_interval": "transfer_interval0",
          "transfer_day": 142
        },
        "code": "code2",
        "payment_mode": "payment_mode2"
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
      "type": "type7",
      "amount": 87,
      "recipient": {
        "id": "id5",
        "name": "name5",
        "email": "email1",
        "document": "document1",
        "description": "description5",
        "type": "type5",
        "status": "status3",
        "created_at": "2016-03-13T12:52:32.123Z",
        "updated_at": "2016-03-13T12:52:32.123Z",
        "deleted_at": "2016-03-13T12:52:32.123Z",
        "default_bank_account": {
          "id": "id3",
          "holder_name": "holder_name9",
          "holder_type": "holder_type5",
          "bank": "bank1",
          "branch_number": "branch_number9",
          "branch_check_digit": "branch_check_digit9",
          "account_number": "account_number3",
          "account_check_digit": "account_check_digit9",
          "type": "type7",
          "status": "status5",
          "created_at": "2016-03-13T12:52:32.123Z",
          "updated_at": "2016-03-13T12:52:32.123Z",
          "deleted_at": "2016-03-13T12:52:32.123Z",
          "recipient": {
            "id": "id5",
            "name": "name5",
            "email": "email1",
            "document": "document9",
            "description": "description5",
            "type": "type5",
            "status": "status7",
            "created_at": "2016-03-13T12:52:32.123Z",
            "updated_at": "2016-03-13T12:52:32.123Z",
            "deleted_at": "2016-03-13T12:52:32.123Z",
            "default_bank_account": {
              "id": "id3",
              "holder_name": "holder_name9",
              "holder_type": "holder_type5",
              "bank": "bank1",
              "branch_number": "branch_number9",
              "branch_check_digit": "branch_check_digit9",
              "account_number": "account_number3",
              "account_check_digit": "account_check_digit9",
              "type": "type3",
              "status": "status5",
              "created_at": "2016-03-13T12:52:32.123Z",
              "updated_at": "2016-03-13T12:52:32.123Z",
              "deleted_at": "2016-03-13T12:52:32.123Z",
              "recipient": {},
              "metadata": {
                "key0": "metadata6",
                "key1": "metadata5"
              },
              "pix_key": "pix_key7"
            },
            "gateway_recipients": [
              {
                "gateway": "gateway9",
                "status": "status1",
                "pgid": "pgid5",
                "created_at": "created_at7",
                "updated_at": "updated_at5"
              },
              {
                "gateway": "gateway0",
                "status": "status2",
                "pgid": "pgid6",
                "created_at": "created_at8",
                "updated_at": "updated_at6"
              }
            ],
            "metadata": {
              "key0": "metadata8",
              "key1": "metadata9",
              "key2": "metadata0"
            },
            "automatic_anticipation_settings": {
              "enabled": true,
              "type": "type1",
              "volume_percentage": 161,
              "delay": 129,
              "days": [
                105
              ]
            },
            "transfer_settings": {
              "transfer_enabled": true,
              "transfer_interval": "transfer_interval9",
              "transfer_day": 71
            },
            "code": "code3",
            "payment_mode": "payment_mode9"
          },
          "metadata": {
            "key0": "metadata0",
            "key1": "metadata9",
            "key2": "metadata8"
          },
          "pix_key": "pix_key3"
        },
        "gateway_recipients": [
          {},
          {}
        ],
        "metadata": {
          "key0": "metadata8",
          "key1": "metadata9",
          "key2": "metadata0"
        },
        "automatic_anticipation_settings": {
          "enabled": true,
          "type": "type1",
          "volume_percentage": 231,
          "delay": 59,
          "days": [
            35
          ]
        },
        "transfer_settings": {
          "transfer_enabled": true,
          "transfer_interval": "transfer_interval9",
          "transfer_day": 141
        },
        "code": "code3",
        "payment_mode": "payment_mode1"
      },
      "gateway_id": "gateway_id7",
      "options": {
        "liable": true,
        "charge_processing_fee": true,
        "charge_remainder_fee": "charge_remainder_fee7"
      },
      "id": "id3"
    }
  ],
  "next_attempt": "2016-03-13T12:52:32.123Z",
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
  "metadata": {
    "key0": "metadata1"
  },
  "split": [
    {
      "type": "type8",
      "amount": 8,
      "recipient": {
        "id": "id4",
        "name": "name4",
        "email": "email2",
        "document": "document2",
        "description": "description4",
        "type": "type6",
        "status": "status4",
        "created_at": "2016-03-13T12:52:32.123Z",
        "updated_at": "2016-03-13T12:52:32.123Z",
        "deleted_at": "2016-03-13T12:52:32.123Z",
        "default_bank_account": {
          "id": "id2",
          "holder_name": "holder_name8",
          "holder_type": "holder_type4",
          "bank": "bank0",
          "branch_number": "branch_number8",
          "branch_check_digit": "branch_check_digit8",
          "account_number": "account_number2",
          "account_check_digit": "account_check_digit8",
          "type": "type2",
          "status": "status4",
          "created_at": "2016-03-13T12:52:32.123Z",
          "updated_at": "2016-03-13T12:52:32.123Z",
          "deleted_at": "2016-03-13T12:52:32.123Z",
          "recipient": {
            "id": "id4",
            "name": "name4",
            "email": "email2",
            "document": "document8",
            "description": "description4",
            "type": "type6",
            "status": "status6",
            "created_at": "2016-03-13T12:52:32.123Z",
            "updated_at": "2016-03-13T12:52:32.123Z",
            "deleted_at": "2016-03-13T12:52:32.123Z",
            "default_bank_account": {
              "id": "id2",
              "holder_name": "holder_name8",
              "holder_type": "holder_type4",
              "bank": "bank0",
              "branch_number": "branch_number8",
              "branch_check_digit": "branch_check_digit8",
              "account_number": "account_number2",
              "account_check_digit": "account_check_digit8",
              "type": "type2",
              "status": "status4",
              "created_at": "2016-03-13T12:52:32.123Z",
              "updated_at": "2016-03-13T12:52:32.123Z",
              "deleted_at": "2016-03-13T12:52:32.123Z",
              "recipient": {},
              "metadata": {
                "key0": "metadata7"
              },
              "pix_key": "pix_key6"
            },
            "gateway_recipients": [
              {
                "gateway": "gateway8",
                "status": "status0",
                "pgid": "pgid4",
                "created_at": "created_at6",
                "updated_at": "updated_at4"
              }
            ],
            "metadata": {
              "key0": "metadata1"
            },
            "automatic_anticipation_settings": {
              "enabled": false,
              "type": "type8",
              "volume_percentage": 60,
              "delay": 230,
              "days": [
                206,
                207,
                208
              ]
            },
            "transfer_settings": {
              "transfer_enabled": false,
              "transfer_interval": "transfer_interval0",
              "transfer_day": 226
            },
            "code": "code2",
            "payment_mode": "payment_mode8"
          },
          "metadata": {
            "key0": "metadata9"
          },
          "pix_key": "pix_key4"
        },
        "gateway_recipients": [
          {}
        ],
        "metadata": {
          "key0": "metadata9"
        },
        "automatic_anticipation_settings": {
          "enabled": false,
          "type": "type2",
          "volume_percentage": 130,
          "delay": 160,
          "days": [
            136,
            137,
            138
          ]
        },
        "transfer_settings": {
          "transfer_enabled": false,
          "transfer_interval": "transfer_interval0",
          "transfer_day": 40
        },
        "code": "code2",
        "payment_mode": "payment_mode8"
      },
      "gateway_id": "gateway_id8",
      "options": {
        "liable": false,
        "charge_processing_fee": false,
        "charge_remainder_fee": "charge_remainder_fee8"
      },
      "id": "id2"
    }
  ],
  "interest": {
    "days": 48,
    "type": "type4",
    "amount": 122
  },
  "fine": {
    "days": 242,
    "type": "type4",
    "amount": 60
  },
  "max_days_to_pay_past_due": 230,
  "url": "url4",
  "bank_tid": "bank_tid4",
  "paid_at": "2016-03-13T12:52:32.123Z",
  "paid_amount": 210
}
```

