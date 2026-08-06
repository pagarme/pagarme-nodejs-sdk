
# Create Register Information Address Request

Register Information Address

## Structure

`CreateRegisterInformationAddressRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `street` | `string` | Required | - |
| `complementary` | `string` | Required | - |
| `streetNumber` | `string` | Required | - |
| `neighborhood` | `string` | Required | - |
| `city` | `string` | Required | - |
| `state` | `string` | Required | - |
| `zipCode` | `string` | Required | - |
| `referencePoint` | `string` | Required | - |

## Example

```ts
import { CreateRegisterInformationAddressRequest } from 'pagarmeapisdklib';

const createRegisterInformationAddressRequest: CreateRegisterInformationAddressRequest = {
  street: 'street8',
  complementary: 'complementary0',
  streetNumber: 'street_number8',
  neighborhood: 'neighborhood4',
  city: 'city8',
  state: 'state4',
  zipCode: 'zip_code2',
  referencePoint: 'reference_point2',
};
```

