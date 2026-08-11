
# Create Order Item Request

Request for creating an order item

## Structure

`CreateOrderItemRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amount` | `number` | Required | Amount (in cents) |
| `description` | `string` | Required | Description |
| `quantity` | `number` | Required | Quantity |
| `category` | `string` | Required | Category |
| `code` | `string \| undefined` | Optional | The item code passed by the client |

## Example

```ts
import { CreateOrderItemRequest } from 'pagarmeapisdklib';

const createOrderItemRequest: CreateOrderItemRequest = {
  amount: 154,
  description: 'description6',
  quantity: 12,
  category: 'category4',
  code: 'code4',
};
```

