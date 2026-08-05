
# Create Bank Account Request

Request for creating a bank account

## Structure

`CreateBankAccountRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `holderName` | `string` | Required | Bank account holder name |
| `holderType` | `string` | Required | Bank account holder type |
| `holderDocument` | `string` | Required | Bank account holder document |
| `bank` | `string` | Required | Bank |
| `branchNumber` | `string` | Required | Branch number |
| `branchCheckDigit` | `string \| null \| undefined` | Optional | Branch check digit |
| `accountNumber` | `string` | Required | Account number |
| `accountCheckDigit` | `string` | Required | Account check digit |
| `type` | `string` | Required | Bank account type |
| `metadata` | `Record<string, string>` | Required | Metadata |
| `pixKey` | `string \| null \| undefined` | Optional | Pix key |

## Example

```ts
import { CreateBankAccountRequest } from 'pagarmeapisdklib';

const createBankAccountRequest: CreateBankAccountRequest = {
  holderName: 'holder_name6',
  holderType: 'holder_type2',
  holderDocument: 'holder_document6',
  bank: 'bank8',
  branchNumber: 'branch_number6',
  accountNumber: 'account_number0',
  accountCheckDigit: 'account_check_digit6',
  type: 'type0',
  metadata: {
    'key0': 'metadata3',
    'key1': 'metadata4'
  },
  branchCheckDigit: 'branch_check_digit4',
  pixKey: 'pix_key6',
};
```

