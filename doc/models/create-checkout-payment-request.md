
# Create Checkout Payment Request

Checkout payment request

## Structure

`CreateCheckoutPaymentRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `acceptedPaymentMethods` | `string[]` | Required | Accepted Payment Methods |
| `acceptedMultiPaymentMethods` | `unknown[]` | Required | Accepted Multi Payment Methods |
| `successUrl` | `string` | Required | Success url |
| `defaultPaymentMethod` | `string \| undefined` | Optional | Default payment method |
| `gatewayAffiliationId` | `string \| undefined` | Optional | Gateway Affiliation Id |
| `creditCard` | [`CreateCheckoutCreditCardPaymentRequest \| undefined`](../../doc/models/create-checkout-credit-card-payment-request.md) | Optional | Credit Card payment request |
| `debitCard` | [`CreateCheckoutDebitCardPaymentRequest \| undefined`](../../doc/models/create-checkout-debit-card-payment-request.md) | Optional | Debit Card payment request |
| `boleto` | [`CreateCheckoutBoletoPaymentRequest \| undefined`](../../doc/models/create-checkout-boleto-payment-request.md) | Optional | Boleto payment request |
| `customerEditable` | `boolean \| undefined` | Optional | Customer is editable? |
| `expiresIn` | `number \| undefined` | Optional | Time in minutes for expiration |
| `skipCheckoutSuccessPage` | `boolean` | Required | Skip postpay success screen? |
| `billingAddressEditable` | `boolean` | Required | Billing Address is editable? |
| `billingAddress` | [`CreateAddressRequest`](../../doc/models/create-address-request.md) | Required | Billing Address |
| `bankTransfer` | [`CreateCheckoutBankTransferRequest \| undefined`](../../doc/models/create-checkout-bank-transfer-request.md) | Optional | Bank Transfer payment request |
| `acceptedBrands` | `string[]` | Required | Accepted Brands |
| `pix` | [`CreateCheckoutPixPaymentRequest \| undefined`](../../doc/models/create-checkout-pix-payment-request.md) | Optional | Pix payment request |

## Example

```ts
import { CreateCheckoutPaymentRequest } from 'pagarmeapisdklib';

const createCheckoutPaymentRequest: CreateCheckoutPaymentRequest = {
  acceptedPaymentMethods: [
    'accepted_payment_methods1'
  ],
  acceptedMultiPaymentMethods: [
    { 'key1': 'val1', 'key2': 'val2' }
  ],
  successUrl: 'success_url0',
  skipCheckoutSuccessPage: false,
  billingAddressEditable: false,
  billingAddress: {},
  acceptedBrands: [
    'accepted_brands6'
  ],
  defaultPaymentMethod: 'default_payment_method8',
  gatewayAffiliationId: 'gateway_affiliation_id4',
  creditCard: {},
  debitCard: {},
  boleto: {},
};
```

