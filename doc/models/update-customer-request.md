
# Update Customer Request

Request for updating a customer

## Structure

`UpdateCustomerRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string \| undefined` | Optional | Name |
| `email` | `string \| undefined` | Optional | Email |
| `document` | `string \| undefined` | Optional | Document number |
| `type` | `string \| undefined` | Optional | Person type |
| `address` | [`CreateAddressRequest \| undefined`](../../doc/models/create-address-request.md) | Optional | Address |
| `metadata` | `Record<string, string> \| undefined` | Optional | Metadata |
| `phones` | [`CreatePhonesRequest \| undefined`](../../doc/models/create-phones-request.md) | Optional | - |
| `code` | `string \| undefined` | Optional | Código de referência do cliente no sistema da loja. Max: 52 caracteres |
| `gender` | `string \| undefined` | Optional | Gênero do cliente |
| `documentType` | `string \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "name": null,
  "email": null,
  "document": null,
  "type": null,
  "address": null,
  "metadata": null,
  "phones": null,
  "code": null,
  "gender": null,
  "document_type": null
}
```

