
# Create Anticipation Request

Request for creating an anticipation

## Structure

`CreateAnticipationRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amount` | `number` | Required | Amount requested for the anticipation |
| `timeframe` | `string` | Required | Timeframe |
| `paymentDate` | `string` | Required | Payment date |

## Example (as JSON)

```json
{
  "amount": 68,
  "timeframe": "timeframe2",
  "payment_date": "2016-03-13T12:52:32.123Z"
}
```

