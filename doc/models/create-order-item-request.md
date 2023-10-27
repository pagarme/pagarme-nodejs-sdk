
# Create Order Item Request

Request for creating an order item

## Structure

`CreateOrderItemRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amount` | `number` | Required | Amount |
| `description` | `string` | Required | Description |
| `quantity` | `number` | Required | Quantity |
| `category` | `string` | Required | Category |
| `code` | `string \| undefined` | Optional | The item code passed by the client |

## Example (as JSON)

```json
{
  "amount": 102,
  "description": "description4",
  "quantity": 216,
  "category": "category4",
  "code": "code4"
}
```

