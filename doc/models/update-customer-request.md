
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
  "name": "name8",
  "email": "email8",
  "document": "document2",
  "type": "type2",
  "address": {
    "street": "street6",
    "number": "number4",
    "zip_code": "zip_code0",
    "neighborhood": "neighborhood2",
    "city": "city6",
    "state": "state2",
    "country": "country0",
    "complement": "complement2",
    "metadata": {
      "key0": "metadata3",
      "key1": "metadata2",
      "key2": "metadata1"
    },
    "line_1": "line_10",
    "line_2": "line_24"
  }
}
```

