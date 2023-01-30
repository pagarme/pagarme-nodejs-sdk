
# Create Pix Payment Request

Contains information to create a pix payment

## Structure

`CreatePixPaymentRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `expiresAt` | `string \| undefined` | Optional | Datetime when pix payment will expire |
| `expiresIn` | `number \| undefined` | Optional | Seconds until pix payment expires |
| `additionalInformation` | [`PixAdditionalInformation[] \| undefined`](../../doc/models/pix-additional-information.md) | Optional | Pix additional information |

## Example (as JSON)

```json
{
  "expires_at": null,
  "expires_in": null,
  "additional_information": null
}
```

