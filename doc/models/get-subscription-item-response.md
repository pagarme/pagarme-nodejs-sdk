
# Get Subscription Item Response

## Structure

`GetSubscriptionItemResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | - |
| `description` | `string \| undefined` | Optional | - |
| `status` | `string \| undefined` | Optional | - |
| `createdAt` | `string \| undefined` | Optional | - |
| `updatedAt` | `string \| undefined` | Optional | - |
| `pricingScheme` | [`GetPricingSchemeResponse \| undefined`](../../doc/models/get-pricing-scheme-response.md) | Optional | - |
| `discounts` | [`GetDiscountResponse[] \| undefined`](../../doc/models/get-discount-response.md) | Optional | - |
| `increments` | [`GetIncrementResponse[] \| undefined`](../../doc/models/get-increment-response.md) | Optional | - |
| `subscription` | [`GetSubscriptionResponse \| undefined`](../../doc/models/get-subscription-response.md) | Optional | - |
| `name` | `string \| undefined` | Optional | Item name |
| `quantity` | `number \| undefined` | Optional | - |
| `cycles` | `number \| undefined` | Optional | - |
| `deletedAt` | `string \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "id": "id0",
  "description": "description0",
  "status": "status8",
  "created_at": "2016-03-13T12:52:32.123Z",
  "updated_at": "2016-03-13T12:52:32.123Z",
  "pricing_scheme": {
    "price": 166,
    "scheme_type": "scheme_type8",
    "price_brackets": [
      {
        "start_quantity": 119,
        "price": 57,
        "end_quantity": 127,
        "overage_price": 141
      },
      {
        "start_quantity": 120,
        "price": 58,
        "end_quantity": 128,
        "overage_price": 142
      },
      {
        "start_quantity": 121,
        "price": 59,
        "end_quantity": 129,
        "overage_price": 143
      }
    ],
    "minimum_price": 6,
    "percentage": 251.76
  },
  "discounts": [
    {
      "id": "id1",
      "value": 10.23,
      "discount_type": "discount_type9",
      "status": "status3",
      "created_at": "2016-03-13T12:52:32.123Z",
      "cycles": 233,
      "deleted_at": "2016-03-13T12:52:32.123Z",
      "description": "description1",
      "subscription": {
        "id": "id3",
        "code": "code1",
        "start_at": "2016-03-13T12:52:32.123Z",
        "interval": "interval9",
        "interval_count": 43,
        "billing_type": "billing_type3",
        "current_cycle": {
          "start_at": "2016-03-13T12:52:32.123Z",
          "end_at": "2016-03-13T12:52:32.123Z",
          "id": "id1",
          "billing_at": "2016-03-13T12:52:32.123Z",
          "subscription": {
            "id": "id3",
            "code": "code1",
            "start_at": "2016-03-13T12:52:32.123Z",
            "interval": "interval1",
            "interval_count": 63,
            "billing_type": "billing_type3",
            "current_cycle": {
              "start_at": "2016-03-13T12:52:32.123Z",
              "end_at": "2016-03-13T12:52:32.123Z",
              "id": "id1",
              "billing_at": "2016-03-13T12:52:32.123Z",
              "subscription": {},
              "status": "status3",
              "duration": 47,
              "created_at": "created_at9",
              "updated_at": "updated_at7",
              "cycle": 243
            },
            "payment_method": "payment_method7",
            "currency": "currency3",
            "installments": 231,
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
              "document": "document3",
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
                "customer": {
                  "id": "id9",
                  "name": "name9",
                  "email": "email7",
                  "delinquent": true,
                  "created_at": "2016-03-13T12:52:32.123Z",
                  "updated_at": "2016-03-13T12:52:32.123Z",
                  "document": "document3",
                  "type": "type9",
                  "fb_access_token": "fb_access_token3",
                  "address": {
                    "id": "id5",
                    "street": "street5",
                    "number": "number3",
                    "complement": "complement1",
                    "zip_code": "zip_code9",
                    "neighborhood": "neighborhood1",
                    "city": "city5",
                    "state": "state1",
                    "country": "country9",
                    "status": "status7",
                    "created_at": "2016-03-13T12:52:32.123Z",
                    "updated_at": "2016-03-13T12:52:32.123Z",
                    "customer": {},
                    "metadata": {
                      "key0": "metadata4",
                      "key1": "metadata3",
                      "key2": "metadata2"
                    },
                    "line_1": "line_19",
                    "line_2": "line_23",
                    "deleted_at": "2016-03-13T12:52:32.123Z"
                  },
                  "metadata": {
                    "key0": "metadata6",
                    "key1": "metadata5"
                  },
                  "phones": {
                    "home_phone": {
                      "country_code": "country_code1",
                      "number": "number9",
                      "area_code": "area_code1"
                    },
                    "mobile_phone": {
                      "country_code": "country_code1",
                      "number": "number1",
                      "area_code": "area_code1"
                    }
                  },
                  "fb_id": 17,
                  "code": "code7",
                  "document_type": "document_type7"
                },
                "metadata": {
                  "key0": "metadata6",
                  "key1": "metadata5",
                  "key2": "metadata4"
                },
                "line_1": "line_13",
                "line_2": "line_27",
                "deleted_at": "2016-03-13T12:52:32.123Z"
              },
              "metadata": {
                "key0": "metadata0",
                "key1": "metadata1",
                "key2": "metadata2"
              },
              "phones": {
                "home_phone": {},
                "mobile_phone": {}
              },
              "fb_id": 223,
              "code": "code1",
              "document_type": "document_type1"
            },
            "card": {
              "id": "id7",
              "last_four_digits": "last_four_digits3",
              "brand": "brand1",
              "holder_name": "holder_name3",
              "exp_month": 131,
              "exp_year": 165,
              "status": "status1",
              "created_at": "2016-03-13T12:52:32.123Z",
              "updated_at": "2016-03-13T12:52:32.123Z",
              "billing_address": {
                "street": "street1",
                "number": "number1",
                "zip_code": "zip_code5",
                "neighborhood": "neighborhood7",
                "city": "city9",
                "state": "state3",
                "country": "country5",
                "complement": "complement3",
                "line_1": "line_15",
                "line_2": "line_29"
              },
              "customer": {},
              "metadata": {
                "key0": "metadata6",
                "key1": "metadata7",
                "key2": "metadata8"
              },
              "type": "type3",
              "holder_document": "holder_document9",
              "deleted_at": "2016-03-13T12:52:32.123Z",
              "first_six_digits": "first_six_digits7",
              "label": "label7"
            },
            "items": [
              {
                "id": "id0",
                "description": "description0",
                "status": "status2",
                "created_at": "2016-03-13T12:52:32.123Z",
                "updated_at": "2016-03-13T12:52:32.123Z",
                "pricing_scheme": {
                  "price": 158,
                  "scheme_type": "scheme_type2",
                  "price_brackets": [
                    {
                      "start_quantity": 51,
                      "price": 11,
                      "end_quantity": 59,
                      "overage_price": 73
                    },
                    {
                      "start_quantity": 52,
                      "price": 10,
                      "end_quantity": 60,
                      "overage_price": 74
                    }
                  ],
                  "minimum_price": 62,
                  "percentage": 64.2
                },
                "discounts": [
                  {
                    "id": "id1",
                    "value": 61.83,
                    "discount_type": "discount_type9",
                    "status": "status3",
                    "created_at": "2016-03-13T12:52:32.123Z",
                    "cycles": 63,
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
                        "price": 21,
                        "scheme_type": "scheme_type9",
                        "price_brackets": [
                          {}
                        ],
                        "minimum_price": 117,
                        "percentage": 99.27
                      },
                      "discounts": [
                        {}
                      ],
                      "increments": [
                        {
                          "id": "id6",
                          "value": 208.18,
                          "increment_type": "increment_type8",
                          "status": "status8",
                          "created_at": "2016-03-13T12:52:32.123Z",
                          "cycles": 106,
                          "deleted_at": "2016-03-13T12:52:32.123Z",
                          "description": "description6",
                          "subscription": {},
                          "subscription_item": {}
                        },
                        {
                          "id": "id7",
                          "value": 208.19,
                          "increment_type": "increment_type9",
                          "status": "status9",
                          "created_at": "2016-03-13T12:52:32.123Z",
                          "cycles": 107,
                          "deleted_at": "2016-03-13T12:52:32.123Z",
                          "description": "description7",
                          "subscription": {},
                          "subscription_item": {}
                        }
                      ],
                      "subscription": {},
                      "name": "name7",
                      "quantity": 31,
                      "cycles": 51,
                      "deleted_at": "2016-03-13T12:52:32.123Z"
                    }
                  },
                  {
                    "id": "id2",
                    "value": 61.84,
                    "discount_type": "discount_type0",
                    "status": "status4",
                    "created_at": "2016-03-13T12:52:32.123Z",
                    "cycles": 64,
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
                        "price": 22,
                        "scheme_type": "scheme_type0",
                        "price_brackets": [
                          {},
                          {}
                        ],
                        "minimum_price": 118,
                        "percentage": 99.28
                      },
                      "discounts": [
                        {},
                        {}
                      ],
                      "increments": [
                        {
                          "id": "id7",
                          "value": 208.19,
                          "increment_type": "increment_type9",
                          "status": "status9",
                          "created_at": "2016-03-13T12:52:32.123Z",
                          "cycles": 107,
                          "deleted_at": "2016-03-13T12:52:32.123Z",
                          "description": "description7",
                          "subscription": {},
                          "subscription_item": {}
                        },
                        {
                          "id": "id8",
                          "value": 208.2,
                          "increment_type": "increment_type0",
                          "status": "status0",
                          "created_at": "2016-03-13T12:52:32.123Z",
                          "cycles": 108,
                          "deleted_at": "2016-03-13T12:52:32.123Z",
                          "description": "description8",
                          "subscription": {},
                          "subscription_item": {}
                        },
                        {
                          "id": "id9",
                          "value": 208.21,
                          "increment_type": "increment_type1",
                          "status": "status1",
                          "created_at": "2016-03-13T12:52:32.123Z",
                          "cycles": 109,
                          "deleted_at": "2016-03-13T12:52:32.123Z",
                          "description": "description9",
                          "subscription": {},
                          "subscription_item": {}
                        }
                      ],
                      "subscription": {},
                      "name": "name8",
                      "quantity": 32,
                      "cycles": 52,
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
                "quantity": 108,
                "cycles": 128,
                "deleted_at": "2016-03-13T12:52:32.123Z"
              }
            ],
            "statement_descriptor": "statement_descriptor3",
            "metadata": {
              "key0": "metadata0"
            },
            "setup": {
              "id": "id7",
              "description": "description7",
              "amount": 255,
              "status": "status9"
            },
            "gateway_affiliation_id": "gateway_affiliation_id9",
            "next_billing_at": "2016-03-13T12:52:32.123Z",
            "billing_day": 203,
            "minimum_price": 195,
            "canceled_at": "2016-03-13T12:52:32.123Z",
            "discounts": [
              {},
              {}
            ],
            "increments": [
              {},
              {},
              {}
            ],
            "boleto_due_days": 175,
            "split": {
              "enabled": true,
              "rules": [
                {
                  "type": "type7",
                  "amount": 135,
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
                            "key0": "metadata6",
                            "key1": "metadata5"
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
                          }
                        ],
                        "metadata": {
                          "key0": "metadata2",
                          "key1": "metadata1",
                          "key2": "metadata0"
                        },
                        "automatic_anticipation_settings": {
                          "enabled": true,
                          "type": "type1",
                          "volume_percentage": 189,
                          "delay": 101,
                          "days": [
                            77
                          ]
                        },
                        "transfer_settings": {
                          "transfer_enabled": true,
                          "transfer_interval": "transfer_interval9",
                          "transfer_day": 99
                        },
                        "code": "code3",
                        "payment_mode": "payment_mode9"
                      },
                      "metadata": {
                        "key0": "metadata0",
                        "key1": "metadata9",
                        "key2": "metadata8"
                      },
                      "pix_key": "pix_key3"
                    },
                    "gateway_recipients": [
                      {},
                      {}
                    ],
                    "metadata": {
                      "key0": "metadata8",
                      "key1": "metadata9",
                      "key2": "metadata0"
                    },
                    "automatic_anticipation_settings": {
                      "enabled": true,
                      "type": "type1",
                      "volume_percentage": 3,
                      "delay": 31,
                      "days": [
                        7
                      ]
                    },
                    "transfer_settings": {
                      "transfer_enabled": true,
                      "transfer_interval": "transfer_interval9",
                      "transfer_day": 169
                    },
                    "code": "code3",
                    "payment_mode": "payment_mode1"
                  },
                  "gateway_id": "gateway_id7",
                  "options": {
                    "liable": true,
                    "charge_processing_fee": true,
                    "charge_remainder_fee": "charge_remainder_fee9"
                  },
                  "id": "id3"
                }
              ]
            },
            "boleto": {
              "interest": {
                "days": 171,
                "type": "type3",
                "amount": 245
              },
              "fine": {
                "days": 119,
                "type": "type5",
                "amount": 193
              },
              "max_days_to_pay_past_due": 107
            },
            "manual_billing": true
          },
          "status": "status7",
          "duration": 27,
          "created_at": "created_at9",
          "updated_at": "updated_at7",
          "cycle": 223
        },
        "payment_method": "payment_method7",
        "currency": "currency7",
        "installments": 211,
        "status": "status5",
        "created_at": "2016-03-13T12:52:32.123Z",
        "updated_at": "2016-03-13T12:52:32.123Z",
        "customer": {},
        "card": {
          "id": "id3",
          "last_four_digits": "last_four_digits9",
          "brand": "brand7",
          "holder_name": "holder_name9",
          "exp_month": 189,
          "exp_year": 107,
          "status": "status5",
          "created_at": "2016-03-13T12:52:32.123Z",
          "updated_at": "2016-03-13T12:52:32.123Z",
          "billing_address": {
            "street": "street5",
            "number": "number7",
            "zip_code": "zip_code9",
            "neighborhood": "neighborhood1",
            "city": "city5",
            "state": "state9",
            "country": "country9",
            "complement": "complement9",
            "line_1": "line_11",
            "line_2": "line_23"
          },
          "customer": {},
          "metadata": {
            "key0": "metadata0"
          },
          "type": "type7",
          "holder_document": "holder_document3",
          "deleted_at": "2016-03-13T12:52:32.123Z",
          "first_six_digits": "first_six_digits3",
          "label": "label3"
        },
        "items": [
          {},
          {}
        ],
        "statement_descriptor": "statement_descriptor3",
        "metadata": {
          "key0": "metadata0",
          "key1": "metadata1",
          "key2": "metadata2"
        },
        "setup": {
          "id": "id7",
          "description": "description3",
          "amount": 21,
          "status": "status1"
        },
        "gateway_affiliation_id": "gateway_affiliation_id9",
        "next_billing_at": "2016-03-13T12:52:32.123Z",
        "billing_day": 73,
        "minimum_price": 215,
        "canceled_at": "2016-03-13T12:52:32.123Z",
        "discounts": [
          {},
          {},
          {}
        ],
        "increments": [
          {}
        ],
        "boleto_due_days": 155,
        "split": {
          "enabled": true,
          "rules": [
            {},
            {}
          ]
        },
        "boleto": {
          "interest": {
            "days": 121,
            "type": "type3",
            "amount": 195
          },
          "fine": {
            "days": 103,
            "type": "type9",
            "amount": 79
          },
          "max_days_to_pay_past_due": 157
        },
        "manual_billing": true
      },
      "subscription_item": {}
    },
    {
      "id": "id2",
      "value": 10.24,
      "discount_type": "discount_type0",
      "status": "status4",
      "created_at": "2016-03-13T12:52:32.123Z",
      "cycles": 232,
      "deleted_at": "2016-03-13T12:52:32.123Z",
      "description": "description2",
      "subscription": {
        "id": "id2",
        "code": "code0",
        "start_at": "2016-03-13T12:52:32.123Z",
        "interval": "interval0",
        "interval_count": 42,
        "billing_type": "billing_type4",
        "current_cycle": {
          "start_at": "2016-03-13T12:52:32.123Z",
          "end_at": "2016-03-13T12:52:32.123Z",
          "id": "id0",
          "billing_at": "2016-03-13T12:52:32.123Z",
          "subscription": {
            "id": "id4",
            "code": "code2",
            "start_at": "2016-03-13T12:52:32.123Z",
            "interval": "interval2",
            "interval_count": 64,
            "billing_type": "billing_type2",
            "current_cycle": {
              "start_at": "2016-03-13T12:52:32.123Z",
              "end_at": "2016-03-13T12:52:32.123Z",
              "id": "id2",
              "billing_at": "2016-03-13T12:52:32.123Z",
              "subscription": {},
              "status": "status4",
              "duration": 48,
              "created_at": "created_at0",
              "updated_at": "updated_at8",
              "cycle": 244
            },
            "payment_method": "payment_method6",
            "currency": "currency4",
            "installments": 232,
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
              "document": "document2",
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
                    "customer": {},
                    "metadata": {
                      "key0": "metadata3"
                    },
                    "line_1": "line_10",
                    "line_2": "line_24",
                    "deleted_at": "2016-03-13T12:52:32.123Z"
                  },
                  "metadata": {
                    "key0": "metadata7"
                  },
                  "phones": {
                    "home_phone": {
                      "country_code": "country_code2",
                      "number": "number0",
                      "area_code": "area_code2"
                    },
                    "mobile_phone": {
                      "country_code": "country_code2",
                      "number": "number0",
                      "area_code": "area_code2"
                    }
                  },
                  "fb_id": 18,
                  "code": "code8",
                  "document_type": "document_type8"
                },
                "metadata": {
                  "key0": "metadata7",
                  "key1": "metadata6"
                },
                "line_1": "line_14",
                "line_2": "line_28",
                "deleted_at": "2016-03-13T12:52:32.123Z"
              },
              "metadata": {
                "key0": "metadata9",
                "key1": "metadata0"
              },
              "phones": {
                "home_phone": {},
                "mobile_phone": {}
              },
              "fb_id": 224,
              "code": "code2",
              "document_type": "document_type2"
            },
            "card": {
              "id": "id8",
              "last_four_digits": "last_four_digits4",
              "brand": "brand2",
              "holder_name": "holder_name4",
              "exp_month": 130,
              "exp_year": 166,
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
                "id": "id1",
                "description": "description1",
                "status": "status3",
                "created_at": "2016-03-13T12:52:32.123Z",
                "updated_at": "2016-03-13T12:52:32.123Z",
                "pricing_scheme": {
                  "price": 157,
                  "scheme_type": "scheme_type3",
                  "price_brackets": [
                    {
                      "start_quantity": 52,
                      "price": 10,
                      "end_quantity": 60,
                      "overage_price": 74
                    },
                    {
                      "start_quantity": 53,
                      "price": 9,
                      "end_quantity": 61,
                      "overage_price": 75
                    },
                    {
                      "start_quantity": 54,
                      "price": 8,
                      "end_quantity": 62,
                      "overage_price": 76
                    }
                  ],
                  "minimum_price": 61,
                  "percentage": 64.21
                },
                "discounts": [
                  {
                    "id": "id2",
                    "value": 61.84,
                    "discount_type": "discount_type0",
                    "status": "status4",
                    "created_at": "2016-03-13T12:52:32.123Z",
                    "cycles": 64,
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
                        "price": 22,
                        "scheme_type": "scheme_type0",
                        "price_brackets": [
                          {},
                          {}
                        ],
                        "minimum_price": 118,
                        "percentage": 99.28
                      },
                      "discounts": [
                        {},
                        {}
                      ],
                      "increments": [
                        {
                          "id": "id7",
                          "value": 208.19,
                          "increment_type": "increment_type9",
                          "status": "status9",
                          "created_at": "2016-03-13T12:52:32.123Z",
                          "cycles": 107,
                          "deleted_at": "2016-03-13T12:52:32.123Z",
                          "description": "description7",
                          "subscription": {},
                          "subscription_item": {}
                        },
                        {
                          "id": "id8",
                          "value": 208.2,
                          "increment_type": "increment_type0",
                          "status": "status0",
                          "created_at": "2016-03-13T12:52:32.123Z",
                          "cycles": 108,
                          "deleted_at": "2016-03-13T12:52:32.123Z",
                          "description": "description8",
                          "subscription": {},
                          "subscription_item": {}
                        },
                        {
                          "id": "id9",
                          "value": 208.21,
                          "increment_type": "increment_type1",
                          "status": "status1",
                          "created_at": "2016-03-13T12:52:32.123Z",
                          "cycles": 109,
                          "deleted_at": "2016-03-13T12:52:32.123Z",
                          "description": "description9",
                          "subscription": {},
                          "subscription_item": {}
                        }
                      ],
                      "subscription": {},
                      "name": "name8",
                      "quantity": 32,
                      "cycles": 52,
                      "deleted_at": "2016-03-13T12:52:32.123Z"
                    }
                  },
                  {
                    "id": "id3",
                    "value": 61.85,
                    "discount_type": "discount_type1",
                    "status": "status5",
                    "created_at": "2016-03-13T12:52:32.123Z",
                    "cycles": 65,
                    "deleted_at": "2016-03-13T12:52:32.123Z",
                    "description": "description3",
                    "subscription": {},
                    "subscription_item": {
                      "id": "id9",
                      "description": "description9",
                      "status": "status1",
                      "created_at": "2016-03-13T12:52:32.123Z",
                      "updated_at": "2016-03-13T12:52:32.123Z",
                      "pricing_scheme": {
                        "price": 23,
                        "scheme_type": "scheme_type1",
                        "price_brackets": [
                          {},
                          {},
                          {}
                        ],
                        "minimum_price": 119,
                        "percentage": 99.29
                      },
                      "discounts": [
                        {},
                        {},
                        {}
                      ],
                      "increments": [
                        {
                          "id": "id8",
                          "value": 208.2,
                          "increment_type": "increment_type0",
                          "status": "status0",
                          "created_at": "2016-03-13T12:52:32.123Z",
                          "cycles": 108,
                          "deleted_at": "2016-03-13T12:52:32.123Z",
                          "description": "description8",
                          "subscription": {},
                          "subscription_item": {}
                        }
                      ],
                      "subscription": {},
                      "name": "name9",
                      "quantity": 33,
                      "cycles": 53,
                      "deleted_at": "2016-03-13T12:52:32.123Z"
                    }
                  },
                  {
                    "id": "id4",
                    "value": 61.86,
                    "discount_type": "discount_type2",
                    "status": "status6",
                    "created_at": "2016-03-13T12:52:32.123Z",
                    "cycles": 66,
                    "deleted_at": "2016-03-13T12:52:32.123Z",
                    "description": "description4",
                    "subscription": {},
                    "subscription_item": {
                      "id": "id0",
                      "description": "description0",
                      "status": "status2",
                      "created_at": "2016-03-13T12:52:32.123Z",
                      "updated_at": "2016-03-13T12:52:32.123Z",
                      "pricing_scheme": {
                        "price": 24,
                        "scheme_type": "scheme_type2",
                        "price_brackets": [
                          {}
                        ],
                        "minimum_price": 120,
                        "percentage": 99.3
                      },
                      "discounts": [
                        {}
                      ],
                      "increments": [
                        {
                          "id": "id9",
                          "value": 208.21,
                          "increment_type": "increment_type1",
                          "status": "status1",
                          "created_at": "2016-03-13T12:52:32.123Z",
                          "cycles": 109,
                          "deleted_at": "2016-03-13T12:52:32.123Z",
                          "description": "description9",
                          "subscription": {},
                          "subscription_item": {}
                        },
                        {
                          "id": "id0",
                          "value": 208.22,
                          "increment_type": "increment_type2",
                          "status": "status2",
                          "created_at": "2016-03-13T12:52:32.123Z",
                          "cycles": 110,
                          "deleted_at": "2016-03-13T12:52:32.123Z",
                          "description": "description0",
                          "subscription": {},
                          "subscription_item": {}
                        }
                      ],
                      "subscription": {},
                      "name": "name0",
                      "quantity": 34,
                      "cycles": 54,
                      "deleted_at": "2016-03-13T12:52:32.123Z"
                    }
                  }
                ],
                "increments": [
                  {}
                ],
                "subscription": {},
                "name": "name1",
                "quantity": 109,
                "cycles": 129,
                "deleted_at": "2016-03-13T12:52:32.123Z"
              },
              {
                "id": "id2",
                "description": "description2",
                "status": "status4",
                "created_at": "2016-03-13T12:52:32.123Z",
                "updated_at": "2016-03-13T12:52:32.123Z",
                "pricing_scheme": {
                  "price": 156,
                  "scheme_type": "scheme_type4",
                  "price_brackets": [
                    {
                      "start_quantity": 53,
                      "price": 9,
                      "end_quantity": 61,
                      "overage_price": 75
                    }
                  ],
                  "minimum_price": 60,
                  "percentage": 64.22
                },
                "discounts": [
                  {
                    "id": "id3",
                    "value": 61.85,
                    "discount_type": "discount_type1",
                    "status": "status5",
                    "created_at": "2016-03-13T12:52:32.123Z",
                    "cycles": 65,
                    "deleted_at": "2016-03-13T12:52:32.123Z",
                    "description": "description3",
                    "subscription": {},
                    "subscription_item": {
                      "id": "id9",
                      "description": "description9",
                      "status": "status1",
                      "created_at": "2016-03-13T12:52:32.123Z",
                      "updated_at": "2016-03-13T12:52:32.123Z",
                      "pricing_scheme": {
                        "price": 23,
                        "scheme_type": "scheme_type1",
                        "price_brackets": [
                          {},
                          {},
                          {}
                        ],
                        "minimum_price": 119,
                        "percentage": 99.29
                      },
                      "discounts": [
                        {},
                        {},
                        {}
                      ],
                      "increments": [
                        {
                          "id": "id8",
                          "value": 208.2,
                          "increment_type": "increment_type0",
                          "status": "status0",
                          "created_at": "2016-03-13T12:52:32.123Z",
                          "cycles": 108,
                          "deleted_at": "2016-03-13T12:52:32.123Z",
                          "description": "description8",
                          "subscription": {},
                          "subscription_item": {}
                        }
                      ],
                      "subscription": {},
                      "name": "name9",
                      "quantity": 33,
                      "cycles": 53,
                      "deleted_at": "2016-03-13T12:52:32.123Z"
                    }
                  }
                ],
                "increments": [
                  {},
                  {}
                ],
                "subscription": {},
                "name": "name2",
                "quantity": 110,
                "cycles": 130,
                "deleted_at": "2016-03-13T12:52:32.123Z"
              }
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
              "amount": 0,
              "status": "status0"
            },
            "gateway_affiliation_id": "gateway_affiliation_id0",
            "next_billing_at": "2016-03-13T12:52:32.123Z",
            "billing_day": 204,
            "minimum_price": 194,
            "canceled_at": "2016-03-13T12:52:32.123Z",
            "discounts": [
              {},
              {},
              {}
            ],
            "increments": [
              {}
            ],
            "boleto_due_days": 176,
            "split": {
              "enabled": false,
              "rules": [
                {
                  "type": "type6",
                  "amount": 136,
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
                            "key0": "metadata5",
                            "key1": "metadata4",
                            "key2": "metadata3"
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
                          },
                          {
                            "gateway": "gateway1",
                            "status": "status3",
                            "pgid": "pgid7",
                            "created_at": "created_at9",
                            "updated_at": "updated_at7"
                          },
                          {
                            "gateway": "gateway2",
                            "status": "status4",
                            "pgid": "pgid8",
                            "created_at": "created_at0",
                            "updated_at": "updated_at8"
                          }
                        ],
                        "metadata": {
                          "key0": "metadata3",
                          "key1": "metadata2"
                        },
                        "automatic_anticipation_settings": {
                          "enabled": false,
                          "type": "type0",
                          "volume_percentage": 188,
                          "delay": 102,
                          "days": [
                            78,
                            79
                          ]
                        },
                        "transfer_settings": {
                          "transfer_enabled": false,
                          "transfer_interval": "transfer_interval8",
                          "transfer_day": 98
                        },
                        "code": "code4",
                        "payment_mode": "payment_mode0"
                      },
                      "metadata": {
                        "key0": "metadata1",
                        "key1": "metadata0"
                      },
                      "pix_key": "pix_key2"
                    },
                    "gateway_recipients": [
                      {},
                      {},
                      {}
                    ],
                    "metadata": {
                      "key0": "metadata7",
                      "key1": "metadata8"
                    },
                    "automatic_anticipation_settings": {
                      "enabled": false,
                      "type": "type0",
                      "volume_percentage": 2,
                      "delay": 32,
                      "days": [
                        8,
                        9
                      ]
                    },
                    "transfer_settings": {
                      "transfer_enabled": false,
                      "transfer_interval": "transfer_interval8",
                      "transfer_day": 168
                    },
                    "code": "code4",
                    "payment_mode": "payment_mode0"
                  },
                  "gateway_id": "gateway_id6",
                  "options": {
                    "liable": false,
                    "charge_processing_fee": false,
                    "charge_remainder_fee": "charge_remainder_fee0"
                  },
                  "id": "id4"
                },
                {
                  "type": "type5",
                  "amount": 137,
                  "recipient": {
                    "id": "id7",
                    "name": "name7",
                    "email": "email9",
                    "document": "document9",
                    "description": "description3",
                    "type": "type3",
                    "status": "status1",
                    "created_at": "2016-03-13T12:52:32.123Z",
                    "updated_at": "2016-03-13T12:52:32.123Z",
                    "deleted_at": "2016-03-13T12:52:32.123Z",
                    "default_bank_account": {
                      "id": "id5",
                      "holder_name": "holder_name1",
                      "holder_type": "holder_type7",
                      "bank": "bank3",
                      "branch_number": "branch_number1",
                      "branch_check_digit": "branch_check_digit1",
                      "account_number": "account_number5",
                      "account_check_digit": "account_check_digit1",
                      "type": "type5",
                      "status": "status7",
                      "created_at": "2016-03-13T12:52:32.123Z",
                      "updated_at": "2016-03-13T12:52:32.123Z",
                      "deleted_at": "2016-03-13T12:52:32.123Z",
                      "recipient": {
                        "id": "id7",
                        "name": "name7",
                        "email": "email9",
                        "document": "document1",
                        "description": "description7",
                        "type": "type3",
                        "status": "status9",
                        "created_at": "2016-03-13T12:52:32.123Z",
                        "updated_at": "2016-03-13T12:52:32.123Z",
                        "deleted_at": "2016-03-13T12:52:32.123Z",
                        "default_bank_account": {
                          "id": "id5",
                          "holder_name": "holder_name1",
                          "holder_type": "holder_type7",
                          "bank": "bank3",
                          "branch_number": "branch_number1",
                          "branch_check_digit": "branch_check_digit1",
                          "account_number": "account_number5",
                          "account_check_digit": "account_check_digit1",
                          "type": "type5",
                          "status": "status7",
                          "created_at": "2016-03-13T12:52:32.123Z",
                          "updated_at": "2016-03-13T12:52:32.123Z",
                          "deleted_at": "2016-03-13T12:52:32.123Z",
                          "recipient": {},
                          "metadata": {
                            "key0": "metadata4"
                          },
                          "pix_key": "pix_key9"
                        },
                        "gateway_recipients": [
                          {
                            "gateway": "gateway1",
                            "status": "status3",
                            "pgid": "pgid7",
                            "created_at": "created_at9",
                            "updated_at": "updated_at7"
                          }
                        ],
                        "metadata": {
                          "key0": "metadata4"
                        },
                        "automatic_anticipation_settings": {
                          "enabled": true,
                          "type": "type9",
                          "volume_percentage": 187,
                          "delay": 103,
                          "days": [
                            79,
                            80,
                            81
                          ]
                        },
                        "transfer_settings": {
                          "transfer_enabled": true,
                          "transfer_interval": "transfer_interval7",
                          "transfer_day": 97
                        },
                        "code": "code5",
                        "payment_mode": "payment_mode1"
                      },
                      "metadata": {
                        "key0": "metadata2"
                      },
                      "pix_key": "pix_key1"
                    },
                    "gateway_recipients": [
                      {}
                    ],
                    "metadata": {
                      "key0": "metadata6"
                    },
                    "automatic_anticipation_settings": {
                      "enabled": true,
                      "type": "type9",
                      "volume_percentage": 1,
                      "delay": 33,
                      "days": [
                        9,
                        10,
                        11
                      ]
                    },
                    "transfer_settings": {
                      "transfer_enabled": true,
                      "transfer_interval": "transfer_interval7",
                      "transfer_day": 167
                    },
                    "code": "code5",
                    "payment_mode": "payment_mode9"
                  },
                  "gateway_id": "gateway_id5",
                  "options": {
                    "liable": true,
                    "charge_processing_fee": true,
                    "charge_remainder_fee": "charge_remainder_fee1"
                  },
                  "id": "id5"
                }
              ]
            },
            "boleto": {
              "interest": {
                "days": 170,
                "type": "type4",
                "amount": 244
              },
              "fine": {
                "days": 120,
                "type": "type4",
                "amount": 194
              },
              "max_days_to_pay_past_due": 108
            },
            "manual_billing": false
          },
          "status": "status8",
          "duration": 26,
          "created_at": "created_at8",
          "updated_at": "updated_at6",
          "cycle": 222
        },
        "payment_method": "payment_method8",
        "currency": "currency8",
        "installments": 210,
        "status": "status6",
        "created_at": "2016-03-13T12:52:32.123Z",
        "updated_at": "2016-03-13T12:52:32.123Z",
        "customer": {},
        "card": {
          "id": "id4",
          "last_four_digits": "last_four_digits0",
          "brand": "brand8",
          "holder_name": "holder_name0",
          "exp_month": 188,
          "exp_year": 108,
          "status": "status4",
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
            "key0": "metadata9",
            "key1": "metadata0",
            "key2": "metadata1"
          },
          "type": "type6",
          "holder_document": "holder_document2",
          "deleted_at": "2016-03-13T12:52:32.123Z",
          "first_six_digits": "first_six_digits4",
          "label": "label4"
        },
        "items": [
          {}
        ],
        "statement_descriptor": "statement_descriptor2",
        "metadata": {
          "key0": "metadata1"
        },
        "setup": {
          "id": "id6",
          "description": "description4",
          "amount": 22,
          "status": "status2"
        },
        "gateway_affiliation_id": "gateway_affiliation_id8",
        "next_billing_at": "2016-03-13T12:52:32.123Z",
        "billing_day": 74,
        "minimum_price": 216,
        "canceled_at": "2016-03-13T12:52:32.123Z",
        "discounts": [
          {},
          {}
        ],
        "increments": [
          {},
          {}
        ],
        "boleto_due_days": 154,
        "split": {
          "enabled": false,
          "rules": [
            {}
          ]
        },
        "boleto": {
          "interest": {
            "days": 120,
            "type": "type2",
            "amount": 194
          },
          "fine": {
            "days": 102,
            "type": "type0",
            "amount": 80
          },
          "max_days_to_pay_past_due": 158
        },
        "manual_billing": false
      },
      "subscription_item": {}
    },
    {
      "id": "id3",
      "value": 10.25,
      "discount_type": "discount_type1",
      "status": "status5",
      "created_at": "2016-03-13T12:52:32.123Z",
      "cycles": 231,
      "deleted_at": "2016-03-13T12:52:32.123Z",
      "description": "description3",
      "subscription": {
        "id": "id1",
        "code": "code9",
        "start_at": "2016-03-13T12:52:32.123Z",
        "interval": "interval1",
        "interval_count": 41,
        "billing_type": "billing_type5",
        "current_cycle": {
          "start_at": "2016-03-13T12:52:32.123Z",
          "end_at": "2016-03-13T12:52:32.123Z",
          "id": "id9",
          "billing_at": "2016-03-13T12:52:32.123Z",
          "subscription": {
            "id": "id5",
            "code": "code3",
            "start_at": "2016-03-13T12:52:32.123Z",
            "interval": "interval3",
            "interval_count": 65,
            "billing_type": "billing_type1",
            "current_cycle": {
              "start_at": "2016-03-13T12:52:32.123Z",
              "end_at": "2016-03-13T12:52:32.123Z",
              "id": "id3",
              "billing_at": "2016-03-13T12:52:32.123Z",
              "subscription": {},
              "status": "status5",
              "duration": 49,
              "created_at": "created_at1",
              "updated_at": "updated_at9",
              "cycle": 245
            },
            "payment_method": "payment_method5",
            "currency": "currency5",
            "installments": 233,
            "status": "status7",
            "created_at": "2016-03-13T12:52:32.123Z",
            "updated_at": "2016-03-13T12:52:32.123Z",
            "customer": {
              "id": "id5",
              "name": "name5",
              "email": "email1",
              "delinquent": true,
              "created_at": "2016-03-13T12:52:32.123Z",
              "updated_at": "2016-03-13T12:52:32.123Z",
              "document": "document1",
              "type": "type5",
              "fb_access_token": "fb_access_token9",
              "address": {
                "id": "id1",
                "street": "street1",
                "number": "number9",
                "complement": "complement7",
                "zip_code": "zip_code5",
                "neighborhood": "neighborhood7",
                "city": "city1",
                "state": "state7",
                "country": "country5",
                "status": "status3",
                "created_at": "2016-03-13T12:52:32.123Z",
                "updated_at": "2016-03-13T12:52:32.123Z",
                "customer": {
                  "id": "id1",
                  "name": "name1",
                  "email": "email5",
                  "delinquent": true,
                  "created_at": "2016-03-13T12:52:32.123Z",
                  "updated_at": "2016-03-13T12:52:32.123Z",
                  "document": "document5",
                  "type": "type1",
                  "fb_access_token": "fb_access_token5",
                  "address": {
                    "id": "id7",
                    "street": "street7",
                    "number": "number5",
                    "complement": "complement3",
                    "zip_code": "zip_code1",
                    "neighborhood": "neighborhood3",
                    "city": "city7",
                    "state": "state3",
                    "country": "country1",
                    "status": "status9",
                    "created_at": "2016-03-13T12:52:32.123Z",
                    "updated_at": "2016-03-13T12:52:32.123Z",
                    "customer": {},
                    "metadata": {
                      "key0": "metadata2",
                      "key1": "metadata1"
                    },
                    "line_1": "line_11",
                    "line_2": "line_25",
                    "deleted_at": "2016-03-13T12:52:32.123Z"
                  },
                  "metadata": {
                    "key0": "metadata8",
                    "key1": "metadata7",
                    "key2": "metadata6"
                  },
                  "phones": {
                    "home_phone": {
                      "country_code": "country_code3",
                      "number": "number1",
                      "area_code": "area_code3"
                    },
                    "mobile_phone": {
                      "country_code": "country_code3",
                      "number": "number9",
                      "area_code": "area_code3"
                    }
                  },
                  "fb_id": 19,
                  "code": "code9",
                  "document_type": "document_type9"
                },
                "metadata": {
                  "key0": "metadata8"
                },
                "line_1": "line_15",
                "line_2": "line_29",
                "deleted_at": "2016-03-13T12:52:32.123Z"
              },
              "metadata": {
                "key0": "metadata8"
              },
              "phones": {
                "home_phone": {},
                "mobile_phone": {}
              },
              "fb_id": 225,
              "code": "code3",
              "document_type": "document_type3"
            },
            "card": {
              "id": "id9",
              "last_four_digits": "last_four_digits5",
              "brand": "brand3",
              "holder_name": "holder_name5",
              "exp_month": 129,
              "exp_year": 167,
              "status": "status9",
              "created_at": "2016-03-13T12:52:32.123Z",
              "updated_at": "2016-03-13T12:52:32.123Z",
              "billing_address": {
                "street": "street9",
                "number": "number3",
                "zip_code": "zip_code3",
                "neighborhood": "neighborhood5",
                "city": "city1",
                "state": "state5",
                "country": "country3",
                "complement": "complement5",
                "line_1": "line_17",
                "line_2": "line_27"
              },
              "customer": {},
              "metadata": {
                "key0": "metadata4"
              },
              "type": "type1",
              "holder_document": "holder_document7",
              "deleted_at": "2016-03-13T12:52:32.123Z",
              "first_six_digits": "first_six_digits9",
              "label": "label9"
            },
            "items": [
              {
                "id": "id2",
                "description": "description2",
                "status": "status4",
                "created_at": "2016-03-13T12:52:32.123Z",
                "updated_at": "2016-03-13T12:52:32.123Z",
                "pricing_scheme": {
                  "price": 156,
                  "scheme_type": "scheme_type4",
                  "price_brackets": [
                    {
                      "start_quantity": 53,
                      "price": 9,
                      "end_quantity": 61,
                      "overage_price": 75
                    }
                  ],
                  "minimum_price": 60,
                  "percentage": 64.22
                },
                "discounts": [
                  {
                    "id": "id3",
                    "value": 61.85,
                    "discount_type": "discount_type1",
                    "status": "status5",
                    "created_at": "2016-03-13T12:52:32.123Z",
                    "cycles": 65,
                    "deleted_at": "2016-03-13T12:52:32.123Z",
                    "description": "description3",
                    "subscription": {},
                    "subscription_item": {
                      "id": "id9",
                      "description": "description9",
                      "status": "status1",
                      "created_at": "2016-03-13T12:52:32.123Z",
                      "updated_at": "2016-03-13T12:52:32.123Z",
                      "pricing_scheme": {
                        "price": 23,
                        "scheme_type": "scheme_type1",
                        "price_brackets": [
                          {},
                          {},
                          {}
                        ],
                        "minimum_price": 119,
                        "percentage": 99.29
                      },
                      "discounts": [
                        {},
                        {},
                        {}
                      ],
                      "increments": [
                        {
                          "id": "id8",
                          "value": 208.2,
                          "increment_type": "increment_type0",
                          "status": "status0",
                          "created_at": "2016-03-13T12:52:32.123Z",
                          "cycles": 108,
                          "deleted_at": "2016-03-13T12:52:32.123Z",
                          "description": "description8",
                          "subscription": {},
                          "subscription_item": {}
                        }
                      ],
                      "subscription": {},
                      "name": "name9",
                      "quantity": 33,
                      "cycles": 53,
                      "deleted_at": "2016-03-13T12:52:32.123Z"
                    }
                  }
                ],
                "increments": [
                  {},
                  {}
                ],
                "subscription": {},
                "name": "name2",
                "quantity": 110,
                "cycles": 130,
                "deleted_at": "2016-03-13T12:52:32.123Z"
              },
              {
                "id": "id3",
                "description": "description3",
                "status": "status5",
                "created_at": "2016-03-13T12:52:32.123Z",
                "updated_at": "2016-03-13T12:52:32.123Z",
                "pricing_scheme": {
                  "price": 155,
                  "scheme_type": "scheme_type5",
                  "price_brackets": [
                    {
                      "start_quantity": 54,
                      "price": 8,
                      "end_quantity": 62,
                      "overage_price": 76
                    },
                    {
                      "start_quantity": 55,
                      "price": 7,
                      "end_quantity": 63,
                      "overage_price": 77
                    }
                  ],
                  "minimum_price": 59,
                  "percentage": 64.23
                },
                "discounts": [
                  {
                    "id": "id4",
                    "value": 61.86,
                    "discount_type": "discount_type2",
                    "status": "status6",
                    "created_at": "2016-03-13T12:52:32.123Z",
                    "cycles": 66,
                    "deleted_at": "2016-03-13T12:52:32.123Z",
                    "description": "description4",
                    "subscription": {},
                    "subscription_item": {
                      "id": "id0",
                      "description": "description0",
                      "status": "status2",
                      "created_at": "2016-03-13T12:52:32.123Z",
                      "updated_at": "2016-03-13T12:52:32.123Z",
                      "pricing_scheme": {
                        "price": 24,
                        "scheme_type": "scheme_type2",
                        "price_brackets": [
                          {}
                        ],
                        "minimum_price": 120,
                        "percentage": 99.3
                      },
                      "discounts": [
                        {}
                      ],
                      "increments": [
                        {
                          "id": "id9",
                          "value": 208.21,
                          "increment_type": "increment_type1",
                          "status": "status1",
                          "created_at": "2016-03-13T12:52:32.123Z",
                          "cycles": 109,
                          "deleted_at": "2016-03-13T12:52:32.123Z",
                          "description": "description9",
                          "subscription": {},
                          "subscription_item": {}
                        },
                        {
                          "id": "id0",
                          "value": 208.22,
                          "increment_type": "increment_type2",
                          "status": "status2",
                          "created_at": "2016-03-13T12:52:32.123Z",
                          "cycles": 110,
                          "deleted_at": "2016-03-13T12:52:32.123Z",
                          "description": "description0",
                          "subscription": {},
                          "subscription_item": {}
                        }
                      ],
                      "subscription": {},
                      "name": "name0",
                      "quantity": 34,
                      "cycles": 54,
                      "deleted_at": "2016-03-13T12:52:32.123Z"
                    }
                  },
                  {
                    "id": "id5",
                    "value": 61.87,
                    "discount_type": "discount_type3",
                    "status": "status7",
                    "created_at": "2016-03-13T12:52:32.123Z",
                    "cycles": 67,
                    "deleted_at": "2016-03-13T12:52:32.123Z",
                    "description": "description5",
                    "subscription": {},
                    "subscription_item": {
                      "id": "id1",
                      "description": "description1",
                      "status": "status3",
                      "created_at": "2016-03-13T12:52:32.123Z",
                      "updated_at": "2016-03-13T12:52:32.123Z",
                      "pricing_scheme": {
                        "price": 25,
                        "scheme_type": "scheme_type3",
                        "price_brackets": [
                          {},
                          {}
                        ],
                        "minimum_price": 121,
                        "percentage": 99.31
                      },
                      "discounts": [
                        {},
                        {}
                      ],
                      "increments": [
                        {
                          "id": "id0",
                          "value": 208.22,
                          "increment_type": "increment_type2",
                          "status": "status2",
                          "created_at": "2016-03-13T12:52:32.123Z",
                          "cycles": 110,
                          "deleted_at": "2016-03-13T12:52:32.123Z",
                          "description": "description0",
                          "subscription": {},
                          "subscription_item": {}
                        },
                        {
                          "id": "id1",
                          "value": 208.23,
                          "increment_type": "increment_type3",
                          "status": "status3",
                          "created_at": "2016-03-13T12:52:32.123Z",
                          "cycles": 111,
                          "deleted_at": "2016-03-13T12:52:32.123Z",
                          "description": "description1",
                          "subscription": {},
                          "subscription_item": {}
                        },
                        {
                          "id": "id2",
                          "value": 208.24,
                          "increment_type": "increment_type4",
                          "status": "status4",
                          "created_at": "2016-03-13T12:52:32.123Z",
                          "cycles": 112,
                          "deleted_at": "2016-03-13T12:52:32.123Z",
                          "description": "description2",
                          "subscription": {},
                          "subscription_item": {}
                        }
                      ],
                      "subscription": {},
                      "name": "name1",
                      "quantity": 35,
                      "cycles": 55,
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
                "name": "name3",
                "quantity": 111,
                "cycles": 131,
                "deleted_at": "2016-03-13T12:52:32.123Z"
              },
              {
                "id": "id4",
                "description": "description4",
                "status": "status6",
                "created_at": "2016-03-13T12:52:32.123Z",
                "updated_at": "2016-03-13T12:52:32.123Z",
                "pricing_scheme": {
                  "price": 154,
                  "scheme_type": "scheme_type6",
                  "price_brackets": [
                    {
                      "start_quantity": 55,
                      "price": 7,
                      "end_quantity": 63,
                      "overage_price": 77
                    },
                    {
                      "start_quantity": 56,
                      "price": 6,
                      "end_quantity": 64,
                      "overage_price": 78
                    },
                    {
                      "start_quantity": 57,
                      "price": 5,
                      "end_quantity": 65,
                      "overage_price": 79
                    }
                  ],
                  "minimum_price": 58,
                  "percentage": 64.24
                },
                "discounts": [
                  {
                    "id": "id5",
                    "value": 61.87,
                    "discount_type": "discount_type3",
                    "status": "status7",
                    "created_at": "2016-03-13T12:52:32.123Z",
                    "cycles": 67,
                    "deleted_at": "2016-03-13T12:52:32.123Z",
                    "description": "description5",
                    "subscription": {},
                    "subscription_item": {
                      "id": "id1",
                      "description": "description1",
                      "status": "status3",
                      "created_at": "2016-03-13T12:52:32.123Z",
                      "updated_at": "2016-03-13T12:52:32.123Z",
                      "pricing_scheme": {
                        "price": 25,
                        "scheme_type": "scheme_type3",
                        "price_brackets": [
                          {},
                          {}
                        ],
                        "minimum_price": 121,
                        "percentage": 99.31
                      },
                      "discounts": [
                        {},
                        {}
                      ],
                      "increments": [
                        {
                          "id": "id0",
                          "value": 208.22,
                          "increment_type": "increment_type2",
                          "status": "status2",
                          "created_at": "2016-03-13T12:52:32.123Z",
                          "cycles": 110,
                          "deleted_at": "2016-03-13T12:52:32.123Z",
                          "description": "description0",
                          "subscription": {},
                          "subscription_item": {}
                        },
                        {
                          "id": "id1",
                          "value": 208.23,
                          "increment_type": "increment_type3",
                          "status": "status3",
                          "created_at": "2016-03-13T12:52:32.123Z",
                          "cycles": 111,
                          "deleted_at": "2016-03-13T12:52:32.123Z",
                          "description": "description1",
                          "subscription": {},
                          "subscription_item": {}
                        },
                        {
                          "id": "id2",
                          "value": 208.24,
                          "increment_type": "increment_type4",
                          "status": "status4",
                          "created_at": "2016-03-13T12:52:32.123Z",
                          "cycles": 112,
                          "deleted_at": "2016-03-13T12:52:32.123Z",
                          "description": "description2",
                          "subscription": {},
                          "subscription_item": {}
                        }
                      ],
                      "subscription": {},
                      "name": "name1",
                      "quantity": 35,
                      "cycles": 55,
                      "deleted_at": "2016-03-13T12:52:32.123Z"
                    }
                  },
                  {
                    "id": "id6",
                    "value": 61.88,
                    "discount_type": "discount_type4",
                    "status": "status8",
                    "created_at": "2016-03-13T12:52:32.123Z",
                    "cycles": 68,
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
                        "price": 26,
                        "scheme_type": "scheme_type4",
                        "price_brackets": [
                          {},
                          {},
                          {}
                        ],
                        "minimum_price": 122,
                        "percentage": 99.32
                      },
                      "discounts": [
                        {},
                        {},
                        {}
                      ],
                      "increments": [
                        {
                          "id": "id1",
                          "value": 208.23,
                          "increment_type": "increment_type3",
                          "status": "status3",
                          "created_at": "2016-03-13T12:52:32.123Z",
                          "cycles": 111,
                          "deleted_at": "2016-03-13T12:52:32.123Z",
                          "description": "description1",
                          "subscription": {},
                          "subscription_item": {}
                        }
                      ],
                      "subscription": {},
                      "name": "name2",
                      "quantity": 36,
                      "cycles": 56,
                      "deleted_at": "2016-03-13T12:52:32.123Z"
                    }
                  },
                  {
                    "id": "id7",
                    "value": 61.89,
                    "discount_type": "discount_type5",
                    "status": "status9",
                    "created_at": "2016-03-13T12:52:32.123Z",
                    "cycles": 69,
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
                        "price": 27,
                        "scheme_type": "scheme_type5",
                        "price_brackets": [
                          {}
                        ],
                        "minimum_price": 123,
                        "percentage": 99.33
                      },
                      "discounts": [
                        {}
                      ],
                      "increments": [
                        {
                          "id": "id2",
                          "value": 208.24,
                          "increment_type": "increment_type4",
                          "status": "status4",
                          "created_at": "2016-03-13T12:52:32.123Z",
                          "cycles": 112,
                          "deleted_at": "2016-03-13T12:52:32.123Z",
                          "description": "description2",
                          "subscription": {},
                          "subscription_item": {}
                        },
                        {
                          "id": "id3",
                          "value": 208.25,
                          "increment_type": "increment_type5",
                          "status": "status5",
                          "created_at": "2016-03-13T12:52:32.123Z",
                          "cycles": 113,
                          "deleted_at": "2016-03-13T12:52:32.123Z",
                          "description": "description3",
                          "subscription": {},
                          "subscription_item": {}
                        }
                      ],
                      "subscription": {},
                      "name": "name3",
                      "quantity": 37,
                      "cycles": 57,
                      "deleted_at": "2016-03-13T12:52:32.123Z"
                    }
                  }
                ],
                "increments": [
                  {}
                ],
                "subscription": {},
                "name": "name4",
                "quantity": 112,
                "cycles": 132,
                "deleted_at": "2016-03-13T12:52:32.123Z"
              }
            ],
            "statement_descriptor": "statement_descriptor5",
            "metadata": {
              "key0": "metadata2",
              "key1": "metadata1"
            },
            "setup": {
              "id": "id9",
              "description": "description9",
              "amount": 1,
              "status": "status1"
            },
            "gateway_affiliation_id": "gateway_affiliation_id1",
            "next_billing_at": "2016-03-13T12:52:32.123Z",
            "billing_day": 205,
            "minimum_price": 193,
            "canceled_at": "2016-03-13T12:52:32.123Z",
            "discounts": [
              {}
            ],
            "increments": [
              {},
              {}
            ],
            "boleto_due_days": 177,
            "split": {
              "enabled": true,
              "rules": [
                {
                  "type": "type5",
                  "amount": 137,
                  "recipient": {
                    "id": "id7",
                    "name": "name7",
                    "email": "email9",
                    "document": "document9",
                    "description": "description3",
                    "type": "type3",
                    "status": "status1",
                    "created_at": "2016-03-13T12:52:32.123Z",
                    "updated_at": "2016-03-13T12:52:32.123Z",
                    "deleted_at": "2016-03-13T12:52:32.123Z",
                    "default_bank_account": {
                      "id": "id5",
                      "holder_name": "holder_name1",
                      "holder_type": "holder_type7",
                      "bank": "bank3",
                      "branch_number": "branch_number1",
                      "branch_check_digit": "branch_check_digit1",
                      "account_number": "account_number5",
                      "account_check_digit": "account_check_digit1",
                      "type": "type5",
                      "status": "status7",
                      "created_at": "2016-03-13T12:52:32.123Z",
                      "updated_at": "2016-03-13T12:52:32.123Z",
                      "deleted_at": "2016-03-13T12:52:32.123Z",
                      "recipient": {
                        "id": "id7",
                        "name": "name7",
                        "email": "email9",
                        "document": "document1",
                        "description": "description7",
                        "type": "type3",
                        "status": "status9",
                        "created_at": "2016-03-13T12:52:32.123Z",
                        "updated_at": "2016-03-13T12:52:32.123Z",
                        "deleted_at": "2016-03-13T12:52:32.123Z",
                        "default_bank_account": {
                          "id": "id5",
                          "holder_name": "holder_name1",
                          "holder_type": "holder_type7",
                          "bank": "bank3",
                          "branch_number": "branch_number1",
                          "branch_check_digit": "branch_check_digit1",
                          "account_number": "account_number5",
                          "account_check_digit": "account_check_digit1",
                          "type": "type5",
                          "status": "status7",
                          "created_at": "2016-03-13T12:52:32.123Z",
                          "updated_at": "2016-03-13T12:52:32.123Z",
                          "deleted_at": "2016-03-13T12:52:32.123Z",
                          "recipient": {},
                          "metadata": {
                            "key0": "metadata4"
                          },
                          "pix_key": "pix_key9"
                        },
                        "gateway_recipients": [
                          {
                            "gateway": "gateway1",
                            "status": "status3",
                            "pgid": "pgid7",
                            "created_at": "created_at9",
                            "updated_at": "updated_at7"
                          }
                        ],
                        "metadata": {
                          "key0": "metadata4"
                        },
                        "automatic_anticipation_settings": {
                          "enabled": true,
                          "type": "type9",
                          "volume_percentage": 187,
                          "delay": 103,
                          "days": [
                            79,
                            80,
                            81
                          ]
                        },
                        "transfer_settings": {
                          "transfer_enabled": true,
                          "transfer_interval": "transfer_interval7",
                          "transfer_day": 97
                        },
                        "code": "code5",
                        "payment_mode": "payment_mode1"
                      },
                      "metadata": {
                        "key0": "metadata2"
                      },
                      "pix_key": "pix_key1"
                    },
                    "gateway_recipients": [
                      {}
                    ],
                    "metadata": {
                      "key0": "metadata6"
                    },
                    "automatic_anticipation_settings": {
                      "enabled": true,
                      "type": "type9",
                      "volume_percentage": 1,
                      "delay": 33,
                      "days": [
                        9,
                        10,
                        11
                      ]
                    },
                    "transfer_settings": {
                      "transfer_enabled": true,
                      "transfer_interval": "transfer_interval7",
                      "transfer_day": 167
                    },
                    "code": "code5",
                    "payment_mode": "payment_mode9"
                  },
                  "gateway_id": "gateway_id5",
                  "options": {
                    "liable": true,
                    "charge_processing_fee": true,
                    "charge_remainder_fee": "charge_remainder_fee1"
                  },
                  "id": "id5"
                },
                {
                  "type": "type4",
                  "amount": 138,
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
                        "document": "document2",
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
                            "key0": "metadata3",
                            "key1": "metadata2"
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
                          },
                          {
                            "gateway": "gateway3",
                            "status": "status5",
                            "pgid": "pgid9",
                            "created_at": "created_at1",
                            "updated_at": "updated_at9"
                          }
                        ],
                        "metadata": {
                          "key0": "metadata5",
                          "key1": "metadata4",
                          "key2": "metadata3"
                        },
                        "automatic_anticipation_settings": {
                          "enabled": false,
                          "type": "type8",
                          "volume_percentage": 186,
                          "delay": 104,
                          "days": [
                            80
                          ]
                        },
                        "transfer_settings": {
                          "transfer_enabled": false,
                          "transfer_interval": "transfer_interval6",
                          "transfer_day": 96
                        },
                        "code": "code6",
                        "payment_mode": "payment_mode2"
                      },
                      "metadata": {
                        "key0": "metadata3",
                        "key1": "metadata2",
                        "key2": "metadata1"
                      },
                      "pix_key": "pix_key0"
                    },
                    "gateway_recipients": [
                      {},
                      {}
                    ],
                    "metadata": {
                      "key0": "metadata5",
                      "key1": "metadata6",
                      "key2": "metadata7"
                    },
                    "automatic_anticipation_settings": {
                      "enabled": false,
                      "type": "type8",
                      "volume_percentage": 0,
                      "delay": 34,
                      "days": [
                        10
                      ]
                    },
                    "transfer_settings": {
                      "transfer_enabled": false,
                      "transfer_interval": "transfer_interval6",
                      "transfer_day": 166
                    },
                    "code": "code6",
                    "payment_mode": "payment_mode8"
                  },
                  "gateway_id": "gateway_id4",
                  "options": {
                    "liable": false,
                    "charge_processing_fee": false,
                    "charge_remainder_fee": "charge_remainder_fee2"
                  },
                  "id": "id6"
                },
                {
                  "type": "type3",
                  "amount": 139,
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
                        "document": "document3",
                        "description": "description9",
                        "type": "type1",
                        "status": "status1",
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
                            "key0": "metadata2",
                            "key1": "metadata1",
                            "key2": "metadata0"
                          },
                          "pix_key": "pix_key1"
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
                          },
                          {
                            "gateway": "gateway5",
                            "status": "status7",
                            "pgid": "pgid1",
                            "created_at": "created_at3",
                            "updated_at": "updated_at1"
                          }
                        ],
                        "metadata": {
                          "key0": "metadata6",
                          "key1": "metadata5"
                        },
                        "automatic_anticipation_settings": {
                          "enabled": true,
                          "type": "type7",
                          "volume_percentage": 185,
                          "delay": 105,
                          "days": [
                            81,
                            82
                          ]
                        },
                        "transfer_settings": {
                          "transfer_enabled": true,
                          "transfer_interval": "transfer_interval5",
                          "transfer_day": 95
                        },
                        "code": "code7",
                        "payment_mode": "payment_mode3"
                      },
                      "metadata": {
                        "key0": "metadata4",
                        "key1": "metadata3"
                      },
                      "pix_key": "pix_key9"
                    },
                    "gateway_recipients": [
                      {},
                      {},
                      {}
                    ],
                    "metadata": {
                      "key0": "metadata4",
                      "key1": "metadata5"
                    },
                    "automatic_anticipation_settings": {
                      "enabled": true,
                      "type": "type7",
                      "volume_percentage": 255,
                      "delay": 35,
                      "days": [
                        11,
                        12
                      ]
                    },
                    "transfer_settings": {
                      "transfer_enabled": true,
                      "transfer_interval": "transfer_interval5",
                      "transfer_day": 165
                    },
                    "code": "code7",
                    "payment_mode": "payment_mode7"
                  },
                  "gateway_id": "gateway_id3",
                  "options": {
                    "liable": true,
                    "charge_processing_fee": true,
                    "charge_remainder_fee": "charge_remainder_fee3"
                  },
                  "id": "id7"
                }
              ]
            },
            "boleto": {
              "interest": {
                "days": 169,
                "type": "type5",
                "amount": 243
              },
              "fine": {
                "days": 121,
                "type": "type3",
                "amount": 195
              },
              "max_days_to_pay_past_due": 109
            },
            "manual_billing": true
          },
          "status": "status9",
          "duration": 25,
          "created_at": "created_at7",
          "updated_at": "updated_at5",
          "cycle": 221
        },
        "payment_method": "payment_method9",
        "currency": "currency9",
        "installments": 209,
        "status": "status7",
        "created_at": "2016-03-13T12:52:32.123Z",
        "updated_at": "2016-03-13T12:52:32.123Z",
        "customer": {},
        "card": {
          "id": "id5",
          "last_four_digits": "last_four_digits1",
          "brand": "brand9",
          "holder_name": "holder_name1",
          "exp_month": 187,
          "exp_year": 109,
          "status": "status3",
          "created_at": "2016-03-13T12:52:32.123Z",
          "updated_at": "2016-03-13T12:52:32.123Z",
          "billing_address": {
            "street": "street7",
            "number": "number5",
            "zip_code": "zip_code1",
            "neighborhood": "neighborhood3",
            "city": "city3",
            "state": "state7",
            "country": "country1",
            "complement": "complement7",
            "line_1": "line_19",
            "line_2": "line_25"
          },
          "customer": {},
          "metadata": {
            "key0": "metadata8",
            "key1": "metadata9"
          },
          "type": "type5",
          "holder_document": "holder_document1",
          "deleted_at": "2016-03-13T12:52:32.123Z",
          "first_six_digits": "first_six_digits5",
          "label": "label5"
        },
        "items": [
          {},
          {},
          {}
        ],
        "statement_descriptor": "statement_descriptor1",
        "metadata": {
          "key0": "metadata2",
          "key1": "metadata3"
        },
        "setup": {
          "id": "id5",
          "description": "description5",
          "amount": 23,
          "status": "status3"
        },
        "gateway_affiliation_id": "gateway_affiliation_id7",
        "next_billing_at": "2016-03-13T12:52:32.123Z",
        "billing_day": 75,
        "minimum_price": 217,
        "canceled_at": "2016-03-13T12:52:32.123Z",
        "discounts": [
          {}
        ],
        "increments": [
          {},
          {},
          {}
        ],
        "boleto_due_days": 153,
        "split": {
          "enabled": true,
          "rules": [
            {},
            {},
            {}
          ]
        },
        "boleto": {
          "interest": {
            "days": 119,
            "type": "type1",
            "amount": 193
          },
          "fine": {
            "days": 101,
            "type": "type1",
            "amount": 81
          },
          "max_days_to_pay_past_due": 159
        },
        "manual_billing": true
      },
      "subscription_item": {}
    }
  ],
  "increments": [
    {
      "id": "id7",
      "value": 124.19,
      "increment_type": "increment_type9",
      "status": "status1",
      "created_at": "2016-03-13T12:52:32.123Z",
      "cycles": 101,
      "deleted_at": "2016-03-13T12:52:32.123Z",
      "description": "description3",
      "subscription": {
        "id": "id7",
        "code": "code5",
        "start_at": "2016-03-13T12:52:32.123Z",
        "interval": "interval5",
        "interval_count": 167,
        "billing_type": "billing_type1",
        "current_cycle": {
          "start_at": "2016-03-13T12:52:32.123Z",
          "end_at": "2016-03-13T12:52:32.123Z",
          "id": "id5",
          "billing_at": "2016-03-13T12:52:32.123Z",
          "subscription": {
            "id": "id1",
            "code": "code9",
            "start_at": "2016-03-13T12:52:32.123Z",
            "interval": "interval1",
            "interval_count": 225,
            "billing_type": "billing_type5",
            "current_cycle": {
              "start_at": "2016-03-13T12:52:32.123Z",
              "end_at": "2016-03-13T12:52:32.123Z",
              "id": "id9",
              "billing_at": "2016-03-13T12:52:32.123Z",
              "subscription": {},
              "status": "status9",
              "duration": 209,
              "created_at": "created_at7",
              "updated_at": "updated_at5",
              "cycle": 149
            },
            "payment_method": "payment_method9",
            "currency": "currency9",
            "installments": 137,
            "status": "status7",
            "created_at": "2016-03-13T12:52:32.123Z",
            "updated_at": "2016-03-13T12:52:32.123Z",
            "customer": {
              "id": "id9",
              "name": "name9",
              "email": "email7",
              "delinquent": true,
              "created_at": "2016-03-13T12:52:32.123Z",
              "updated_at": "2016-03-13T12:52:32.123Z",
              "document": "document7",
              "type": "type1",
              "fb_access_token": "fb_access_token3",
              "address": {
                "id": "id5",
                "street": "street5",
                "number": "number3",
                "complement": "complement1",
                "zip_code": "zip_code9",
                "neighborhood": "neighborhood1",
                "city": "city5",
                "state": "state1",
                "country": "country9",
                "status": "status7",
                "created_at": "2016-03-13T12:52:32.123Z",
                "updated_at": "2016-03-13T12:52:32.123Z",
                "customer": {
                  "id": "id5",
                  "name": "name5",
                  "email": "email1",
                  "delinquent": true,
                  "created_at": "2016-03-13T12:52:32.123Z",
                  "updated_at": "2016-03-13T12:52:32.123Z",
                  "document": "document9",
                  "type": "type5",
                  "fb_access_token": "fb_access_token9",
                  "address": {
                    "id": "id1",
                    "street": "street1",
                    "number": "number9",
                    "complement": "complement7",
                    "zip_code": "zip_code5",
                    "neighborhood": "neighborhood7",
                    "city": "city1",
                    "state": "state7",
                    "country": "country5",
                    "status": "status3",
                    "created_at": "2016-03-13T12:52:32.123Z",
                    "updated_at": "2016-03-13T12:52:32.123Z",
                    "customer": {},
                    "metadata": {
                      "key0": "metadata8"
                    },
                    "line_1": "line_15",
                    "line_2": "line_29",
                    "deleted_at": "2016-03-13T12:52:32.123Z"
                  },
                  "metadata": {
                    "key0": "metadata2"
                  },
                  "phones": {
                    "home_phone": {
                      "country_code": "country_code7",
                      "number": "number5",
                      "area_code": "area_code7"
                    },
                    "mobile_phone": {
                      "country_code": "country_code3",
                      "number": "number5",
                      "area_code": "area_code7"
                    }
                  },
                  "fb_id": 81,
                  "code": "code3",
                  "document_type": "document_type3"
                },
                "metadata": {
                  "key0": "metadata2",
                  "key1": "metadata1"
                },
                "line_1": "line_11",
                "line_2": "line_23",
                "deleted_at": "2016-03-13T12:52:32.123Z"
              },
              "metadata": {
                "key0": "metadata4",
                "key1": "metadata5"
              },
              "phones": {
                "home_phone": {},
                "mobile_phone": {}
              },
              "fb_id": 31,
              "code": "code7",
              "document_type": "document_type7"
            },
            "card": {
              "id": "id5",
              "last_four_digits": "last_four_digits1",
              "brand": "brand9",
              "holder_name": "holder_name1",
              "exp_month": 115,
              "exp_year": 181,
              "status": "status3",
              "created_at": "2016-03-13T12:52:32.123Z",
              "updated_at": "2016-03-13T12:52:32.123Z",
              "billing_address": {
                "street": "street7",
                "number": "number5",
                "zip_code": "zip_code1",
                "neighborhood": "neighborhood3",
                "city": "city3",
                "state": "state7",
                "country": "country1",
                "complement": "complement7",
                "line_1": "line_19",
                "line_2": "line_25"
              },
              "customer": {},
              "metadata": {
                "key0": "metadata8",
                "key1": "metadata9"
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
                "pricing_scheme": {
                  "price": 36,
                  "scheme_type": "scheme_type0",
                  "price_brackets": [
                    {
                      "start_quantity": 173,
                      "price": 145,
                      "end_quantity": 181,
                      "overage_price": 195
                    },
                    {
                      "start_quantity": 174,
                      "price": 144,
                      "end_quantity": 182,
                      "overage_price": 196
                    }
                  ],
                  "minimum_price": 196,
                  "percentage": 221.58
                },
                "discounts": [
                  {
                    "id": "id9",
                    "value": 40.41,
                    "discount_type": "discount_type7",
                    "status": "status1",
                    "created_at": "2016-03-13T12:52:32.123Z",
                    "cycles": 225,
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
                        "price": 73,
                        "scheme_type": "scheme_type7",
                        "price_brackets": [
                          {},
                          {},
                          {}
                        ],
                        "minimum_price": 233,
                        "percentage": 77.85
                      },
                      "discounts": [
                        {
                          "id": "id6",
                          "value": 75.48,
                          "discount_type": "discount_type4",
                          "status": "status8",
                          "created_at": "2016-03-13T12:52:32.123Z",
                          "cycles": 148,
                          "deleted_at": "2016-03-13T12:52:32.123Z",
                          "description": "description6",
                          "subscription": {},
                          "subscription_item": {}
                        },
                        {
                          "id": "id7",
                          "value": 75.49,
                          "discount_type": "discount_type5",
                          "status": "status9",
                          "created_at": "2016-03-13T12:52:32.123Z",
                          "cycles": 149,
                          "deleted_at": "2016-03-13T12:52:32.123Z",
                          "description": "description7",
                          "subscription": {},
                          "subscription_item": {}
                        },
                        {
                          "id": "id8",
                          "value": 75.5,
                          "discount_type": "discount_type6",
                          "status": "status0",
                          "created_at": "2016-03-13T12:52:32.123Z",
                          "cycles": 150,
                          "deleted_at": "2016-03-13T12:52:32.123Z",
                          "description": "description8",
                          "subscription": {},
                          "subscription_item": {}
                        }
                      ],
                      "increments": [
                        {
                          "id": "id4",
                          "value": 186.76,
                          "increment_type": "increment_type6",
                          "status": "status6",
                          "created_at": "2016-03-13T12:52:32.123Z",
                          "cycles": 244,
                          "deleted_at": "2016-03-13T12:52:32.123Z",
                          "description": "description4",
                          "subscription": {},
                          "subscription_item": {}
                        }
                      ],
                      "subscription": {},
                      "name": "name5",
                      "quantity": 193,
                      "cycles": 213,
                      "deleted_at": "2016-03-13T12:52:32.123Z"
                    }
                  }
                ],
                "increments": [
                  {},
                  {}
                ],
                "subscription": {},
                "name": "name8",
                "quantity": 14,
                "cycles": 222,
                "deleted_at": "2016-03-13T12:52:32.123Z"
              },
              {
                "id": "id9",
                "description": "description9",
                "status": "status1",
                "created_at": "2016-03-13T12:52:32.123Z",
                "updated_at": "2016-03-13T12:52:32.123Z",
                "pricing_scheme": {
                  "price": 37,
                  "scheme_type": "scheme_type9",
                  "price_brackets": [
                    {
                      "start_quantity": 172,
                      "price": 146,
                      "end_quantity": 180,
                      "overage_price": 194
                    }
                  ],
                  "minimum_price": 197,
                  "percentage": 221.57
                },
                "discounts": [
                  {
                    "id": "id0",
                    "value": 40.42,
                    "discount_type": "discount_type8",
                    "status": "status2",
                    "created_at": "2016-03-13T12:52:32.123Z",
                    "cycles": 226,
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
                        "price": 72,
                        "scheme_type": "scheme_type8",
                        "price_brackets": [
                          {}
                        ],
                        "minimum_price": 232,
                        "percentage": 77.86
                      },
                      "discounts": [
                        {
                          "id": "id7",
                          "value": 75.49,
                          "discount_type": "discount_type5",
                          "status": "status9",
                          "created_at": "2016-03-13T12:52:32.123Z",
                          "cycles": 149,
                          "deleted_at": "2016-03-13T12:52:32.123Z",
                          "description": "description7",
                          "subscription": {},
                          "subscription_item": {}
                        }
                      ],
                      "increments": [
                        {
                          "id": "id5",
                          "value": 186.77,
                          "increment_type": "increment_type7",
                          "status": "status7",
                          "created_at": "2016-03-13T12:52:32.123Z",
                          "cycles": 243,
                          "deleted_at": "2016-03-13T12:52:32.123Z",
                          "description": "description5",
                          "subscription": {},
                          "subscription_item": {}
                        },
                        {
                          "id": "id6",
                          "value": 186.78,
                          "increment_type": "increment_type8",
                          "status": "status8",
                          "created_at": "2016-03-13T12:52:32.123Z",
                          "cycles": 242,
                          "deleted_at": "2016-03-13T12:52:32.123Z",
                          "description": "description6",
                          "subscription": {},
                          "subscription_item": {}
                        }
                      ],
                      "subscription": {},
                      "name": "name6",
                      "quantity": 194,
                      "cycles": 214,
                      "deleted_at": "2016-03-13T12:52:32.123Z"
                    }
                  },
                  {
                    "id": "id1",
                    "value": 40.43,
                    "discount_type": "discount_type9",
                    "status": "status3",
                    "created_at": "2016-03-13T12:52:32.123Z",
                    "cycles": 227,
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
                        "price": 71,
                        "scheme_type": "scheme_type9",
                        "price_brackets": [
                          {},
                          {}
                        ],
                        "minimum_price": 231,
                        "percentage": 77.87
                      },
                      "discounts": [
                        {
                          "id": "id8",
                          "value": 75.5,
                          "discount_type": "discount_type6",
                          "status": "status0",
                          "created_at": "2016-03-13T12:52:32.123Z",
                          "cycles": 150,
                          "deleted_at": "2016-03-13T12:52:32.123Z",
                          "description": "description8",
                          "subscription": {},
                          "subscription_item": {}
                        },
                        {
                          "id": "id9",
                          "value": 75.51,
                          "discount_type": "discount_type7",
                          "status": "status1",
                          "created_at": "2016-03-13T12:52:32.123Z",
                          "cycles": 151,
                          "deleted_at": "2016-03-13T12:52:32.123Z",
                          "description": "description9",
                          "subscription": {},
                          "subscription_item": {}
                        }
                      ],
                      "increments": [
                        {
                          "id": "id6",
                          "value": 186.78,
                          "increment_type": "increment_type8",
                          "status": "status8",
                          "created_at": "2016-03-13T12:52:32.123Z",
                          "cycles": 242,
                          "deleted_at": "2016-03-13T12:52:32.123Z",
                          "description": "description6",
                          "subscription": {},
                          "subscription_item": {}
                        },
                        {
                          "id": "id7",
                          "value": 186.79,
                          "increment_type": "increment_type9",
                          "status": "status9",
                          "created_at": "2016-03-13T12:52:32.123Z",
                          "cycles": 241,
                          "deleted_at": "2016-03-13T12:52:32.123Z",
                          "description": "description7",
                          "subscription": {},
                          "subscription_item": {}
                        },
                        {
                          "id": "id8",
                          "value": 186.8,
                          "increment_type": "increment_type0",
                          "status": "status0",
                          "created_at": "2016-03-13T12:52:32.123Z",
                          "cycles": 240,
                          "deleted_at": "2016-03-13T12:52:32.123Z",
                          "description": "description8",
                          "subscription": {},
                          "subscription_item": {}
                        }
                      ],
                      "subscription": {},
                      "name": "name7",
                      "quantity": 195,
                      "cycles": 215,
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
                "name": "name9",
                "quantity": 15,
                "cycles": 221,
                "deleted_at": "2016-03-13T12:52:32.123Z"
              },
              {
                "id": "id0",
                "description": "description0",
                "status": "status2",
                "created_at": "2016-03-13T12:52:32.123Z",
                "updated_at": "2016-03-13T12:52:32.123Z",
                "pricing_scheme": {
                  "price": 38,
                  "scheme_type": "scheme_type8",
                  "price_brackets": [
                    {
                      "start_quantity": 171,
                      "price": 147,
                      "end_quantity": 179,
                      "overage_price": 193
                    },
                    {
                      "start_quantity": 172,
                      "price": 146,
                      "end_quantity": 180,
                      "overage_price": 194
                    },
                    {
                      "start_quantity": 173,
                      "price": 145,
                      "end_quantity": 181,
                      "overage_price": 195
                    }
                  ],
                  "minimum_price": 198,
                  "percentage": 221.56
                },
                "discounts": [
                  {
                    "id": "id1",
                    "value": 40.43,
                    "discount_type": "discount_type9",
                    "status": "status3",
                    "created_at": "2016-03-13T12:52:32.123Z",
                    "cycles": 227,
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
                        "price": 71,
                        "scheme_type": "scheme_type9",
                        "price_brackets": [
                          {},
                          {}
                        ],
                        "minimum_price": 231,
                        "percentage": 77.87
                      },
                      "discounts": [
                        {
                          "id": "id8",
                          "value": 75.5,
                          "discount_type": "discount_type6",
                          "status": "status0",
                          "created_at": "2016-03-13T12:52:32.123Z",
                          "cycles": 150,
                          "deleted_at": "2016-03-13T12:52:32.123Z",
                          "description": "description8",
                          "subscription": {},
                          "subscription_item": {}
                        },
                        {
                          "id": "id9",
                          "value": 75.51,
                          "discount_type": "discount_type7",
                          "status": "status1",
                          "created_at": "2016-03-13T12:52:32.123Z",
                          "cycles": 151,
                          "deleted_at": "2016-03-13T12:52:32.123Z",
                          "description": "description9",
                          "subscription": {},
                          "subscription_item": {}
                        }
                      ],
                      "increments": [
                        {
                          "id": "id6",
                          "value": 186.78,
                          "increment_type": "increment_type8",
                          "status": "status8",
                          "created_at": "2016-03-13T12:52:32.123Z",
                          "cycles": 242,
                          "deleted_at": "2016-03-13T12:52:32.123Z",
                          "description": "description6",
                          "subscription": {},
                          "subscription_item": {}
                        },
                        {
                          "id": "id7",
                          "value": 186.79,
                          "increment_type": "increment_type9",
                          "status": "status9",
                          "created_at": "2016-03-13T12:52:32.123Z",
                          "cycles": 241,
                          "deleted_at": "2016-03-13T12:52:32.123Z",
                          "description": "description7",
                          "subscription": {},
                          "subscription_item": {}
                        },
                        {
                          "id": "id8",
                          "value": 186.8,
                          "increment_type": "increment_type0",
                          "status": "status0",
                          "created_at": "2016-03-13T12:52:32.123Z",
                          "cycles": 240,
                          "deleted_at": "2016-03-13T12:52:32.123Z",
                          "description": "description8",
                          "subscription": {},
                          "subscription_item": {}
                        }
                      ],
                      "subscription": {},
                      "name": "name7",
                      "quantity": 195,
                      "cycles": 215,
                      "deleted_at": "2016-03-13T12:52:32.123Z"
                    }
                  },
                  {
                    "id": "id2",
                    "value": 40.44,
                    "discount_type": "discount_type0",
                    "status": "status4",
                    "created_at": "2016-03-13T12:52:32.123Z",
                    "cycles": 228,
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
                        "price": 70,
                        "scheme_type": "scheme_type0",
                        "price_brackets": [
                          {},
                          {},
                          {}
                        ],
                        "minimum_price": 230,
                        "percentage": 77.88
                      },
                      "discounts": [
                        {
                          "id": "id9",
                          "value": 75.51,
                          "discount_type": "discount_type7",
                          "status": "status1",
                          "created_at": "2016-03-13T12:52:32.123Z",
                          "cycles": 151,
                          "deleted_at": "2016-03-13T12:52:32.123Z",
                          "description": "description9",
                          "subscription": {},
                          "subscription_item": {}
                        },
                        {
                          "id": "id0",
                          "value": 75.52,
                          "discount_type": "discount_type8",
                          "status": "status2",
                          "created_at": "2016-03-13T12:52:32.123Z",
                          "cycles": 152,
                          "deleted_at": "2016-03-13T12:52:32.123Z",
                          "description": "description0",
                          "subscription": {},
                          "subscription_item": {}
                        },
                        {
                          "id": "id1",
                          "value": 75.53,
                          "discount_type": "discount_type9",
                          "status": "status3",
                          "created_at": "2016-03-13T12:52:32.123Z",
                          "cycles": 153,
                          "deleted_at": "2016-03-13T12:52:32.123Z",
                          "description": "description1",
                          "subscription": {},
                          "subscription_item": {}
                        }
                      ],
                      "increments": [
                        {
                          "id": "id7",
                          "value": 186.79,
                          "increment_type": "increment_type9",
                          "status": "status9",
                          "created_at": "2016-03-13T12:52:32.123Z",
                          "cycles": 241,
                          "deleted_at": "2016-03-13T12:52:32.123Z",
                          "description": "description7",
                          "subscription": {},
                          "subscription_item": {}
                        }
                      ],
                      "subscription": {},
                      "name": "name8",
                      "quantity": 196,
                      "cycles": 216,
                      "deleted_at": "2016-03-13T12:52:32.123Z"
                    }
                  },
                  {
                    "id": "id3",
                    "value": 40.45,
                    "discount_type": "discount_type1",
                    "status": "status5",
                    "created_at": "2016-03-13T12:52:32.123Z",
                    "cycles": 229,
                    "deleted_at": "2016-03-13T12:52:32.123Z",
                    "description": "description3",
                    "subscription": {},
                    "subscription_item": {
                      "id": "id9",
                      "description": "description9",
                      "status": "status1",
                      "created_at": "2016-03-13T12:52:32.123Z",
                      "updated_at": "2016-03-13T12:52:32.123Z",
                      "pricing_scheme": {
                        "price": 69,
                        "scheme_type": "scheme_type1",
                        "price_brackets": [
                          {}
                        ],
                        "minimum_price": 229,
                        "percentage": 77.89
                      },
                      "discounts": [
                        {
                          "id": "id0",
                          "value": 75.52,
                          "discount_type": "discount_type8",
                          "status": "status2",
                          "created_at": "2016-03-13T12:52:32.123Z",
                          "cycles": 152,
                          "deleted_at": "2016-03-13T12:52:32.123Z",
                          "description": "description0",
                          "subscription": {},
                          "subscription_item": {}
                        }
                      ],
                      "increments": [
                        {
                          "id": "id8",
                          "value": 186.8,
                          "increment_type": "increment_type0",
                          "status": "status0",
                          "created_at": "2016-03-13T12:52:32.123Z",
                          "cycles": 240,
                          "deleted_at": "2016-03-13T12:52:32.123Z",
                          "description": "description8",
                          "subscription": {},
                          "subscription_item": {}
                        },
                        {
                          "id": "id9",
                          "value": 186.81,
                          "increment_type": "increment_type1",
                          "status": "status1",
                          "created_at": "2016-03-13T12:52:32.123Z",
                          "cycles": 239,
                          "deleted_at": "2016-03-13T12:52:32.123Z",
                          "description": "description9",
                          "subscription": {},
                          "subscription_item": {}
                        }
                      ],
                      "subscription": {},
                      "name": "name9",
                      "quantity": 197,
                      "cycles": 217,
                      "deleted_at": "2016-03-13T12:52:32.123Z"
                    }
                  }
                ],
                "increments": [
                  {}
                ],
                "subscription": {},
                "name": "name0",
                "quantity": 16,
                "cycles": 220,
                "deleted_at": "2016-03-13T12:52:32.123Z"
              }
            ],
            "statement_descriptor": "statement_descriptor1",
            "metadata": {
              "key0": "metadata2",
              "key1": "metadata3"
            },
            "setup": {
              "id": "id5",
              "description": "description5",
              "amount": 95,
              "status": "status3"
            },
            "gateway_affiliation_id": "gateway_affiliation_id7",
            "next_billing_at": "2016-03-13T12:52:32.123Z",
            "billing_day": 147,
            "minimum_price": 33,
            "canceled_at": "2016-03-13T12:52:32.123Z",
            "discounts": [
              {}
            ],
            "increments": [
              {},
              {},
              {}
            ],
            "boleto_due_days": 81,
            "split": {
              "enabled": true,
              "rules": [
                {
                  "type": "type1",
                  "amount": 133,
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
                        "document": "document3",
                        "description": "description9",
                        "type": "type1",
                        "status": "status1",
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
                            "key0": "metadata2"
                          },
                          "pix_key": "pix_key1"
                        },
                        "gateway_recipients": [
                          {
                            "gateway": "gateway3",
                            "status": "status5",
                            "pgid": "pgid9",
                            "created_at": "created_at1",
                            "updated_at": "updated_at9"
                          }
                        ],
                        "metadata": {
                          "key0": "metadata6"
                        },
                        "automatic_anticipation_settings": {
                          "enabled": true,
                          "type": "type7",
                          "volume_percentage": 115,
                          "delay": 175,
                          "days": [
                            151,
                            152,
                            153
                          ]
                        },
                        "transfer_settings": {
                          "transfer_enabled": true,
                          "transfer_interval": "transfer_interval5",
                          "transfer_day": 25
                        },
                        "code": "code7",
                        "payment_mode": "payment_mode3"
                      },
                      "metadata": {
                        "key0": "metadata4"
                      },
                      "pix_key": "pix_key9"
                    },
                    "gateway_recipients": [
                      {}
                    ],
                    "metadata": {
                      "key0": "metadata4"
                    },
                    "automatic_anticipation_settings": {
                      "enabled": true,
                      "type": "type7",
                      "volume_percentage": 185,
                      "delay": 105,
                      "days": [
                        81,
                        82,
                        83
                      ]
                    },
                    "transfer_settings": {
                      "transfer_enabled": true,
                      "transfer_interval": "transfer_interval5",
                      "transfer_day": 95
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
                  "type": "type2",
                  "amount": 134,
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
                        "document": "document4",
                        "description": "description0",
                        "type": "type0",
                        "status": "status2",
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
                            "key0": "metadata1",
                            "key1": "metadata0"
                          },
                          "pix_key": "pix_key2"
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
                          }
                        ],
                        "metadata": {
                          "key0": "metadata7",
                          "key1": "metadata6",
                          "key2": "metadata5"
                        },
                        "automatic_anticipation_settings": {
                          "enabled": false,
                          "type": "type6",
                          "volume_percentage": 114,
                          "delay": 176,
                          "days": [
                            152
                          ]
                        },
                        "transfer_settings": {
                          "transfer_enabled": false,
                          "transfer_interval": "transfer_interval4",
                          "transfer_day": 24
                        },
                        "code": "code8",
                        "payment_mode": "payment_mode4"
                      },
                      "metadata": {
                        "key0": "metadata5",
                        "key1": "metadata4",
                        "key2": "metadata3"
                      },
                      "pix_key": "pix_key8"
                    },
                    "gateway_recipients": [
                      {},
                      {}
                    ],
                    "metadata": {
                      "key0": "metadata3",
                      "key1": "metadata4",
                      "key2": "metadata5"
                    },
                    "automatic_anticipation_settings": {
                      "enabled": false,
                      "type": "type6",
                      "volume_percentage": 184,
                      "delay": 106,
                      "days": [
                        82
                      ]
                    },
                    "transfer_settings": {
                      "transfer_enabled": false,
                      "transfer_interval": "transfer_interval4",
                      "transfer_day": 94
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
                  "type": "type3",
                  "amount": 135,
                  "recipient": {
                    "id": "id1",
                    "name": "name1",
                    "email": "email5",
                    "document": "document5",
                    "description": "description9",
                    "type": "type9",
                    "status": "status7",
                    "created_at": "2016-03-13T12:52:32.123Z",
                    "updated_at": "2016-03-13T12:52:32.123Z",
                    "deleted_at": "2016-03-13T12:52:32.123Z",
                    "default_bank_account": {
                      "id": "id9",
                      "holder_name": "holder_name5",
                      "holder_type": "holder_type1",
                      "bank": "bank7",
                      "branch_number": "branch_number5",
                      "branch_check_digit": "branch_check_digit5",
                      "account_number": "account_number9",
                      "account_check_digit": "account_check_digit5",
                      "type": "type1",
                      "status": "status1",
                      "created_at": "2016-03-13T12:52:32.123Z",
                      "updated_at": "2016-03-13T12:52:32.123Z",
                      "deleted_at": "2016-03-13T12:52:32.123Z",
                      "recipient": {
                        "id": "id1",
                        "name": "name1",
                        "email": "email5",
                        "document": "document5",
                        "description": "description1",
                        "type": "type9",
                        "status": "status3",
                        "created_at": "2016-03-13T12:52:32.123Z",
                        "updated_at": "2016-03-13T12:52:32.123Z",
                        "deleted_at": "2016-03-13T12:52:32.123Z",
                        "default_bank_account": {
                          "id": "id9",
                          "holder_name": "holder_name5",
                          "holder_type": "holder_type1",
                          "bank": "bank7",
                          "branch_number": "branch_number5",
                          "branch_check_digit": "branch_check_digit5",
                          "account_number": "account_number9",
                          "account_check_digit": "account_check_digit5",
                          "type": "type9",
                          "status": "status1",
                          "created_at": "2016-03-13T12:52:32.123Z",
                          "updated_at": "2016-03-13T12:52:32.123Z",
                          "deleted_at": "2016-03-13T12:52:32.123Z",
                          "recipient": {},
                          "metadata": {
                            "key0": "metadata0",
                            "key1": "metadata9",
                            "key2": "metadata8"
                          },
                          "pix_key": "pix_key3"
                        },
                        "gateway_recipients": [
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
                          },
                          {
                            "gateway": "gateway7",
                            "status": "status9",
                            "pgid": "pgid3",
                            "created_at": "created_at5",
                            "updated_at": "updated_at3"
                          }
                        ],
                        "metadata": {
                          "key0": "metadata8",
                          "key1": "metadata7"
                        },
                        "automatic_anticipation_settings": {
                          "enabled": true,
                          "type": "type5",
                          "volume_percentage": 113,
                          "delay": 177,
                          "days": [
                            153,
                            154
                          ]
                        },
                        "transfer_settings": {
                          "transfer_enabled": true,
                          "transfer_interval": "transfer_interval3",
                          "transfer_day": 23
                        },
                        "code": "code9",
                        "payment_mode": "payment_mode5"
                      },
                      "metadata": {
                        "key0": "metadata6",
                        "key1": "metadata5"
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
                      "key1": "metadata3"
                    },
                    "automatic_anticipation_settings": {
                      "enabled": true,
                      "type": "type5",
                      "volume_percentage": 183,
                      "delay": 107,
                      "days": [
                        83,
                        84
                      ]
                    },
                    "transfer_settings": {
                      "transfer_enabled": true,
                      "transfer_interval": "transfer_interval3",
                      "transfer_day": 93
                    },
                    "code": "code9",
                    "payment_mode": "payment_mode5"
                  },
                  "gateway_id": "gateway_id3",
                  "options": {
                    "liable": true,
                    "charge_processing_fee": true,
                    "charge_remainder_fee": "charge_remainder_fee3"
                  },
                  "id": "id7"
                }
              ]
            },
            "boleto": {
              "interest": {
                "days": 47,
                "type": "type1",
                "amount": 121
              },
              "fine": {
                "days": 29,
                "type": "type1",
                "amount": 153
              },
              "max_days_to_pay_past_due": 231
            },
            "manual_billing": true
          },
          "status": "status7",
          "duration": 151,
          "created_at": "created_at3",
          "updated_at": "updated_at1",
          "cycle": 91
        },
        "payment_method": "payment_method3",
        "currency": "currency7",
        "installments": 79,
        "status": "status9",
        "created_at": "2016-03-13T12:52:32.123Z",
        "updated_at": "2016-03-13T12:52:32.123Z",
        "customer": {},
        "card": {
          "id": "id1",
          "last_four_digits": "last_four_digits7",
          "brand": "brand5",
          "holder_name": "holder_name7",
          "exp_month": 27,
          "exp_year": 13,
          "status": "status7",
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
            "key0": "metadata2",
            "key1": "metadata3"
          },
          "type": "type9",
          "holder_document": "holder_document5",
          "deleted_at": "2016-03-13T12:52:32.123Z",
          "first_six_digits": "first_six_digits1",
          "label": "label1"
        },
        "items": [
          {},
          {}
        ],
        "statement_descriptor": "statement_descriptor7",
        "metadata": {
          "key0": "metadata4",
          "key1": "metadata3",
          "key2": "metadata2"
        },
        "setup": {
          "id": "id1",
          "description": "description1",
          "amount": 103,
          "status": "status3"
        },
        "gateway_affiliation_id": "gateway_affiliation_id3",
        "next_billing_at": "2016-03-13T12:52:32.123Z",
        "billing_day": 51,
        "minimum_price": 165,
        "canceled_at": "2016-03-13T12:52:32.123Z",
        "discounts": [
          {},
          {},
          {}
        ],
        "increments": [
          {}
        ],
        "boleto_due_days": 23,
        "split": {
          "enabled": true,
          "rules": [
            {},
            {}
          ]
        },
        "boleto": {
          "interest": {
            "days": 67,
            "type": "type7",
            "amount": 141
          },
          "fine": {
            "days": 223,
            "type": "type1",
            "amount": 41
          },
          "max_days_to_pay_past_due": 211
        },
        "manual_billing": true
      },
      "subscription_item": {}
    }
  ],
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
  "name": "name0",
  "quantity": 68,
  "cycles": 168,
  "deleted_at": "2016-03-13T12:52:32.123Z"
}
```

