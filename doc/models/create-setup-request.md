
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
        "cvv": "cvv6"
      },
      "card_id": "card_id0",
      "card_token": "card_token4"
    },
    "debit_card": {
      "statement_descriptor": "statement_descriptor0",
      "card": {
        "number": "number8",
        "holder_name": "holder_name0",
        "exp_month": 252,
        "exp_year": 44,
        "cvv": "cvv2"
      },
      "card_id": "card_id6",
      "card_token": "card_token0",
      "recurrence": false
    },
    "boleto": {
      "retries": 218,
      "bank": "bank4",
      "instructions": "instructions4",
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
          "key0": "metadata5",
          "key1": "metadata6"
        },
        "line_1": "line_18",
        "line_2": "line_26"
      },
      "billing_address_id": "billing_address_id2",
      "nosso_numero": "nosso_numero6",
      "document_number": "document_number0",
      "statement_descriptor": "statement_descriptor6",
      "interest": {
        "days": 168,
        "type": "type6",
        "amount": 242
      }
    },
    "currency": "currency6",
    "voucher": {
      "statement_descriptor": "statement_descriptor6",
      "card_id": "card_id8",
      "card_token": "card_token4",
      "Card": {
        "number": "number4",
        "holder_name": "holder_name2",
        "exp_month": 214,
        "exp_year": 254,
        "cvv": "cvv4"
      },
      "recurrency_cycle": "recurrency_cycle0"
    }
  }
}
```

