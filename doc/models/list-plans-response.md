
# List Plans Response

Response object for listing plans

## Structure

`ListPlansResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`GetPlanResponse[] \| undefined`](../../doc/models/get-plan-response.md) | Optional | The plan objects |
| `paging` | [`PagingResponse \| undefined`](../../doc/models/paging-response.md) | Optional | Paging object |

## Example (as JSON)

```json
{
  "data": [
    {
      "id": "id5",
      "name": "name5",
      "description": "description5",
      "url": "url9",
      "statement_descriptor": "statement_descriptor5",
      "interval": "interval3",
      "interval_count": 249,
      "billing_type": "billing_type9",
      "payment_methods": [
        "payment_methods0",
        "payment_methods1",
        "payment_methods2"
      ],
      "installments": [
        30,
        31,
        32
      ],
      "status": "status7",
      "currency": "currency5",
      "created_at": "2016-03-13T12:52:32.123Z",
      "updated_at": "2016-03-13T12:52:32.123Z",
      "items": [
        {
          "id": "id2",
          "name": "name2",
          "status": "status4",
          "created_at": "2016-03-13T12:52:32.123Z",
          "updated_at": "2016-03-13T12:52:32.123Z",
          "pricing_scheme": {
            "price": 28,
            "scheme_type": "scheme_type4",
            "price_brackets": [
              {
                "start_quantity": 237,
                "price": 175,
                "end_quantity": 245,
                "overage_price": 3
              },
              {
                "start_quantity": 238,
                "price": 176,
                "end_quantity": 246,
                "overage_price": 4
              },
              {
                "start_quantity": 239,
                "price": 177,
                "end_quantity": 247,
                "overage_price": 5
              }
            ],
            "minimum_price": 124,
            "percentage": 132.62
          },
          "description": "description2",
          "plan": {
            "id": "id8",
            "name": "name8",
            "description": "description8",
            "url": "url2",
            "statement_descriptor": "statement_descriptor8",
            "interval": "interval6",
            "interval_count": 242,
            "billing_type": "billing_type2",
            "payment_methods": [
              "payment_methods3",
              "payment_methods4",
              "payment_methods5"
            ],
            "installments": [
              23,
              24,
              25
            ],
            "status": "status0",
            "currency": "currency8",
            "created_at": "2016-03-13T12:52:32.123Z",
            "updated_at": "2016-03-13T12:52:32.123Z",
            "items": [
              {
                "id": "id5",
                "name": "name5",
                "status": "status7",
                "created_at": "2016-03-13T12:52:32.123Z",
                "updated_at": "2016-03-13T12:52:32.123Z",
                "pricing_scheme": {
                  "price": 21,
                  "scheme_type": "scheme_type7",
                  "price_brackets": [
                    {},
                    {},
                    {}
                  ],
                  "minimum_price": 117,
                  "percentage": 42.95
                },
                "description": "description5",
                "plan": {},
                "quantity": 31,
                "cycles": 51,
                "deleted_at": "2016-03-13T12:52:32.123Z"
              },
              {
                "id": "id6",
                "name": "name6",
                "status": "status8",
                "created_at": "2016-03-13T12:52:32.123Z",
                "updated_at": "2016-03-13T12:52:32.123Z",
                "pricing_scheme": {
                  "price": 22,
                  "scheme_type": "scheme_type8",
                  "price_brackets": [
                    {}
                  ],
                  "minimum_price": 118,
                  "percentage": 42.96
                },
                "description": "description6",
                "plan": {},
                "quantity": 32,
                "cycles": 52,
                "deleted_at": "2016-03-13T12:52:32.123Z"
              }
            ],
            "billing_days": [
              243,
              244
            ],
            "shippable": false,
            "metadata": {
              "key0": "metadata1",
              "key1": "metadata0"
            },
            "trial_period_days": 214,
            "minimum_price": 240,
            "deleted_at": "2016-03-13T12:52:32.123Z"
          },
          "quantity": 38,
          "cycles": 58,
          "deleted_at": "2016-03-13T12:52:32.123Z"
        },
        {
          "id": "id3",
          "name": "name3",
          "status": "status5",
          "created_at": "2016-03-13T12:52:32.123Z",
          "updated_at": "2016-03-13T12:52:32.123Z",
          "pricing_scheme": {
            "price": 29,
            "scheme_type": "scheme_type5",
            "price_brackets": [
              {
                "start_quantity": 238,
                "price": 176,
                "end_quantity": 246,
                "overage_price": 4
              }
            ],
            "minimum_price": 125,
            "percentage": 132.63
          },
          "description": "description3",
          "plan": {
            "id": "id9",
            "name": "name9",
            "description": "description9",
            "url": "url3",
            "statement_descriptor": "statement_descriptor9",
            "interval": "interval7",
            "interval_count": 243,
            "billing_type": "billing_type3",
            "payment_methods": [
              "payment_methods4"
            ],
            "installments": [
              24
            ],
            "status": "status1",
            "currency": "currency9",
            "created_at": "2016-03-13T12:52:32.123Z",
            "updated_at": "2016-03-13T12:52:32.123Z",
            "items": [
              {
                "id": "id6",
                "name": "name6",
                "status": "status8",
                "created_at": "2016-03-13T12:52:32.123Z",
                "updated_at": "2016-03-13T12:52:32.123Z",
                "pricing_scheme": {
                  "price": 22,
                  "scheme_type": "scheme_type8",
                  "price_brackets": [
                    {}
                  ],
                  "minimum_price": 118,
                  "percentage": 42.96
                },
                "description": "description6",
                "plan": {},
                "quantity": 32,
                "cycles": 52,
                "deleted_at": "2016-03-13T12:52:32.123Z"
              },
              {
                "id": "id7",
                "name": "name7",
                "status": "status9",
                "created_at": "2016-03-13T12:52:32.123Z",
                "updated_at": "2016-03-13T12:52:32.123Z",
                "pricing_scheme": {
                  "price": 23,
                  "scheme_type": "scheme_type9",
                  "price_brackets": [
                    {},
                    {}
                  ],
                  "minimum_price": 119,
                  "percentage": 42.97
                },
                "description": "description7",
                "plan": {},
                "quantity": 33,
                "cycles": 53,
                "deleted_at": "2016-03-13T12:52:32.123Z"
              },
              {
                "id": "id8",
                "name": "name8",
                "status": "status0",
                "created_at": "2016-03-13T12:52:32.123Z",
                "updated_at": "2016-03-13T12:52:32.123Z",
                "pricing_scheme": {
                  "price": 24,
                  "scheme_type": "scheme_type0",
                  "price_brackets": [
                    {},
                    {},
                    {}
                  ],
                  "minimum_price": 120,
                  "percentage": 42.98
                },
                "description": "description8",
                "plan": {},
                "quantity": 34,
                "cycles": 54,
                "deleted_at": "2016-03-13T12:52:32.123Z"
              }
            ],
            "billing_days": [
              244,
              245,
              246
            ],
            "shippable": true,
            "metadata": {
              "key0": "metadata0",
              "key1": "metadata9",
              "key2": "metadata8"
            },
            "trial_period_days": 215,
            "minimum_price": 241,
            "deleted_at": "2016-03-13T12:52:32.123Z"
          },
          "quantity": 39,
          "cycles": 59,
          "deleted_at": "2016-03-13T12:52:32.123Z"
        }
      ],
      "billing_days": [
        250,
        251
      ],
      "shippable": true,
      "metadata": {
        "key0": "metadata4",
        "key1": "metadata3"
      },
      "trial_period_days": 221,
      "minimum_price": 247,
      "deleted_at": "2016-03-13T12:52:32.123Z"
    },
    {
      "id": "id6",
      "name": "name6",
      "description": "description6",
      "url": "url0",
      "statement_descriptor": "statement_descriptor6",
      "interval": "interval4",
      "interval_count": 250,
      "billing_type": "billing_type0",
      "payment_methods": [
        "payment_methods1"
      ],
      "installments": [
        31
      ],
      "status": "status8",
      "currency": "currency6",
      "created_at": "2016-03-13T12:52:32.123Z",
      "updated_at": "2016-03-13T12:52:32.123Z",
      "items": [
        {
          "id": "id3",
          "name": "name3",
          "status": "status5",
          "created_at": "2016-03-13T12:52:32.123Z",
          "updated_at": "2016-03-13T12:52:32.123Z",
          "pricing_scheme": {
            "price": 29,
            "scheme_type": "scheme_type5",
            "price_brackets": [
              {
                "start_quantity": 238,
                "price": 176,
                "end_quantity": 246,
                "overage_price": 4
              }
            ],
            "minimum_price": 125,
            "percentage": 132.63
          },
          "description": "description3",
          "plan": {
            "id": "id9",
            "name": "name9",
            "description": "description9",
            "url": "url3",
            "statement_descriptor": "statement_descriptor9",
            "interval": "interval7",
            "interval_count": 243,
            "billing_type": "billing_type3",
            "payment_methods": [
              "payment_methods4"
            ],
            "installments": [
              24
            ],
            "status": "status1",
            "currency": "currency9",
            "created_at": "2016-03-13T12:52:32.123Z",
            "updated_at": "2016-03-13T12:52:32.123Z",
            "items": [
              {
                "id": "id6",
                "name": "name6",
                "status": "status8",
                "created_at": "2016-03-13T12:52:32.123Z",
                "updated_at": "2016-03-13T12:52:32.123Z",
                "pricing_scheme": {
                  "price": 22,
                  "scheme_type": "scheme_type8",
                  "price_brackets": [
                    {}
                  ],
                  "minimum_price": 118,
                  "percentage": 42.96
                },
                "description": "description6",
                "plan": {},
                "quantity": 32,
                "cycles": 52,
                "deleted_at": "2016-03-13T12:52:32.123Z"
              },
              {
                "id": "id7",
                "name": "name7",
                "status": "status9",
                "created_at": "2016-03-13T12:52:32.123Z",
                "updated_at": "2016-03-13T12:52:32.123Z",
                "pricing_scheme": {
                  "price": 23,
                  "scheme_type": "scheme_type9",
                  "price_brackets": [
                    {},
                    {}
                  ],
                  "minimum_price": 119,
                  "percentage": 42.97
                },
                "description": "description7",
                "plan": {},
                "quantity": 33,
                "cycles": 53,
                "deleted_at": "2016-03-13T12:52:32.123Z"
              },
              {
                "id": "id8",
                "name": "name8",
                "status": "status0",
                "created_at": "2016-03-13T12:52:32.123Z",
                "updated_at": "2016-03-13T12:52:32.123Z",
                "pricing_scheme": {
                  "price": 24,
                  "scheme_type": "scheme_type0",
                  "price_brackets": [
                    {},
                    {},
                    {}
                  ],
                  "minimum_price": 120,
                  "percentage": 42.98
                },
                "description": "description8",
                "plan": {},
                "quantity": 34,
                "cycles": 54,
                "deleted_at": "2016-03-13T12:52:32.123Z"
              }
            ],
            "billing_days": [
              244,
              245,
              246
            ],
            "shippable": true,
            "metadata": {
              "key0": "metadata0",
              "key1": "metadata9",
              "key2": "metadata8"
            },
            "trial_period_days": 215,
            "minimum_price": 241,
            "deleted_at": "2016-03-13T12:52:32.123Z"
          },
          "quantity": 39,
          "cycles": 59,
          "deleted_at": "2016-03-13T12:52:32.123Z"
        },
        {
          "id": "id4",
          "name": "name4",
          "status": "status6",
          "created_at": "2016-03-13T12:52:32.123Z",
          "updated_at": "2016-03-13T12:52:32.123Z",
          "pricing_scheme": {
            "price": 30,
            "scheme_type": "scheme_type6",
            "price_brackets": [
              {
                "start_quantity": 239,
                "price": 177,
                "end_quantity": 247,
                "overage_price": 5
              },
              {
                "start_quantity": 240,
                "price": 178,
                "end_quantity": 248,
                "overage_price": 6
              }
            ],
            "minimum_price": 126,
            "percentage": 132.64
          },
          "description": "description4",
          "plan": {
            "id": "id0",
            "name": "name0",
            "description": "description0",
            "url": "url4",
            "statement_descriptor": "statement_descriptor0",
            "interval": "interval8",
            "interval_count": 244,
            "billing_type": "billing_type4",
            "payment_methods": [
              "payment_methods5",
              "payment_methods6"
            ],
            "installments": [
              25,
              26
            ],
            "status": "status2",
            "currency": "currency0",
            "created_at": "2016-03-13T12:52:32.123Z",
            "updated_at": "2016-03-13T12:52:32.123Z",
            "items": [
              {
                "id": "id7",
                "name": "name7",
                "status": "status9",
                "created_at": "2016-03-13T12:52:32.123Z",
                "updated_at": "2016-03-13T12:52:32.123Z",
                "pricing_scheme": {
                  "price": 23,
                  "scheme_type": "scheme_type9",
                  "price_brackets": [
                    {},
                    {}
                  ],
                  "minimum_price": 119,
                  "percentage": 42.97
                },
                "description": "description7",
                "plan": {},
                "quantity": 33,
                "cycles": 53,
                "deleted_at": "2016-03-13T12:52:32.123Z"
              }
            ],
            "billing_days": [
              245
            ],
            "shippable": false,
            "metadata": {
              "key0": "metadata9"
            },
            "trial_period_days": 216,
            "minimum_price": 242,
            "deleted_at": "2016-03-13T12:52:32.123Z"
          },
          "quantity": 40,
          "cycles": 60,
          "deleted_at": "2016-03-13T12:52:32.123Z"
        },
        {
          "id": "id5",
          "name": "name5",
          "status": "status7",
          "created_at": "2016-03-13T12:52:32.123Z",
          "updated_at": "2016-03-13T12:52:32.123Z",
          "pricing_scheme": {
            "price": 31,
            "scheme_type": "scheme_type7",
            "price_brackets": [
              {
                "start_quantity": 240,
                "price": 178,
                "end_quantity": 248,
                "overage_price": 6
              },
              {
                "start_quantity": 241,
                "price": 179,
                "end_quantity": 249,
                "overage_price": 7
              },
              {
                "start_quantity": 242,
                "price": 180,
                "end_quantity": 250,
                "overage_price": 8
              }
            ],
            "minimum_price": 127,
            "percentage": 132.65
          },
          "description": "description5",
          "plan": {
            "id": "id1",
            "name": "name1",
            "description": "description1",
            "url": "url5",
            "statement_descriptor": "statement_descriptor1",
            "interval": "interval9",
            "interval_count": 245,
            "billing_type": "billing_type5",
            "payment_methods": [
              "payment_methods6",
              "payment_methods7",
              "payment_methods8"
            ],
            "installments": [
              26,
              27,
              28
            ],
            "status": "status3",
            "currency": "currency1",
            "created_at": "2016-03-13T12:52:32.123Z",
            "updated_at": "2016-03-13T12:52:32.123Z",
            "items": [
              {
                "id": "id8",
                "name": "name8",
                "status": "status0",
                "created_at": "2016-03-13T12:52:32.123Z",
                "updated_at": "2016-03-13T12:52:32.123Z",
                "pricing_scheme": {
                  "price": 24,
                  "scheme_type": "scheme_type0",
                  "price_brackets": [
                    {},
                    {},
                    {}
                  ],
                  "minimum_price": 120,
                  "percentage": 42.98
                },
                "description": "description8",
                "plan": {},
                "quantity": 34,
                "cycles": 54,
                "deleted_at": "2016-03-13T12:52:32.123Z"
              },
              {
                "id": "id9",
                "name": "name9",
                "status": "status1",
                "created_at": "2016-03-13T12:52:32.123Z",
                "updated_at": "2016-03-13T12:52:32.123Z",
                "pricing_scheme": {
                  "price": 25,
                  "scheme_type": "scheme_type1",
                  "price_brackets": [
                    {}
                  ],
                  "minimum_price": 121,
                  "percentage": 42.99
                },
                "description": "description9",
                "plan": {},
                "quantity": 35,
                "cycles": 55,
                "deleted_at": "2016-03-13T12:52:32.123Z"
              }
            ],
            "billing_days": [
              246,
              247
            ],
            "shippable": true,
            "metadata": {
              "key0": "metadata8",
              "key1": "metadata7"
            },
            "trial_period_days": 217,
            "minimum_price": 243,
            "deleted_at": "2016-03-13T12:52:32.123Z"
          },
          "quantity": 41,
          "cycles": 61,
          "deleted_at": "2016-03-13T12:52:32.123Z"
        }
      ],
      "billing_days": [
        251,
        252,
        253
      ],
      "shippable": false,
      "metadata": {
        "key0": "metadata3",
        "key1": "metadata2",
        "key2": "metadata1"
      },
      "trial_period_days": 222,
      "minimum_price": 248,
      "deleted_at": "2016-03-13T12:52:32.123Z"
    }
  ],
  "paging": {
    "total": 6,
    "previous": "previous2",
    "next": "next8"
  }
}
```

