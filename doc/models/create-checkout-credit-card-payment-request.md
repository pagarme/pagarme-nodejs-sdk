
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
  "statement_descriptor": "statement_descriptor0",
  "installments": [
    {
      "number": 164,
      "total": 16
    }
  ],
  "authentication": {
    "type": "type2",
    "threed_secure": {
      "mpi": "mpi0",
      "cavv": "cavv8",
      "eci": "eci2",
      "transaction_id": "transaction_id0",
      "success_url": "success_url4",
      "ds_transaction_id": "ds_transaction_id0"
    }
  },
  "capture": false
}
```

