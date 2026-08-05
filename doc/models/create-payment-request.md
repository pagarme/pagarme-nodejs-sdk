
# Create Payment Request

Payment data

## Structure

`CreatePaymentRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `paymentMethod` | `string` | Required | Payment method |
| `creditCard` | [`CreateCreditCardPaymentRequest \| undefined`](../../doc/models/create-credit-card-payment-request.md) | Optional | Settings for credit card payment |
| `debitCard` | [`CreateDebitCardPaymentRequest \| undefined`](../../doc/models/create-debit-card-payment-request.md) | Optional | Settings for debit card payment |
| `boleto` | [`CreateBoletoPaymentRequest \| undefined`](../../doc/models/create-boleto-payment-request.md) | Optional | Settings for boleto payment |
| `currency` | `string \| undefined` | Optional | Currency. Must be informed using 3 characters |
| `voucher` | [`CreateVoucherPaymentRequest \| undefined`](../../doc/models/create-voucher-payment-request.md) | Optional | Settings for voucher payment |
| `split` | [`CreateSplitRequest[] \| undefined`](../../doc/models/create-split-request.md) | Optional | Splits |
| `bankTransfer` | [`CreateBankTransferPaymentRequest \| undefined`](../../doc/models/create-bank-transfer-payment-request.md) | Optional | Settings for bank transfer payment |
| `gatewayAffiliationId` | `string \| undefined` | Optional | Gateway affiliation code |
| `amount` | `number \| undefined` | Optional | The amount of the payment, in cents |
| `checkout` | [`CreateCheckoutPaymentRequest \| undefined`](../../doc/models/create-checkout-payment-request.md) | Optional | Settings for checkout payment |
| `customerId` | `string \| undefined` | Optional | Customer Id |
| `customer` | [`CreateCustomerRequest \| undefined`](../../doc/models/create-customer-request.md) | Optional | Customer |
| `metadata` | `Record<string, string> \| undefined` | Optional | Metadata |
| `cash` | [`CreateCashPaymentRequest \| undefined`](../../doc/models/create-cash-payment-request.md) | Optional | Settings for cash payment |
| `privateLabel` | [`CreatePrivateLabelPaymentRequest \| undefined`](../../doc/models/create-private-label-payment-request.md) | Optional | Settings for private label payment |
| `pix` | [`CreatePixPaymentRequest \| undefined`](../../doc/models/create-pix-payment-request.md) | Optional | Settings for pix payment |

## Example

```ts
import { CreatePaymentRequest } from 'pagarmeapisdklib';

const createPaymentRequest: CreatePaymentRequest = {
  paymentMethod: 'payment_method6',
  creditCard: {},
  debitCard: {},
  boleto: {},
  currency: 'currency4',
  voucher: {},
};
```

