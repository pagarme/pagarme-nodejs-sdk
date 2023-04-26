
# Get Invoice Response

Response object for getting an invoice

## Structure

`GetInvoiceResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | - |
| `code` | `string \| undefined` | Optional | - |
| `url` | `string \| undefined` | Optional | - |
| `amount` | `number \| undefined` | Optional | - |
| `status` | `string \| undefined` | Optional | - |
| `paymentMethod` | `string \| undefined` | Optional | - |
| `createdAt` | `string \| undefined` | Optional | - |
| `items` | [`GetInvoiceItemResponse[] \| undefined`](../../doc/models/get-invoice-item-response.md) | Optional | - |
| `customer` | [`GetCustomerResponse \| undefined`](../../doc/models/get-customer-response.md) | Optional | - |
| `charge` | [`GetChargeResponse \| undefined`](../../doc/models/get-charge-response.md) | Optional | - |
| `installments` | `number \| undefined` | Optional | - |
| `billingAddress` | [`GetBillingAddressResponse \| undefined`](../../doc/models/get-billing-address-response.md) | Optional | - |
| `subscription` | [`GetSubscriptionResponse \| undefined`](../../doc/models/get-subscription-response.md) | Optional | - |
| `cycle` | [`GetPeriodResponse \| undefined`](../../doc/models/get-period-response.md) | Optional | - |
| `shipping` | [`GetShippingResponse \| undefined`](../../doc/models/get-shipping-response.md) | Optional | - |
| `metadata` | `Record<string, string> \| undefined` | Optional | - |
| `dueAt` | `string \| undefined` | Optional | - |
| `canceledAt` | `string \| undefined` | Optional | - |
| `billingAt` | `string \| undefined` | Optional | - |
| `seenAt` | `string \| undefined` | Optional | - |
| `totalDiscount` | `number \| undefined` | Optional | Total discounted value |
| `totalIncrement` | `number \| undefined` | Optional | Total discounted value |
| `subscriptionId` | `string \| undefined` | Optional | Subscription Id |

## Example (as JSON)

```json
{
  "id": "id0",
  "code": "code8",
  "url": "url4",
  "amount": 46,
  "status": "status8",
  "payment_method": "payment_method0",
  "created_at": "2016-03-13T12:52:32.123Z",
  "items": [
    {
      "amount": 13,
      "description": "description7",
      "pricing_scheme": {
        "price": 149,
        "scheme_type": "scheme_type1",
        "price_brackets": [
          {
            "start_quantity": 60,
            "price": 2,
            "end_quantity": 68,
            "overage_price": 82
          },
          {
            "start_quantity": 61,
            "price": 1,
            "end_quantity": 69,
            "overage_price": 83
          },
          {
            "start_quantity": 62,
            "price": 0,
            "end_quantity": 70,
            "overage_price": 84
          }
        ],
        "minimum_price": 53,
        "percentage": 25.89
      },
      "price_bracket": {},
      "quantity": 127,
      "name": "name7",
      "subscription_item_id": "subscription_item_id1"
    },
    {
      "amount": 14,
      "description": "description8",
      "pricing_scheme": {
        "price": 150,
        "scheme_type": "scheme_type0",
        "price_brackets": [
          {
            "start_quantity": 59,
            "price": 3,
            "end_quantity": 67,
            "overage_price": 81
          },
          {
            "start_quantity": 60,
            "price": 2,
            "end_quantity": 68,
            "overage_price": 82
          }
        ],
        "minimum_price": 54,
        "percentage": 25.88
      },
      "price_bracket": {},
      "quantity": 128,
      "name": "name8",
      "subscription_item_id": "subscription_item_id2"
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
  "charge": {
    "id": "id8",
    "code": "code6",
    "gateway_id": "gateway_id2",
    "amount": 80,
    "status": "status0",
    "currency": "currency8",
    "payment_method": "payment_method8",
    "due_at": "2016-03-13T12:52:32.123Z",
    "created_at": "2016-03-13T12:52:32.123Z",
    "updated_at": "2016-03-13T12:52:32.123Z",
    "last_transaction": {
      "gateway_id": "gateway_id0",
      "amount": 138,
      "status": "status2",
      "success": false,
      "created_at": "2016-03-13T12:52:32.123Z",
      "updated_at": "2016-03-13T12:52:32.123Z",
      "attempt_count": 114,
      "max_attempts": 102,
      "splits": [
        {
          "type": "type2",
          "amount": 70,
          "recipient": {
            "id": "id4",
            "name": "name4",
            "email": "email2",
            "document": "document8",
            "description": "description4",
            "type": "type6",
            "status": "status6",
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
              "recipient": {
                "id": "id4",
                "name": "name4",
                "email": "email8",
                "document": "document8",
                "description": "description4",
                "type": "type4",
                "status": "status6",
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
                    "key0": "metadata3",
                    "key1": "metadata4"
                  },
                  "pix_key": "pix_key6"
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
                  }
                ],
                "metadata": {
                  "key0": "metadata1",
                  "key1": "metadata0",
                  "key2": "metadata9"
                },
                "automatic_anticipation_settings": {
                  "enabled": false,
                  "type": "type8",
                  "volume_percentage": 2,
                  "delay": 36,
                  "days": [
                    12
                  ]
                },
                "transfer_settings": {
                  "transfer_enabled": false,
                  "transfer_interval": "transfer_interval0",
                  "transfer_day": 128
                },
                "code": "code2",
                "payment_mode": "payment_mode8"
              },
              "metadata": {
                "key0": "metadata7",
                "key1": "metadata6"
              },
              "pix_key": "pix_key6"
            },
            "gateway_recipients": [
              {},
              {}
            ],
            "metadata": {
              "key0": "metadata1",
              "key1": "metadata0",
              "key2": "metadata9"
            },
            "automatic_anticipation_settings": {
              "enabled": false,
              "type": "type8",
              "volume_percentage": 68,
              "delay": 222,
              "days": [
                198
              ]
            },
            "transfer_settings": {
              "transfer_enabled": false,
              "transfer_interval": "transfer_interval0",
              "transfer_day": 234
            },
            "code": "code2",
            "payment_mode": "payment_mode8"
          },
          "gateway_id": "gateway_id2",
          "options": {
            "liable": false,
            "charge_processing_fee": false,
            "charge_remainder_fee": "charge_remainder_fee8"
          },
          "id": "id2"
        },
        {
          "type": "type3",
          "amount": 71,
          "recipient": {
            "id": "id5",
            "name": "name5",
            "email": "email1",
            "document": "document9",
            "description": "description5",
            "type": "type5",
            "status": "status7",
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
              "recipient": {
                "id": "id5",
                "name": "name5",
                "email": "email9",
                "document": "document9",
                "description": "description5",
                "type": "type5",
                "status": "status7",
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
                    "key0": "metadata4",
                    "key1": "metadata5",
                    "key2": "metadata6"
                  },
                  "pix_key": "pix_key7"
                },
                "gateway_recipients": [
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
                  "key0": "metadata2",
                  "key1": "metadata1"
                },
                "automatic_anticipation_settings": {
                  "enabled": true,
                  "type": "type9",
                  "volume_percentage": 3,
                  "delay": 37,
                  "days": [
                    13,
                    14
                  ]
                },
                "transfer_settings": {
                  "transfer_enabled": true,
                  "transfer_interval": "transfer_interval1",
                  "transfer_day": 129
                },
                "code": "code3",
                "payment_mode": "payment_mode9"
              },
              "metadata": {
                "key0": "metadata6",
                "key1": "metadata5",
                "key2": "metadata4"
              },
              "pix_key": "pix_key7"
            },
            "gateway_recipients": [
              {},
              {},
              {}
            ],
            "metadata": {
              "key0": "metadata2",
              "key1": "metadata1"
            },
            "automatic_anticipation_settings": {
              "enabled": true,
              "type": "type9",
              "volume_percentage": 67,
              "delay": 223,
              "days": [
                199,
                200
              ]
            },
            "transfer_settings": {
              "transfer_enabled": true,
              "transfer_interval": "transfer_interval9",
              "transfer_day": 233
            },
            "code": "code3",
            "payment_mode": "payment_mode9"
          },
          "gateway_id": "gateway_id3",
          "options": {
            "liable": true,
            "charge_processing_fee": true,
            "charge_remainder_fee": "charge_remainder_fee9"
          },
          "id": "id3"
        },
        {
          "type": "type4",
          "amount": 72,
          "recipient": {
            "id": "id6",
            "name": "name6",
            "email": "email0",
            "document": "document0",
            "description": "description6",
            "type": "type4",
            "status": "status8",
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
              "recipient": {
                "id": "id6",
                "name": "name6",
                "email": "email0",
                "document": "document0",
                "description": "description6",
                "type": "type6",
                "status": "status8",
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
                    "key0": "metadata5"
                  },
                  "pix_key": "pix_key8"
                },
                "gateway_recipients": [
                  {
                    "gateway": "gateway0",
                    "status": "status2",
                    "pgid": "pgid6",
                    "created_at": "created_at8",
                    "updated_at": "updated_at6"
                  }
                ],
                "metadata": {
                  "key0": "metadata3"
                },
                "automatic_anticipation_settings": {
                  "enabled": false,
                  "type": "type0",
                  "volume_percentage": 4,
                  "delay": 38,
                  "days": [
                    14,
                    15,
                    16
                  ]
                },
                "transfer_settings": {
                  "transfer_enabled": false,
                  "transfer_interval": "transfer_interval2",
                  "transfer_day": 130
                },
                "code": "code4",
                "payment_mode": "payment_mode0"
              },
              "metadata": {
                "key0": "metadata5"
              },
              "pix_key": "pix_key8"
            },
            "gateway_recipients": [
              {}
            ],
            "metadata": {
              "key0": "metadata3"
            },
            "automatic_anticipation_settings": {
              "enabled": false,
              "type": "type0",
              "volume_percentage": 66,
              "delay": 224,
              "days": [
                200,
                201,
                202
              ]
            },
            "transfer_settings": {
              "transfer_enabled": false,
              "transfer_interval": "transfer_interval8",
              "transfer_day": 232
            },
            "code": "code4",
            "payment_mode": "payment_mode0"
          },
          "gateway_id": "gateway_id4",
          "options": {
            "liable": false,
            "charge_processing_fee": false,
            "charge_remainder_fee": "charge_remainder_fee0"
          },
          "id": "id4"
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
          },
          {
            "message": "message8"
          },
          {
            "message": "message9"
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
        "key0": "metadata1",
        "key1": "metadata2"
      },
      "split": [
        {},
        {}
      ],
      "interest": {
        "days": 44,
        "type": "type0",
        "amount": 118
      },
      "fine": {
        "days": 62,
        "type": "type2",
        "amount": 136
      },
      "max_days_to_pay_past_due": 50
    },
    "invoice": {
      "id": "id2",
      "code": "code0",
      "url": "url6",
      "amount": 26,
      "status": "status4",
      "payment_method": "payment_method8",
      "created_at": "2016-03-13T12:52:32.123Z",
      "items": [
        {
          "amount": 85,
          "description": "description9",
          "pricing_scheme": {
            "price": 67,
            "scheme_type": "scheme_type1",
            "price_brackets": [
              {
                "start_quantity": 142,
                "price": 176,
                "end_quantity": 150,
                "overage_price": 164
              }
            ],
            "minimum_price": 227,
            "percentage": 175.19
          },
          "price_bracket": {},
          "quantity": 199,
          "name": "name9",
          "subscription_item_id": "subscription_item_id3"
        },
        {
          "amount": 86,
          "description": "description0",
          "pricing_scheme": {
            "price": 66,
            "scheme_type": "scheme_type2",
            "price_brackets": [
              {
                "start_quantity": 143,
                "price": 175,
                "end_quantity": 151,
                "overage_price": 165
              },
              {
                "start_quantity": 144,
                "price": 174,
                "end_quantity": 152,
                "overage_price": 166
              }
            ],
            "minimum_price": 226,
            "percentage": 175.2
          },
          "price_bracket": {},
          "quantity": 200,
          "name": "name0",
          "subscription_item_id": "subscription_item_id4"
        },
        {
          "amount": 87,
          "description": "description1",
          "pricing_scheme": {
            "price": 65,
            "scheme_type": "scheme_type3",
            "price_brackets": [
              {
                "start_quantity": 144,
                "price": 174,
                "end_quantity": 152,
                "overage_price": 166
              },
              {
                "start_quantity": 145,
                "price": 173,
                "end_quantity": 153,
                "overage_price": 167
              },
              {
                "start_quantity": 146,
                "price": 172,
                "end_quantity": 154,
                "overage_price": 168
              }
            ],
            "minimum_price": 225,
            "percentage": 175.21
          },
          "price_bracket": {},
          "quantity": 201,
          "name": "name1",
          "subscription_item_id": "subscription_item_id5"
        }
      ],
      "customer": {
        "id": "id2",
        "name": "name2",
        "email": "email4",
        "delinquent": false,
        "created_at": "2016-03-13T12:52:32.123Z",
        "updated_at": "2016-03-13T12:52:32.123Z",
        "document": "document6",
        "type": "type8",
        "fb_access_token": "fb_access_token6",
        "address": {
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
            "email": "email2",
            "delinquent": false,
            "created_at": "2016-03-13T12:52:32.123Z",
            "updated_at": "2016-03-13T12:52:32.123Z",
            "document": "document2",
            "type": "type8",
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
              "customer": {},
              "metadata": {
                "key0": "metadata5",
                "key1": "metadata6"
              },
              "line_1": "line_18",
              "line_2": "line_22",
              "deleted_at": "2016-03-13T12:52:32.123Z"
            },
            "metadata": {
              "key0": "metadata5",
              "key1": "metadata4",
              "key2": "metadata3"
            },
            "phones": {
              "home_phone": {
                "country_code": "country_code0",
                "number": "number8",
                "area_code": "area_code0"
              },
              "mobile_phone": {
                "country_code": "country_code0",
                "number": "number2",
                "area_code": "area_code0"
              }
            },
            "fb_id": 108,
            "code": "code6",
            "document_type": "document_type6"
          },
          "metadata": {
            "key0": "metadata1"
          },
          "line_1": "line_12",
          "line_2": "line_26",
          "deleted_at": "2016-03-13T12:52:32.123Z"
        },
        "metadata": {
          "key0": "metadata9"
        },
        "phones": {
          "home_phone": {},
          "mobile_phone": {}
        },
        "fb_id": 58,
        "code": "code0",
        "document_type": "document_type0"
      },
      "charge": {
        "id": "id6",
        "code": "code4",
        "gateway_id": "gateway_id4",
        "amount": 248,
        "status": "status2",
        "currency": "currency4",
        "payment_method": "payment_method4",
        "due_at": "2016-03-13T12:52:32.123Z",
        "created_at": "2016-03-13T12:52:32.123Z",
        "updated_at": "2016-03-13T12:52:32.123Z",
        "last_transaction": {
          "gateway_id": "gateway_id8",
          "amount": 66,
          "status": "status0",
          "success": false,
          "created_at": "2016-03-13T12:52:32.123Z",
          "updated_at": "2016-03-13T12:52:32.123Z",
          "attempt_count": 42,
          "max_attempts": 30,
          "splits": [
            {},
            {}
          ],
          "next_attempt": "2016-03-13T12:52:32.123Z",
          "transaction_type": "transaction",
          "id": "id8",
          "gateway_response": {
            "code": "code8",
            "errors": [
              {},
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
            "key0": "metadata5"
          },
          "split": [
            {}
          ],
          "interest": {
            "days": 44,
            "type": "type8",
            "amount": 118
          },
          "fine": {
            "days": 246,
            "type": "type0",
            "amount": 64
          },
          "max_days_to_pay_past_due": 234
        },
        "invoice": {
          "id": "id0",
          "code": "code8",
          "url": "url4",
          "amount": 46,
          "status": "status8",
          "payment_method": "payment_method0",
          "created_at": "2016-03-13T12:52:32.123Z",
          "items": [
            {},
            {}
          ],
          "customer": {},
          "charge": {},
          "installments": 250,
          "billing_address": {
            "street": "street8",
            "number": "number4",
            "zip_code": "zip_code2",
            "neighborhood": "neighborhood4",
            "city": "city2",
            "state": "state6",
            "country": "country2",
            "complement": "complement6",
            "line_1": "line_18",
            "line_2": "line_26"
          },
          "subscription": {
            "id": "id4",
            "code": "code2",
            "start_at": "2016-03-13T12:52:32.123Z",
            "interval": "interval2",
            "interval_count": 234,
            "billing_type": "billing_type8",
            "current_cycle": {
              "start_at": "2016-03-13T12:52:32.123Z",
              "end_at": "2016-03-13T12:52:32.123Z",
              "id": "id2",
              "billing_at": "2016-03-13T12:52:32.123Z",
              "subscription": {
                "id": "id8",
                "code": "code6",
                "start_at": "2016-03-13T12:52:32.123Z",
                "interval": "interval6",
                "interval_count": 36,
                "billing_type": "billing_type8",
                "current_cycle": {
                  "start_at": "2016-03-13T12:52:32.123Z",
                  "end_at": "2016-03-13T12:52:32.123Z",
                  "id": "id6",
                  "billing_at": "2016-03-13T12:52:32.123Z",
                  "subscription": {},
                  "status": "status8",
                  "duration": 20,
                  "created_at": "created_at4",
                  "updated_at": "updated_at2",
                  "cycle": 216
                },
                "payment_method": "payment_method2",
                "currency": "currency8",
                "installments": 204,
                "status": "status0",
                "created_at": "2016-03-13T12:52:32.123Z",
                "updated_at": "2016-03-13T12:52:32.123Z",
                "customer": {},
                "card": {
                  "id": "id8",
                  "last_four_digits": "last_four_digits4",
                  "brand": "brand2",
                  "holder_name": "holder_name4",
                  "exp_month": 182,
                  "exp_year": 114,
                  "status": "status0",
                  "created_at": "2016-03-13T12:52:32.123Z",
                  "updated_at": "2016-03-13T12:52:32.123Z",
                  "billing_address": {
                    "street": "street0",
                    "number": "number2",
                    "zip_code": "zip_code4",
                    "neighborhood": "neighborhood6",
                    "city": "city0",
                    "state": "state4",
                    "country": "country4",
                    "complement": "complement4",
                    "line_1": "line_16",
                    "line_2": "line_28"
                  },
                  "customer": {},
                  "metadata": {
                    "key0": "metadata5",
                    "key1": "metadata6"
                  },
                  "type": "type2",
                  "holder_document": "holder_document8",
                  "deleted_at": "2016-03-13T12:52:32.123Z",
                  "first_six_digits": "first_six_digits8",
                  "label": "label8"
                },
                "items": [
                  {
                    "id": "id5",
                    "description": "description5",
                    "status": "status7",
                    "created_at": "2016-03-13T12:52:32.123Z",
                    "updated_at": "2016-03-13T12:52:32.123Z",
                    "pricing_scheme": {},
                    "discounts": [
                      {
                        "id": "id6",
                        "value": 169.08,
                        "discount_type": "discount_type4",
                        "status": "status8",
                        "created_at": "2016-03-13T12:52:32.123Z",
                        "cycles": 36,
                        "deleted_at": "2016-03-13T12:52:32.123Z",
                        "description": "description6",
                        "subscription": {},
                        "subscription_item": {
                          "id": "id2",
                          "description": "description2",
                          "status": "status4",
                          "created_at": "2016-03-13T12:52:32.123Z",
                          "updated_at": "2016-03-13T12:52:32.123Z",
                          "pricing_scheme": {},
                          "discounts": [
                            {
                              "id": "id3",
                              "value": 204.15,
                              "discount_type": "discount_type1",
                              "status": "status5",
                              "created_at": "2016-03-13T12:52:32.123Z",
                              "cycles": 215,
                              "deleted_at": "2016-03-13T12:52:32.123Z",
                              "description": "description3",
                              "subscription": {},
                              "subscription_item": {}
                            },
                            {
                              "id": "id4",
                              "value": 204.16,
                              "discount_type": "discount_type2",
                              "status": "status6",
                              "created_at": "2016-03-13T12:52:32.123Z",
                              "cycles": 216,
                              "deleted_at": "2016-03-13T12:52:32.123Z",
                              "description": "description4",
                              "subscription": {},
                              "subscription_item": {}
                            },
                            {
                              "id": "id5",
                              "value": 204.17,
                              "discount_type": "discount_type3",
                              "status": "status7",
                              "created_at": "2016-03-13T12:52:32.123Z",
                              "cycles": 217,
                              "deleted_at": "2016-03-13T12:52:32.123Z",
                              "description": "description5",
                              "subscription": {},
                              "subscription_item": {}
                            }
                          ],
                          "increments": [
                            {
                              "id": "id1",
                              "value": 59.43,
                              "increment_type": "increment_type3",
                              "status": "status3",
                              "created_at": "2016-03-13T12:52:32.123Z",
                              "cycles": 79,
                              "deleted_at": "2016-03-13T12:52:32.123Z",
                              "description": "description1",
                              "subscription": {},
                              "subscription_item": {}
                            }
                          ],
                          "subscription": {},
                          "name": "name2",
                          "quantity": 4,
                          "cycles": 24,
                          "deleted_at": "2016-03-13T12:52:32.123Z"
                        }
                      }
                    ],
                    "increments": [
                      {},
                      {}
                    ],
                    "subscription": {},
                    "name": "name5",
                    "quantity": 81,
                    "cycles": 155,
                    "deleted_at": "2016-03-13T12:52:32.123Z"
                  },
                  {
                    "id": "id6",
                    "description": "description6",
                    "status": "status8",
                    "created_at": "2016-03-13T12:52:32.123Z",
                    "updated_at": "2016-03-13T12:52:32.123Z",
                    "pricing_scheme": {},
                    "discounts": [
                      {
                        "id": "id7",
                        "value": 169.09,
                        "discount_type": "discount_type5",
                        "status": "status9",
                        "created_at": "2016-03-13T12:52:32.123Z",
                        "cycles": 37,
                        "deleted_at": "2016-03-13T12:52:32.123Z",
                        "description": "description7",
                        "subscription": {},
                        "subscription_item": {
                          "id": "id3",
                          "description": "description3",
                          "status": "status5",
                          "created_at": "2016-03-13T12:52:32.123Z",
                          "updated_at": "2016-03-13T12:52:32.123Z",
                          "pricing_scheme": {},
                          "discounts": [
                            {
                              "id": "id4",
                              "value": 204.16,
                              "discount_type": "discount_type2",
                              "status": "status6",
                              "created_at": "2016-03-13T12:52:32.123Z",
                              "cycles": 216,
                              "deleted_at": "2016-03-13T12:52:32.123Z",
                              "description": "description4",
                              "subscription": {},
                              "subscription_item": {}
                            }
                          ],
                          "increments": [
                            {
                              "id": "id2",
                              "value": 59.44,
                              "increment_type": "increment_type4",
                              "status": "status4",
                              "created_at": "2016-03-13T12:52:32.123Z",
                              "cycles": 80,
                              "deleted_at": "2016-03-13T12:52:32.123Z",
                              "description": "description2",
                              "subscription": {},
                              "subscription_item": {}
                            },
                            {
                              "id": "id3",
                              "value": 59.45,
                              "increment_type": "increment_type5",
                              "status": "status5",
                              "created_at": "2016-03-13T12:52:32.123Z",
                              "cycles": 81,
                              "deleted_at": "2016-03-13T12:52:32.123Z",
                              "description": "description3",
                              "subscription": {},
                              "subscription_item": {}
                            }
                          ],
                          "subscription": {},
                          "name": "name3",
                          "quantity": 5,
                          "cycles": 25,
                          "deleted_at": "2016-03-13T12:52:32.123Z"
                        }
                      },
                      {
                        "id": "id8",
                        "value": 169.1,
                        "discount_type": "discount_type6",
                        "status": "status0",
                        "created_at": "2016-03-13T12:52:32.123Z",
                        "cycles": 38,
                        "deleted_at": "2016-03-13T12:52:32.123Z",
                        "description": "description8",
                        "subscription": {},
                        "subscription_item": {
                          "id": "id4",
                          "description": "description4",
                          "status": "status6",
                          "created_at": "2016-03-13T12:52:32.123Z",
                          "updated_at": "2016-03-13T12:52:32.123Z",
                          "pricing_scheme": {},
                          "discounts": [
                            {
                              "id": "id5",
                              "value": 204.17,
                              "discount_type": "discount_type3",
                              "status": "status7",
                              "created_at": "2016-03-13T12:52:32.123Z",
                              "cycles": 217,
                              "deleted_at": "2016-03-13T12:52:32.123Z",
                              "description": "description5",
                              "subscription": {},
                              "subscription_item": {}
                            },
                            {
                              "id": "id6",
                              "value": 204.18,
                              "discount_type": "discount_type4",
                              "status": "status8",
                              "created_at": "2016-03-13T12:52:32.123Z",
                              "cycles": 218,
                              "deleted_at": "2016-03-13T12:52:32.123Z",
                              "description": "description6",
                              "subscription": {},
                              "subscription_item": {}
                            }
                          ],
                          "increments": [
                            {
                              "id": "id3",
                              "value": 59.45,
                              "increment_type": "increment_type5",
                              "status": "status5",
                              "created_at": "2016-03-13T12:52:32.123Z",
                              "cycles": 81,
                              "deleted_at": "2016-03-13T12:52:32.123Z",
                              "description": "description3",
                              "subscription": {},
                              "subscription_item": {}
                            },
                            {
                              "id": "id4",
                              "value": 59.46,
                              "increment_type": "increment_type6",
                              "status": "status6",
                              "created_at": "2016-03-13T12:52:32.123Z",
                              "cycles": 82,
                              "deleted_at": "2016-03-13T12:52:32.123Z",
                              "description": "description4",
                              "subscription": {},
                              "subscription_item": {}
                            },
                            {
                              "id": "id5",
                              "value": 59.47,
                              "increment_type": "increment_type7",
                              "status": "status7",
                              "created_at": "2016-03-13T12:52:32.123Z",
                              "cycles": 83,
                              "deleted_at": "2016-03-13T12:52:32.123Z",
                              "description": "description5",
                              "subscription": {},
                              "subscription_item": {}
                            }
                          ],
                          "subscription": {},
                          "name": "name4",
                          "quantity": 6,
                          "cycles": 26,
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
                    "name": "name6",
                    "quantity": 82,
                    "cycles": 154,
                    "deleted_at": "2016-03-13T12:52:32.123Z"
                  },
                  {
                    "id": "id7",
                    "description": "description7",
                    "status": "status9",
                    "created_at": "2016-03-13T12:52:32.123Z",
                    "updated_at": "2016-03-13T12:52:32.123Z",
                    "pricing_scheme": {},
                    "discounts": [
                      {
                        "id": "id8",
                        "value": 169.1,
                        "discount_type": "discount_type6",
                        "status": "status0",
                        "created_at": "2016-03-13T12:52:32.123Z",
                        "cycles": 38,
                        "deleted_at": "2016-03-13T12:52:32.123Z",
                        "description": "description8",
                        "subscription": {},
                        "subscription_item": {
                          "id": "id4",
                          "description": "description4",
                          "status": "status6",
                          "created_at": "2016-03-13T12:52:32.123Z",
                          "updated_at": "2016-03-13T12:52:32.123Z",
                          "pricing_scheme": {},
                          "discounts": [
                            {
                              "id": "id5",
                              "value": 204.17,
                              "discount_type": "discount_type3",
                              "status": "status7",
                              "created_at": "2016-03-13T12:52:32.123Z",
                              "cycles": 217,
                              "deleted_at": "2016-03-13T12:52:32.123Z",
                              "description": "description5",
                              "subscription": {},
                              "subscription_item": {}
                            },
                            {
                              "id": "id6",
                              "value": 204.18,
                              "discount_type": "discount_type4",
                              "status": "status8",
                              "created_at": "2016-03-13T12:52:32.123Z",
                              "cycles": 218,
                              "deleted_at": "2016-03-13T12:52:32.123Z",
                              "description": "description6",
                              "subscription": {},
                              "subscription_item": {}
                            }
                          ],
                          "increments": [
                            {
                              "id": "id3",
                              "value": 59.45,
                              "increment_type": "increment_type5",
                              "status": "status5",
                              "created_at": "2016-03-13T12:52:32.123Z",
                              "cycles": 81,
                              "deleted_at": "2016-03-13T12:52:32.123Z",
                              "description": "description3",
                              "subscription": {},
                              "subscription_item": {}
                            },
                            {
                              "id": "id4",
                              "value": 59.46,
                              "increment_type": "increment_type6",
                              "status": "status6",
                              "created_at": "2016-03-13T12:52:32.123Z",
                              "cycles": 82,
                              "deleted_at": "2016-03-13T12:52:32.123Z",
                              "description": "description4",
                              "subscription": {},
                              "subscription_item": {}
                            },
                            {
                              "id": "id5",
                              "value": 59.47,
                              "increment_type": "increment_type7",
                              "status": "status7",
                              "created_at": "2016-03-13T12:52:32.123Z",
                              "cycles": 83,
                              "deleted_at": "2016-03-13T12:52:32.123Z",
                              "description": "description5",
                              "subscription": {},
                              "subscription_item": {}
                            }
                          ],
                          "subscription": {},
                          "name": "name4",
                          "quantity": 6,
                          "cycles": 26,
                          "deleted_at": "2016-03-13T12:52:32.123Z"
                        }
                      },
                      {
                        "id": "id9",
                        "value": 169.11,
                        "discount_type": "discount_type7",
                        "status": "status1",
                        "created_at": "2016-03-13T12:52:32.123Z",
                        "cycles": 39,
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
                              "value": 204.18,
                              "discount_type": "discount_type4",
                              "status": "status8",
                              "created_at": "2016-03-13T12:52:32.123Z",
                              "cycles": 218,
                              "deleted_at": "2016-03-13T12:52:32.123Z",
                              "description": "description6",
                              "subscription": {},
                              "subscription_item": {}
                            },
                            {
                              "id": "id7",
                              "value": 204.19,
                              "discount_type": "discount_type5",
                              "status": "status9",
                              "created_at": "2016-03-13T12:52:32.123Z",
                              "cycles": 219,
                              "deleted_at": "2016-03-13T12:52:32.123Z",
                              "description": "description7",
                              "subscription": {},
                              "subscription_item": {}
                            },
                            {
                              "id": "id8",
                              "value": 204.2,
                              "discount_type": "discount_type6",
                              "status": "status0",
                              "created_at": "2016-03-13T12:52:32.123Z",
                              "cycles": 220,
                              "deleted_at": "2016-03-13T12:52:32.123Z",
                              "description": "description8",
                              "subscription": {},
                              "subscription_item": {}
                            }
                          ],
                          "increments": [
                            {
                              "id": "id4",
                              "value": 59.46,
                              "increment_type": "increment_type6",
                              "status": "status6",
                              "created_at": "2016-03-13T12:52:32.123Z",
                              "cycles": 82,
                              "deleted_at": "2016-03-13T12:52:32.123Z",
                              "description": "description4",
                              "subscription": {},
                              "subscription_item": {}
                            }
                          ],
                          "subscription": {},
                          "name": "name5",
                          "quantity": 7,
                          "cycles": 27,
                          "deleted_at": "2016-03-13T12:52:32.123Z"
                        }
                      },
                      {
                        "id": "id0",
                        "value": 169.12,
                        "discount_type": "discount_type8",
                        "status": "status2",
                        "created_at": "2016-03-13T12:52:32.123Z",
                        "cycles": 40,
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
                              "value": 204.19,
                              "discount_type": "discount_type5",
                              "status": "status9",
                              "created_at": "2016-03-13T12:52:32.123Z",
                              "cycles": 219,
                              "deleted_at": "2016-03-13T12:52:32.123Z",
                              "description": "description7",
                              "subscription": {},
                              "subscription_item": {}
                            }
                          ],
                          "increments": [
                            {
                              "id": "id5",
                              "value": 59.47,
                              "increment_type": "increment_type7",
                              "status": "status7",
                              "created_at": "2016-03-13T12:52:32.123Z",
                              "cycles": 83,
                              "deleted_at": "2016-03-13T12:52:32.123Z",
                              "description": "description5",
                              "subscription": {},
                              "subscription_item": {}
                            },
                            {
                              "id": "id6",
                              "value": 59.48,
                              "increment_type": "increment_type8",
                              "status": "status8",
                              "created_at": "2016-03-13T12:52:32.123Z",
                              "cycles": 84,
                              "deleted_at": "2016-03-13T12:52:32.123Z",
                              "description": "description6",
                              "subscription": {},
                              "subscription_item": {}
                            }
                          ],
                          "subscription": {},
                          "name": "name6",
                          "quantity": 8,
                          "cycles": 28,
                          "deleted_at": "2016-03-13T12:52:32.123Z"
                        }
                      }
                    ],
                    "increments": [
                      {}
                    ],
                    "subscription": {},
                    "name": "name7",
                    "quantity": 83,
                    "cycles": 153,
                    "deleted_at": "2016-03-13T12:52:32.123Z"
                  }
                ],
                "statement_descriptor": "statement_descriptor8",
                "metadata": {
                  "key0": "metadata5",
                  "key1": "metadata6"
                },
                "setup": {
                  "id": "id2",
                  "description": "description8",
                  "amount": 228,
                  "status": "status6"
                },
                "gateway_affiliation_id": "gateway_affiliation_id4",
                "next_billing_at": "2016-03-13T12:52:32.123Z",
                "billing_day": 80,
                "minimum_price": 222,
                "canceled_at": "2016-03-13T12:52:32.123Z",
                "discounts": [
                  {}
                ],
                "increments": [
                  {},
                  {},
                  {}
                ],
                "boleto_due_days": 148,
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
                  "max_days_to_pay_past_due": 80
                },
                "manual_billing": false
              },
              "status": "status4",
              "duration": 218,
              "created_at": "created_at0",
              "updated_at": "updated_at8",
              "cycle": 158
            },
            "payment_method": "payment_method4",
            "currency": "currency4",
            "installments": 146,
            "status": "status6",
            "created_at": "2016-03-13T12:52:32.123Z",
            "updated_at": "2016-03-13T12:52:32.123Z",
            "customer": {},
            "card": {
              "id": "id8",
              "last_four_digits": "last_four_digits4",
              "brand": "brand2",
              "holder_name": "holder_name4",
              "exp_month": 216,
              "exp_year": 80,
              "status": "status0",
              "created_at": "2016-03-13T12:52:32.123Z",
              "updated_at": "2016-03-13T12:52:32.123Z",
              "billing_address": {},
              "customer": {},
              "metadata": {
                "key0": "metadata5",
                "key1": "metadata4"
              },
              "type": "type2",
              "holder_document": "holder_document2",
              "deleted_at": "2016-03-13T12:52:32.123Z",
              "first_six_digits": "first_six_digits8",
              "label": "label8"
            },
            "items": [
              {},
              {}
            ],
            "statement_descriptor": "statement_descriptor4",
            "metadata": {
              "key0": "metadata1",
              "key1": "metadata0",
              "key2": "metadata9"
            },
            "setup": {
              "id": "id8",
              "description": "description8",
              "amount": 170,
              "status": "status0"
            },
            "gateway_affiliation_id": "gateway_affiliation_id0",
            "next_billing_at": "2016-03-13T12:52:32.123Z",
            "billing_day": 118,
            "minimum_price": 232,
            "canceled_at": "2016-03-13T12:52:32.123Z",
            "discounts": [
              {},
              {},
              {}
            ],
            "increments": [
              {}
            ],
            "boleto_due_days": 90,
            "split": {
              "enabled": false,
              "rules": [
                {},
                {}
              ]
            },
            "boleto": {
              "interest": {},
              "fine": {},
              "max_days_to_pay_past_due": 22
            },
            "manual_billing": false
          },
          "cycle": {},
          "shipping": {
            "amount": 52,
            "description": "description6",
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
          "due_at": "2016-03-13T12:52:32.123Z",
          "canceled_at": "2016-03-13T12:52:32.123Z",
          "billing_at": "2016-03-13T12:52:32.123Z",
          "seen_at": "2016-03-13T12:52:32.123Z",
          "total_discount": 62,
          "total_increment": 134,
          "subscription_id": "subscription_id0"
        },
        "order": {
          "id": "id0",
          "code": "code8",
          "currency": "currency0",
          "items": [
            {
              "id": "id7",
              "amount": 247,
              "description": "description7",
              "quantity": 105,
              "category": "category5",
              "code": "code5"
            }
          ],
          "customer": {},
          "status": "status2",
          "created_at": "2016-03-13T12:52:32.123Z",
          "updated_at": "2016-03-13T12:52:32.123Z",
          "charges": [
            {},
            {}
          ],
          "invoice_url": "invoice_url2",
          "shipping": {
            "amount": 30,
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
          "checkouts": [
            {
              "id": "id7",
              "amount": 197,
              "default_payment_method": "default_payment_method7",
              "success_url": "success_url9",
              "payment_url": "payment_url1",
              "gateway_affiliation_id": "gateway_affiliation_id3",
              "accepted_payment_methods": [
                "accepted_payment_methods0",
                "accepted_payment_methods1"
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
                    "total": 154
                  },
                  {
                    "number": "number9",
                    "total": 155
                  },
                  {
                    "number": "number0",
                    "total": 156
                  }
                ],
                "authentication": {
                  "type": "type7",
                  "threed_secure": {
                    "mpi": "mpi3",
                    "eci": "eci5",
                    "cavv": "cavv1",
                    "transaction_Id": "transaction_Id1",
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
                  "type": "type3",
                  "threed_secure": {
                    "mpi": "mpi9",
                    "eci": "eci1",
                    "cavv": "cavv7",
                    "transaction_Id": "transaction_Id7",
                    "success_url": "success_url3"
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
                "accepted_brands4"
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
                  }
                ]
              }
            },
            {
              "id": "id8",
              "amount": 198,
              "default_payment_method": "default_payment_method8",
              "success_url": "success_url0",
              "payment_url": "payment_url2",
              "gateway_affiliation_id": "gateway_affiliation_id4",
              "accepted_payment_methods": [
                "accepted_payment_methods1",
                "accepted_payment_methods2",
                "accepted_payment_methods3"
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
                    "total": 155
                  }
                ],
                "authentication": {
                  "type": "type8",
                  "threed_secure": {
                    "mpi": "mpi4",
                    "eci": "eci6",
                    "cavv": "cavv2",
                    "transaction_Id": "transaction_Id2",
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
                  "type": "type4",
                  "threed_secure": {
                    "mpi": "mpi0",
                    "eci": "eci2",
                    "cavv": "cavv8",
                    "transaction_Id": "transaction_Id8",
                    "success_url": "success_url4"
                  }
                }
              },
              "bank_transfer": {
                "bank": [
                  "bank3",
                  "bank4",
                  "bank5"
                ]
              },
              "accepted_brands": [
                "accepted_brands4",
                "accepted_brands5",
                "accepted_brands6"
              ],
              "pix": {
                "expires_at": "2016-03-13T12:52:32.123Z",
                "additional_information": [
                  {
                    "Name": "Name5",
                    "Value": "Value3"
                  },
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
            },
            {
              "id": "id9",
              "amount": 199,
              "default_payment_method": "default_payment_method9",
              "success_url": "success_url1",
              "payment_url": "payment_url3",
              "gateway_affiliation_id": "gateway_affiliation_id5",
              "accepted_payment_methods": [
                "accepted_payment_methods2"
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
                    "total": 156
                  },
                  {
                    "number": "number1",
                    "total": 157
                  }
                ],
                "authentication": {
                  "type": "type9",
                  "threed_secure": {
                    "mpi": "mpi5",
                    "eci": "eci7",
                    "cavv": "cavv3",
                    "transaction_Id": "transaction_Id3",
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
                    "mpi": "mpi1",
                    "eci": "eci3",
                    "cavv": "cavv9",
                    "transaction_Id": "transaction_Id9",
                    "success_url": "success_url5"
                  }
                }
              },
              "bank_transfer": {
                "bank": [
                  "bank4"
                ]
              },
              "accepted_brands": [
                "accepted_brands5"
              ],
              "pix": {
                "expires_at": "2016-03-13T12:52:32.123Z",
                "additional_information": [
                  {
                    "Name": "Name6",
                    "Value": "Value4"
                  }
                ]
              }
            }
          ],
          "ip": "ip4",
          "session_id": "session_id2",
          "location": {
            "latitude": "latitude8",
            "longitude": "longitude8"
          },
          "device": {
            "platform": "platform0"
          },
          "closed": false
        },
        "customer": {},
        "metadata": {
          "key0": "metadata7",
          "key1": "metadata8",
          "key2": "metadata9"
        },
        "paid_at": "2016-03-13T12:52:32.123Z",
        "canceled_at": "2016-03-13T12:52:32.123Z",
        "canceled_amount": 118,
        "paid_amount": 156,
        "interest_and_fine_paid": 104,
        "recurrency_cycle": "recurrency_cycle0"
      },
      "installments": 66,
      "billing_address": {},
      "subscription": {},
      "cycle": {},
      "shipping": {},
      "metadata": {
        "key0": "metadata9",
        "key1": "metadata8"
      },
      "due_at": "2016-03-13T12:52:32.123Z",
      "canceled_at": "2016-03-13T12:52:32.123Z",
      "billing_at": "2016-03-13T12:52:32.123Z",
      "seen_at": "2016-03-13T12:52:32.123Z",
      "total_discount": 134,
      "total_increment": 206,
      "subscription_id": "subscription_id2"
    },
    "order": {
      "id": "id8",
      "code": "code6",
      "currency": "currency2",
      "items": [
        {},
        {},
        {}
      ],
      "customer": {},
      "status": "status0",
      "created_at": "2016-03-13T12:52:32.123Z",
      "updated_at": "2016-03-13T12:52:32.123Z",
      "charges": [
        {}
      ],
      "invoice_url": "invoice_url0",
      "shipping": {},
      "metadata": {
        "key0": "metadata5",
        "key1": "metadata6"
      },
      "checkouts": [
        {},
        {}
      ],
      "ip": "ip2",
      "session_id": "session_id0",
      "location": {
        "latitude": "latitude4",
        "longitude": "longitude6"
      },
      "device": {
        "platform": "platform2"
      },
      "closed": false
    },
    "customer": {},
    "metadata": {
      "key0": "metadata5",
      "key1": "metadata4"
    },
    "paid_at": "2016-03-13T12:52:32.123Z",
    "canceled_at": "2016-03-13T12:52:32.123Z",
    "canceled_amount": 190,
    "paid_amount": 172,
    "interest_and_fine_paid": 176,
    "recurrency_cycle": "recurrency_cycle2"
  },
  "installments": 250,
  "billing_address": {
    "street": "street8",
    "number": "number4",
    "zip_code": "zip_code2",
    "neighborhood": "neighborhood4",
    "city": "city2",
    "state": "state6",
    "country": "country2",
    "complement": "complement6",
    "line_1": "line_18",
    "line_2": "line_26"
  },
  "subscription": {
    "id": "id4",
    "code": "code2",
    "start_at": "2016-03-13T12:52:32.123Z",
    "interval": "interval2",
    "interval_count": 234,
    "billing_type": "billing_type8",
    "current_cycle": {
      "start_at": "2016-03-13T12:52:32.123Z",
      "end_at": "2016-03-13T12:52:32.123Z",
      "id": "id2",
      "billing_at": "2016-03-13T12:52:32.123Z",
      "subscription": {
        "id": "id8",
        "code": "code6",
        "start_at": "2016-03-13T12:52:32.123Z",
        "interval": "interval6",
        "interval_count": 36,
        "billing_type": "billing_type8",
        "current_cycle": {
          "start_at": "2016-03-13T12:52:32.123Z",
          "end_at": "2016-03-13T12:52:32.123Z",
          "id": "id6",
          "billing_at": "2016-03-13T12:52:32.123Z",
          "subscription": {},
          "status": "status8",
          "duration": 20,
          "created_at": "created_at4",
          "updated_at": "updated_at2",
          "cycle": 216
        },
        "payment_method": "payment_method2",
        "currency": "currency8",
        "installments": 204,
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
                  "key1": "metadata8"
                },
                "line_1": "line_14",
                "line_2": "line_28",
                "deleted_at": "2016-03-13T12:52:32.123Z"
              },
              "metadata": {
                "key0": "metadata1",
                "key1": "metadata0",
                "key2": "metadata9"
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
              "fb_id": 246,
              "code": "code2",
              "document_type": "document_type2"
            },
            "metadata": {
              "key0": "metadata1"
            },
            "line_1": "line_18",
            "line_2": "line_22",
            "deleted_at": "2016-03-13T12:52:32.123Z"
          },
          "metadata": {
            "key0": "metadata5"
          },
          "phones": {
            "home_phone": {},
            "mobile_phone": {}
          },
          "fb_id": 196,
          "code": "code6",
          "document_type": "document_type6"
        },
        "card": {
          "id": "id8",
          "last_four_digits": "last_four_digits4",
          "brand": "brand2",
          "holder_name": "holder_name4",
          "exp_month": 182,
          "exp_year": 114,
          "status": "status0",
          "created_at": "2016-03-13T12:52:32.123Z",
          "updated_at": "2016-03-13T12:52:32.123Z",
          "billing_address": {
            "street": "street0",
            "number": "number2",
            "zip_code": "zip_code4",
            "neighborhood": "neighborhood6",
            "city": "city0",
            "state": "state4",
            "country": "country4",
            "complement": "complement4",
            "line_1": "line_16",
            "line_2": "line_28"
          },
          "customer": {},
          "metadata": {
            "key0": "metadata5",
            "key1": "metadata6"
          },
          "type": "type2",
          "holder_document": "holder_document8",
          "deleted_at": "2016-03-13T12:52:32.123Z",
          "first_six_digits": "first_six_digits8",
          "label": "label8"
        },
        "items": [
          {
            "id": "id5",
            "description": "description5",
            "status": "status7",
            "created_at": "2016-03-13T12:52:32.123Z",
            "updated_at": "2016-03-13T12:52:32.123Z",
            "pricing_scheme": {
              "price": 103,
              "scheme_type": "scheme_type3",
              "price_brackets": [
                {
                  "start_quantity": 106,
                  "price": 212,
                  "end_quantity": 114,
                  "overage_price": 128
                },
                {
                  "start_quantity": 107,
                  "price": 211,
                  "end_quantity": 115,
                  "overage_price": 129
                }
              ],
              "minimum_price": 7,
              "percentage": 92.91
            },
            "discounts": [
              {
                "id": "id6",
                "value": 169.08,
                "discount_type": "discount_type4",
                "status": "status8",
                "created_at": "2016-03-13T12:52:32.123Z",
                "cycles": 36,
                "deleted_at": "2016-03-13T12:52:32.123Z",
                "description": "description6",
                "subscription": {},
                "subscription_item": {
                  "id": "id2",
                  "description": "description2",
                  "status": "status4",
                  "created_at": "2016-03-13T12:52:32.123Z",
                  "updated_at": "2016-03-13T12:52:32.123Z",
                  "pricing_scheme": {
                    "price": 6,
                    "scheme_type": "scheme_type4",
                    "price_brackets": [
                      {},
                      {},
                      {}
                    ],
                    "minimum_price": 90,
                    "percentage": 206.52
                  },
                  "discounts": [
                    {
                      "id": "id3",
                      "value": 204.15,
                      "discount_type": "discount_type1",
                      "status": "status5",
                      "created_at": "2016-03-13T12:52:32.123Z",
                      "cycles": 215,
                      "deleted_at": "2016-03-13T12:52:32.123Z",
                      "description": "description3",
                      "subscription": {},
                      "subscription_item": {}
                    },
                    {
                      "id": "id4",
                      "value": 204.16,
                      "discount_type": "discount_type2",
                      "status": "status6",
                      "created_at": "2016-03-13T12:52:32.123Z",
                      "cycles": 216,
                      "deleted_at": "2016-03-13T12:52:32.123Z",
                      "description": "description4",
                      "subscription": {},
                      "subscription_item": {}
                    },
                    {
                      "id": "id5",
                      "value": 204.17,
                      "discount_type": "discount_type3",
                      "status": "status7",
                      "created_at": "2016-03-13T12:52:32.123Z",
                      "cycles": 217,
                      "deleted_at": "2016-03-13T12:52:32.123Z",
                      "description": "description5",
                      "subscription": {},
                      "subscription_item": {}
                    }
                  ],
                  "increments": [
                    {
                      "id": "id1",
                      "value": 59.43,
                      "increment_type": "increment_type3",
                      "status": "status3",
                      "created_at": "2016-03-13T12:52:32.123Z",
                      "cycles": 79,
                      "deleted_at": "2016-03-13T12:52:32.123Z",
                      "description": "description1",
                      "subscription": {},
                      "subscription_item": {}
                    }
                  ],
                  "subscription": {},
                  "name": "name2",
                  "quantity": 4,
                  "cycles": 24,
                  "deleted_at": "2016-03-13T12:52:32.123Z"
                }
              }
            ],
            "increments": [
              {},
              {}
            ],
            "subscription": {},
            "name": "name5",
            "quantity": 81,
            "cycles": 155,
            "deleted_at": "2016-03-13T12:52:32.123Z"
          },
          {
            "id": "id6",
            "description": "description6",
            "status": "status8",
            "created_at": "2016-03-13T12:52:32.123Z",
            "updated_at": "2016-03-13T12:52:32.123Z",
            "pricing_scheme": {
              "price": 104,
              "scheme_type": "scheme_type2",
              "price_brackets": [
                {
                  "start_quantity": 105,
                  "price": 213,
                  "end_quantity": 113,
                  "overage_price": 127
                }
              ],
              "minimum_price": 8,
              "percentage": 92.9
            },
            "discounts": [
              {
                "id": "id7",
                "value": 169.09,
                "discount_type": "discount_type5",
                "status": "status9",
                "created_at": "2016-03-13T12:52:32.123Z",
                "cycles": 37,
                "deleted_at": "2016-03-13T12:52:32.123Z",
                "description": "description7",
                "subscription": {},
                "subscription_item": {
                  "id": "id3",
                  "description": "description3",
                  "status": "status5",
                  "created_at": "2016-03-13T12:52:32.123Z",
                  "updated_at": "2016-03-13T12:52:32.123Z",
                  "pricing_scheme": {
                    "price": 5,
                    "scheme_type": "scheme_type5",
                    "price_brackets": [
                      {}
                    ],
                    "minimum_price": 91,
                    "percentage": 206.53
                  },
                  "discounts": [
                    {
                      "id": "id4",
                      "value": 204.16,
                      "discount_type": "discount_type2",
                      "status": "status6",
                      "created_at": "2016-03-13T12:52:32.123Z",
                      "cycles": 216,
                      "deleted_at": "2016-03-13T12:52:32.123Z",
                      "description": "description4",
                      "subscription": {},
                      "subscription_item": {}
                    }
                  ],
                  "increments": [
                    {
                      "id": "id2",
                      "value": 59.44,
                      "increment_type": "increment_type4",
                      "status": "status4",
                      "created_at": "2016-03-13T12:52:32.123Z",
                      "cycles": 80,
                      "deleted_at": "2016-03-13T12:52:32.123Z",
                      "description": "description2",
                      "subscription": {},
                      "subscription_item": {}
                    },
                    {
                      "id": "id3",
                      "value": 59.45,
                      "increment_type": "increment_type5",
                      "status": "status5",
                      "created_at": "2016-03-13T12:52:32.123Z",
                      "cycles": 81,
                      "deleted_at": "2016-03-13T12:52:32.123Z",
                      "description": "description3",
                      "subscription": {},
                      "subscription_item": {}
                    }
                  ],
                  "subscription": {},
                  "name": "name3",
                  "quantity": 5,
                  "cycles": 25,
                  "deleted_at": "2016-03-13T12:52:32.123Z"
                }
              },
              {
                "id": "id8",
                "value": 169.1,
                "discount_type": "discount_type6",
                "status": "status0",
                "created_at": "2016-03-13T12:52:32.123Z",
                "cycles": 38,
                "deleted_at": "2016-03-13T12:52:32.123Z",
                "description": "description8",
                "subscription": {},
                "subscription_item": {
                  "id": "id4",
                  "description": "description4",
                  "status": "status6",
                  "created_at": "2016-03-13T12:52:32.123Z",
                  "updated_at": "2016-03-13T12:52:32.123Z",
                  "pricing_scheme": {
                    "price": 4,
                    "scheme_type": "scheme_type6",
                    "price_brackets": [
                      {},
                      {}
                    ],
                    "minimum_price": 92,
                    "percentage": 206.54
                  },
                  "discounts": [
                    {
                      "id": "id5",
                      "value": 204.17,
                      "discount_type": "discount_type3",
                      "status": "status7",
                      "created_at": "2016-03-13T12:52:32.123Z",
                      "cycles": 217,
                      "deleted_at": "2016-03-13T12:52:32.123Z",
                      "description": "description5",
                      "subscription": {},
                      "subscription_item": {}
                    },
                    {
                      "id": "id6",
                      "value": 204.18,
                      "discount_type": "discount_type4",
                      "status": "status8",
                      "created_at": "2016-03-13T12:52:32.123Z",
                      "cycles": 218,
                      "deleted_at": "2016-03-13T12:52:32.123Z",
                      "description": "description6",
                      "subscription": {},
                      "subscription_item": {}
                    }
                  ],
                  "increments": [
                    {
                      "id": "id3",
                      "value": 59.45,
                      "increment_type": "increment_type5",
                      "status": "status5",
                      "created_at": "2016-03-13T12:52:32.123Z",
                      "cycles": 81,
                      "deleted_at": "2016-03-13T12:52:32.123Z",
                      "description": "description3",
                      "subscription": {},
                      "subscription_item": {}
                    },
                    {
                      "id": "id4",
                      "value": 59.46,
                      "increment_type": "increment_type6",
                      "status": "status6",
                      "created_at": "2016-03-13T12:52:32.123Z",
                      "cycles": 82,
                      "deleted_at": "2016-03-13T12:52:32.123Z",
                      "description": "description4",
                      "subscription": {},
                      "subscription_item": {}
                    },
                    {
                      "id": "id5",
                      "value": 59.47,
                      "increment_type": "increment_type7",
                      "status": "status7",
                      "created_at": "2016-03-13T12:52:32.123Z",
                      "cycles": 83,
                      "deleted_at": "2016-03-13T12:52:32.123Z",
                      "description": "description5",
                      "subscription": {},
                      "subscription_item": {}
                    }
                  ],
                  "subscription": {},
                  "name": "name4",
                  "quantity": 6,
                  "cycles": 26,
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
            "name": "name6",
            "quantity": 82,
            "cycles": 154,
            "deleted_at": "2016-03-13T12:52:32.123Z"
          },
          {
            "id": "id7",
            "description": "description7",
            "status": "status9",
            "created_at": "2016-03-13T12:52:32.123Z",
            "updated_at": "2016-03-13T12:52:32.123Z",
            "pricing_scheme": {
              "price": 105,
              "scheme_type": "scheme_type1",
              "price_brackets": [
                {
                  "start_quantity": 104,
                  "price": 214,
                  "end_quantity": 112,
                  "overage_price": 126
                },
                {
                  "start_quantity": 105,
                  "price": 213,
                  "end_quantity": 113,
                  "overage_price": 127
                },
                {
                  "start_quantity": 106,
                  "price": 212,
                  "end_quantity": 114,
                  "overage_price": 128
                }
              ],
              "minimum_price": 9,
              "percentage": 92.89
            },
            "discounts": [
              {
                "id": "id8",
                "value": 169.1,
                "discount_type": "discount_type6",
                "status": "status0",
                "created_at": "2016-03-13T12:52:32.123Z",
                "cycles": 38,
                "deleted_at": "2016-03-13T12:52:32.123Z",
                "description": "description8",
                "subscription": {},
                "subscription_item": {
                  "id": "id4",
                  "description": "description4",
                  "status": "status6",
                  "created_at": "2016-03-13T12:52:32.123Z",
                  "updated_at": "2016-03-13T12:52:32.123Z",
                  "pricing_scheme": {
                    "price": 4,
                    "scheme_type": "scheme_type6",
                    "price_brackets": [
                      {},
                      {}
                    ],
                    "minimum_price": 92,
                    "percentage": 206.54
                  },
                  "discounts": [
                    {
                      "id": "id5",
                      "value": 204.17,
                      "discount_type": "discount_type3",
                      "status": "status7",
                      "created_at": "2016-03-13T12:52:32.123Z",
                      "cycles": 217,
                      "deleted_at": "2016-03-13T12:52:32.123Z",
                      "description": "description5",
                      "subscription": {},
                      "subscription_item": {}
                    },
                    {
                      "id": "id6",
                      "value": 204.18,
                      "discount_type": "discount_type4",
                      "status": "status8",
                      "created_at": "2016-03-13T12:52:32.123Z",
                      "cycles": 218,
                      "deleted_at": "2016-03-13T12:52:32.123Z",
                      "description": "description6",
                      "subscription": {},
                      "subscription_item": {}
                    }
                  ],
                  "increments": [
                    {
                      "id": "id3",
                      "value": 59.45,
                      "increment_type": "increment_type5",
                      "status": "status5",
                      "created_at": "2016-03-13T12:52:32.123Z",
                      "cycles": 81,
                      "deleted_at": "2016-03-13T12:52:32.123Z",
                      "description": "description3",
                      "subscription": {},
                      "subscription_item": {}
                    },
                    {
                      "id": "id4",
                      "value": 59.46,
                      "increment_type": "increment_type6",
                      "status": "status6",
                      "created_at": "2016-03-13T12:52:32.123Z",
                      "cycles": 82,
                      "deleted_at": "2016-03-13T12:52:32.123Z",
                      "description": "description4",
                      "subscription": {},
                      "subscription_item": {}
                    },
                    {
                      "id": "id5",
                      "value": 59.47,
                      "increment_type": "increment_type7",
                      "status": "status7",
                      "created_at": "2016-03-13T12:52:32.123Z",
                      "cycles": 83,
                      "deleted_at": "2016-03-13T12:52:32.123Z",
                      "description": "description5",
                      "subscription": {},
                      "subscription_item": {}
                    }
                  ],
                  "subscription": {},
                  "name": "name4",
                  "quantity": 6,
                  "cycles": 26,
                  "deleted_at": "2016-03-13T12:52:32.123Z"
                }
              },
              {
                "id": "id9",
                "value": 169.11,
                "discount_type": "discount_type7",
                "status": "status1",
                "created_at": "2016-03-13T12:52:32.123Z",
                "cycles": 39,
                "deleted_at": "2016-03-13T12:52:32.123Z",
                "description": "description9",
                "subscription": {},
                "subscription_item": {
                  "id": "id5",
                  "description": "description5",
                  "status": "status7",
                  "created_at": "2016-03-13T12:52:32.123Z",
                  "updated_at": "2016-03-13T12:52:32.123Z",
                  "pricing_scheme": {
                    "price": 3,
                    "scheme_type": "scheme_type7",
                    "price_brackets": [
                      {},
                      {},
                      {}
                    ],
                    "minimum_price": 93,
                    "percentage": 206.55
                  },
                  "discounts": [
                    {
                      "id": "id6",
                      "value": 204.18,
                      "discount_type": "discount_type4",
                      "status": "status8",
                      "created_at": "2016-03-13T12:52:32.123Z",
                      "cycles": 218,
                      "deleted_at": "2016-03-13T12:52:32.123Z",
                      "description": "description6",
                      "subscription": {},
                      "subscription_item": {}
                    },
                    {
                      "id": "id7",
                      "value": 204.19,
                      "discount_type": "discount_type5",
                      "status": "status9",
                      "created_at": "2016-03-13T12:52:32.123Z",
                      "cycles": 219,
                      "deleted_at": "2016-03-13T12:52:32.123Z",
                      "description": "description7",
                      "subscription": {},
                      "subscription_item": {}
                    },
                    {
                      "id": "id8",
                      "value": 204.2,
                      "discount_type": "discount_type6",
                      "status": "status0",
                      "created_at": "2016-03-13T12:52:32.123Z",
                      "cycles": 220,
                      "deleted_at": "2016-03-13T12:52:32.123Z",
                      "description": "description8",
                      "subscription": {},
                      "subscription_item": {}
                    }
                  ],
                  "increments": [
                    {
                      "id": "id4",
                      "value": 59.46,
                      "increment_type": "increment_type6",
                      "status": "status6",
                      "created_at": "2016-03-13T12:52:32.123Z",
                      "cycles": 82,
                      "deleted_at": "2016-03-13T12:52:32.123Z",
                      "description": "description4",
                      "subscription": {},
                      "subscription_item": {}
                    }
                  ],
                  "subscription": {},
                  "name": "name5",
                  "quantity": 7,
                  "cycles": 27,
                  "deleted_at": "2016-03-13T12:52:32.123Z"
                }
              },
              {
                "id": "id0",
                "value": 169.12,
                "discount_type": "discount_type8",
                "status": "status2",
                "created_at": "2016-03-13T12:52:32.123Z",
                "cycles": 40,
                "deleted_at": "2016-03-13T12:52:32.123Z",
                "description": "description0",
                "subscription": {},
                "subscription_item": {
                  "id": "id6",
                  "description": "description6",
                  "status": "status8",
                  "created_at": "2016-03-13T12:52:32.123Z",
                  "updated_at": "2016-03-13T12:52:32.123Z",
                  "pricing_scheme": {
                    "price": 2,
                    "scheme_type": "scheme_type8",
                    "price_brackets": [
                      {}
                    ],
                    "minimum_price": 94,
                    "percentage": 206.56
                  },
                  "discounts": [
                    {
                      "id": "id7",
                      "value": 204.19,
                      "discount_type": "discount_type5",
                      "status": "status9",
                      "created_at": "2016-03-13T12:52:32.123Z",
                      "cycles": 219,
                      "deleted_at": "2016-03-13T12:52:32.123Z",
                      "description": "description7",
                      "subscription": {},
                      "subscription_item": {}
                    }
                  ],
                  "increments": [
                    {
                      "id": "id5",
                      "value": 59.47,
                      "increment_type": "increment_type7",
                      "status": "status7",
                      "created_at": "2016-03-13T12:52:32.123Z",
                      "cycles": 83,
                      "deleted_at": "2016-03-13T12:52:32.123Z",
                      "description": "description5",
                      "subscription": {},
                      "subscription_item": {}
                    },
                    {
                      "id": "id6",
                      "value": 59.48,
                      "increment_type": "increment_type8",
                      "status": "status8",
                      "created_at": "2016-03-13T12:52:32.123Z",
                      "cycles": 84,
                      "deleted_at": "2016-03-13T12:52:32.123Z",
                      "description": "description6",
                      "subscription": {},
                      "subscription_item": {}
                    }
                  ],
                  "subscription": {},
                  "name": "name6",
                  "quantity": 8,
                  "cycles": 28,
                  "deleted_at": "2016-03-13T12:52:32.123Z"
                }
              }
            ],
            "increments": [
              {}
            ],
            "subscription": {},
            "name": "name7",
            "quantity": 83,
            "cycles": 153,
            "deleted_at": "2016-03-13T12:52:32.123Z"
          }
        ],
        "statement_descriptor": "statement_descriptor8",
        "metadata": {
          "key0": "metadata5",
          "key1": "metadata6"
        },
        "setup": {
          "id": "id2",
          "description": "description8",
          "amount": 228,
          "status": "status6"
        },
        "gateway_affiliation_id": "gateway_affiliation_id4",
        "next_billing_at": "2016-03-13T12:52:32.123Z",
        "billing_day": 80,
        "minimum_price": 222,
        "canceled_at": "2016-03-13T12:52:32.123Z",
        "discounts": [
          {}
        ],
        "increments": [
          {},
          {},
          {}
        ],
        "boleto_due_days": 148,
        "split": {
          "enabled": false,
          "rules": [
            {
              "type": "type2",
              "amount": 108,
              "recipient": {
                "id": "id0",
                "name": "name0",
                "email": "email6",
                "document": "document6",
                "description": "description0",
                "type": "type0",
                "status": "status8",
                "created_at": "2016-03-13T12:52:32.123Z",
                "updated_at": "2016-03-13T12:52:32.123Z",
                "deleted_at": "2016-03-13T12:52:32.123Z",
                "default_bank_account": {
                  "id": "id8",
                  "holder_name": "holder_name4",
                  "holder_type": "holder_type0",
                  "bank": "bank6",
                  "branch_number": "branch_number4",
                  "branch_check_digit": "branch_check_digit4",
                  "account_number": "account_number8",
                  "account_check_digit": "account_check_digit4",
                  "type": "type2",
                  "status": "status0",
                  "created_at": "2016-03-13T12:52:32.123Z",
                  "updated_at": "2016-03-13T12:52:32.123Z",
                  "deleted_at": "2016-03-13T12:52:32.123Z",
                  "recipient": {
                    "id": "id0",
                    "name": "name0",
                    "email": "email6",
                    "document": "document6",
                    "description": "description0",
                    "type": "type0",
                    "status": "status8",
                    "created_at": "2016-03-13T12:52:32.123Z",
                    "updated_at": "2016-03-13T12:52:32.123Z",
                    "deleted_at": "2016-03-13T12:52:32.123Z",
                    "default_bank_account": {
                      "id": "id8",
                      "holder_name": "holder_name4",
                      "holder_type": "holder_type0",
                      "bank": "bank6",
                      "branch_number": "branch_number4",
                      "branch_check_digit": "branch_check_digit4",
                      "account_number": "account_number8",
                      "account_check_digit": "account_check_digit4",
                      "type": "type8",
                      "status": "status0",
                      "created_at": "2016-03-13T12:52:32.123Z",
                      "updated_at": "2016-03-13T12:52:32.123Z",
                      "deleted_at": "2016-03-13T12:52:32.123Z",
                      "recipient": {},
                      "metadata": {
                        "key0": "metadata5",
                        "key1": "metadata4"
                      },
                      "pix_key": "pix_key8"
                    },
                    "gateway_recipients": [
                      {
                        "gateway": "gateway4",
                        "status": "status6",
                        "pgid": "pgid0",
                        "created_at": "created_at2",
                        "updated_at": "updated_at0"
                      },
                      {
                        "gateway": "gateway5",
                        "status": "status7",
                        "pgid": "pgid1",
                        "created_at": "created_at3",
                        "updated_at": "updated_at1"
                      },
                      {
                        "gateway": "gateway6",
                        "status": "status8",
                        "pgid": "pgid2",
                        "created_at": "created_at4",
                        "updated_at": "updated_at2"
                      }
                    ],
                    "metadata": {
                      "key0": "metadata3",
                      "key1": "metadata4"
                    },
                    "automatic_anticipation_settings": {
                      "enabled": false,
                      "type": "type6",
                      "volume_percentage": 100,
                      "delay": 190,
                      "days": [
                        166,
                        167
                      ]
                    },
                    "transfer_settings": {
                      "transfer_enabled": false,
                      "transfer_interval": "transfer_interval4",
                      "transfer_day": 10
                    },
                    "code": "code8",
                    "payment_mode": "payment_mode6"
                  },
                  "metadata": {
                    "key0": "metadata5",
                    "key1": "metadata4"
                  },
                  "pix_key": "pix_key8"
                },
                "gateway_recipients": [
                  {},
                  {},
                  {}
                ],
                "metadata": {
                  "key0": "metadata3",
                  "key1": "metadata4"
                },
                "automatic_anticipation_settings": {
                  "enabled": false,
                  "type": "type6",
                  "volume_percentage": 170,
                  "delay": 120,
                  "days": [
                    96,
                    97
                  ]
                },
                "transfer_settings": {
                  "transfer_enabled": false,
                  "transfer_interval": "transfer_interval4",
                  "transfer_day": 80
                },
                "code": "code8",
                "payment_mode": "payment_mode6"
              },
              "gateway_id": "gateway_id2",
              "options": {
                "liable": false,
                "charge_processing_fee": false,
                "charge_remainder_fee": "charge_remainder_fee2"
              },
              "id": "id8"
            },
            {
              "type": "type1",
              "amount": 109,
              "recipient": {
                "id": "id9",
                "name": "name9",
                "email": "email7",
                "document": "document7",
                "description": "description1",
                "type": "type1",
                "status": "status9",
                "created_at": "2016-03-13T12:52:32.123Z",
                "updated_at": "2016-03-13T12:52:32.123Z",
                "deleted_at": "2016-03-13T12:52:32.123Z",
                "default_bank_account": {
                  "id": "id7",
                  "holder_name": "holder_name3",
                  "holder_type": "holder_type9",
                  "bank": "bank5",
                  "branch_number": "branch_number3",
                  "branch_check_digit": "branch_check_digit3",
                  "account_number": "account_number7",
                  "account_check_digit": "account_check_digit3",
                  "type": "type3",
                  "status": "status9",
                  "created_at": "2016-03-13T12:52:32.123Z",
                  "updated_at": "2016-03-13T12:52:32.123Z",
                  "deleted_at": "2016-03-13T12:52:32.123Z",
                  "recipient": {
                    "id": "id9",
                    "name": "name9",
                    "email": "email7",
                    "document": "document7",
                    "description": "description9",
                    "type": "type1",
                    "status": "status9",
                    "created_at": "2016-03-13T12:52:32.123Z",
                    "updated_at": "2016-03-13T12:52:32.123Z",
                    "deleted_at": "2016-03-13T12:52:32.123Z",
                    "default_bank_account": {
                      "id": "id7",
                      "holder_name": "holder_name3",
                      "holder_type": "holder_type9",
                      "bank": "bank5",
                      "branch_number": "branch_number3",
                      "branch_check_digit": "branch_check_digit3",
                      "account_number": "account_number7",
                      "account_check_digit": "account_check_digit3",
                      "type": "type7",
                      "status": "status9",
                      "created_at": "2016-03-13T12:52:32.123Z",
                      "updated_at": "2016-03-13T12:52:32.123Z",
                      "deleted_at": "2016-03-13T12:52:32.123Z",
                      "recipient": {},
                      "metadata": {
                        "key0": "metadata4",
                        "key1": "metadata3",
                        "key2": "metadata2"
                      },
                      "pix_key": "pix_key9"
                    },
                    "gateway_recipients": [
                      {
                        "gateway": "gateway3",
                        "status": "status5",
                        "pgid": "pgid9",
                        "created_at": "created_at1",
                        "updated_at": "updated_at9"
                      },
                      {
                        "gateway": "gateway4",
                        "status": "status6",
                        "pgid": "pgid0",
                        "created_at": "created_at2",
                        "updated_at": "updated_at0"
                      }
                    ],
                    "metadata": {
                      "key0": "metadata4",
                      "key1": "metadata5",
                      "key2": "metadata6"
                    },
                    "automatic_anticipation_settings": {
                      "enabled": true,
                      "type": "type7",
                      "volume_percentage": 101,
                      "delay": 189,
                      "days": [
                        165
                      ]
                    },
                    "transfer_settings": {
                      "transfer_enabled": true,
                      "transfer_interval": "transfer_interval5",
                      "transfer_day": 11
                    },
                    "code": "code7",
                    "payment_mode": "payment_mode7"
                  },
                  "metadata": {
                    "key0": "metadata4",
                    "key1": "metadata3",
                    "key2": "metadata2"
                  },
                  "pix_key": "pix_key9"
                },
                "gateway_recipients": [
                  {},
                  {}
                ],
                "metadata": {
                  "key0": "metadata4",
                  "key1": "metadata5",
                  "key2": "metadata6"
                },
                "automatic_anticipation_settings": {
                  "enabled": true,
                  "type": "type7",
                  "volume_percentage": 171,
                  "delay": 119,
                  "days": [
                    95
                  ]
                },
                "transfer_settings": {
                  "transfer_enabled": true,
                  "transfer_interval": "transfer_interval5",
                  "transfer_day": 81
                },
                "code": "code7",
                "payment_mode": "payment_mode7"
              },
              "gateway_id": "gateway_id1",
              "options": {
                "liable": true,
                "charge_processing_fee": true,
                "charge_remainder_fee": "charge_remainder_fee1"
              },
              "id": "id9"
            },
            {
              "type": "type0",
              "amount": 110,
              "recipient": {
                "id": "id8",
                "name": "name8",
                "email": "email8",
                "document": "document8",
                "description": "description2",
                "type": "type2",
                "status": "status0",
                "created_at": "2016-03-13T12:52:32.123Z",
                "updated_at": "2016-03-13T12:52:32.123Z",
                "deleted_at": "2016-03-13T12:52:32.123Z",
                "default_bank_account": {
                  "id": "id6",
                  "holder_name": "holder_name2",
                  "holder_type": "holder_type8",
                  "bank": "bank4",
                  "branch_number": "branch_number2",
                  "branch_check_digit": "branch_check_digit2",
                  "account_number": "account_number6",
                  "account_check_digit": "account_check_digit2",
                  "type": "type4",
                  "status": "status8",
                  "created_at": "2016-03-13T12:52:32.123Z",
                  "updated_at": "2016-03-13T12:52:32.123Z",
                  "deleted_at": "2016-03-13T12:52:32.123Z",
                  "recipient": {
                    "id": "id8",
                    "name": "name8",
                    "email": "email8",
                    "document": "document8",
                    "description": "description8",
                    "type": "type2",
                    "status": "status0",
                    "created_at": "2016-03-13T12:52:32.123Z",
                    "updated_at": "2016-03-13T12:52:32.123Z",
                    "deleted_at": "2016-03-13T12:52:32.123Z",
                    "default_bank_account": {
                      "id": "id6",
                      "holder_name": "holder_name2",
                      "holder_type": "holder_type8",
                      "bank": "bank4",
                      "branch_number": "branch_number2",
                      "branch_check_digit": "branch_check_digit2",
                      "account_number": "account_number6",
                      "account_check_digit": "account_check_digit2",
                      "type": "type6",
                      "status": "status8",
                      "created_at": "2016-03-13T12:52:32.123Z",
                      "updated_at": "2016-03-13T12:52:32.123Z",
                      "deleted_at": "2016-03-13T12:52:32.123Z",
                      "recipient": {},
                      "metadata": {
                        "key0": "metadata3"
                      },
                      "pix_key": "pix_key0"
                    },
                    "gateway_recipients": [
                      {
                        "gateway": "gateway2",
                        "status": "status4",
                        "pgid": "pgid8",
                        "created_at": "created_at0",
                        "updated_at": "updated_at8"
                      }
                    ],
                    "metadata": {
                      "key0": "metadata5"
                    },
                    "automatic_anticipation_settings": {
                      "enabled": false,
                      "type": "type8",
                      "volume_percentage": 102,
                      "delay": 188,
                      "days": [
                        164,
                        165,
                        166
                      ]
                    },
                    "transfer_settings": {
                      "transfer_enabled": false,
                      "transfer_interval": "transfer_interval6",
                      "transfer_day": 12
                    },
                    "code": "code6",
                    "payment_mode": "payment_mode8"
                  },
                  "metadata": {
                    "key0": "metadata3"
                  },
                  "pix_key": "pix_key0"
                },
                "gateway_recipients": [
                  {}
                ],
                "metadata": {
                  "key0": "metadata5"
                },
                "automatic_anticipation_settings": {
                  "enabled": false,
                  "type": "type8",
                  "volume_percentage": 172,
                  "delay": 118,
                  "days": [
                    94,
                    95,
                    96
                  ]
                },
                "transfer_settings": {
                  "transfer_enabled": false,
                  "transfer_interval": "transfer_interval6",
                  "transfer_day": 82
                },
                "code": "code6",
                "payment_mode": "payment_mode8"
              },
              "gateway_id": "gateway_id0",
              "options": {
                "liable": false,
                "charge_processing_fee": false,
                "charge_remainder_fee": "charge_remainder_fee0"
              },
              "id": "id0"
            }
          ]
        },
        "boleto": {
          "interest": {
            "days": 198,
            "type": "type2",
            "amount": 16
          },
          "fine": {
            "days": 92,
            "type": "type0",
            "amount": 90
          },
          "max_days_to_pay_past_due": 80
        },
        "manual_billing": false
      },
      "status": "status4",
      "duration": 218,
      "created_at": "created_at0",
      "updated_at": "updated_at8",
      "cycle": 158
    },
    "payment_method": "payment_method4",
    "currency": "currency4",
    "installments": 146,
    "status": "status6",
    "created_at": "2016-03-13T12:52:32.123Z",
    "updated_at": "2016-03-13T12:52:32.123Z",
    "customer": {},
    "card": {
      "id": "id8",
      "last_four_digits": "last_four_digits4",
      "brand": "brand2",
      "holder_name": "holder_name4",
      "exp_month": 216,
      "exp_year": 80,
      "status": "status0",
      "created_at": "2016-03-13T12:52:32.123Z",
      "updated_at": "2016-03-13T12:52:32.123Z",
      "billing_address": {
        "street": "street0",
        "number": "number2",
        "zip_code": "zip_code4",
        "neighborhood": "neighborhood6",
        "city": "city0",
        "state": "state4",
        "country": "country4",
        "complement": "complement4",
        "line_1": "line_16",
        "line_2": "line_28"
      },
      "customer": {},
      "metadata": {
        "key0": "metadata5",
        "key1": "metadata4"
      },
      "type": "type2",
      "holder_document": "holder_document2",
      "deleted_at": "2016-03-13T12:52:32.123Z",
      "first_six_digits": "first_six_digits8",
      "label": "label8"
    },
    "items": [
      {},
      {}
    ],
    "statement_descriptor": "statement_descriptor4",
    "metadata": {
      "key0": "metadata1",
      "key1": "metadata0",
      "key2": "metadata9"
    },
    "setup": {
      "id": "id8",
      "description": "description8",
      "amount": 170,
      "status": "status0"
    },
    "gateway_affiliation_id": "gateway_affiliation_id0",
    "next_billing_at": "2016-03-13T12:52:32.123Z",
    "billing_day": 118,
    "minimum_price": 232,
    "canceled_at": "2016-03-13T12:52:32.123Z",
    "discounts": [
      {},
      {},
      {}
    ],
    "increments": [
      {}
    ],
    "boleto_due_days": 90,
    "split": {
      "enabled": false,
      "rules": [
        {},
        {}
      ]
    },
    "boleto": {
      "interest": {
        "days": 0,
        "type": "type4",
        "amount": 74
      },
      "fine": {
        "days": 34,
        "type": "type4",
        "amount": 108
      },
      "max_days_to_pay_past_due": 22
    },
    "manual_billing": false
  },
  "cycle": {
    "start_at": "2016-03-13T12:52:32.123Z",
    "end_at": "2016-03-13T12:52:32.123Z",
    "id": "id0",
    "billing_at": "2016-03-13T12:52:32.123Z",
    "subscription": {
      "id": "id4",
      "code": "code2",
      "start_at": "2016-03-13T12:52:32.123Z",
      "interval": "interval2",
      "interval_count": 182,
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
          "interval_count": 180,
          "billing_type": "billing_type4",
          "current_cycle": {},
          "payment_method": "payment_method8",
          "currency": "currency2",
          "installments": 92,
          "status": "status6",
          "created_at": "2016-03-13T12:52:32.123Z",
          "updated_at": "2016-03-13T12:52:32.123Z",
          "customer": {
            "id": "id2",
            "name": "name2",
            "email": "email4",
            "delinquent": false,
            "created_at": "2016-03-13T12:52:32.123Z",
            "updated_at": "2016-03-13T12:52:32.123Z",
            "document": "document4",
            "type": "type8",
            "fb_access_token": "fb_access_token6",
            "address": {
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
                "document": "document2",
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
                  "customer": {},
                  "metadata": {
                    "key0": "metadata5"
                  },
                  "line_1": "line_18",
                  "line_2": "line_22",
                  "deleted_at": "2016-03-13T12:52:32.123Z"
                },
                "metadata": {
                  "key0": "metadata5"
                },
                "phones": {
                  "home_phone": {
                    "country_code": "country_code0",
                    "number": "number8",
                    "area_code": "area_code0"
                  },
                  "mobile_phone": {
                    "country_code": "country_code0",
                    "number": "number2",
                    "area_code": "area_code0"
                  }
                },
                "fb_id": 134,
                "code": "code6",
                "document_type": "document_type6"
              },
              "metadata": {
                "key0": "metadata5",
                "key1": "metadata4"
              },
              "line_1": "line_12",
              "line_2": "line_26",
              "deleted_at": "2016-03-13T12:52:32.123Z"
            },
            "metadata": {
              "key0": "metadata1",
              "key1": "metadata2"
            },
            "phones": {
              "home_phone": {},
              "mobile_phone": {}
            },
            "fb_id": 84,
            "code": "code0",
            "document_type": "document_type0"
          },
          "card": {
            "id": "id4",
            "last_four_digits": "last_four_digits0",
            "brand": "brand8",
            "holder_name": "holder_name0",
            "exp_month": 70,
            "exp_year": 226,
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
              "key0": "metadata9"
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
              "pricing_scheme": {
                "price": 247,
                "scheme_type": "scheme_type9",
                "price_brackets": [
                  {
                    "start_quantity": 218,
                    "price": 100,
                    "end_quantity": 226,
                    "overage_price": 240
                  },
                  {
                    "start_quantity": 219,
                    "price": 99,
                    "end_quantity": 227,
                    "overage_price": 241
                  },
                  {
                    "start_quantity": 220,
                    "price": 98,
                    "end_quantity": 228,
                    "overage_price": 242
                  }
                ],
                "minimum_price": 151,
                "percentage": 78.67
              },
              "discounts": [
                {
                  "id": "id0",
                  "value": 183.32,
                  "discount_type": "discount_type8",
                  "status": "status2",
                  "created_at": "2016-03-13T12:52:32.123Z",
                  "cycles": 180,
                  "deleted_at": "2016-03-13T12:52:32.123Z",
                  "description": "description0",
                  "subscription": {},
                  "subscription_item": {
                    "id": "id6",
                    "description": "description6",
                    "status": "status8",
                    "created_at": "2016-03-13T12:52:32.123Z",
                    "updated_at": "2016-03-13T12:52:32.123Z",
                    "pricing_scheme": {
                      "price": 138,
                      "scheme_type": "scheme_type8",
                      "price_brackets": [
                        {},
                        {}
                      ],
                      "minimum_price": 234,
                      "percentage": 220.76
                    },
                    "discounts": [
                      {
                        "id": "id7",
                        "value": 218.39,
                        "discount_type": "discount_type5",
                        "status": "status9",
                        "created_at": "2016-03-13T12:52:32.123Z",
                        "cycles": 103,
                        "deleted_at": "2016-03-13T12:52:32.123Z",
                        "description": "description7",
                        "subscription": {},
                        "subscription_item": {}
                      },
                      {
                        "id": "id8",
                        "value": 218.4,
                        "discount_type": "discount_type6",
                        "status": "status0",
                        "created_at": "2016-03-13T12:52:32.123Z",
                        "cycles": 104,
                        "deleted_at": "2016-03-13T12:52:32.123Z",
                        "description": "description8",
                        "subscription": {},
                        "subscription_item": {}
                      }
                    ],
                    "increments": [
                      {
                        "id": "id5",
                        "value": 73.67,
                        "increment_type": "increment_type7",
                        "status": "status7",
                        "created_at": "2016-03-13T12:52:32.123Z",
                        "cycles": 223,
                        "deleted_at": "2016-03-13T12:52:32.123Z",
                        "description": "description5",
                        "subscription": {},
                        "subscription_item": {}
                      },
                      {
                        "id": "id6",
                        "value": 73.68,
                        "increment_type": "increment_type8",
                        "status": "status8",
                        "created_at": "2016-03-13T12:52:32.123Z",
                        "cycles": 224,
                        "deleted_at": "2016-03-13T12:52:32.123Z",
                        "description": "description6",
                        "subscription": {},
                        "subscription_item": {}
                      },
                      {
                        "id": "id7",
                        "value": 73.69,
                        "increment_type": "increment_type9",
                        "status": "status9",
                        "created_at": "2016-03-13T12:52:32.123Z",
                        "cycles": 225,
                        "deleted_at": "2016-03-13T12:52:32.123Z",
                        "description": "description7",
                        "subscription": {},
                        "subscription_item": {}
                      }
                    ],
                    "subscription": {},
                    "name": "name6",
                    "quantity": 148,
                    "cycles": 168,
                    "deleted_at": "2016-03-13T12:52:32.123Z"
                  }
                },
                {
                  "id": "id1",
                  "value": 183.33,
                  "discount_type": "discount_type9",
                  "status": "status3",
                  "created_at": "2016-03-13T12:52:32.123Z",
                  "cycles": 181,
                  "deleted_at": "2016-03-13T12:52:32.123Z",
                  "description": "description1",
                  "subscription": {},
                  "subscription_item": {
                    "id": "id7",
                    "description": "description7",
                    "status": "status9",
                    "created_at": "2016-03-13T12:52:32.123Z",
                    "updated_at": "2016-03-13T12:52:32.123Z",
                    "pricing_scheme": {
                      "price": 139,
                      "scheme_type": "scheme_type9",
                      "price_brackets": [
                        {},
                        {},
                        {}
                      ],
                      "minimum_price": 235,
                      "percentage": 220.77
                    },
                    "discounts": [
                      {
                        "id": "id8",
                        "value": 218.4,
                        "discount_type": "discount_type6",
                        "status": "status0",
                        "created_at": "2016-03-13T12:52:32.123Z",
                        "cycles": 104,
                        "deleted_at": "2016-03-13T12:52:32.123Z",
                        "description": "description8",
                        "subscription": {},
                        "subscription_item": {}
                      },
                      {
                        "id": "id9",
                        "value": 218.41,
                        "discount_type": "discount_type7",
                        "status": "status1",
                        "created_at": "2016-03-13T12:52:32.123Z",
                        "cycles": 105,
                        "deleted_at": "2016-03-13T12:52:32.123Z",
                        "description": "description9",
                        "subscription": {},
                        "subscription_item": {}
                      },
                      {
                        "id": "id0",
                        "value": 218.42,
                        "discount_type": "discount_type8",
                        "status": "status2",
                        "created_at": "2016-03-13T12:52:32.123Z",
                        "cycles": 106,
                        "deleted_at": "2016-03-13T12:52:32.123Z",
                        "description": "description0",
                        "subscription": {},
                        "subscription_item": {}
                      }
                    ],
                    "increments": [
                      {
                        "id": "id6",
                        "value": 73.68,
                        "increment_type": "increment_type8",
                        "status": "status8",
                        "created_at": "2016-03-13T12:52:32.123Z",
                        "cycles": 224,
                        "deleted_at": "2016-03-13T12:52:32.123Z",
                        "description": "description6",
                        "subscription": {},
                        "subscription_item": {}
                      }
                    ],
                    "subscription": {},
                    "name": "name7",
                    "quantity": 149,
                    "cycles": 169,
                    "deleted_at": "2016-03-13T12:52:32.123Z"
                  }
                },
                {
                  "id": "id2",
                  "value": 183.34,
                  "discount_type": "discount_type0",
                  "status": "status4",
                  "created_at": "2016-03-13T12:52:32.123Z",
                  "cycles": 182,
                  "deleted_at": "2016-03-13T12:52:32.123Z",
                  "description": "description2",
                  "subscription": {},
                  "subscription_item": {
                    "id": "id8",
                    "description": "description8",
                    "status": "status0",
                    "created_at": "2016-03-13T12:52:32.123Z",
                    "updated_at": "2016-03-13T12:52:32.123Z",
                    "pricing_scheme": {
                      "price": 140,
                      "scheme_type": "scheme_type0",
                      "price_brackets": [
                        {}
                      ],
                      "minimum_price": 236,
                      "percentage": 220.78
                    },
                    "discounts": [
                      {
                        "id": "id9",
                        "value": 218.41,
                        "discount_type": "discount_type7",
                        "status": "status1",
                        "created_at": "2016-03-13T12:52:32.123Z",
                        "cycles": 105,
                        "deleted_at": "2016-03-13T12:52:32.123Z",
                        "description": "description9",
                        "subscription": {},
                        "subscription_item": {}
                      }
                    ],
                    "increments": [
                      {
                        "id": "id7",
                        "value": 73.69,
                        "increment_type": "increment_type9",
                        "status": "status9",
                        "created_at": "2016-03-13T12:52:32.123Z",
                        "cycles": 225,
                        "deleted_at": "2016-03-13T12:52:32.123Z",
                        "description": "description7",
                        "subscription": {},
                        "subscription_item": {}
                      },
                      {
                        "id": "id8",
                        "value": 73.7,
                        "increment_type": "increment_type0",
                        "status": "status0",
                        "created_at": "2016-03-13T12:52:32.123Z",
                        "cycles": 226,
                        "deleted_at": "2016-03-13T12:52:32.123Z",
                        "description": "description8",
                        "subscription": {},
                        "subscription_item": {}
                      }
                    ],
                    "subscription": {},
                    "name": "name8",
                    "quantity": 150,
                    "cycles": 170,
                    "deleted_at": "2016-03-13T12:52:32.123Z"
                  }
                }
              ],
              "increments": [
                {}
              ],
              "subscription": {},
              "name": "name9",
              "quantity": 225,
              "cycles": 11,
              "deleted_at": "2016-03-13T12:52:32.123Z"
            },
            {
              "id": "id0",
              "description": "description0",
              "status": "status2",
              "created_at": "2016-03-13T12:52:32.123Z",
              "updated_at": "2016-03-13T12:52:32.123Z",
              "pricing_scheme": {
                "price": 248,
                "scheme_type": "scheme_type8",
                "price_brackets": [
                  {
                    "start_quantity": 217,
                    "price": 101,
                    "end_quantity": 225,
                    "overage_price": 239
                  },
                  {
                    "start_quantity": 218,
                    "price": 100,
                    "end_quantity": 226,
                    "overage_price": 240
                  }
                ],
                "minimum_price": 152,
                "percentage": 78.66
              },
              "discounts": [
                {
                  "id": "id1",
                  "value": 183.33,
                  "discount_type": "discount_type9",
                  "status": "status3",
                  "created_at": "2016-03-13T12:52:32.123Z",
                  "cycles": 181,
                  "deleted_at": "2016-03-13T12:52:32.123Z",
                  "description": "description1",
                  "subscription": {},
                  "subscription_item": {
                    "id": "id7",
                    "description": "description7",
                    "status": "status9",
                    "created_at": "2016-03-13T12:52:32.123Z",
                    "updated_at": "2016-03-13T12:52:32.123Z",
                    "pricing_scheme": {
                      "price": 139,
                      "scheme_type": "scheme_type9",
                      "price_brackets": [
                        {},
                        {},
                        {}
                      ],
                      "minimum_price": 235,
                      "percentage": 220.77
                    },
                    "discounts": [
                      {
                        "id": "id8",
                        "value": 218.4,
                        "discount_type": "discount_type6",
                        "status": "status0",
                        "created_at": "2016-03-13T12:52:32.123Z",
                        "cycles": 104,
                        "deleted_at": "2016-03-13T12:52:32.123Z",
                        "description": "description8",
                        "subscription": {},
                        "subscription_item": {}
                      },
                      {
                        "id": "id9",
                        "value": 218.41,
                        "discount_type": "discount_type7",
                        "status": "status1",
                        "created_at": "2016-03-13T12:52:32.123Z",
                        "cycles": 105,
                        "deleted_at": "2016-03-13T12:52:32.123Z",
                        "description": "description9",
                        "subscription": {},
                        "subscription_item": {}
                      },
                      {
                        "id": "id0",
                        "value": 218.42,
                        "discount_type": "discount_type8",
                        "status": "status2",
                        "created_at": "2016-03-13T12:52:32.123Z",
                        "cycles": 106,
                        "deleted_at": "2016-03-13T12:52:32.123Z",
                        "description": "description0",
                        "subscription": {},
                        "subscription_item": {}
                      }
                    ],
                    "increments": [
                      {
                        "id": "id6",
                        "value": 73.68,
                        "increment_type": "increment_type8",
                        "status": "status8",
                        "created_at": "2016-03-13T12:52:32.123Z",
                        "cycles": 224,
                        "deleted_at": "2016-03-13T12:52:32.123Z",
                        "description": "description6",
                        "subscription": {},
                        "subscription_item": {}
                      }
                    ],
                    "subscription": {},
                    "name": "name7",
                    "quantity": 149,
                    "cycles": 169,
                    "deleted_at": "2016-03-13T12:52:32.123Z"
                  }
                }
              ],
              "increments": [
                {},
                {}
              ],
              "subscription": {},
              "name": "name0",
              "quantity": 226,
              "cycles": 10,
              "deleted_at": "2016-03-13T12:52:32.123Z"
            }
          ],
          "statement_descriptor": "statement_descriptor2",
          "metadata": {
            "key0": "metadata1",
            "key1": "metadata2",
            "key2": "metadata3"
          },
          "setup": {
            "id": "id6",
            "description": "description4",
            "amount": 116,
            "status": "status2"
          },
          "gateway_affiliation_id": "gateway_affiliation_id8",
          "next_billing_at": "2016-03-13T12:52:32.123Z",
          "billing_day": 192,
          "minimum_price": 78,
          "canceled_at": "2016-03-13T12:52:32.123Z",
          "discounts": [
            {},
            {},
            {}
          ],
          "increments": [
            {}
          ],
          "boleto_due_days": 36,
          "split": {
            "enabled": false,
            "rules": [
              {
                "type": "type8",
                "amount": 252,
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
                        "volume_percentage": 72,
                        "delay": 218,
                        "days": [
                          194,
                          195
                        ]
                      },
                      "transfer_settings": {
                        "transfer_enabled": false,
                        "transfer_interval": "transfer_interval0",
                        "transfer_day": 238
                      },
                      "code": "code2",
                      "payment_mode": "payment_mode2"
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
                    "volume_percentage": 142,
                    "delay": 148,
                    "days": [
                      124,
                      125
                    ]
                  },
                  "transfer_settings": {
                    "transfer_enabled": false,
                    "transfer_interval": "transfer_interval0",
                    "transfer_day": 52
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
              },
              {
                "type": "type7",
                "amount": 253,
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
                        "volume_percentage": 71,
                        "delay": 219,
                        "days": [
                          195,
                          196,
                          197
                        ]
                      },
                      "transfer_settings": {
                        "transfer_enabled": true,
                        "transfer_interval": "transfer_interval9",
                        "transfer_day": 237
                      },
                      "code": "code3",
                      "payment_mode": "payment_mode1"
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
                    "volume_percentage": 141,
                    "delay": 149,
                    "days": [
                      125,
                      126,
                      127
                    ]
                  },
                  "transfer_settings": {
                    "transfer_enabled": true,
                    "transfer_interval": "transfer_interval9",
                    "transfer_day": 51
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
              }
            ]
          },
          "boleto": {
            "interest": {
              "days": 54,
              "type": "type8",
              "amount": 128
            },
            "fine": {
              "days": 236,
              "type": "type6",
              "amount": 202
            },
            "max_days_to_pay_past_due": 224
          },
          "manual_billing": false
        },
        "status": "status4",
        "duration": 166,
        "created_at": "created_at0",
        "updated_at": "updated_at8",
        "cycle": 106
      },
      "payment_method": "payment_method6",
      "currency": "currency4",
      "installments": 94,
      "status": "status4",
      "created_at": "2016-03-13T12:52:32.123Z",
      "updated_at": "2016-03-13T12:52:32.123Z",
      "customer": {},
      "card": {
        "id": "id2",
        "last_four_digits": "last_four_digits8",
        "brand": "brand6",
        "holder_name": "holder_name8",
        "exp_month": 72,
        "exp_year": 224,
        "status": "status6",
        "created_at": "2016-03-13T12:52:32.123Z",
        "updated_at": "2016-03-13T12:52:32.123Z",
        "billing_address": {
          "street": "street6",
          "number": "number6",
          "zip_code": "zip_code0",
          "neighborhood": "neighborhood2",
          "city": "city4",
          "state": "state8",
          "country": "country0",
          "complement": "complement8",
          "line_1": "line_10",
          "line_2": "line_24"
        },
        "customer": {},
        "metadata": {
          "key0": "metadata1",
          "key1": "metadata2",
          "key2": "metadata3"
        },
        "type": "type8",
        "holder_document": "holder_document4",
        "deleted_at": "2016-03-13T12:52:32.123Z",
        "first_six_digits": "first_six_digits2",
        "label": "label2"
      },
      "items": [
        {}
      ],
      "statement_descriptor": "statement_descriptor4",
      "metadata": {
        "key0": "metadata9"
      },
      "setup": {
        "id": "id8",
        "description": "description2",
        "amount": 118,
        "status": "status0"
      },
      "gateway_affiliation_id": "gateway_affiliation_id0",
      "next_billing_at": "2016-03-13T12:52:32.123Z",
      "billing_day": 190,
      "minimum_price": 76,
      "canceled_at": "2016-03-13T12:52:32.123Z",
      "discounts": [
        {},
        {}
      ],
      "increments": [
        {},
        {}
      ],
      "boleto_due_days": 38,
      "split": {
        "enabled": false,
        "rules": [
          {}
        ]
      },
      "boleto": {
        "interest": {
          "days": 52,
          "type": "type6",
          "amount": 126
        },
        "fine": {
          "days": 238,
          "type": "type4",
          "amount": 200
        },
        "max_days_to_pay_past_due": 226
      },
      "manual_billing": false
    },
    "status": "status2",
    "duration": 164,
    "created_at": "created_at8",
    "updated_at": "updated_at6",
    "cycle": 104
  },
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
  "due_at": "2016-03-13T12:52:32.123Z",
  "canceled_at": "2016-03-13T12:52:32.123Z",
  "billing_at": "2016-03-13T12:52:32.123Z",
  "seen_at": "2016-03-13T12:52:32.123Z",
  "total_discount": 62,
  "total_increment": 134,
  "subscription_id": "subscription_id0"
}
```

