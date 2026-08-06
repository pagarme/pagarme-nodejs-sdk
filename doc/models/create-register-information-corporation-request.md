
# Create Register Information Corporation Request

## Structure

`CreateRegisterInformationCorporationRequest`

## Inherits From

[`CreateRegisterInformationBaseRequest`](../../doc/models/create-register-information-base-request.md)

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `companyName` | `string` | Required | - |
| `tradingName` | `string` | Required | - |
| `annualRevenue` | `bigint` | Required | - |
| `corporationType` | `string \| null \| undefined` | Optional | - |
| `foundingDate` | `string \| null \| undefined` | Optional | - |
| `cnae` | `string \| null \| undefined` | Optional | - |
| `managingPartners` | [`CreateManagingPartnerRequest[]`](../../doc/models/create-managing-partner-request.md) | Required | - |
| `mainAddress` | [`CreateRegisterInformationAddressRequest`](../../doc/models/create-register-information-address-request.md) | Required | - |

## Example

```ts
import {
  CreateRegisterInformationCorporationRequest,
} from 'pagarmeapisdklib';

const createRegisterInformationCorporationRequest: CreateRegisterInformationCorporationRequest = {
  email: '',
  document: '',
  type: '',
  phoneNumbers: [
    {}
  ],
  companyName: '',
  tradingName: '',
  annualRevenue: 0n,
  managingPartners: [
    {
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
      motherName: 'mother_name0',
    }
  ],
  mainAddress: {},
  corporationType: 'corporation_type0',
  foundingDate: 'founding_date0',
  cnae: 'cnae0',
  siteUrl: 'site_url4',
};
```

