
# Get Address Response

Response object for getting an Address

## Structure

`GetAddressResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | - |
| `street` | `string \| undefined` | Optional | - |
| `number` | `string \| undefined` | Optional | - |
| `complement` | `string \| undefined` | Optional | - |
| `zipCode` | `string \| undefined` | Optional | - |
| `neighborhood` | `string \| undefined` | Optional | - |
| `city` | `string \| undefined` | Optional | - |
| `state` | `string \| undefined` | Optional | - |
| `country` | `string \| undefined` | Optional | - |
| `status` | `string \| undefined` | Optional | - |
| `createdAt` | `string \| undefined` | Optional | - |
| `updatedAt` | `string \| undefined` | Optional | - |
| `customer` | [`GetCustomerResponse \| undefined`](../../doc/models/get-customer-response.md) | Optional | - |
| `metadata` | `Record<string, string> \| undefined` | Optional | - |
| `line1` | `string \| undefined` | Optional | Line 1 for address |
| `line2` | `string \| undefined` | Optional | Line 2 for address |
| `deletedAt` | `string \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "id": "id0",
  "street": "street0",
  "number": "number2",
  "complement": "complement4",
  "zip_code": "zip_code4"
}
```

