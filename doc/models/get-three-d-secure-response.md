
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

## Example (as JSON)

```json
{
  "mpi": "mpi2",
  "eci": "eci4",
  "cavv": "cavv0",
  "transaction_Id": "transaction_Id0",
  "success_url": "success_url6"
}
```

