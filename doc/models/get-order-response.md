
# Get Order Response

Response object for getting an Order

## Structure

`GetOrderResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | - |
| `code` | `string \| undefined` | Optional | - |
| `currency` | `string \| undefined` | Optional | - |
| `items` | [`GetOrderItemResponse[] \| undefined`](../../doc/models/get-order-item-response.md) | Optional | - |
| `customer` | [`GetCustomerResponse \| undefined`](../../doc/models/get-customer-response.md) | Optional | - |
| `status` | `string \| undefined` | Optional | - |
| `createdAt` | `string \| undefined` | Optional | - |
| `updatedAt` | `string \| undefined` | Optional | - |
| `charges` | [`GetChargeResponse[] \| undefined`](../../doc/models/get-charge-response.md) | Optional | - |
| `invoiceUrl` | `string \| undefined` | Optional | - |
| `shipping` | [`GetShippingResponse \| undefined`](../../doc/models/get-shipping-response.md) | Optional | - |
| `metadata` | `Record<string, string> \| undefined` | Optional | - |
| `checkouts` | [`GetCheckoutPaymentResponse[] \| undefined`](../../doc/models/get-checkout-payment-response.md) | Optional | Checkout Payment Settings Response |
| `ip` | `string \| undefined` | Optional | Ip address |
| `sessionId` | `string \| undefined` | Optional | Session id |
| `location` | [`GetLocationResponse \| undefined`](../../doc/models/get-location-response.md) | Optional | Location |
| `device` | [`GetDeviceResponse \| undefined`](../../doc/models/get-device-response.md) | Optional | Device's informations |
| `closed` | `boolean \| undefined` | Optional | Indicates whether the order is closed |

## Example (as JSON)

```json
{
  "id": "id0",
  "code": "code8",
  "currency": "currency0",
  "items": [
    {
      "id": "id7",
      "amount": 13,
      "description": "description7",
      "quantity": 127,
      "category": "category5",
      "code": "code5"
    },
    {
      "id": "id8",
      "amount": 14,
      "description": "description8",
      "quantity": 128,
      "category": "category6",
      "code": "code6"
    }
  ],
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
  "status": "status8",
  "created_at": "2016-03-13T12:52:32.123Z",
  "updated_at": "2016-03-13T12:52:32.123Z",
  "charges": [
    {
      "id": "id8",
      "code": "code6",
      "gateway_id": "gateway_id2",
      "amount": 42,
      "status": "status0",
      "currency": "currency2",
      "payment_method": "payment_method2",
      "due_at": "2016-03-13T12:52:32.123Z",
      "created_at": "2016-03-13T12:52:32.123Z",
      "updated_at": "2016-03-13T12:52:32.123Z",
      "last_transaction": {
        "gateway_id": "gateway_id0",
        "amount": 100,
        "status": "status2",
        "success": false,
        "created_at": "2016-03-13T12:52:32.123Z",
        "updated_at": "2016-03-13T12:52:32.123Z",
        "attempt_count": 76,
        "max_attempts": 64,
        "splits": [
          {
            "type": "type8",
            "amount": 32,
            "recipient": {
              "id": "id4",
              "name": "name4",
              "email": "email2",
              "document": "document2",
              "description": "description6",
              "type": "type6",
              "status": "status4",
              "created_at": "2016-03-13T12:52:32.123Z",
              "updated_at": "2016-03-13T12:52:32.123Z",
              "deleted_at": "2016-03-13T12:52:32.123Z",
              "default_bank_account": {
                "id": "id2",
                "holder_name": "holder_name8",
                "holder_type": "holder_type4",
                "bank": "bank0",
                "branch_number": "branch_number8",
                "branch_check_digit": "branch_check_digit8",
                "account_number": "account_number2",
                "account_check_digit": "account_check_digit8",
                "type": "type8",
                "status": "status4",
                "created_at": "2016-03-13T12:52:32.123Z",
                "updated_at": "2016-03-13T12:52:32.123Z",
                "deleted_at": "2016-03-13T12:52:32.123Z",
                "recipient": {
                  "id": "id4",
                  "name": "name4",
                  "email": "email2",
                  "document": "document2",
                  "description": "description4",
                  "type": "type6",
                  "status": "status4",
                  "created_at": "2016-03-13T12:52:32.123Z",
                  "updated_at": "2016-03-13T12:52:32.123Z",
                  "deleted_at": "2016-03-13T12:52:32.123Z",
                  "default_bank_account": {
                    "id": "id2",
                    "holder_name": "holder_name8",
                    "holder_type": "holder_type4",
                    "bank": "bank0",
                    "branch_number": "branch_number8",
                    "branch_check_digit": "branch_check_digit8",
                    "account_number": "account_number2",
                    "account_check_digit": "account_check_digit8",
                    "type": "type2",
                    "status": "status4",
                    "created_at": "2016-03-13T12:52:32.123Z",
                    "updated_at": "2016-03-13T12:52:32.123Z",
                    "deleted_at": "2016-03-13T12:52:32.123Z",
                    "recipient": {},
                    "metadata": {
                      "key0": "metadata9",
                      "key1": "metadata8"
                    },
                    "pix_key": "pix_key4"
                  },
                  "gateway_recipients": [
                    {
                      "gateway": "gateway8",
                      "status": "status0",
                      "pgid": "pgid4",
                      "created_at": "created_at6",
                      "updated_at": "updated_at4"
                    },
                    {
                      "gateway": "gateway9",
                      "status": "status1",
                      "pgid": "pgid5",
                      "created_at": "created_at7",
                      "updated_at": "updated_at5"
                    },
                    {
                      "gateway": "gateway0",
                      "status": "status2",
                      "pgid": "pgid6",
                      "created_at": "created_at8",
                      "updated_at": "updated_at6"
                    }
                  ],
                  "metadata": {
                    "key0": "metadata9",
                    "key1": "metadata0"
                  },
                  "automatic_anticipation_settings": {
                    "enabled": false,
                    "type": "type2",
                    "volume_percentage": 36,
                    "delay": 254,
                    "days": [
                      230,
                      231
                    ]
                  },
                  "transfer_settings": {
                    "transfer_enabled": false,
                    "transfer_interval": "transfer_interval0",
                    "transfer_day": 202
                  },
                  "code": "code2",
                  "payment_mode": "payment_mode8"
                },
                "metadata": {
                  "key0": "metadata9",
                  "key1": "metadata8"
                },
                "pix_key": "pix_key4"
              },
              "gateway_recipients": [
                {},
                {},
                {}
              ],
              "metadata": {
                "key0": "metadata9",
                "key1": "metadata0"
              },
              "automatic_anticipation_settings": {
                "enabled": false,
                "type": "type2",
                "volume_percentage": 106,
                "delay": 184,
                "days": [
                  160,
                  161
                ]
              },
              "transfer_settings": {
                "transfer_enabled": false,
                "transfer_interval": "transfer_interval0",
                "transfer_day": 16
              },
              "code": "code2",
              "payment_mode": "payment_mode2"
            },
            "gateway_id": "gateway_id8",
            "options": {
              "liable": false,
              "charge_processing_fee": false,
              "charge_remainder_fee": "charge_remainder_fee8"
            },
            "id": "id2"
          }
        ],
        "next_attempt": "2016-03-13T12:52:32.123Z",
        "transaction_type": "transaction",
        "id": "id0",
        "gateway_response": {
          "code": "code0",
          "errors": [
            {
              "message": "message7"
            }
          ]
        },
        "antifraud_response": {
          "status": "status0",
          "return_code": "return_code8",
          "return_message": "return_message6",
          "provider_name": "provider_name6",
          "score": "score8"
        },
        "metadata": {
          "key0": "metadata7",
          "key1": "metadata6"
        },
        "split": [
          {},
          {},
          {}
        ],
        "interest": {
          "days": 10,
          "type": "type0",
          "amount": 84
        },
        "fine": {
          "days": 24,
          "type": "type2",
          "amount": 98
        },
        "max_days_to_pay_past_due": 12
      },
      "invoice": {
        "id": "id2",
        "code": "code0",
        "url": "url6",
        "amount": 12,
        "status": "status6",
        "payment_method": "payment_method8",
        "created_at": "2016-03-13T12:52:32.123Z",
        "items": [
          {
            "amount": 47,
            "description": "description9",
            "pricing_scheme": {
              "price": 183,
              "scheme_type": "scheme_type9",
              "price_brackets": [
                {
                  "start_quantity": 26,
                  "price": 36,
                  "end_quantity": 34,
                  "overage_price": 48
                }
              ],
              "minimum_price": 87,
              "percentage": 248.27
            },
            "price_bracket": {},
            "quantity": 161,
            "name": "name9",
            "subscription_item_id": "subscription_item_id3"
          }
        ],
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
              "type": "type6",
              "fb_access_token": "fb_access_token8",
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
                "customer": {},
                "metadata": {
                  "key0": "metadata9",
                  "key1": "metadata8",
                  "key2": "metadata7"
                },
                "line_1": "line_14",
                "line_2": "line_28",
                "deleted_at": "2016-03-13T12:52:32.123Z"
              },
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
                  "country_code": "country_code4",
                  "number": "number6",
                  "area_code": "area_code6"
                }
              },
              "fb_id": 190,
              "code": "code2",
              "document_type": "document_type2"
            },
            "metadata": {
              "key0": "metadata1",
              "key1": "metadata0",
              "key2": "metadata9"
            },
            "line_1": "line_12",
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
          "fb_id": 140,
          "code": "code6",
          "document_type": "document_type6"
        },
        "charge": {
          "id": "id6",
          "code": "code4",
          "gateway_id": "gateway_id4",
          "amount": 46,
          "status": "status8",
          "currency": "currency6",
          "payment_method": "payment_method4",
          "due_at": "2016-03-13T12:52:32.123Z",
          "created_at": "2016-03-13T12:52:32.123Z",
          "updated_at": "2016-03-13T12:52:32.123Z",
          "last_transaction": {
            "gateway_id": "gateway_id8",
            "amount": 104,
            "status": "status0",
            "success": false,
            "created_at": "2016-03-13T12:52:32.123Z",
            "updated_at": "2016-03-13T12:52:32.123Z",
            "attempt_count": 80,
            "max_attempts": 68,
            "splits": [
              {}
            ],
            "next_attempt": "2016-03-13T12:52:32.123Z",
            "transaction_type": "transaction",
            "id": "id8",
            "gateway_response": {
              "code": "code8",
              "errors": [
                {}
              ]
            },
            "antifraud_response": {
              "status": "status8",
              "return_code": "return_code6",
              "return_message": "return_message4",
              "provider_name": "provider_name4",
              "score": "score6"
            },
            "metadata": {
              "key0": "metadata1",
              "key1": "metadata0",
              "key2": "metadata9"
            },
            "split": [
              {},
              {},
              {}
            ],
            "interest": {
              "days": 10,
              "type": "type2",
              "amount": 84
            },
            "fine": {
              "days": 28,
              "type": "type0",
              "amount": 102
            },
            "max_days_to_pay_past_due": 16
          },
          "invoice": {
            "id": "id0",
            "code": "code8",
            "url": "url4",
            "amount": 248,
            "status": "status2",
            "payment_method": "payment_method0",
            "created_at": "2016-03-13T12:52:32.123Z",
            "items": [
              {}
            ],
            "customer": {},
            "charge": {},
            "installments": 32,
            "billing_address": {
              "street": "street2",
              "number": "number0",
              "zip_code": "zip_code6",
              "neighborhood": "neighborhood8",
              "city": "city2",
              "state": "state8",
              "country": "country6",
              "complement": "complement2",
              "line_1": "line_14",
              "line_2": "line_20"
            },
            "subscription": {
              "id": "id4",
              "code": "code2",
              "start_at": "2016-03-13T12:52:32.123Z",
              "interval": "interval2",
              "interval_count": 196,
              "billing_type": "billing_type2",
              "current_cycle": {
                "start_at": "2016-03-13T12:52:32.123Z",
                "end_at": "2016-03-13T12:52:32.123Z",
                "id": "id2",
                "billing_at": "2016-03-13T12:52:32.123Z",
                "subscription": {
                  "id": "id2",
                  "code": "code0",
                  "start_at": "2016-03-13T12:52:32.123Z",
                  "interval": "interval0",
                  "interval_count": 166,
                  "billing_type": "billing_type4",
                  "current_cycle": {
                    "start_at": "2016-03-13T12:52:32.123Z",
                    "end_at": "2016-03-13T12:52:32.123Z",
                    "id": "id0",
                    "billing_at": "2016-03-13T12:52:32.123Z",
                    "subscription": {},
                    "status": "status2",
                    "duration": 150,
                    "created_at": "created_at8",
                    "updated_at": "updated_at6",
                    "cycle": 90
                  },
                  "payment_method": "payment_method8",
                  "currency": "currency2",
                  "installments": 78,
                  "status": "status6",
                  "created_at": "2016-03-13T12:52:32.123Z",
                  "updated_at": "2016-03-13T12:52:32.123Z",
                  "customer": {},
                  "card": {
                    "id": "id4",
                    "last_four_digits": "last_four_digits0",
                    "brand": "brand8",
                    "holder_name": "holder_name0",
                    "exp_month": 56,
                    "exp_year": 240,
                    "status": "status4",
                    "created_at": "2016-03-13T12:52:32.123Z",
                    "updated_at": "2016-03-13T12:52:32.123Z",
                    "billing_address": {
                      "street": "street4",
                      "number": "number8",
                      "zip_code": "zip_code8",
                      "neighborhood": "neighborhood0",
                      "city": "city6",
                      "state": "state0",
                      "country": "country8",
                      "complement": "complement0",
                      "line_1": "line_12",
                      "line_2": "line_22"
                    },
                    "customer": {},
                    "metadata": {
                      "key0": "metadata9",
                      "key1": "metadata0"
                    },
                    "type": "type6",
                    "holder_document": "holder_document2",
                    "deleted_at": "2016-03-13T12:52:32.123Z",
                    "first_six_digits": "first_six_digits4",
                    "label": "label4"
                  },
                  "items": [
                    {
                      "id": "id9",
                      "description": "description9",
                      "status": "status1",
                      "created_at": "2016-03-13T12:52:32.123Z",
                      "updated_at": "2016-03-13T12:52:32.123Z",
                      "pricing_scheme": {},
                      "discounts": [
                        {
                          "id": "id0",
                          "value": 206.22,
                          "discount_type": "discount_type8",
                          "status": "status2",
                          "created_at": "2016-03-13T12:52:32.123Z",
                          "cycles": 166,
                          "deleted_at": "2016-03-13T12:52:32.123Z",
                          "description": "description0",
                          "subscription": {},
                          "subscription_item": {
                            "id": "id6",
                            "description": "description6",
                            "status": "status8",
                            "created_at": "2016-03-13T12:52:32.123Z",
                            "updated_at": "2016-03-13T12:52:32.123Z",
                            "pricing_scheme": {},
                            "discounts": [
                              {
                                "id": "id7",
                                "value": 241.29,
                                "discount_type": "discount_type5",
                                "status": "status9",
                                "created_at": "2016-03-13T12:52:32.123Z",
                                "cycles": 89,
                                "deleted_at": "2016-03-13T12:52:32.123Z",
                                "description": "description7",
                                "subscription": {},
                                "subscription_item": {}
                              },
                              {
                                "id": "id8",
                                "value": 241.3,
                                "discount_type": "discount_type6",
                                "status": "status0",
                                "created_at": "2016-03-13T12:52:32.123Z",
                                "cycles": 90,
                                "deleted_at": "2016-03-13T12:52:32.123Z",
                                "description": "description8",
                                "subscription": {},
                                "subscription_item": {}
                              },
                              {
                                "id": "id9",
                                "value": 241.31,
                                "discount_type": "discount_type7",
                                "status": "status1",
                                "created_at": "2016-03-13T12:52:32.123Z",
                                "cycles": 91,
                                "deleted_at": "2016-03-13T12:52:32.123Z",
                                "description": "description9",
                                "subscription": {},
                                "subscription_item": {}
                              }
                            ],
                            "increments": [
                              {
                                "id": "id5",
                                "value": 96.57,
                                "increment_type": "increment_type7",
                                "status": "status7",
                                "created_at": "2016-03-13T12:52:32.123Z",
                                "cycles": 209,
                                "deleted_at": "2016-03-13T12:52:32.123Z",
                                "description": "description5",
                                "subscription": {},
                                "subscription_item": {}
                              }
                            ],
                            "subscription": {},
                            "name": "name6",
                            "quantity": 134,
                            "cycles": 154,
                            "deleted_at": "2016-03-13T12:52:32.123Z"
                          }
                        }
                      ],
                      "increments": [
                        {},
                        {}
                      ],
                      "subscription": {},
                      "name": "name9",
                      "quantity": 211,
                      "cycles": 25,
                      "deleted_at": "2016-03-13T12:52:32.123Z"
                    },
                    {
                      "id": "id0",
                      "description": "description0",
                      "status": "status2",
                      "created_at": "2016-03-13T12:52:32.123Z",
                      "updated_at": "2016-03-13T12:52:32.123Z",
                      "pricing_scheme": {},
                      "discounts": [
                        {
                          "id": "id1",
                          "value": 206.23,
                          "discount_type": "discount_type9",
                          "status": "status3",
                          "created_at": "2016-03-13T12:52:32.123Z",
                          "cycles": 167,
                          "deleted_at": "2016-03-13T12:52:32.123Z",
                          "description": "description1",
                          "subscription": {},
                          "subscription_item": {
                            "id": "id7",
                            "description": "description7",
                            "status": "status9",
                            "created_at": "2016-03-13T12:52:32.123Z",
                            "updated_at": "2016-03-13T12:52:32.123Z",
                            "pricing_scheme": {},
                            "discounts": [
                              {
                                "id": "id8",
                                "value": 241.3,
                                "discount_type": "discount_type6",
                                "status": "status0",
                                "created_at": "2016-03-13T12:52:32.123Z",
                                "cycles": 90,
                                "deleted_at": "2016-03-13T12:52:32.123Z",
                                "description": "description8",
                                "subscription": {},
                                "subscription_item": {}
                              }
                            ],
                            "increments": [
                              {
                                "id": "id6",
                                "value": 96.58,
                                "increment_type": "increment_type8",
                                "status": "status8",
                                "created_at": "2016-03-13T12:52:32.123Z",
                                "cycles": 210,
                                "deleted_at": "2016-03-13T12:52:32.123Z",
                                "description": "description6",
                                "subscription": {},
                                "subscription_item": {}
                              },
                              {
                                "id": "id7",
                                "value": 96.59,
                                "increment_type": "increment_type9",
                                "status": "status9",
                                "created_at": "2016-03-13T12:52:32.123Z",
                                "cycles": 211,
                                "deleted_at": "2016-03-13T12:52:32.123Z",
                                "description": "description7",
                                "subscription": {},
                                "subscription_item": {}
                              }
                            ],
                            "subscription": {},
                            "name": "name7",
                            "quantity": 135,
                            "cycles": 155,
                            "deleted_at": "2016-03-13T12:52:32.123Z"
                          }
                        },
                        {
                          "id": "id2",
                          "value": 206.24,
                          "discount_type": "discount_type0",
                          "status": "status4",
                          "created_at": "2016-03-13T12:52:32.123Z",
                          "cycles": 168,
                          "deleted_at": "2016-03-13T12:52:32.123Z",
                          "description": "description2",
                          "subscription": {},
                          "subscription_item": {
                            "id": "id8",
                            "description": "description8",
                            "status": "status0",
                            "created_at": "2016-03-13T12:52:32.123Z",
                            "updated_at": "2016-03-13T12:52:32.123Z",
                            "pricing_scheme": {},
                            "discounts": [
                              {
                                "id": "id9",
                                "value": 241.31,
                                "discount_type": "discount_type7",
                                "status": "status1",
                                "created_at": "2016-03-13T12:52:32.123Z",
                                "cycles": 91,
                                "deleted_at": "2016-03-13T12:52:32.123Z",
                                "description": "description9",
                                "subscription": {},
                                "subscription_item": {}
                              },
                              {
                                "id": "id0",
                                "value": 241.32,
                                "discount_type": "discount_type8",
                                "status": "status2",
                                "created_at": "2016-03-13T12:52:32.123Z",
                                "cycles": 92,
                                "deleted_at": "2016-03-13T12:52:32.123Z",
                                "description": "description0",
                                "subscription": {},
                                "subscription_item": {}
                              }
                            ],
                            "increments": [
                              {
                                "id": "id7",
                                "value": 96.59,
                                "increment_type": "increment_type9",
                                "status": "status9",
                                "created_at": "2016-03-13T12:52:32.123Z",
                                "cycles": 211,
                                "deleted_at": "2016-03-13T12:52:32.123Z",
                                "description": "description7",
                                "subscription": {},
                                "subscription_item": {}
                              },
                              {
                                "id": "id8",
                                "value": 96.6,
                                "increment_type": "increment_type0",
                                "status": "status0",
                                "created_at": "2016-03-13T12:52:32.123Z",
                                "cycles": 212,
                                "deleted_at": "2016-03-13T12:52:32.123Z",
                                "description": "description8",
                                "subscription": {},
                                "subscription_item": {}
                              },
                              {
                                "id": "id9",
                                "value": 96.61,
                                "increment_type": "increment_type1",
                                "status": "status1",
                                "created_at": "2016-03-13T12:52:32.123Z",
                                "cycles": 213,
                                "deleted_at": "2016-03-13T12:52:32.123Z",
                                "description": "description9",
                                "subscription": {},
                                "subscription_item": {}
                              }
                            ],
                            "subscription": {},
                            "name": "name8",
                            "quantity": 136,
                            "cycles": 156,
                            "deleted_at": "2016-03-13T12:52:32.123Z"
                          }
                        }
                      ],
                      "increments": [
                        {},
                        {},
                        {}
                      ],
                      "subscription": {},
                      "name": "name0",
                      "quantity": 212,
                      "cycles": 24,
                      "deleted_at": "2016-03-13T12:52:32.123Z"
                    },
                    {
                      "id": "id1",
                      "description": "description1",
                      "status": "status3",
                      "created_at": "2016-03-13T12:52:32.123Z",
                      "updated_at": "2016-03-13T12:52:32.123Z",
                      "pricing_scheme": {},
                      "discounts": [
                        {
                          "id": "id2",
                          "value": 206.24,
                          "discount_type": "discount_type0",
                          "status": "status4",
                          "created_at": "2016-03-13T12:52:32.123Z",
                          "cycles": 168,
                          "deleted_at": "2016-03-13T12:52:32.123Z",
                          "description": "description2",
                          "subscription": {},
                          "subscription_item": {
                            "id": "id8",
                            "description": "description8",
                            "status": "status0",
                            "created_at": "2016-03-13T12:52:32.123Z",
                            "updated_at": "2016-03-13T12:52:32.123Z",
                            "pricing_scheme": {},
                            "discounts": [
                              {
                                "id": "id9",
                                "value": 241.31,
                                "discount_type": "discount_type7",
                                "status": "status1",
                                "created_at": "2016-03-13T12:52:32.123Z",
                                "cycles": 91,
                                "deleted_at": "2016-03-13T12:52:32.123Z",
                                "description": "description9",
                                "subscription": {},
                                "subscription_item": {}
                              },
                              {
                                "id": "id0",
                                "value": 241.32,
                                "discount_type": "discount_type8",
                                "status": "status2",
                                "created_at": "2016-03-13T12:52:32.123Z",
                                "cycles": 92,
                                "deleted_at": "2016-03-13T12:52:32.123Z",
                                "description": "description0",
                                "subscription": {},
                                "subscription_item": {}
                              }
                            ],
                            "increments": [
                              {
                                "id": "id7",
                                "value": 96.59,
                                "increment_type": "increment_type9",
                                "status": "status9",
                                "created_at": "2016-03-13T12:52:32.123Z",
                                "cycles": 211,
                                "deleted_at": "2016-03-13T12:52:32.123Z",
                                "description": "description7",
                                "subscription": {},
                                "subscription_item": {}
                              },
                              {
                                "id": "id8",
                                "value": 96.6,
                                "increment_type": "increment_type0",
                                "status": "status0",
                                "created_at": "2016-03-13T12:52:32.123Z",
                                "cycles": 212,
                                "deleted_at": "2016-03-13T12:52:32.123Z",
                                "description": "description8",
                                "subscription": {},
                                "subscription_item": {}
                              },
                              {
                                "id": "id9",
                                "value": 96.61,
                                "increment_type": "increment_type1",
                                "status": "status1",
                                "created_at": "2016-03-13T12:52:32.123Z",
                                "cycles": 213,
                                "deleted_at": "2016-03-13T12:52:32.123Z",
                                "description": "description9",
                                "subscription": {},
                                "subscription_item": {}
                              }
                            ],
                            "subscription": {},
                            "name": "name8",
                            "quantity": 136,
                            "cycles": 156,
                            "deleted_at": "2016-03-13T12:52:32.123Z"
                          }
                        },
                        {
                          "id": "id3",
                          "value": 206.25,
                          "discount_type": "discount_type1",
                          "status": "status5",
                          "created_at": "2016-03-13T12:52:32.123Z",
                          "cycles": 169,
                          "deleted_at": "2016-03-13T12:52:32.123Z",
                          "description": "description3",
                          "subscription": {},
                          "subscription_item": {
                            "id": "id9",
                            "description": "description9",
                            "status": "status1",
                            "created_at": "2016-03-13T12:52:32.123Z",
                            "updated_at": "2016-03-13T12:52:32.123Z",
                            "pricing_scheme": {},
                            "discounts": [
                              {
                                "id": "id0",
                                "value": 241.32,
                                "discount_type": "discount_type8",
                                "status": "status2",
                                "created_at": "2016-03-13T12:52:32.123Z",
                                "cycles": 92,
                                "deleted_at": "2016-03-13T12:52:32.123Z",
                                "description": "description0",
                                "subscription": {},
                                "subscription_item": {}
                              },
                              {
                                "id": "id1",
                                "value": 241.33,
                                "discount_type": "discount_type9",
                                "status": "status3",
                                "created_at": "2016-03-13T12:52:32.123Z",
                                "cycles": 93,
                                "deleted_at": "2016-03-13T12:52:32.123Z",
                                "description": "description1",
                                "subscription": {},
                                "subscription_item": {}
                              },
                              {
                                "id": "id2",
                                "value": 241.34,
                                "discount_type": "discount_type0",
                                "status": "status4",
                                "created_at": "2016-03-13T12:52:32.123Z",
                                "cycles": 94,
                                "deleted_at": "2016-03-13T12:52:32.123Z",
                                "description": "description2",
                                "subscription": {},
                                "subscription_item": {}
                              }
                            ],
                            "increments": [
                              {
                                "id": "id8",
                                "value": 96.6,
                                "increment_type": "increment_type0",
                                "status": "status0",
                                "created_at": "2016-03-13T12:52:32.123Z",
                                "cycles": 212,
                                "deleted_at": "2016-03-13T12:52:32.123Z",
                                "description": "description8",
                                "subscription": {},
                                "subscription_item": {}
                              }
                            ],
                            "subscription": {},
                            "name": "name9",
                            "quantity": 137,
                            "cycles": 157,
                            "deleted_at": "2016-03-13T12:52:32.123Z"
                          }
                        },
                        {
                          "id": "id4",
                          "value": 206.26,
                          "discount_type": "discount_type2",
                          "status": "status6",
                          "created_at": "2016-03-13T12:52:32.123Z",
                          "cycles": 170,
                          "deleted_at": "2016-03-13T12:52:32.123Z",
                          "description": "description4",
                          "subscription": {},
                          "subscription_item": {
                            "id": "id0",
                            "description": "description0",
                            "status": "status2",
                            "created_at": "2016-03-13T12:52:32.123Z",
                            "updated_at": "2016-03-13T12:52:32.123Z",
                            "pricing_scheme": {},
                            "discounts": [
                              {
                                "id": "id1",
                                "value": 241.33,
                                "discount_type": "discount_type9",
                                "status": "status3",
                                "created_at": "2016-03-13T12:52:32.123Z",
                                "cycles": 93,
                                "deleted_at": "2016-03-13T12:52:32.123Z",
                                "description": "description1",
                                "subscription": {},
                                "subscription_item": {}
                              }
                            ],
                            "increments": [
                              {
                                "id": "id9",
                                "value": 96.61,
                                "increment_type": "increment_type1",
                                "status": "status1",
                                "created_at": "2016-03-13T12:52:32.123Z",
                                "cycles": 213,
                                "deleted_at": "2016-03-13T12:52:32.123Z",
                                "description": "description9",
                                "subscription": {},
                                "subscription_item": {}
                              },
                              {
                                "id": "id0",
                                "value": 96.62,
                                "increment_type": "increment_type2",
                                "status": "status2",
                                "created_at": "2016-03-13T12:52:32.123Z",
                                "cycles": 214,
                                "deleted_at": "2016-03-13T12:52:32.123Z",
                                "description": "description0",
                                "subscription": {},
                                "subscription_item": {}
                              }
                            ],
                            "subscription": {},
                            "name": "name0",
                            "quantity": 138,
                            "cycles": 158,
                            "deleted_at": "2016-03-13T12:52:32.123Z"
                          }
                        }
                      ],
                      "increments": [
                        {}
                      ],
                      "subscription": {},
                      "name": "name1",
                      "quantity": 213,
                      "cycles": 23,
                      "deleted_at": "2016-03-13T12:52:32.123Z"
                    }
                  ],
                  "statement_descriptor": "statement_descriptor2",
                  "metadata": {
                    "key0": "metadata1",
                    "key1": "metadata2"
                  },
                  "setup": {
                    "id": "id6",
                    "description": "description4",
                    "amount": 102,
                    "status": "status2"
                  },
                  "gateway_affiliation_id": "gateway_affiliation_id8",
                  "next_billing_at": "2016-03-13T12:52:32.123Z",
                  "billing_day": 206,
                  "minimum_price": 92,
                  "canceled_at": "2016-03-13T12:52:32.123Z",
                  "discounts": [
                    {}
                  ],
                  "increments": [
                    {},
                    {},
                    {}
                  ],
                  "boleto_due_days": 22,
                  "split": {
                    "enabled": false,
                    "rules": [
                      {},
                      {},
                      {}
                    ]
                  },
                  "boleto": {
                    "interest": {},
                    "fine": {},
                    "max_days_to_pay_past_due": 210
                  },
                  "manual_billing": false
                },
                "status": "status4",
                "duration": 180,
                "created_at": "created_at0",
                "updated_at": "updated_at8",
                "cycle": 120
              },
              "payment_method": "payment_method6",
              "currency": "currency4",
              "installments": 108,
              "status": "status4",
              "created_at": "2016-03-13T12:52:32.123Z",
              "updated_at": "2016-03-13T12:52:32.123Z",
              "customer": {},
              "card": {
                "id": "id2",
                "last_four_digits": "last_four_digits8",
                "brand": "brand6",
                "holder_name": "holder_name8",
                "exp_month": 86,
                "exp_year": 210,
                "status": "status6",
                "created_at": "2016-03-13T12:52:32.123Z",
                "updated_at": "2016-03-13T12:52:32.123Z",
                "billing_address": {},
                "customer": {},
                "metadata": {
                  "key0": "metadata1",
                  "key1": "metadata2"
                },
                "type": "type8",
                "holder_document": "holder_document4",
                "deleted_at": "2016-03-13T12:52:32.123Z",
                "first_six_digits": "first_six_digits2",
                "label": "label2"
              },
              "items": [
                {},
                {},
                {}
              ],
              "statement_descriptor": "statement_descriptor4",
              "metadata": {
                "key0": "metadata9",
                "key1": "metadata0"
              },
              "setup": {
                "id": "id8",
                "description": "description2",
                "amount": 132,
                "status": "status0"
              },
              "gateway_affiliation_id": "gateway_affiliation_id0",
              "next_billing_at": "2016-03-13T12:52:32.123Z",
              "billing_day": 176,
              "minimum_price": 62,
              "canceled_at": "2016-03-13T12:52:32.123Z",
              "discounts": [
                {}
              ],
              "increments": [
                {},
                {},
                {}
              ],
              "boleto_due_days": 52,
              "split": {
                "enabled": false,
                "rules": [
                  {},
                  {},
                  {}
                ]
              },
              "boleto": {
                "interest": {},
                "fine": {},
                "max_days_to_pay_past_due": 240
              },
              "manual_billing": false
            },
            "cycle": {},
            "shipping": {
              "amount": 90,
              "description": "description4",
              "recipient_name": "recipient_name2",
              "recipient_phone": "recipient_phone6",
              "address": {},
              "max_delivery_date": "2016-03-13T12:52:32.123Z",
              "estimated_delivery_date": "2016-03-13T12:52:32.123Z",
              "type": "type4"
            },
            "metadata": {
              "key0": "metadata7"
            },
            "due_at": "2016-03-13T12:52:32.123Z",
            "canceled_at": "2016-03-13T12:52:32.123Z",
            "billing_at": "2016-03-13T12:52:32.123Z",
            "seen_at": "2016-03-13T12:52:32.123Z",
            "total_discount": 100,
            "total_increment": 172,
            "subscription_id": "subscription_id0"
          },
          "order": {
            "id": "id0",
            "code": "code8",
            "currency": "currency0",
            "items": [
              {
                "id": "id7",
                "amount": 209,
                "description": "description7",
                "quantity": 67,
                "category": "category5",
                "code": "code5"
              },
              {
                "id": "id8",
                "amount": 210,
                "description": "description8",
                "quantity": 68,
                "category": "category6",
                "code": "code6"
              }
            ],
            "customer": {},
            "status": "status8",
            "created_at": "2016-03-13T12:52:32.123Z",
            "updated_at": "2016-03-13T12:52:32.123Z",
            "charges": [
              {},
              {}
            ],
            "invoice_url": "invoice_url2",
            "shipping": {
              "amount": 248,
              "description": "description4",
              "recipient_name": "recipient_name2",
              "recipient_phone": "recipient_phone6",
              "address": {},
              "max_delivery_date": "2016-03-13T12:52:32.123Z",
              "estimated_delivery_date": "2016-03-13T12:52:32.123Z",
              "type": "type6"
            },
            "metadata": {
              "key0": "metadata3",
              "key1": "metadata4",
              "key2": "metadata5"
            },
            "checkouts": [
              {
                "id": "id7",
                "amount": 159,
                "default_payment_method": "default_payment_method7",
                "success_url": "success_url9",
                "payment_url": "payment_url1",
                "gateway_affiliation_id": "gateway_affiliation_id3",
                "accepted_payment_methods": [
                  "accepted_payment_methods0",
                  "accepted_payment_methods1",
                  "accepted_payment_methods2"
                ],
                "status": "status9",
                "skip_checkout_success_page": true,
                "created_at": "2016-03-13T12:52:32.123Z",
                "updated_at": "2016-03-13T12:52:32.123Z",
                "canceled_at": "2016-03-13T12:52:32.123Z",
                "customer_editable": true,
                "customer": {},
                "billingaddress": {},
                "credit_card": {
                  "statementDescriptor": "statementDescriptor1",
                  "installments": [
                    {
                      "number": "number8",
                      "total": 116
                    }
                  ],
                  "authentication": {
                    "type": "type3",
                    "threed_secure": {
                      "mpi": "mpi7",
                      "eci": "eci5",
                      "cavv": "cavv1",
                      "transaction_Id": "transaction_Id9",
                      "success_url": "success_url7"
                    }
                  }
                },
                "boleto": {
                  "due_at": "2016-03-13T12:52:32.123Z",
                  "instructions": "instructions5"
                },
                "billing_address_editable": true,
                "shipping": {},
                "shippable": true,
                "closed_at": "2016-03-13T12:52:32.123Z",
                "expires_at": "2016-03-13T12:52:32.123Z",
                "currency": "currency7",
                "debit_card": {
                  "statement_descriptor": "statement_descriptor1",
                  "authentication": {
                    "type": "type7",
                    "threed_secure": {
                      "mpi": "mpi3",
                      "eci": "eci9",
                      "cavv": "cavv5",
                      "transaction_Id": "transaction_Id5",
                      "success_url": "success_url1"
                    }
                  }
                },
                "bank_transfer": {
                  "bank": [
                    "bank2",
                    "bank3"
                  ]
                },
                "accepted_brands": [
                  "accepted_brands3",
                  "accepted_brands4",
                  "accepted_brands5"
                ],
                "pix": {
                  "expires_at": "2016-03-13T12:52:32.123Z",
                  "additional_information": [
                    {
                      "Name": "Name4",
                      "Value": "Value2"
                    },
                    {
                      "Name": "Name5",
                      "Value": "Value3"
                    },
                    {
                      "Name": "Name6",
                      "Value": "Value4"
                    }
                  ]
                }
              }
            ],
            "ip": "ip4",
            "session_id": "session_id8",
            "location": {
              "latitude": "latitude2",
              "longitude": "longitude8"
            },
            "device": {
              "platform": "platform0"
            },
            "closed": false
          },
          "customer": {},
          "metadata": {
            "key0": "metadata3"
          },
          "paid_at": "2016-03-13T12:52:32.123Z",
          "canceled_at": "2016-03-13T12:52:32.123Z",
          "canceled_amount": 156,
          "paid_amount": 138,
          "interest_and_fine_paid": 142,
          "recurrency_cycle": "recurrency_cycle0"
        },
        "installments": 28,
        "billing_address": {},
        "subscription": {},
        "cycle": {},
        "shipping": {},
        "metadata": {
          "key0": "metadata1"
        },
        "due_at": "2016-03-13T12:52:32.123Z",
        "canceled_at": "2016-03-13T12:52:32.123Z",
        "billing_at": "2016-03-13T12:52:32.123Z",
        "seen_at": "2016-03-13T12:52:32.123Z",
        "total_discount": 96,
        "total_increment": 168,
        "subscription_id": "subscription_id2"
      },
      "order": {
        "id": "id8",
        "code": "code6",
        "currency": "currency8",
        "items": [
          {},
          {}
        ],
        "customer": {},
        "status": "status0",
        "created_at": "2016-03-13T12:52:32.123Z",
        "updated_at": "2016-03-13T12:52:32.123Z",
        "charges": [
          {},
          {},
          {}
        ],
        "invoice_url": "invoice_url0",
        "shipping": {},
        "metadata": {
          "key0": "metadata5",
          "key1": "metadata4",
          "key2": "metadata3"
        },
        "checkouts": [
          {}
        ],
        "ip": "ip2",
        "session_id": "session_id0",
        "location": {
          "latitude": "latitude6",
          "longitude": "longitude6"
        },
        "device": {
          "platform": "platform8"
        },
        "closed": false
      },
      "customer": {},
      "metadata": {
        "key0": "metadata5"
      },
      "paid_at": "2016-03-13T12:52:32.123Z",
      "canceled_at": "2016-03-13T12:52:32.123Z",
      "canceled_amount": 152,
      "paid_amount": 122,
      "interest_and_fine_paid": 138,
      "recurrency_cycle": "recurrency_cycle2"
    },
    {
      "id": "id9",
      "code": "code7",
      "gateway_id": "gateway_id1",
      "amount": 43,
      "status": "status9",
      "currency": "currency1",
      "payment_method": "payment_method1",
      "due_at": "2016-03-13T12:52:32.123Z",
      "created_at": "2016-03-13T12:52:32.123Z",
      "updated_at": "2016-03-13T12:52:32.123Z",
      "last_transaction": {
        "gateway_id": "gateway_id1",
        "amount": 101,
        "status": "status3",
        "success": true,
        "created_at": "2016-03-13T12:52:32.123Z",
        "updated_at": "2016-03-13T12:52:32.123Z",
        "attempt_count": 77,
        "max_attempts": 65,
        "splits": [
          {
            "type": "type7",
            "amount": 33,
            "recipient": {
              "id": "id5",
              "name": "name5",
              "email": "email1",
              "document": "document1",
              "description": "description5",
              "type": "type5",
              "status": "status3",
              "created_at": "2016-03-13T12:52:32.123Z",
              "updated_at": "2016-03-13T12:52:32.123Z",
              "deleted_at": "2016-03-13T12:52:32.123Z",
              "default_bank_account": {
                "id": "id3",
                "holder_name": "holder_name9",
                "holder_type": "holder_type5",
                "bank": "bank1",
                "branch_number": "branch_number9",
                "branch_check_digit": "branch_check_digit9",
                "account_number": "account_number3",
                "account_check_digit": "account_check_digit9",
                "type": "type7",
                "status": "status5",
                "created_at": "2016-03-13T12:52:32.123Z",
                "updated_at": "2016-03-13T12:52:32.123Z",
                "deleted_at": "2016-03-13T12:52:32.123Z",
                "recipient": {
                  "id": "id5",
                  "name": "name5",
                  "email": "email1",
                  "document": "document1",
                  "description": "description5",
                  "type": "type5",
                  "status": "status3",
                  "created_at": "2016-03-13T12:52:32.123Z",
                  "updated_at": "2016-03-13T12:52:32.123Z",
                  "deleted_at": "2016-03-13T12:52:32.123Z",
                  "default_bank_account": {
                    "id": "id3",
                    "holder_name": "holder_name9",
                    "holder_type": "holder_type5",
                    "bank": "bank1",
                    "branch_number": "branch_number9",
                    "branch_check_digit": "branch_check_digit9",
                    "account_number": "account_number3",
                    "account_check_digit": "account_check_digit9",
                    "type": "type3",
                    "status": "status5",
                    "created_at": "2016-03-13T12:52:32.123Z",
                    "updated_at": "2016-03-13T12:52:32.123Z",
                    "deleted_at": "2016-03-13T12:52:32.123Z",
                    "recipient": {},
                    "metadata": {
                      "key0": "metadata0"
                    },
                    "pix_key": "pix_key3"
                  },
                  "gateway_recipients": [
                    {
                      "gateway": "gateway9",
                      "status": "status1",
                      "pgid": "pgid5",
                      "created_at": "created_at7",
                      "updated_at": "updated_at5"
                    }
                  ],
                  "metadata": {
                    "key0": "metadata8"
                  },
                  "automatic_anticipation_settings": {
                    "enabled": true,
                    "type": "type1",
                    "volume_percentage": 35,
                    "delay": 255,
                    "days": [
                      231,
                      232,
                      233
                    ]
                  },
                  "transfer_settings": {
                    "transfer_enabled": true,
                    "transfer_interval": "transfer_interval9",
                    "transfer_day": 201
                  },
                  "code": "code3",
                  "payment_mode": "payment_mode9"
                },
                "metadata": {
                  "key0": "metadata0"
                },
                "pix_key": "pix_key3"
              },
              "gateway_recipients": [
                {}
              ],
              "metadata": {
                "key0": "metadata8"
              },
              "automatic_anticipation_settings": {
                "enabled": true,
                "type": "type1",
                "volume_percentage": 105,
                "delay": 185,
                "days": [
                  161,
                  162,
                  163
                ]
              },
              "transfer_settings": {
                "transfer_enabled": true,
                "transfer_interval": "transfer_interval9",
                "transfer_day": 15
              },
              "code": "code3",
              "payment_mode": "payment_mode1"
            },
            "gateway_id": "gateway_id7",
            "options": {
              "liable": true,
              "charge_processing_fee": true,
              "charge_remainder_fee": "charge_remainder_fee7"
            },
            "id": "id3"
          },
          {
            "type": "type6",
            "amount": 34,
            "recipient": {
              "id": "id6",
              "name": "name6",
              "email": "email0",
              "document": "document0",
              "description": "description4",
              "type": "type4",
              "status": "status2",
              "created_at": "2016-03-13T12:52:32.123Z",
              "updated_at": "2016-03-13T12:52:32.123Z",
              "deleted_at": "2016-03-13T12:52:32.123Z",
              "default_bank_account": {
                "id": "id4",
                "holder_name": "holder_name0",
                "holder_type": "holder_type6",
                "bank": "bank2",
                "branch_number": "branch_number0",
                "branch_check_digit": "branch_check_digit0",
                "account_number": "account_number4",
                "account_check_digit": "account_check_digit0",
                "type": "type6",
                "status": "status6",
                "created_at": "2016-03-13T12:52:32.123Z",
                "updated_at": "2016-03-13T12:52:32.123Z",
                "deleted_at": "2016-03-13T12:52:32.123Z",
                "recipient": {
                  "id": "id6",
                  "name": "name6",
                  "email": "email0",
                  "document": "document0",
                  "description": "description6",
                  "type": "type4",
                  "status": "status2",
                  "created_at": "2016-03-13T12:52:32.123Z",
                  "updated_at": "2016-03-13T12:52:32.123Z",
                  "deleted_at": "2016-03-13T12:52:32.123Z",
                  "default_bank_account": {
                    "id": "id4",
                    "holder_name": "holder_name0",
                    "holder_type": "holder_type6",
                    "bank": "bank2",
                    "branch_number": "branch_number0",
                    "branch_check_digit": "branch_check_digit0",
                    "account_number": "account_number4",
                    "account_check_digit": "account_check_digit0",
                    "type": "type4",
                    "status": "status6",
                    "created_at": "2016-03-13T12:52:32.123Z",
                    "updated_at": "2016-03-13T12:52:32.123Z",
                    "deleted_at": "2016-03-13T12:52:32.123Z",
                    "recipient": {},
                    "metadata": {
                      "key0": "metadata1",
                      "key1": "metadata0",
                      "key2": "metadata9"
                    },
                    "pix_key": "pix_key2"
                  },
                  "gateway_recipients": [
                    {
                      "gateway": "gateway0",
                      "status": "status2",
                      "pgid": "pgid6",
                      "created_at": "created_at8",
                      "updated_at": "updated_at6"
                    },
                    {
                      "gateway": "gateway1",
                      "status": "status3",
                      "pgid": "pgid7",
                      "created_at": "created_at9",
                      "updated_at": "updated_at7"
                    }
                  ],
                  "metadata": {
                    "key0": "metadata7",
                    "key1": "metadata8",
                    "key2": "metadata9"
                  },
                  "automatic_anticipation_settings": {
                    "enabled": false,
                    "type": "type0",
                    "volume_percentage": 34,
                    "delay": 0,
                    "days": [
                      232
                    ]
                  },
                  "transfer_settings": {
                    "transfer_enabled": false,
                    "transfer_interval": "transfer_interval8",
                    "transfer_day": 200
                  },
                  "code": "code4",
                  "payment_mode": "payment_mode0"
                },
                "metadata": {
                  "key0": "metadata1",
                  "key1": "metadata0",
                  "key2": "metadata9"
                },
                "pix_key": "pix_key2"
              },
              "gateway_recipients": [
                {},
                {}
              ],
              "metadata": {
                "key0": "metadata7",
                "key1": "metadata8",
                "key2": "metadata9"
              },
              "automatic_anticipation_settings": {
                "enabled": false,
                "type": "type0",
                "volume_percentage": 104,
                "delay": 186,
                "days": [
                  162
                ]
              },
              "transfer_settings": {
                "transfer_enabled": false,
                "transfer_interval": "transfer_interval8",
                "transfer_day": 14
              },
              "code": "code4",
              "payment_mode": "payment_mode0"
            },
            "gateway_id": "gateway_id6",
            "options": {
              "liable": false,
              "charge_processing_fee": false,
              "charge_remainder_fee": "charge_remainder_fee6"
            },
            "id": "id4"
          }
        ],
        "next_attempt": "2016-03-13T12:52:32.123Z",
        "transaction_type": "transaction",
        "id": "id1",
        "gateway_response": {
          "code": "code1",
          "errors": [
            {
              "message": "message8"
            },
            {
              "message": "message9"
            }
          ]
        },
        "antifraud_response": {
          "status": "status1",
          "return_code": "return_code9",
          "return_message": "return_message7",
          "provider_name": "provider_name7",
          "score": "score9"
        },
        "metadata": {
          "key0": "metadata8"
        },
        "split": [
          {}
        ],
        "interest": {
          "days": 9,
          "type": "type1",
          "amount": 83
        },
        "fine": {
          "days": 25,
          "type": "type3",
          "amount": 99
        },
        "max_days_to_pay_past_due": 13
      },
      "invoice": {
        "id": "id3",
        "code": "code1",
        "url": "url7",
        "amount": 11,
        "status": "status5",
        "payment_method": "payment_method7",
        "created_at": "2016-03-13T12:52:32.123Z",
        "items": [
          {
            "amount": 48,
            "description": "description0",
            "pricing_scheme": {
              "price": 184,
              "scheme_type": "scheme_type8",
              "price_brackets": [
                {
                  "start_quantity": 25,
                  "price": 37,
                  "end_quantity": 33,
                  "overage_price": 47
                },
                {
                  "start_quantity": 26,
                  "price": 36,
                  "end_quantity": 34,
                  "overage_price": 48
                },
                {
                  "start_quantity": 27,
                  "price": 35,
                  "end_quantity": 35,
                  "overage_price": 49
                }
              ],
              "minimum_price": 88,
              "percentage": 248.26
            },
            "price_bracket": {},
            "quantity": 162,
            "name": "name0",
            "subscription_item_id": "subscription_item_id4"
          },
          {
            "amount": 49,
            "description": "description1",
            "pricing_scheme": {
              "price": 185,
              "scheme_type": "scheme_type7",
              "price_brackets": [
                {
                  "start_quantity": 24,
                  "price": 38,
                  "end_quantity": 32,
                  "overage_price": 46
                },
                {
                  "start_quantity": 25,
                  "price": 37,
                  "end_quantity": 33,
                  "overage_price": 47
                }
              ],
              "minimum_price": 89,
              "percentage": 248.25
            },
            "price_bracket": {},
            "quantity": 163,
            "name": "name1",
            "subscription_item_id": "subscription_item_id5"
          }
        ],
        "customer": {
          "id": "id7",
          "name": "name7",
          "email": "email9",
          "delinquent": true,
          "created_at": "2016-03-13T12:52:32.123Z",
          "updated_at": "2016-03-13T12:52:32.123Z",
          "document": "document9",
          "type": "type3",
          "fb_access_token": "fb_access_token1",
          "address": {
            "id": "id3",
            "street": "street3",
            "number": "number1",
            "complement": "complement9",
            "zip_code": "zip_code7",
            "neighborhood": "neighborhood9",
            "city": "city3",
            "state": "state9",
            "country": "country7",
            "status": "status5",
            "created_at": "2016-03-13T12:52:32.123Z",
            "updated_at": "2016-03-13T12:52:32.123Z",
            "customer": {
              "id": "id3",
              "name": "name3",
              "email": "email3",
              "delinquent": true,
              "created_at": "2016-03-13T12:52:32.123Z",
              "updated_at": "2016-03-13T12:52:32.123Z",
              "document": "document7",
              "type": "type7",
              "fb_access_token": "fb_access_token7",
              "address": {
                "id": "id9",
                "street": "street9",
                "number": "number7",
                "complement": "complement5",
                "zip_code": "zip_code3",
                "neighborhood": "neighborhood5",
                "city": "city9",
                "state": "state5",
                "country": "country3",
                "status": "status1",
                "created_at": "2016-03-13T12:52:32.123Z",
                "updated_at": "2016-03-13T12:52:32.123Z",
                "customer": {},
                "metadata": {
                  "key0": "metadata0",
                  "key1": "metadata9"
                },
                "line_1": "line_13",
                "line_2": "line_27",
                "deleted_at": "2016-03-13T12:52:32.123Z"
              },
              "metadata": {
                "key0": "metadata0",
                "key1": "metadata9",
                "key2": "metadata8"
              },
              "phones": {
                "home_phone": {
                  "country_code": "country_code5",
                  "number": "number3",
                  "area_code": "area_code5"
                },
                "mobile_phone": {
                  "country_code": "country_code5",
                  "number": "number7",
                  "area_code": "area_code5"
                }
              },
              "fb_id": 189,
              "code": "code1",
              "document_type": "document_type1"
            },
            "metadata": {
              "key0": "metadata0"
            },
            "line_1": "line_13",
            "line_2": "line_21",
            "deleted_at": "2016-03-13T12:52:32.123Z"
          },
          "metadata": {
            "key0": "metadata6"
          },
          "phones": {
            "home_phone": {},
            "mobile_phone": {}
          },
          "fb_id": 139,
          "code": "code5",
          "document_type": "document_type5"
        },
        "charge": {
          "id": "id5",
          "code": "code3",
          "gateway_id": "gateway_id5",
          "amount": 45,
          "status": "status7",
          "currency": "currency5",
          "payment_method": "payment_method5",
          "due_at": "2016-03-13T12:52:32.123Z",
          "created_at": "2016-03-13T12:52:32.123Z",
          "updated_at": "2016-03-13T12:52:32.123Z",
          "last_transaction": {
            "gateway_id": "gateway_id7",
            "amount": 103,
            "status": "status9",
            "success": true,
            "created_at": "2016-03-13T12:52:32.123Z",
            "updated_at": "2016-03-13T12:52:32.123Z",
            "attempt_count": 79,
            "max_attempts": 67,
            "splits": [
              {},
              {},
              {}
            ],
            "next_attempt": "2016-03-13T12:52:32.123Z",
            "transaction_type": "transaction",
            "id": "id7",
            "gateway_response": {
              "code": "code7",
              "errors": [
                {},
                {},
                {}
              ]
            },
            "antifraud_response": {
              "status": "status7",
              "return_code": "return_code5",
              "return_message": "return_message3",
              "provider_name": "provider_name3",
              "score": "score5"
            },
            "metadata": {
              "key0": "metadata2",
              "key1": "metadata1"
            },
            "split": [
              {},
              {}
            ],
            "interest": {
              "days": 9,
              "type": "type3",
              "amount": 83
            },
            "fine": {
              "days": 27,
              "type": "type9",
              "amount": 101
            },
            "max_days_to_pay_past_due": 15
          },
          "invoice": {
            "id": "id9",
            "code": "code7",
            "url": "url3",
            "amount": 247,
            "status": "status1",
            "payment_method": "payment_method1",
            "created_at": "2016-03-13T12:52:32.123Z",
            "items": [
              {},
              {},
              {}
            ],
            "customer": {},
            "charge": {},
            "installments": 31,
            "billing_address": {
              "street": "street1",
              "number": "number1",
              "zip_code": "zip_code5",
              "neighborhood": "neighborhood7",
              "city": "city1",
              "state": "state7",
              "country": "country5",
              "complement": "complement3",
              "line_1": "line_15",
              "line_2": "line_29"
            },
            "subscription": {
              "id": "id5",
              "code": "code3",
              "start_at": "2016-03-13T12:52:32.123Z",
              "interval": "interval3",
              "interval_count": 197,
              "billing_type": "billing_type1",
              "current_cycle": {
                "start_at": "2016-03-13T12:52:32.123Z",
                "end_at": "2016-03-13T12:52:32.123Z",
                "id": "id3",
                "billing_at": "2016-03-13T12:52:32.123Z",
                "subscription": {
                  "id": "id1",
                  "code": "code9",
                  "start_at": "2016-03-13T12:52:32.123Z",
                  "interval": "interval9",
                  "interval_count": 165,
                  "billing_type": "billing_type5",
                  "current_cycle": {
                    "start_at": "2016-03-13T12:52:32.123Z",
                    "end_at": "2016-03-13T12:52:32.123Z",
                    "id": "id9",
                    "billing_at": "2016-03-13T12:52:32.123Z",
                    "subscription": {},
                    "status": "status1",
                    "duration": 149,
                    "created_at": "created_at7",
                    "updated_at": "updated_at5",
                    "cycle": 89
                  },
                  "payment_method": "payment_method9",
                  "currency": "currency1",
                  "installments": 77,
                  "status": "status7",
                  "created_at": "2016-03-13T12:52:32.123Z",
                  "updated_at": "2016-03-13T12:52:32.123Z",
                  "customer": {},
                  "card": {
                    "id": "id5",
                    "last_four_digits": "last_four_digits1",
                    "brand": "brand9",
                    "holder_name": "holder_name9",
                    "exp_month": 55,
                    "exp_year": 241,
                    "status": "status3",
                    "created_at": "2016-03-13T12:52:32.123Z",
                    "updated_at": "2016-03-13T12:52:32.123Z",
                    "billing_address": {
                      "street": "street3",
                      "number": "number9",
                      "zip_code": "zip_code7",
                      "neighborhood": "neighborhood9",
                      "city": "city7",
                      "state": "state1",
                      "country": "country7",
                      "complement": "complement1",
                      "line_1": "line_13",
                      "line_2": "line_21"
                    },
                    "customer": {},
                    "metadata": {
                      "key0": "metadata8"
                    },
                    "type": "type5",
                    "holder_document": "holder_document1",
                    "deleted_at": "2016-03-13T12:52:32.123Z",
                    "first_six_digits": "first_six_digits5",
                    "label": "label5"
                  },
                  "items": [
                    {
                      "id": "id8",
                      "description": "description8",
                      "status": "status0",
                      "created_at": "2016-03-13T12:52:32.123Z",
                      "updated_at": "2016-03-13T12:52:32.123Z",
                      "pricing_scheme": {},
                      "discounts": [
                        {
                          "id": "id9",
                          "value": 206.21,
                          "discount_type": "discount_type7",
                          "status": "status1",
                          "created_at": "2016-03-13T12:52:32.123Z",
                          "cycles": 165,
                          "deleted_at": "2016-03-13T12:52:32.123Z",
                          "description": "description9",
                          "subscription": {},
                          "subscription_item": {
                            "id": "id5",
                            "description": "description5",
                            "status": "status7",
                            "created_at": "2016-03-13T12:52:32.123Z",
                            "updated_at": "2016-03-13T12:52:32.123Z",
                            "pricing_scheme": {},
                            "discounts": [
                              {
                                "id": "id6",
                                "value": 241.28,
                                "discount_type": "discount_type4",
                                "status": "status8",
                                "created_at": "2016-03-13T12:52:32.123Z",
                                "cycles": 88,
                                "deleted_at": "2016-03-13T12:52:32.123Z",
                                "description": "description6",
                                "subscription": {},
                                "subscription_item": {}
                              },
                              {
                                "id": "id7",
                                "value": 241.29,
                                "discount_type": "discount_type5",
                                "status": "status9",
                                "created_at": "2016-03-13T12:52:32.123Z",
                                "cycles": 89,
                                "deleted_at": "2016-03-13T12:52:32.123Z",
                                "description": "description7",
                                "subscription": {},
                                "subscription_item": {}
                              }
                            ],
                            "increments": [
                              {
                                "id": "id4",
                                "value": 96.56,
                                "increment_type": "increment_type6",
                                "status": "status6",
                                "created_at": "2016-03-13T12:52:32.123Z",
                                "cycles": 208,
                                "deleted_at": "2016-03-13T12:52:32.123Z",
                                "description": "description4",
                                "subscription": {},
                                "subscription_item": {}
                              },
                              {
                                "id": "id5",
                                "value": 96.57,
                                "increment_type": "increment_type7",
                                "status": "status7",
                                "created_at": "2016-03-13T12:52:32.123Z",
                                "cycles": 209,
                                "deleted_at": "2016-03-13T12:52:32.123Z",
                                "description": "description5",
                                "subscription": {},
                                "subscription_item": {}
                              },
                              {
                                "id": "id6",
                                "value": 96.58,
                                "increment_type": "increment_type8",
                                "status": "status8",
                                "created_at": "2016-03-13T12:52:32.123Z",
                                "cycles": 210,
                                "deleted_at": "2016-03-13T12:52:32.123Z",
                                "description": "description6",
                                "subscription": {},
                                "subscription_item": {}
                              }
                            ],
                            "subscription": {},
                            "name": "name5",
                            "quantity": 133,
                            "cycles": 153,
                            "deleted_at": "2016-03-13T12:52:32.123Z"
                          }
                        },
                        {
                          "id": "id0",
                          "value": 206.22,
                          "discount_type": "discount_type8",
                          "status": "status2",
                          "created_at": "2016-03-13T12:52:32.123Z",
                          "cycles": 166,
                          "deleted_at": "2016-03-13T12:52:32.123Z",
                          "description": "description0",
                          "subscription": {},
                          "subscription_item": {
                            "id": "id6",
                            "description": "description6",
                            "status": "status8",
                            "created_at": "2016-03-13T12:52:32.123Z",
                            "updated_at": "2016-03-13T12:52:32.123Z",
                            "pricing_scheme": {},
                            "discounts": [
                              {
                                "id": "id7",
                                "value": 241.29,
                                "discount_type": "discount_type5",
                                "status": "status9",
                                "created_at": "2016-03-13T12:52:32.123Z",
                                "cycles": 89,
                                "deleted_at": "2016-03-13T12:52:32.123Z",
                                "description": "description7",
                                "subscription": {},
                                "subscription_item": {}
                              },
                              {
                                "id": "id8",
                                "value": 241.3,
                                "discount_type": "discount_type6",
                                "status": "status0",
                                "created_at": "2016-03-13T12:52:32.123Z",
                                "cycles": 90,
                                "deleted_at": "2016-03-13T12:52:32.123Z",
                                "description": "description8",
                                "subscription": {},
                                "subscription_item": {}
                              },
                              {
                                "id": "id9",
                                "value": 241.31,
                                "discount_type": "discount_type7",
                                "status": "status1",
                                "created_at": "2016-03-13T12:52:32.123Z",
                                "cycles": 91,
                                "deleted_at": "2016-03-13T12:52:32.123Z",
                                "description": "description9",
                                "subscription": {},
                                "subscription_item": {}
                              }
                            ],
                            "increments": [
                              {
                                "id": "id5",
                                "value": 96.57,
                                "increment_type": "increment_type7",
                                "status": "status7",
                                "created_at": "2016-03-13T12:52:32.123Z",
                                "cycles": 209,
                                "deleted_at": "2016-03-13T12:52:32.123Z",
                                "description": "description5",
                                "subscription": {},
                                "subscription_item": {}
                              }
                            ],
                            "subscription": {},
                            "name": "name6",
                            "quantity": 134,
                            "cycles": 154,
                            "deleted_at": "2016-03-13T12:52:32.123Z"
                          }
                        },
                        {
                          "id": "id1",
                          "value": 206.23,
                          "discount_type": "discount_type9",
                          "status": "status3",
                          "created_at": "2016-03-13T12:52:32.123Z",
                          "cycles": 167,
                          "deleted_at": "2016-03-13T12:52:32.123Z",
                          "description": "description1",
                          "subscription": {},
                          "subscription_item": {
                            "id": "id7",
                            "description": "description7",
                            "status": "status9",
                            "created_at": "2016-03-13T12:52:32.123Z",
                            "updated_at": "2016-03-13T12:52:32.123Z",
                            "pricing_scheme": {},
                            "discounts": [
                              {
                                "id": "id8",
                                "value": 241.3,
                                "discount_type": "discount_type6",
                                "status": "status0",
                                "created_at": "2016-03-13T12:52:32.123Z",
                                "cycles": 90,
                                "deleted_at": "2016-03-13T12:52:32.123Z",
                                "description": "description8",
                                "subscription": {},
                                "subscription_item": {}
                              }
                            ],
                            "increments": [
                              {
                                "id": "id6",
                                "value": 96.58,
                                "increment_type": "increment_type8",
                                "status": "status8",
                                "created_at": "2016-03-13T12:52:32.123Z",
                                "cycles": 210,
                                "deleted_at": "2016-03-13T12:52:32.123Z",
                                "description": "description6",
                                "subscription": {},
                                "subscription_item": {}
                              },
                              {
                                "id": "id7",
                                "value": 96.59,
                                "increment_type": "increment_type9",
                                "status": "status9",
                                "created_at": "2016-03-13T12:52:32.123Z",
                                "cycles": 211,
                                "deleted_at": "2016-03-13T12:52:32.123Z",
                                "description": "description7",
                                "subscription": {},
                                "subscription_item": {}
                              }
                            ],
                            "subscription": {},
                            "name": "name7",
                            "quantity": 135,
                            "cycles": 155,
                            "deleted_at": "2016-03-13T12:52:32.123Z"
                          }
                        }
                      ],
                      "increments": [
                        {}
                      ],
                      "subscription": {},
                      "name": "name8",
                      "quantity": 210,
                      "cycles": 26,
                      "deleted_at": "2016-03-13T12:52:32.123Z"
                    },
                    {
                      "id": "id9",
                      "description": "description9",
                      "status": "status1",
                      "created_at": "2016-03-13T12:52:32.123Z",
                      "updated_at": "2016-03-13T12:52:32.123Z",
                      "pricing_scheme": {},
                      "discounts": [
                        {
                          "id": "id0",
                          "value": 206.22,
                          "discount_type": "discount_type8",
                          "status": "status2",
                          "created_at": "2016-03-13T12:52:32.123Z",
                          "cycles": 166,
                          "deleted_at": "2016-03-13T12:52:32.123Z",
                          "description": "description0",
                          "subscription": {},
                          "subscription_item": {
                            "id": "id6",
                            "description": "description6",
                            "status": "status8",
                            "created_at": "2016-03-13T12:52:32.123Z",
                            "updated_at": "2016-03-13T12:52:32.123Z",
                            "pricing_scheme": {},
                            "discounts": [
                              {
                                "id": "id7",
                                "value": 241.29,
                                "discount_type": "discount_type5",
                                "status": "status9",
                                "created_at": "2016-03-13T12:52:32.123Z",
                                "cycles": 89,
                                "deleted_at": "2016-03-13T12:52:32.123Z",
                                "description": "description7",
                                "subscription": {},
                                "subscription_item": {}
                              },
                              {
                                "id": "id8",
                                "value": 241.3,
                                "discount_type": "discount_type6",
                                "status": "status0",
                                "created_at": "2016-03-13T12:52:32.123Z",
                                "cycles": 90,
                                "deleted_at": "2016-03-13T12:52:32.123Z",
                                "description": "description8",
                                "subscription": {},
                                "subscription_item": {}
                              },
                              {
                                "id": "id9",
                                "value": 241.31,
                                "discount_type": "discount_type7",
                                "status": "status1",
                                "created_at": "2016-03-13T12:52:32.123Z",
                                "cycles": 91,
                                "deleted_at": "2016-03-13T12:52:32.123Z",
                                "description": "description9",
                                "subscription": {},
                                "subscription_item": {}
                              }
                            ],
                            "increments": [
                              {
                                "id": "id5",
                                "value": 96.57,
                                "increment_type": "increment_type7",
                                "status": "status7",
                                "created_at": "2016-03-13T12:52:32.123Z",
                                "cycles": 209,
                                "deleted_at": "2016-03-13T12:52:32.123Z",
                                "description": "description5",
                                "subscription": {},
                                "subscription_item": {}
                              }
                            ],
                            "subscription": {},
                            "name": "name6",
                            "quantity": 134,
                            "cycles": 154,
                            "deleted_at": "2016-03-13T12:52:32.123Z"
                          }
                        }
                      ],
                      "increments": [
                        {},
                        {}
                      ],
                      "subscription": {},
                      "name": "name9",
                      "quantity": 211,
                      "cycles": 25,
                      "deleted_at": "2016-03-13T12:52:32.123Z"
                    }
                  ],
                  "statement_descriptor": "statement_descriptor1",
                  "metadata": {
                    "key0": "metadata2",
                    "key1": "metadata3",
                    "key2": "metadata4"
                  },
                  "setup": {
                    "id": "id5",
                    "description": "description5",
                    "amount": 101,
                    "status": "status3"
                  },
                  "gateway_affiliation_id": "gateway_affiliation_id7",
                  "next_billing_at": "2016-03-13T12:52:32.123Z",
                  "billing_day": 207,
                  "minimum_price": 93,
                  "canceled_at": "2016-03-13T12:52:32.123Z",
                  "discounts": [
                    {},
                    {},
                    {}
                  ],
                  "increments": [
                    {}
                  ],
                  "boleto_due_days": 21,
                  "split": {
                    "enabled": true,
                    "rules": [
                      {},
                      {}
                    ]
                  },
                  "boleto": {
                    "interest": {},
                    "fine": {},
                    "max_days_to_pay_past_due": 209
                  },
                  "manual_billing": true
                },
                "status": "status5",
                "duration": 181,
                "created_at": "created_at1",
                "updated_at": "updated_at9",
                "cycle": 121
              },
              "payment_method": "payment_method5",
              "currency": "currency5",
              "installments": 109,
              "status": "status3",
              "created_at": "2016-03-13T12:52:32.123Z",
              "updated_at": "2016-03-13T12:52:32.123Z",
              "customer": {},
              "card": {
                "id": "id1",
                "last_four_digits": "last_four_digits7",
                "brand": "brand5",
                "holder_name": "holder_name7",
                "exp_month": 87,
                "exp_year": 209,
                "status": "status7",
                "created_at": "2016-03-13T12:52:32.123Z",
                "updated_at": "2016-03-13T12:52:32.123Z",
                "billing_address": {},
                "customer": {},
                "metadata": {
                  "key0": "metadata2",
                  "key1": "metadata3",
                  "key2": "metadata4"
                },
                "type": "type9",
                "holder_document": "holder_document5",
                "deleted_at": "2016-03-13T12:52:32.123Z",
                "first_six_digits": "first_six_digits1",
                "label": "label1"
              },
              "items": [
                {}
              ],
              "statement_descriptor": "statement_descriptor5",
              "metadata": {
                "key0": "metadata8"
              },
              "setup": {
                "id": "id9",
                "description": "description1",
                "amount": 133,
                "status": "status9"
              },
              "gateway_affiliation_id": "gateway_affiliation_id1",
              "next_billing_at": "2016-03-13T12:52:32.123Z",
              "billing_day": 175,
              "minimum_price": 61,
              "canceled_at": "2016-03-13T12:52:32.123Z",
              "discounts": [
                {},
                {}
              ],
              "increments": [
                {},
                {}
              ],
              "boleto_due_days": 53,
              "split": {
                "enabled": true,
                "rules": [
                  {}
                ]
              },
              "boleto": {
                "interest": {},
                "fine": {},
                "max_days_to_pay_past_due": 241
              },
              "manual_billing": true
            },
            "cycle": {},
            "shipping": {
              "amount": 89,
              "description": "description3",
              "recipient_name": "recipient_name1",
              "recipient_phone": "recipient_phone5",
              "address": {},
              "max_delivery_date": "2016-03-13T12:52:32.123Z",
              "estimated_delivery_date": "2016-03-13T12:52:32.123Z",
              "type": "type3"
            },
            "metadata": {
              "key0": "metadata6",
              "key1": "metadata5"
            },
            "due_at": "2016-03-13T12:52:32.123Z",
            "canceled_at": "2016-03-13T12:52:32.123Z",
            "billing_at": "2016-03-13T12:52:32.123Z",
            "seen_at": "2016-03-13T12:52:32.123Z",
            "total_discount": 99,
            "total_increment": 171,
            "subscription_id": "subscription_id9"
          },
          "order": {
            "id": "id1",
            "code": "code9",
            "currency": "currency9",
            "items": [
              {
                "id": "id8",
                "amount": 210,
                "description": "description8",
                "quantity": 68,
                "category": "category6",
                "code": "code6"
              },
              {
                "id": "id9",
                "amount": 211,
                "description": "description9",
                "quantity": 69,
                "category": "category7",
                "code": "code7"
              },
              {
                "id": "id0",
                "amount": 212,
                "description": "description0",
                "quantity": 70,
                "category": "category8",
                "code": "code8"
              }
            ],
            "customer": {},
            "status": "status7",
            "created_at": "2016-03-13T12:52:32.123Z",
            "updated_at": "2016-03-13T12:52:32.123Z",
            "charges": [
              {}
            ],
            "invoice_url": "invoice_url3",
            "shipping": {
              "amount": 249,
              "description": "description5",
              "recipient_name": "recipient_name3",
              "recipient_phone": "recipient_phone7",
              "address": {},
              "max_delivery_date": "2016-03-13T12:52:32.123Z",
              "estimated_delivery_date": "2016-03-13T12:52:32.123Z",
              "type": "type5"
            },
            "metadata": {
              "key0": "metadata2",
              "key1": "metadata3"
            },
            "checkouts": [
              {
                "id": "id8",
                "amount": 160,
                "default_payment_method": "default_payment_method8",
                "success_url": "success_url0",
                "payment_url": "payment_url2",
                "gateway_affiliation_id": "gateway_affiliation_id4",
                "accepted_payment_methods": [
                  "accepted_payment_methods1"
                ],
                "status": "status0",
                "skip_checkout_success_page": false,
                "created_at": "2016-03-13T12:52:32.123Z",
                "updated_at": "2016-03-13T12:52:32.123Z",
                "canceled_at": "2016-03-13T12:52:32.123Z",
                "customer_editable": false,
                "customer": {},
                "billingaddress": {},
                "credit_card": {
                  "statementDescriptor": "statementDescriptor2",
                  "installments": [
                    {
                      "number": "number9",
                      "total": 117
                    },
                    {
                      "number": "number0",
                      "total": 118
                    }
                  ],
                  "authentication": {
                    "type": "type2",
                    "threed_secure": {
                      "mpi": "mpi6",
                      "eci": "eci6",
                      "cavv": "cavv2",
                      "transaction_Id": "transaction_Id8",
                      "success_url": "success_url8"
                    }
                  }
                },
                "boleto": {
                  "due_at": "2016-03-13T12:52:32.123Z",
                  "instructions": "instructions6"
                },
                "billing_address_editable": false,
                "shipping": {},
                "shippable": false,
                "closed_at": "2016-03-13T12:52:32.123Z",
                "expires_at": "2016-03-13T12:52:32.123Z",
                "currency": "currency8",
                "debit_card": {
                  "statement_descriptor": "statement_descriptor2",
                  "authentication": {
                    "type": "type6",
                    "threed_secure": {
                      "mpi": "mpi4",
                      "eci": "eci8",
                      "cavv": "cavv6",
                      "transaction_Id": "transaction_Id6",
                      "success_url": "success_url0"
                    }
                  }
                },
                "bank_transfer": {
                  "bank": [
                    "bank1"
                  ]
                },
                "accepted_brands": [
                  "accepted_brands4"
                ],
                "pix": {
                  "expires_at": "2016-03-13T12:52:32.123Z",
                  "additional_information": [
                    {
                      "Name": "Name5",
                      "Value": "Value3"
                    }
                  ]
                }
              },
              {
                "id": "id9",
                "amount": 161,
                "default_payment_method": "default_payment_method9",
                "success_url": "success_url1",
                "payment_url": "payment_url3",
                "gateway_affiliation_id": "gateway_affiliation_id5",
                "accepted_payment_methods": [
                  "accepted_payment_methods2",
                  "accepted_payment_methods3"
                ],
                "status": "status1",
                "skip_checkout_success_page": true,
                "created_at": "2016-03-13T12:52:32.123Z",
                "updated_at": "2016-03-13T12:52:32.123Z",
                "canceled_at": "2016-03-13T12:52:32.123Z",
                "customer_editable": true,
                "customer": {},
                "billingaddress": {},
                "credit_card": {
                  "statementDescriptor": "statementDescriptor3",
                  "installments": [
                    {
                      "number": "number0",
                      "total": 118
                    },
                    {
                      "number": "number1",
                      "total": 119
                    },
                    {
                      "number": "number2",
                      "total": 120
                    }
                  ],
                  "authentication": {
                    "type": "type1",
                    "threed_secure": {
                      "mpi": "mpi5",
                      "eci": "eci7",
                      "cavv": "cavv3",
                      "transaction_Id": "transaction_Id7",
                      "success_url": "success_url9"
                    }
                  }
                },
                "boleto": {
                  "due_at": "2016-03-13T12:52:32.123Z",
                  "instructions": "instructions7"
                },
                "billing_address_editable": true,
                "shipping": {},
                "shippable": true,
                "closed_at": "2016-03-13T12:52:32.123Z",
                "expires_at": "2016-03-13T12:52:32.123Z",
                "currency": "currency9",
                "debit_card": {
                  "statement_descriptor": "statement_descriptor3",
                  "authentication": {
                    "type": "type5",
                    "threed_secure": {
                      "mpi": "mpi5",
                      "eci": "eci7",
                      "cavv": "cavv7",
                      "transaction_Id": "transaction_Id7",
                      "success_url": "success_url9"
                    }
                  }
                },
                "bank_transfer": {
                  "bank": [
                    "bank0",
                    "bank1",
                    "bank2"
                  ]
                },
                "accepted_brands": [
                  "accepted_brands5",
                  "accepted_brands6"
                ],
                "pix": {
                  "expires_at": "2016-03-13T12:52:32.123Z",
                  "additional_information": [
                    {
                      "Name": "Name6",
                      "Value": "Value4"
                    },
                    {
                      "Name": "Name7",
                      "Value": "Value5"
                    }
                  ]
                }
              }
            ],
            "ip": "ip5",
            "session_id": "session_id7",
            "location": {
              "latitude": "latitude1",
              "longitude": "longitude9"
            },
            "device": {
              "platform": "platform9"
            },
            "closed": true
          },
          "customer": {},
          "metadata": {
            "key0": "metadata2",
            "key1": "metadata1"
          },
          "paid_at": "2016-03-13T12:52:32.123Z",
          "canceled_at": "2016-03-13T12:52:32.123Z",
          "canceled_amount": 155,
          "paid_amount": 137,
          "interest_and_fine_paid": 141,
          "recurrency_cycle": "recurrency_cycle9"
        },
        "installments": 29,
        "billing_address": {},
        "subscription": {},
        "cycle": {},
        "shipping": {},
        "metadata": {
          "key0": "metadata0",
          "key1": "metadata1",
          "key2": "metadata2"
        },
        "due_at": "2016-03-13T12:52:32.123Z",
        "canceled_at": "2016-03-13T12:52:32.123Z",
        "billing_at": "2016-03-13T12:52:32.123Z",
        "seen_at": "2016-03-13T12:52:32.123Z",
        "total_discount": 97,
        "total_increment": 169,
        "subscription_id": "subscription_id3"
      },
      "order": {
        "id": "id7",
        "code": "code5",
        "currency": "currency7",
        "items": [
          {}
        ],
        "customer": {},
        "status": "status9",
        "created_at": "2016-03-13T12:52:32.123Z",
        "updated_at": "2016-03-13T12:52:32.123Z",
        "charges": [
          {},
          {}
        ],
        "invoice_url": "invoice_url9",
        "shipping": {},
        "metadata": {
          "key0": "metadata4"
        },
        "checkouts": [
          {},
          {},
          {}
        ],
        "ip": "ip1",
        "session_id": "session_id9",
        "location": {
          "latitude": "latitude5",
          "longitude": "longitude5"
        },
        "device": {
          "platform": "platform7"
        },
        "closed": true
      },
      "customer": {},
      "metadata": {
        "key0": "metadata4",
        "key1": "metadata5",
        "key2": "metadata6"
      },
      "paid_at": "2016-03-13T12:52:32.123Z",
      "canceled_at": "2016-03-13T12:52:32.123Z",
      "canceled_amount": 153,
      "paid_amount": 121,
      "interest_and_fine_paid": 139,
      "recurrency_cycle": "recurrency_cycle3"
    }
  ],
  "invoice_url": "invoice_url2",
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
  "metadata": {
    "key0": "metadata3",
    "key1": "metadata4",
    "key2": "metadata5"
  },
  "checkouts": [
    {
      "id": "id7",
      "amount": 219,
      "default_payment_method": "default_payment_method7",
      "success_url": "success_url9",
      "payment_url": "payment_url1",
      "gateway_affiliation_id": "gateway_affiliation_id3",
      "accepted_payment_methods": [
        "accepted_payment_methods0",
        "accepted_payment_methods1",
        "accepted_payment_methods2"
      ],
      "status": "status9",
      "skip_checkout_success_page": true,
      "created_at": "2016-03-13T12:52:32.123Z",
      "updated_at": "2016-03-13T12:52:32.123Z",
      "canceled_at": "2016-03-13T12:52:32.123Z",
      "customer_editable": true,
      "customer": {
        "id": "id7",
        "name": "name7",
        "email": "email9",
        "delinquent": true,
        "created_at": "2016-03-13T12:52:32.123Z",
        "updated_at": "2016-03-13T12:52:32.123Z",
        "document": "document1",
        "type": "type3",
        "fb_access_token": "fb_access_token1",
        "address": {
          "id": "id3",
          "street": "street3",
          "number": "number1",
          "complement": "complement9",
          "zip_code": "zip_code7",
          "neighborhood": "neighborhood9",
          "city": "city3",
          "state": "state9",
          "country": "country7",
          "status": "status5",
          "created_at": "2016-03-13T12:52:32.123Z",
          "updated_at": "2016-03-13T12:52:32.123Z",
          "customer": {
            "id": "id3",
            "name": "name3",
            "email": "email7",
            "delinquent": true,
            "created_at": "2016-03-13T12:52:32.123Z",
            "updated_at": "2016-03-13T12:52:32.123Z",
            "document": "document7",
            "type": "type3",
            "fb_access_token": "fb_access_token7",
            "address": {
              "id": "id9",
              "street": "street9",
              "number": "number7",
              "complement": "complement5",
              "zip_code": "zip_code3",
              "neighborhood": "neighborhood5",
              "city": "city9",
              "state": "state5",
              "country": "country3",
              "status": "status1",
              "created_at": "2016-03-13T12:52:32.123Z",
              "updated_at": "2016-03-13T12:52:32.123Z",
              "customer": {},
              "metadata": {
                "key0": "metadata0"
              },
              "line_1": "line_13",
              "line_2": "line_27",
              "deleted_at": "2016-03-13T12:52:32.123Z"
            },
            "metadata": {
              "key0": "metadata6"
            },
            "phones": {
              "home_phone": {
                "country_code": "country_code5",
                "number": "number3",
                "area_code": "area_code5"
              },
              "mobile_phone": {
                "country_code": "country_code5",
                "number": "number3",
                "area_code": "area_code5"
              }
            },
            "fb_id": 45,
            "code": "code1",
            "document_type": "document_type1"
          },
          "metadata": {
            "key0": "metadata6",
            "key1": "metadata5",
            "key2": "metadata4"
          },
          "line_1": "line_17",
          "line_2": "line_21",
          "deleted_at": "2016-03-13T12:52:32.123Z"
        },
        "metadata": {
          "key0": "metadata4",
          "key1": "metadata3"
        },
        "phones": {
          "home_phone": {},
          "mobile_phone": {}
        },
        "fb_id": 251,
        "code": "code5",
        "document_type": "document_type5"
      },
      "billingaddress": {},
      "credit_card": {
        "statementDescriptor": "statementDescriptor1",
        "installments": [
          {
            "number": "number8",
            "total": 176
          }
        ],
        "authentication": {
          "type": "type3",
          "threed_secure": {
            "mpi": "mpi7",
            "eci": "eci5",
            "cavv": "cavv1",
            "transaction_Id": "transaction_Id9",
            "success_url": "success_url7"
          }
        }
      },
      "boleto": {
        "due_at": "2016-03-13T12:52:32.123Z",
        "instructions": "instructions5"
      },
      "billing_address_editable": true,
      "shipping": {
        "amount": 61,
        "description": "description1",
        "recipient_name": "recipient_name9",
        "recipient_phone": "recipient_phone3",
        "address": {},
        "max_delivery_date": "2016-03-13T12:52:32.123Z",
        "estimated_delivery_date": "2016-03-13T12:52:32.123Z",
        "type": "type1"
      },
      "shippable": true,
      "closed_at": "2016-03-13T12:52:32.123Z",
      "expires_at": "2016-03-13T12:52:32.123Z",
      "currency": "currency7",
      "debit_card": {
        "statement_descriptor": "statement_descriptor1",
        "authentication": {
          "type": "type7",
          "threed_secure": {
            "mpi": "mpi3",
            "eci": "eci9",
            "cavv": "cavv5",
            "transaction_Id": "transaction_Id5",
            "success_url": "success_url1"
          }
        }
      },
      "bank_transfer": {
        "bank": [
          "bank2",
          "bank3"
        ]
      },
      "accepted_brands": [
        "accepted_brands3",
        "accepted_brands4",
        "accepted_brands5"
      ],
      "pix": {
        "expires_at": "2016-03-13T12:52:32.123Z",
        "additional_information": [
          {
            "Name": "Name4",
            "Value": "Value2"
          },
          {
            "Name": "Name5",
            "Value": "Value3"
          },
          {
            "Name": "Name6",
            "Value": "Value4"
          }
        ]
      }
    }
  ],
  "ip": "ip4",
  "session_id": "session_id8",
  "location": {
    "latitude": "latitude2",
    "longitude": "longitude8"
  },
  "device": {
    "platform": "platform0"
  },
  "closed": false
}
```

