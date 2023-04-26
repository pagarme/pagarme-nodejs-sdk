
# Create Setup Request

Request for creating a Setup for a subscription. The setup is an order that will be created at the subscription creation.

## Structure

`CreateSetupRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amount` | `number` | Required | Setup amount |
| `description` | `string` | Required | Description |
| `payment` | [`CreatePaymentRequest`](../../doc/models/create-payment-request.md) | Required | Payment data |

## Example (as JSON)

```json
{
  "amount": 46,
  "description": "description0",
  "payment": {
    "payment_method": "payment_method4",
    "credit_card": {
      "installments": 36,
      "statement_descriptor": "statement_descriptor4",
      "card": {
        "number": "number6",
        "holder_name": "holder_name4",
        "exp_month": 70,
        "exp_year": 226,
        "cvv": "cvv6",
        "billing_address": {
          "street": "street0",
          "number": "number2",
          "zip_code": "zip_code4",
          "neighborhood": "neighborhood6",
          "city": "city0",
          "state": "state6",
          "country": "country4",
          "complement": "complement4",
          "metadata": {
            "key0": "metadata3"
          },
          "line_1": "line_16",
          "line_2": "line_28"
        },
        "brand": "brand2",
        "billing_address_id": "billing_address_id4",
        "metadata": {
          "key0": "metadata5",
          "key1": "metadata4",
          "key2": "metadata3"
        },
        "type": "type2",
        "options": {
          "verify_card": false
        },
        "holder_document": "holder_document2",
        "private_label": false,
        "label": "label8",
        "id": "id8",
        "token": "token8"
      },
      "card_id": "card_id0",
      "card_token": "card_token4",
      "recurrence": false,
      "capture": false,
      "extended_limit_enabled": false,
      "extended_limit_code": "extended_limit_code2",
      "merchant_category_code": 136,
      "authentication": {
        "type": "type4",
        "threed_secure": {
          "mpi": "mpi6",
          "cavv": "cavv2",
          "eci": "eci6",
          "transaction_id": "transaction_id4",
          "success_url": "success_url8",
          "ds_transaction_id": "ds_transaction_id4",
          "version": "version2"
        }
      },
      "contactless": {
        "type": "type4",
        "apple_pay": {
          "version": "version0",
          "data": "data4",
          "header": {
            "public_key_hash": "public_key_hash6",
            "ephemeral_public_key": "ephemeral_public_key8",
            "transaction_id": "transaction_id6"
          },
          "signature": "signature2",
          "merchant_identifier": "merchant_identifier8"
        },
        "google_pay": {
          "version": "version2",
          "data": "data6",
          "header": {
            "ephemeral_public_key": "ephemeral_public_key0"
          },
          "signature": "signature4",
          "merchant_identifier": "merchant_identifier0"
        },
        "emv": {
          "icc_data": "icc_data4",
          "card_sequence_number": "card_sequence_number0",
          "data": {
            "cipher": "cipher4",
            "dukpt": {
              "ksn": "ksn0"
            },
            "tags": [
              {
                "tag": "tag9",
                "lenght": "lenght7",
                "value": "value7"
              },
              {
                "tag": "tag0",
                "lenght": "lenght8",
                "value": "value8"
              },
              {
                "tag": "tag1",
                "lenght": "lenght9",
                "value": "value9"
              }
            ]
          },
          "poi": {
            "system_name": "system_name6",
            "model": "model4",
            "provider": "provider2",
            "serial_number": "serial_number0",
            "version_number": "version_number6"
          }
        }
      },
      "auto_recovery": false,
      "operation_type": "operation_type8",
      "recurrency_cycle": "recurrency_cycle8"
    },
    "debit_card": {
      "statement_descriptor": "statement_descriptor0",
      "card": {
        "number": "number8",
        "holder_name": "holder_name0",
        "exp_month": 252,
        "exp_year": 44,
        "cvv": "cvv2",
        "billing_address": {
          "street": "street6",
          "number": "number6",
          "zip_code": "zip_code0",
          "neighborhood": "neighborhood2",
          "city": "city4",
          "state": "state8",
          "country": "country0",
          "complement": "complement8",
          "metadata": {
            "key0": "metadata7",
            "key1": "metadata8",
            "key2": "metadata9"
          },
          "line_1": "line_10",
          "line_2": "line_24"
        },
        "brand": "brand8",
        "billing_address_id": "billing_address_id0",
        "metadata": {
          "key0": "metadata9",
          "key1": "metadata0"
        },
        "type": "type6",
        "options": {
          "verify_card": false
        },
        "holder_document": "holder_document2",
        "private_label": false,
        "label": "label4",
        "id": "id4",
        "token": "token2"
      },
      "card_id": "card_id6",
      "card_token": "card_token0",
      "recurrence": false,
      "authentication": {
        "type": "type8",
        "threed_secure": {
          "mpi": "mpi8",
          "cavv": "cavv6",
          "eci": "eci0",
          "transaction_id": "transaction_id8",
          "success_url": "success_url2",
          "ds_transaction_id": "ds_transaction_id8",
          "version": "version6"
        }
      },
      "token": {
        "type": "type4",
        "apple_pay": {
          "version": "version0",
          "data": "data4",
          "header": {
            "public_key_hash": "public_key_hash0",
            "ephemeral_public_key": "ephemeral_public_key2",
            "transaction_id": "transaction_id0"
          },
          "signature": "signature2",
          "merchant_identifier": "merchant_identifier8"
        },
        "google_pay": {
          "version": "version8",
          "data": "data2",
          "header": {
            "ephemeral_public_key": "ephemeral_public_key6"
          },
          "signature": "signature0",
          "merchant_identifier": "merchant_identifier6"
        },
        "emv": {
          "icc_data": "icc_data2",
          "card_sequence_number": "card_sequence_number8",
          "data": {
            "cipher": "cipher2",
            "dukpt": {
              "ksn": "ksn8"
            },
            "tags": [
              {},
              {},
              {}
            ]
          },
          "poi": {
            "system_name": "system_name4",
            "model": "model2",
            "provider": "provider4",
            "serial_number": "serial_number8",
            "version_number": "version_number6"
          }
        }
      }
    },
    "boleto": {
      "retries": 218,
      "bank": "bank4",
      "instructions": "instructions4",
      "due_at": "2016-03-13T12:52:32.123Z",
      "billing_address": {},
      "billing_address_id": "billing_address_id2",
      "nosso_numero": "nosso_numero6",
      "document_number": "document_number0",
      "statement_descriptor": "statement_descriptor6",
      "interest": {
        "days": 168,
        "type": "type6",
        "amount": 242
      },
      "fine": {
        "days": 122,
        "type": "type2",
        "amount": 196
      },
      "max_days_to_pay_past_due": 110
    },
    "currency": "currency6",
    "voucher": {
      "statement_descriptor": "statement_descriptor6",
      "card_id": "card_id8",
      "card_token": "card_token4",
      "Card": {},
      "recurrency_cycle": "recurrency_cycle0"
    },
    "split": [
      {
        "type": "type6",
        "amount": 140,
        "recipient_id": "recipient_id6",
        "options": {
          "liable": false,
          "charge_processing_fee": false,
          "charge_remainder_fee": false
        },
        "split_rule_id": "split_rule_id6"
      },
      {
        "type": "type5",
        "amount": 141,
        "recipient_id": "recipient_id5",
        "options": {
          "liable": true,
          "charge_processing_fee": true,
          "charge_remainder_fee": true
        },
        "split_rule_id": "split_rule_id7"
      },
      {
        "type": "type4",
        "amount": 142,
        "recipient_id": "recipient_id4",
        "options": {
          "liable": false,
          "charge_processing_fee": false,
          "charge_remainder_fee": false
        },
        "split_rule_id": "split_rule_id8"
      }
    ],
    "bank_transfer": {
      "bank": "bank4",
      "retries": 252
    },
    "gateway_affiliation_id": "gateway_affiliation_id2",
    "amount": 194,
    "checkout": {
      "accepted_payment_methods": [
        "accepted_payment_methods1"
      ],
      "accepted_multi_payment_methods": [
        {
          "key1": "val1",
          "key2": "val2"
        }
      ],
      "success_url": "success_url0",
      "default_payment_method": "default_payment_method8",
      "gateway_affiliation_id": "gateway_affiliation_id4",
      "credit_card": {
        "statement_descriptor": "statement_descriptor6",
        "installments": [
          {
            "number": 49,
            "total": 197
          },
          {
            "number": 50,
            "total": 198
          }
        ],
        "authentication": {},
        "capture": false
      },
      "debit_card": {
        "statement_descriptor": "statement_descriptor2",
        "authentication": {}
      },
      "boleto": {
        "bank": "bank6",
        "instructions": "instructions6",
        "due_at": "2016-03-13T12:52:32.123Z"
      },
      "customer_editable": false,
      "expires_in": 60,
      "skip_checkout_success_page": false,
      "billing_address_editable": false,
      "billing_address": {},
      "bank_transfer": {
        "bank": [
          "bank3"
        ],
        "retries": 254
      },
      "accepted_brands": [
        "accepted_brands4"
      ],
      "pix": {
        "expires_at": "2016-03-13T12:52:32.123Z",
        "expires_in": 36,
        "additional_information": [
          {
            "Name": "Name5",
            "Value": "Value3"
          }
        ]
      }
    },
    "customer_id": "customer_id4",
    "customer": {
      "name": "name6",
      "email": "email0",
      "document": "document0",
      "type": "type4",
      "address": {},
      "metadata": {
        "key0": "metadata7"
      },
      "phones": {
        "home_phone": {
          "country_code": "country_code8",
          "number": "number4",
          "area_code": "area_code8"
        },
        "mobile_phone": {
          "country_code": "country_code8",
          "number": "number0",
          "area_code": "area_code2"
        }
      },
      "code": "code4",
      "gender": "gender0",
      "document_type": "document_type4"
    },
    "metadata": {
      "key0": "metadata7",
      "key1": "metadata8"
    },
    "cash": {
      "description": "description6",
      "confirm": false
    },
    "private_label": {
      "installments": 230,
      "statement_descriptor": "statement_descriptor6",
      "card": {},
      "card_id": "card_id2",
      "card_token": "card_token6",
      "recurrence": false,
      "capture": false,
      "extended_limit_enabled": false,
      "extended_limit_code": "extended_limit_code4",
      "recurrency_cycle": "recurrency_cycle0"
    },
    "pix": {
      "expires_at": "2016-03-13T12:52:32.123Z",
      "expires_in": 246,
      "additional_information": [
        {}
      ]
    }
  }
}
```

