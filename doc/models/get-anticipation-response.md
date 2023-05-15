
# Get Anticipation Response

Anticipation

## Structure

`GetAnticipationResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | Id |
| `requestedAmount` | `number \| undefined` | Optional | Requested amount |
| `approvedAmount` | `number \| undefined` | Optional | Approved amount |
| `recipient` | [`GetRecipientResponse \| undefined`](../../doc/models/get-recipient-response.md) | Optional | Recipient |
| `pgid` | `string \| undefined` | Optional | Anticipation id on the gateway |
| `createdAt` | `string \| undefined` | Optional | Creation date |
| `updatedAt` | `string \| undefined` | Optional | Last update date |
| `paymentDate` | `string \| undefined` | Optional | Payment date |
| `status` | `string \| undefined` | Optional | Status |
| `timeframe` | `string \| undefined` | Optional | Timeframe |

## Example (as JSON)

```json
{
  "id": "id0",
  "requested_amount": 246,
  "approved_amount": 212,
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

