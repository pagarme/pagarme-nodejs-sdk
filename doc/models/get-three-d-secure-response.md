
# Get Three D Secure Response

3D-S payment authentication response

## Structure

`GetThreeDSecureResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `mpi` | `string \| null \| undefined` | Optional | MPI Vendor |
| `eci` | `string \| null \| undefined` | Optional | Electronic Commerce Indicator (ECI) (Opcional) |
| `cavv` | `string \| null \| undefined` | Optional | Online payment cryptogram, definido pelo 3-D Secure. |
| `transactionId` | `string \| null \| undefined` | Optional | Identificador da transação (XID) |
| `successUrl` | `string \| null \| undefined` | Optional | Url de redirecionamento de sucessso |

## Example

```ts
import { GetThreeDSecureResponse } from 'pagarmeapisdklib';

const getThreeDSecureResponse: GetThreeDSecureResponse = {
  mpi: 'mpi4',
  eci: 'eci6',
  cavv: 'cavv2',
  transactionId: 'transaction_Id2',
  successUrl: 'success_url8',
};
```

