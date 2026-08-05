
# Create Withdraw Request

## Structure

`CreateWithdrawRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amount` | `number` | Required | - |
| `metadata` | `Record<string, string> \| undefined` | Optional | - |

## Example

```ts
import { CreateWithdrawRequest } from 'pagarmeapisdklib';

const createWithdrawRequest: CreateWithdrawRequest = {
  amount: 46,
  metadata: {
    'key0': 'metadata5',
    'key1': 'metadata6'
  },
};
```

