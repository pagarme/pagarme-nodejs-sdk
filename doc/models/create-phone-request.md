
# Create Phone Request

## Structure

`CreatePhoneRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `countryCode` | `string \| undefined` | Optional | - |
| `number` | `string \| undefined` | Optional | - |
| `areaCode` | `string \| undefined` | Optional | - |
| `type` | `string \| null \| undefined` | Optional | - |

## Example

```ts
import { CreatePhoneRequest } from 'pagarmeapisdklib';

const createPhoneRequest: CreatePhoneRequest = {
  countryCode: 'country_code2',
  number: 'number4',
  areaCode: 'area_code8',
  type: 'Type8',
};
```

