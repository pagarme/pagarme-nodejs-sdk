
# Get Checkout Payment Response

Resposta das configurações de pagamento do checkout

## Structure

`GetCheckoutPaymentResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| null \| undefined` | Optional | - |
| `amount` | `number \| null \| undefined` | Optional | Valor em centavos |
| `defaultPaymentMethod` | `string \| null \| undefined` | Optional | Meio de pagamento padrão no checkout |
| `successUrl` | `string \| null \| undefined` | Optional | Url de redirecionamento de sucesso após o checkou |
| `paymentUrl` | `string \| null \| undefined` | Optional | Url para pagamento usando o checkout |
| `gatewayAffiliationId` | `string \| null \| undefined` | Optional | Código da afiliação onde o pagamento será processado no gateway |
| `acceptedPaymentMethods` | `string[] \| null \| undefined` | Optional | Meios de pagamento aceitos no checkout |
| `status` | `string \| null \| undefined` | Optional | Status do checkout |
| `skipCheckoutSuccessPage` | `boolean \| null \| undefined` | Optional | Pular tela de sucesso pós-pagamento? |
| `createdAt` | `string \| null \| undefined` | Optional | Data de criação |
| `updatedAt` | `string \| null \| undefined` | Optional | Data de atualização |
| `canceledAt` | `string \| null \| undefined` | Optional | Data de cancelamento |
| `customerEditable` | `boolean \| null \| undefined` | Optional | Torna o objeto customer editável |
| `customer` | [`GetCustomerResponse \| null \| undefined`](../../doc/models/get-customer-response.md) | Optional | Dados do comprador |
| `billingaddress` | [`GetAddressResponse \| null \| undefined`](../../doc/models/get-address-response.md) | Optional | Dados do endereço de cobrança |
| `creditCard` | [`GetCheckoutCreditCardPaymentResponse \| null \| undefined`](../../doc/models/get-checkout-credit-card-payment-response.md) | Optional | Configurações de cartão de crédito |
| `boleto` | [`GetCheckoutBoletoPaymentResponse \| null \| undefined`](../../doc/models/get-checkout-boleto-payment-response.md) | Optional | Configurações de boleto |
| `billingAddressEditable` | `boolean \| null \| undefined` | Optional | Indica se o billing address poderá ser editado |
| `shipping` | [`GetShippingResponse \| null \| undefined`](../../doc/models/get-shipping-response.md) | Optional | Configurações  de entrega |
| `shippable` | `boolean \| null \| undefined` | Optional | Indica se possui entrega |
| `closedAt` | `string \| null \| undefined` | Optional | Data de fechamento |
| `expiresAt` | `string \| null \| undefined` | Optional | Data de expiração |
| `currency` | `string \| null \| undefined` | Optional | Moeda |
| `debitCard` | [`GetCheckoutDebitCardPaymentResponse \| null \| undefined`](../../doc/models/get-checkout-debit-card-payment-response.md) | Optional | Configurações de cartão de débito |
| `bankTransfer` | [`GetCheckoutBankTransferPaymentResponse \| null \| undefined`](../../doc/models/get-checkout-bank-transfer-payment-response.md) | Optional | Bank transfer payment response |
| `acceptedBrands` | `string[] \| null \| undefined` | Optional | Accepted Brands |
| `pix` | [`GetCheckoutPixPaymentResponse \| null \| undefined`](../../doc/models/get-checkout-pix-payment-response.md) | Optional | Pix payment response |

## Example (as JSON)

```json
{
  "id": "id6",
  "amount": 148,
  "default_payment_method": "default_payment_method6",
  "success_url": "success_url8",
  "payment_url": "payment_url0"
}
```

