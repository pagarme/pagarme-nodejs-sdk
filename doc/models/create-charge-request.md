
# Create Charge Request

Request for creating a new charge

## Structure

`CreateChargeRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `code` | `string \| null \| undefined` | Optional | Code |
| `amount` | `number` | Required | The amount of the charge, in cents |
| `customerId` | `string \| null \| undefined` | Optional | The customer's id |
| `customer` | [`CreateCustomerRequest \| null \| undefined`](../../doc/models/create-customer-request.md) | Optional | Customer data |
| `payment` | [`CreatePaymentRequest`](../../doc/models/create-payment-request.md) | Required | Payment data |
| `metadata` | `Record<string, string> \| null \| undefined` | Optional | Metadata |
| `dueAt` | `string \| null \| undefined` | Optional | The charge due date |
| `antifraud` | [`CreateAntifraudRequest \| null \| undefined`](../../doc/models/create-antifraud-request.md) | Optional | - |
| `orderId` | `string` | Required | Order Id |

## Example (as JSON)

```json
{
  "code": "code2",
  "amount": 228,
  "customer_id": "customer_id2",
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
        "key0": "metadata3",
        "key1": "metadata2",
        "key2": "metadata1"
      },
      "line_1": "line_10",
      "line_2": "line_24"
    },
    "metadata": {
      "key0": "metadata3"
    },
    "phones": {
      "home_phone": {
        "country_code": "country_code0",
        "number": "number2",
        "area_code": "area_code0",
        "Type": "Type0"
      },
      "mobile_phone": {
        "country_code": "country_code0",
        "number": "number8",
        "area_code": "area_code0",
        "Type": "Type0"
      }
    },
    "code": "code8",
    "gender": "gender6",
    "document_type": "document_type8"
  },
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
  },
  "metadata": {
    "key0": "metadata1",
    "key1": "metadata0",
    "key2": "metadata9"
  },
  "due_at": "2016-03-13T12:52:32.123Z",
  "order_id": "order_id8"
}
```

