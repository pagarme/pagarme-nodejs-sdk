
# Create Checkout Pix Payment Request

Checkout pix payment request

## Structure

`CreateCheckoutPixPaymentRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `expiresAt` | `string \| undefined` | Optional | Expires at |
| `expiresIn` | `number \| undefined` | Optional | Expires in |
| `additionalInformation` | [`PixAdditionalInformation[] \| undefined`](../../doc/models/pix-additional-information.md) | Optional | Additional information |

## Example

```ts
import { CreateCheckoutPixPaymentRequest } from 'pagarmeapisdklib';

const createCheckoutPixPaymentRequest: CreateCheckoutPixPaymentRequest = {
  expiresAt: '2016-03-13T12:52:32.123Z',
  expiresIn: 68,
  additionalInformation: [
    {},
    {
    }
  ],
};
```

