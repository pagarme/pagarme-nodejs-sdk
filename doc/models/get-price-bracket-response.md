
# Get Price Bracket Response

Response object for getting a price bracket

## Structure

`GetPriceBracketResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `startQuantity` | `number \| null` | Required | - |
| `price` | `number \| null` | Required | - |
| `endQuantity` | `number \| undefined` | Optional | - |
| `overagePrice` | `number \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "start_quantity": 46,
  "price": 16,
  "end_quantity": null,
  "overage_price": null
}
```

