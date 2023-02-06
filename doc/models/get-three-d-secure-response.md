
# Get Three D Secure Response

3D-S payment authentication response

## Structure

`GetThreeDSecureResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `mpi` | `string \| undefined` | Optional | MPI Vendor |
| `eci` | `string \| undefined` | Optional | Electronic Commerce Indicator (ECI) (Opcional) |
| `cavv` | `string \| undefined` | Optional | Online payment cryptogram, definido pelo 3-D Secure. |
| `transactionId` | `string \| undefined` | Optional | Identificador da transação (XID) |
| `successUrl` | `string \| undefined` | Optional | Url de redirecionamento de sucessso |

## Example (as JSON)

```json
{
  "mpi": null,
  "eci": null,
  "cavv": null,
  "transaction_Id": null,
  "success_url": null
}
```

