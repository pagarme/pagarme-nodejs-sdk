
# Get Bank Account Response

## Structure

`GetBankAccountResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| null \| undefined` | Optional | Id |
| `holderName` | `string \| null \| undefined` | Optional | Holder name |
| `holderType` | `string \| null \| undefined` | Optional | Holder type |
| `bank` | `string \| null \| undefined` | Optional | Bank |
| `branchNumber` | `string \| null \| undefined` | Optional | Branch number |
| `branchCheckDigit` | `string \| null \| undefined` | Optional | Branch check digit |
| `accountNumber` | `string \| null \| undefined` | Optional | Account number |
| `accountCheckDigit` | `string \| null \| undefined` | Optional | Account check digit |
| `type` | `string \| null \| undefined` | Optional | Bank account type |
| `status` | `string \| null \| undefined` | Optional | Bank account status |
| `createdAt` | `string \| null \| undefined` | Optional | Creation date |
| `updatedAt` | `string \| null \| undefined` | Optional | Last update date |
| `deletedAt` | `string \| null \| undefined` | Optional | Deletion date |
| `recipient` | [`GetRecipientResponse \| null \| undefined`](../../doc/models/get-recipient-response.md) | Optional | Recipient |
| `metadata` | `Record<string, string> \| null \| undefined` | Optional | Metadata |
| `pixKey` | `string \| null \| undefined` | Optional | Pix Key |

## Example

```ts
import { GetBankAccountResponse } from 'pagarmeapisdklib';

const getBankAccountResponse: GetBankAccountResponse = {
  id: 'id4',
  holderName: 'holder_name0',
  holderType: 'holder_type6',
  bank: 'bank2',
  branchNumber: 'branch_number0',
};
```

