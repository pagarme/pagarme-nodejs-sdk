
# Create Fine Request

Fine Request

## Structure

`CreateFineRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `days` | `number` | Required | Days |
| `type` | `string` | Required | Type |
| `amount` | `number` | Required | Amount |

## Example

```ts
import { CreateFineRequest } from 'pagarmeapisdklib';

const createFineRequest: CreateFineRequest = {
  days: 0,
  type: '"percentage" or "flat"',
  amount: 0,
};
```

