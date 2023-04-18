
# Get Bank Transfer Transaction Response

Response object for getting a bank transfer transaction

## Structure

`GetBankTransferTransactionResponse`

## Inherits From

[`GetTransactionResponse`](../../doc/models/get-transaction-response.md)

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `url` | `string \| undefined` | Optional | Payment url |
| `bankTid` | `string \| undefined` | Optional | Transaction identifier for the bank |
| `bank` | `string \| undefined` | Optional | Bank |
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
                "key1": "metadata0"
              },
              "pix_key": "pix_key8"
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
              },
              {
                "gateway": "gateway2",
                "status": "status4",
                "pgid": "pgid8",
                "created_at": "created_at0",
                "updated_at": "updated_at8"
              }
            ],
            "metadata": {
              "key0": "metadata7",
              "key1": "metadata8"
            },
            "automatic_anticipation_settings": {
              "enabled": false,
              "type": "type0",
              "volume_percentage": 128,
              "delay": 162,
              "days": [
                138,
                139
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
            "key1": "metadata0"
          },
          "pix_key": "pix_key2"
        },
        "gateway_recipients": [
          {},
          {},
          {}
        ],
        "metadata": {
          "key0": "metadata7",
          "key1": "metadata8"
        },
        "automatic_anticipation_settings": {
          "enabled": false,
          "type": "type0",
          "volume_percentage": 198,
          "delay": 92,
          "days": [
            68,
            69
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
      "gateway_id": "gateway_id8",
      "options": {
        "liable": false,
        "charge_processing_fee": false,
        "charge_remainder_fee": "charge_remainder_fee8"
      },
      "id": "id2"
    }
  ],
  "next_attempt": "2016-03-13T12:52:32.123Z",
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
  "metadata": {
    "key0": "metadata5",
    "key1": "metadata6"
  },
  "split": [
    {
      "type": "type4",
      "amount": 190,
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
                "key0": "metadata3",
                "key1": "metadata2"
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
              },
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
              "key0": "metadata5",
              "key1": "metadata6"
            },
            "automatic_anticipation_settings": {
              "enabled": false,
              "type": "type8",
              "volume_percentage": 134,
              "delay": 156,
              "days": [
                132,
                133
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
            "key0": "metadata3",
            "key1": "metadata2"
          },
          "pix_key": "pix_key0"
        },
        "gateway_recipients": [
          {},
          {},
          {}
        ],
        "metadata": {
          "key0": "metadata5",
          "key1": "metadata6"
        },
        "automatic_anticipation_settings": {
          "enabled": false,
          "type": "type8",
          "volume_percentage": 204,
          "delay": 86,
          "days": [
            62,
            63
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
      "gateway_id": "gateway_id4",
      "options": {
        "liable": false,
        "charge_processing_fee": false,
        "charge_remainder_fee": "charge_remainder_fee2"
      },
      "id": "id6"
    },
    {
      "type": "type3",
      "amount": 191,
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
                "key0": "metadata4"
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
              }
            ],
            "metadata": {
              "key0": "metadata4"
            },
            "automatic_anticipation_settings": {
              "enabled": true,
              "type": "type7",
              "volume_percentage": 133,
              "delay": 157,
              "days": [
                133,
                134,
                135
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
            "key0": "metadata4"
          },
          "pix_key": "pix_key9"
        },
        "gateway_recipients": [
          {}
        ],
        "metadata": {
          "key0": "metadata4"
        },
        "automatic_anticipation_settings": {
          "enabled": true,
          "type": "type7",
          "volume_percentage": 203,
          "delay": 87,
          "days": [
            63,
            64,
            65
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
      "gateway_id": "gateway_id3",
      "options": {
        "liable": true,
        "charge_processing_fee": true,
        "charge_remainder_fee": "charge_remainder_fee3"
      },
      "id": "id7"
    },
    {
      "type": "type2",
      "amount": 192,
      "recipient": {
        "id": "id0",
        "name": "name0",
        "email": "email6",
        "document": "document6",
        "description": "description0",
        "type": "type0",
        "status": "status8",
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
          "type": "type2",
          "status": "status0",
          "created_at": "2016-03-13T12:52:32.123Z",
          "updated_at": "2016-03-13T12:52:32.123Z",
          "deleted_at": "2016-03-13T12:52:32.123Z",
          "recipient": {
            "id": "id0",
            "name": "name0",
            "email": "email6",
            "document": "document6",
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
                "key0": "metadata5",
                "key1": "metadata4",
                "key2": "metadata3"
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
              "key0": "metadata3",
              "key1": "metadata4",
              "key2": "metadata5"
            },
            "automatic_anticipation_settings": {
              "enabled": false,
              "type": "type6",
              "volume_percentage": 132,
              "delay": 158,
              "days": [
                134
              ]
            },
            "transfer_settings": {
              "transfer_enabled": false,
              "transfer_interval": "transfer_interval4",
              "transfer_day": 42
            },
            "code": "code8",
            "payment_mode": "payment_mode4"
          },
          "metadata": {
            "key0": "metadata5",
            "key1": "metadata4",
            "key2": "metadata3"
          },
          "pix_key": "pix_key8"
        },
        "gateway_recipients": [
          {},
          {}
        ],
        "metadata": {
          "key0": "metadata3",
          "key1": "metadata4",
          "key2": "metadata5"
        },
        "automatic_anticipation_settings": {
          "enabled": false,
          "type": "type6",
          "volume_percentage": 202,
          "delay": 88,
          "days": [
            64
          ]
        },
        "transfer_settings": {
          "transfer_enabled": false,
          "transfer_interval": "transfer_interval4",
          "transfer_day": 112
        },
        "code": "code8",
        "payment_mode": "payment_mode6"
      },
      "gateway_id": "gateway_id2",
      "options": {
        "liable": false,
        "charge_processing_fee": false,
        "charge_remainder_fee": "charge_remainder_fee4"
      },
      "id": "id8"
    }
  ],
  "interest": {
    "days": 122,
    "type": "type8",
    "amount": 196
  },
  "fine": {
    "days": 168,
    "type": "type0",
    "amount": 242
  },
  "max_days_to_pay_past_due": 156,
  "url": "url4",
  "bank_tid": "bank_tid4",
  "bank": "bank8",
  "paid_at": "2016-03-13T12:52:32.123Z",
  "paid_amount": 210
}
```

