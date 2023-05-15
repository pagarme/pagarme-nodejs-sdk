
# Get Card Response

Response object for getting a credit card

## Structure

`GetCardResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | - |
| `lastFourDigits` | `string \| undefined` | Optional | - |
| `brand` | `string \| undefined` | Optional | - |
| `holderName` | `string \| undefined` | Optional | - |
| `expMonth` | `number \| undefined` | Optional | - |
| `expYear` | `number \| undefined` | Optional | - |
| `status` | `string \| undefined` | Optional | - |
| `createdAt` | `string \| undefined` | Optional | - |
| `updatedAt` | `string \| undefined` | Optional | - |
| `billingAddress` | [`GetBillingAddressResponse \| undefined`](../../doc/models/get-billing-address-response.md) | Optional | - |
| `customer` | [`GetCustomerResponse \| undefined`](../../doc/models/get-customer-response.md) | Optional | - |
| `metadata` | `Record<string, string> \| undefined` | Optional | - |
| `type` | `string \| undefined` | Optional | Card type |
| `holderDocument` | `string \| undefined` | Optional | Document number for the card's holder |
| `deletedAt` | `string \| undefined` | Optional | - |
| `firstSixDigits` | `string \| undefined` | Optional | First six digits |
| `label` | `string \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "id": "id0",
  "last_four_digits": "last_four_digits6",
  "brand": "brand4",
  "holder_name": "holder_name4",
  "exp_month": 42
}
```

