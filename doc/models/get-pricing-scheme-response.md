
# Get Pricing Scheme Response

Response object for getting a pricing scheme

## Structure

`GetPricingSchemeResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `price` | `number \| null \| undefined` | Optional | - |
| `schemeType` | `string \| null \| undefined` | Optional | - |
| `priceBrackets` | [`GetPriceBracketResponse[] \| null \| undefined`](../../doc/models/get-price-bracket-response.md) | Optional | - |
| `minimumPrice` | `number \| null \| undefined` | Optional | - |
| `percentage` | `number \| null \| undefined` | Optional | percentual value used in pricing_scheme Percent |

## Example (as JSON)

```json
{
  "price": 182,
  "scheme_type": "scheme_type8",
  "price_brackets": [
    {
      "start_quantity": 144,
      "price": 174,
      "end_quantity": 152,
      "overage_price": 166
    }
  ],
  "minimum_price": 170,
  "percentage": 166.36
}
```

