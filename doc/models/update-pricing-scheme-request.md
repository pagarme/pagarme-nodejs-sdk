
# Update Pricing Scheme Request

Request for updating a pricing scheme

## Structure

`UpdatePricingSchemeRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `schemeType` | `string` | Required | Scheme type |
| `priceBrackets` | [`UpdatePriceBracketRequest[]`](../../doc/models/update-price-bracket-request.md) | Required | Price brackets |
| `price` | `number \| undefined` | Optional | Price |
| `minimumPrice` | `number \| undefined` | Optional | Minimum price |
| `percentage` | `number \| undefined` | Optional | percentual value used in pricing_scheme Percent |

## Example (as JSON)

```json
{
  "scheme_type": "scheme_type0",
  "price_brackets": [
    {
      "start_quantity": 193,
      "price": 125,
      "end_quantity": 201,
      "overage_price": 215
    }
  ],
  "price": 16,
  "minimum_price": 176,
  "percentage": 4.18
}
```

