
# Get Checkout Pix Payment Response

Checkout pix payment response

## Structure

`GetCheckoutPixPaymentResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `expiresAt` | `string \| null \| undefined` | Optional | Expires at |
| `additionalInformation` | [`PixAdditionalInformation[] \| null \| undefined`](../../doc/models/pix-additional-information.md) | Optional | Additional information |

## Example

```ts
import { GetCheckoutPixPaymentResponse } from 'pagarmeapisdklib';

const getCheckoutPixPaymentResponse: GetCheckoutPixPaymentResponse = {
  expiresAt: '2016-03-13T12:52:32.123Z',
  additionalInformation: [
    {}
  ],
};
```

