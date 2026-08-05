
# Get Checkout Bank Transfer Payment Response

Bank transfer checkout response

## Structure

`GetCheckoutBankTransferPaymentResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `bank` | `string[] \| null \| undefined` | Optional | bank list response |

## Example

```ts
import { GetCheckoutBankTransferPaymentResponse } from 'pagarmeapisdklib';

const getCheckoutBankTransferPaymentResponse: GetCheckoutBankTransferPaymentResponse = {
  bank: [
    'bank3',
    'bank4'
  ],
};
```

