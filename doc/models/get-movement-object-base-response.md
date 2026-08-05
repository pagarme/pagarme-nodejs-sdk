
# Get Movement Object Base Response

Generic response object for getting a MovementObjectBase.

## Structure

`GetMovementObjectBaseResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `object` | `string \| undefined` | Optional | - |
| `id` | `string \| null \| undefined` | Optional | - |
| `status` | `string \| null \| undefined` | Optional | - |
| `amount` | `string \| null \| undefined` | Optional | - |
| `createdAt` | `string \| null \| undefined` | Optional | - |
| `type` | `string \| null \| undefined` | Optional | - |
| `chargeId` | `string \| null \| undefined` | Optional | - |
| `gatewayId` | `string \| null \| undefined` | Optional | - |

## Example

```ts
import { GetMovementObjectSettlementResponse } from 'pagarmeapisdklib';

const getMovementObjectBaseResponse: GetMovementObjectSettlementResponse = {
  product: 'product2',
  brand: 'brand6',
  paymentDate: 'payment_date4',
  recipientId: 'recipient_id2',
  documentType: 'document_type0',
  id: 'id2',
  status: 'status4',
  amount: 'amount4',
  createdAt: 'created_at0',
};
```

