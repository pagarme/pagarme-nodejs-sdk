
# Get Transaction Response

Generic response object for getting a transaction.

## Structure

`GetTransactionResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `gatewayId` | `string \| undefined` | Optional | Gateway transaction id |
| `amount` | `number \| undefined` | Optional | Amount in cents |
| `status` | `string \| undefined` | Optional | Transaction status |
| `success` | `boolean \| undefined` | Optional | Indicates if the transaction ocurred successfuly |
| `createdAt` | `string \| undefined` | Optional | Creation date |
| `updatedAt` | `string \| undefined` | Optional | Last update date |
| `attemptCount` | `number \| undefined` | Optional | Number of attempts tried |
| `maxAttempts` | `number \| undefined` | Optional | Max attempts |
| `splits` | [`GetSplitResponse[] \| undefined`](../../doc/models/get-split-response.md) | Optional | Splits |
| `nextAttempt` | `string \| undefined` | Optional | Date and time of the next attempt |
| `transactionType` | `string \| undefined` | Optional | - |
| `id` | `string \| undefined` | Optional | Código da transação |
| `gatewayResponse` | [`GetGatewayResponseResponse \| undefined`](../../doc/models/get-gateway-response-response.md) | Optional | The Gateway Response |
| `antifraudResponse` | [`GetAntifraudResponse \| undefined`](../../doc/models/get-antifraud-response.md) | Optional | - |
| `metadata` | `Record<string, string> \| undefined` | Optional | - |
| `split` | [`GetSplitResponse[] \| undefined`](../../doc/models/get-split-response.md) | Optional | - |
| `interest` | [`GetInterestResponse \| undefined`](../../doc/models/get-interest-response.md) | Optional | - |
| `fine` | [`GetFineResponse \| undefined`](../../doc/models/get-fine-response.md) | Optional | - |
| `maxDaysToPayPastDue` | `number \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "gateway_id": "gateway_id0",
  "amount": 46,
  "status": "status8",
  "success": false,
  "created_at": "2016-03-13T12:52:32.123Z",
  "updated_at": "2016-03-13T12:52:32.123Z",
  "attempt_count": 70,
  "max_attempts": 174,
  "splits": [
    {
      "type": "type4",
      "amount": 62,
      "recipient": {
        "id": "id2",
        "name": "name2",
        "email": "email4",
        "document": "document4",
        "description": "description8",
        "type": "type8",
        "status": "status6",
        "created_at": "2016-03-13T12:52:32.123Z",
        "updated_at": "2016-03-13T12:52:32.123Z",
        "deleted_at": "2016-03-13T12:52:32.123Z",
        "default_bank_account": {
          "id": "id0",
          "holder_name": "holder_name6",
          "holder_type": "holder_type2",
          "bank": "bank8",
          "branch_number": "branch_number6",
          "branch_check_digit": "branch_check_digit6",
          "account_number": "account_number0",
          "account_check_digit": "account_check_digit6",
          "type": "type0",
          "status": "status2",
          "created_at": "2016-03-13T12:52:32.123Z",
          "updated_at": "2016-03-13T12:52:32.123Z",
          "deleted_at": "2016-03-13T12:52:32.123Z",
          "recipient": {
            "id": "id2",
            "name": "name2",
            "email": "email4",
            "document": "document4",
            "description": "description2",
            "type": "type8",
            "status": "status6",
            "created_at": "2016-03-13T12:52:32.123Z",
            "updated_at": "2016-03-13T12:52:32.123Z",
            "deleted_at": "2016-03-13T12:52:32.123Z",
            "default_bank_account": {
              "id": "id0",
              "holder_name": "holder_name6",
              "holder_type": "holder_type2",
              "bank": "bank8",
              "branch_number": "branch_number6",
              "branch_check_digit": "branch_check_digit6",
              "account_number": "account_number0",
              "account_check_digit": "account_check_digit6",
              "type": "type0",
              "status": "status2",
              "created_at": "2016-03-13T12:52:32.123Z",
              "updated_at": "2016-03-13T12:52:32.123Z",
              "deleted_at": "2016-03-13T12:52:32.123Z",
              "recipient": {},
              "metadata": {
                "key0": "metadata7",
                "key1": "metadata6"
              },
              "pix_key": "pix_key6"
            },
            "gateway_recipients": [
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
              },
              {
                "gateway": "gateway8",
                "status": "status0",
                "pgid": "pgid4",
                "created_at": "created_at6",
                "updated_at": "updated_at4"
              }
            ],
            "metadata": {
              "key0": "metadata1",
              "key1": "metadata2"
            },
            "automatic_anticipation_settings": {
              "enabled": false,
              "type": "type4",
              "volume_percentage": 54,
              "delay": 236,
              "days": [
                212,
                213
              ]
            },
            "transfer_settings": {
              "transfer_enabled": false,
              "transfer_interval": "transfer_interval2",
              "transfer_day": 220
            },
            "code": "code0",
            "payment_mode": "payment_mode4"
          },
          "metadata": {
            "key0": "metadata7",
            "key1": "metadata6"
          },
          "pix_key": "pix_key6"
        },
        "gateway_recipients": [
          {},
          {},
          {}
        ],
        "metadata": {
          "key0": "metadata1",
          "key1": "metadata2"
        },
        "automatic_anticipation_settings": {
          "enabled": false,
          "type": "type4",
          "volume_percentage": 124,
          "delay": 166,
          "days": [
            142,
            143
          ]
        },
        "transfer_settings": {
          "transfer_enabled": false,
          "transfer_interval": "transfer_interval2",
          "transfer_day": 34
        },
        "code": "code0",
        "payment_mode": "payment_mode4"
      },
      "gateway_id": "gateway_id4",
      "options": {
        "liable": false,
        "charge_processing_fee": false,
        "charge_remainder_fee": "charge_remainder_fee4"
      },
      "id": "id6"
    },
    {
      "type": "type3",
      "amount": 63,
      "recipient": {
        "id": "id1",
        "name": "name1",
        "email": "email5",
        "document": "document5",
        "description": "description9",
        "type": "type9",
        "status": "status7",
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
          "type": "type1",
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
            "type": "type9",
            "status": "status7",
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
                "key0": "metadata6",
                "key1": "metadata5",
                "key2": "metadata4"
              },
              "pix_key": "pix_key7"
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
              }
            ],
            "metadata": {
              "key0": "metadata2",
              "key1": "metadata3",
              "key2": "metadata4"
            },
            "automatic_anticipation_settings": {
              "enabled": true,
              "type": "type5",
              "volume_percentage": 55,
              "delay": 235,
              "days": [
                211
              ]
            },
            "transfer_settings": {
              "transfer_enabled": true,
              "transfer_interval": "transfer_interval3",
              "transfer_day": 221
            },
            "code": "code9",
            "payment_mode": "payment_mode5"
          },
          "metadata": {
            "key0": "metadata6",
            "key1": "metadata5",
            "key2": "metadata4"
          },
          "pix_key": "pix_key7"
        },
        "gateway_recipients": [
          {},
          {}
        ],
        "metadata": {
          "key0": "metadata2",
          "key1": "metadata3",
          "key2": "metadata4"
        },
        "automatic_anticipation_settings": {
          "enabled": true,
          "type": "type5",
          "volume_percentage": 125,
          "delay": 165,
          "days": [
            141
          ]
        },
        "transfer_settings": {
          "transfer_enabled": true,
          "transfer_interval": "transfer_interval3",
          "transfer_day": 35
        },
        "code": "code9",
        "payment_mode": "payment_mode5"
      },
      "gateway_id": "gateway_id3",
      "options": {
        "liable": true,
        "charge_processing_fee": true,
        "charge_remainder_fee": "charge_remainder_fee3"
      },
      "id": "id7"
    }
  ],
  "next_attempt": "2016-03-13T12:52:32.123Z",
  "transaction_type": "transaction",
  "id": "id0",
  "gateway_response": {
    "code": "code6",
    "errors": [
      {
        "message": "message3"
      },
      {
        "message": "message4"
      },
      {
        "message": "message5"
      }
    ]
  },
  "antifraud_response": {
    "status": "status0",
    "return_code": "return_code8",
    "return_message": "return_message4",
    "provider_name": "provider_name4",
    "score": "score8"
  },
  "metadata": {
    "key0": "metadata3",
    "key1": "metadata4",
    "key2": "metadata5"
  },
  "split": [
    {
      "type": "type6",
      "amount": 28,
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
              "key0": "metadata1"
            },
            "automatic_anticipation_settings": {
              "enabled": false,
              "type": "type2",
              "volume_percentage": 220,
              "delay": 70,
              "days": [
                46,
                47,
                48
              ]
            },
            "transfer_settings": {
              "transfer_enabled": false,
              "transfer_interval": "transfer_interval0",
              "transfer_day": 130
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
          "volume_percentage": 34,
          "delay": 0,
          "days": [
            232,
            233,
            234
          ]
        },
        "transfer_settings": {
          "transfer_enabled": false,
          "transfer_interval": "transfer_interval0",
          "transfer_day": 200
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
      "type": "type5",
      "amount": 27,
      "recipient": {
        "id": "id3",
        "name": "name3",
        "email": "email3",
        "document": "document3",
        "description": "description7",
        "type": "type7",
        "status": "status5",
        "created_at": "2016-03-13T12:52:32.123Z",
        "updated_at": "2016-03-13T12:52:32.123Z",
        "deleted_at": "2016-03-13T12:52:32.123Z",
        "default_bank_account": {
          "id": "id1",
          "holder_name": "holder_name7",
          "holder_type": "holder_type3",
          "bank": "bank9",
          "branch_number": "branch_number7",
          "branch_check_digit": "branch_check_digit7",
          "account_number": "account_number1",
          "account_check_digit": "account_check_digit7",
          "type": "type9",
          "status": "status3",
          "created_at": "2016-03-13T12:52:32.123Z",
          "updated_at": "2016-03-13T12:52:32.123Z",
          "deleted_at": "2016-03-13T12:52:32.123Z",
          "recipient": {
            "id": "id3",
            "name": "name3",
            "email": "email3",
            "document": "document7",
            "description": "description3",
            "type": "type7",
            "status": "status5",
            "created_at": "2016-03-13T12:52:32.123Z",
            "updated_at": "2016-03-13T12:52:32.123Z",
            "deleted_at": "2016-03-13T12:52:32.123Z",
            "default_bank_account": {
              "id": "id1",
              "holder_name": "holder_name7",
              "holder_type": "holder_type3",
              "bank": "bank9",
              "branch_number": "branch_number7",
              "branch_check_digit": "branch_check_digit7",
              "account_number": "account_number1",
              "account_check_digit": "account_check_digit7",
              "type": "type1",
              "status": "status3",
              "created_at": "2016-03-13T12:52:32.123Z",
              "updated_at": "2016-03-13T12:52:32.123Z",
              "deleted_at": "2016-03-13T12:52:32.123Z",
              "recipient": {},
              "metadata": {
                "key0": "metadata8",
                "key1": "metadata7",
                "key2": "metadata6"
              },
              "pix_key": "pix_key5"
            },
            "gateway_recipients": [
              {
                "gateway": "gateway7",
                "status": "status9",
                "pgid": "pgid3",
                "created_at": "created_at5",
                "updated_at": "updated_at3"
              },
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
              }
            ],
            "metadata": {
              "key0": "metadata0",
              "key1": "metadata9"
            },
            "automatic_anticipation_settings": {
              "enabled": true,
              "type": "type3",
              "volume_percentage": 221,
              "delay": 69,
              "days": [
                45,
                46
              ]
            },
            "transfer_settings": {
              "transfer_enabled": true,
              "transfer_interval": "transfer_interval1",
              "transfer_day": 131
            },
            "code": "code1",
            "payment_mode": "payment_mode7"
          },
          "metadata": {
            "key0": "metadata8",
            "key1": "metadata7"
          },
          "pix_key": "pix_key5"
        },
        "gateway_recipients": [
          {},
          {},
          {}
        ],
        "metadata": {
          "key0": "metadata0",
          "key1": "metadata1"
        },
        "automatic_anticipation_settings": {
          "enabled": true,
          "type": "type3",
          "volume_percentage": 35,
          "delay": 255,
          "days": [
            231,
            232
          ]
        },
        "transfer_settings": {
          "transfer_enabled": true,
          "transfer_interval": "transfer_interval1",
          "transfer_day": 201
        },
        "code": "code1",
        "payment_mode": "payment_mode3"
      },
      "gateway_id": "gateway_id5",
      "options": {
        "liable": true,
        "charge_processing_fee": true,
        "charge_remainder_fee": "charge_remainder_fee5"
      },
      "id": "id5"
    },
    {
      "type": "type4",
      "amount": 26,
      "recipient": {
        "id": "id2",
        "name": "name2",
        "email": "email4",
        "document": "document4",
        "description": "description8",
        "type": "type8",
        "status": "status6",
        "created_at": "2016-03-13T12:52:32.123Z",
        "updated_at": "2016-03-13T12:52:32.123Z",
        "deleted_at": "2016-03-13T12:52:32.123Z",
        "default_bank_account": {
          "id": "id0",
          "holder_name": "holder_name6",
          "holder_type": "holder_type2",
          "bank": "bank8",
          "branch_number": "branch_number6",
          "branch_check_digit": "branch_check_digit6",
          "account_number": "account_number0",
          "account_check_digit": "account_check_digit6",
          "type": "type0",
          "status": "status2",
          "created_at": "2016-03-13T12:52:32.123Z",
          "updated_at": "2016-03-13T12:52:32.123Z",
          "deleted_at": "2016-03-13T12:52:32.123Z",
          "recipient": {
            "id": "id2",
            "name": "name2",
            "email": "email4",
            "document": "document6",
            "description": "description2",
            "type": "type8",
            "status": "status4",
            "created_at": "2016-03-13T12:52:32.123Z",
            "updated_at": "2016-03-13T12:52:32.123Z",
            "deleted_at": "2016-03-13T12:52:32.123Z",
            "default_bank_account": {
              "id": "id0",
              "holder_name": "holder_name6",
              "holder_type": "holder_type2",
              "bank": "bank8",
              "branch_number": "branch_number6",
              "branch_check_digit": "branch_check_digit6",
              "account_number": "account_number0",
              "account_check_digit": "account_check_digit6",
              "type": "type0",
              "status": "status2",
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
              "key0": "metadata9",
              "key1": "metadata8",
              "key2": "metadata7"
            },
            "automatic_anticipation_settings": {
              "enabled": false,
              "type": "type4",
              "volume_percentage": 222,
              "delay": 68,
              "days": [
                44
              ]
            },
            "transfer_settings": {
              "transfer_enabled": false,
              "transfer_interval": "transfer_interval2",
              "transfer_day": 132
            },
            "code": "code0",
            "payment_mode": "payment_mode6"
          },
          "metadata": {
            "key0": "metadata7",
            "key1": "metadata6",
            "key2": "metadata5"
          },
          "pix_key": "pix_key6"
        },
        "gateway_recipients": [
          {},
          {}
        ],
        "metadata": {
          "key0": "metadata1",
          "key1": "metadata2",
          "key2": "metadata3"
        },
        "automatic_anticipation_settings": {
          "enabled": false,
          "type": "type4",
          "volume_percentage": 36,
          "delay": 254,
          "days": [
            230
          ]
        },
        "transfer_settings": {
          "transfer_enabled": false,
          "transfer_interval": "transfer_interval2",
          "transfer_day": 202
        },
        "code": "code0",
        "payment_mode": "payment_mode4"
      },
      "gateway_id": "gateway_id4",
      "options": {
        "liable": false,
        "charge_processing_fee": false,
        "charge_remainder_fee": "charge_remainder_fee4"
      },
      "id": "id6"
    }
  ],
  "interest": {
    "days": 156,
    "type": "type0",
    "amount": 230
  },
  "fine": {
    "days": 138,
    "type": "type2",
    "amount": 212
  },
  "max_days_to_pay_past_due": 122
}
```

