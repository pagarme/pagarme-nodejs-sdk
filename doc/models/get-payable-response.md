
# Get Payable Response

Response object for getting an payable

## Structure

`GetPayableResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `bigint \| null \| undefined` | Optional | - |
| `status` | `string \| null \| undefined` | Optional | - |
| `amount` | `number \| null \| undefined` | Optional | - |
| `fee` | `number \| null \| undefined` | Optional | - |
| `anticipationFee` | `number \| null \| undefined` | Optional | - |
| `fraudCoverageFee` | `number \| null \| undefined` | Optional | - |
| `installment` | `number \| null \| undefined` | Optional | - |
| `gatewayId` | `bigint \| null \| undefined` | Optional | - |
| `chargeId` | `string \| null \| undefined` | Optional | - |
| `splitId` | `string \| null \| undefined` | Optional | - |
| `bulkAnticipationId` | `string \| null \| undefined` | Optional | - |
| `anticipationId` | `string \| null \| undefined` | Optional | - |
| `recipientId` | `string \| null \| undefined` | Optional | - |
| `originatorModel` | `string \| null \| undefined` | Optional | - |
| `originatorModelId` | `string \| null \| undefined` | Optional | - |
| `paymentDate` | `string \| null \| undefined` | Optional | - |
| `originalPaymentDate` | `string \| null \| undefined` | Optional | - |
| `type` | `string \| null \| undefined` | Optional | - |
| `paymentMethod` | `string \| null \| undefined` | Optional | - |
| `accrualAt` | `string \| null \| undefined` | Optional | - |
| `createdAt` | `string \| null \| undefined` | Optional | - |
| `liquidationArrangementId` | `string \| null \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "id": 134,
  "status": "status8",
  "amount": 24,
  "fee": 190,
  "anticipation_fee": 118
}
```

