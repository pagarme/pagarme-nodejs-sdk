
# Get Billing Address Response

Response object for getting a billing address

## Structure

`GetBillingAddressResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `street` | `string \| null` | Required | - |
| `number` | `string \| null` | Required | - |
| `zipCode` | `string \| null` | Required | - |
| `neighborhood` | `string \| null` | Required | - |
| `city` | `string \| null` | Required | - |
| `state` | `string \| null` | Required | - |
| `country` | `string \| null` | Required | - |
| `complement` | `string \| null` | Required | - |
| `line1` | `string \| null` | Required | Line 1 for address |
| `line2` | `string \| null` | Required | Line 2 for address |

## Example (as JSON)

```json
{
  "street": "street0",
  "number": "number2",
  "zip_code": "zip_code4",
  "neighborhood": "neighborhood6",
  "city": "city0",
  "state": "state4",
  "country": "country4",
  "complement": "complement4",
  "line_1": "line_16",
  "line_2": "line_28"
}
```

