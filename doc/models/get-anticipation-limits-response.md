
# Get Anticipation Limits Response

Anticipation limits

## Structure

`GetAnticipationLimitsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `max` | [`GetAnticipationLimitResponse \| null`](../../doc/models/get-anticipation-limit-response.md) | Required | Max limit |
| `min` | [`GetAnticipationLimitResponse \| null`](../../doc/models/get-anticipation-limit-response.md) | Required | Min limit |

## Example (as JSON)

```json
{
  "max": {
    "amount": 140,
    "anticipation_fee": 234
  },
  "min": {
    "amount": 34,
    "anticipation_fee": 60
  }
}
```

