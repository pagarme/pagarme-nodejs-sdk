
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
  "amount": null,
  "description": null,
  "pricing_scheme": null,
  "price_bracket": null,
  "quantity": null,
  "name": null,
  "subscription_item_id": null
}
```

