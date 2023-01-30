
# Get Three D Secure Response

3D-S payment authentication response

## Structure

`GetThreeDSecureResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `mpi` | `string \| null` | Required | MPI Vendor |
| `eci` | `string \| null` | Required | Electronic Commerce Indicator (ECI) (Opcional) |
| `cavv` | `string \| null` | Required | Online payment cryptogram, definido pelo 3-D Secure. |
| `transactionId` | `string \| null` | Required | Identificador da transação (XID) |
| `successUrl` | `string \| null` | Required | Url de redirecionamento de sucessso |

## Example (as JSON)

```json
{
  "mpi": "mpi2",
  "eci": "eci0",
  "cavv": "cavv4",
  "transaction_Id": "transaction_Id4",
  "success_url": "success_url2"
}
```

