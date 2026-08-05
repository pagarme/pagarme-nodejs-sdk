
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

## Example

```ts
import { GetManagingPartnerResponse } from 'pagarmeapisdklib';

const getManagingPartnerResponse: GetManagingPartnerResponse = {
  name: 'name8',
  email: 'email8',
  document: 'document2',
  type: 'type8',
  motherName: 'mother_name4',
};
```

