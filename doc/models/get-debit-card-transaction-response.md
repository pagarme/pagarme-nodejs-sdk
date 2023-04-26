
# Get Debit Card Transaction Response

Response object for getting a debit card transaction

## Structure

`GetDebitCardTransactionResponse`

## Inherits From

[`GetTransactionResponse`](../../doc/models/get-transaction-response.md)

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `statementDescriptor` | `string \| undefined` | Optional | Text that will appear on the debit card's statement |
| `acquirerName` | `string \| undefined` | Optional | Acquirer name |
| `acquirerAffiliationCode` | `string \| undefined` | Optional | Aquirer affiliation code |
| `acquirerTid` | `string \| undefined` | Optional | Acquirer TID |
| `acquirerNsu` | `string \| undefined` | Optional | Acquirer NSU |
| `acquirerAuthCode` | `string \| undefined` | Optional | Acquirer authorization code |
| `operationType` | `string \| undefined` | Optional | Operation type |
| `card` | [`GetCardResponse \| undefined`](../../doc/models/get-card-response.md) | Optional | Card data |
| `acquirerMessage` | `string \| undefined` | Optional | Acquirer message |
| `acquirerReturnCode` | `string \| undefined` | Optional | Acquirer Return Code |
| `mpi` | `string \| undefined` | Optional | Merchant Plugin |
| `eci` | `string \| undefined` | Optional | Electronic Commerce Indicator (ECI) |
| `authenticationType` | `string \| undefined` | Optional | Authentication type |
| `threedAuthenticationUrl` | `string \| undefined` | Optional | 3D-S Authentication Url |
| `fundingSource` | `string \| undefined` | Optional | Identify when a card is prepaid, credit or debit. |

## Example (as JSON)

```json
{
  "gateway_id": "gateway_id0",
  "amount": 86,
  "status": "status8",
  "success": false,
  "created_at": "2016-03-13T12:52:32.123Z",
  "updated_at": "2016-03-13T12:52:32.123Z",
  "attempt_count": 110,
  "max_attempts": 134,
  "splits": [
    {
      "type": "type4",
      "amount": 102,
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
                "key1": "metadata6",
                "key2": "metadata5"
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
              }
            ],
            "metadata": {
              "key0": "metadata1",
              "key1": "metadata2",
              "key2": "metadata3"
            },
            "automatic_anticipation_settings": {
              "enabled": false,
              "type": "type4",
              "volume_percentage": 94,
              "delay": 196,
              "days": [
                172
              ]
            },
            "transfer_settings": {
              "transfer_enabled": false,
              "transfer_interval": "transfer_interval2",
              "transfer_day": 4
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
          "volume_percentage": 164,
          "delay": 126,
          "days": [
            102
          ]
        },
        "transfer_settings": {
          "transfer_enabled": false,
          "transfer_interval": "transfer_interval2",
          "transfer_day": 74
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
      "amount": 103,
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
                "key0": "metadata6"
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
              }
            ],
            "metadata": {
              "key0": "metadata2"
            },
            "automatic_anticipation_settings": {
              "enabled": true,
              "type": "type5",
              "volume_percentage": 95,
              "delay": 195,
              "days": [
                171,
                172,
                173
              ]
            },
            "transfer_settings": {
              "transfer_enabled": true,
              "transfer_interval": "transfer_interval3",
              "transfer_day": 5
            },
            "code": "code9",
            "payment_mode": "payment_mode5"
          },
          "metadata": {
            "key0": "metadata6"
          },
          "pix_key": "pix_key7"
        },
        "gateway_recipients": [
          {}
        ],
        "metadata": {
          "key0": "metadata2"
        },
        "automatic_anticipation_settings": {
          "enabled": true,
          "type": "type5",
          "volume_percentage": 165,
          "delay": 125,
          "days": [
            101,
            102,
            103
          ]
        },
        "transfer_settings": {
          "transfer_enabled": true,
          "transfer_interval": "transfer_interval3",
          "transfer_day": 75
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
    },
    {
      "type": "type2",
      "amount": 104,
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
                "key0": "metadata5",
                "key1": "metadata4"
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
              },
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
              "key0": "metadata3",
              "key1": "metadata4"
            },
            "automatic_anticipation_settings": {
              "enabled": false,
              "type": "type6",
              "volume_percentage": 96,
              "delay": 194,
              "days": [
                170,
                171
              ]
            },
            "transfer_settings": {
              "transfer_enabled": false,
              "transfer_interval": "transfer_interval4",
              "transfer_day": 6
            },
            "code": "code8",
            "payment_mode": "payment_mode4"
          },
          "metadata": {
            "key0": "metadata5",
            "key1": "metadata4"
          },
          "pix_key": "pix_key8"
        },
        "gateway_recipients": [
          {},
          {},
          {}
        ],
        "metadata": {
          "key0": "metadata3",
          "key1": "metadata4"
        },
        "automatic_anticipation_settings": {
          "enabled": false,
          "type": "type6",
          "volume_percentage": 166,
          "delay": 124,
          "days": [
            100,
            101
          ]
        },
        "transfer_settings": {
          "transfer_enabled": false,
          "transfer_interval": "transfer_interval4",
          "transfer_day": 76
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
    }
  ],
  "next_attempt": "2016-03-13T12:52:32.123Z",
  "transaction_type": "debit_card",
  "id": "id0",
  "gateway_response": {
    "code": "code6",
    "errors": [
      {
        "message": "message3"
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
    "key0": "metadata3"
  },
  "split": [
    {
      "type": "type2",
      "amount": 140,
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
                "key1": "metadata0",
                "key2": "metadata9"
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
              "key0": "metadata3",
              "key1": "metadata4"
            },
            "automatic_anticipation_settings": {
              "enabled": false,
              "type": "type6",
              "volume_percentage": 108,
              "delay": 182,
              "days": [
                158,
                159
              ]
            },
            "transfer_settings": {
              "transfer_enabled": false,
              "transfer_interval": "transfer_interval4",
              "transfer_day": 18
            },
            "code": "code8",
            "payment_mode": "payment_mode4"
          },
          "metadata": {
            "key0": "metadata5",
            "key1": "metadata4"
          },
          "pix_key": "pix_key8"
        },
        "gateway_recipients": [
          {},
          {},
          {}
        ],
        "metadata": {
          "key0": "metadata3",
          "key1": "metadata4"
        },
        "automatic_anticipation_settings": {
          "enabled": false,
          "type": "type6",
          "volume_percentage": 178,
          "delay": 112,
          "days": [
            88,
            89
          ]
        },
        "transfer_settings": {
          "transfer_enabled": false,
          "transfer_interval": "transfer_interval4",
          "transfer_day": 88
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
    }
  ],
  "interest": {
    "days": 196,
    "type": "type0",
    "amount": 14
  },
  "fine": {
    "days": 178,
    "type": "type2",
    "amount": 4
  },
  "max_days_to_pay_past_due": 82,
  "statement_descriptor": "statement_descriptor0",
  "acquirer_name": "acquirer_name4",
  "acquirer_affiliation_code": "acquirer_affiliation_code8",
  "acquirer_tid": "acquirer_tid0",
  "acquirer_nsu": "acquirer_nsu0",
  "acquirer_auth_code": "acquirer_auth_code8",
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
    "customer": {
      "id": "id6",
      "name": "name6",
      "email": "email0",
      "delinquent": false,
      "created_at": "2016-03-13T12:52:32.123Z",
      "updated_at": "2016-03-13T12:52:32.123Z",
      "document": "document0",
      "type": "type4",
      "fb_access_token": "fb_access_token0",
      "address": {
        "id": "id2",
        "street": "street2",
        "number": "number0",
        "complement": "complement8",
        "zip_code": "zip_code6",
        "neighborhood": "neighborhood8",
        "city": "city2",
        "state": "state8",
        "country": "country6",
        "status": "status4",
        "created_at": "2016-03-13T12:52:32.123Z",
        "updated_at": "2016-03-13T12:52:32.123Z",
        "customer": {
          "id": "id2",
          "name": "name2",
          "email": "email4",
          "delinquent": false,
          "created_at": "2016-03-13T12:52:32.123Z",
          "updated_at": "2016-03-13T12:52:32.123Z",
          "document": "document6",
          "type": "type8",
          "fb_access_token": "fb_access_token6",
          "address": {
            "id": "id8",
            "street": "street8",
            "number": "number6",
            "complement": "complement4",
            "zip_code": "zip_code2",
            "neighborhood": "neighborhood4",
            "city": "city8",
            "state": "state4",
            "country": "country2",
            "status": "status0",
            "created_at": "2016-03-13T12:52:32.123Z",
            "updated_at": "2016-03-13T12:52:32.123Z",
            "customer": {},
            "metadata": {
              "key0": "metadata1",
              "key1": "metadata0",
              "key2": "metadata9"
            },
            "line_1": "line_12",
            "line_2": "line_26",
            "deleted_at": "2016-03-13T12:52:32.123Z"
          },
          "metadata": {
            "key0": "metadata9",
            "key1": "metadata8"
          },
          "phones": {
            "home_phone": {
              "country_code": "country_code4",
              "number": "number2",
              "area_code": "area_code4"
            },
            "mobile_phone": {
              "country_code": "country_code4",
              "number": "number8",
              "area_code": "area_code4"
            }
          },
          "fb_id": 106,
          "code": "code0",
          "document_type": "document_type0"
        },
        "metadata": {
          "key0": "metadata9",
          "key1": "metadata8",
          "key2": "metadata7"
        },
        "line_1": "line_16",
        "line_2": "line_20",
        "deleted_at": "2016-03-13T12:52:32.123Z"
      },
      "metadata": {
        "key0": "metadata7",
        "key1": "metadata8",
        "key2": "metadata9"
      },
      "phones": {
        "home_phone": {},
        "mobile_phone": {}
      },
      "fb_id": 56,
      "code": "code4",
      "document_type": "document_type4"
    },
    "metadata": {
      "key0": "metadata7"
    },
    "type": "type4",
    "holder_document": "holder_document0",
    "deleted_at": "2016-03-13T12:52:32.123Z",
    "first_six_digits": "first_six_digits6",
    "label": "label6"
  },
  "acquirer_message": "acquirer_message0",
  "acquirer_return_code": "acquirer_return_code8",
  "mpi": "mpi2",
  "eci": "eci0",
  "authentication_type": "authentication_type2",
  "threed_authentication_url": "threed_authentication_url6",
  "funding_source": "funding_source6"
}
```

