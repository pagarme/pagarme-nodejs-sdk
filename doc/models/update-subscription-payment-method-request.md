
# Update Subscription Payment Method Request

Request for updating a subscription's payment method

## Structure

`UpdateSubscriptionPaymentMethodRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `paymentMethod` | `string` | Required | The new payment method |
| `cardId` | `string` | Required | Card id |
| `card` | [`CreateCardRequest`](../../doc/models/create-card-request.md) | Required | Card data |
| `cardToken` | `string \| undefined` | Optional | The Card Token |
| `boleto` | [`CreateSubscriptionBoletoRequest \| undefined`](../../doc/models/create-subscription-boleto-request.md) | Optional | Information about fines and interest on the "boleto" used from payment |
| `indirectAcceptor` | `string \| null \| undefined` | Optional | Business model identifier |

## Example

```ts
import { UpdateSubscriptionPaymentMethodRequest } from 'pagarmeapisdklib';

const updateSubscriptionPaymentMethodRequest: UpdateSubscriptionPaymentMethodRequest = {
  paymentMethod: '',
  cardId: '',
  card: {
    number: 'number6',
    holderName: 'holder_name2',
    expMonth: 228,
    expYear: 68,
    cvv: 'cvv4',
    type: 'credit',
  },
  cardToken: 'card_token2',
  boleto: {},
  indirectAcceptor: 'indirect_acceptor4',
};
```

