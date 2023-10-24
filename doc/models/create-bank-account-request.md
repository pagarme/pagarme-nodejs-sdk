
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

## Example (as JSON)

```json
{
  "holder_name": "holder_name4",
  "holder_type": "holder_type0",
  "holder_document": "holder_document8",
  "bank": "bank6",
  "branch_number": "branch_number4",
  "branch_check_digit": "branch_check_digit4",
  "account_number": "account_number8",
  "account_check_digit": "account_check_digit4",
  "type": "type2",
  "metadata": {
    "key0": "metadata5",
    "key1": "metadata6",
    "key2": "metadata7"
  },
  "pix_key": "pix_key8"
}
```

