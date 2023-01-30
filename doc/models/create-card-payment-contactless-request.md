
# Create Card Payment Contactless Request

The card payment contactless request

## Structure

`CreateCardPaymentContactlessRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | `string` | Required | The authentication type |
| `applePay` | [`CreateApplePayRequest \| undefined`](../../doc/models/create-apple-pay-request.md) | Optional | The ApplePay encrypted request |
| `googlePay` | [`CreateGooglePayRequest \| undefined`](../../doc/models/create-google-pay-request.md) | Optional | The GooglePay encrypted request |
| `emv` | [`CreateEmvDecryptRequest \| undefined`](../../doc/models/create-emv-decrypt-request.md) | Optional | The Emv encrypted request |

## Example (as JSON)

```json
{
  "type": "type0",
  "apple_pay": null,
  "google_pay": null,
  "emv": null
}
```

