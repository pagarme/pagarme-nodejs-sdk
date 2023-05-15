
# Create Recipient Request

Request for creating a recipient

## Structure

`CreateRecipientRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string` | Required | Recipient name |
| `email` | `string` | Required | Recipient email |
| `description` | `string` | Required | Recipient description |
| `document` | `string` | Required | Recipient document number |
| `type` | `string` | Required | Recipient type |
| `defaultBankAccount` | [`CreateBankAccountRequest`](../../doc/models/create-bank-account-request.md) | Required | Bank account |
| `metadata` | `Record<string, string>` | Required | Metadata |
| `transferSettings` | [`CreateTransferSettingsRequest \| undefined`](../../doc/models/create-transfer-settings-request.md) | Optional | Receiver Transfer Information |
| `code` | `string` | Required | Recipient code |
| `paymentMode` | `string` | Required | Payment mode<br>**Default**: `'bank_transfer'` |

## Example (as JSON)

```json
{
  "name": "name0",
  "email": "email6",
  "description": "description0",
  "document": "document6",
  "type": "type0",
  "default_bank_account": {
    "holder_name": "holder_name4",
    "holder_type": "holder_type0",
    "holder_document": "holder_document2",
    "bank": "bank6",
    "branch_number": "branch_number4",
    "branch_check_digit": "branch_check_digit4",
    "account_number": "account_number8",
    "account_check_digit": "account_check_digit4",
    "type": "type2",
    "metadata": {
      "key0": "metadata5",
      "key1": "metadata4",
      "key2": "metadata3"
    },
    "pix_key": "pix_key8"
  },
  "metadata": {
    "key0": "metadata3",
    "key1": "metadata4",
    "key2": "metadata5"
  },
  "code": "code8",
  "payment_mode": "bank_transfer",
  "transfer_settings": {
    "transfer_enabled": false,
    "transfer_interval": "transfer_interval4",
    "transfer_day": 10
  }
}
```

