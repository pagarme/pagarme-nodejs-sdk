
# Get Customer Response

Response object for getting a customer

## Structure

`GetCustomerResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | - |
| `name` | `string \| undefined` | Optional | - |
| `email` | `string \| undefined` | Optional | - |
| `delinquent` | `boolean \| undefined` | Optional | - |
| `createdAt` | `string \| undefined` | Optional | - |
| `updatedAt` | `string \| undefined` | Optional | - |
| `document` | `string \| undefined` | Optional | - |
| `type` | `string \| undefined` | Optional | - |
| `fbAccessToken` | `string \| undefined` | Optional | - |
| `address` | [`GetAddressResponse \| undefined`](../../doc/models/get-address-response.md) | Optional | - |
| `metadata` | `Record<string, string> \| undefined` | Optional | - |
| `phones` | [`GetPhonesResponse \| undefined`](../../doc/models/get-phones-response.md) | Optional | - |
| `fbId` | `bigint \| undefined` | Optional | - |
| `code` | `string \| undefined` | Optional | Código de referência do cliente no sistema da loja. Max: 52 caracteres |
| `documentType` | `string \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "id": "id0",
  "name": "name0",
  "email": "email6",
  "delinquent": false,
  "created_at": "2016-03-13T12:52:32.123Z"
}
```

