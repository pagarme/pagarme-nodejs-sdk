
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

## Example (as JSON)

```json
{
  "id": "id6",
  "holder_name": "holder_name2",
  "holder_type": "holder_type8",
  "bank": "bank4",
  "branch_number": "branch_number2"
}
```

