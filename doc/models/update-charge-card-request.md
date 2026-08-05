
# Update Charge Card Request

Request for updating card data

## Structure

`UpdateChargeCardRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `updateSubscription` | `boolean` | Required | Indicates if the subscriptions using this card must also be updated |
| `cardId` | `string` | Required | Card id |
| `card` | [`CreateCardRequest`](../../doc/models/create-card-request.md) | Required | Card data |
| `recurrence` | `boolean` | Required | Indicates a recurrence |
| `initiatedType` | `string \| undefined` | Optional | - |
| `recurrenceModel` | `string \| undefined` | Optional | - |
| `paymentOrigin` | [`CreatePaymentOriginRequest \| undefined`](../../doc/models/create-payment-origin-request.md) | Optional | - |
| `indirectAcceptor` | `string \| undefined` | Optional | Business model identifier |

## Example

```ts
import { UpdateChargeCardRequest } from 'pagarmeapisdklib';

const updateChargeCardRequest: UpdateChargeCardRequest = {
  updateSubscription: false,
  cardId: '',
  card: {
    number: 'number6',
    holderName: 'holder_name2',
    expMonth: 228,
    expYear: 68,
    cvv: 'cvv4',
    type: 'credit',
  },
  recurrence: false,
  initiatedType: 'initiated_type4',
  recurrenceModel: 'recurrence_model2',
  paymentOrigin: {},
  indirectAcceptor: 'indirect_acceptor8',
};
```

