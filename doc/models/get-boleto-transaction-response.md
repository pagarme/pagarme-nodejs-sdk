
# Get Boleto Transaction Response

Response object for getting a boleto transaction

## Structure

`GetBoletoTransactionResponse`

## Inherits From

[`GetTransactionResponse`](../../doc/models/get-transaction-response.md)

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `url` | `string \| null \| undefined` | Optional | - |
| `barcode` | `string \| null \| undefined` | Optional | - |
| `nossoNumero` | `string \| null \| undefined` | Optional | - |
| `bank` | `string \| null \| undefined` | Optional | - |
| `documentNumber` | `string \| null \| undefined` | Optional | - |
| `instructions` | `string \| null \| undefined` | Optional | - |
| `billingAddress` | [`GetBillingAddressResponse \| null \| undefined`](../../doc/models/get-billing-address-response.md) | Optional | - |
| `dueAt` | `string \| null \| undefined` | Optional | - |
| `qrCode` | `string \| null \| undefined` | Optional | - |
| `line` | `string \| null \| undefined` | Optional | - |
| `pdfPassword` | `string \| null \| undefined` | Optional | - |
| `pdf` | `string \| null \| undefined` | Optional | - |
| `paidAt` | `string \| null \| undefined` | Optional | - |
| `paidAmount` | `string \| null \| undefined` | Optional | - |
| `type` | `string \| null \| undefined` | Optional | - |
| `creditAt` | `string \| null \| undefined` | Optional | - |
| `statementDescriptor` | `string \| null \| undefined` | Optional | Soft Descriptor |

## Example

```ts
import { GetBoletoTransactionResponse } from 'pagarmeapisdklib';

const getBoletoTransactionResponse: GetBoletoTransactionResponse = {
  url: 'url2',
  barcode: 'barcode2',
  nossoNumero: 'nosso_numero8',
  bank: 'bank6',
  documentNumber: 'document_number8',
  gatewayId: 'gateway_id8',
  amount: 40,
  status: 'status6',
  success: false,
  createdAt: '2016-03-13T12:52:32.123Z',
};
```

