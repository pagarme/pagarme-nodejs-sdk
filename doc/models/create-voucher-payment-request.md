
# Create Voucher Payment Request

The settings for creating a voucher payment

## Structure

`CreateVoucherPaymentRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `statementDescriptor` | `string \| undefined` | Optional | The text that will be shown on the voucher's statement |
| `cardId` | `string \| undefined` | Optional | Card id |
| `cardToken` | `string \| undefined` | Optional | Card token |
| `card` | [`CreateCardRequest \| undefined`](../../doc/models/create-card-request.md) | Optional | Card info |
| `recurrencyCycle` | `string \| undefined` | Optional | Defines whether the card has been used one or more times. |

## Example (as JSON)

```json
{
  "recurrency_cycle": "\"first\" or \"subsequent\"",
  "statement_descriptor": "statement_descriptor0",
  "card_id": "card_id6",
  "card_token": "card_token0",
  "Card": {
    "number": "number8",
    "holder_name": "holder_name6",
    "exp_month": 240,
    "exp_year": 56,
    "cvv": "cvv8"
  }
}
```

