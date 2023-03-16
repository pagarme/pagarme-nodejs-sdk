
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
    "installments": null,
    "statement_descriptor": null,
    "card": null,
    "card_id": null,
    "card_token": null,
    "recurrence": null,
    "capture": null,
    "extended_limit_enabled": null,
    "extended_limit_code": null,
    "merchant_category_code": null,
    "authentication": null,
    "contactless": null,
    "auto_recovery": null,
    "operation_type": null,
    "recurrency_cycle": null
  },
  "debit_card": {
    "statement_descriptor": null,
    "card": null,
    "card_id": null,
    "card_token": null,
    "recurrence": null,
    "authentication": null,
    "token": null
  },
  "boleto": {
    "retries": 226,
    "bank": "bank8",
    "instructions": "instructions2",
    "due_at": null,
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
    "billing_address_id": null,
    "nosso_numero": null,
    "document_number": "document_number6",
    "statement_descriptor": "statement_descriptor0",
    "interest": null,
    "fine": null,
    "max_days_to_pay_past_due": null
  },
  "voucher": {
    "statement_descriptor": null,
    "card_id": null,
    "card_token": null,
    "Card": null,
    "recurrency_cycle": null
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
    "installments": null,
    "statement_descriptor": null,
    "card": null,
    "card_id": null,
    "card_token": null,
    "recurrence": null,
    "capture": null,
    "extended_limit_enabled": null,
    "extended_limit_code": null,
    "recurrency_cycle": null
  }
}
```

