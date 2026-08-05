
# Get Register Information Address Response

Response object for getting an RegisterInformationAddress

## Structure

`GetRegisterInformationAddressResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `street` | `string \| null \| undefined` | Optional | - |
| `complementary` | `string \| null \| undefined` | Optional | - |
| `streetNumber` | `string \| null \| undefined` | Optional | - |
| `neighborhood` | `string \| null \| undefined` | Optional | - |
| `city` | `string \| null \| undefined` | Optional | - |
| `state` | `string \| null \| undefined` | Optional | - |
| `zipCode` | `string \| null \| undefined` | Optional | - |
| `referencePoint` | `string \| null \| undefined` | Optional | - |

## Example

```ts
import { GetRegisterInformationAddressResponse } from 'pagarmeapisdklib';

const getRegisterInformationAddressResponse: GetRegisterInformationAddressResponse = {
  street: 'street4',
  complementary: 'complementary6',
  streetNumber: 'street_number4',
  neighborhood: 'neighborhood0',
  city: 'city4',
};
```

