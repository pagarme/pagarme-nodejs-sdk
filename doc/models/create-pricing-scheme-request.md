
# Create Pricing Scheme Request

Request for creating a pricing scheme

## Structure

`CreatePricingSchemeRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `schemeType` | `string` | Required | Scheme type |
| `priceBrackets` | [`CreatePriceBracketRequest[] \| undefined`](../../doc/models/create-price-bracket-request.md) | Optional | Price brackets |
| `price` | `number \| undefined` | Optional | Price |
| `minimumPrice` | `number \| undefined` | Optional | Minimum price |
| `percentage` | `number \| undefined` | Optional | percentual value used in pricing_scheme Percent |

## Example (as JSON)

```json
{
  "scheme_type": "scheme_type2",
  "price_brackets": [
    {
      "start_quantity": 144,
      "price": 174,
      "end_quantity": 152,
      "overage_price": 166
    },
    {
      "start_quantity": 144,
      "price": 174,
      "end_quantity": 152,
      "overage_price": 166
    }
  ],
  "price": 84,
  "minimum_price": 12,
  "percentage": 157.1
}
```

