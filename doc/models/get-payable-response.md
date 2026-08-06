
# Get Payable Response

Response object for getting an payable

## Structure

`GetPayableResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | Payable Identifier |
| `status` | `string` | Required | Payable status |
| `amount` | `number` | Required | Payable amount in cents |
| `fee` | `number \| null \| undefined` | Optional | Payable fee amount in cents |
| `anticipationFee` | `number \| null \| undefined` | Optional | Antecipation fee amount in cents |
| `fraudCoverageFee` | `number \| null \| undefined` | Optional | Fraud coverage fee amount in cents |
| `installment` | `number \| null \| undefined` | Optional | Number of installment |
| `gatewayId` | `string \| null` | Required | Payment gateway identifier<br><br>**Default**: `'null'` |
| `chargeId` | `string \| null` | Required | Charge identifier<br><br>**Default**: `'null'` |
| `splitId` | `string \| null` | Required | **Default**: `'null'` |
| `bulkAnticipationId` | `string \| null` | Required | **Default**: `'null'` |
| `anticipationId` | `string \| null \| undefined` | Optional | - |
| `recipientId` | `string \| null` | Required | Recipient identifier |
| `originatorModel` | `string \| null` | Required | **Default**: `'null'` |
| `originatorModelId` | `string \| null` | Required | Originator model identifier<br><br>**Default**: `'null'` |
| `paymentDate` | `string \| null \| undefined` | Optional | Payment Date |
| `originalPaymentDate` | `string \| null` | Required | Original Payment Date |
| `type` | `string \| null \| undefined` | Optional | Type of payable |
| `paymentMethod` | `string \| null` | Required | Payment method of transaction<br><br>**Default**: `'null'` |
| `accrualAt` | `string \| null \| undefined` | Optional | Date issuer identify payment |
| `createdAt` | `string` | Required | Creation date |
| `liquidationArrangementId` | `string \| null \| undefined` | Optional | **Default**: `'null'` |
| `settlementId` | `string \| null` | Required | Settlement identifier  (new in v7.x)<br><br>**Default**: `'null'` |
| `paymentProfileId` | `string \| null` | Required | Operational identifier of merchant inside of payment platform (new in v7.x)<br><br>**Default**: `'null'` |

## Example

```ts
import { GetPayableResponse } from 'pagarmeapisdklib';

const getPayableResponse: GetPayableResponse = {
  id: '5b71f2a8b472ef521b224b75fd13c14e09d37822fd100f2cd425ef5aea02f5bf',
  status: 'paid',
  amount: 1100,
  gatewayId: null,
  chargeId: 'ch_123',
  splitId: null,
  bulkAnticipationId: null,
  recipientId: 're_abcde123fghijk789',
  originatorModel: 'ownership_assignment',
  originatorModelId: null,
  originalPaymentDate: '2025-08-21T03:00:00Z',
  paymentMethod: 'credit_card',
  createdAt: '2025-08-20T10:30:00Z',
  settlementId: '03002e00-edde-6d4c-dd9e-ffaaafac08de',
  paymentProfileId: 'pp_abcde123fghijk789',
  fee: 0,
  anticipationFee: 0,
  fraudCoverageFee: 0,
  installment: 44,
  anticipationId: 'anticipation_id6',
  paymentDate: '2025-08-18T03:00:00Z',
  type: 'credit',
  accrualAt: '2023-08-21T12:51:28Z',
  liquidationArrangementId: null,
};
```

