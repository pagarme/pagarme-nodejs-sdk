
# Create Anticipation Request

Request for creating an anticipation

## Structure

`CreateAnticipationRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amount` | `number` | Required | Amount requested for the anticipation |
| `timeframe` | `string` | Required | Timeframe |
| `paymentDate` | `string` | Required | Payment date |

## Example

```ts
import { CreateAnticipationRequest } from 'pagarmeapisdklib';

const createAnticipationRequest: CreateAnticipationRequest = {
  amount: 84,
  timeframe: 'timeframe2',
  paymentDate: '2016-03-13T12:52:32.123Z',
};
```

