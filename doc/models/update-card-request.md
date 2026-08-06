
# Update Card Request

Request for updating a card

## Structure

`UpdateCardRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `holderName` | `string` | Required | Holder name |
| `expMonth` | `number` | Required | Expiration month |
| `expYear` | `number` | Required | Expiration year |
| `billingAddressId` | `string \| null \| undefined` | Optional | Id of the address to be used as billing address |
| `billingAddress` | [`CreateAddressRequest`](../../doc/models/create-address-request.md) | Required | Billing address |
| `metadata` | `Record<string, string>` | Required | Metadata |
| `label` | `string` | Required | - |

## Example

```ts
import { UpdateCardRequest } from 'pagarmeapisdklib';

const updateCardRequest: UpdateCardRequest = {
  holderName: 'holder_name8',
  expMonth: 80,
  expYear: 216,
  billingAddress: {},
  metadata: {
    'key0': 'metadata9',
    'key1': 'metadata8',
    'key2': 'metadata7'
  },
  label: 'label2',
  billingAddressId: 'billing_address_id8',
};
```

