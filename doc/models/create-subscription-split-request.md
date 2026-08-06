
# Create Subscription Split Request

## Structure

`CreateSubscriptionSplitRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `enabled` | `boolean` | Required | Defines if the split is enabled |
| `rules` | [`CreateSplitRequest[]`](../../doc/models/create-split-request.md) | Required | Split |

## Example

```ts
import { CreateSubscriptionSplitRequest } from 'pagarmeapisdklib';

const createSubscriptionSplitRequest: CreateSubscriptionSplitRequest = {
  enabled: false,
  rules: [
    {}
  ],
};
```

