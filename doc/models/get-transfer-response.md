
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
  "id": "id0",
  "amount": 46,
  "status": "status8",
  "created_at": "2016-03-13T12:52:32.123Z",
  "updated_at": "2016-03-13T12:52:32.123Z"
}
```

