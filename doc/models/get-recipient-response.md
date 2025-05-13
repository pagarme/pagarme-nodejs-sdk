
# Get Recipient Response

Recipient response

## Structure

`GetRecipientResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| null \| undefined` | Optional | Id |
| `name` | `string \| null \| undefined` | Optional | Name |
| `email` | `string \| null \| undefined` | Optional | Email |
| `document` | `string \| null \| undefined` | Optional | Document |
| `description` | `string \| null \| undefined` | Optional | Description |
| `type` | `string \| null \| undefined` | Optional | Type |
| `status` | `string \| null \| undefined` | Optional | Status |
| `createdAt` | `string \| null \| undefined` | Optional | Creation date |
| `updatedAt` | `string \| null \| undefined` | Optional | Last update date |
| `deletedAt` | `string \| null \| undefined` | Optional | Deletion date |
| `defaultBankAccount` | [`GetBankAccountResponse \| null \| undefined`](../../doc/models/get-bank-account-response.md) | Optional | Default bank account |
| `gatewayRecipients` | [`GetGatewayRecipientResponse[] \| null \| undefined`](../../doc/models/get-gateway-recipient-response.md) | Optional | Info about the recipient on the gateway |
| `metadata` | `Record<string, string> \| null \| undefined` | Optional | Metadata |
| `automaticAnticipationSettings` | [`GetAutomaticAnticipationResponse \| null \| undefined`](../../doc/models/get-automatic-anticipation-response.md) | Optional | - |
| `transferSettings` | [`GetTransferSettingsResponse \| null \| undefined`](../../doc/models/get-transfer-settings-response.md) | Optional | - |
| `code` | `string \| null \| undefined` | Optional | Recipient code |
| `paymentMode` | `string \| null \| undefined` | Optional | Payment mode<br><br>**Default**: `'bank_transfer'` |
| `registerInformation` | [`GetRegisterInformationResponse \| null \| undefined`](../../doc/models/get-register-information-response.md) | Optional | - |

## Example (as JSON)

```json
{
  "payment_mode": "bank_transfer",
  "id": "id4",
  "name": "name4",
  "email": "email2",
  "document": "document2",
  "description": "description6"
}
```

