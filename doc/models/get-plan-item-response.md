
# Get Plan Item Response

Response object for getting a plan item

## Structure

`GetPlanItemResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| null` | Required | - |
| `name` | `string \| null` | Required | - |
| `status` | `string \| null` | Required | - |
| `createdAt` | `string \| null` | Required | - |
| `updatedAt` | `string \| null` | Required | - |
| `pricingScheme` | [`GetPricingSchemeResponse \| null`](../../doc/models/get-pricing-scheme-response.md) | Required | - |
| `description` | `string \| null` | Required | - |
| `plan` | [`GetPlanResponse \| null`](../../doc/models/get-plan-response.md) | Required | - |
| `quantity` | `number \| undefined` | Optional | - |
| `cycles` | `number \| undefined` | Optional | - |
| `deletedAt` | `string \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "id": "id0",
  "name": "name0",
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
        "end_quantity": null,
        "overage_price": null
      },
      {
        "start_quantity": 120,
        "price": 58,
        "end_quantity": null,
        "overage_price": null
      },
      {
        "start_quantity": 121,
        "price": 59,
        "end_quantity": null,
        "overage_price": null
      }
    ],
    "minimum_price": null,
    "percentage": null
  },
  "description": "description0",
  "plan": {
    "id": "id4",
    "name": "name4",
    "description": "description4",
    "url": "url8",
    "statement_descriptor": "statement_descriptor4",
    "interval": "interval2",
    "interval_count": 148,
    "billing_type": "billing_type2",
    "payment_methods": [
      "payment_methods9",
      "payment_methods8"
    ],
    "installments": [
      185,
      186,
      187
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
          "price": 73,
          "scheme_type": "scheme_type3",
          "price_brackets": [
            {
              "start_quantity": 136,
              "price": 182,
              "end_quantity": null,
              "overage_price": null
            },
            {
              "start_quantity": 137,
              "price": 181,
              "end_quantity": null,
              "overage_price": null
            },
            {
              "start_quantity": 138,
              "price": 180,
              "end_quantity": null,
              "overage_price": null
            }
          ],
          "minimum_price": null,
          "percentage": null
        },
        "description": "description1",
        "plan": {
          "id": "id7",
          "name": "name7",
          "description": "description7",
          "url": "url1",
          "statement_descriptor": "statement_descriptor7",
          "interval": "interval5",
          "interval_count": 141,
          "billing_type": "billing_type9",
          "payment_methods": [
            "payment_methods8",
            "payment_methods9"
          ],
          "installments": [
            178,
            179,
            180
          ],
          "status": "status1",
          "currency": "currency7",
          "created_at": "2016-03-13T12:52:32.123Z",
          "updated_at": "2016-03-13T12:52:32.123Z",
          "items": [
            {
              "id": "id4",
              "name": "name4",
              "status": "status6",
              "created_at": "2016-03-13T12:52:32.123Z",
              "updated_at": "2016-03-13T12:52:32.123Z",
              "pricing_scheme": {
                "price": 208,
                "scheme_type": "scheme_type4",
                "price_brackets": [
                  {
                    "start_quantity": 1,
                    "price": 61,
                    "end_quantity": null,
                    "overage_price": null
                  },
                  {
                    "start_quantity": 2,
                    "price": 60,
                    "end_quantity": null,
                    "overage_price": null
                  },
                  {
                    "start_quantity": 3,
                    "price": 59,
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
                "interval": "interval2",
                "interval_count": 134,
                "billing_type": "billing_type6",
                "payment_methods": [
                  "payment_methods5",
                  "payment_methods6"
                ],
                "installments": [
                  171,
                  172,
                  173
                ],
                "status": "status8",
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
                      "price": 201,
                      "scheme_type": "scheme_type1",
                      "price_brackets": [
                        null,
                        null,
                        null
                      ],
                      "minimum_price": null,
                      "percentage": null
                    },
                    "description": "description7",
                    "plan": null,
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
                      "price": 202,
                      "scheme_type": "scheme_type0",
                      "price_brackets": [
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
                  }
                ],
                "billing_days": [
                  165,
                  164,
                  163
                ],
                "shippable": false,
                "metadata": {
                  "key0": "metadata3",
                  "key1": "metadata4",
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
              "id": "id5",
              "name": "name5",
              "status": "status7",
              "created_at": "2016-03-13T12:52:32.123Z",
              "updated_at": "2016-03-13T12:52:32.123Z",
              "pricing_scheme": {
                "price": 209,
                "scheme_type": "scheme_type3",
                "price_brackets": [
                  {
                    "start_quantity": 0,
                    "price": 62,
                    "end_quantity": null,
                    "overage_price": null
                  },
                  {
                    "start_quantity": 1,
                    "price": 61,
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
                "description": "description9",
                "url": "url5",
                "statement_descriptor": "statement_descriptor1",
                "interval": "interval1",
                "interval_count": 135,
                "billing_type": "billing_type5",
                "payment_methods": [
                  "payment_methods4"
                ],
                "installments": [
                  172
                ],
                "status": "status7",
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
                      "price": 202,
                      "scheme_type": "scheme_type0",
                      "price_brackets": [
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
                      "price": 203,
                      "scheme_type": "scheme_type9",
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
                      "price": 204,
                      "scheme_type": "scheme_type8",
                      "price_brackets": [
                        null,
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
                  166,
                  165
                ],
                "shippable": true,
                "metadata": {
                  "key0": "metadata2",
                  "key1": "metadata3"
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
            114,
            113
          ],
          "shippable": true,
          "metadata": {
            "key0": "metadata6",
            "key1": "metadata7",
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
        "id": "id2",
        "name": "name2",
        "status": "status4",
        "created_at": "2016-03-13T12:52:32.123Z",
        "updated_at": "2016-03-13T12:52:32.123Z",
        "pricing_scheme": {
          "price": 72,
          "scheme_type": "scheme_type4",
          "price_brackets": [
            {
              "start_quantity": 137,
              "price": 181,
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
          "interval_count": 142,
          "billing_type": "billing_type8",
          "payment_methods": [
            "payment_methods7"
          ],
          "installments": [
            179
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
                "price": 209,
                "scheme_type": "scheme_type3",
                "price_brackets": [
                  {
                    "start_quantity": 0,
                    "price": 62,
                    "end_quantity": null,
                    "overage_price": null
                  },
                  {
                    "start_quantity": 1,
                    "price": 61,
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
                "description": "description9",
                "url": "url5",
                "statement_descriptor": "statement_descriptor1",
                "interval": "interval1",
                "interval_count": 135,
                "billing_type": "billing_type5",
                "payment_methods": [
                  "payment_methods4"
                ],
                "installments": [
                  172
                ],
                "status": "status7",
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
                      "price": 202,
                      "scheme_type": "scheme_type0",
                      "price_brackets": [
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
                      "price": 203,
                      "scheme_type": "scheme_type9",
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
                      "price": 204,
                      "scheme_type": "scheme_type8",
                      "price_brackets": [
                        null,
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
                  166,
                  165
                ],
                "shippable": true,
                "metadata": {
                  "key0": "metadata2",
                  "key1": "metadata3"
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
                "price": 210,
                "scheme_type": "scheme_type2",
                "price_brackets": [
                  {
                    "start_quantity": 255,
                    "price": 63,
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
                "description": "description8",
                "url": "url6",
                "statement_descriptor": "statement_descriptor2",
                "interval": "interval0",
                "interval_count": 136,
                "billing_type": "billing_type4",
                "payment_methods": [
                  "payment_methods3",
                  "payment_methods4",
                  "payment_methods5"
                ],
                "installments": [
                  173,
                  174
                ],
                "status": "status6",
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
                      "price": 203,
                      "scheme_type": "scheme_type9",
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
                  167
                ],
                "shippable": false,
                "metadata": {
                  "key0": "metadata1"
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
                "price": 211,
                "scheme_type": "scheme_type1",
                "price_brackets": [
                  {
                    "start_quantity": 254,
                    "price": 64,
                    "end_quantity": null,
                    "overage_price": null
                  },
                  {
                    "start_quantity": 255,
                    "price": 63,
                    "end_quantity": null,
                    "overage_price": null
                  },
                  {
                    "start_quantity": 0,
                    "price": 62,
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
                "description": "description7",
                "url": "url7",
                "statement_descriptor": "statement_descriptor3",
                "interval": "interval9",
                "interval_count": 137,
                "billing_type": "billing_type3",
                "payment_methods": [
                  "payment_methods2",
                  "payment_methods3"
                ],
                "installments": [
                  174,
                  175,
                  176
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
                      "price": 204,
                      "scheme_type": "scheme_type8",
                      "price_brackets": [
                        null,
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
                      "price": 205,
                      "scheme_type": "scheme_type7",
                      "price_brackets": [
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
                  168,
                  167,
                  166
                ],
                "shippable": true,
                "metadata": {
                  "key0": "metadata0",
                  "key1": "metadata1",
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
            113,
            112,
            111
          ],
          "shippable": false,
          "metadata": {
            "key0": "metadata5",
            "key1": "metadata6"
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
      149,
      150
    ],
    "shippable": false,
    "metadata": {
      "key0": "metadata9",
      "key1": "metadata0",
      "key2": "metadata1"
    },
    "trial_period_days": null,
    "minimum_price": null,
    "deleted_at": null
  },
  "quantity": null,
  "cycles": null,
  "deleted_at": null
}
```

