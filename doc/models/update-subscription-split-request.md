
# Update Subscription Split Request

## Structure

`UpdateSubscriptionSplitRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `enabled` | `boolean` | Required | Defines if the split is enabled |
| `rules` | [`CreateSplitRequest[]`](../../doc/models/create-split-request.md) | Required | Split |

## Example

```ts
import { UpdateSubscriptionSplitRequest } from 'pagarmeapisdklib';

const updateSubscriptionSplitRequest: UpdateSubscriptionSplitRequest = {
  enabled: false,
  rules: [
    {}
  ],
};
```

