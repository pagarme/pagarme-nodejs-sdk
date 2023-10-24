
# Get Anticipation Limits Response

Anticipation limits

## Structure

`GetAnticipationLimitsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `max` | [`GetAnticipationLimitResponse \| null \| undefined`](../../doc/models/get-anticipation-limit-response.md) | Optional | Max limit |
| `min` | [`GetAnticipationLimitResponse \| null \| undefined`](../../doc/models/get-anticipation-limit-response.md) | Optional | Min limit |

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

