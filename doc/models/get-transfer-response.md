
# Get Transfer Response

Transfer response

## Structure

`GetTransferResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| null \| undefined` | Optional | Id |
| `amount` | `number \| null \| undefined` | Optional | Transfer amount |
| `status` | `string \| null \| undefined` | Optional | Transfer status |
| `createdAt` | `string \| null \| undefined` | Optional | Transfer creation date |
| `updatedAt` | `string \| null \| undefined` | Optional | Transfer last update date |
| `bankAccount` | [`GetBankAccountResponse \| null \| undefined`](../../doc/models/get-bank-account-response.md) | Optional | Bank account |
| `metadata` | `Record<string, string> \| null \| undefined` | Optional | Metadata |

## Example (as JSON)

```json
{
  "id": "id2",
  "amount": 146,
  "status": "status4",
  "created_at": "2016-03-13T12:52:32.123Z",
  "updated_at": "2016-03-13T12:52:32.123Z"
}
```

