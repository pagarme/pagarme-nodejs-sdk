
# Get Bank Account Response

## Structure

`GetBankAccountResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | Id |
| `holderName` | `string \| undefined` | Optional | Holder name |
| `holderType` | `string \| undefined` | Optional | Holder type |
| `bank` | `string \| undefined` | Optional | Bank |
| `branchNumber` | `string \| undefined` | Optional | Branch number |
| `branchCheckDigit` | `string \| undefined` | Optional | Branch check digit |
| `accountNumber` | `string \| undefined` | Optional | Account number |
| `accountCheckDigit` | `string \| undefined` | Optional | Account check digit |
| `type` | `string \| undefined` | Optional | Bank account type |
| `status` | `string \| undefined` | Optional | Bank account status |
| `createdAt` | `string \| undefined` | Optional | Creation date |
| `updatedAt` | `string \| undefined` | Optional | Last update date |
| `deletedAt` | `string \| undefined` | Optional | Deletion date |
| `recipient` | [`GetRecipientResponse \| undefined`](../../doc/models/get-recipient-response.md) | Optional | Recipient |
| `metadata` | `Record<string, string> \| undefined` | Optional | Metadata |
| `pixKey` | `string \| undefined` | Optional | Pix Key |

## Example (as JSON)

```json
{
  "id": null,
  "holder_name": null,
  "holder_type": null,
  "bank": null,
  "branch_number": null,
  "branch_check_digit": null,
  "account_number": null,
  "account_check_digit": null,
  "type": null,
  "status": null,
  "created_at": null,
  "updated_at": null,
  "deleted_at": null,
  "recipient": null,
  "metadata": null,
  "pix_key": null
}
```

