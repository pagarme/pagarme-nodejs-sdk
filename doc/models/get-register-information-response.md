
# Get Register Information Response

Response object for getting an RegisterInformationResponse

## Structure

`GetRegisterInformationResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `email` | `string \| null \| undefined` | Optional | - |
| `document` | `string \| null \| undefined` | Optional | - |
| `type` | `string \| null \| undefined` | Optional | - |
| `siteUrl` | `string \| null \| undefined` | Optional | - |
| `phoneNumbers` | [`GetPhoneNumberResponse[] \| null \| undefined`](../../doc/models/get-phone-number-response.md) | Optional | - |
| `name` | `string \| null \| undefined` | Optional | - |
| `motherName` | `string \| null \| undefined` | Optional | - |
| `birthdate` | `string \| null \| undefined` | Optional | - |
| `monthlyIncome` | `string \| null \| undefined` | Optional | - |
| `professionalOccupation` | `string \| null \| undefined` | Optional | - |
| `address` | [`GetRegisterInformationAddressResponse \| null \| undefined`](../../doc/models/get-register-information-address-response.md) | Optional | - |
| `companyName` | `string \| null \| undefined` | Optional | - |
| `tradingName` | `string \| null \| undefined` | Optional | - |
| `annualRevenue` | `string \| null \| undefined` | Optional | - |
| `corporationType` | `string \| null \| undefined` | Optional | - |
| `foundingDate` | `string \| null \| undefined` | Optional | - |
| `cnae` | `string \| null \| undefined` | Optional | - |
| `mainAddress` | [`GetRegisterInformationAddressResponse \| null \| undefined`](../../doc/models/get-register-information-address-response.md) | Optional | - |
| `managingPartners` | [`GetManagingPartnerResponse[] \| null \| undefined`](../../doc/models/get-managing-partner-response.md) | Optional | - |

## Example

```ts
import { GetRegisterInformationResponse } from 'pagarmeapisdklib';

const getRegisterInformationResponse: GetRegisterInformationResponse = {
  email: 'email4',
  document: 'document6',
  type: 'type2',
  siteUrl: 'site_url4',
  phoneNumbers: [
    null,
    {
    }
  ],
};
```

