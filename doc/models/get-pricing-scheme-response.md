
# Get Pricing Scheme Response

Response object for getting a pricing scheme

## Structure

`GetPricingSchemeResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `price` | `number \| undefined` | Optional | - |
| `schemeType` | `string \| undefined` | Optional | - |
| `priceBrackets` | [`GetPriceBracketResponse[] \| undefined`](../../doc/models/get-price-bracket-response.md) | Optional | - |
| `minimumPrice` | `number \| undefined` | Optional | - |
| `percentage` | `number \| undefined` | Optional | percentual value used in pricing_scheme Percent |

## Example (as JSON)

```json
{
  "price": null,
  "scheme_type": null,
  "price_brackets": null,
  "minimum_price": null,
  "percentage": null
}
```

