
# Create Credit Card Payment Request

The settings for creating a credit card payment

## Structure

`CreateCreditCardPaymentRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `installments` | `number \| undefined` | Optional | Number of installments<br><br>**Default**: `1` |
| `statementDescriptor` | `string \| undefined` | Optional | The text that will be shown on the credit card's statement |
| `card` | [`CreateCardRequest \| undefined`](../../doc/models/create-card-request.md) | Optional | Credit card data |
| `cardId` | `string \| undefined` | Optional | The credit card id |
| `cardToken` | `string \| undefined` | Optional | - |
| `recurrence` | `boolean \| undefined` | Optional | Indicates a recurrence |
| `capture` | `boolean \| undefined` | Optional | Indicates if the operation should be only authorization or auth and capture.<br><br>**Default**: `true` |
| `extendedLimitEnabled` | `boolean \| undefined` | Optional | Indicates whether the extended label (private label) is enabled |
| `extendedLimitCode` | `string \| undefined` | Optional | Extended Limit Code |
| `merchantCategoryCode` | `bigint \| undefined` | Optional | Customer business segment code |
| `authentication` | [`CreatePaymentAuthenticationRequest \| undefined`](../../doc/models/create-payment-authentication-request.md) | Optional | The payment authentication request |
| `contactless` | [`CreateCardPaymentContactlessRequest \| undefined`](../../doc/models/create-card-payment-contactless-request.md) | Optional | The Credit card payment contactless request |
| `autoRecovery` | `boolean \| undefined` | Optional | Indicates whether a particular payment will enter the offline retry flow |
| `operationType` | `string \| undefined` | Optional | AuthOnly, AuthAndCapture, PreAuth |
| `recurrencyCycle` | `string \| undefined` | Optional | Defines whether the card has been used one or more times. |
| `payload` | [`CreateCardPayloadRequest \| undefined`](../../doc/models/create-card-payload-request.md) | Optional | - |
| `initiatedType` | `string \| undefined` | Optional | - |
| `recurrenceModel` | `string \| undefined` | Optional | - |
| `paymentOrigin` | [`CreatePaymentOriginRequest \| undefined`](../../doc/models/create-payment-origin-request.md) | Optional | - |
| `indirectAcceptor` | `string \| undefined` | Optional | Business model identifier |

## Example (as JSON)

```json
{
  "installments": 1,
  "capture": true,
  "recurrency_cycle": "\"first\" or \"subsequent\"",
  "statement_descriptor": "statement_descriptor0",
  "card": {
    "number": "number6",
    "holder_name": "holder_name2",
    "exp_month": 228,
    "exp_year": 68,
    "cvv": "cvv4"
  },
  "card_id": "card_id6",
  "card_token": "card_token0"
}
```

