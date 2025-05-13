
# Create Card Request

Card data

## Structure

`CreateCardRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `number` | `string \| undefined` | Optional | Credit card number |
| `holderName` | `string \| undefined` | Optional | Holder name, as written on the card |
| `expMonth` | `number \| undefined` | Optional | The expiration month |
| `expYear` | `number \| undefined` | Optional | The expiration year, that can be informed with 2 or 4 digits |
| `cvv` | `string \| undefined` | Optional | The card's security code |
| `billingAddress` | [`CreateAddressRequest \| undefined`](../../doc/models/create-address-request.md) | Optional | Card's billing address |
| `brand` | `string \| undefined` | Optional | Card brand |
| `billingAddressId` | `string \| undefined` | Optional | The address id for the billing address |
| `metadata` | `Record<string, string> \| undefined` | Optional | Metadata |
| `type` | `string \| undefined` | Optional | Card type<br><br>**Default**: `'credit'` |
| `options` | [`CreateCardOptionsRequest \| undefined`](../../doc/models/create-card-options-request.md) | Optional | Options for creating the card |
| `holderDocument` | `string \| undefined` | Optional | Document number for the card's holder |
| `privateLabel` | `boolean \| undefined` | Optional | Indicates whether it is a private label card |
| `label` | `string \| undefined` | Optional | - |
| `id` | `string \| undefined` | Optional | Identifier |
| `token` | `string \| undefined` | Optional | token identifier |

## Example (as JSON)

```json
{
  "type": "credit",
  "number": "number0",
  "holder_name": "holder_name8",
  "exp_month": 92,
  "exp_year": 204,
  "cvv": "cvv0"
}
```

