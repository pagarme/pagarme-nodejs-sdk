
# Get Increment Response

Response object for getting a increment

## Structure

`GetIncrementResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | - |
| `value` | `number \| undefined` | Optional | - |
| `incrementType` | `string \| undefined` | Optional | - |
| `status` | `string \| undefined` | Optional | - |
| `createdAt` | `string \| undefined` | Optional | - |
| `cycles` | `number \| undefined` | Optional | - |
| `deletedAt` | `string \| undefined` | Optional | - |
| `description` | `string \| undefined` | Optional | - |
| `subscription` | [`GetSubscriptionResponse \| undefined`](../../doc/models/get-subscription-response.md) | Optional | - |
| `subscriptionItem` | [`GetSubscriptionItemResponse \| undefined`](../../doc/models/get-subscription-item-response.md) | Optional | The Subscription Item |

## Example (as JSON)

```json
{
  "id": "id0",
  "value": 251.52,
  "increment_type": "increment_type8",
  "status": "status8",
  "created_at": "2016-03-13T12:52:32.123Z",
  "cycles": 168,
  "deleted_at": "2016-03-13T12:52:32.123Z",
  "description": "description0",
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
  "subscription_item": {
    "id": "id6",
    "description": "description4",
    "status": "status2",
    "created_at": "2016-03-13T12:52:32.123Z",
    "updated_at": "2016-03-13T12:52:32.123Z",
    "pricing_scheme": {
      "price": 178,
      "scheme_type": "scheme_type2",
      "price_brackets": [
        {
          "start_quantity": 131,
          "price": 69,
          "end_quantity": 139,
          "overage_price": 153
        }
      ],
      "minimum_price": 18,
      "percentage": 231.4
    },
    "discounts": [
      {
        "id": "id7",
        "value": 30.59,
        "discount_type": "discount_type5",
        "status": "status9",
        "created_at": "2016-03-13T12:52:32.123Z",
        "cycles": 11,
        "deleted_at": "2016-03-13T12:52:32.123Z",
        "description": "description7",
        "subscription": {
          "id": "id7",
          "code": "code5",
          "start_at": "2016-03-13T12:52:32.123Z",
          "interval": "interval5",
          "interval_count": 55,
          "billing_type": "billing_type9",
          "current_cycle": {
            "start_at": "2016-03-13T12:52:32.123Z",
            "end_at": "2016-03-13T12:52:32.123Z",
            "id": "id5",
            "billing_at": "2016-03-13T12:52:32.123Z",
            "subscription": {
              "id": "id9",
              "code": "code7",
              "start_at": "2016-03-13T12:52:32.123Z",
              "interval": "interval7",
              "interval_count": 51,
              "billing_type": "billing_type7",
              "current_cycle": {
                "start_at": "2016-03-13T12:52:32.123Z",
                "end_at": "2016-03-13T12:52:32.123Z",
                "id": "id7",
                "billing_at": "2016-03-13T12:52:32.123Z",
                "subscription": {},
                "status": "status9",
                "duration": 35,
                "created_at": "created_at5",
                "updated_at": "updated_at3",
                "cycle": 231
              },
              "payment_method": "payment_method1",
              "currency": "currency9",
              "installments": 219,
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
                        "key0": "metadata8",
                        "key1": "metadata7"
                      },
                      "line_1": "line_15",
                      "line_2": "line_29",
                      "deleted_at": "2016-03-13T12:52:32.123Z"
                    },
                    "metadata": {
                      "key0": "metadata2",
                      "key1": "metadata1",
                      "key2": "metadata0"
                    },
                    "phones": {
                      "home_phone": {
                        "country_code": "country_code7",
                        "number": "number5",
                        "area_code": "area_code7"
                      },
                      "mobile_phone": {
                        "country_code": "country_code7",
                        "number": "number5",
                        "area_code": "area_code7"
                      }
                    },
                    "fb_id": 5,
                    "code": "code3",
                    "document_type": "document_type3"
                  },
                  "metadata": {
                    "key0": "metadata4"
                  },
                  "line_1": "line_19",
                  "line_2": "line_23",
                  "deleted_at": "2016-03-13T12:52:32.123Z"
                },
                "metadata": {
                  "key0": "metadata4"
                },
                "phones": {
                  "home_phone": {},
                  "mobile_phone": {}
                },
                "fb_id": 211,
                "code": "code7",
                "document_type": "document_type7"
              },
              "card": {
                "id": "id3",
                "last_four_digits": "last_four_digits9",
                "brand": "brand7",
                "holder_name": "holder_name9",
                "exp_month": 143,
                "exp_year": 153,
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
                {
                  "id": "id6",
                  "description": "description6",
                  "status": "status8",
                  "created_at": "2016-03-13T12:52:32.123Z",
                  "updated_at": "2016-03-13T12:52:32.123Z",
                  "pricing_scheme": {
                    "price": 170,
                    "scheme_type": "scheme_type8",
                    "price_brackets": [
                      {}
                    ],
                    "minimum_price": 74,
                    "percentage": 84.56
                  },
                  "discounts": [
                    {
                      "id": "id7",
                      "value": 82.19,
                      "discount_type": "discount_type5",
                      "status": "status9",
                      "created_at": "2016-03-13T12:52:32.123Z",
                      "cycles": 51,
                      "deleted_at": "2016-03-13T12:52:32.123Z",
                      "description": "description7",
                      "subscription": {},
                      "subscription_item": {}
                    }
                  ],
                  "increments": [
                    {
                      "id": "id5",
                      "value": 193.47,
                      "increment_type": "increment_type7",
                      "status": "status3",
                      "created_at": "2016-03-13T12:52:32.123Z",
                      "cycles": 85,
                      "deleted_at": "2016-03-13T12:52:32.123Z",
                      "description": "description5",
                      "subscription": {},
                      "subscription_item": {}
                    },
                    {
                      "id": "id6",
                      "value": 193.48,
                      "increment_type": "increment_type8",
                      "status": "status2",
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
                  "quantity": 96,
                  "cycles": 116,
                  "deleted_at": "2016-03-13T12:52:32.123Z"
                },
                {
                  "id": "id7",
                  "description": "description7",
                  "status": "status9",
                  "created_at": "2016-03-13T12:52:32.123Z",
                  "updated_at": "2016-03-13T12:52:32.123Z",
                  "pricing_scheme": {
                    "price": 169,
                    "scheme_type": "scheme_type9",
                    "price_brackets": [
                      {},
                      {}
                    ],
                    "minimum_price": 73,
                    "percentage": 84.57
                  },
                  "discounts": [
                    {
                      "id": "id8",
                      "value": 82.2,
                      "discount_type": "discount_type6",
                      "status": "status0",
                      "created_at": "2016-03-13T12:52:32.123Z",
                      "cycles": 52,
                      "deleted_at": "2016-03-13T12:52:32.123Z",
                      "description": "description8",
                      "subscription": {},
                      "subscription_item": {}
                    },
                    {
                      "id": "id9",
                      "value": 82.21,
                      "discount_type": "discount_type7",
                      "status": "status1",
                      "created_at": "2016-03-13T12:52:32.123Z",
                      "cycles": 53,
                      "deleted_at": "2016-03-13T12:52:32.123Z",
                      "description": "description9",
                      "subscription": {},
                      "subscription_item": {}
                    }
                  ],
                  "increments": [
                    {
                      "id": "id6",
                      "value": 193.48,
                      "increment_type": "increment_type8",
                      "status": "status2",
                      "created_at": "2016-03-13T12:52:32.123Z",
                      "cycles": 84,
                      "deleted_at": "2016-03-13T12:52:32.123Z",
                      "description": "description6",
                      "subscription": {},
                      "subscription_item": {}
                    },
                    {
                      "id": "id7",
                      "value": 193.49,
                      "increment_type": "increment_type9",
                      "status": "status1",
                      "created_at": "2016-03-13T12:52:32.123Z",
                      "cycles": 83,
                      "deleted_at": "2016-03-13T12:52:32.123Z",
                      "description": "description7",
                      "subscription": {},
                      "subscription_item": {}
                    },
                    {
                      "id": "id8",
                      "value": 193.5,
                      "increment_type": "increment_type0",
                      "status": "status0",
                      "created_at": "2016-03-13T12:52:32.123Z",
                      "cycles": 82,
                      "deleted_at": "2016-03-13T12:52:32.123Z",
                      "description": "description8",
                      "subscription": {},
                      "subscription_item": {}
                    }
                  ],
                  "subscription": {},
                  "name": "name7",
                  "quantity": 97,
                  "cycles": 117,
                  "deleted_at": "2016-03-13T12:52:32.123Z"
                },
                {
                  "id": "id8",
                  "description": "description8",
                  "status": "status0",
                  "created_at": "2016-03-13T12:52:32.123Z",
                  "updated_at": "2016-03-13T12:52:32.123Z",
                  "pricing_scheme": {
                    "price": 168,
                    "scheme_type": "scheme_type0",
                    "price_brackets": [
                      {},
                      {},
                      {}
                    ],
                    "minimum_price": 72,
                    "percentage": 84.58
                  },
                  "discounts": [
                    {
                      "id": "id9",
                      "value": 82.21,
                      "discount_type": "discount_type7",
                      "status": "status1",
                      "created_at": "2016-03-13T12:52:32.123Z",
                      "cycles": 53,
                      "deleted_at": "2016-03-13T12:52:32.123Z",
                      "description": "description9",
                      "subscription": {},
                      "subscription_item": {}
                    },
                    {
                      "id": "id0",
                      "value": 82.22,
                      "discount_type": "discount_type8",
                      "status": "status2",
                      "created_at": "2016-03-13T12:52:32.123Z",
                      "cycles": 54,
                      "deleted_at": "2016-03-13T12:52:32.123Z",
                      "description": "description0",
                      "subscription": {},
                      "subscription_item": {}
                    },
                    {
                      "id": "id1",
                      "value": 82.23,
                      "discount_type": "discount_type9",
                      "status": "status3",
                      "created_at": "2016-03-13T12:52:32.123Z",
                      "cycles": 55,
                      "deleted_at": "2016-03-13T12:52:32.123Z",
                      "description": "description1",
                      "subscription": {},
                      "subscription_item": {}
                    }
                  ],
                  "increments": [
                    {
                      "id": "id7",
                      "value": 193.49,
                      "increment_type": "increment_type9",
                      "status": "status1",
                      "created_at": "2016-03-13T12:52:32.123Z",
                      "cycles": 83,
                      "deleted_at": "2016-03-13T12:52:32.123Z",
                      "description": "description7",
                      "subscription": {},
                      "subscription_item": {}
                    }
                  ],
                  "subscription": {},
                  "name": "name8",
                  "quantity": 98,
                  "cycles": 118,
                  "deleted_at": "2016-03-13T12:52:32.123Z"
                }
              ],
              "statement_descriptor": "statement_descriptor9",
              "metadata": {
                "key0": "metadata6",
                "key1": "metadata5"
              },
              "setup": {
                "id": "id3",
                "description": "description3",
                "amount": 243,
                "status": "status5"
              },
              "gateway_affiliation_id": "gateway_affiliation_id5",
              "next_billing_at": "2016-03-13T12:52:32.123Z",
              "billing_day": 191,
              "minimum_price": 207,
              "canceled_at": "2016-03-13T12:52:32.123Z",
              "discounts": [
                {}
              ],
              "increments": [
                {},
                {}
              ],
              "boleto_due_days": 163,
              "split": {
                "enabled": true,
                "rules": [
                  {
                    "type": "type1",
                    "amount": 123,
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
                              "key0": "metadata0"
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
                            }
                          ],
                          "metadata": {
                            "key0": "metadata8"
                          },
                          "automatic_anticipation_settings": {
                            "enabled": true,
                            "type": "type5",
                            "volume_percentage": 201,
                            "delay": 89,
                            "days": [
                              65,
                              66,
                              67
                            ]
                          },
                          "transfer_settings": {
                            "transfer_enabled": true,
                            "transfer_interval": "transfer_interval3",
                            "transfer_day": 111
                          },
                          "code": "code9",
                          "payment_mode": "payment_mode5"
                        },
                        "metadata": {
                          "key0": "metadata6"
                        },
                        "pix_key": "pix_key7"
                      },
                      "gateway_recipients": [
                        {}
                      ],
                      "metadata": {
                        "key0": "metadata2"
                      },
                      "automatic_anticipation_settings": {
                        "enabled": true,
                        "type": "type5",
                        "volume_percentage": 15,
                        "delay": 19,
                        "days": [
                          251,
                          252,
                          253
                        ]
                      },
                      "transfer_settings": {
                        "transfer_enabled": true,
                        "transfer_interval": "transfer_interval3",
                        "transfer_day": 181
                      },
                      "code": "code9",
                      "payment_mode": "payment_mode5"
                    },
                    "gateway_id": "gateway_id1",
                    "options": {
                      "liable": true,
                      "charge_processing_fee": true,
                      "charge_remainder_fee": "charge_remainder_fee5"
                    },
                    "id": "id9"
                  },
                  {
                    "type": "type0",
                    "amount": 124,
                    "recipient": {
                      "id": "id2",
                      "name": "name2",
                      "email": "email4",
                      "document": "document4",
                      "description": "description8",
                      "type": "type8",
                      "status": "status6",
                      "created_at": "2016-03-13T12:52:32.123Z",
                      "updated_at": "2016-03-13T12:52:32.123Z",
                      "deleted_at": "2016-03-13T12:52:32.123Z",
                      "default_bank_account": {
                        "id": "id0",
                        "holder_name": "holder_name6",
                        "holder_type": "holder_type2",
                        "bank": "bank8",
                        "branch_number": "branch_number6",
                        "branch_check_digit": "branch_check_digit6",
                        "account_number": "account_number0",
                        "account_check_digit": "account_check_digit6",
                        "type": "type0",
                        "status": "status2",
                        "created_at": "2016-03-13T12:52:32.123Z",
                        "updated_at": "2016-03-13T12:52:32.123Z",
                        "deleted_at": "2016-03-13T12:52:32.123Z",
                        "recipient": {
                          "id": "id2",
                          "name": "name2",
                          "email": "email4",
                          "document": "document6",
                          "description": "description2",
                          "type": "type8",
                          "status": "status4",
                          "created_at": "2016-03-13T12:52:32.123Z",
                          "updated_at": "2016-03-13T12:52:32.123Z",
                          "deleted_at": "2016-03-13T12:52:32.123Z",
                          "default_bank_account": {
                            "id": "id0",
                            "holder_name": "holder_name6",
                            "holder_type": "holder_type2",
                            "bank": "bank8",
                            "branch_number": "branch_number6",
                            "branch_check_digit": "branch_check_digit6",
                            "account_number": "account_number0",
                            "account_check_digit": "account_check_digit6",
                            "type": "type0",
                            "status": "status2",
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
                            "key0": "metadata9",
                            "key1": "metadata8",
                            "key2": "metadata7"
                          },
                          "automatic_anticipation_settings": {
                            "enabled": false,
                            "type": "type4",
                            "volume_percentage": 200,
                            "delay": 90,
                            "days": [
                              66
                            ]
                          },
                          "transfer_settings": {
                            "transfer_enabled": false,
                            "transfer_interval": "transfer_interval2",
                            "transfer_day": 110
                          },
                          "code": "code0",
                          "payment_mode": "payment_mode6"
                        },
                        "metadata": {
                          "key0": "metadata7",
                          "key1": "metadata6",
                          "key2": "metadata5"
                        },
                        "pix_key": "pix_key6"
                      },
                      "gateway_recipients": [
                        {},
                        {}
                      ],
                      "metadata": {
                        "key0": "metadata1",
                        "key1": "metadata2",
                        "key2": "metadata3"
                      },
                      "automatic_anticipation_settings": {
                        "enabled": false,
                        "type": "type4",
                        "volume_percentage": 14,
                        "delay": 20,
                        "days": [
                          252
                        ]
                      },
                      "transfer_settings": {
                        "transfer_enabled": false,
                        "transfer_interval": "transfer_interval2",
                        "transfer_day": 180
                      },
                      "code": "code0",
                      "payment_mode": "payment_mode4"
                    },
                    "gateway_id": "gateway_id0",
                    "options": {
                      "liable": false,
                      "charge_processing_fee": false,
                      "charge_remainder_fee": "charge_remainder_fee6"
                    },
                    "id": "id0"
                  },
                  {
                    "type": "type9",
                    "amount": 125,
                    "recipient": {
                      "id": "id3",
                      "name": "name3",
                      "email": "email3",
                      "document": "document3",
                      "description": "description7",
                      "type": "type7",
                      "status": "status5",
                      "created_at": "2016-03-13T12:52:32.123Z",
                      "updated_at": "2016-03-13T12:52:32.123Z",
                      "deleted_at": "2016-03-13T12:52:32.123Z",
                      "default_bank_account": {
                        "id": "id1",
                        "holder_name": "holder_name7",
                        "holder_type": "holder_type3",
                        "bank": "bank9",
                        "branch_number": "branch_number7",
                        "branch_check_digit": "branch_check_digit7",
                        "account_number": "account_number1",
                        "account_check_digit": "account_check_digit7",
                        "type": "type9",
                        "status": "status3",
                        "created_at": "2016-03-13T12:52:32.123Z",
                        "updated_at": "2016-03-13T12:52:32.123Z",
                        "deleted_at": "2016-03-13T12:52:32.123Z",
                        "recipient": {
                          "id": "id3",
                          "name": "name3",
                          "email": "email3",
                          "document": "document7",
                          "description": "description3",
                          "type": "type7",
                          "status": "status5",
                          "created_at": "2016-03-13T12:52:32.123Z",
                          "updated_at": "2016-03-13T12:52:32.123Z",
                          "deleted_at": "2016-03-13T12:52:32.123Z",
                          "default_bank_account": {
                            "id": "id1",
                            "holder_name": "holder_name7",
                            "holder_type": "holder_type3",
                            "bank": "bank9",
                            "branch_number": "branch_number7",
                            "branch_check_digit": "branch_check_digit7",
                            "account_number": "account_number1",
                            "account_check_digit": "account_check_digit7",
                            "type": "type1",
                            "status": "status3",
                            "created_at": "2016-03-13T12:52:32.123Z",
                            "updated_at": "2016-03-13T12:52:32.123Z",
                            "deleted_at": "2016-03-13T12:52:32.123Z",
                            "recipient": {},
                            "metadata": {
                              "key0": "metadata8",
                              "key1": "metadata7",
                              "key2": "metadata6"
                            },
                            "pix_key": "pix_key5"
                          },
                          "gateway_recipients": [
                            {
                              "gateway": "gateway7",
                              "status": "status9",
                              "pgid": "pgid3",
                              "created_at": "created_at5",
                              "updated_at": "updated_at3"
                            },
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
                            "key0": "metadata0",
                            "key1": "metadata9"
                          },
                          "automatic_anticipation_settings": {
                            "enabled": true,
                            "type": "type3",
                            "volume_percentage": 199,
                            "delay": 91,
                            "days": [
                              67,
                              68
                            ]
                          },
                          "transfer_settings": {
                            "transfer_enabled": true,
                            "transfer_interval": "transfer_interval1",
                            "transfer_day": 109
                          },
                          "code": "code1",
                          "payment_mode": "payment_mode7"
                        },
                        "metadata": {
                          "key0": "metadata8",
                          "key1": "metadata7"
                        },
                        "pix_key": "pix_key5"
                      },
                      "gateway_recipients": [
                        {},
                        {},
                        {}
                      ],
                      "metadata": {
                        "key0": "metadata0",
                        "key1": "metadata1"
                      },
                      "automatic_anticipation_settings": {
                        "enabled": true,
                        "type": "type3",
                        "volume_percentage": 13,
                        "delay": 21,
                        "days": [
                          253,
                          254
                        ]
                      },
                      "transfer_settings": {
                        "transfer_enabled": true,
                        "transfer_interval": "transfer_interval1",
                        "transfer_day": 179
                      },
                      "code": "code1",
                      "payment_mode": "payment_mode3"
                    },
                    "gateway_id": "gateway_id9",
                    "options": {
                      "liable": true,
                      "charge_processing_fee": true,
                      "charge_remainder_fee": "charge_remainder_fee7"
                    },
                    "id": "id1"
                  }
                ]
              },
              "boleto": {
                "interest": {
                  "days": 183,
                  "type": "type9",
                  "amount": 1
                },
                "fine": {
                  "days": 107,
                  "type": "type9",
                  "amount": 181
                },
                "max_days_to_pay_past_due": 95
              },
              "manual_billing": true
            },
            "status": "status3",
            "duration": 39,
            "created_at": "created_at3",
            "updated_at": "updated_at1",
            "cycle": 235
          },
          "payment_method": "payment_method3",
          "currency": "currency3",
          "installments": 223,
          "status": "status1",
          "created_at": "2016-03-13T12:52:32.123Z",
          "updated_at": "2016-03-13T12:52:32.123Z",
          "customer": {},
          "card": {
            "id": "id9",
            "last_four_digits": "last_four_digits5",
            "brand": "brand3",
            "holder_name": "holder_name5",
            "exp_month": 201,
            "exp_year": 95,
            "status": "status9",
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
              "key0": "metadata4",
              "key1": "metadata5"
            },
            "type": "type1",
            "holder_document": "holder_document7",
            "deleted_at": "2016-03-13T12:52:32.123Z",
            "first_six_digits": "first_six_digits9",
            "label": "label9"
          },
          "items": [
            {},
            {},
            {}
          ],
          "statement_descriptor": "statement_descriptor7",
          "metadata": {
            "key0": "metadata6",
            "key1": "metadata7"
          },
          "setup": {
            "id": "id1",
            "description": "description9",
            "amount": 9,
            "status": "status7"
          },
          "gateway_affiliation_id": "gateway_affiliation_id3",
          "next_billing_at": "2016-03-13T12:52:32.123Z",
          "billing_day": 61,
          "minimum_price": 203,
          "canceled_at": "2016-03-13T12:52:32.123Z",
          "discounts": [
            {}
          ],
          "increments": [
            {},
            {},
            {}
          ],
          "boleto_due_days": 167,
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
              "days": 133,
              "type": "type7",
              "amount": 207
            },
            "fine": {
              "days": 115,
              "type": "type5",
              "amount": 67
            },
            "max_days_to_pay_past_due": 145
          },
          "manual_billing": true
        },
        "subscription_item": {}
      },
      {
        "id": "id8",
        "value": 30.6,
        "discount_type": "discount_type6",
        "status": "status0",
        "created_at": "2016-03-13T12:52:32.123Z",
        "cycles": 12,
        "deleted_at": "2016-03-13T12:52:32.123Z",
        "description": "description8",
        "subscription": {
          "id": "id6",
          "code": "code4",
          "start_at": "2016-03-13T12:52:32.123Z",
          "interval": "interval6",
          "interval_count": 54,
          "billing_type": "billing_type0",
          "current_cycle": {
            "start_at": "2016-03-13T12:52:32.123Z",
            "end_at": "2016-03-13T12:52:32.123Z",
            "id": "id4",
            "billing_at": "2016-03-13T12:52:32.123Z",
            "subscription": {
              "id": "id0",
              "code": "code8",
              "start_at": "2016-03-13T12:52:32.123Z",
              "interval": "interval8",
              "interval_count": 52,
              "billing_type": "billing_type6",
              "current_cycle": {
                "start_at": "2016-03-13T12:52:32.123Z",
                "end_at": "2016-03-13T12:52:32.123Z",
                "id": "id8",
                "billing_at": "2016-03-13T12:52:32.123Z",
                "subscription": {},
                "status": "status0",
                "duration": 36,
                "created_at": "created_at6",
                "updated_at": "updated_at4",
                "cycle": 232
              },
              "payment_method": "payment_method0",
              "currency": "currency0",
              "installments": 220,
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
                    "type": "type6",
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
                        "key1": "metadata6",
                        "key2": "metadata5"
                      },
                      "line_1": "line_16",
                      "line_2": "line_20",
                      "deleted_at": "2016-03-13T12:52:32.123Z"
                    },
                    "metadata": {
                      "key0": "metadata3",
                      "key1": "metadata2"
                    },
                    "phones": {
                      "home_phone": {
                        "country_code": "country_code8",
                        "number": "number6",
                        "area_code": "area_code8"
                      },
                      "mobile_phone": {
                        "country_code": "country_code8",
                        "number": "number4",
                        "area_code": "area_code8"
                      }
                    },
                    "fb_id": 6,
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
                  "key0": "metadata3",
                  "key1": "metadata4",
                  "key2": "metadata5"
                },
                "phones": {
                  "home_phone": {},
                  "mobile_phone": {}
                },
                "fb_id": 212,
                "code": "code8",
                "document_type": "document_type8"
              },
              "card": {
                "id": "id4",
                "last_four_digits": "last_four_digits0",
                "brand": "brand8",
                "holder_name": "holder_name0",
                "exp_month": 142,
                "exp_year": 154,
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
                {
                  "id": "id7",
                  "description": "description7",
                  "status": "status9",
                  "created_at": "2016-03-13T12:52:32.123Z",
                  "updated_at": "2016-03-13T12:52:32.123Z",
                  "pricing_scheme": {
                    "price": 169,
                    "scheme_type": "scheme_type9",
                    "price_brackets": [
                      {},
                      {}
                    ],
                    "minimum_price": 73,
                    "percentage": 84.57
                  },
                  "discounts": [
                    {
                      "id": "id8",
                      "value": 82.2,
                      "discount_type": "discount_type6",
                      "status": "status0",
                      "created_at": "2016-03-13T12:52:32.123Z",
                      "cycles": 52,
                      "deleted_at": "2016-03-13T12:52:32.123Z",
                      "description": "description8",
                      "subscription": {},
                      "subscription_item": {}
                    },
                    {
                      "id": "id9",
                      "value": 82.21,
                      "discount_type": "discount_type7",
                      "status": "status1",
                      "created_at": "2016-03-13T12:52:32.123Z",
                      "cycles": 53,
                      "deleted_at": "2016-03-13T12:52:32.123Z",
                      "description": "description9",
                      "subscription": {},
                      "subscription_item": {}
                    }
                  ],
                  "increments": [
                    {
                      "id": "id6",
                      "value": 193.48,
                      "increment_type": "increment_type8",
                      "status": "status2",
                      "created_at": "2016-03-13T12:52:32.123Z",
                      "cycles": 84,
                      "deleted_at": "2016-03-13T12:52:32.123Z",
                      "description": "description6",
                      "subscription": {},
                      "subscription_item": {}
                    },
                    {
                      "id": "id7",
                      "value": 193.49,
                      "increment_type": "increment_type9",
                      "status": "status1",
                      "created_at": "2016-03-13T12:52:32.123Z",
                      "cycles": 83,
                      "deleted_at": "2016-03-13T12:52:32.123Z",
                      "description": "description7",
                      "subscription": {},
                      "subscription_item": {}
                    },
                    {
                      "id": "id8",
                      "value": 193.5,
                      "increment_type": "increment_type0",
                      "status": "status0",
                      "created_at": "2016-03-13T12:52:32.123Z",
                      "cycles": 82,
                      "deleted_at": "2016-03-13T12:52:32.123Z",
                      "description": "description8",
                      "subscription": {},
                      "subscription_item": {}
                    }
                  ],
                  "subscription": {},
                  "name": "name7",
                  "quantity": 97,
                  "cycles": 117,
                  "deleted_at": "2016-03-13T12:52:32.123Z"
                }
              ],
              "statement_descriptor": "statement_descriptor0",
              "metadata": {
                "key0": "metadata7"
              },
              "setup": {
                "id": "id4",
                "description": "description4",
                "amount": 244,
                "status": "status6"
              },
              "gateway_affiliation_id": "gateway_affiliation_id6",
              "next_billing_at": "2016-03-13T12:52:32.123Z",
              "billing_day": 192,
              "minimum_price": 206,
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
              "boleto_due_days": 164,
              "split": {
                "enabled": false,
                "rules": [
                  {
                    "type": "type0",
                    "amount": 124,
                    "recipient": {
                      "id": "id2",
                      "name": "name2",
                      "email": "email4",
                      "document": "document4",
                      "description": "description8",
                      "type": "type8",
                      "status": "status6",
                      "created_at": "2016-03-13T12:52:32.123Z",
                      "updated_at": "2016-03-13T12:52:32.123Z",
                      "deleted_at": "2016-03-13T12:52:32.123Z",
                      "default_bank_account": {
                        "id": "id0",
                        "holder_name": "holder_name6",
                        "holder_type": "holder_type2",
                        "bank": "bank8",
                        "branch_number": "branch_number6",
                        "branch_check_digit": "branch_check_digit6",
                        "account_number": "account_number0",
                        "account_check_digit": "account_check_digit6",
                        "type": "type0",
                        "status": "status2",
                        "created_at": "2016-03-13T12:52:32.123Z",
                        "updated_at": "2016-03-13T12:52:32.123Z",
                        "deleted_at": "2016-03-13T12:52:32.123Z",
                        "recipient": {
                          "id": "id2",
                          "name": "name2",
                          "email": "email4",
                          "document": "document6",
                          "description": "description2",
                          "type": "type8",
                          "status": "status4",
                          "created_at": "2016-03-13T12:52:32.123Z",
                          "updated_at": "2016-03-13T12:52:32.123Z",
                          "deleted_at": "2016-03-13T12:52:32.123Z",
                          "default_bank_account": {
                            "id": "id0",
                            "holder_name": "holder_name6",
                            "holder_type": "holder_type2",
                            "bank": "bank8",
                            "branch_number": "branch_number6",
                            "branch_check_digit": "branch_check_digit6",
                            "account_number": "account_number0",
                            "account_check_digit": "account_check_digit6",
                            "type": "type0",
                            "status": "status2",
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
                            "key0": "metadata9",
                            "key1": "metadata8",
                            "key2": "metadata7"
                          },
                          "automatic_anticipation_settings": {
                            "enabled": false,
                            "type": "type4",
                            "volume_percentage": 200,
                            "delay": 90,
                            "days": [
                              66
                            ]
                          },
                          "transfer_settings": {
                            "transfer_enabled": false,
                            "transfer_interval": "transfer_interval2",
                            "transfer_day": 110
                          },
                          "code": "code0",
                          "payment_mode": "payment_mode6"
                        },
                        "metadata": {
                          "key0": "metadata7",
                          "key1": "metadata6",
                          "key2": "metadata5"
                        },
                        "pix_key": "pix_key6"
                      },
                      "gateway_recipients": [
                        {},
                        {}
                      ],
                      "metadata": {
                        "key0": "metadata1",
                        "key1": "metadata2",
                        "key2": "metadata3"
                      },
                      "automatic_anticipation_settings": {
                        "enabled": false,
                        "type": "type4",
                        "volume_percentage": 14,
                        "delay": 20,
                        "days": [
                          252
                        ]
                      },
                      "transfer_settings": {
                        "transfer_enabled": false,
                        "transfer_interval": "transfer_interval2",
                        "transfer_day": 180
                      },
                      "code": "code0",
                      "payment_mode": "payment_mode4"
                    },
                    "gateway_id": "gateway_id0",
                    "options": {
                      "liable": false,
                      "charge_processing_fee": false,
                      "charge_remainder_fee": "charge_remainder_fee6"
                    },
                    "id": "id0"
                  }
                ]
              },
              "boleto": {
                "interest": {
                  "days": 182,
                  "type": "type0",
                  "amount": 0
                },
                "fine": {
                  "days": 108,
                  "type": "type8",
                  "amount": 182
                },
                "max_days_to_pay_past_due": 96
              },
              "manual_billing": false
            },
            "status": "status4",
            "duration": 38,
            "created_at": "created_at2",
            "updated_at": "updated_at0",
            "cycle": 234
          },
          "payment_method": "payment_method4",
          "currency": "currency4",
          "installments": 222,
          "status": "status2",
          "created_at": "2016-03-13T12:52:32.123Z",
          "updated_at": "2016-03-13T12:52:32.123Z",
          "customer": {},
          "card": {
            "id": "id0",
            "last_four_digits": "last_four_digits6",
            "brand": "brand4",
            "holder_name": "holder_name6",
            "exp_month": 200,
            "exp_year": 96,
            "status": "status8",
            "created_at": "2016-03-13T12:52:32.123Z",
            "updated_at": "2016-03-13T12:52:32.123Z",
            "billing_address": {
              "street": "street2",
              "number": "number0",
              "zip_code": "zip_code6",
              "neighborhood": "neighborhood8",
              "city": "city8",
              "state": "state2",
              "country": "country6",
              "complement": "complement2",
              "line_1": "line_14",
              "line_2": "line_20"
            },
            "customer": {},
            "metadata": {
              "key0": "metadata3"
            },
            "type": "type0",
            "holder_document": "holder_document6",
            "deleted_at": "2016-03-13T12:52:32.123Z",
            "first_six_digits": "first_six_digits0",
            "label": "label0"
          },
          "items": [
            {},
            {}
          ],
          "statement_descriptor": "statement_descriptor6",
          "metadata": {
            "key0": "metadata7",
            "key1": "metadata8",
            "key2": "metadata9"
          },
          "setup": {
            "id": "id0",
            "description": "description0",
            "amount": 10,
            "status": "status8"
          },
          "gateway_affiliation_id": "gateway_affiliation_id2",
          "next_billing_at": "2016-03-13T12:52:32.123Z",
          "billing_day": 62,
          "minimum_price": 204,
          "canceled_at": "2016-03-13T12:52:32.123Z",
          "discounts": [
            {},
            {},
            {}
          ],
          "increments": [
            {}
          ],
          "boleto_due_days": 166,
          "split": {
            "enabled": false,
            "rules": [
              {},
              {}
            ]
          },
          "boleto": {
            "interest": {
              "days": 132,
              "type": "type6",
              "amount": 206
            },
            "fine": {
              "days": 114,
              "type": "type6",
              "amount": 68
            },
            "max_days_to_pay_past_due": 146
          },
          "manual_billing": false
        },
        "subscription_item": {}
      }
    ],
    "increments": [
      {},
      {}
    ],
    "subscription": {},
    "name": "name6",
    "quantity": 56,
    "cycles": 180,
    "deleted_at": "2016-03-13T12:52:32.123Z"
  }
}
```

