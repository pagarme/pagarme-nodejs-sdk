
# Get Anticipation Response

Anticipation

## Structure

`GetAnticipationResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| null` | Required | Id |
| `requestedAmount` | `number \| null` | Required | Requested amount |
| `approvedAmount` | `number \| null` | Required | Approved amount |
| `recipient` | [`GetRecipientResponse \| undefined`](../../doc/models/get-recipient-response.md) | Optional | Recipient |
| `pgid` | `string \| null` | Required | Anticipation id on the gateway |
| `createdAt` | `string \| null` | Required | Creation date |
| `updatedAt` | `string \| null` | Required | Last update date |
| `paymentDate` | `string \| null` | Required | Payment date |
| `status` | `string \| null` | Required | Status |
| `timeframe` | `string \| null` | Required | Timeframe |

## Example (as JSON)

```json
{
  "id": "id0",
  "requested_amount": 246,
  "approved_amount": 212,
  "recipient": null,
  "pgid": "pgid4",
  "created_at": "2016-03-13T12:52:32.123Z",
  "updated_at": "2016-03-13T12:52:32.123Z",
  "payment_date": "2016-03-13T12:52:32.123Z",
  "status": "status8",
  "timeframe": "timeframe2"
}
```

