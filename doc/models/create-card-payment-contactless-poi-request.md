
# Create Card Payment Contactless POI Request

## Structure

`CreateCardPaymentContactlessPOIRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `systemName` | `string` | Required | system name |
| `model` | `string` | Required | model |
| `provider` | `string` | Required | provider |
| `serialNumber` | `string` | Required | serial number |
| `versionNumber` | `string` | Required | version number |

## Example

```ts
import { CreateCardPaymentContactlessPOIRequest } from 'pagarmeapisdklib';

const createCardPaymentContactlessPOIRequest: CreateCardPaymentContactlessPOIRequest = {
  systemName: 'system_name4',
  model: 'model2',
  provider: 'provider4',
  serialNumber: 'serial_number8',
  versionNumber: 'version_number4',
};
```

