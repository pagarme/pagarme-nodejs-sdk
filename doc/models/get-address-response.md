
# Get Address Response

Response object for getting an Address

## Structure

`GetAddressResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| null \| undefined` | Optional | - |
| `street` | `string \| null \| undefined` | Optional | - |
| `number` | `string \| null \| undefined` | Optional | - |
| `complement` | `string \| null \| undefined` | Optional | - |
| `zipCode` | `string \| null \| undefined` | Optional | - |
| `neighborhood` | `string \| null \| undefined` | Optional | - |
| `city` | `string \| null \| undefined` | Optional | - |
| `state` | `string \| null \| undefined` | Optional | - |
| `country` | `string \| null \| undefined` | Optional | - |
| `status` | `string \| null \| undefined` | Optional | - |
| `createdAt` | `string \| null \| undefined` | Optional | - |
| `updatedAt` | `string \| null \| undefined` | Optional | - |
| `customer` | [`GetCustomerResponse \| null \| undefined`](../../doc/models/get-customer-response.md) | Optional | - |
| `metadata` | `Record<string, string> \| null \| undefined` | Optional | - |
| `line1` | `string \| null \| undefined` | Optional | Line 1 for address |
| `line2` | `string \| null \| undefined` | Optional | Line 2 for address |
| `deletedAt` | `string \| null \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "id": "id2",
  "street": "street2",
  "number": "number0",
  "complement": "complement8",
  "zip_code": "zip_code6"
}
```

