
# Create Price Bracket Request

Request for creating a price bracket

## Structure

`CreatePriceBracketRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `startQuantity` | `number` | Required | Start quantity |
| `price` | `number` | Required | Price |
| `endQuantity` | `number \| undefined` | Optional | End quantity |
| `overagePrice` | `number \| undefined` | Optional | Overage price |

## Example (as JSON)

```json
{
  "start_quantity": 154,
  "price": 164,
  "end_quantity": 162,
  "overage_price": 176
}
```

