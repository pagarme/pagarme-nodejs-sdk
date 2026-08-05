
# Create Transfer

## Structure

`CreateTransfer`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amount` | `number` | Required | - |
| `sourceId` | `string` | Required | - |
| `targetId` | `string` | Required | - |
| `metadata` | `string[] \| undefined` | Optional | - |

## Example

```ts
import { CreateTransfer } from 'pagarmeapisdklib';

const createTransfer: CreateTransfer = {
  amount: 130,
  sourceId: 'source_id6',
  targetId: 'target_id8',
  metadata: [
    'metadata1'
  ],
};
```

