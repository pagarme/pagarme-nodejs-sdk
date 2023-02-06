
# Get Transfer Response

Transfer response

## Structure

`GetTransferResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | Id |
| `amount` | `number \| undefined` | Optional | Transfer amount |
| `status` | `string \| undefined` | Optional | Transfer status |
| `createdAt` | `string \| undefined` | Optional | Transfer creation date |
| `updatedAt` | `string \| undefined` | Optional | Transfer last update date |
| `bankAccount` | [`GetBankAccountResponse \| undefined`](../../doc/models/get-bank-account-response.md) | Optional | Bank account |
| `metadata` | `Record<string, string> \| undefined` | Optional | Metadata |

## Example (as JSON)

```json
{
  "id": null,
  "amount": null,
  "status": null,
  "created_at": null,
  "updated_at": null,
  "bank_account": null,
  "metadata": null
}
```

