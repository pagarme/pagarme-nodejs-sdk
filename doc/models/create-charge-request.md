
# Create Charge Request

Request for creating a new charge

## Structure

`CreateChargeRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `code` | `string \| undefined` | Optional | Code |
| `amount` | `number` | Required | The amount of the charge, in cents |
| `customerId` | `string \| undefined` | Optional | The customer's id |
| `customer` | [`CreateCustomerRequest \| undefined`](../../doc/models/create-customer-request.md) | Optional | Customer data |
| `payment` | [`CreatePaymentRequest`](../../doc/models/create-payment-request.md) | Required | Payment data |
| `metadata` | `Record<string, string> \| undefined` | Optional | Metadata |
| `dueAt` | `string \| undefined` | Optional | The charge due date |
| `antifraud` | [`CreateAntifraudRequest \| undefined`](../../doc/models/create-antifraud-request.md) | Optional | - |
| `orderId` | `string` | Required | Order Id |

## Example (as JSON)

```json
{
  "code": "code8",
  "amount": 46,
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
      },
      "fine": {
        "days": 122,
        "type": "type2",
        "amount": 196
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
  },
  "metadata": {
    "key0": "metadata3",
    "key1": "metadata4",
    "key2": "metadata5"
  },
  "due_at": "2016-03-13T12:52:32.123Z",
  "order_id": "order_id6"
}
```

