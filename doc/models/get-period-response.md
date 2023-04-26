
# Get Period Response

Response object for getting a period

## Structure

`GetPeriodResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `startAt` | `string \| undefined` | Optional | - |
| `endAt` | `string \| undefined` | Optional | - |
| `id` | `string \| undefined` | Optional | - |
| `billingAt` | `string \| undefined` | Optional | - |
| `subscription` | [`GetSubscriptionResponse \| undefined`](../../doc/models/get-subscription-response.md) | Optional | - |
| `status` | `string \| undefined` | Optional | - |
| `duration` | `number \| undefined` | Optional | - |
| `createdAt` | `string \| undefined` | Optional | - |
| `updatedAt` | `string \| undefined` | Optional | - |
| `cycle` | `number \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "start_at": "2016-03-13T12:52:32.123Z",
  "end_at": "2016-03-13T12:52:32.123Z",
  "id": "id0",
  "billing_at": "2016-03-13T12:52:32.123Z",
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
  "status": "status8",
  "duration": 112,
  "created_at": "created_at2",
  "updated_at": "updated_at4",
  "cycle": 52
}
```

