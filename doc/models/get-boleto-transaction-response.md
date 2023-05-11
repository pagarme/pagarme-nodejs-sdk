
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
  "gateway_id": "gateway_id4",
  "amount": 250,
  "status": "status2",
  "success": false,
  "created_at": "2016-03-13T12:52:32.123Z",
  "transaction_type": "boleto",
  "url": "url4",
  "barcode": "barcode0",
  "nosso_numero": "nosso_numero0",
  "bank": "bank8",
  "document_number": "document_number6"
}
```

