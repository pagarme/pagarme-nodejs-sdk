
# Get Bank Account Response

## Structure

`GetBankAccountResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| null` | Required | Id |
| `holderName` | `string \| null` | Required | Holder name |
| `holderType` | `string \| null` | Required | Holder type |
| `bank` | `string \| null` | Required | Bank |
| `branchNumber` | `string \| null` | Required | Branch number |
| `branchCheckDigit` | `string \| null` | Required | Branch check digit |
| `accountNumber` | `string \| null` | Required | Account number |
| `accountCheckDigit` | `string \| null` | Required | Account check digit |
| `type` | `string \| null` | Required | Bank account type |
| `status` | `string \| null` | Required | Bank account status |
| `createdAt` | `string \| null` | Required | Creation date |
| `updatedAt` | `string \| null` | Required | Last update date |
| `deletedAt` | `string \| null` | Required | Deletion date |
| `recipient` | [`GetRecipientResponse \| undefined`](../../doc/models/get-recipient-response.md) | Optional | Recipient |
| `metadata` | `Record<string, string> \| null` | Required | Metadata |
| `pixKey` | `string \| null` | Required | Pix Key |

## Example (as JSON)

```json
{
  "id": "id0",
  "holder_name": "holder_name4",
  "holder_type": "holder_type2",
  "bank": "bank8",
  "branch_number": "branch_number6",
  "branch_check_digit": "branch_check_digit4",
  "account_number": "account_number0",
  "account_check_digit": "account_check_digit6",
  "type": "type0",
  "status": "status8",
  "created_at": "2016-03-13T12:52:32.123Z",
  "updated_at": "2016-03-13T12:52:32.123Z",
  "deleted_at": "2016-03-13T12:52:32.123Z",
  "recipient": null,
  "metadata": {
    "key0": "metadata3",
    "key1": "metadata4",
    "key2": "metadata5"
  },
  "pix_key": "pix_key6"
}
```

