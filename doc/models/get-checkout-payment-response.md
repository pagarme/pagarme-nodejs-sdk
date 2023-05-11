
# Get Checkout Payment Response

Resposta das configurações de pagamento do checkout

## Structure

`GetCheckoutPaymentResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | - |
| `amount` | `number \| undefined` | Optional | Valor em centavos |
| `defaultPaymentMethod` | `string \| undefined` | Optional | Meio de pagamento padrão no checkout |
| `successUrl` | `string \| undefined` | Optional | Url de redirecionamento de sucesso após o checkou |
| `paymentUrl` | `string \| undefined` | Optional | Url para pagamento usando o checkout |
| `gatewayAffiliationId` | `string \| undefined` | Optional | Código da afiliação onde o pagamento será processado no gateway |
| `acceptedPaymentMethods` | `string[] \| undefined` | Optional | Meios de pagamento aceitos no checkout |
| `status` | `string \| undefined` | Optional | Status do checkout |
| `skipCheckoutSuccessPage` | `boolean \| undefined` | Optional | Pular tela de sucesso pós-pagamento? |
| `createdAt` | `string \| undefined` | Optional | Data de criação |
| `updatedAt` | `string \| undefined` | Optional | Data de atualização |
| `canceledAt` | `string \| undefined` | Optional | Data de cancelamento |
| `customerEditable` | `boolean \| undefined` | Optional | Torna o objeto customer editável |
| `customer` | [`GetCustomerResponse \| undefined`](../../doc/models/get-customer-response.md) | Optional | Dados do comprador |
| `billingaddress` | [`GetAddressResponse \| undefined`](../../doc/models/get-address-response.md) | Optional | Dados do endereço de cobrança |
| `creditCard` | [`GetCheckoutCreditCardPaymentResponse \| undefined`](../../doc/models/get-checkout-credit-card-payment-response.md) | Optional | Configurações de cartão de crédito |
| `boleto` | [`GetCheckoutBoletoPaymentResponse \| undefined`](../../doc/models/get-checkout-boleto-payment-response.md) | Optional | Configurações de boleto |
| `billingAddressEditable` | `boolean \| undefined` | Optional | Indica se o billing address poderá ser editado |
| `shipping` | [`GetShippingResponse \| undefined`](../../doc/models/get-shipping-response.md) | Optional | Configurações  de entrega |
| `shippable` | `boolean \| undefined` | Optional | Indica se possui entrega |
| `closedAt` | `string \| undefined` | Optional | Data de fechamento |
| `expiresAt` | `string \| undefined` | Optional | Data de expiração |
| `currency` | `string \| undefined` | Optional | Moeda |
| `debitCard` | [`GetCheckoutDebitCardPaymentResponse \| undefined`](../../doc/models/get-checkout-debit-card-payment-response.md) | Optional | Configurações de cartão de débito |
| `bankTransfer` | [`GetCheckoutBankTransferPaymentResponse \| undefined`](../../doc/models/get-checkout-bank-transfer-payment-response.md) | Optional | Bank transfer payment response |
| `acceptedBrands` | `string[] \| undefined` | Optional | Accepted Brands |
| `pix` | [`GetCheckoutPixPaymentResponse \| undefined`](../../doc/models/get-checkout-pix-payment-response.md) | Optional | Pix payment response |

## Example (as JSON)

```json
{
  "id": "id0",
  "amount": 46,
  "default_payment_method": "default_payment_method0",
  "success_url": "success_url2",
  "payment_url": "payment_url6"
}
```

