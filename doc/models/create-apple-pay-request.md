
# Create Apple Pay Request

The ApplePay Token Payment Request

## Structure

`CreateApplePayRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `version` | `string` | Required | The token version |
| `data` | `string` | Required | The cryptography data |
| `header` | [`CreateApplePayHeaderRequest`](../../doc/models/create-apple-pay-header-request.md) | Required | The ApplePay header request |
| `signature` | `string` | Required | Detached PKCS #7 signature, Base64 encoded as string |
| `merchantIdentifier` | `string` | Required | ApplePay Merchant identifier |

## Example

```ts
import { CreateApplePayRequest } from 'pagarmeapisdklib';

const createApplePayRequest: CreateApplePayRequest = {
  version: 'version2',
  data: 'data6',
  header: {},
  signature: 'signature4',
  merchantIdentifier: 'merchant_identifier0',
};
```

