
# Create Register Information Phone Request

Register Information Phone

## Structure

`CreateRegisterInformationPhoneRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `ddd` | `string` | Required | - |
| `number` | `string` | Required | - |
| `type` | `string` | Required | - |

## Example

```ts
import { CreateRegisterInformationPhoneRequest } from 'pagarmeapisdklib';

const createRegisterInformationPhoneRequest: CreateRegisterInformationPhoneRequest = {
  ddd: 'ddd2',
  number: 'number0',
  type: 'type8',
};
```

