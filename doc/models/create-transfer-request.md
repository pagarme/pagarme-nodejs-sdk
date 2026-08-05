
# Create Transfer Request

Request for creating a transfer

## Structure

`CreateTransferRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amount` | `number` | Required | Transfer amount |
| `metadata` | `Record<string, string>` | Required | Metadata |

## Example

```ts
import { CreateTransferRequest } from 'pagarmeapisdklib';

const createTransferRequest: CreateTransferRequest = {
  amount: 192,
  metadata: {
    'key0': 'metadata3',
    'key1': 'metadata2'
  },
};
```

