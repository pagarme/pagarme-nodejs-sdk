
# Create Payment Request

Payment data

## Structure

`CreatePaymentRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `paymentMethod` | `string` | Required | Payment method |
| `creditCard` | [`CreateCreditCardPaymentRequest \| undefined`](../../doc/models/create-credit-card-payment-request.md) | Optional | Settings for credit card payment |
| `debitCard` | [`CreateDebitCardPaymentRequest \| undefined`](../../doc/models/create-debit-card-payment-request.md) | Optional | Settings for debit card payment |
| `boleto` | [`CreateBoletoPaymentRequest \| undefined`](../../doc/models/create-boleto-payment-request.md) | Optional | Settings for boleto payment |
| `currency` | `string \| undefined` | Optional | Currency. Must be informed using 3 characters |
| `voucher` | [`CreateVoucherPaymentRequest \| undefined`](../../doc/models/create-voucher-payment-request.md) | Optional | Settings for voucher payment |
| `split` | [`CreateSplitRequest[] \| undefined`](../../doc/models/create-split-request.md) | Optional | Splits |
| `bankTransfer` | [`CreateBankTransferPaymentRequest \| undefined`](../../doc/models/create-bank-transfer-payment-request.md) | Optional | Settings for bank transfer payment |
| `gatewayAffiliationId` | `string \| undefined` | Optional | Gateway affiliation code |
| `amount` | `number \| undefined` | Optional | The amount of the payment, in cents |
| `checkout` | [`CreateCheckoutPaymentRequest \| undefined`](../../doc/models/create-checkout-payment-request.md) | Optional | Settings for checkout payment |
| `customerId` | `string \| undefined` | Optional | Customer Id |
| `customer` | [`CreateCustomerRequest \| undefined`](../../doc/models/create-customer-request.md) | Optional | Customer |
| `metadata` | `Record<string, string> \| undefined` | Optional | Metadata |
| `cash` | [`CreateCashPaymentRequest \| undefined`](../../doc/models/create-cash-payment-request.md) | Optional | Settings for cash payment |
| `privateLabel` | [`CreatePrivateLabelPaymentRequest \| undefined`](../../doc/models/create-private-label-payment-request.md) | Optional | Settings for private label payment |
| `pix` | [`CreatePixPaymentRequest \| undefined`](../../doc/models/create-pix-payment-request.md) | Optional | Settings for pix payment |

## Example (as JSON)

```json
{
  "payment_method": "payment_method0",
  "credit_card": {
    "installments": 52,
    "statement_descriptor": "statement_descriptor8",
    "card": {
      "number": "number0",
      "holder_name": "holder_name8",
      "exp_month": 54,
      "exp_year": 242,
      "cvv": "cvv0",
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
          "key0": "metadata7"
        },
        "line_1": "line_10",
        "line_2": "line_24"
      },
      "brand": "brand6",
      "billing_address_id": "billing_address_id8",
      "metadata": {
        "key0": "metadata1"
      },
      "type": "type8",
      "options": {
        "verify_card": false
      },
      "holder_document": "holder_document4",
      "private_label": false,
      "label": "label2",
      "id": "id2",
      "token": "token4"
    },
    "card_id": "card_id4",
    "card_token": "card_token2",
    "recurrence": false,
    "capture": false,
    "extended_limit_enabled": false,
    "extended_limit_code": "extended_limit_code6",
    "merchant_category_code": 152,
    "authentication": {
      "type": "type0",
      "threed_secure": {
        "mpi": "mpi0",
        "cavv": "cavv8",
        "eci": "eci2",
        "transaction_id": "transaction_id0",
        "success_url": "success_url4",
        "ds_transaction_id": "ds_transaction_id0",
        "version": "version8"
      }
    },
    "contactless": {
      "type": "type8",
      "apple_pay": {
        "version": "version4",
        "data": "data8",
        "header": {
          "public_key_hash": "public_key_hash6",
          "ephemeral_public_key": "ephemeral_public_key8",
          "transaction_id": "transaction_id6"
        },
        "signature": "signature6",
        "merchant_identifier": "merchant_identifier2"
      },
      "google_pay": {
        "version": "version6",
        "data": "data0",
        "header": {
          "ephemeral_public_key": "ephemeral_public_key6"
        },
        "signature": "signature8",
        "merchant_identifier": "merchant_identifier4"
      },
      "emv": {
        "icc_data": "icc_data8",
        "card_sequence_number": "card_sequence_number4",
        "data": {
          "cipher": "cipher8",
          "dukpt": {
            "ksn": "ksn4"
          },
          "tags": [
            {
              "tag": "tag3",
              "lenght": "lenght1",
              "value": "value1"
            },
            {
              "tag": "tag4",
              "lenght": "lenght2",
              "value": "value2"
            }
          ]
        },
        "poi": {
          "system_name": "system_name0",
          "model": "model8",
          "provider": "provider8",
          "serial_number": "serial_number6",
          "version_number": "version_number0"
        }
      }
    },
    "auto_recovery": false,
    "operation_type": "operation_type2",
    "recurrency_cycle": "recurrency_cycle2"
  },
  "debit_card": {
    "statement_descriptor": "statement_descriptor4",
    "card": {
      "number": "number0",
      "holder_name": "holder_name8",
      "exp_month": 104,
      "exp_year": 192,
      "cvv": "cvv0",
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
          "key1": "metadata8"
        },
        "line_1": "line_10",
        "line_2": "line_24"
      },
      "brand": "brand6",
      "billing_address_id": "billing_address_id8",
      "metadata": {
        "key0": "metadata1",
        "key1": "metadata2",
        "key2": "metadata3"
      },
      "type": "type8",
      "options": {
        "verify_card": false
      },
      "holder_document": "holder_document4",
      "private_label": false,
      "label": "label2",
      "id": "id2",
      "token": "token4"
    },
    "card_id": "card_id0",
    "card_token": "card_token6",
    "recurrence": false,
    "authentication": {
      "type": "type6",
      "threed_secure": {
        "mpi": "mpi0",
        "cavv": "cavv2",
        "eci": "eci2",
        "transaction_id": "transaction_id0",
        "success_url": "success_url4",
        "ds_transaction_id": "ds_transaction_id0",
        "version": "version2"
      }
    },
    "token": {
      "type": "type8",
      "apple_pay": {
        "version": "version4",
        "data": "data8",
        "header": {
          "public_key_hash": "public_key_hash6",
          "ephemeral_public_key": "ephemeral_public_key8",
          "transaction_id": "transaction_id6"
        },
        "signature": "signature6",
        "merchant_identifier": "merchant_identifier2"
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
        "card_sequence_number": "card_sequence_number2",
        "data": {
          "cipher": "cipher6",
          "dukpt": {
            "ksn": "ksn2"
          },
          "tags": [
            {
              "tag": "tag1",
              "lenght": "lenght9",
              "value": "value9"
            },
            {
              "tag": "tag2",
              "lenght": "lenght0",
              "value": "value0"
            }
          ]
        },
        "poi": {
          "system_name": "system_name2",
          "model": "model0",
          "provider": "provider6",
          "serial_number": "serial_number4",
          "version_number": "version_number8"
        }
      }
    }
  },
  "boleto": {
    "retries": 226,
    "bank": "bank8",
    "instructions": "instructions2",
    "due_at": "2016-03-13T12:52:32.123Z",
    "billing_address": {
      "street": "street8",
      "number": "number4",
      "zip_code": "zip_code2",
      "neighborhood": "neighborhood4",
      "city": "city2",
      "state": "state6",
      "country": "country2",
      "complement": "complement6",
      "metadata": {
        "key0": "metadata5"
      },
      "line_1": "line_18",
      "line_2": "line_26"
    },
    "billing_address_id": "billing_address_id6",
    "nosso_numero": "nosso_numero0",
    "document_number": "document_number6",
    "statement_descriptor": "statement_descriptor0",
    "interest": {
      "days": 160,
      "type": "type0",
      "amount": 234
    },
    "fine": {
      "days": 130,
      "type": "type8",
      "amount": 52
    },
    "max_days_to_pay_past_due": 118
  },
  "currency": "currency0",
  "voucher": {
    "statement_descriptor": "statement_descriptor2",
    "card_id": "card_id8",
    "card_token": "card_token8",
    "Card": {
      "number": "number0",
      "holder_name": "holder_name8",
      "exp_month": 198,
      "exp_year": 238,
      "cvv": "cvv0",
      "billing_address": {
        "street": "street4",
        "number": "number2",
        "zip_code": "zip_code8",
        "neighborhood": "neighborhood0",
        "city": "city4",
        "state": "state0",
        "country": "country8",
        "complement": "complement0",
        "metadata": {
          "key0": "metadata5",
          "key1": "metadata4",
          "key2": "metadata3"
        },
        "line_1": "line_18",
        "line_2": "line_22"
      },
      "brand": "brand6",
      "billing_address_id": "billing_address_id8",
      "metadata": {
        "key0": "metadata7"
      },
      "type": "type2",
      "options": {
        "verify_card": false
      },
      "holder_document": "holder_document6",
      "private_label": false,
      "label": "label2",
      "id": "id2",
      "token": "token6"
    },
    "recurrency_cycle": "recurrency_cycle6"
  },
  "split": [
    {
      "type": "type6",
      "amount": 28,
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
      "amount": 27,
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
      "amount": 26,
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
    "bank": "bank0",
    "retries": 236
  },
  "gateway_affiliation_id": "gateway_affiliation_id4",
  "amount": 46,
  "checkout": {
    "accepted_payment_methods": [
      "accepted_payment_methods5",
      "accepted_payment_methods6",
      "accepted_payment_methods7"
    ],
    "accepted_multi_payment_methods": [
      {
        "key1": "val1",
        "key2": "val2"
      },
      {
        "key1": "val1",
        "key2": "val2"
      },
      {
        "key1": "val1",
        "key2": "val2"
      }
    ],
    "success_url": "success_url4",
    "default_payment_method": "default_payment_method2",
    "gateway_affiliation_id": "gateway_affiliation_id8",
    "credit_card": {
      "statement_descriptor": "statement_descriptor0",
      "installments": [
        {
          "number": 65,
          "total": 213
        }
      ],
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
      "capture": false
    },
    "debit_card": {
      "statement_descriptor": "statement_descriptor6",
      "authentication": {
        "type": "type2",
        "threed_secure": {
          "mpi": "mpi6",
          "cavv": "cavv8",
          "eci": "eci6",
          "transaction_id": "transaction_id4",
          "success_url": "success_url8",
          "ds_transaction_id": "ds_transaction_id4",
          "version": "version8"
        }
      }
    },
    "boleto": {
      "bank": "bank0",
      "instructions": "instructions0",
      "due_at": "2016-03-13T12:52:32.123Z"
    },
    "customer_editable": false,
    "expires_in": 76,
    "skip_checkout_success_page": false,
    "billing_address_editable": false,
    "billing_address": {
      "street": "street4",
      "number": "number2",
      "zip_code": "zip_code8",
      "neighborhood": "neighborhood0",
      "city": "city4",
      "state": "state0",
      "country": "country8",
      "complement": "complement0",
      "metadata": {
        "key0": "metadata1"
      },
      "line_1": "line_12",
      "line_2": "line_22"
    },
    "bank_transfer": {
      "bank": [
        "bank7",
        "bank8"
      ],
      "retries": 190
    },
    "accepted_brands": [
      "accepted_brands8",
      "accepted_brands9",
      "accepted_brands0"
    ],
    "pix": {
      "expires_at": "2016-03-13T12:52:32.123Z",
      "expires_in": 52,
      "additional_information": [
        {
          "Name": "Name9",
          "Value": "Value7"
        },
        {
          "Name": "Name0",
          "Value": "Value8"
        },
        {
          "Name": "Name1",
          "Value": "Value9"
        }
      ]
    }
  },
  "customer_id": "customer_id8",
  "customer": {
    "name": "name0",
    "email": "email6",
    "document": "document6",
    "type": "type0",
    "address": {
      "street": "street6",
      "number": "number4",
      "zip_code": "zip_code0",
      "neighborhood": "neighborhood2",
      "city": "city6",
      "state": "state2",
      "country": "country0",
      "complement": "complement2",
      "metadata": {
        "key0": "metadata3"
      },
      "line_1": "line_10",
      "line_2": "line_24"
    },
    "metadata": {
      "key0": "metadata3"
    },
    "phones": {
      "home_phone": {
        "country_code": "country_code2",
        "number": "number0",
        "area_code": "area_code2"
      },
      "mobile_phone": {
        "country_code": "country_code8",
        "number": "number4",
        "area_code": "area_code8"
      }
    },
    "code": "code8",
    "gender": "gender6",
    "document_type": "document_type8"
  },
  "metadata": {
    "key0": "metadata3",
    "key1": "metadata4",
    "key2": "metadata5"
  },
  "cash": {
    "description": "description0",
    "confirm": false
  },
  "private_label": {
    "installments": 246,
    "statement_descriptor": "statement_descriptor0",
    "card": {
      "number": "number2",
      "holder_name": "holder_name0",
      "exp_month": 116,
      "exp_year": 180,
      "cvv": "cvv2",
      "billing_address": {
        "street": "street6",
        "number": "number6",
        "zip_code": "zip_code0",
        "neighborhood": "neighborhood2",
        "city": "city6",
        "state": "state2",
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
        "key0": "metadata1",
        "key1": "metadata0"
      },
      "type": "type6",
      "options": {
        "verify_card": false
      },
      "holder_document": "holder_document8",
      "private_label": false,
      "label": "label4",
      "id": "id4",
      "token": "token2"
    },
    "card_id": "card_id6",
    "card_token": "card_token0",
    "recurrence": false,
    "capture": false,
    "extended_limit_enabled": false,
    "extended_limit_code": "extended_limit_code8",
    "recurrency_cycle": "recurrency_cycle4"
  },
  "pix": {
    "expires_at": "2016-03-13T12:52:32.123Z",
    "expires_in": 250,
    "additional_information": [
      {
        "Name": "Name7",
        "Value": "Value5"
      },
      {
        "Name": "Name8",
        "Value": "Value6"
      },
      {
        "Name": "Name9",
        "Value": "Value7"
      }
    ]
  }
}
```

