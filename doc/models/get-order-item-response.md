
# Get Order Item Response

Response object for getting an order item

## Structure

`GetOrderItemResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| null \| undefined` | Optional | Id |
| `type` | `string \| null \| undefined` | Optional | - |
| `description` | `string \| null \| undefined` | Optional | - |
| `amount` | `number \| null \| undefined` | Optional | - |
| `quantity` | `number \| null \| undefined` | Optional | - |
| `category` | `string \| null \| undefined` | Optional | Category |
| `code` | `string \| null \| undefined` | Optional | Code |
| `status` | `string \| null \| undefined` | Optional | - |
| `createdAt` | `string \| null \| undefined` | Optional | - |
| `updatedAt` | `string \| null \| undefined` | Optional | - |

## Example

```ts
import { GetOrderItemResponse } from 'pagarmeapisdklib';

const getOrderItemResponse: GetOrderItemResponse = {
  id: 'id4',
  type: 'type6',
  description: 'description6',
  amount: 212,
  quantity: 70,
};
```

