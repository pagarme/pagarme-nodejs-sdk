
# Create Register Information Base Request

Request object for RegisterInformation.

## Structure

`CreateRegisterInformationBaseRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `email` | `string` | Required | - |
| `document` | `string` | Required | - |
| `type` | `string` | Required | "individual" ou "corporation" |
| `siteUrl` | `string \| null \| undefined` | Optional | - |
| `phoneNumbers` | [`CreateRegisterInformationPhoneRequest[]`](../../doc/models/create-register-information-phone-request.md) | Required | - |

## Example

```ts
import { CreateRegisterInformationBaseRequest } from 'pagarmeapisdklib';

const createRegisterInformationBaseRequest: CreateRegisterInformationBaseRequest = {
  email: '',
  document: '',
  type: '',
  phoneNumbers: [
    {}
  ],
  siteUrl: 'site_url6',
};
```

