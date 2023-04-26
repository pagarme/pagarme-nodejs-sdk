
# Get Pix Transaction Response

Response object when getting a pix transaction

## Structure

`GetPixTransactionResponse`

## Inherits From

[`GetTransactionResponse`](../../doc/models/get-transaction-response.md)

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `qrCode` | `string \| undefined` | Optional | - |
| `qrCodeUrl` | `string \| undefined` | Optional | - |
| `expiresAt` | `string \| undefined` | Optional | - |
| `additionalInformation` | [`PixAdditionalInformation[] \| undefined`](../../doc/models/pix-additional-information.md) | Optional | - |
| `endToEndId` | `string \| undefined` | Optional | - |
| `payer` | [`GetPixPayerResponse \| undefined`](../../doc/models/get-pix-payer-response.md) | Optional | - |

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
              "type": "type8",
              "status": "status0",
              "created_at": "2016-03-13T12:52:32.123Z",
              "updated_at": "2016-03-13T12:52:32.123Z",
              "deleted_at": "2016-03-13T12:52:32.123Z",
              "recipient": {},
              "metadata": {
                "key0": "metadata5"
              },
              "pix_key": "pix_key8"
            },
            "gateway_recipients": [
              {
                "gateway": "gateway4",
                "status": "status6",
                "pgid": "pgid0",
                "created_at": "created_at2",
                "updated_at": "updated_at0"
              }
            ],
            "metadata": {
              "key0": "metadata3"
            },
            "automatic_anticipation_settings": {
              "enabled": false,
              "type": "type6",
              "volume_percentage": 74,
              "delay": 216,
              "days": [
                192,
                193,
                194
              ]
            },
            "transfer_settings": {
              "transfer_enabled": false,
              "transfer_interval": "transfer_interval4",
              "transfer_day": 240
            },
            "code": "code8",
            "payment_mode": "payment_mode4"
          },
          "metadata": {
            "key0": "metadata5"
          },
          "pix_key": "pix_key8"
        },
        "gateway_recipients": [
          {}
        ],
        "metadata": {
          "key0": "metadata3"
        },
        "automatic_anticipation_settings": {
          "enabled": false,
          "type": "type6",
          "volume_percentage": 144,
          "delay": 146,
          "days": [
            122,
            123,
            124
          ]
        },
        "transfer_settings": {
          "transfer_enabled": false,
          "transfer_interval": "transfer_interval4",
          "transfer_day": 54
        },
        "code": "code8",
        "payment_mode": "payment_mode6"
      },
      "gateway_id": "gateway_id2",
      "options": {
        "liable": false,
        "charge_processing_fee": false,
        "charge_remainder_fee": "charge_remainder_fee2"
      },
      "id": "id8"
    },
    {
      "type": "type3",
      "amount": 81,
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
              "volume_percentage": 73,
              "delay": 217,
              "days": [
                193
              ]
            },
            "transfer_settings": {
              "transfer_enabled": true,
              "transfer_interval": "transfer_interval3",
              "transfer_day": 239
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
          "volume_percentage": 143,
          "delay": 147,
          "days": [
            123
          ]
        },
        "transfer_settings": {
          "transfer_enabled": true,
          "transfer_interval": "transfer_interval3",
          "transfer_day": 53
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
  "metadata": {
    "key0": "metadata9",
    "key1": "metadata0",
    "key2": "metadata1"
  },
  "split": [
    {
      "type": "type8",
      "amount": 136,
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
                "key0": "metadata9",
                "key1": "metadata8",
                "key2": "metadata7"
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
              "key0": "metadata9",
              "key1": "metadata0",
              "key2": "metadata1"
            },
            "automatic_anticipation_settings": {
              "enabled": false,
              "type": "type2",
              "volume_percentage": 188,
              "delay": 102,
              "days": [
                78
              ]
            },
            "transfer_settings": {
              "transfer_enabled": false,
              "transfer_interval": "transfer_interval0",
              "transfer_day": 98
            },
            "code": "code2",
            "payment_mode": "payment_mode8"
          },
          "metadata": {
            "key0": "metadata9",
            "key1": "metadata8",
            "key2": "metadata7"
          },
          "pix_key": "pix_key4"
        },
        "gateway_recipients": [
          {},
          {}
        ],
        "metadata": {
          "key0": "metadata9",
          "key1": "metadata0",
          "key2": "metadata1"
        },
        "automatic_anticipation_settings": {
          "enabled": false,
          "type": "type2",
          "volume_percentage": 2,
          "delay": 32,
          "days": [
            8
          ]
        },
        "transfer_settings": {
          "transfer_enabled": false,
          "transfer_interval": "transfer_interval0",
          "transfer_day": 168
        },
        "code": "code2",
        "payment_mode": "payment_mode2"
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
      "amount": 137,
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
                "key0": "metadata0",
                "key1": "metadata9"
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
              "key0": "metadata8",
              "key1": "metadata9"
            },
            "automatic_anticipation_settings": {
              "enabled": true,
              "type": "type1",
              "volume_percentage": 187,
              "delay": 103,
              "days": [
                79,
                80
              ]
            },
            "transfer_settings": {
              "transfer_enabled": true,
              "transfer_interval": "transfer_interval9",
              "transfer_day": 97
            },
            "code": "code3",
            "payment_mode": "payment_mode9"
          },
          "metadata": {
            "key0": "metadata0",
            "key1": "metadata9"
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
          "key1": "metadata9"
        },
        "automatic_anticipation_settings": {
          "enabled": true,
          "type": "type1",
          "volume_percentage": 1,
          "delay": 33,
          "days": [
            9,
            10
          ]
        },
        "transfer_settings": {
          "transfer_enabled": true,
          "transfer_interval": "transfer_interval9",
          "transfer_day": 167
        },
        "code": "code3",
        "payment_mode": "payment_mode1"
      },
      "gateway_id": "gateway_id7",
      "options": {
        "liable": true,
        "charge_processing_fee": true,
        "charge_remainder_fee": "charge_remainder_fee9"
      },
      "id": "id3"
    }
  ],
  "interest": {
    "days": 176,
    "type": "type4",
    "amount": 250
  },
  "fine": {
    "days": 114,
    "type": "type4",
    "amount": 188
  },
  "max_days_to_pay_past_due": 102,
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

