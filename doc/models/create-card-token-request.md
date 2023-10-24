
# Create Card Token Request

Card token data

## Structure

`CreateCardTokenRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `number` | `string` | Required | Credit card number |
| `holderName` | `string` | Required | Holder name, as written on the card |
| `expMonth` | `number` | Required | The expiration month |
| `expYear` | `number` | Required | The expiration year, that can be informed with 2 or 4 digits |
| `cvv` | `string` | Required | The card's security code |
| `brand` | `string` | Required | Card brand |
| `label` | `string` | Required | - |

## Example (as JSON)

```json
{
  "number": "number8",
  "holder_name": "holder_name6",
  "exp_month": 168,
  "exp_year": 208,
  "cvv": "cvv8",
  "brand": "brand4",
  "label": "label0"
}
```

