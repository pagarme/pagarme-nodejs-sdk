
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
  "name": null,
  "email": null,
  "description": null,
  "document": null,
  "type": null,
  "default_bank_account": null,
  "metadata": null,
  "code": null,
  "payment_mode": "bank_transfer"
}
```

