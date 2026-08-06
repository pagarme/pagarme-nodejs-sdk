
# Get Card Response

Response object for getting a credit card

## Structure

`GetCardResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| null \| undefined` | Optional | - |
| `lastFourDigits` | `string \| null \| undefined` | Optional | - |
| `brand` | `string \| null \| undefined` | Optional | - |
| `holderName` | `string \| null \| undefined` | Optional | - |
| `expMonth` | `number \| null \| undefined` | Optional | - |
| `expYear` | `number \| null \| undefined` | Optional | - |
| `status` | `string \| null \| undefined` | Optional | - |
| `createdAt` | `string \| null \| undefined` | Optional | - |
| `updatedAt` | `string \| null \| undefined` | Optional | - |
| `billingAddress` | [`GetBillingAddressResponse \| null \| undefined`](../../doc/models/get-billing-address-response.md) | Optional | - |
| `customer` | [`GetCustomerResponse \| null \| undefined`](../../doc/models/get-customer-response.md) | Optional | - |
| `metadata` | `Record<string, string> \| null \| undefined` | Optional | - |
| `type` | `string \| null \| undefined` | Optional | Card type |
| `holderDocument` | `string \| null \| undefined` | Optional | Document number for the card's holder |
| `deletedAt` | `string \| null \| undefined` | Optional | - |
| `firstSixDigits` | `string \| null \| undefined` | Optional | First six digits |
| `label` | `string \| null \| undefined` | Optional | - |

## Example

```ts
import { GetCardResponse } from 'pagarmeapisdklib';

const getCardResponse: GetCardResponse = {
  id: 'id6',
  lastFourDigits: 'last_four_digits2',
  brand: 'brand0',
  holderName: 'holder_name2',
  expMonth: 2,
};
```

