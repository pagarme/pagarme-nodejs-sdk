
# Update Subscription Start at Request

Request for updating the start date from a subscription

## Structure

`UpdateSubscriptionStartAtRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `startAt` | `string` | Required | The date when the subscription periods will start |

## Example

```ts
import { UpdateSubscriptionStartAtRequest } from 'pagarmeapisdklib';

const updateSubscriptionStartAtRequest: UpdateSubscriptionStartAtRequest = {
  startAt: '2016-03-13T12:52:32.123Z',
};
```

