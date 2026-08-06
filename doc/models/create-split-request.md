
# Create Split Request

Split

## Structure

`CreateSplitRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | `string` | Required | Split type |
| `amount` | `number` | Required | Amount |
| `recipientId` | `string` | Required | Recipient id |
| `options` | [`CreateSplitOptionsRequest \| undefined`](../../doc/models/create-split-options-request.md) | Optional | The split options request |
| `splitRuleId` | `string \| undefined` | Optional | Rule code used in cancellation. |

## Example

```ts
import { CreateSplitRequest } from 'pagarmeapisdklib';

const createSplitRequest: CreateSplitRequest = {
  type: 'type8',
  amount: 166,
  recipientId: 'recipient_id8',
  options: {},
  splitRuleId: 'split_rule_id4',
};
```

