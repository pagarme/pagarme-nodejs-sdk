
# Get Cash Transaction Response

Response object for getting a cash transaction

## Structure

`GetCashTransactionResponse`

## Inherits From

[`GetTransactionResponse`](../../doc/models/get-transaction-response.md)

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `description` | `string \| undefined` | Optional | Description |

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
              "volume_percentage": 150,
              "delay": 140,
              "days": [
                116
              ]
            },
            "transfer_settings": {
              "transfer_enabled": false,
              "transfer_interval": "transfer_interval8",
              "transfer_day": 60
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
          "volume_percentage": 220,
          "delay": 70,
          "days": [
            46
          ]
        },
        "transfer_settings": {
          "transfer_enabled": false,
          "transfer_interval": "transfer_interval8",
          "transfer_day": 130
        },
        "code": "code4",
        "payment_mode": "payment_mode0"
      },
      "gateway_id": "gateway_id8",
      "options": {
        "liable": false,
        "charge_processing_fee": false,
        "charge_remainder_fee": "charge_remainder_fee8"
      },
      "id": "id2"
    },
    {
      "type": "type7",
      "amount": 159,
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
              "type": "type3",
              "status": "status5",
              "created_at": "2016-03-13T12:52:32.123Z",
              "updated_at": "2016-03-13T12:52:32.123Z",
              "deleted_at": "2016-03-13T12:52:32.123Z",
              "recipient": {},
              "metadata": {
                "key0": "metadata0"
              },
              "pix_key": "pix_key3"
            },
            "gateway_recipients": [
              {
                "gateway": "gateway9",
                "status": "status1",
                "pgid": "pgid5",
                "created_at": "created_at7",
                "updated_at": "updated_at5"
              }
            ],
            "metadata": {
              "key0": "metadata8"
            },
            "automatic_anticipation_settings": {
              "enabled": true,
              "type": "type1",
              "volume_percentage": 151,
              "delay": 139,
              "days": [
                115,
                116,
                117
              ]
            },
            "transfer_settings": {
              "transfer_enabled": true,
              "transfer_interval": "transfer_interval9",
              "transfer_day": 61
            },
            "code": "code3",
            "payment_mode": "payment_mode9"
          },
          "metadata": {
            "key0": "metadata0"
          },
          "pix_key": "pix_key3"
        },
        "gateway_recipients": [
          {}
        ],
        "metadata": {
          "key0": "metadata8"
        },
        "automatic_anticipation_settings": {
          "enabled": true,
          "type": "type1",
          "volume_percentage": 221,
          "delay": 69,
          "days": [
            45,
            46,
            47
          ]
        },
        "transfer_settings": {
          "transfer_enabled": true,
          "transfer_interval": "transfer_interval9",
          "transfer_day": 131
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
    },
    {
      "type": "type6",
      "amount": 160,
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
              "recipient": {},
              "metadata": {
                "key0": "metadata9",
                "key1": "metadata8"
              },
              "pix_key": "pix_key4"
            },
            "gateway_recipients": [
              {
                "gateway": "gateway8",
                "status": "status0",
                "pgid": "pgid4",
                "created_at": "created_at6",
                "updated_at": "updated_at4"
              },
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
              "key0": "metadata9",
              "key1": "metadata0"
            },
            "automatic_anticipation_settings": {
              "enabled": false,
              "type": "type2",
              "volume_percentage": 152,
              "delay": 138,
              "days": [
                114,
                115
              ]
            },
            "transfer_settings": {
              "transfer_enabled": false,
              "transfer_interval": "transfer_interval0",
              "transfer_day": 62
            },
            "code": "code2",
            "payment_mode": "payment_mode8"
          },
          "metadata": {
            "key0": "metadata9",
            "key1": "metadata8"
          },
          "pix_key": "pix_key4"
        },
        "gateway_recipients": [
          {},
          {},
          {}
        ],
        "metadata": {
          "key0": "metadata9",
          "key1": "metadata0"
        },
        "automatic_anticipation_settings": {
          "enabled": false,
          "type": "type2",
          "volume_percentage": 222,
          "delay": 68,
          "days": [
            44,
            45
          ]
        },
        "transfer_settings": {
          "transfer_enabled": false,
          "transfer_interval": "transfer_interval0",
          "transfer_day": 132
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
    }
  ],
  "next_attempt": "2016-03-13T12:52:32.123Z",
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
  "metadata": {
    "key0": "metadata7",
    "key1": "metadata6",
    "key2": "metadata5"
  },
  "split": [
    {
      "type": "type2",
      "amount": 172,
      "recipient": {
        "id": "id0",
        "name": "name0",
        "email": "email6",
        "document": "document4",
        "description": "description0",
        "type": "type0",
        "status": "status2",
        "created_at": "2016-03-13T12:52:32.123Z",
        "updated_at": "2016-03-13T12:52:32.123Z",
        "deleted_at": "2016-03-13T12:52:32.123Z",
        "default_bank_account": {
          "id": "id8",
          "holder_name": "holder_name4",
          "holder_type": "holder_type0",
          "bank": "bank6",
          "branch_number": "branch_number4",
          "branch_check_digit": "branch_check_digit4",
          "account_number": "account_number8",
          "account_check_digit": "account_check_digit4",
          "type": "type8",
          "status": "status0",
          "created_at": "2016-03-13T12:52:32.123Z",
          "updated_at": "2016-03-13T12:52:32.123Z",
          "deleted_at": "2016-03-13T12:52:32.123Z",
          "recipient": {
            "id": "id0",
            "name": "name0",
            "email": "email6",
            "document": "document4",
            "description": "description0",
            "type": "type0",
            "status": "status2",
            "created_at": "2016-03-13T12:52:32.123Z",
            "updated_at": "2016-03-13T12:52:32.123Z",
            "deleted_at": "2016-03-13T12:52:32.123Z",
            "default_bank_account": {
              "id": "id8",
              "holder_name": "holder_name4",
              "holder_type": "holder_type0",
              "bank": "bank6",
              "branch_number": "branch_number4",
              "branch_check_digit": "branch_check_digit4",
              "account_number": "account_number8",
              "account_check_digit": "account_check_digit4",
              "type": "type8",
              "status": "status0",
              "created_at": "2016-03-13T12:52:32.123Z",
              "updated_at": "2016-03-13T12:52:32.123Z",
              "deleted_at": "2016-03-13T12:52:32.123Z",
              "recipient": {},
              "metadata": {
                "key0": "metadata1",
                "key1": "metadata0"
              },
              "pix_key": "pix_key2"
            },
            "gateway_recipients": [
              {
                "gateway": "gateway4",
                "status": "status6",
                "pgid": "pgid0",
                "created_at": "created_at2",
                "updated_at": "updated_at0"
              },
              {
                "gateway": "gateway5",
                "status": "status7",
                "pgid": "pgid1",
                "created_at": "created_at3",
                "updated_at": "updated_at1"
              }
            ],
            "metadata": {
              "key0": "metadata7",
              "key1": "metadata6",
              "key2": "metadata5"
            },
            "automatic_anticipation_settings": {
              "enabled": false,
              "type": "type4",
              "volume_percentage": 152,
              "delay": 138,
              "days": [
                114
              ]
            },
            "transfer_settings": {
              "transfer_enabled": false,
              "transfer_interval": "transfer_interval4",
              "transfer_day": 62
            },
            "code": "code8",
            "payment_mode": "payment_mode4"
          },
          "metadata": {
            "key0": "metadata1",
            "key1": "metadata0"
          },
          "pix_key": "pix_key2"
        },
        "gateway_recipients": [
          {},
          {}
        ],
        "metadata": {
          "key0": "metadata7",
          "key1": "metadata6",
          "key2": "metadata5"
        },
        "automatic_anticipation_settings": {
          "enabled": false,
          "type": "type6",
          "volume_percentage": 222,
          "delay": 68,
          "days": [
            44
          ]
        },
        "transfer_settings": {
          "transfer_enabled": false,
          "transfer_interval": "transfer_interval4",
          "transfer_day": 132
        },
        "code": "code8",
        "payment_mode": "payment_mode4"
      },
      "gateway_id": "gateway_id2",
      "options": {
        "liable": false,
        "charge_processing_fee": false,
        "charge_remainder_fee": "charge_remainder_fee4"
      },
      "id": "id8"
    },
    {
      "type": "type1",
      "amount": 173,
      "recipient": {
        "id": "id1",
        "name": "name1",
        "email": "email5",
        "document": "document5",
        "description": "description1",
        "type": "type9",
        "status": "status3",
        "created_at": "2016-03-13T12:52:32.123Z",
        "updated_at": "2016-03-13T12:52:32.123Z",
        "deleted_at": "2016-03-13T12:52:32.123Z",
        "default_bank_account": {
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
          "recipient": {
            "id": "id1",
            "name": "name1",
            "email": "email5",
            "document": "document5",
            "description": "description1",
            "type": "type1",
            "status": "status3",
            "created_at": "2016-03-13T12:52:32.123Z",
            "updated_at": "2016-03-13T12:52:32.123Z",
            "deleted_at": "2016-03-13T12:52:32.123Z",
            "default_bank_account": {
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
              "recipient": {},
              "metadata": {
                "key0": "metadata0",
                "key1": "metadata9",
                "key2": "metadata8"
              },
              "pix_key": "pix_key3"
            },
            "gateway_recipients": [
              {
                "gateway": "gateway5",
                "status": "status7",
                "pgid": "pgid1",
                "created_at": "created_at3",
                "updated_at": "updated_at1"
              },
              {
                "gateway": "gateway6",
                "status": "status8",
                "pgid": "pgid2",
                "created_at": "created_at4",
                "updated_at": "updated_at2"
              },
              {
                "gateway": "gateway7",
                "status": "status9",
                "pgid": "pgid3",
                "created_at": "created_at5",
                "updated_at": "updated_at3"
              }
            ],
            "metadata": {
              "key0": "metadata8",
              "key1": "metadata7"
            },
            "automatic_anticipation_settings": {
              "enabled": true,
              "type": "type5",
              "volume_percentage": 151,
              "delay": 139,
              "days": [
                115,
                116
              ]
            },
            "transfer_settings": {
              "transfer_enabled": true,
              "transfer_interval": "transfer_interval3",
              "transfer_day": 61
            },
            "code": "code9",
            "payment_mode": "payment_mode5"
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
          {},
          {}
        ],
        "metadata": {
          "key0": "metadata8",
          "key1": "metadata7"
        },
        "automatic_anticipation_settings": {
          "enabled": true,
          "type": "type5",
          "volume_percentage": 221,
          "delay": 69,
          "days": [
            45,
            46
          ]
        },
        "transfer_settings": {
          "transfer_enabled": true,
          "transfer_interval": "transfer_interval3",
          "transfer_day": 131
        },
        "code": "code9",
        "payment_mode": "payment_mode5"
      },
      "gateway_id": "gateway_id1",
      "options": {
        "liable": true,
        "charge_processing_fee": true,
        "charge_remainder_fee": "charge_remainder_fee5"
      },
      "id": "id9"
    }
  ],
  "interest": {
    "days": 140,
    "type": "type0",
    "amount": 214
  },
  "fine": {
    "days": 150,
    "type": "type8",
    "amount": 224
  },
  "max_days_to_pay_past_due": 138,
  "description": "description0"
}
```

