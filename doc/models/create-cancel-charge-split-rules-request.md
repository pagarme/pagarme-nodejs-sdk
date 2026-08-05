
# Create Cancel Charge Split Rules Request

Creates a refund with split rules

## Structure

`CreateCancelChargeSplitRulesRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | The split rule gateway id |
| `amount` | `number` | Required | The split rule amount |
| `type` | `string` | Required | The amount type (flat ou percentage) |

## Example

```ts
import { CreateCancelChargeSplitRulesRequest } from 'pagarmeapisdklib';

const createCancelChargeSplitRulesRequest: CreateCancelChargeSplitRulesRequest = {
  id: 'id0',
  amount: 140,
  type: 'type0',
};
```

