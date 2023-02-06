
# Get Boleto Transaction Response

Response object for getting a boleto transaction

## Structure

`GetBoletoTransactionResponse`

## Inherits From

[`GetTransactionResponse`](../../doc/models/get-transaction-response.md)

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `url` | `string \| undefined` | Optional | - |
| `barcode` | `string \| undefined` | Optional | - |
| `nossoNumero` | `string \| undefined` | Optional | - |
| `bank` | `string \| undefined` | Optional | - |
| `documentNumber` | `string \| undefined` | Optional | - |
| `instructions` | `string \| undefined` | Optional | - |
| `billingAddress` | [`GetBillingAddressResponse \| undefined`](../../doc/models/get-billing-address-response.md) | Optional | - |
| `dueAt` | `string \| undefined` | Optional | - |
| `qrCode` | `string \| undefined` | Optional | - |
| `line` | `string \| undefined` | Optional | - |
| `pdfPassword` | `string \| undefined` | Optional | - |
| `pdf` | `string \| undefined` | Optional | - |
| `paidAt` | `string \| undefined` | Optional | - |
| `paidAmount` | `string \| undefined` | Optional | - |
| `type` | `string \| undefined` | Optional | - |
| `creditAt` | `string \| undefined` | Optional | - |
| `statementDescriptor` | `string \| undefined` | Optional | Soft Descriptor |

## Example (as JSON)

```json
{
  "gateway_id": null,
  "amount": null,
  "status": null,
  "success": null,
  "created_at": null,
  "updated_at": null,
  "attempt_count": null,
  "max_attempts": null,
  "splits": null,
  "next_attempt": null,
  "transaction_type": "boleto",
  "id": null,
  "gateway_response": null,
  "antifraud_response": null,
  "metadata": null,
  "split": null,
  "interest": null,
  "fine": null,
  "max_days_to_pay_past_due": null,
  "url": null,
  "barcode": null,
  "nosso_numero": null,
  "bank": null,
  "document_number": null,
  "instructions": null,
  "billing_address": null,
  "due_at": null,
  "qr_code": null,
  "line": null,
  "pdf_password": null,
  "pdf": null,
  "paid_at": null,
  "paid_amount": null,
  "type": null,
  "credit_at": null,
  "statement_descriptor": null
}
```

