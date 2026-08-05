
# Update Subscription Card Request

Request for updating the card from a subscription

## Structure

`UpdateSubscriptionCardRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `card` | [`CreateCardRequest`](../../doc/models/create-card-request.md) | Required | Credit card data |
| `cardId` | `string` | Required | Credit card id |
| `indirectAcceptor` | `string \| undefined` | Optional | Business model identifier |

## Example

```ts
import { UpdateSubscriptionCardRequest } from 'pagarmeapisdklib';

const updateSubscriptionCardRequest: UpdateSubscriptionCardRequest = {
  card: {
    number: 'number6',
    holderName: 'holder_name2',
    expMonth: 228,
    expYear: 68,
    cvv: 'cvv4',
    type: 'credit',
  },
  cardId: '',
  indirectAcceptor: 'indirect_acceptor6',
};
```

