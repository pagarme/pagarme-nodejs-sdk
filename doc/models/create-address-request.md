
# Create Address Request

Request for creating a new Address

## Structure

`CreateAddressRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `street` | `string` | Required | Street |
| `number` | `string` | Required | Number |
| `zipCode` | `string` | Required | The zip code containing only numbers. No special characters or spaces. |
| `neighborhood` | `string` | Required | Neighborhood |
| `city` | `string` | Required | City |
| `state` | `string` | Required | State |
| `country` | `string` | Required | Country. Must be entered using ISO 3166-1 alpha-2 format. See https://pt.wikipedia.org/wiki/ISO_3166-1_alfa-2 |
| `complement` | `string` | Required | Complement |
| `metadata` | `Record<string, string>` | Required | Metadata |
| `line1` | `string` | Required | Line 1 for address |
| `line2` | `string` | Required | Line 2 for address |

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
  "metadata": {
    "key0": "metadata3",
    "key1": "metadata4",
    "key2": "metadata5"
  },
  "line_1": "line_16",
  "line_2": "line_28"
}
```

