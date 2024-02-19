
# Get Managing Partner Response

Response object for getting an ManagingPartnerResponse

## Structure

`GetManagingPartnerResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string \| null \| undefined` | Optional | - |
| `email` | `string \| null \| undefined` | Optional | - |
| `document` | `string \| null \| undefined` | Optional | - |
| `type` | `string \| null \| undefined` | Optional | - |
| `motherName` | `string \| null \| undefined` | Optional | - |
| `birthdate` | `string \| null \| undefined` | Optional | - |
| `monthlyIncome` | `string \| null \| undefined` | Optional | - |
| `professionalOccupation` | `string \| null \| undefined` | Optional | - |
| `selfDeclaredRepresentative` | `boolean \| undefined` | Optional | - |
| `address` | [`GetRegisterInformationAddressResponse \| null \| undefined`](../../doc/models/get-register-information-address-response.md) | Optional | - |
| `phoneNumbers` | [`GetPhoneNumberResponse[] \| null \| undefined`](../../doc/models/get-phone-number-response.md) | Optional | - |

## Example (as JSON)

```json
{
  "name": "name0",
  "email": "email6",
  "document": "document6",
  "type": "type0",
  "mother_name": "mother_name6"
}
```

