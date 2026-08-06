
# Create Managing Partner Request

Managing Partner Request

## Structure

`CreateManagingPartnerRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string` | Required | - |
| `email` | `string` | Required | - |
| `document` | `string` | Required | - |
| `motherName` | `string \| null \| undefined` | Optional | - |
| `birthdate` | `string` | Required | - |
| `monthlyIncome` | `bigint` | Required | - |
| `professionalOccupation` | `string` | Required | - |
| `selfDeclaredLegalRepresentative` | `boolean` | Required | - |
| `address` | [`CreateRegisterInformationAddressRequest`](../../doc/models/create-register-information-address-request.md) | Required | - |
| `phoneNumbers` | [`CreateRegisterInformationPhoneRequest[]`](../../doc/models/create-register-information-phone-request.md) | Required | - |

## Example

```ts
import { CreateManagingPartnerRequest } from 'pagarmeapisdklib';

const createManagingPartnerRequest: CreateManagingPartnerRequest = {
  name: '',
  email: '',
  document: '',
  birthdate: '',
  monthlyIncome: 0n,
  professionalOccupation: '',
  selfDeclaredLegalRepresentative: false,
  address: {},
  phoneNumbers: [
    {}
  ],
  motherName: 'mother_name8',
};
```

