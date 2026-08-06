
# Get Card Token Response

Card token data

## Structure

`GetCardTokenResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `lastFourDigits` | `string \| null \| undefined` | Optional | - |
| `holderName` | `string \| null \| undefined` | Optional | - |
| `holderDocument` | `string \| null \| undefined` | Optional | - |
| `expMonth` | `number \| null \| undefined` | Optional | - |
| `expYear` | `number \| null \| undefined` | Optional | - |
| `brand` | `string \| null \| undefined` | Optional | - |
| `type` | `string \| null \| undefined` | Optional | - |
| `label` | `string \| null \| undefined` | Optional | - |

## Example

```ts
import { GetCardTokenResponse } from 'pagarmeapisdklib';

const getCardTokenResponse: GetCardTokenResponse = {
  lastFourDigits: 'last_four_digits8',
  holderName: 'holder_name8',
  holderDocument: 'holder_document6',
  expMonth: 232,
  expYear: 64,
};
```

