
# Get Credit Card Transaction Response

Response object for getting a credit card transaction

## Structure

`GetCreditCardTransactionResponse`

## Inherits From

[`GetTransactionResponse`](../../doc/models/get-transaction-response.md)

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `statementDescriptor` | `string \| undefined` | Optional | Text that will appear on the credit card's statement |
| `acquirerName` | `string \| undefined` | Optional | Acquirer name |
| `acquirerAffiliationCode` | `string \| undefined` | Optional | Aquirer affiliation code |
| `acquirerTid` | `string \| undefined` | Optional | Acquirer TID |
| `acquirerNsu` | `string \| undefined` | Optional | Acquirer NSU |
| `acquirerAuthCode` | `string \| undefined` | Optional | Acquirer authorization code |
| `operationType` | `string \| undefined` | Optional | Operation type |
| `card` | [`GetCardResponse \| undefined`](../../doc/models/get-card-response.md) | Optional | Card data |
| `acquirerMessage` | `string \| undefined` | Optional | Acquirer message |
| `acquirerReturnCode` | `string \| undefined` | Optional | Acquirer Return Code |
| `installments` | `number \| undefined` | Optional | Number of installments |
| `threedAuthenticationUrl` | `string \| undefined` | Optional | 3D-S authentication Url |
| `fundingSource` | `string \| undefined` | Optional | Identify when a card is prepaid, credit or debit. |

## Example (as JSON)

```json
{
  "gateway_id": "gateway_id8",
  "amount": 0,
  "status": "status6",
  "success": false,
  "created_at": "2016-03-13T12:52:32.123Z",
  "updated_at": "2016-03-13T12:52:32.123Z",
  "attempt_count": 24,
  "max_attempts": 220,
  "splits": [
    {
      "type": "type6",
      "amount": 16,
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
                "key0": "metadata9"
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
              }
            ],
            "metadata": {
              "key0": "metadata9"
            },
            "automatic_anticipation_settings": {
              "enabled": false,
              "type": "type2",
              "volume_percentage": 8,
              "delay": 26,
              "days": [
                2,
                3,
                4
              ]
            },
            "transfer_settings": {
              "transfer_enabled": false,
              "transfer_interval": "transfer_interval0",
              "transfer_day": 174
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
          "volume_percentage": 78,
          "delay": 212,
          "days": [
            188,
            189,
            190
          ]
        },
        "transfer_settings": {
          "transfer_enabled": false,
          "transfer_interval": "transfer_interval0",
          "transfer_day": 244
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
  "transaction_type": "credit_card",
  "id": "id2",
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
    "status": "status8",
    "return_code": "return_code0",
    "return_message": "return_message2",
    "provider_name": "provider_name2",
    "score": "score0"
  },
  "metadata": {
    "key0": "metadata1",
    "key1": "metadata2"
  },
  "split": [
    {
      "type": "type0",
      "amount": 54,
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
            "document": "document2",
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
              "volume_percentage": 194,
              "delay": 96,
              "days": [
                72,
                73,
                74
              ]
            },
            "transfer_settings": {
              "transfer_enabled": false,
              "transfer_interval": "transfer_interval6",
              "transfer_day": 104
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
          "volume_percentage": 8,
          "delay": 26,
          "days": [
            2,
            3,
            4
          ]
        },
        "transfer_settings": {
          "transfer_enabled": false,
          "transfer_interval": "transfer_interval6",
          "transfer_day": 174
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
      "type": "type9",
      "amount": 53,
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
            "document": "document1",
            "description": "description7",
            "type": "type3",
            "status": "status9",
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
                "key0": "metadata4",
                "key1": "metadata3",
                "key2": "metadata2"
              },
              "pix_key": "pix_key9"
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
              "key0": "metadata4",
              "key1": "metadata3"
            },
            "automatic_anticipation_settings": {
              "enabled": true,
              "type": "type9",
              "volume_percentage": 195,
              "delay": 95,
              "days": [
                71,
                72
              ]
            },
            "transfer_settings": {
              "transfer_enabled": true,
              "transfer_interval": "transfer_interval7",
              "transfer_day": 105
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
          "volume_percentage": 9,
          "delay": 25,
          "days": [
            1,
            2
          ]
        },
        "transfer_settings": {
          "transfer_enabled": true,
          "transfer_interval": "transfer_interval7",
          "transfer_day": 175
        },
        "code": "code5",
        "payment_mode": "payment_mode9"
      },
      "gateway_id": "gateway_id9",
      "options": {
        "liable": true,
        "charge_processing_fee": true,
        "charge_remainder_fee": "charge_remainder_fee9"
      },
      "id": "id1"
    },
    {
      "type": "type8",
      "amount": 52,
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
            "status": "status8",
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
                "key0": "metadata5",
                "key1": "metadata4"
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
              }
            ],
            "metadata": {
              "key0": "metadata3",
              "key1": "metadata2",
              "key2": "metadata1"
            },
            "automatic_anticipation_settings": {
              "enabled": false,
              "type": "type0",
              "volume_percentage": 196,
              "delay": 94,
              "days": [
                70
              ]
            },
            "transfer_settings": {
              "transfer_enabled": false,
              "transfer_interval": "transfer_interval8",
              "transfer_day": 106
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
          "volume_percentage": 10,
          "delay": 24,
          "days": [
            0
          ]
        },
        "transfer_settings": {
          "transfer_enabled": false,
          "transfer_interval": "transfer_interval8",
          "transfer_day": 176
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
  "interest": {
    "days": 110,
    "type": "type8",
    "amount": 184
  },
  "fine": {
    "days": 92,
    "type": "type4",
    "amount": 90
  },
  "max_days_to_pay_past_due": 168,
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
  "installments": 250,
  "threed_authentication_url": "threed_authentication_url6",
  "funding_source": "funding_source6"
}
```

