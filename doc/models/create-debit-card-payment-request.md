
# Create Debit Card Payment Request

The settings for creating a debit card payment

## Structure

`CreateDebitCardPaymentRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `statementDescriptor` | `string \| undefined` | Optional | The text that will be shown on the debit card's statement |
| `card` | [`CreateCardRequest \| undefined`](../../doc/models/create-card-request.md) | Optional | Debit card data |
| `cardId` | `string \| undefined` | Optional | The debit card id |
| `cardToken` | `string \| undefined` | Optional | The debit card token |
| `recurrence` | `boolean \| undefined` | Optional | Indicates a recurrence |
| `authentication` | [`CreatePaymentAuthenticationRequest \| undefined`](../../doc/models/create-payment-authentication-request.md) | Optional | The payment authentication request |
| `token` | [`CreateCardPaymentContactlessRequest \| undefined`](../../doc/models/create-card-payment-contactless-request.md) | Optional | The Debit card payment token request |

## Example (as JSON)

```json
{
  "statement_descriptor": "statement_descriptor0",
  "card": {
    "number": "number6",
    "holder_name": "holder_name2",
    "exp_month": 228,
    "exp_year": 68,
    "cvv": "cvv4",
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
        "key0": "metadata5",
        "key1": "metadata6"
      },
      "line_1": "line_18",
      "line_2": "line_26"
    },
    "brand": "brand0",
    "billing_address_id": "billing_address_id2",
    "metadata": {
      "key0": "metadata7"
    },
    "type": "type4",
    "options": {
      "verify_card": false
    },
    "holder_document": "holder_document0",
    "private_label": false,
    "label": "label6",
    "id": "id6",
    "token": "token0"
  },
  "card_id": "card_id4",
  "card_token": "card_token0",
  "recurrence": false,
  "authentication": {
    "type": "type2",
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
  "token": {
    "type": "type4",
    "apple_pay": {
      "version": "version8",
      "data": "data6",
      "header": {
        "public_key_hash": "public_key_hash8",
        "ephemeral_public_key": "ephemeral_public_key0",
        "transaction_id": "transaction_id8"
      },
      "signature": "signature4",
      "merchant_identifier": "merchant_identifier0"
    },
    "google_pay": {
      "version": "version8",
      "data": "data2",
      "header": {
        "ephemeral_public_key": "ephemeral_public_key4"
      },
      "signature": "signature0",
      "merchant_identifier": "merchant_identifier6"
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
          },
          {
            "tag": "tag3",
            "lenght": "lenght1",
            "value": "value1"
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
}
```

