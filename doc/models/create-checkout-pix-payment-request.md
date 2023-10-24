
# Create Checkout Pix Payment Request

Checkout pix payment request

## Structure

`CreateCheckoutPixPaymentRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `expiresAt` | `string \| undefined` | Optional | Expires at |
| `expiresIn` | `number \| undefined` | Optional | Expires in |
| `additionalInformation` | [`PixAdditionalInformation[] \| undefined`](../../doc/models/pix-additional-information.md) | Optional | Additional information |

## Example (as JSON)

```json
{
  "expires_at": "2016-03-13T12:52:32.123Z",
  "expires_in": 4,
  "additional_information": [
    {
      "Name": "Name0",
      "Value": "Value2"
    }
  ]
}
```

