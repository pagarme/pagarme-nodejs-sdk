
# Get Customer Response

Response object for getting a customer

## Structure

`GetCustomerResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| null \| undefined` | Optional | - |
| `name` | `string \| null \| undefined` | Optional | - |
| `email` | `string \| null \| undefined` | Optional | - |
| `delinquent` | `boolean \| null \| undefined` | Optional | - |
| `createdAt` | `string \| null \| undefined` | Optional | - |
| `updatedAt` | `string \| null \| undefined` | Optional | - |
| `document` | `string \| null \| undefined` | Optional | - |
| `type` | `string \| null \| undefined` | Optional | - |
| `fbAccessToken` | `string \| null \| undefined` | Optional | - |
| `address` | [`GetAddressResponse \| null \| undefined`](../../doc/models/get-address-response.md) | Optional | - |
| `metadata` | `Record<string, string> \| null \| undefined` | Optional | - |
| `phones` | [`GetPhonesResponse \| null \| undefined`](../../doc/models/get-phones-response.md) | Optional | - |
| `fbId` | `bigint \| null \| undefined` | Optional | - |
| `code` | `string \| null \| undefined` | Optional | Código de referência do cliente no sistema da loja. Max: 52 caracteres |
| `documentType` | `string \| null \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "id": "id4",
  "name": "name4",
  "email": "email2",
  "delinquent": false,
  "created_at": "2016-03-13T12:52:32.123Z"
}
```

