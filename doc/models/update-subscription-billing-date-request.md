
# Update Subscription Billing Date Request

Request for updating the due date from a subscription

## Structure

`UpdateSubscriptionBillingDateRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `nextBillingAt` | `string` | Required | The date when the next subscription billing must occur |

## Example

```ts
import { UpdateSubscriptionBillingDateRequest } from 'pagarmeapisdklib';

const updateSubscriptionBillingDateRequest: UpdateSubscriptionBillingDateRequest = {
  nextBillingAt: '2016-03-13T12:52:32.123Z',
};
```

