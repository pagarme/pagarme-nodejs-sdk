
# Create Cancel Charge Request

Request for canceling a charge.

## Structure

`CreateCancelChargeRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amount` | `number \| undefined` | Optional | The amount that will be canceled. |
| `splitRules` | [`CreateCancelChargeSplitRulesRequest[] \| undefined`](../../doc/models/create-cancel-charge-split-rules-request.md) | Optional | The split rules request |
| `split` | [`CreateSplitRequest[] \| undefined`](../../doc/models/create-split-request.md) | Optional | Splits |
| `operationReference` | `string` | Required | - |
| `bankAccount` | [`CreateBankAccountRefundingDTO \| undefined`](../../doc/models/create-bank-account-refunding-dto.md) | Optional | - |

## Example

```ts
import { CreateCancelChargeRequest } from 'pagarmeapisdklib';

const createCancelChargeRequest: CreateCancelChargeRequest = {
  operationReference: 'operation_reference0',
  amount: 222,
  splitRules: [
    {},
    {
      id: '',
      amount: 0,
      type: '',
    },
    {
      id: '',
      amount: 0,
      type: '',
    }
  ],
  split: [
    {},
    {
      type: '',
      amount: 0,
      recipientId: '',
    },
    {
      type: '',
      amount: 0,
      recipientId: '',
    }
  ],
  bankAccount: {},
};
```

