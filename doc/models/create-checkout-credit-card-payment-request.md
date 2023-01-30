
# Create Checkout Credit Card Payment Request

Checkout card payment request

## Structure

`CreateCheckoutCreditCardPaymentRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `statementDescriptor` | `string \| undefined` | Optional | Card invoice text descriptor |
| `installments` | [`CreateCheckoutCardInstallmentOptionRequest[] \| undefined`](../../doc/models/create-checkout-card-installment-option-request.md) | Optional | Payment installment options |
| `authentication` | [`CreatePaymentAuthenticationRequest \| undefined`](../../doc/models/create-payment-authentication-request.md) | Optional | Creates payment authentication |
| `capture` | `boolean \| undefined` | Optional | Authorize and capture? |

## Example (as JSON)

```json
{
  "statement_descriptor": null,
  "installments": null,
  "authentication": null,
  "capture": null
}
```

