
# Update Charge Payment Method Request

Request for updating the payment method of a charge

## Structure

`UpdateChargePaymentMethodRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `updateSubscription` | `boolean` | Required | Indicates if the payment method from the subscription must also be updated |
| `paymentMethod` | `string` | Required | The new payment method |
| `creditCard` | [`CreateCreditCardPaymentRequest`](../../doc/models/create-credit-card-payment-request.md) | Required | Credit card data |
| `debitCard` | [`CreateDebitCardPaymentRequest`](../../doc/models/create-debit-card-payment-request.md) | Required | Debit card data |
| `boleto` | [`CreateBoletoPaymentRequest`](../../doc/models/create-boleto-payment-request.md) | Required | Boleto data |
| `voucher` | [`CreateVoucherPaymentRequest`](../../doc/models/create-voucher-payment-request.md) | Required | Voucher data |
| `cash` | [`CreateCashPaymentRequest`](../../doc/models/create-cash-payment-request.md) | Required | Cash data |
| `bankTransfer` | [`CreateBankTransferPaymentRequest`](../../doc/models/create-bank-transfer-payment-request.md) | Required | Bank Transfer data |
| `privateLabel` | [`CreatePrivateLabelPaymentRequest`](../../doc/models/create-private-label-payment-request.md) | Required | - |

## Example (as JSON)

```json
{
  "update_subscription": false,
  "payment_method": "payment_method0",
  "credit_card": {
    "installments": 1,
    "capture": true,
    "recurrency_cycle": "\"first\" or \"subsequent\"",
    "statement_descriptor": "statement_descriptor8",
    "card": {
      "number": "number0",
      "holder_name": "holder_name8",
      "exp_month": 54,
      "exp_year": 242,
      "cvv": "cvv0"
    },
    "card_id": "card_id4",
    "card_token": "card_token2"
  },
  "debit_card": {
    "statement_descriptor": "statement_descriptor4",
    "card": {
      "number": "number0",
      "holder_name": "holder_name8",
      "exp_month": 104,
      "exp_year": 192,
      "cvv": "cvv0"
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
    }
  },
  "voucher": {
    "recurrency_cycle": "\"first\" or \"subsequent\"",
    "statement_descriptor": "statement_descriptor2",
    "card_id": "card_id8",
    "card_token": "card_token8",
    "Card": {
      "number": "number0",
      "holder_name": "holder_name8",
      "exp_month": 198,
      "exp_year": 238,
      "cvv": "cvv0"
    }
  },
  "cash": {
    "description": "description0",
    "confirm": false
  },
  "bank_transfer": {
    "bank": "bank0",
    "retries": 236
  },
  "private_label": {
    "installments": 1,
    "capture": true,
    "recurrency_cycle": "\"first\" or \"subsequent\"",
    "statement_descriptor": "statement_descriptor0",
    "card": {
      "number": "number2",
      "holder_name": "holder_name0",
      "exp_month": 116,
      "exp_year": 180,
      "cvv": "cvv2"
    },
    "card_id": "card_id6",
    "card_token": "card_token0"
  }
}
```

