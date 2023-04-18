
# Get Payment Authentication Response

Payment Authentication response

## Structure

`GetPaymentAuthenticationResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | `string \| undefined` | Optional | - |
| `threedSecure` | [`GetThreeDSecureResponse \| undefined`](../../doc/models/get-three-d-secure-response.md) | Optional | 3D-S payment authentication response |

## Example (as JSON)

```json
{
  "type": "type0",
  "threed_secure": {
    "mpi": "mpi0",
    "eci": "eci2",
    "cavv": "cavv8",
    "transaction_Id": "transaction_Id2",
    "success_url": "success_url4"
  }
}
```

