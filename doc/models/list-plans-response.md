
# List Plans Response

Response object for listing plans

## Structure

`ListPlansResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`GetPlanResponse[] \| null`](../../doc/models/get-plan-response.md) | Required | The plan objects |
| `paging` | [`PagingResponse \| null`](../../doc/models/paging-response.md) | Required | Paging object |

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
                "end_quantity": null,
                "overage_price": null
              },
              {
                "start_quantity": 238,
                "price": 176,
                "end_quantity": null,
                "overage_price": null
              },
              {
                "start_quantity": 239,
                "price": 177,
                "end_quantity": null,
                "overage_price": null
              }
            ],
            "minimum_price": null,
            "percentage": null
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
                    {
                      "start_quantity": 230,
                      "price": 168,
                      "end_quantity": null,
                      "overage_price": null
                    },
                    {
                      "start_quantity": 231,
                      "price": 169,
                      "end_quantity": null,
                      "overage_price": null
                    },
                    {
                      "start_quantity": 232,
                      "price": 170,
                      "end_quantity": null,
                      "overage_price": null
                    }
                  ],
                  "minimum_price": null,
                  "percentage": null
                },
                "description": "description5",
                "plan": {
                  "id": "id1",
                  "name": "name1",
                  "description": "description1",
                  "url": "url5",
                  "statement_descriptor": "statement_descriptor1",
                  "interval": "interval9",
                  "interval_count": 235,
                  "billing_type": "billing_type5",
                  "payment_methods": [
                    "payment_methods6",
                    "payment_methods7",
                    "payment_methods8"
                  ],
                  "installments": [
                    16,
                    17,
                    18
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
                        "price": 242,
                        "scheme_type": "scheme_type0",
                        "price_brackets": [
                          null,
                          null,
                          null
                        ],
                        "minimum_price": null,
                        "percentage": null
                      },
                      "description": "description8",
                      "plan": null,
                      "quantity": null,
                      "cycles": null,
                      "deleted_at": null
                    },
                    {
                      "id": "id9",
                      "name": "name9",
                      "status": "status1",
                      "created_at": "2016-03-13T12:52:32.123Z",
                      "updated_at": "2016-03-13T12:52:32.123Z",
                      "pricing_scheme": {
                        "price": 241,
                        "scheme_type": "scheme_type1",
                        "price_brackets": [
                          null
                        ],
                        "minimum_price": null,
                        "percentage": null
                      },
                      "description": "description9",
                      "plan": null,
                      "quantity": null,
                      "cycles": null,
                      "deleted_at": null
                    }
                  ],
                  "billing_days": [
                    236,
                    237
                  ],
                  "shippable": true,
                  "metadata": {
                    "key0": "metadata8",
                    "key1": "metadata7"
                  },
                  "trial_period_days": null,
                  "minimum_price": null,
                  "deleted_at": null
                },
                "quantity": null,
                "cycles": null,
                "deleted_at": null
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
                    {
                      "start_quantity": 231,
                      "price": 169,
                      "end_quantity": null,
                      "overage_price": null
                    }
                  ],
                  "minimum_price": null,
                  "percentage": null
                },
                "description": "description6",
                "plan": {
                  "id": "id2",
                  "name": "name2",
                  "description": "description2",
                  "url": "url6",
                  "statement_descriptor": "statement_descriptor2",
                  "interval": "interval0",
                  "interval_count": 236,
                  "billing_type": "billing_type6",
                  "payment_methods": [
                    "payment_methods7"
                  ],
                  "installments": [
                    17
                  ],
                  "status": "status4",
                  "currency": "currency2",
                  "created_at": "2016-03-13T12:52:32.123Z",
                  "updated_at": "2016-03-13T12:52:32.123Z",
                  "items": [
                    {
                      "id": "id9",
                      "name": "name9",
                      "status": "status1",
                      "created_at": "2016-03-13T12:52:32.123Z",
                      "updated_at": "2016-03-13T12:52:32.123Z",
                      "pricing_scheme": {
                        "price": 241,
                        "scheme_type": "scheme_type1",
                        "price_brackets": [
                          null
                        ],
                        "minimum_price": null,
                        "percentage": null
                      },
                      "description": "description9",
                      "plan": null,
                      "quantity": null,
                      "cycles": null,
                      "deleted_at": null
                    },
                    {
                      "id": "id0",
                      "name": "name0",
                      "status": "status2",
                      "created_at": "2016-03-13T12:52:32.123Z",
                      "updated_at": "2016-03-13T12:52:32.123Z",
                      "pricing_scheme": {
                        "price": 240,
                        "scheme_type": "scheme_type2",
                        "price_brackets": [
                          null,
                          null
                        ],
                        "minimum_price": null,
                        "percentage": null
                      },
                      "description": "description0",
                      "plan": null,
                      "quantity": null,
                      "cycles": null,
                      "deleted_at": null
                    },
                    {
                      "id": "id1",
                      "name": "name1",
                      "status": "status3",
                      "created_at": "2016-03-13T12:52:32.123Z",
                      "updated_at": "2016-03-13T12:52:32.123Z",
                      "pricing_scheme": {
                        "price": 239,
                        "scheme_type": "scheme_type3",
                        "price_brackets": [
                          null,
                          null,
                          null
                        ],
                        "minimum_price": null,
                        "percentage": null
                      },
                      "description": "description1",
                      "plan": null,
                      "quantity": null,
                      "cycles": null,
                      "deleted_at": null
                    }
                  ],
                  "billing_days": [
                    237,
                    238,
                    239
                  ],
                  "shippable": false,
                  "metadata": {
                    "key0": "metadata7",
                    "key1": "metadata6",
                    "key2": "metadata5"
                  },
                  "trial_period_days": null,
                  "minimum_price": null,
                  "deleted_at": null
                },
                "quantity": null,
                "cycles": null,
                "deleted_at": null
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
            "trial_period_days": null,
            "minimum_price": null,
            "deleted_at": null
          },
          "quantity": null,
          "cycles": null,
          "deleted_at": null
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
                "end_quantity": null,
                "overage_price": null
              }
            ],
            "minimum_price": null,
            "percentage": null
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
                    {
                      "start_quantity": 231,
                      "price": 169,
                      "end_quantity": null,
                      "overage_price": null
                    }
                  ],
                  "minimum_price": null,
                  "percentage": null
                },
                "description": "description6",
                "plan": {
                  "id": "id2",
                  "name": "name2",
                  "description": "description2",
                  "url": "url6",
                  "statement_descriptor": "statement_descriptor2",
                  "interval": "interval0",
                  "interval_count": 236,
                  "billing_type": "billing_type6",
                  "payment_methods": [
                    "payment_methods7"
                  ],
                  "installments": [
                    17
                  ],
                  "status": "status4",
                  "currency": "currency2",
                  "created_at": "2016-03-13T12:52:32.123Z",
                  "updated_at": "2016-03-13T12:52:32.123Z",
                  "items": [
                    {
                      "id": "id9",
                      "name": "name9",
                      "status": "status1",
                      "created_at": "2016-03-13T12:52:32.123Z",
                      "updated_at": "2016-03-13T12:52:32.123Z",
                      "pricing_scheme": {
                        "price": 241,
                        "scheme_type": "scheme_type1",
                        "price_brackets": [
                          null
                        ],
                        "minimum_price": null,
                        "percentage": null
                      },
                      "description": "description9",
                      "plan": null,
                      "quantity": null,
                      "cycles": null,
                      "deleted_at": null
                    },
                    {
                      "id": "id0",
                      "name": "name0",
                      "status": "status2",
                      "created_at": "2016-03-13T12:52:32.123Z",
                      "updated_at": "2016-03-13T12:52:32.123Z",
                      "pricing_scheme": {
                        "price": 240,
                        "scheme_type": "scheme_type2",
                        "price_brackets": [
                          null,
                          null
                        ],
                        "minimum_price": null,
                        "percentage": null
                      },
                      "description": "description0",
                      "plan": null,
                      "quantity": null,
                      "cycles": null,
                      "deleted_at": null
                    },
                    {
                      "id": "id1",
                      "name": "name1",
                      "status": "status3",
                      "created_at": "2016-03-13T12:52:32.123Z",
                      "updated_at": "2016-03-13T12:52:32.123Z",
                      "pricing_scheme": {
                        "price": 239,
                        "scheme_type": "scheme_type3",
                        "price_brackets": [
                          null,
                          null,
                          null
                        ],
                        "minimum_price": null,
                        "percentage": null
                      },
                      "description": "description1",
                      "plan": null,
                      "quantity": null,
                      "cycles": null,
                      "deleted_at": null
                    }
                  ],
                  "billing_days": [
                    237,
                    238,
                    239
                  ],
                  "shippable": false,
                  "metadata": {
                    "key0": "metadata7",
                    "key1": "metadata6",
                    "key2": "metadata5"
                  },
                  "trial_period_days": null,
                  "minimum_price": null,
                  "deleted_at": null
                },
                "quantity": null,
                "cycles": null,
                "deleted_at": null
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
                    {
                      "start_quantity": 232,
                      "price": 170,
                      "end_quantity": null,
                      "overage_price": null
                    },
                    {
                      "start_quantity": 233,
                      "price": 171,
                      "end_quantity": null,
                      "overage_price": null
                    }
                  ],
                  "minimum_price": null,
                  "percentage": null
                },
                "description": "description7",
                "plan": {
                  "id": "id3",
                  "name": "name3",
                  "description": "description3",
                  "url": "url7",
                  "statement_descriptor": "statement_descriptor3",
                  "interval": "interval1",
                  "interval_count": 237,
                  "billing_type": "billing_type7",
                  "payment_methods": [
                    "payment_methods8",
                    "payment_methods9"
                  ],
                  "installments": [
                    18,
                    19
                  ],
                  "status": "status5",
                  "currency": "currency3",
                  "created_at": "2016-03-13T12:52:32.123Z",
                  "updated_at": "2016-03-13T12:52:32.123Z",
                  "items": [
                    {
                      "id": "id0",
                      "name": "name0",
                      "status": "status2",
                      "created_at": "2016-03-13T12:52:32.123Z",
                      "updated_at": "2016-03-13T12:52:32.123Z",
                      "pricing_scheme": {
                        "price": 240,
                        "scheme_type": "scheme_type2",
                        "price_brackets": [
                          null,
                          null
                        ],
                        "minimum_price": null,
                        "percentage": null
                      },
                      "description": "description0",
                      "plan": null,
                      "quantity": null,
                      "cycles": null,
                      "deleted_at": null
                    }
                  ],
                  "billing_days": [
                    238
                  ],
                  "shippable": true,
                  "metadata": {
                    "key0": "metadata6"
                  },
                  "trial_period_days": null,
                  "minimum_price": null,
                  "deleted_at": null
                },
                "quantity": null,
                "cycles": null,
                "deleted_at": null
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
                    {
                      "start_quantity": 233,
                      "price": 171,
                      "end_quantity": null,
                      "overage_price": null
                    },
                    {
                      "start_quantity": 234,
                      "price": 172,
                      "end_quantity": null,
                      "overage_price": null
                    },
                    {
                      "start_quantity": 235,
                      "price": 173,
                      "end_quantity": null,
                      "overage_price": null
                    }
                  ],
                  "minimum_price": null,
                  "percentage": null
                },
                "description": "description8",
                "plan": {
                  "id": "id4",
                  "name": "name4",
                  "description": "description4",
                  "url": "url8",
                  "statement_descriptor": "statement_descriptor4",
                  "interval": "interval2",
                  "interval_count": 238,
                  "billing_type": "billing_type8",
                  "payment_methods": [
                    "payment_methods9",
                    "payment_methods0",
                    "payment_methods1"
                  ],
                  "installments": [
                    19,
                    20,
                    21
                  ],
                  "status": "status6",
                  "currency": "currency4",
                  "created_at": "2016-03-13T12:52:32.123Z",
                  "updated_at": "2016-03-13T12:52:32.123Z",
                  "items": [
                    {
                      "id": "id1",
                      "name": "name1",
                      "status": "status3",
                      "created_at": "2016-03-13T12:52:32.123Z",
                      "updated_at": "2016-03-13T12:52:32.123Z",
                      "pricing_scheme": {
                        "price": 239,
                        "scheme_type": "scheme_type3",
                        "price_brackets": [
                          null,
                          null,
                          null
                        ],
                        "minimum_price": null,
                        "percentage": null
                      },
                      "description": "description1",
                      "plan": null,
                      "quantity": null,
                      "cycles": null,
                      "deleted_at": null
                    },
                    {
                      "id": "id2",
                      "name": "name2",
                      "status": "status4",
                      "created_at": "2016-03-13T12:52:32.123Z",
                      "updated_at": "2016-03-13T12:52:32.123Z",
                      "pricing_scheme": {
                        "price": 238,
                        "scheme_type": "scheme_type4",
                        "price_brackets": [
                          null
                        ],
                        "minimum_price": null,
                        "percentage": null
                      },
                      "description": "description2",
                      "plan": null,
                      "quantity": null,
                      "cycles": null,
                      "deleted_at": null
                    }
                  ],
                  "billing_days": [
                    239,
                    240
                  ],
                  "shippable": false,
                  "metadata": {
                    "key0": "metadata5",
                    "key1": "metadata4"
                  },
                  "trial_period_days": null,
                  "minimum_price": null,
                  "deleted_at": null
                },
                "quantity": null,
                "cycles": null,
                "deleted_at": null
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
            "trial_period_days": null,
            "minimum_price": null,
            "deleted_at": null
          },
          "quantity": null,
          "cycles": null,
          "deleted_at": null
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
      "trial_period_days": null,
      "minimum_price": null,
      "deleted_at": null
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
                "end_quantity": null,
                "overage_price": null
              }
            ],
            "minimum_price": null,
            "percentage": null
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
                    {
                      "start_quantity": 231,
                      "price": 169,
                      "end_quantity": null,
                      "overage_price": null
                    }
                  ],
                  "minimum_price": null,
                  "percentage": null
                },
                "description": "description6",
                "plan": {
                  "id": "id2",
                  "name": "name2",
                  "description": "description2",
                  "url": "url6",
                  "statement_descriptor": "statement_descriptor2",
                  "interval": "interval0",
                  "interval_count": 236,
                  "billing_type": "billing_type6",
                  "payment_methods": [
                    "payment_methods7"
                  ],
                  "installments": [
                    17
                  ],
                  "status": "status4",
                  "currency": "currency2",
                  "created_at": "2016-03-13T12:52:32.123Z",
                  "updated_at": "2016-03-13T12:52:32.123Z",
                  "items": [
                    {
                      "id": "id9",
                      "name": "name9",
                      "status": "status1",
                      "created_at": "2016-03-13T12:52:32.123Z",
                      "updated_at": "2016-03-13T12:52:32.123Z",
                      "pricing_scheme": {
                        "price": 241,
                        "scheme_type": "scheme_type1",
                        "price_brackets": [
                          null
                        ],
                        "minimum_price": null,
                        "percentage": null
                      },
                      "description": "description9",
                      "plan": null,
                      "quantity": null,
                      "cycles": null,
                      "deleted_at": null
                    },
                    {
                      "id": "id0",
                      "name": "name0",
                      "status": "status2",
                      "created_at": "2016-03-13T12:52:32.123Z",
                      "updated_at": "2016-03-13T12:52:32.123Z",
                      "pricing_scheme": {
                        "price": 240,
                        "scheme_type": "scheme_type2",
                        "price_brackets": [
                          null,
                          null
                        ],
                        "minimum_price": null,
                        "percentage": null
                      },
                      "description": "description0",
                      "plan": null,
                      "quantity": null,
                      "cycles": null,
                      "deleted_at": null
                    },
                    {
                      "id": "id1",
                      "name": "name1",
                      "status": "status3",
                      "created_at": "2016-03-13T12:52:32.123Z",
                      "updated_at": "2016-03-13T12:52:32.123Z",
                      "pricing_scheme": {
                        "price": 239,
                        "scheme_type": "scheme_type3",
                        "price_brackets": [
                          null,
                          null,
                          null
                        ],
                        "minimum_price": null,
                        "percentage": null
                      },
                      "description": "description1",
                      "plan": null,
                      "quantity": null,
                      "cycles": null,
                      "deleted_at": null
                    }
                  ],
                  "billing_days": [
                    237,
                    238,
                    239
                  ],
                  "shippable": false,
                  "metadata": {
                    "key0": "metadata7",
                    "key1": "metadata6",
                    "key2": "metadata5"
                  },
                  "trial_period_days": null,
                  "minimum_price": null,
                  "deleted_at": null
                },
                "quantity": null,
                "cycles": null,
                "deleted_at": null
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
                    {
                      "start_quantity": 232,
                      "price": 170,
                      "end_quantity": null,
                      "overage_price": null
                    },
                    {
                      "start_quantity": 233,
                      "price": 171,
                      "end_quantity": null,
                      "overage_price": null
                    }
                  ],
                  "minimum_price": null,
                  "percentage": null
                },
                "description": "description7",
                "plan": {
                  "id": "id3",
                  "name": "name3",
                  "description": "description3",
                  "url": "url7",
                  "statement_descriptor": "statement_descriptor3",
                  "interval": "interval1",
                  "interval_count": 237,
                  "billing_type": "billing_type7",
                  "payment_methods": [
                    "payment_methods8",
                    "payment_methods9"
                  ],
                  "installments": [
                    18,
                    19
                  ],
                  "status": "status5",
                  "currency": "currency3",
                  "created_at": "2016-03-13T12:52:32.123Z",
                  "updated_at": "2016-03-13T12:52:32.123Z",
                  "items": [
                    {
                      "id": "id0",
                      "name": "name0",
                      "status": "status2",
                      "created_at": "2016-03-13T12:52:32.123Z",
                      "updated_at": "2016-03-13T12:52:32.123Z",
                      "pricing_scheme": {
                        "price": 240,
                        "scheme_type": "scheme_type2",
                        "price_brackets": [
                          null,
                          null
                        ],
                        "minimum_price": null,
                        "percentage": null
                      },
                      "description": "description0",
                      "plan": null,
                      "quantity": null,
                      "cycles": null,
                      "deleted_at": null
                    }
                  ],
                  "billing_days": [
                    238
                  ],
                  "shippable": true,
                  "metadata": {
                    "key0": "metadata6"
                  },
                  "trial_period_days": null,
                  "minimum_price": null,
                  "deleted_at": null
                },
                "quantity": null,
                "cycles": null,
                "deleted_at": null
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
                    {
                      "start_quantity": 233,
                      "price": 171,
                      "end_quantity": null,
                      "overage_price": null
                    },
                    {
                      "start_quantity": 234,
                      "price": 172,
                      "end_quantity": null,
                      "overage_price": null
                    },
                    {
                      "start_quantity": 235,
                      "price": 173,
                      "end_quantity": null,
                      "overage_price": null
                    }
                  ],
                  "minimum_price": null,
                  "percentage": null
                },
                "description": "description8",
                "plan": {
                  "id": "id4",
                  "name": "name4",
                  "description": "description4",
                  "url": "url8",
                  "statement_descriptor": "statement_descriptor4",
                  "interval": "interval2",
                  "interval_count": 238,
                  "billing_type": "billing_type8",
                  "payment_methods": [
                    "payment_methods9",
                    "payment_methods0",
                    "payment_methods1"
                  ],
                  "installments": [
                    19,
                    20,
                    21
                  ],
                  "status": "status6",
                  "currency": "currency4",
                  "created_at": "2016-03-13T12:52:32.123Z",
                  "updated_at": "2016-03-13T12:52:32.123Z",
                  "items": [
                    {
                      "id": "id1",
                      "name": "name1",
                      "status": "status3",
                      "created_at": "2016-03-13T12:52:32.123Z",
                      "updated_at": "2016-03-13T12:52:32.123Z",
                      "pricing_scheme": {
                        "price": 239,
                        "scheme_type": "scheme_type3",
                        "price_brackets": [
                          null,
                          null,
                          null
                        ],
                        "minimum_price": null,
                        "percentage": null
                      },
                      "description": "description1",
                      "plan": null,
                      "quantity": null,
                      "cycles": null,
                      "deleted_at": null
                    },
                    {
                      "id": "id2",
                      "name": "name2",
                      "status": "status4",
                      "created_at": "2016-03-13T12:52:32.123Z",
                      "updated_at": "2016-03-13T12:52:32.123Z",
                      "pricing_scheme": {
                        "price": 238,
                        "scheme_type": "scheme_type4",
                        "price_brackets": [
                          null
                        ],
                        "minimum_price": null,
                        "percentage": null
                      },
                      "description": "description2",
                      "plan": null,
                      "quantity": null,
                      "cycles": null,
                      "deleted_at": null
                    }
                  ],
                  "billing_days": [
                    239,
                    240
                  ],
                  "shippable": false,
                  "metadata": {
                    "key0": "metadata5",
                    "key1": "metadata4"
                  },
                  "trial_period_days": null,
                  "minimum_price": null,
                  "deleted_at": null
                },
                "quantity": null,
                "cycles": null,
                "deleted_at": null
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
            "trial_period_days": null,
            "minimum_price": null,
            "deleted_at": null
          },
          "quantity": null,
          "cycles": null,
          "deleted_at": null
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
                "end_quantity": null,
                "overage_price": null
              },
              {
                "start_quantity": 240,
                "price": 178,
                "end_quantity": null,
                "overage_price": null
              }
            ],
            "minimum_price": null,
            "percentage": null
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
                    {
                      "start_quantity": 232,
                      "price": 170,
                      "end_quantity": null,
                      "overage_price": null
                    },
                    {
                      "start_quantity": 233,
                      "price": 171,
                      "end_quantity": null,
                      "overage_price": null
                    }
                  ],
                  "minimum_price": null,
                  "percentage": null
                },
                "description": "description7",
                "plan": {
                  "id": "id3",
                  "name": "name3",
                  "description": "description3",
                  "url": "url7",
                  "statement_descriptor": "statement_descriptor3",
                  "interval": "interval1",
                  "interval_count": 237,
                  "billing_type": "billing_type7",
                  "payment_methods": [
                    "payment_methods8",
                    "payment_methods9"
                  ],
                  "installments": [
                    18,
                    19
                  ],
                  "status": "status5",
                  "currency": "currency3",
                  "created_at": "2016-03-13T12:52:32.123Z",
                  "updated_at": "2016-03-13T12:52:32.123Z",
                  "items": [
                    {
                      "id": "id0",
                      "name": "name0",
                      "status": "status2",
                      "created_at": "2016-03-13T12:52:32.123Z",
                      "updated_at": "2016-03-13T12:52:32.123Z",
                      "pricing_scheme": {
                        "price": 240,
                        "scheme_type": "scheme_type2",
                        "price_brackets": [
                          null,
                          null
                        ],
                        "minimum_price": null,
                        "percentage": null
                      },
                      "description": "description0",
                      "plan": null,
                      "quantity": null,
                      "cycles": null,
                      "deleted_at": null
                    }
                  ],
                  "billing_days": [
                    238
                  ],
                  "shippable": true,
                  "metadata": {
                    "key0": "metadata6"
                  },
                  "trial_period_days": null,
                  "minimum_price": null,
                  "deleted_at": null
                },
                "quantity": null,
                "cycles": null,
                "deleted_at": null
              }
            ],
            "billing_days": [
              245
            ],
            "shippable": false,
            "metadata": {
              "key0": "metadata9"
            },
            "trial_period_days": null,
            "minimum_price": null,
            "deleted_at": null
          },
          "quantity": null,
          "cycles": null,
          "deleted_at": null
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
                "end_quantity": null,
                "overage_price": null
              },
              {
                "start_quantity": 241,
                "price": 179,
                "end_quantity": null,
                "overage_price": null
              },
              {
                "start_quantity": 242,
                "price": 180,
                "end_quantity": null,
                "overage_price": null
              }
            ],
            "minimum_price": null,
            "percentage": null
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
                    {
                      "start_quantity": 233,
                      "price": 171,
                      "end_quantity": null,
                      "overage_price": null
                    },
                    {
                      "start_quantity": 234,
                      "price": 172,
                      "end_quantity": null,
                      "overage_price": null
                    },
                    {
                      "start_quantity": 235,
                      "price": 173,
                      "end_quantity": null,
                      "overage_price": null
                    }
                  ],
                  "minimum_price": null,
                  "percentage": null
                },
                "description": "description8",
                "plan": {
                  "id": "id4",
                  "name": "name4",
                  "description": "description4",
                  "url": "url8",
                  "statement_descriptor": "statement_descriptor4",
                  "interval": "interval2",
                  "interval_count": 238,
                  "billing_type": "billing_type8",
                  "payment_methods": [
                    "payment_methods9",
                    "payment_methods0",
                    "payment_methods1"
                  ],
                  "installments": [
                    19,
                    20,
                    21
                  ],
                  "status": "status6",
                  "currency": "currency4",
                  "created_at": "2016-03-13T12:52:32.123Z",
                  "updated_at": "2016-03-13T12:52:32.123Z",
                  "items": [
                    {
                      "id": "id1",
                      "name": "name1",
                      "status": "status3",
                      "created_at": "2016-03-13T12:52:32.123Z",
                      "updated_at": "2016-03-13T12:52:32.123Z",
                      "pricing_scheme": {
                        "price": 239,
                        "scheme_type": "scheme_type3",
                        "price_brackets": [
                          null,
                          null,
                          null
                        ],
                        "minimum_price": null,
                        "percentage": null
                      },
                      "description": "description1",
                      "plan": null,
                      "quantity": null,
                      "cycles": null,
                      "deleted_at": null
                    },
                    {
                      "id": "id2",
                      "name": "name2",
                      "status": "status4",
                      "created_at": "2016-03-13T12:52:32.123Z",
                      "updated_at": "2016-03-13T12:52:32.123Z",
                      "pricing_scheme": {
                        "price": 238,
                        "scheme_type": "scheme_type4",
                        "price_brackets": [
                          null
                        ],
                        "minimum_price": null,
                        "percentage": null
                      },
                      "description": "description2",
                      "plan": null,
                      "quantity": null,
                      "cycles": null,
                      "deleted_at": null
                    }
                  ],
                  "billing_days": [
                    239,
                    240
                  ],
                  "shippable": false,
                  "metadata": {
                    "key0": "metadata5",
                    "key1": "metadata4"
                  },
                  "trial_period_days": null,
                  "minimum_price": null,
                  "deleted_at": null
                },
                "quantity": null,
                "cycles": null,
                "deleted_at": null
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
                    {
                      "start_quantity": 234,
                      "price": 172,
                      "end_quantity": null,
                      "overage_price": null
                    }
                  ],
                  "minimum_price": null,
                  "percentage": null
                },
                "description": "description9",
                "plan": {
                  "id": "id5",
                  "name": "name5",
                  "description": "description5",
                  "url": "url9",
                  "statement_descriptor": "statement_descriptor5",
                  "interval": "interval3",
                  "interval_count": 239,
                  "billing_type": "billing_type9",
                  "payment_methods": [
                    "payment_methods0"
                  ],
                  "installments": [
                    20
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
                        "price": 238,
                        "scheme_type": "scheme_type4",
                        "price_brackets": [
                          null
                        ],
                        "minimum_price": null,
                        "percentage": null
                      },
                      "description": "description2",
                      "plan": null,
                      "quantity": null,
                      "cycles": null,
                      "deleted_at": null
                    },
                    {
                      "id": "id3",
                      "name": "name3",
                      "status": "status5",
                      "created_at": "2016-03-13T12:52:32.123Z",
                      "updated_at": "2016-03-13T12:52:32.123Z",
                      "pricing_scheme": {
                        "price": 237,
                        "scheme_type": "scheme_type5",
                        "price_brackets": [
                          null,
                          null
                        ],
                        "minimum_price": null,
                        "percentage": null
                      },
                      "description": "description3",
                      "plan": null,
                      "quantity": null,
                      "cycles": null,
                      "deleted_at": null
                    },
                    {
                      "id": "id4",
                      "name": "name4",
                      "status": "status6",
                      "created_at": "2016-03-13T12:52:32.123Z",
                      "updated_at": "2016-03-13T12:52:32.123Z",
                      "pricing_scheme": {
                        "price": 236,
                        "scheme_type": "scheme_type6",
                        "price_brackets": [
                          null,
                          null,
                          null
                        ],
                        "minimum_price": null,
                        "percentage": null
                      },
                      "description": "description4",
                      "plan": null,
                      "quantity": null,
                      "cycles": null,
                      "deleted_at": null
                    }
                  ],
                  "billing_days": [
                    240,
                    241,
                    242
                  ],
                  "shippable": true,
                  "metadata": {
                    "key0": "metadata4",
                    "key1": "metadata3",
                    "key2": "metadata2"
                  },
                  "trial_period_days": null,
                  "minimum_price": null,
                  "deleted_at": null
                },
                "quantity": null,
                "cycles": null,
                "deleted_at": null
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
            "trial_period_days": null,
            "minimum_price": null,
            "deleted_at": null
          },
          "quantity": null,
          "cycles": null,
          "deleted_at": null
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
      "trial_period_days": null,
      "minimum_price": null,
      "deleted_at": null
    }
  ],
  "paging": {
    "total": 6,
    "previous": "previous2",
    "next": "next8"
  }
}
```

