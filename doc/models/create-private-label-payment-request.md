
# Create Private Label Payment Request

The settings for creating a private label payment

## Structure

`CreatePrivateLabelPaymentRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `installments` | `number \| undefined` | Optional | Number of installments<br>**Default**: `1` |
| `statementDescriptor` | `string \| undefined` | Optional | The text that will be shown on the private label's statement |
| `card` | [`CreateCardRequest \| undefined`](../../doc/models/create-card-request.md) | Optional | Card data |
| `cardId` | `string \| undefined` | Optional | The Card id |
| `cardToken` | `string \| undefined` | Optional | - |
| `recurrence` | `boolean \| undefined` | Optional | Indicates a recurrence |
| `capture` | `boolean \| undefined` | Optional | Indicates if the operation should be only authorization or auth and capture.<br>**Default**: `true` |
| `extendedLimitEnabled` | `boolean \| undefined` | Optional | Indicates whether the extended label (private label) is enabled |
| `extendedLimitCode` | `string \| undefined` | Optional | Extended Limit Code |
| `recurrencyCycle` | `string \| undefined` | Optional | Defines whether the card has been used one or more times. |

## Example (as JSON)

```json
{
  "installments": null,
  "statement_descriptor": null,
  "card": null,
  "card_id": null,
  "card_token": null,
  "recurrence": null,
  "capture": null,
  "extended_limit_enabled": null,
  "extended_limit_code": null,
  "recurrency_cycle": null
}
```

