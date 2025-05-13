
# Update Recipient Bank Account Request

Updates the default bank account for a recipient

## Structure

`UpdateRecipientBankAccountRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `bankAccount` | [`CreateBankAccountRequest`](../../doc/models/create-bank-account-request.md) | Required | Bank account |
| `paymentMode` | `string` | Required | Payment mode<br><br>**Default**: `'bank_transfer'` |

## Example (as JSON)

```json
{
  "bank_account": {
    "holder_name": "holder_name0",
    "holder_type": "holder_type6",
    "holder_document": "holder_document8",
    "bank": "bank2",
    "branch_number": "branch_number0",
    "branch_check_digit": "branch_check_digit0",
    "account_number": "account_number4",
    "account_check_digit": "account_check_digit0",
    "type": "type6",
    "metadata": {
      "key0": "metadata1",
      "key1": "metadata0"
    },
    "pix_key": "pix_key2"
  },
  "payment_mode": "bank_transfer"
}
```

