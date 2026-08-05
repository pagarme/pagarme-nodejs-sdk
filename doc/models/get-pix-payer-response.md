
# Get Pix Payer Response

Pix payer data.

## Structure

`GetPixPayerResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string \| null \| undefined` | Optional | - |
| `document` | `string \| null \| undefined` | Optional | - |
| `documentType` | `string \| null \| undefined` | Optional | - |
| `bankAccount` | [`GetPixBankAccountResponse \| null \| undefined`](../../doc/models/get-pix-bank-account-response.md) | Optional | - |

## Example

```ts
import { GetPixPayerResponse } from 'pagarmeapisdklib';

const getPixPayerResponse: GetPixPayerResponse = {
  name: 'name0',
  document: 'document6',
  documentType: 'document_type8',
  bankAccount: null,
};
```

