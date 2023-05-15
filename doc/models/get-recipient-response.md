
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
  "payment_mode": "bank_transfer",
  "id": "id0",
  "name": "name0",
  "email": "email6",
  "document": "document6",
  "description": "description0"
}
```

