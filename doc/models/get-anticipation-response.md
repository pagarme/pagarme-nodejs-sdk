
# Get Anticipation Response

Anticipation

## Structure

`GetAnticipationResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| null \| undefined` | Optional | Id |
| `requestedAmount` | `number \| null \| undefined` | Optional | Requested amount |
| `approvedAmount` | `number \| null \| undefined` | Optional | Approved amount |
| `recipient` | [`GetRecipientResponse \| null \| undefined`](../../doc/models/get-recipient-response.md) | Optional | Recipient |
| `pgid` | `string \| null \| undefined` | Optional | Anticipation id on the gateway |
| `createdAt` | `string \| null \| undefined` | Optional | Creation date |
| `updatedAt` | `string \| null \| undefined` | Optional | Last update date |
| `paymentDate` | `string \| null \| undefined` | Optional | Payment date |
| `status` | `string \| null \| undefined` | Optional | Status |
| `timeframe` | `string \| null \| undefined` | Optional | Timeframe |

## Example (as JSON)

```json
{
  "id": "id8",
  "requested_amount": 130,
  "approved_amount": 184,
  "recipient": {
    "id": "id8",
    "name": "name8",
    "email": "email8",
    "document": "document8",
    "description": "description2"
  },
  "pgid": "pgid4"
}
```

