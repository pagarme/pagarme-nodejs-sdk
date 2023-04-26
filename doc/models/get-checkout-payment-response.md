
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
  "payment_url": "payment_url6",
  "gateway_affiliation_id": "gateway_affiliation_id4",
  "accepted_payment_methods": [
    "accepted_payment_methods3",
    "accepted_payment_methods4",
    "accepted_payment_methods5"
  ],
  "status": "status8",
  "skip_checkout_success_page": false,
  "created_at": "2016-03-13T12:52:32.123Z",
  "updated_at": "2016-03-13T12:52:32.123Z",
  "canceled_at": "2016-03-13T12:52:32.123Z",
  "customer_editable": false,
  "customer": {
    "id": "id0",
    "name": "name0",
    "email": "email6",
    "delinquent": false,
    "created_at": "2016-03-13T12:52:32.123Z",
    "updated_at": "2016-03-13T12:52:32.123Z",
    "document": "document6",
    "type": "type0",
    "fb_access_token": "fb_access_token4",
    "address": {
      "id": "id6",
      "street": "street6",
      "number": "number4",
      "complement": "complement2",
      "zip_code": "zip_code0",
      "neighborhood": "neighborhood2",
      "city": "city6",
      "state": "state2",
      "country": "country0",
      "status": "status8",
      "created_at": "2016-03-13T12:52:32.123Z",
      "updated_at": "2016-03-13T12:52:32.123Z",
      "customer": {
        "id": "id6",
        "name": "name6",
        "email": "email0",
        "delinquent": false,
        "created_at": "2016-03-13T12:52:32.123Z",
        "updated_at": "2016-03-13T12:52:32.123Z",
        "document": "document0",
        "type": "type4",
        "fb_access_token": "fb_access_token0",
        "address": {
          "id": "id2",
          "street": "street2",
          "number": "number0",
          "complement": "complement8",
          "zip_code": "zip_code6",
          "neighborhood": "neighborhood8",
          "city": "city2",
          "state": "state8",
          "country": "country6",
          "status": "status4",
          "created_at": "2016-03-13T12:52:32.123Z",
          "updated_at": "2016-03-13T12:52:32.123Z",
          "customer": {},
          "metadata": {
            "key0": "metadata7",
            "key1": "metadata6"
          },
          "line_1": "line_16",
          "line_2": "line_20",
          "deleted_at": "2016-03-13T12:52:32.123Z"
        },
        "metadata": {
          "key0": "metadata3",
          "key1": "metadata2",
          "key2": "metadata1"
        },
        "phones": {
          "home_phone": {
            "country_code": "country_code8",
            "number": "number6",
            "area_code": "area_code8"
          },
          "mobile_phone": {
            "country_code": "country_code2",
            "number": "number4",
            "area_code": "area_code8"
          }
        },
        "fb_id": 224,
        "code": "code4",
        "document_type": "document_type4"
      },
      "metadata": {
        "key0": "metadata3"
      },
      "line_1": "line_10",
      "line_2": "line_24",
      "deleted_at": "2016-03-13T12:52:32.123Z"
    },
    "metadata": {
      "key0": "metadata3"
    },
    "phones": {
      "home_phone": {},
      "mobile_phone": {}
    },
    "fb_id": 174,
    "code": "code8",
    "document_type": "document_type8"
  },
  "billingaddress": {
    "id": "id8",
    "street": "street8",
    "number": "number6",
    "complement": "complement4",
    "zip_code": "zip_code2",
    "neighborhood": "neighborhood4",
    "city": "city8",
    "state": "state4",
    "country": "country2",
    "status": "status0",
    "created_at": "2016-03-13T12:52:32.123Z",
    "updated_at": "2016-03-13T12:52:32.123Z",
    "customer": {
      "id": "id8",
      "name": "name8",
      "email": "email8",
      "delinquent": false,
      "created_at": "2016-03-13T12:52:32.123Z",
      "updated_at": "2016-03-13T12:52:32.123Z",
      "document": "document8",
      "type": "type2",
      "fb_access_token": "fb_access_token2",
      "address": {
        "id": "id4",
        "street": "street4",
        "number": "number2",
        "complement": "complement0",
        "zip_code": "zip_code8",
        "neighborhood": "neighborhood0",
        "city": "city4",
        "state": "state0",
        "country": "country8",
        "status": "status6",
        "created_at": "2016-03-13T12:52:32.123Z",
        "updated_at": "2016-03-13T12:52:32.123Z",
        "customer": {
          "id": "id4",
          "name": "name4",
          "email": "email2",
          "delinquent": false,
          "created_at": "2016-03-13T12:52:32.123Z",
          "updated_at": "2016-03-13T12:52:32.123Z",
          "document": "document8",
          "type": "type4",
          "fb_access_token": "fb_access_token8",
          "address": {},
          "metadata": {
            "key0": "metadata1",
            "key1": "metadata0"
          },
          "phones": {
            "home_phone": {
              "country_code": "country_code6",
              "number": "number4",
              "area_code": "area_code6"
            },
            "mobile_phone": {
              "country_code": "country_code6",
              "number": "number6",
              "area_code": "area_code6"
            }
          },
          "fb_id": 118,
          "code": "code2",
          "document_type": "document_type2"
        },
        "metadata": {
          "key0": "metadata1",
          "key1": "metadata0",
          "key2": "metadata9"
        },
        "line_1": "line_18",
        "line_2": "line_22",
        "deleted_at": "2016-03-13T12:52:32.123Z"
      },
      "metadata": {
        "key0": "metadata5",
        "key1": "metadata6",
        "key2": "metadata7"
      },
      "phones": {
        "home_phone": {},
        "mobile_phone": {}
      },
      "fb_id": 68,
      "code": "code6",
      "document_type": "document_type6"
    },
    "metadata": {
      "key0": "metadata5"
    },
    "line_1": "line_18",
    "line_2": "line_26",
    "deleted_at": "2016-03-13T12:52:32.123Z"
  },
  "credit_card": {
    "statementDescriptor": "statementDescriptor4",
    "installments": [
      {
        "number": "number1",
        "total": 167
      }
    ],
    "authentication": {
      "type": "type0",
      "threed_secure": {
        "mpi": "mpi0",
        "eci": "eci2",
        "cavv": "cavv8",
        "transaction_Id": "transaction_Id2",
        "success_url": "success_url4"
      }
    }
  },
  "boleto": {
    "due_at": "2016-03-13T12:52:32.123Z",
    "instructions": "instructions2"
  },
  "billing_address_editable": false,
  "shipping": {
    "amount": 52,
    "description": "description6",
    "recipient_name": "recipient_name2",
    "recipient_phone": "recipient_phone6",
    "address": {
      "id": "id0",
      "street": "street0",
      "number": "number8",
      "complement": "complement6",
      "zip_code": "zip_code4",
      "neighborhood": "neighborhood6",
      "city": "city0",
      "state": "state6",
      "country": "country4",
      "status": "status2",
      "created_at": "2016-03-13T12:52:32.123Z",
      "updated_at": "2016-03-13T12:52:32.123Z",
      "customer": {
        "id": "id0",
        "name": "name0",
        "email": "email6",
        "delinquent": false,
        "created_at": "2016-03-13T12:52:32.123Z",
        "updated_at": "2016-03-13T12:52:32.123Z",
        "document": "document4",
        "type": "type0",
        "fb_access_token": "fb_access_token4",
        "address": {
          "id": "id6",
          "street": "street6",
          "number": "number4",
          "complement": "complement2",
          "zip_code": "zip_code0",
          "neighborhood": "neighborhood2",
          "city": "city6",
          "state": "state2",
          "country": "country0",
          "status": "status8",
          "created_at": "2016-03-13T12:52:32.123Z",
          "updated_at": "2016-03-13T12:52:32.123Z",
          "customer": {
            "id": "id6",
            "name": "name6",
            "email": "email0",
            "delinquent": false,
            "created_at": "2016-03-13T12:52:32.123Z",
            "updated_at": "2016-03-13T12:52:32.123Z",
            "document": "document0",
            "type": "type6",
            "fb_access_token": "fb_access_token0",
            "address": {},
            "metadata": {
              "key0": "metadata3",
              "key1": "metadata2",
              "key2": "metadata1"
            },
            "phones": {
              "home_phone": {
                "country_code": "country_code8",
                "number": "number6",
                "area_code": "area_code8"
              },
              "mobile_phone": {
                "country_code": "country_code8",
                "number": "number6",
                "area_code": "area_code8"
              }
            },
            "fb_id": 150,
            "code": "code4",
            "document_type": "document_type4"
          },
          "metadata": {
            "key0": "metadata3",
            "key1": "metadata2"
          },
          "line_1": "line_10",
          "line_2": "line_24",
          "deleted_at": "2016-03-13T12:52:32.123Z"
        },
        "metadata": {
          "key0": "metadata7",
          "key1": "metadata6",
          "key2": "metadata5"
        },
        "phones": {
          "home_phone": {},
          "mobile_phone": {}
        },
        "fb_id": 100,
        "code": "code8",
        "document_type": "document_type8"
      },
      "metadata": {
        "key0": "metadata7"
      },
      "line_1": "line_14",
      "line_2": "line_28",
      "deleted_at": "2016-03-13T12:52:32.123Z"
    },
    "max_delivery_date": "2016-03-13T12:52:32.123Z",
    "estimated_delivery_date": "2016-03-13T12:52:32.123Z",
    "type": "type6"
  },
  "shippable": false,
  "closed_at": "2016-03-13T12:52:32.123Z",
  "expires_at": "2016-03-13T12:52:32.123Z",
  "currency": "currency0",
  "debit_card": {
    "statement_descriptor": "statement_descriptor4",
    "authentication": {
      "type": "type6",
      "threed_secure": {
        "mpi": "mpi0",
        "eci": "eci2",
        "cavv": "cavv2",
        "transaction_Id": "transaction_Id2",
        "success_url": "success_url4"
      }
    }
  },
  "bank_transfer": {
    "bank": [
      "bank9",
      "bank0"
    ]
  },
  "accepted_brands": [
    "accepted_brands8",
    "accepted_brands9"
  ],
  "pix": {
    "expires_at": "2016-03-13T12:52:32.123Z",
    "additional_information": [
      {
        "Name": "Name7",
        "Value": "Value5"
      },
      {
        "Name": "Name8",
        "Value": "Value6"
      },
      {
        "Name": "Name9",
        "Value": "Value7"
      }
    ]
  }
}
```

