
# Get Recipient Response

Recipient response

## Structure

`GetRecipientResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | Id |
| `name` | `string \| undefined` | Optional | Name |
| `email` | `string \| undefined` | Optional | Email |
| `document` | `string \| undefined` | Optional | Document |
| `description` | `string \| undefined` | Optional | Description |
| `type` | `string \| undefined` | Optional | Type |
| `status` | `string \| undefined` | Optional | Status |
| `createdAt` | `string \| undefined` | Optional | Creation date |
| `updatedAt` | `string \| undefined` | Optional | Last update date |
| `deletedAt` | `string \| undefined` | Optional | Deletion date |
| `defaultBankAccount` | [`GetBankAccountResponse \| undefined`](../../doc/models/get-bank-account-response.md) | Optional | Default bank account |
| `gatewayRecipients` | [`GetGatewayRecipientResponse[] \| undefined`](../../doc/models/get-gateway-recipient-response.md) | Optional | Info about the recipient on the gateway |
| `metadata` | `Record<string, string> \| undefined` | Optional | Metadata |
| `automaticAnticipationSettings` | [`GetAutomaticAnticipationResponse \| undefined`](../../doc/models/get-automatic-anticipation-response.md) | Optional | - |
| `transferSettings` | [`GetTransferSettingsResponse \| undefined`](../../doc/models/get-transfer-settings-response.md) | Optional | - |
| `code` | `string \| undefined` | Optional | Recipient code |
| `paymentMode` | `string \| undefined` | Optional | Payment mode<br>**Default**: `'bank_transfer'` |

## Example (as JSON)

```json
{
  "id": null,
  "name": null,
  "email": null,
  "document": null,
  "description": null,
  "type": null,
  "status": null,
  "created_at": null,
  "updated_at": null,
  "deleted_at": null,
  "default_bank_account": null,
  "gateway_recipients": null,
  "metadata": null,
  "automatic_anticipation_settings": null,
  "transfer_settings": null,
  "code": null,
  "payment_mode": null
}
```

