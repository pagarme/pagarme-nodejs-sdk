
# Create Credit Card Payment Request

The settings for creating a credit card payment

## Structure

`CreateCreditCardPaymentRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `installments` | `number \| undefined` | Optional | Number of installments<br>**Default**: `1` |
| `statementDescriptor` | `string \| undefined` | Optional | The text that will be shown on the credit card's statement |
| `card` | [`CreateCardRequest \| undefined`](../../doc/models/create-card-request.md) | Optional | Credit card data |
| `cardId` | `string \| undefined` | Optional | The credit card id |
| `cardToken` | `string \| undefined` | Optional | - |
| `recurrence` | `boolean \| undefined` | Optional | Indicates a recurrence |
| `capture` | `boolean \| undefined` | Optional | Indicates if the operation should be only authorization or auth and capture.<br>**Default**: `true` |
| `extendedLimitEnabled` | `boolean \| undefined` | Optional | Indicates whether the extended label (private label) is enabled |
| `extendedLimitCode` | `string \| undefined` | Optional | Extended Limit Code |
| `merchantCategoryCode` | `bigint \| undefined` | Optional | Customer business segment code |
| `authentication` | [`CreatePaymentAuthenticationRequest \| undefined`](../../doc/models/create-payment-authentication-request.md) | Optional | The payment authentication request |
| `contactless` | [`CreateCardPaymentContactlessRequest \| undefined`](../../doc/models/create-card-payment-contactless-request.md) | Optional | The Credit card payment contactless request |
| `autoRecovery` | `boolean \| undefined` | Optional | Indicates whether a particular payment will enter the offline retry flow |
| `operationType` | `string \| undefined` | Optional | AuthOnly, AuthAndCapture, PreAuth |
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
  "merchant_category_code": null,
  "authentication": null,
  "contactless": null,
  "auto_recovery": null,
  "operation_type": null,
  "recurrency_cycle": null
}
```

