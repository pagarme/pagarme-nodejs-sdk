
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
  "id": null,
  "amount": null,
  "default_payment_method": null,
  "success_url": null,
  "payment_url": null,
  "gateway_affiliation_id": null,
  "accepted_payment_methods": null,
  "status": null,
  "skip_checkout_success_page": null,
  "created_at": null,
  "updated_at": null,
  "canceled_at": null,
  "customer_editable": null,
  "customer": null,
  "billingaddress": null,
  "credit_card": null,
  "boleto": null,
  "billing_address_editable": null,
  "shipping": null,
  "shippable": null,
  "closed_at": null,
  "expires_at": null,
  "currency": null,
  "debit_card": null,
  "bank_transfer": null,
  "accepted_brands": null,
  "pix": null
}
```

