
# Create Interest Request

Interest Request

## Structure

`CreateInterestRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `days` | `number` | Required | Days |
| `type` | `string` | Required | Type |
| `amount` | `number` | Required | Amount |

## Example

```ts
import { CreateInterestRequest } from 'pagarmeapisdklib';

const createInterestRequest: CreateInterestRequest = {
  days: 0,
  type: '"percentage" or "flat"',
  amount: 0,
};
```

