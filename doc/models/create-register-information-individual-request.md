
# Create Register Information Individual Request

## Structure

`CreateRegisterInformationIndividualRequest`

## Inherits From

[`CreateRegisterInformationBaseRequest`](../../doc/models/create-register-information-base-request.md)

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string` | Required | - |
| `motherName` | `string \| null \| undefined` | Optional | - |
| `birthdate` | `string` | Required | - |
| `monthlyIncome` | `bigint` | Required | - |
| `professionalOccupation` | `string` | Required | - |
| `address` | [`CreateRegisterInformationAddressRequest`](../../doc/models/create-register-information-address-request.md) | Required | - |

## Example

```ts
import { CreateRegisterInformationIndividualRequest } from 'pagarmeapisdklib';

const createRegisterInformationIndividualRequest: CreateRegisterInformationIndividualRequest = {
  email: 'email4',
  document: 'document6',
  type: 'type8',
  phoneNumbers: [
    {},
    {
      ddd: '',
      number: '',
      type: '',
    }
  ],
  name: 'name2',
  birthdate: 'birthdate6',
  monthlyIncome: BigInt(20),
  professionalOccupation: 'professional_occupation6',
  address: {},
  motherName: 'mother_name8',
  siteUrl: 'site_url4',
};
```

