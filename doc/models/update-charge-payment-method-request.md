
# Update Charge Payment Method Request

Request for updating the payment method of a charge

## Structure

`UpdateChargePaymentMethodRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `updateSubscription` | `boolean` | Required | Indicates if the payment method from the subscription must also be updated |
| `paymentMethod` | `string` | Required | The new payment method |
| `creditCard` | [`CreateCreditCardPaymentRequest`](../../doc/models/create-credit-card-payment-request.md) | Required | Credit card data |
| `debitCard` | [`CreateDebitCardPaymentRequest`](../../doc/models/create-debit-card-payment-request.md) | Required | Debit card data |
| `boleto` | [`CreateBoletoPaymentRequest`](../../doc/models/create-boleto-payment-request.md) | Required | Boleto data |
| `voucher` | [`CreateVoucherPaymentRequest`](../../doc/models/create-voucher-payment-request.md) | Required | Voucher data |
| `cash` | [`CreateCashPaymentRequest`](../../doc/models/create-cash-payment-request.md) | Required | Cash data |
| `bankTransfer` | [`CreateBankTransferPaymentRequest`](../../doc/models/create-bank-transfer-payment-request.md) | Required | Bank Transfer data |
| `privateLabel` | [`CreatePrivateLabelPaymentRequest`](../../doc/models/create-private-label-payment-request.md) | Required | - |

## Example

```ts
import { UpdateChargePaymentMethodRequest } from 'pagarmeapisdklib';

const updateChargePaymentMethodRequest: UpdateChargePaymentMethodRequest = {
  updateSubscription: false,
  paymentMethod: '',
  creditCard: {
    installments: 1,
    statementDescriptor: 'statement_descriptor8',
    card: {},
    cardId: 'card_id4',
    cardToken: 'card_token2',
    capture: true,
    recurrencyCycle: '"first" or "subsequent"',
  },
  debitCard: {},
  boleto: {},
  voucher: {
    statementDescriptor: 'statement_descriptor2',
    cardId: 'card_id8',
    cardToken: 'card_token8',
    card: {},
    recurrencyCycle: '"first" or "subsequent"',
  },
  cash: {},
  bankTransfer: {},
  privateLabel: {
    installments: 1,
    statementDescriptor: 'statement_descriptor0',
    card: {
    },
    cardId: 'card_id6',
    cardToken: 'card_token0',
    capture: true,
    recurrencyCycle: '"first" or "subsequent"',
  },
};
```

