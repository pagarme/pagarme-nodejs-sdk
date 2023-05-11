
# Get Invoice Item Response

Response object for getting an invoice item

## Structure

`GetInvoiceItemResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amount` | `number \| undefined` | Optional | - |
| `description` | `string \| undefined` | Optional | - |
| `pricingScheme` | [`GetPricingSchemeResponse \| undefined`](../../doc/models/get-pricing-scheme-response.md) | Optional | - |
| `priceBracket` | [`GetPriceBracketResponse \| undefined`](../../doc/models/get-price-bracket-response.md) | Optional | - |
| `quantity` | `number \| undefined` | Optional | - |
| `name` | `string \| undefined` | Optional | - |
| `subscriptionItemId` | `string \| undefined` | Optional | Subscription Item Id |

## Example (as JSON)

```json
{
  "amount": 46,
  "description": "description0",
  "pricing_scheme": {
    "price": 166,
    "scheme_type": "scheme_type8",
    "price_brackets": [
      {
        "start_quantity": 119,
        "price": 57,
        "end_quantity": 127,
        "overage_price": 141
      },
      {
        "start_quantity": 120,
        "price": 58,
        "end_quantity": 128,
        "overage_price": 142
      },
      {
        "start_quantity": 121,
        "price": 59,
        "end_quantity": 129,
        "overage_price": 143
      }
    ],
    "minimum_price": 6,
    "percentage": 251.76
  },
  "price_bracket": {
    "start_quantity": 164,
    "price": 154,
    "end_quantity": 172,
    "overage_price": 186
  },
  "quantity": 68
}
```

