
# Get Period Response

Response object for getting a period

## Structure

`GetPeriodResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `startAt` | `string \| null \| undefined` | Optional | - |
| `endAt` | `string \| null \| undefined` | Optional | - |
| `id` | `string \| null \| undefined` | Optional | - |
| `billingAt` | `string \| null \| undefined` | Optional | - |
| `subscription` | [`GetSubscriptionResponse \| null \| undefined`](../../doc/models/get-subscription-response.md) | Optional | - |
| `status` | `string \| null \| undefined` | Optional | - |
| `duration` | `number \| null \| undefined` | Optional | - |
| `createdAt` | `string \| null \| undefined` | Optional | - |
| `updatedAt` | `string \| null \| undefined` | Optional | - |
| `cycle` | `number \| null \| undefined` | Optional | - |

## Example

```ts
import { GetPeriodResponse } from 'pagarmeapisdklib';

const getPeriodResponse: GetPeriodResponse = {
  startAt: '2016-03-13T12:52:32.123Z',
  endAt: '2016-03-13T12:52:32.123Z',
  id: 'id4',
  billingAt: '2016-03-13T12:52:32.123Z',
  subscription: null,
};
```

