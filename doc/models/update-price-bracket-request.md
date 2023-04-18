
# Update Price Bracket Request

Request for updating a price bracket

## Structure

`UpdatePriceBracketRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `startQuantity` | `number` | Required | Start quantity of the bracket |
| `price` | `number` | Required | Price |
| `endQuantity` | `number \| undefined` | Optional | End quantity of the bracket |
| `overagePrice` | `number \| undefined` | Optional | Overage price |

## Example (as JSON)

```json
{
  "start_quantity": 46,
  "price": 16,
  "end_quantity": 54,
  "overage_price": 68
}
```

