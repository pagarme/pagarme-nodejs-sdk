
# Update Order Item Request

Update Order item Request

## Structure

`UpdateOrderItemRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amount` | `number` | Required | - |
| `description` | `string` | Required | - |
| `quantity` | `number` | Required | - |
| `category` | `string` | Required | - |

## Example

```ts
import { UpdateOrderItemRequest } from 'pagarmeapisdklib';

const updateOrderItemRequest: UpdateOrderItemRequest = {
  amount: 202,
  description: 'description0',
  quantity: 60,
  category: 'category8',
};
```

