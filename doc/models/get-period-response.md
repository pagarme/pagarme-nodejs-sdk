
# Get Period Response

Response object for getting a period

## Structure

`GetPeriodResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `startAt` | `string \| undefined` | Optional | - |
| `endAt` | `string \| undefined` | Optional | - |
| `id` | `string \| undefined` | Optional | - |
| `billingAt` | `string \| undefined` | Optional | - |
| `subscription` | [`GetSubscriptionResponse \| undefined`](../../doc/models/get-subscription-response.md) | Optional | - |
| `status` | `string \| undefined` | Optional | - |
| `duration` | `number \| undefined` | Optional | - |
| `createdAt` | `string \| undefined` | Optional | - |
| `updatedAt` | `string \| undefined` | Optional | - |
| `cycle` | `number \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "start_at": "2016-03-13T12:52:32.123Z",
  "end_at": "2016-03-13T12:52:32.123Z",
  "id": "id0",
  "billing_at": "2016-03-13T12:52:32.123Z",
  "subscription": {
    "id": "id4",
    "code": "code2",
    "start_at": "2016-03-13T12:52:32.123Z",
    "interval": "interval2",
    "interval_count": 234
  }
}
```

