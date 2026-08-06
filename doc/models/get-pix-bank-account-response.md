
# Get Pix Bank Account Response

Payer's bank details.

## Structure

`GetPixBankAccountResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `bankName` | `string \| null \| undefined` | Optional | - |
| `ispb` | `string \| null \| undefined` | Optional | - |
| `branchCode` | `string \| null \| undefined` | Optional | - |
| `accountNumber` | `string \| null \| undefined` | Optional | - |

## Example

```ts
import { GetPixBankAccountResponse } from 'pagarmeapisdklib';

const getPixBankAccountResponse: GetPixBankAccountResponse = {
  bankName: 'bank_name4',
  ispb: 'ispb4',
  branchCode: 'branch_code8',
  accountNumber: 'account_number0',
};
```

