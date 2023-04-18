
# List Subscription Items Response

Response model for listing subscription items

## Structure

`ListSubscriptionItemsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`GetSubscriptionItemResponse[] \| undefined`](../../doc/models/get-subscription-item-response.md) | Optional | The subscription items |
| `paging` | [`PagingResponse \| undefined`](../../doc/models/paging-response.md) | Optional | Paging object |

## Example (as JSON)

```json
{
  "data": [
    {
      "id": "id5",
      "description": "description5",
      "status": "status7",
      "created_at": "2016-03-13T12:52:32.123Z",
      "updated_at": "2016-03-13T12:52:32.123Z",
      "pricing_scheme": {
        "price": 31,
        "scheme_type": "scheme_type7",
        "price_brackets": [
          {
            "start_quantity": 178,
            "price": 116,
            "end_quantity": 186,
            "overage_price": 200
          },
          {
            "start_quantity": 179,
            "price": 117,
            "end_quantity": 187,
            "overage_price": 201
          },
          {
            "start_quantity": 180,
            "price": 118,
            "end_quantity": 188,
            "overage_price": 202
          }
        ],
        "minimum_price": 65,
        "percentage": 162.75
      },
      "discounts": [
        {
          "id": "id6",
          "value": 160.38,
          "discount_type": "discount_type4",
          "status": "status8",
          "created_at": "2016-03-13T12:52:32.123Z",
          "cycles": 190,
          "deleted_at": "2016-03-13T12:52:32.123Z",
          "description": "description6",
          "subscription": {
            "id": "id2",
            "code": "code0",
            "start_at": "2016-03-13T12:52:32.123Z",
            "interval": "interval0",
            "interval_count": 32,
            "billing_type": "billing_type6",
            "current_cycle": {
              "start_at": "2016-03-13T12:52:32.123Z",
              "end_at": "2016-03-13T12:52:32.123Z",
              "id": "id0",
              "billing_at": "2016-03-13T12:52:32.123Z",
              "subscription": {
                "id": "id6",
                "code": "code4",
                "start_at": "2016-03-13T12:52:32.123Z",
                "interval": "interval4",
                "interval_count": 90,
                "billing_type": "billing_type0",
                "current_cycle": {
                  "start_at": "2016-03-13T12:52:32.123Z",
                  "end_at": "2016-03-13T12:52:32.123Z",
                  "id": "id4",
                  "billing_at": "2016-03-13T12:52:32.123Z",
                  "subscription": {},
                  "status": "status6",
                  "duration": 74,
                  "created_at": "created_at2",
                  "updated_at": "updated_at0",
                  "cycle": 14
                },
                "payment_method": "payment_method4",
                "currency": "currency6",
                "installments": 2,
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
                    "customer": {
                      "id": "id2",
                      "name": "name2",
                      "email": "email6",
                      "delinquent": false,
                      "created_at": "2016-03-13T12:52:32.123Z",
                      "updated_at": "2016-03-13T12:52:32.123Z",
                      "document": "document6",
                      "type": "type2",
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
                        "customer": {},
                        "metadata": {
                          "key0": "metadata9",
                          "key1": "metadata0"
                        },
                        "line_1": "line_12",
                        "line_2": "line_26",
                        "deleted_at": "2016-03-13T12:52:32.123Z"
                      },
                      "metadata": {
                        "key0": "metadata9",
                        "key1": "metadata8",
                        "key2": "metadata7"
                      },
                      "phones": {
                        "home_phone": {
                          "country_code": "country_code4",
                          "number": "number2",
                          "area_code": "area_code4"
                        },
                        "mobile_phone": {
                          "country_code": "country_code4",
                          "number": "number8",
                          "area_code": "area_code4"
                        }
                      },
                      "fb_id": 44,
                      "code": "code0",
                      "document_type": "document_type0"
                    },
                    "metadata": {
                      "key0": "metadata7"
                    },
                    "line_1": "line_16",
                    "line_2": "line_20",
                    "deleted_at": "2016-03-13T12:52:32.123Z"
                  },
                  "metadata": {
                    "key0": "metadata3"
                  },
                  "phones": {
                    "home_phone": {},
                    "mobile_phone": {}
                  },
                  "fb_id": 250,
                  "code": "code4",
                  "document_type": "document_type4"
                },
                "card": {
                  "id": "id0",
                  "last_four_digits": "last_four_digits6",
                  "brand": "brand4",
                  "holder_name": "holder_name6",
                  "exp_month": 104,
                  "exp_year": 192,
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
                  {
                    "id": "id3",
                    "description": "description3",
                    "status": "status5",
                    "created_at": "2016-03-13T12:52:32.123Z",
                    "updated_at": "2016-03-13T12:52:32.123Z",
                    "pricing_scheme": {
                      "price": 131,
                      "scheme_type": "scheme_type5",
                      "price_brackets": [
                        {}
                      ],
                      "minimum_price": 35,
                      "percentage": 169.43
                    },
                    "discounts": [
                      {
                        "id": "id4",
                        "value": 167.06,
                        "discount_type": "discount_type2",
                        "status": "status6",
                        "created_at": "2016-03-13T12:52:32.123Z",
                        "cycles": 90,
                        "deleted_at": "2016-03-13T12:52:32.123Z",
                        "description": "description4",
                        "subscription": {},
                        "subscription_item": {}
                      }
                    ],
                    "increments": [
                      {
                        "id": "id2",
                        "value": 22.34,
                        "increment_type": "increment_type4",
                        "status": "status4",
                        "created_at": "2016-03-13T12:52:32.123Z",
                        "cycles": 46,
                        "deleted_at": "2016-03-13T12:52:32.123Z",
                        "description": "description2",
                        "subscription": {},
                        "subscription_item": {}
                      },
                      {
                        "id": "id3",
                        "value": 22.35,
                        "increment_type": "increment_type5",
                        "status": "status5",
                        "created_at": "2016-03-13T12:52:32.123Z",
                        "cycles": 45,
                        "deleted_at": "2016-03-13T12:52:32.123Z",
                        "description": "description3",
                        "subscription": {},
                        "subscription_item": {}
                      }
                    ],
                    "subscription": {},
                    "name": "name3",
                    "quantity": 135,
                    "cycles": 155,
                    "deleted_at": "2016-03-13T12:52:32.123Z"
                  },
                  {
                    "id": "id4",
                    "description": "description4",
                    "status": "status6",
                    "created_at": "2016-03-13T12:52:32.123Z",
                    "updated_at": "2016-03-13T12:52:32.123Z",
                    "pricing_scheme": {
                      "price": 130,
                      "scheme_type": "scheme_type6",
                      "price_brackets": [
                        {},
                        {}
                      ],
                      "minimum_price": 34,
                      "percentage": 169.44
                    },
                    "discounts": [
                      {
                        "id": "id5",
                        "value": 167.07,
                        "discount_type": "discount_type3",
                        "status": "status7",
                        "created_at": "2016-03-13T12:52:32.123Z",
                        "cycles": 91,
                        "deleted_at": "2016-03-13T12:52:32.123Z",
                        "description": "description5",
                        "subscription": {},
                        "subscription_item": {}
                      },
                      {
                        "id": "id6",
                        "value": 167.08,
                        "discount_type": "discount_type4",
                        "status": "status8",
                        "created_at": "2016-03-13T12:52:32.123Z",
                        "cycles": 92,
                        "deleted_at": "2016-03-13T12:52:32.123Z",
                        "description": "description6",
                        "subscription": {},
                        "subscription_item": {}
                      }
                    ],
                    "increments": [
                      {
                        "id": "id3",
                        "value": 22.35,
                        "increment_type": "increment_type5",
                        "status": "status5",
                        "created_at": "2016-03-13T12:52:32.123Z",
                        "cycles": 45,
                        "deleted_at": "2016-03-13T12:52:32.123Z",
                        "description": "description3",
                        "subscription": {},
                        "subscription_item": {}
                      },
                      {
                        "id": "id4",
                        "value": 22.36,
                        "increment_type": "increment_type6",
                        "status": "status6",
                        "created_at": "2016-03-13T12:52:32.123Z",
                        "cycles": 44,
                        "deleted_at": "2016-03-13T12:52:32.123Z",
                        "description": "description4",
                        "subscription": {},
                        "subscription_item": {}
                      },
                      {
                        "id": "id5",
                        "value": 22.37,
                        "increment_type": "increment_type7",
                        "status": "status7",
                        "created_at": "2016-03-13T12:52:32.123Z",
                        "cycles": 43,
                        "deleted_at": "2016-03-13T12:52:32.123Z",
                        "description": "description5",
                        "subscription": {},
                        "subscription_item": {}
                      }
                    ],
                    "subscription": {},
                    "name": "name4",
                    "quantity": 136,
                    "cycles": 156,
                    "deleted_at": "2016-03-13T12:52:32.123Z"
                  },
                  {
                    "id": "id5",
                    "description": "description5",
                    "status": "status7",
                    "created_at": "2016-03-13T12:52:32.123Z",
                    "updated_at": "2016-03-13T12:52:32.123Z",
                    "pricing_scheme": {
                      "price": 129,
                      "scheme_type": "scheme_type7",
                      "price_brackets": [
                        {},
                        {},
                        {}
                      ],
                      "minimum_price": 33,
                      "percentage": 169.45
                    },
                    "discounts": [
                      {
                        "id": "id6",
                        "value": 167.08,
                        "discount_type": "discount_type4",
                        "status": "status8",
                        "created_at": "2016-03-13T12:52:32.123Z",
                        "cycles": 92,
                        "deleted_at": "2016-03-13T12:52:32.123Z",
                        "description": "description6",
                        "subscription": {},
                        "subscription_item": {}
                      },
                      {
                        "id": "id7",
                        "value": 167.09,
                        "discount_type": "discount_type5",
                        "status": "status9",
                        "created_at": "2016-03-13T12:52:32.123Z",
                        "cycles": 93,
                        "deleted_at": "2016-03-13T12:52:32.123Z",
                        "description": "description7",
                        "subscription": {},
                        "subscription_item": {}
                      },
                      {
                        "id": "id8",
                        "value": 167.1,
                        "discount_type": "discount_type6",
                        "status": "status0",
                        "created_at": "2016-03-13T12:52:32.123Z",
                        "cycles": 94,
                        "deleted_at": "2016-03-13T12:52:32.123Z",
                        "description": "description8",
                        "subscription": {},
                        "subscription_item": {}
                      }
                    ],
                    "increments": [
                      {
                        "id": "id4",
                        "value": 22.36,
                        "increment_type": "increment_type6",
                        "status": "status6",
                        "created_at": "2016-03-13T12:52:32.123Z",
                        "cycles": 44,
                        "deleted_at": "2016-03-13T12:52:32.123Z",
                        "description": "description4",
                        "subscription": {},
                        "subscription_item": {}
                      }
                    ],
                    "subscription": {},
                    "name": "name5",
                    "quantity": 137,
                    "cycles": 157,
                    "deleted_at": "2016-03-13T12:52:32.123Z"
                  }
                ],
                "statement_descriptor": "statement_descriptor6",
                "metadata": {
                  "key0": "metadata3",
                  "key1": "metadata2"
                },
                "setup": {
                  "id": "id0",
                  "description": "description0",
                  "amount": 26,
                  "status": "status2"
                },
                "gateway_affiliation_id": "gateway_affiliation_id2",
                "next_billing_at": "2016-03-13T12:52:32.123Z",
                "billing_day": 230,
                "minimum_price": 88,
                "canceled_at": "2016-03-13T12:52:32.123Z",
                "discounts": [
                  {}
                ],
                "increments": [
                  {},
                  {}
                ],
                "boleto_due_days": 202,
                "split": {
                  "enabled": false,
                  "rules": [
                    {
                      "type": "type4",
                      "amount": 162,
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
                              "type": "type2",
                              "volume_percentage": 162,
                              "delay": 128,
                              "days": [
                                104,
                                105,
                                106
                              ]
                            },
                            "transfer_settings": {
                              "transfer_enabled": false,
                              "transfer_interval": "transfer_interval6",
                              "transfer_day": 72
                            },
                            "code": "code6",
                            "payment_mode": "payment_mode2"
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
                          "volume_percentage": 232,
                          "delay": 58,
                          "days": [
                            34,
                            35,
                            36
                          ]
                        },
                        "transfer_settings": {
                          "transfer_enabled": false,
                          "transfer_interval": "transfer_interval6",
                          "transfer_day": 142
                        },
                        "code": "code6",
                        "payment_mode": "payment_mode2"
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
                      "amount": 163,
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
                                "key1": "metadata1"
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
                              }
                            ],
                            "metadata": {
                              "key0": "metadata6",
                              "key1": "metadata5",
                              "key2": "metadata4"
                            },
                            "automatic_anticipation_settings": {
                              "enabled": true,
                              "type": "type3",
                              "volume_percentage": 161,
                              "delay": 129,
                              "days": [
                                105
                              ]
                            },
                            "transfer_settings": {
                              "transfer_enabled": true,
                              "transfer_interval": "transfer_interval5",
                              "transfer_day": 71
                            },
                            "code": "code7",
                            "payment_mode": "payment_mode3"
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
                          "volume_percentage": 231,
                          "delay": 59,
                          "days": [
                            35
                          ]
                        },
                        "transfer_settings": {
                          "transfer_enabled": true,
                          "transfer_interval": "transfer_interval5",
                          "transfer_day": 141
                        },
                        "code": "code7",
                        "payment_mode": "payment_mode3"
                      },
                      "gateway_id": "gateway_id3",
                      "options": {
                        "liable": true,
                        "charge_processing_fee": true,
                        "charge_remainder_fee": "charge_remainder_fee3"
                      },
                      "id": "id7"
                    },
                    {
                      "type": "type2",
                      "amount": 164,
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
                                "key1": "metadata0",
                                "key2": "metadata9"
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
                              "key0": "metadata7",
                              "key1": "metadata6"
                            },
                            "automatic_anticipation_settings": {
                              "enabled": false,
                              "type": "type4",
                              "volume_percentage": 160,
                              "delay": 130,
                              "days": [
                                106,
                                107
                              ]
                            },
                            "transfer_settings": {
                              "transfer_enabled": false,
                              "transfer_interval": "transfer_interval4",
                              "transfer_day": 70
                            },
                            "code": "code8",
                            "payment_mode": "payment_mode4"
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
                          "volume_percentage": 230,
                          "delay": 60,
                          "days": [
                            36,
                            37
                          ]
                        },
                        "transfer_settings": {
                          "transfer_enabled": false,
                          "transfer_interval": "transfer_interval4",
                          "transfer_day": 140
                        },
                        "code": "code8",
                        "payment_mode": "payment_mode4"
                      },
                      "gateway_id": "gateway_id2",
                      "options": {
                        "liable": false,
                        "charge_processing_fee": false,
                        "charge_remainder_fee": "charge_remainder_fee4"
                      },
                      "id": "id8"
                    }
                  ]
                },
                "boleto": {
                  "interest": {
                    "days": 144,
                    "type": "type6",
                    "amount": 218
                  },
                  "fine": {
                    "days": 146,
                    "type": "type2",
                    "amount": 220
                  },
                  "max_days_to_pay_past_due": 134
                },
                "manual_billing": false
              },
              "status": "status2",
              "duration": 16,
              "created_at": "created_at8",
              "updated_at": "updated_at6",
              "cycle": 212
            },
            "payment_method": "payment_method2",
            "currency": "currency2",
            "installments": 200,
            "status": "status4",
            "created_at": "2016-03-13T12:52:32.123Z",
            "updated_at": "2016-03-13T12:52:32.123Z",
            "customer": {},
            "card": {
              "id": "id6",
              "last_four_digits": "last_four_digits2",
              "brand": "brand0",
              "holder_name": "holder_name2",
              "exp_month": 94,
              "exp_year": 134,
              "status": "status8",
              "created_at": "2016-03-13T12:52:32.123Z",
              "updated_at": "2016-03-13T12:52:32.123Z",
              "billing_address": {
                "street": "street8",
                "number": "number6",
                "zip_code": "zip_code2",
                "neighborhood": "neighborhood4",
                "city": "city8",
                "state": "state4",
                "country": "country2",
                "complement": "complement4",
                "line_1": "line_18",
                "line_2": "line_26"
              },
              "customer": {},
              "metadata": {
                "key0": "metadata3",
                "key1": "metadata2"
              },
              "type": "type6",
              "holder_document": "holder_document0",
              "deleted_at": "2016-03-13T12:52:32.123Z",
              "first_six_digits": "first_six_digits6",
              "label": "label6"
            },
            "items": [
              {},
              {}
            ],
            "statement_descriptor": "statement_descriptor2",
            "metadata": {
              "key0": "metadata7",
              "key1": "metadata6"
            },
            "setup": {
              "id": "id6",
              "description": "description6",
              "amount": 224,
              "status": "status8"
            },
            "gateway_affiliation_id": "gateway_affiliation_id8",
            "next_billing_at": "2016-03-13T12:52:32.123Z",
            "billing_day": 172,
            "minimum_price": 30,
            "canceled_at": "2016-03-13T12:52:32.123Z",
            "discounts": [
              {},
              {},
              {}
            ],
            "increments": [
              {}
            ],
            "boleto_due_days": 144,
            "split": {
              "enabled": false,
              "rules": [
                {},
                {}
              ]
            },
            "boleto": {
              "interest": {
                "days": 70,
                "type": "type8",
                "amount": 144
              },
              "fine": {
                "days": 88,
                "type": "type4",
                "amount": 162
              },
              "max_days_to_pay_past_due": 76
            },
            "manual_billing": false
          },
          "subscription_item": {}
        },
        {
          "id": "id7",
          "value": 160.39,
          "discount_type": "discount_type5",
          "status": "status9",
          "created_at": "2016-03-13T12:52:32.123Z",
          "cycles": 191,
          "deleted_at": "2016-03-13T12:52:32.123Z",
          "description": "description7",
          "subscription": {
            "id": "id3",
            "code": "code1",
            "start_at": "2016-03-13T12:52:32.123Z",
            "interval": "interval1",
            "interval_count": 33,
            "billing_type": "billing_type7",
            "current_cycle": {
              "start_at": "2016-03-13T12:52:32.123Z",
              "end_at": "2016-03-13T12:52:32.123Z",
              "id": "id1",
              "billing_at": "2016-03-13T12:52:32.123Z",
              "subscription": {
                "id": "id7",
                "code": "code5",
                "start_at": "2016-03-13T12:52:32.123Z",
                "interval": "interval5",
                "interval_count": 91,
                "billing_type": "billing_type1",
                "current_cycle": {
                  "start_at": "2016-03-13T12:52:32.123Z",
                  "end_at": "2016-03-13T12:52:32.123Z",
                  "id": "id5",
                  "billing_at": "2016-03-13T12:52:32.123Z",
                  "subscription": {},
                  "status": "status7",
                  "duration": 75,
                  "created_at": "created_at3",
                  "updated_at": "updated_at1",
                  "cycle": 15
                },
                "payment_method": "payment_method3",
                "currency": "currency7",
                "installments": 3,
                "status": "status9",
                "created_at": "2016-03-13T12:52:32.123Z",
                "updated_at": "2016-03-13T12:52:32.123Z",
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
                          "key0": "metadata0",
                          "key1": "metadata1",
                          "key2": "metadata2"
                        },
                        "line_1": "line_13",
                        "line_2": "line_27",
                        "deleted_at": "2016-03-13T12:52:32.123Z"
                      },
                      "metadata": {
                        "key0": "metadata0",
                        "key1": "metadata9"
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
                      "fb_id": 45,
                      "code": "code1",
                      "document_type": "document_type1"
                    },
                    "metadata": {
                      "key0": "metadata6",
                      "key1": "metadata5"
                    },
                    "line_1": "line_17",
                    "line_2": "line_21",
                    "deleted_at": "2016-03-13T12:52:32.123Z"
                  },
                  "metadata": {
                    "key0": "metadata4",
                    "key1": "metadata3",
                    "key2": "metadata2"
                  },
                  "phones": {
                    "home_phone": {},
                    "mobile_phone": {}
                  },
                  "fb_id": 251,
                  "code": "code5",
                  "document_type": "document_type5"
                },
                "card": {
                  "id": "id1",
                  "last_four_digits": "last_four_digits7",
                  "brand": "brand5",
                  "holder_name": "holder_name7",
                  "exp_month": 103,
                  "exp_year": 193,
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
                  {
                    "id": "id4",
                    "description": "description4",
                    "status": "status6",
                    "created_at": "2016-03-13T12:52:32.123Z",
                    "updated_at": "2016-03-13T12:52:32.123Z",
                    "pricing_scheme": {
                      "price": 130,
                      "scheme_type": "scheme_type6",
                      "price_brackets": [
                        {},
                        {}
                      ],
                      "minimum_price": 34,
                      "percentage": 169.44
                    },
                    "discounts": [
                      {
                        "id": "id5",
                        "value": 167.07,
                        "discount_type": "discount_type3",
                        "status": "status7",
                        "created_at": "2016-03-13T12:52:32.123Z",
                        "cycles": 91,
                        "deleted_at": "2016-03-13T12:52:32.123Z",
                        "description": "description5",
                        "subscription": {},
                        "subscription_item": {}
                      },
                      {
                        "id": "id6",
                        "value": 167.08,
                        "discount_type": "discount_type4",
                        "status": "status8",
                        "created_at": "2016-03-13T12:52:32.123Z",
                        "cycles": 92,
                        "deleted_at": "2016-03-13T12:52:32.123Z",
                        "description": "description6",
                        "subscription": {},
                        "subscription_item": {}
                      }
                    ],
                    "increments": [
                      {
                        "id": "id3",
                        "value": 22.35,
                        "increment_type": "increment_type5",
                        "status": "status5",
                        "created_at": "2016-03-13T12:52:32.123Z",
                        "cycles": 45,
                        "deleted_at": "2016-03-13T12:52:32.123Z",
                        "description": "description3",
                        "subscription": {},
                        "subscription_item": {}
                      },
                      {
                        "id": "id4",
                        "value": 22.36,
                        "increment_type": "increment_type6",
                        "status": "status6",
                        "created_at": "2016-03-13T12:52:32.123Z",
                        "cycles": 44,
                        "deleted_at": "2016-03-13T12:52:32.123Z",
                        "description": "description4",
                        "subscription": {},
                        "subscription_item": {}
                      },
                      {
                        "id": "id5",
                        "value": 22.37,
                        "increment_type": "increment_type7",
                        "status": "status7",
                        "created_at": "2016-03-13T12:52:32.123Z",
                        "cycles": 43,
                        "deleted_at": "2016-03-13T12:52:32.123Z",
                        "description": "description5",
                        "subscription": {},
                        "subscription_item": {}
                      }
                    ],
                    "subscription": {},
                    "name": "name4",
                    "quantity": 136,
                    "cycles": 156,
                    "deleted_at": "2016-03-13T12:52:32.123Z"
                  }
                ],
                "statement_descriptor": "statement_descriptor7",
                "metadata": {
                  "key0": "metadata4"
                },
                "setup": {
                  "id": "id1",
                  "description": "description1",
                  "amount": 27,
                  "status": "status3"
                },
                "gateway_affiliation_id": "gateway_affiliation_id3",
                "next_billing_at": "2016-03-13T12:52:32.123Z",
                "billing_day": 231,
                "minimum_price": 89,
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
                "boleto_due_days": 203,
                "split": {
                  "enabled": true,
                  "rules": [
                    {
                      "type": "type3",
                      "amount": 163,
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
                                "key1": "metadata1"
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
                              }
                            ],
                            "metadata": {
                              "key0": "metadata6",
                              "key1": "metadata5",
                              "key2": "metadata4"
                            },
                            "automatic_anticipation_settings": {
                              "enabled": true,
                              "type": "type3",
                              "volume_percentage": 161,
                              "delay": 129,
                              "days": [
                                105
                              ]
                            },
                            "transfer_settings": {
                              "transfer_enabled": true,
                              "transfer_interval": "transfer_interval5",
                              "transfer_day": 71
                            },
                            "code": "code7",
                            "payment_mode": "payment_mode3"
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
                          "volume_percentage": 231,
                          "delay": 59,
                          "days": [
                            35
                          ]
                        },
                        "transfer_settings": {
                          "transfer_enabled": true,
                          "transfer_interval": "transfer_interval5",
                          "transfer_day": 141
                        },
                        "code": "code7",
                        "payment_mode": "payment_mode3"
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
                    "days": 143,
                    "type": "type7",
                    "amount": 217
                  },
                  "fine": {
                    "days": 147,
                    "type": "type1",
                    "amount": 221
                  },
                  "max_days_to_pay_past_due": 135
                },
                "manual_billing": true
              },
              "status": "status3",
              "duration": 17,
              "created_at": "created_at9",
              "updated_at": "updated_at7",
              "cycle": 213
            },
            "payment_method": "payment_method3",
            "currency": "currency3",
            "installments": 201,
            "status": "status5",
            "created_at": "2016-03-13T12:52:32.123Z",
            "updated_at": "2016-03-13T12:52:32.123Z",
            "customer": {},
            "card": {
              "id": "id7",
              "last_four_digits": "last_four_digits3",
              "brand": "brand1",
              "holder_name": "holder_name3",
              "exp_month": 95,
              "exp_year": 135,
              "status": "status9",
              "created_at": "2016-03-13T12:52:32.123Z",
              "updated_at": "2016-03-13T12:52:32.123Z",
              "billing_address": {
                "street": "street9",
                "number": "number7",
                "zip_code": "zip_code3",
                "neighborhood": "neighborhood5",
                "city": "city9",
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
              "type": "type7",
              "holder_document": "holder_document1",
              "deleted_at": "2016-03-13T12:52:32.123Z",
              "first_six_digits": "first_six_digits7",
              "label": "label7"
            },
            "items": [
              {},
              {},
              {}
            ],
            "statement_descriptor": "statement_descriptor3",
            "metadata": {
              "key0": "metadata6",
              "key1": "metadata5",
              "key2": "metadata4"
            },
            "setup": {
              "id": "id7",
              "description": "description7",
              "amount": 225,
              "status": "status9"
            },
            "gateway_affiliation_id": "gateway_affiliation_id9",
            "next_billing_at": "2016-03-13T12:52:32.123Z",
            "billing_day": 173,
            "minimum_price": 31,
            "canceled_at": "2016-03-13T12:52:32.123Z",
            "discounts": [
              {}
            ],
            "increments": [
              {},
              {}
            ],
            "boleto_due_days": 145,
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
                "days": 71,
                "type": "type7",
                "amount": 145
              },
              "fine": {
                "days": 89,
                "type": "type5",
                "amount": 163
              },
              "max_days_to_pay_past_due": 77
            },
            "manual_billing": true
          },
          "subscription_item": {}
        },
        {
          "id": "id8",
          "value": 160.4,
          "discount_type": "discount_type6",
          "status": "status0",
          "created_at": "2016-03-13T12:52:32.123Z",
          "cycles": 192,
          "deleted_at": "2016-03-13T12:52:32.123Z",
          "description": "description8",
          "subscription": {
            "id": "id4",
            "code": "code2",
            "start_at": "2016-03-13T12:52:32.123Z",
            "interval": "interval2",
            "interval_count": 34,
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
                "interval_count": 92,
                "billing_type": "billing_type2",
                "current_cycle": {
                  "start_at": "2016-03-13T12:52:32.123Z",
                  "end_at": "2016-03-13T12:52:32.123Z",
                  "id": "id6",
                  "billing_at": "2016-03-13T12:52:32.123Z",
                  "subscription": {},
                  "status": "status8",
                  "duration": 76,
                  "created_at": "created_at4",
                  "updated_at": "updated_at2",
                  "cycle": 16
                },
                "payment_method": "payment_method2",
                "currency": "currency8",
                "installments": 4,
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
                    "customer": {
                      "id": "id4",
                      "name": "name4",
                      "email": "email8",
                      "delinquent": false,
                      "created_at": "2016-03-13T12:52:32.123Z",
                      "updated_at": "2016-03-13T12:52:32.123Z",
                      "document": "document8",
                      "type": "type4",
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
                          "key0": "metadata1"
                        },
                        "line_1": "line_14",
                        "line_2": "line_28",
                        "deleted_at": "2016-03-13T12:52:32.123Z"
                      },
                      "metadata": {
                        "key0": "metadata1"
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
                      "fb_id": 46,
                      "code": "code2",
                      "document_type": "document_type2"
                    },
                    "metadata": {
                      "key0": "metadata5",
                      "key1": "metadata4",
                      "key2": "metadata3"
                    },
                    "line_1": "line_18",
                    "line_2": "line_22",
                    "deleted_at": "2016-03-13T12:52:32.123Z"
                  },
                  "metadata": {
                    "key0": "metadata5",
                    "key1": "metadata4"
                  },
                  "phones": {
                    "home_phone": {},
                    "mobile_phone": {}
                  },
                  "fb_id": 252,
                  "code": "code6",
                  "document_type": "document_type6"
                },
                "card": {
                  "id": "id2",
                  "last_four_digits": "last_four_digits8",
                  "brand": "brand6",
                  "holder_name": "holder_name8",
                  "exp_month": 102,
                  "exp_year": 194,
                  "status": "status6",
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
                  {
                    "id": "id5",
                    "description": "description5",
                    "status": "status7",
                    "created_at": "2016-03-13T12:52:32.123Z",
                    "updated_at": "2016-03-13T12:52:32.123Z",
                    "pricing_scheme": {
                      "price": 129,
                      "scheme_type": "scheme_type7",
                      "price_brackets": [
                        {},
                        {},
                        {}
                      ],
                      "minimum_price": 33,
                      "percentage": 169.45
                    },
                    "discounts": [
                      {
                        "id": "id6",
                        "value": 167.08,
                        "discount_type": "discount_type4",
                        "status": "status8",
                        "created_at": "2016-03-13T12:52:32.123Z",
                        "cycles": 92,
                        "deleted_at": "2016-03-13T12:52:32.123Z",
                        "description": "description6",
                        "subscription": {},
                        "subscription_item": {}
                      },
                      {
                        "id": "id7",
                        "value": 167.09,
                        "discount_type": "discount_type5",
                        "status": "status9",
                        "created_at": "2016-03-13T12:52:32.123Z",
                        "cycles": 93,
                        "deleted_at": "2016-03-13T12:52:32.123Z",
                        "description": "description7",
                        "subscription": {},
                        "subscription_item": {}
                      },
                      {
                        "id": "id8",
                        "value": 167.1,
                        "discount_type": "discount_type6",
                        "status": "status0",
                        "created_at": "2016-03-13T12:52:32.123Z",
                        "cycles": 94,
                        "deleted_at": "2016-03-13T12:52:32.123Z",
                        "description": "description8",
                        "subscription": {},
                        "subscription_item": {}
                      }
                    ],
                    "increments": [
                      {
                        "id": "id4",
                        "value": 22.36,
                        "increment_type": "increment_type6",
                        "status": "status6",
                        "created_at": "2016-03-13T12:52:32.123Z",
                        "cycles": 44,
                        "deleted_at": "2016-03-13T12:52:32.123Z",
                        "description": "description4",
                        "subscription": {},
                        "subscription_item": {}
                      }
                    ],
                    "subscription": {},
                    "name": "name5",
                    "quantity": 137,
                    "cycles": 157,
                    "deleted_at": "2016-03-13T12:52:32.123Z"
                  },
                  {
                    "id": "id6",
                    "description": "description6",
                    "status": "status8",
                    "created_at": "2016-03-13T12:52:32.123Z",
                    "updated_at": "2016-03-13T12:52:32.123Z",
                    "pricing_scheme": {
                      "price": 128,
                      "scheme_type": "scheme_type8",
                      "price_brackets": [
                        {}
                      ],
                      "minimum_price": 32,
                      "percentage": 169.46
                    },
                    "discounts": [
                      {
                        "id": "id7",
                        "value": 167.09,
                        "discount_type": "discount_type5",
                        "status": "status9",
                        "created_at": "2016-03-13T12:52:32.123Z",
                        "cycles": 93,
                        "deleted_at": "2016-03-13T12:52:32.123Z",
                        "description": "description7",
                        "subscription": {},
                        "subscription_item": {}
                      }
                    ],
                    "increments": [
                      {
                        "id": "id5",
                        "value": 22.37,
                        "increment_type": "increment_type7",
                        "status": "status7",
                        "created_at": "2016-03-13T12:52:32.123Z",
                        "cycles": 43,
                        "deleted_at": "2016-03-13T12:52:32.123Z",
                        "description": "description5",
                        "subscription": {},
                        "subscription_item": {}
                      },
                      {
                        "id": "id6",
                        "value": 22.38,
                        "increment_type": "increment_type8",
                        "status": "status8",
                        "created_at": "2016-03-13T12:52:32.123Z",
                        "cycles": 42,
                        "deleted_at": "2016-03-13T12:52:32.123Z",
                        "description": "description6",
                        "subscription": {},
                        "subscription_item": {}
                      }
                    ],
                    "subscription": {},
                    "name": "name6",
                    "quantity": 138,
                    "cycles": 158,
                    "deleted_at": "2016-03-13T12:52:32.123Z"
                  }
                ],
                "statement_descriptor": "statement_descriptor8",
                "metadata": {
                  "key0": "metadata5",
                  "key1": "metadata4",
                  "key2": "metadata3"
                },
                "setup": {
                  "id": "id2",
                  "description": "description2",
                  "amount": 28,
                  "status": "status4"
                },
                "gateway_affiliation_id": "gateway_affiliation_id4",
                "next_billing_at": "2016-03-13T12:52:32.123Z",
                "billing_day": 232,
                "minimum_price": 90,
                "canceled_at": "2016-03-13T12:52:32.123Z",
                "discounts": [
                  {},
                  {},
                  {}
                ],
                "increments": [
                  {}
                ],
                "boleto_due_days": 204,
                "split": {
                  "enabled": false,
                  "rules": [
                    {
                      "type": "type2",
                      "amount": 164,
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
                                "key1": "metadata0",
                                "key2": "metadata9"
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
                              "key0": "metadata7",
                              "key1": "metadata6"
                            },
                            "automatic_anticipation_settings": {
                              "enabled": false,
                              "type": "type4",
                              "volume_percentage": 160,
                              "delay": 130,
                              "days": [
                                106,
                                107
                              ]
                            },
                            "transfer_settings": {
                              "transfer_enabled": false,
                              "transfer_interval": "transfer_interval4",
                              "transfer_day": 70
                            },
                            "code": "code8",
                            "payment_mode": "payment_mode4"
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
                          "volume_percentage": 230,
                          "delay": 60,
                          "days": [
                            36,
                            37
                          ]
                        },
                        "transfer_settings": {
                          "transfer_enabled": false,
                          "transfer_interval": "transfer_interval4",
                          "transfer_day": 140
                        },
                        "code": "code8",
                        "payment_mode": "payment_mode4"
                      },
                      "gateway_id": "gateway_id2",
                      "options": {
                        "liable": false,
                        "charge_processing_fee": false,
                        "charge_remainder_fee": "charge_remainder_fee4"
                      },
                      "id": "id8"
                    },
                    {
                      "type": "type1",
                      "amount": 165,
                      "recipient": {
                        "id": "id1",
                        "name": "name1",
                        "email": "email5",
                        "document": "document5",
                        "description": "description1",
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
                          "type": "type9",
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
                              "volume_percentage": 159,
                              "delay": 131,
                              "days": [
                                107,
                                108,
                                109
                              ]
                            },
                            "transfer_settings": {
                              "transfer_enabled": true,
                              "transfer_interval": "transfer_interval3",
                              "transfer_day": 69
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
                          "volume_percentage": 229,
                          "delay": 61,
                          "days": [
                            37,
                            38,
                            39
                          ]
                        },
                        "transfer_settings": {
                          "transfer_enabled": true,
                          "transfer_interval": "transfer_interval3",
                          "transfer_day": 139
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
                    }
                  ]
                },
                "boleto": {
                  "interest": {
                    "days": 142,
                    "type": "type8",
                    "amount": 216
                  },
                  "fine": {
                    "days": 148,
                    "type": "type0",
                    "amount": 222
                  },
                  "max_days_to_pay_past_due": 136
                },
                "manual_billing": false
              },
              "status": "status4",
              "duration": 18,
              "created_at": "created_at0",
              "updated_at": "updated_at8",
              "cycle": 214
            },
            "payment_method": "payment_method4",
            "currency": "currency4",
            "installments": 202,
            "status": "status6",
            "created_at": "2016-03-13T12:52:32.123Z",
            "updated_at": "2016-03-13T12:52:32.123Z",
            "customer": {},
            "card": {
              "id": "id8",
              "last_four_digits": "last_four_digits4",
              "brand": "brand2",
              "holder_name": "holder_name4",
              "exp_month": 96,
              "exp_year": 136,
              "status": "status0",
              "created_at": "2016-03-13T12:52:32.123Z",
              "updated_at": "2016-03-13T12:52:32.123Z",
              "billing_address": {
                "street": "street0",
                "number": "number8",
                "zip_code": "zip_code4",
                "neighborhood": "neighborhood6",
                "city": "city0",
                "state": "state6",
                "country": "country4",
                "complement": "complement6",
                "line_1": "line_16",
                "line_2": "line_28"
              },
              "customer": {},
              "metadata": {
                "key0": "metadata5",
                "key1": "metadata4",
                "key2": "metadata3"
              },
              "type": "type8",
              "holder_document": "holder_document2",
              "deleted_at": "2016-03-13T12:52:32.123Z",
              "first_six_digits": "first_six_digits8",
              "label": "label8"
            },
            "items": [
              {}
            ],
            "statement_descriptor": "statement_descriptor4",
            "metadata": {
              "key0": "metadata5"
            },
            "setup": {
              "id": "id8",
              "description": "description8",
              "amount": 226,
              "status": "status0"
            },
            "gateway_affiliation_id": "gateway_affiliation_id0",
            "next_billing_at": "2016-03-13T12:52:32.123Z",
            "billing_day": 174,
            "minimum_price": 32,
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
            "boleto_due_days": 146,
            "split": {
              "enabled": false,
              "rules": [
                {}
              ]
            },
            "boleto": {
              "interest": {
                "days": 72,
                "type": "type6",
                "amount": 146
              },
              "fine": {
                "days": 90,
                "type": "type6",
                "amount": 164
              },
              "max_days_to_pay_past_due": 78
            },
            "manual_billing": false
          },
          "subscription_item": {}
        }
      ],
      "increments": [
        {}
      ],
      "subscription": {},
      "name": "name5",
      "quantity": 235,
      "cycles": 255,
      "deleted_at": "2016-03-13T12:52:32.123Z"
    },
    {
      "id": "id6",
      "description": "description6",
      "status": "status8",
      "created_at": "2016-03-13T12:52:32.123Z",
      "updated_at": "2016-03-13T12:52:32.123Z",
      "pricing_scheme": {
        "price": 30,
        "scheme_type": "scheme_type8",
        "price_brackets": [
          {
            "start_quantity": 179,
            "price": 117,
            "end_quantity": 187,
            "overage_price": 201
          }
        ],
        "minimum_price": 66,
        "percentage": 162.76
      },
      "discounts": [
        {
          "id": "id7",
          "value": 160.39,
          "discount_type": "discount_type5",
          "status": "status9",
          "created_at": "2016-03-13T12:52:32.123Z",
          "cycles": 191,
          "deleted_at": "2016-03-13T12:52:32.123Z",
          "description": "description7",
          "subscription": {
            "id": "id3",
            "code": "code1",
            "start_at": "2016-03-13T12:52:32.123Z",
            "interval": "interval1",
            "interval_count": 33,
            "billing_type": "billing_type7",
            "current_cycle": {
              "start_at": "2016-03-13T12:52:32.123Z",
              "end_at": "2016-03-13T12:52:32.123Z",
              "id": "id1",
              "billing_at": "2016-03-13T12:52:32.123Z",
              "subscription": {
                "id": "id7",
                "code": "code5",
                "start_at": "2016-03-13T12:52:32.123Z",
                "interval": "interval5",
                "interval_count": 91,
                "billing_type": "billing_type1",
                "current_cycle": {
                  "start_at": "2016-03-13T12:52:32.123Z",
                  "end_at": "2016-03-13T12:52:32.123Z",
                  "id": "id5",
                  "billing_at": "2016-03-13T12:52:32.123Z",
                  "subscription": {},
                  "status": "status7",
                  "duration": 75,
                  "created_at": "created_at3",
                  "updated_at": "updated_at1",
                  "cycle": 15
                },
                "payment_method": "payment_method3",
                "currency": "currency7",
                "installments": 3,
                "status": "status9",
                "created_at": "2016-03-13T12:52:32.123Z",
                "updated_at": "2016-03-13T12:52:32.123Z",
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
                          "key0": "metadata0",
                          "key1": "metadata1",
                          "key2": "metadata2"
                        },
                        "line_1": "line_13",
                        "line_2": "line_27",
                        "deleted_at": "2016-03-13T12:52:32.123Z"
                      },
                      "metadata": {
                        "key0": "metadata0",
                        "key1": "metadata9"
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
                      "fb_id": 45,
                      "code": "code1",
                      "document_type": "document_type1"
                    },
                    "metadata": {
                      "key0": "metadata6",
                      "key1": "metadata5"
                    },
                    "line_1": "line_17",
                    "line_2": "line_21",
                    "deleted_at": "2016-03-13T12:52:32.123Z"
                  },
                  "metadata": {
                    "key0": "metadata4",
                    "key1": "metadata3",
                    "key2": "metadata2"
                  },
                  "phones": {
                    "home_phone": {},
                    "mobile_phone": {}
                  },
                  "fb_id": 251,
                  "code": "code5",
                  "document_type": "document_type5"
                },
                "card": {
                  "id": "id1",
                  "last_four_digits": "last_four_digits7",
                  "brand": "brand5",
                  "holder_name": "holder_name7",
                  "exp_month": 103,
                  "exp_year": 193,
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
                  {
                    "id": "id4",
                    "description": "description4",
                    "status": "status6",
                    "created_at": "2016-03-13T12:52:32.123Z",
                    "updated_at": "2016-03-13T12:52:32.123Z",
                    "pricing_scheme": {
                      "price": 130,
                      "scheme_type": "scheme_type6",
                      "price_brackets": [
                        {},
                        {}
                      ],
                      "minimum_price": 34,
                      "percentage": 169.44
                    },
                    "discounts": [
                      {
                        "id": "id5",
                        "value": 167.07,
                        "discount_type": "discount_type3",
                        "status": "status7",
                        "created_at": "2016-03-13T12:52:32.123Z",
                        "cycles": 91,
                        "deleted_at": "2016-03-13T12:52:32.123Z",
                        "description": "description5",
                        "subscription": {},
                        "subscription_item": {}
                      },
                      {
                        "id": "id6",
                        "value": 167.08,
                        "discount_type": "discount_type4",
                        "status": "status8",
                        "created_at": "2016-03-13T12:52:32.123Z",
                        "cycles": 92,
                        "deleted_at": "2016-03-13T12:52:32.123Z",
                        "description": "description6",
                        "subscription": {},
                        "subscription_item": {}
                      }
                    ],
                    "increments": [
                      {
                        "id": "id3",
                        "value": 22.35,
                        "increment_type": "increment_type5",
                        "status": "status5",
                        "created_at": "2016-03-13T12:52:32.123Z",
                        "cycles": 45,
                        "deleted_at": "2016-03-13T12:52:32.123Z",
                        "description": "description3",
                        "subscription": {},
                        "subscription_item": {}
                      },
                      {
                        "id": "id4",
                        "value": 22.36,
                        "increment_type": "increment_type6",
                        "status": "status6",
                        "created_at": "2016-03-13T12:52:32.123Z",
                        "cycles": 44,
                        "deleted_at": "2016-03-13T12:52:32.123Z",
                        "description": "description4",
                        "subscription": {},
                        "subscription_item": {}
                      },
                      {
                        "id": "id5",
                        "value": 22.37,
                        "increment_type": "increment_type7",
                        "status": "status7",
                        "created_at": "2016-03-13T12:52:32.123Z",
                        "cycles": 43,
                        "deleted_at": "2016-03-13T12:52:32.123Z",
                        "description": "description5",
                        "subscription": {},
                        "subscription_item": {}
                      }
                    ],
                    "subscription": {},
                    "name": "name4",
                    "quantity": 136,
                    "cycles": 156,
                    "deleted_at": "2016-03-13T12:52:32.123Z"
                  }
                ],
                "statement_descriptor": "statement_descriptor7",
                "metadata": {
                  "key0": "metadata4"
                },
                "setup": {
                  "id": "id1",
                  "description": "description1",
                  "amount": 27,
                  "status": "status3"
                },
                "gateway_affiliation_id": "gateway_affiliation_id3",
                "next_billing_at": "2016-03-13T12:52:32.123Z",
                "billing_day": 231,
                "minimum_price": 89,
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
                "boleto_due_days": 203,
                "split": {
                  "enabled": true,
                  "rules": [
                    {
                      "type": "type3",
                      "amount": 163,
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
                                "key1": "metadata1"
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
                              }
                            ],
                            "metadata": {
                              "key0": "metadata6",
                              "key1": "metadata5",
                              "key2": "metadata4"
                            },
                            "automatic_anticipation_settings": {
                              "enabled": true,
                              "type": "type3",
                              "volume_percentage": 161,
                              "delay": 129,
                              "days": [
                                105
                              ]
                            },
                            "transfer_settings": {
                              "transfer_enabled": true,
                              "transfer_interval": "transfer_interval5",
                              "transfer_day": 71
                            },
                            "code": "code7",
                            "payment_mode": "payment_mode3"
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
                          "volume_percentage": 231,
                          "delay": 59,
                          "days": [
                            35
                          ]
                        },
                        "transfer_settings": {
                          "transfer_enabled": true,
                          "transfer_interval": "transfer_interval5",
                          "transfer_day": 141
                        },
                        "code": "code7",
                        "payment_mode": "payment_mode3"
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
                    "days": 143,
                    "type": "type7",
                    "amount": 217
                  },
                  "fine": {
                    "days": 147,
                    "type": "type1",
                    "amount": 221
                  },
                  "max_days_to_pay_past_due": 135
                },
                "manual_billing": true
              },
              "status": "status3",
              "duration": 17,
              "created_at": "created_at9",
              "updated_at": "updated_at7",
              "cycle": 213
            },
            "payment_method": "payment_method3",
            "currency": "currency3",
            "installments": 201,
            "status": "status5",
            "created_at": "2016-03-13T12:52:32.123Z",
            "updated_at": "2016-03-13T12:52:32.123Z",
            "customer": {},
            "card": {
              "id": "id7",
              "last_four_digits": "last_four_digits3",
              "brand": "brand1",
              "holder_name": "holder_name3",
              "exp_month": 95,
              "exp_year": 135,
              "status": "status9",
              "created_at": "2016-03-13T12:52:32.123Z",
              "updated_at": "2016-03-13T12:52:32.123Z",
              "billing_address": {
                "street": "street9",
                "number": "number7",
                "zip_code": "zip_code3",
                "neighborhood": "neighborhood5",
                "city": "city9",
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
              "type": "type7",
              "holder_document": "holder_document1",
              "deleted_at": "2016-03-13T12:52:32.123Z",
              "first_six_digits": "first_six_digits7",
              "label": "label7"
            },
            "items": [
              {},
              {},
              {}
            ],
            "statement_descriptor": "statement_descriptor3",
            "metadata": {
              "key0": "metadata6",
              "key1": "metadata5",
              "key2": "metadata4"
            },
            "setup": {
              "id": "id7",
              "description": "description7",
              "amount": 225,
              "status": "status9"
            },
            "gateway_affiliation_id": "gateway_affiliation_id9",
            "next_billing_at": "2016-03-13T12:52:32.123Z",
            "billing_day": 173,
            "minimum_price": 31,
            "canceled_at": "2016-03-13T12:52:32.123Z",
            "discounts": [
              {}
            ],
            "increments": [
              {},
              {}
            ],
            "boleto_due_days": 145,
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
                "days": 71,
                "type": "type7",
                "amount": 145
              },
              "fine": {
                "days": 89,
                "type": "type5",
                "amount": 163
              },
              "max_days_to_pay_past_due": 77
            },
            "manual_billing": true
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
      "quantity": 236,
      "cycles": 0,
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

