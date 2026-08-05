
# Create Phones Request

## Structure

`CreatePhonesRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `homePhone` | [`CreatePhoneRequest \| undefined`](../../doc/models/create-phone-request.md) | Optional | - |
| `mobilePhone` | [`CreatePhoneRequest \| undefined`](../../doc/models/create-phone-request.md) | Optional | - |

## Example

```ts
import { CreatePhonesRequest } from 'pagarmeapisdklib';

const createPhonesRequest: CreatePhonesRequest = {
  homePhone: {},
  mobilePhone: {},
};
```

