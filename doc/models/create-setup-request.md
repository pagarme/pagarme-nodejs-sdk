
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
  "amount": 160,
  "description": "description8",
  "payment": {
    "payment_method": "payment_method4",
    "credit_card": {
      "installments": 52,
      "statement_descriptor": "statement_descriptor8",
      "card": {
        "number": "number6",
        "holder_name": "holder_name2",
        "exp_month": 228,
        "exp_year": 68,
        "cvv": "cvv4"
      },
      "card_id": "card_id4",
      "card_token": "card_token2"
    },
    "debit_card": {
      "statement_descriptor": "statement_descriptor4",
      "card": {
        "number": "number6",
        "holder_name": "holder_name2",
        "exp_month": 228,
        "exp_year": 68,
        "cvv": "cvv4"
      },
      "card_id": "card_id0",
      "card_token": "card_token6",
      "recurrence": false
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
          "key0": "metadata5",
          "key1": "metadata6"
        },
        "line_1": "line_18",
        "line_2": "line_26"
      },
      "billing_address_id": "billing_address_id6",
      "nosso_numero": "nosso_numero0",
      "document_number": "document_number6",
      "statement_descriptor": "statement_descriptor0",
      "interest": {
        "days": 156,
        "type": "type0",
        "amount": 230
      }
    },
    "currency": "currency6",
    "voucher": {
      "statement_descriptor": "statement_descriptor2",
      "card_id": "card_id8",
      "card_token": "card_token8",
      "Card": {
        "number": "number8",
        "holder_name": "holder_name6",
        "exp_month": 240,
        "exp_year": 56,
        "cvv": "cvv8"
      },
      "recurrency_cycle": "recurrency_cycle6"
    }
  }
}
```

