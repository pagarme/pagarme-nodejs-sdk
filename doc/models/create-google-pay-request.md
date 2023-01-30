
# Create Google Pay Request

The GooglePay Token Payment Request

## Structure

`CreateGooglePayRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `version` | `string` | Required | The token version |
| `data` | `string` | Required | The cryptography data |
| `header` | [`CreateGooglePayHeaderRequest`](../../doc/models/create-google-pay-header-request.md) | Required | The GooglePay header request |
| `signature` | `string` | Required | Detached PKCS #7 signature, Base64 encoded as string |
| `merchantIdentifier` | `string` | Required | GooglePay Merchant identifier |

## Example (as JSON)

```json
{
  "version": "version4",
  "data": "data0",
  "header": {
    "ephemeral_public_key": "ephemeral_public_key6"
  },
  "signature": "signature8",
  "merchant_identifier": "merchant_identifier4"
}
```

