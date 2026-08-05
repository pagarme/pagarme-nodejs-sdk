
# Get Movement Object Fee Collection Response

Generic response object for getting a MovementObjectFeeCollection.

## Structure

`GetMovementObjectFeeCollectionResponse`

## Inherits From

[`GetMovementObjectBaseResponse`](../../doc/models/get-movement-object-base-response.md)

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `description` | `string \| null \| undefined` | Optional | - |
| `paymentDate` | `string \| null \| undefined` | Optional | - |
| `recipientId` | `string \| null \| undefined` | Optional | - |

## Example

```ts
import { GetMovementObjectFeeCollectionResponse } from 'pagarmeapisdklib';

const getMovementObjectFeeCollectionResponse: GetMovementObjectFeeCollectionResponse = {
  description: 'description0',
  paymentDate: 'payment_date8',
  recipientId: 'recipient_id0',
  id: 'id2',
  status: 'status4',
  amount: 'amount4',
  createdAt: 'created_at0',
};
```

