
# Create KYC Link Response

KYC Link

## Structure

`CreateKYCLinkResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `base64` | `string \| null \| undefined` | Optional | Base64 |
| `url` | `string \| null \| undefined` | Optional | URL |
| `expirationDate` | `string \| null \| undefined` | Optional | Expiration Date |

## Example

```ts
import { CreateKYCLinkResponse } from 'pagarmeapisdklib';

const createKYCLinkResponse: CreateKYCLinkResponse = {
  base64: 'base648',
  url: 'url4',
  expirationDate: 'expiration_date4',
};
```

