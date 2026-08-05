
# Get Subscription Split Response

## Structure

`GetSubscriptionSplitResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `enabled` | `boolean \| null \| undefined` | Optional | Defines if the split is enabled |
| `rules` | [`GetSplitResponse[] \| null \| undefined`](../../doc/models/get-split-response.md) | Optional | Split |

## Example

```ts
import { GetSubscriptionSplitResponse } from 'pagarmeapisdklib';

const getSubscriptionSplitResponse: GetSubscriptionSplitResponse = {
  enabled: false,
  rules: [
    null,
    {
    }
  ],
};
```

