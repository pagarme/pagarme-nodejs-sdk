
# Get Recipient Response

Recipient response

## Structure

`GetRecipientResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| null` | Required | Id |
| `name` | `string \| null` | Required | Name |
| `email` | `string \| null` | Required | Email |
| `document` | `string \| null` | Required | Document |
| `description` | `string \| null` | Required | Description |
| `type` | `string \| null` | Required | Type |
| `status` | `string \| null` | Required | Status |
| `createdAt` | `string \| null` | Required | Creation date |
| `updatedAt` | `string \| null` | Required | Last update date |
| `deletedAt` | `string \| null` | Required | Deletion date |
| `defaultBankAccount` | [`GetBankAccountResponse \| null`](../../doc/models/get-bank-account-response.md) | Required | Default bank account |
| `gatewayRecipients` | [`GetGatewayRecipientResponse[] \| null`](../../doc/models/get-gateway-recipient-response.md) | Required | Info about the recipient on the gateway |
| `metadata` | `Record<string, string> \| null` | Required | Metadata |
| `automaticAnticipationSettings` | [`GetAutomaticAnticipationResponse \| undefined`](../../doc/models/get-automatic-anticipation-response.md) | Optional | - |
| `transferSettings` | [`GetTransferSettingsResponse \| undefined`](../../doc/models/get-transfer-settings-response.md) | Optional | - |
| `code` | `string \| null` | Required | Recipient code |
| `paymentMode` | `string \| null` | Required | Payment mode<br>**Default**: `'bank_transfer'` |

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
  "code": null,
  "payment_mode": "bank_transfer"
}
```

