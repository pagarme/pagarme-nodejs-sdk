
# Create Customer Request

Request for creating a new customer

## Structure

`CreateCustomerRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string` | Required | Name |
| `email` | `string` | Required | Email |
| `document` | `string` | Required | Document number. Only numbers, no special characters. |
| `type` | `string` | Required | Person type. Can be either 'individual' or 'company' |
| `address` | [`CreateAddressRequest`](../../doc/models/create-address-request.md) | Required | The customer's address |
| `metadata` | `Record<string, string>` | Required | Metadata |
| `phones` | [`CreatePhonesRequest`](../../doc/models/create-phones-request.md) | Required | - |
| `code` | `string` | Required | Customer code |
| `gender` | `string \| undefined` | Optional | Customer Gender |
| `documentType` | `string \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "name": "{\n    \"name\": \"Tony Stark\"\n}",
  "email": null,
  "document": null,
  "type": null,
  "address": null,
  "metadata": null,
  "phones": null,
  "code": null
}
```

