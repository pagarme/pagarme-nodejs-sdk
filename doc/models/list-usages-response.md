
# List Usages Response

Response model for listing the usages from a subscription item

## Structure

`ListUsagesResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`GetUsageResponse[] \| undefined`](../../doc/models/get-usage-response.md) | Optional | The usage objects |
| `paging` | [`PagingResponse \| undefined`](../../doc/models/paging-response.md) | Optional | Paging object |

## Example (as JSON)

```json
{
  "data": [
    {
      "id": "id5",
      "quantity": 235,
      "description": "description5",
      "used_at": "2016-03-13T12:52:32.123Z",
      "created_at": "2016-03-13T12:52:32.123Z",
      "status": "status7",
      "deleted_at": "2016-03-13T12:52:32.123Z",
      "subscription_item": {
        "id": "id1",
        "description": "description1",
        "status": "status3",
        "created_at": "2016-03-13T12:52:32.123Z",
        "updated_at": "2016-03-13T12:52:32.123Z",
        "pricing_scheme": {
          "price": 43,
          "scheme_type": "scheme_type3",
          "price_brackets": [
            {
              "start_quantity": 166,
              "price": 104,
              "end_quantity": 174,
              "overage_price": 188
            },
            {
              "start_quantity": 167,
              "price": 105,
              "end_quantity": 175,
              "overage_price": 189
            }
          ],
          "minimum_price": 53,
          "percentage": 183.11
        },
        "discounts": [
          {
            "id": "id2",
            "value": 180.74,
            "discount_type": "discount_type0",
            "status": "status4",
            "created_at": "2016-03-13T12:52:32.123Z",
            "cycles": 178,
            "deleted_at": "2016-03-13T12:52:32.123Z",
            "description": "description2",
            "subscription": {
              "id": "id8",
              "code": "code6",
              "start_at": "2016-03-13T12:52:32.123Z",
              "interval": "interval6",
              "interval_count": 20,
              "billing_type": "billing_type2",
              "current_cycle": {
                "start_at": "2016-03-13T12:52:32.123Z",
                "end_at": "2016-03-13T12:52:32.123Z",
                "id": "id6",
                "billing_at": "2016-03-13T12:52:32.123Z",
                "subscription": {
                  "id": "id2",
                  "code": "code0",
                  "start_at": "2016-03-13T12:52:32.123Z",
                  "interval": "interval0",
                  "interval_count": 78,
                  "billing_type": "billing_type6",
                  "current_cycle": {
                    "start_at": "2016-03-13T12:52:32.123Z",
                    "end_at": "2016-03-13T12:52:32.123Z",
                    "id": "id0",
                    "billing_at": "2016-03-13T12:52:32.123Z",
                    "subscription": {},
                    "status": "status2",
                    "duration": 62,
                    "created_at": "created_at8",
                    "updated_at": "updated_at6",
                    "cycle": 2
                  },
                  "payment_method": "payment_method8",
                  "currency": "currency2",
                  "installments": 246,
                  "status": "status4",
                  "created_at": "2016-03-13T12:52:32.123Z",
                  "updated_at": "2016-03-13T12:52:32.123Z",
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
                            "key0": "metadata5"
                          },
                          "line_1": "line_18",
                          "line_2": "line_22",
                          "deleted_at": "2016-03-13T12:52:32.123Z"
                        },
                        "metadata": {
                          "key0": "metadata1"
                        },
                        "phones": {
                          "home_phone": {
                            "country_code": "country_code0",
                            "number": "number8",
                            "area_code": "area_code0"
                          },
                          "mobile_phone": {
                            "country_code": "country_code0",
                            "number": "number8",
                            "area_code": "area_code0"
                          }
                        },
                        "fb_id": 32,
                        "code": "code6",
                        "document_type": "document_type6"
                      },
                      "metadata": {
                        "key0": "metadata1",
                        "key1": "metadata0",
                        "key2": "metadata9"
                      },
                      "line_1": "line_12",
                      "line_2": "line_26",
                      "deleted_at": "2016-03-13T12:52:32.123Z"
                    },
                    "metadata": {
                      "key0": "metadata9",
                      "key1": "metadata8"
                    },
                    "phones": {
                      "home_phone": {},
                      "mobile_phone": {}
                    },
                    "fb_id": 238,
                    "code": "code0",
                    "document_type": "document_type0"
                  },
                  "card": {
                    "id": "id6",
                    "last_four_digits": "last_four_digits2",
                    "brand": "brand0",
                    "holder_name": "holder_name2",
                    "exp_month": 116,
                    "exp_year": 180,
                    "status": "status2",
                    "created_at": "2016-03-13T12:52:32.123Z",
                    "updated_at": "2016-03-13T12:52:32.123Z",
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
                    "customer": {},
                    "metadata": {
                      "key0": "metadata7",
                      "key1": "metadata8"
                    },
                    "type": "type4",
                    "holder_document": "holder_document0",
                    "deleted_at": "2016-03-13T12:52:32.123Z",
                    "first_six_digits": "first_six_digits6",
                    "label": "label6"
                  },
                  "items": [
                    {
                      "id": "id9",
                      "description": "description9",
                      "status": "status1",
                      "created_at": "2016-03-13T12:52:32.123Z",
                      "updated_at": "2016-03-13T12:52:32.123Z",
                      "pricing_scheme": {
                        "price": 143,
                        "scheme_type": "scheme_type1",
                        "price_brackets": [
                          {},
                          {},
                          {}
                        ],
                        "minimum_price": 47,
                        "percentage": 189.79
                      },
                      "discounts": [
                        {
                          "id": "id0",
                          "value": 187.42,
                          "discount_type": "discount_type8",
                          "status": "status2",
                          "created_at": "2016-03-13T12:52:32.123Z",
                          "cycles": 78,
                          "deleted_at": "2016-03-13T12:52:32.123Z",
                          "description": "description0",
                          "subscription": {},
                          "subscription_item": {}
                        },
                        {
                          "id": "id1",
                          "value": 187.43,
                          "discount_type": "discount_type9",
                          "status": "status3",
                          "created_at": "2016-03-13T12:52:32.123Z",
                          "cycles": 79,
                          "deleted_at": "2016-03-13T12:52:32.123Z",
                          "description": "description1",
                          "subscription": {},
                          "subscription_item": {}
                        },
                        {
                          "id": "id2",
                          "value": 187.44,
                          "discount_type": "discount_type0",
                          "status": "status4",
                          "created_at": "2016-03-13T12:52:32.123Z",
                          "cycles": 80,
                          "deleted_at": "2016-03-13T12:52:32.123Z",
                          "description": "description2",
                          "subscription": {},
                          "subscription_item": {}
                        }
                      ],
                      "increments": [
                        {
                          "id": "id8",
                          "value": 42.7,
                          "increment_type": "increment_type0",
                          "status": "status0",
                          "created_at": "2016-03-13T12:52:32.123Z",
                          "cycles": 58,
                          "deleted_at": "2016-03-13T12:52:32.123Z",
                          "description": "description8",
                          "subscription": {},
                          "subscription_item": {}
                        }
                      ],
                      "subscription": {},
                      "name": "name9",
                      "quantity": 123,
                      "cycles": 143,
                      "deleted_at": "2016-03-13T12:52:32.123Z"
                    },
                    {
                      "id": "id0",
                      "description": "description0",
                      "status": "status2",
                      "created_at": "2016-03-13T12:52:32.123Z",
                      "updated_at": "2016-03-13T12:52:32.123Z",
                      "pricing_scheme": {
                        "price": 142,
                        "scheme_type": "scheme_type2",
                        "price_brackets": [
                          {}
                        ],
                        "minimum_price": 46,
                        "percentage": 189.8
                      },
                      "discounts": [
                        {
                          "id": "id1",
                          "value": 187.43,
                          "discount_type": "discount_type9",
                          "status": "status3",
                          "created_at": "2016-03-13T12:52:32.123Z",
                          "cycles": 79,
                          "deleted_at": "2016-03-13T12:52:32.123Z",
                          "description": "description1",
                          "subscription": {},
                          "subscription_item": {}
                        }
                      ],
                      "increments": [
                        {
                          "id": "id9",
                          "value": 42.71,
                          "increment_type": "increment_type1",
                          "status": "status1",
                          "created_at": "2016-03-13T12:52:32.123Z",
                          "cycles": 57,
                          "deleted_at": "2016-03-13T12:52:32.123Z",
                          "description": "description9",
                          "subscription": {},
                          "subscription_item": {}
                        },
                        {
                          "id": "id0",
                          "value": 42.72,
                          "increment_type": "increment_type2",
                          "status": "status2",
                          "created_at": "2016-03-13T12:52:32.123Z",
                          "cycles": 56,
                          "deleted_at": "2016-03-13T12:52:32.123Z",
                          "description": "description0",
                          "subscription": {},
                          "subscription_item": {}
                        }
                      ],
                      "subscription": {},
                      "name": "name0",
                      "quantity": 124,
                      "cycles": 144,
                      "deleted_at": "2016-03-13T12:52:32.123Z"
                    }
                  ],
                  "statement_descriptor": "statement_descriptor2",
                  "metadata": {
                    "key0": "metadata9",
                    "key1": "metadata8",
                    "key2": "metadata7"
                  },
                  "setup": {
                    "id": "id6",
                    "description": "description6",
                    "amount": 14,
                    "status": "status8"
                  },
                  "gateway_affiliation_id": "gateway_affiliation_id8",
                  "next_billing_at": "2016-03-13T12:52:32.123Z",
                  "billing_day": 218,
                  "minimum_price": 76,
                  "canceled_at": "2016-03-13T12:52:32.123Z",
                  "discounts": [
                    {},
                    {},
                    {}
                  ],
                  "increments": [
                    {}
                  ],
                  "boleto_due_days": 190,
                  "split": {
                    "enabled": false,
                    "rules": [
                      {
                        "type": "type8",
                        "amount": 150,
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
                                "recipient": {},
                                "metadata": {
                                  "key0": "metadata7",
                                  "key1": "metadata6",
                                  "key2": "metadata5"
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
                                "key0": "metadata1",
                                "key1": "metadata0"
                              },
                              "automatic_anticipation_settings": {
                                "enabled": false,
                                "type": "type8",
                                "volume_percentage": 174,
                                "delay": 116,
                                "days": [
                                  92,
                                  93
                                ]
                              },
                              "transfer_settings": {
                                "transfer_enabled": false,
                                "transfer_interval": "transfer_interval0",
                                "transfer_day": 84
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
                            "volume_percentage": 244,
                            "delay": 46,
                            "days": [
                              22,
                              23
                            ]
                          },
                          "transfer_settings": {
                            "transfer_enabled": false,
                            "transfer_interval": "transfer_interval0",
                            "transfer_day": 154
                          },
                          "code": "code2",
                          "payment_mode": "payment_mode8"
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
                        "amount": 151,
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
                                  "key0": "metadata6"
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
                                }
                              ],
                              "metadata": {
                                "key0": "metadata2"
                              },
                              "automatic_anticipation_settings": {
                                "enabled": true,
                                "type": "type9",
                                "volume_percentage": 173,
                                "delay": 117,
                                "days": [
                                  93,
                                  94,
                                  95
                                ]
                              },
                              "transfer_settings": {
                                "transfer_enabled": true,
                                "transfer_interval": "transfer_interval9",
                                "transfer_day": 83
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
                            "volume_percentage": 243,
                            "delay": 47,
                            "days": [
                              23,
                              24,
                              25
                            ]
                          },
                          "transfer_settings": {
                            "transfer_enabled": true,
                            "transfer_interval": "transfer_interval9",
                            "transfer_day": 153
                          },
                          "code": "code3",
                          "payment_mode": "payment_mode9"
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
                      "days": 156,
                      "type": "type2",
                      "amount": 230
                    },
                    "fine": {
                      "days": 134,
                      "type": "type6",
                      "amount": 208
                    },
                    "max_days_to_pay_past_due": 122
                  },
                  "manual_billing": false
                },
                "status": "status8",
                "duration": 4,
                "created_at": "created_at4",
                "updated_at": "updated_at2",
                "cycle": 200
              },
              "payment_method": "payment_method8",
              "currency": "currency8",
              "installments": 188,
              "status": "status0",
              "created_at": "2016-03-13T12:52:32.123Z",
              "updated_at": "2016-03-13T12:52:32.123Z",
              "customer": {},
              "card": {
                "id": "id2",
                "last_four_digits": "last_four_digits8",
                "brand": "brand6",
                "holder_name": "holder_name8",
                "exp_month": 82,
                "exp_year": 122,
                "status": "status4",
                "created_at": "2016-03-13T12:52:32.123Z",
                "updated_at": "2016-03-13T12:52:32.123Z",
                "billing_address": {
                  "street": "street4",
                  "number": "number2",
                  "zip_code": "zip_code8",
                  "neighborhood": "neighborhood0",
                  "city": "city4",
                  "state": "state0",
                  "country": "country8",
                  "complement": "complement0",
                  "line_1": "line_12",
                  "line_2": "line_22"
                },
                "customer": {},
                "metadata": {
                  "key0": "metadata9",
                  "key1": "metadata8",
                  "key2": "metadata7"
                },
                "type": "type2",
                "holder_document": "holder_document6",
                "deleted_at": "2016-03-13T12:52:32.123Z",
                "first_six_digits": "first_six_digits2",
                "label": "label2"
              },
              "items": [
                {}
              ],
              "statement_descriptor": "statement_descriptor8",
              "metadata": {
                "key0": "metadata1"
              },
              "setup": {
                "id": "id2",
                "description": "description2",
                "amount": 212,
                "status": "status4"
              },
              "gateway_affiliation_id": "gateway_affiliation_id4",
              "next_billing_at": "2016-03-13T12:52:32.123Z",
              "billing_day": 160,
              "minimum_price": 18,
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
              "boleto_due_days": 132,
              "split": {
                "enabled": false,
                "rules": [
                  {}
                ]
              },
              "boleto": {
                "interest": {
                  "days": 58,
                  "type": "type2",
                  "amount": 132
                },
                "fine": {
                  "days": 76,
                  "type": "type0",
                  "amount": 150
                },
                "max_days_to_pay_past_due": 64
              },
              "manual_billing": false
            },
            "subscription_item": {}
          },
          {
            "id": "id3",
            "value": 180.75,
            "discount_type": "discount_type1",
            "status": "status5",
            "created_at": "2016-03-13T12:52:32.123Z",
            "cycles": 179,
            "deleted_at": "2016-03-13T12:52:32.123Z",
            "description": "description3",
            "subscription": {
              "id": "id9",
              "code": "code7",
              "start_at": "2016-03-13T12:52:32.123Z",
              "interval": "interval7",
              "interval_count": 21,
              "billing_type": "billing_type3",
              "current_cycle": {
                "start_at": "2016-03-13T12:52:32.123Z",
                "end_at": "2016-03-13T12:52:32.123Z",
                "id": "id7",
                "billing_at": "2016-03-13T12:52:32.123Z",
                "subscription": {
                  "id": "id3",
                  "code": "code1",
                  "start_at": "2016-03-13T12:52:32.123Z",
                  "interval": "interval1",
                  "interval_count": 79,
                  "billing_type": "billing_type7",
                  "current_cycle": {
                    "start_at": "2016-03-13T12:52:32.123Z",
                    "end_at": "2016-03-13T12:52:32.123Z",
                    "id": "id1",
                    "billing_at": "2016-03-13T12:52:32.123Z",
                    "subscription": {},
                    "status": "status3",
                    "duration": 63,
                    "created_at": "created_at9",
                    "updated_at": "updated_at7",
                    "cycle": 3
                  },
                  "payment_method": "payment_method7",
                  "currency": "currency3",
                  "installments": 247,
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
                      "customer": {
                        "id": "id9",
                        "name": "name9",
                        "email": "email3",
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
                            "key0": "metadata6",
                            "key1": "metadata7"
                          },
                          "line_1": "line_19",
                          "line_2": "line_23",
                          "deleted_at": "2016-03-13T12:52:32.123Z"
                        },
                        "metadata": {
                          "key0": "metadata0",
                          "key1": "metadata9"
                        },
                        "phones": {
                          "home_phone": {
                            "country_code": "country_code1",
                            "number": "number9",
                            "area_code": "area_code1"
                          },
                          "mobile_phone": {
                            "country_code": "country_code1",
                            "number": "number9",
                            "area_code": "area_code1"
                          }
                        },
                        "fb_id": 33,
                        "code": "code7",
                        "document_type": "document_type7"
                      },
                      "metadata": {
                        "key0": "metadata0"
                      },
                      "line_1": "line_13",
                      "line_2": "line_27",
                      "deleted_at": "2016-03-13T12:52:32.123Z"
                    },
                    "metadata": {
                      "key0": "metadata0"
                    },
                    "phones": {
                      "home_phone": {},
                      "mobile_phone": {}
                    },
                    "fb_id": 239,
                    "code": "code1",
                    "document_type": "document_type1"
                  },
                  "card": {
                    "id": "id7",
                    "last_four_digits": "last_four_digits3",
                    "brand": "brand1",
                    "holder_name": "holder_name3",
                    "exp_month": 115,
                    "exp_year": 181,
                    "status": "status1",
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
                      "key0": "metadata6"
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
                        "price": 142,
                        "scheme_type": "scheme_type2",
                        "price_brackets": [
                          {}
                        ],
                        "minimum_price": 46,
                        "percentage": 189.8
                      },
                      "discounts": [
                        {
                          "id": "id1",
                          "value": 187.43,
                          "discount_type": "discount_type9",
                          "status": "status3",
                          "created_at": "2016-03-13T12:52:32.123Z",
                          "cycles": 79,
                          "deleted_at": "2016-03-13T12:52:32.123Z",
                          "description": "description1",
                          "subscription": {},
                          "subscription_item": {}
                        }
                      ],
                      "increments": [
                        {
                          "id": "id9",
                          "value": 42.71,
                          "increment_type": "increment_type1",
                          "status": "status1",
                          "created_at": "2016-03-13T12:52:32.123Z",
                          "cycles": 57,
                          "deleted_at": "2016-03-13T12:52:32.123Z",
                          "description": "description9",
                          "subscription": {},
                          "subscription_item": {}
                        },
                        {
                          "id": "id0",
                          "value": 42.72,
                          "increment_type": "increment_type2",
                          "status": "status2",
                          "created_at": "2016-03-13T12:52:32.123Z",
                          "cycles": 56,
                          "deleted_at": "2016-03-13T12:52:32.123Z",
                          "description": "description0",
                          "subscription": {},
                          "subscription_item": {}
                        }
                      ],
                      "subscription": {},
                      "name": "name0",
                      "quantity": 124,
                      "cycles": 144,
                      "deleted_at": "2016-03-13T12:52:32.123Z"
                    },
                    {
                      "id": "id1",
                      "description": "description1",
                      "status": "status3",
                      "created_at": "2016-03-13T12:52:32.123Z",
                      "updated_at": "2016-03-13T12:52:32.123Z",
                      "pricing_scheme": {
                        "price": 141,
                        "scheme_type": "scheme_type3",
                        "price_brackets": [
                          {},
                          {}
                        ],
                        "minimum_price": 45,
                        "percentage": 189.81
                      },
                      "discounts": [
                        {
                          "id": "id2",
                          "value": 187.44,
                          "discount_type": "discount_type0",
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
                          "value": 187.45,
                          "discount_type": "discount_type1",
                          "status": "status5",
                          "created_at": "2016-03-13T12:52:32.123Z",
                          "cycles": 81,
                          "deleted_at": "2016-03-13T12:52:32.123Z",
                          "description": "description3",
                          "subscription": {},
                          "subscription_item": {}
                        }
                      ],
                      "increments": [
                        {
                          "id": "id0",
                          "value": 42.72,
                          "increment_type": "increment_type2",
                          "status": "status2",
                          "created_at": "2016-03-13T12:52:32.123Z",
                          "cycles": 56,
                          "deleted_at": "2016-03-13T12:52:32.123Z",
                          "description": "description0",
                          "subscription": {},
                          "subscription_item": {}
                        },
                        {
                          "id": "id1",
                          "value": 42.73,
                          "increment_type": "increment_type3",
                          "status": "status3",
                          "created_at": "2016-03-13T12:52:32.123Z",
                          "cycles": 55,
                          "deleted_at": "2016-03-13T12:52:32.123Z",
                          "description": "description1",
                          "subscription": {},
                          "subscription_item": {}
                        },
                        {
                          "id": "id2",
                          "value": 42.74,
                          "increment_type": "increment_type4",
                          "status": "status4",
                          "created_at": "2016-03-13T12:52:32.123Z",
                          "cycles": 54,
                          "deleted_at": "2016-03-13T12:52:32.123Z",
                          "description": "description2",
                          "subscription": {},
                          "subscription_item": {}
                        }
                      ],
                      "subscription": {},
                      "name": "name1",
                      "quantity": 125,
                      "cycles": 145,
                      "deleted_at": "2016-03-13T12:52:32.123Z"
                    },
                    {
                      "id": "id2",
                      "description": "description2",
                      "status": "status4",
                      "created_at": "2016-03-13T12:52:32.123Z",
                      "updated_at": "2016-03-13T12:52:32.123Z",
                      "pricing_scheme": {
                        "price": 140,
                        "scheme_type": "scheme_type4",
                        "price_brackets": [
                          {},
                          {},
                          {}
                        ],
                        "minimum_price": 44,
                        "percentage": 189.82
                      },
                      "discounts": [
                        {
                          "id": "id3",
                          "value": 187.45,
                          "discount_type": "discount_type1",
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
                          "value": 187.46,
                          "discount_type": "discount_type2",
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
                          "value": 187.47,
                          "discount_type": "discount_type3",
                          "status": "status7",
                          "created_at": "2016-03-13T12:52:32.123Z",
                          "cycles": 83,
                          "deleted_at": "2016-03-13T12:52:32.123Z",
                          "description": "description5",
                          "subscription": {},
                          "subscription_item": {}
                        }
                      ],
                      "increments": [
                        {
                          "id": "id1",
                          "value": 42.73,
                          "increment_type": "increment_type3",
                          "status": "status3",
                          "created_at": "2016-03-13T12:52:32.123Z",
                          "cycles": 55,
                          "deleted_at": "2016-03-13T12:52:32.123Z",
                          "description": "description1",
                          "subscription": {},
                          "subscription_item": {}
                        }
                      ],
                      "subscription": {},
                      "name": "name2",
                      "quantity": 126,
                      "cycles": 146,
                      "deleted_at": "2016-03-13T12:52:32.123Z"
                    }
                  ],
                  "statement_descriptor": "statement_descriptor3",
                  "metadata": {
                    "key0": "metadata0",
                    "key1": "metadata9"
                  },
                  "setup": {
                    "id": "id7",
                    "description": "description7",
                    "amount": 15,
                    "status": "status9"
                  },
                  "gateway_affiliation_id": "gateway_affiliation_id9",
                  "next_billing_at": "2016-03-13T12:52:32.123Z",
                  "billing_day": 219,
                  "minimum_price": 77,
                  "canceled_at": "2016-03-13T12:52:32.123Z",
                  "discounts": [
                    {}
                  ],
                  "increments": [
                    {},
                    {}
                  ],
                  "boleto_due_days": 191,
                  "split": {
                    "enabled": true,
                    "rules": [
                      {
                        "type": "type7",
                        "amount": 151,
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
                                  "key0": "metadata6"
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
                                }
                              ],
                              "metadata": {
                                "key0": "metadata2"
                              },
                              "automatic_anticipation_settings": {
                                "enabled": true,
                                "type": "type9",
                                "volume_percentage": 173,
                                "delay": 117,
                                "days": [
                                  93,
                                  94,
                                  95
                                ]
                              },
                              "transfer_settings": {
                                "transfer_enabled": true,
                                "transfer_interval": "transfer_interval9",
                                "transfer_day": 83
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
                            "volume_percentage": 243,
                            "delay": 47,
                            "days": [
                              23,
                              24,
                              25
                            ]
                          },
                          "transfer_settings": {
                            "transfer_enabled": true,
                            "transfer_interval": "transfer_interval9",
                            "transfer_day": 153
                          },
                          "code": "code3",
                          "payment_mode": "payment_mode9"
                        },
                        "gateway_id": "gateway_id7",
                        "options": {
                          "liable": true,
                          "charge_processing_fee": true,
                          "charge_remainder_fee": "charge_remainder_fee9"
                        },
                        "id": "id3"
                      },
                      {
                        "type": "type6",
                        "amount": 152,
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
                                  "key1": "metadata4"
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
                                }
                              ],
                              "metadata": {
                                "key0": "metadata3",
                                "key1": "metadata2",
                                "key2": "metadata1"
                              },
                              "automatic_anticipation_settings": {
                                "enabled": false,
                                "type": "type0",
                                "volume_percentage": 172,
                                "delay": 118,
                                "days": [
                                  94
                                ]
                              },
                              "transfer_settings": {
                                "transfer_enabled": false,
                                "transfer_interval": "transfer_interval8",
                                "transfer_day": 82
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
                            "volume_percentage": 242,
                            "delay": 48,
                            "days": [
                              24
                            ]
                          },
                          "transfer_settings": {
                            "transfer_enabled": false,
                            "transfer_interval": "transfer_interval8",
                            "transfer_day": 152
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
                        "amount": 153,
                        "recipient": {
                          "id": "id7",
                          "name": "name7",
                          "email": "email9",
                          "document": "document9",
                          "description": "description7",
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
                                  "key0": "metadata4",
                                  "key1": "metadata3",
                                  "key2": "metadata2"
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
                                },
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
                                "key0": "metadata4",
                                "key1": "metadata3"
                              },
                              "automatic_anticipation_settings": {
                                "enabled": true,
                                "type": "type1",
                                "volume_percentage": 171,
                                "delay": 119,
                                "days": [
                                  95,
                                  96
                                ]
                              },
                              "transfer_settings": {
                                "transfer_enabled": true,
                                "transfer_interval": "transfer_interval7",
                                "transfer_day": 81
                              },
                              "code": "code5",
                              "payment_mode": "payment_mode1"
                            },
                            "metadata": {
                              "key0": "metadata2",
                              "key1": "metadata1"
                            },
                            "pix_key": "pix_key1"
                          },
                          "gateway_recipients": [
                            {},
                            {},
                            {}
                          ],
                          "metadata": {
                            "key0": "metadata6",
                            "key1": "metadata7"
                          },
                          "automatic_anticipation_settings": {
                            "enabled": true,
                            "type": "type9",
                            "volume_percentage": 241,
                            "delay": 49,
                            "days": [
                              25,
                              26
                            ]
                          },
                          "transfer_settings": {
                            "transfer_enabled": true,
                            "transfer_interval": "transfer_interval7",
                            "transfer_day": 151
                          },
                          "code": "code5",
                          "payment_mode": "payment_mode1"
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
                      "days": 155,
                      "type": "type3",
                      "amount": 229
                    },
                    "fine": {
                      "days": 135,
                      "type": "type5",
                      "amount": 209
                    },
                    "max_days_to_pay_past_due": 123
                  },
                  "manual_billing": true
                },
                "status": "status9",
                "duration": 5,
                "created_at": "created_at5",
                "updated_at": "updated_at3",
                "cycle": 201
              },
              "payment_method": "payment_method9",
              "currency": "currency9",
              "installments": 189,
              "status": "status1",
              "created_at": "2016-03-13T12:52:32.123Z",
              "updated_at": "2016-03-13T12:52:32.123Z",
              "customer": {},
              "card": {
                "id": "id3",
                "last_four_digits": "last_four_digits9",
                "brand": "brand7",
                "holder_name": "holder_name9",
                "exp_month": 83,
                "exp_year": 123,
                "status": "status5",
                "created_at": "2016-03-13T12:52:32.123Z",
                "updated_at": "2016-03-13T12:52:32.123Z",
                "billing_address": {
                  "street": "street5",
                  "number": "number3",
                  "zip_code": "zip_code9",
                  "neighborhood": "neighborhood1",
                  "city": "city5",
                  "state": "state1",
                  "country": "country9",
                  "complement": "complement1",
                  "line_1": "line_11",
                  "line_2": "line_23"
                },
                "customer": {},
                "metadata": {
                  "key0": "metadata0",
                  "key1": "metadata9"
                },
                "type": "type3",
                "holder_document": "holder_document7",
                "deleted_at": "2016-03-13T12:52:32.123Z",
                "first_six_digits": "first_six_digits3",
                "label": "label3"
              },
              "items": [
                {},
                {}
              ],
              "statement_descriptor": "statement_descriptor9",
              "metadata": {
                "key0": "metadata0",
                "key1": "metadata9"
              },
              "setup": {
                "id": "id3",
                "description": "description3",
                "amount": 213,
                "status": "status5"
              },
              "gateway_affiliation_id": "gateway_affiliation_id5",
              "next_billing_at": "2016-03-13T12:52:32.123Z",
              "billing_day": 161,
              "minimum_price": 19,
              "canceled_at": "2016-03-13T12:52:32.123Z",
              "discounts": [
                {},
                {},
                {}
              ],
              "increments": [
                {}
              ],
              "boleto_due_days": 133,
              "split": {
                "enabled": true,
                "rules": [
                  {},
                  {}
                ]
              },
              "boleto": {
                "interest": {
                  "days": 59,
                  "type": "type1",
                  "amount": 133
                },
                "fine": {
                  "days": 77,
                  "type": "type1",
                  "amount": 151
                },
                "max_days_to_pay_past_due": 65
              },
              "manual_billing": true
            },
            "subscription_item": {}
          }
        ],
        "increments": [
          {},
          {},
          {}
        ],
        "subscription": {},
        "name": "name1",
        "quantity": 223,
        "cycles": 243,
        "deleted_at": "2016-03-13T12:52:32.123Z"
      },
      "code": "code3",
      "group": "group3",
      "amount": 121
    },
    {
      "id": "id6",
      "quantity": 236,
      "description": "description6",
      "used_at": "2016-03-13T12:52:32.123Z",
      "created_at": "2016-03-13T12:52:32.123Z",
      "status": "status8",
      "deleted_at": "2016-03-13T12:52:32.123Z",
      "subscription_item": {
        "id": "id2",
        "description": "description2",
        "status": "status4",
        "created_at": "2016-03-13T12:52:32.123Z",
        "updated_at": "2016-03-13T12:52:32.123Z",
        "pricing_scheme": {
          "price": 42,
          "scheme_type": "scheme_type4",
          "price_brackets": [
            {
              "start_quantity": 167,
              "price": 105,
              "end_quantity": 175,
              "overage_price": 189
            },
            {
              "start_quantity": 168,
              "price": 106,
              "end_quantity": 176,
              "overage_price": 190
            },
            {
              "start_quantity": 169,
              "price": 107,
              "end_quantity": 177,
              "overage_price": 191
            }
          ],
          "minimum_price": 54,
          "percentage": 183.12
        },
        "discounts": [
          {
            "id": "id3",
            "value": 180.75,
            "discount_type": "discount_type1",
            "status": "status5",
            "created_at": "2016-03-13T12:52:32.123Z",
            "cycles": 179,
            "deleted_at": "2016-03-13T12:52:32.123Z",
            "description": "description3",
            "subscription": {
              "id": "id9",
              "code": "code7",
              "start_at": "2016-03-13T12:52:32.123Z",
              "interval": "interval7",
              "interval_count": 21,
              "billing_type": "billing_type3",
              "current_cycle": {
                "start_at": "2016-03-13T12:52:32.123Z",
                "end_at": "2016-03-13T12:52:32.123Z",
                "id": "id7",
                "billing_at": "2016-03-13T12:52:32.123Z",
                "subscription": {
                  "id": "id3",
                  "code": "code1",
                  "start_at": "2016-03-13T12:52:32.123Z",
                  "interval": "interval1",
                  "interval_count": 79,
                  "billing_type": "billing_type7",
                  "current_cycle": {
                    "start_at": "2016-03-13T12:52:32.123Z",
                    "end_at": "2016-03-13T12:52:32.123Z",
                    "id": "id1",
                    "billing_at": "2016-03-13T12:52:32.123Z",
                    "subscription": {},
                    "status": "status3",
                    "duration": 63,
                    "created_at": "created_at9",
                    "updated_at": "updated_at7",
                    "cycle": 3
                  },
                  "payment_method": "payment_method7",
                  "currency": "currency3",
                  "installments": 247,
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
                      "customer": {
                        "id": "id9",
                        "name": "name9",
                        "email": "email3",
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
                            "key0": "metadata6",
                            "key1": "metadata7"
                          },
                          "line_1": "line_19",
                          "line_2": "line_23",
                          "deleted_at": "2016-03-13T12:52:32.123Z"
                        },
                        "metadata": {
                          "key0": "metadata0",
                          "key1": "metadata9"
                        },
                        "phones": {
                          "home_phone": {
                            "country_code": "country_code1",
                            "number": "number9",
                            "area_code": "area_code1"
                          },
                          "mobile_phone": {
                            "country_code": "country_code1",
                            "number": "number9",
                            "area_code": "area_code1"
                          }
                        },
                        "fb_id": 33,
                        "code": "code7",
                        "document_type": "document_type7"
                      },
                      "metadata": {
                        "key0": "metadata0"
                      },
                      "line_1": "line_13",
                      "line_2": "line_27",
                      "deleted_at": "2016-03-13T12:52:32.123Z"
                    },
                    "metadata": {
                      "key0": "metadata0"
                    },
                    "phones": {
                      "home_phone": {},
                      "mobile_phone": {}
                    },
                    "fb_id": 239,
                    "code": "code1",
                    "document_type": "document_type1"
                  },
                  "card": {
                    "id": "id7",
                    "last_four_digits": "last_four_digits3",
                    "brand": "brand1",
                    "holder_name": "holder_name3",
                    "exp_month": 115,
                    "exp_year": 181,
                    "status": "status1",
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
                      "key0": "metadata6"
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
                        "price": 142,
                        "scheme_type": "scheme_type2",
                        "price_brackets": [
                          {}
                        ],
                        "minimum_price": 46,
                        "percentage": 189.8
                      },
                      "discounts": [
                        {
                          "id": "id1",
                          "value": 187.43,
                          "discount_type": "discount_type9",
                          "status": "status3",
                          "created_at": "2016-03-13T12:52:32.123Z",
                          "cycles": 79,
                          "deleted_at": "2016-03-13T12:52:32.123Z",
                          "description": "description1",
                          "subscription": {},
                          "subscription_item": {}
                        }
                      ],
                      "increments": [
                        {
                          "id": "id9",
                          "value": 42.71,
                          "increment_type": "increment_type1",
                          "status": "status1",
                          "created_at": "2016-03-13T12:52:32.123Z",
                          "cycles": 57,
                          "deleted_at": "2016-03-13T12:52:32.123Z",
                          "description": "description9",
                          "subscription": {},
                          "subscription_item": {}
                        },
                        {
                          "id": "id0",
                          "value": 42.72,
                          "increment_type": "increment_type2",
                          "status": "status2",
                          "created_at": "2016-03-13T12:52:32.123Z",
                          "cycles": 56,
                          "deleted_at": "2016-03-13T12:52:32.123Z",
                          "description": "description0",
                          "subscription": {},
                          "subscription_item": {}
                        }
                      ],
                      "subscription": {},
                      "name": "name0",
                      "quantity": 124,
                      "cycles": 144,
                      "deleted_at": "2016-03-13T12:52:32.123Z"
                    },
                    {
                      "id": "id1",
                      "description": "description1",
                      "status": "status3",
                      "created_at": "2016-03-13T12:52:32.123Z",
                      "updated_at": "2016-03-13T12:52:32.123Z",
                      "pricing_scheme": {
                        "price": 141,
                        "scheme_type": "scheme_type3",
                        "price_brackets": [
                          {},
                          {}
                        ],
                        "minimum_price": 45,
                        "percentage": 189.81
                      },
                      "discounts": [
                        {
                          "id": "id2",
                          "value": 187.44,
                          "discount_type": "discount_type0",
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
                          "value": 187.45,
                          "discount_type": "discount_type1",
                          "status": "status5",
                          "created_at": "2016-03-13T12:52:32.123Z",
                          "cycles": 81,
                          "deleted_at": "2016-03-13T12:52:32.123Z",
                          "description": "description3",
                          "subscription": {},
                          "subscription_item": {}
                        }
                      ],
                      "increments": [
                        {
                          "id": "id0",
                          "value": 42.72,
                          "increment_type": "increment_type2",
                          "status": "status2",
                          "created_at": "2016-03-13T12:52:32.123Z",
                          "cycles": 56,
                          "deleted_at": "2016-03-13T12:52:32.123Z",
                          "description": "description0",
                          "subscription": {},
                          "subscription_item": {}
                        },
                        {
                          "id": "id1",
                          "value": 42.73,
                          "increment_type": "increment_type3",
                          "status": "status3",
                          "created_at": "2016-03-13T12:52:32.123Z",
                          "cycles": 55,
                          "deleted_at": "2016-03-13T12:52:32.123Z",
                          "description": "description1",
                          "subscription": {},
                          "subscription_item": {}
                        },
                        {
                          "id": "id2",
                          "value": 42.74,
                          "increment_type": "increment_type4",
                          "status": "status4",
                          "created_at": "2016-03-13T12:52:32.123Z",
                          "cycles": 54,
                          "deleted_at": "2016-03-13T12:52:32.123Z",
                          "description": "description2",
                          "subscription": {},
                          "subscription_item": {}
                        }
                      ],
                      "subscription": {},
                      "name": "name1",
                      "quantity": 125,
                      "cycles": 145,
                      "deleted_at": "2016-03-13T12:52:32.123Z"
                    },
                    {
                      "id": "id2",
                      "description": "description2",
                      "status": "status4",
                      "created_at": "2016-03-13T12:52:32.123Z",
                      "updated_at": "2016-03-13T12:52:32.123Z",
                      "pricing_scheme": {
                        "price": 140,
                        "scheme_type": "scheme_type4",
                        "price_brackets": [
                          {},
                          {},
                          {}
                        ],
                        "minimum_price": 44,
                        "percentage": 189.82
                      },
                      "discounts": [
                        {
                          "id": "id3",
                          "value": 187.45,
                          "discount_type": "discount_type1",
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
                          "value": 187.46,
                          "discount_type": "discount_type2",
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
                          "value": 187.47,
                          "discount_type": "discount_type3",
                          "status": "status7",
                          "created_at": "2016-03-13T12:52:32.123Z",
                          "cycles": 83,
                          "deleted_at": "2016-03-13T12:52:32.123Z",
                          "description": "description5",
                          "subscription": {},
                          "subscription_item": {}
                        }
                      ],
                      "increments": [
                        {
                          "id": "id1",
                          "value": 42.73,
                          "increment_type": "increment_type3",
                          "status": "status3",
                          "created_at": "2016-03-13T12:52:32.123Z",
                          "cycles": 55,
                          "deleted_at": "2016-03-13T12:52:32.123Z",
                          "description": "description1",
                          "subscription": {},
                          "subscription_item": {}
                        }
                      ],
                      "subscription": {},
                      "name": "name2",
                      "quantity": 126,
                      "cycles": 146,
                      "deleted_at": "2016-03-13T12:52:32.123Z"
                    }
                  ],
                  "statement_descriptor": "statement_descriptor3",
                  "metadata": {
                    "key0": "metadata0",
                    "key1": "metadata9"
                  },
                  "setup": {
                    "id": "id7",
                    "description": "description7",
                    "amount": 15,
                    "status": "status9"
                  },
                  "gateway_affiliation_id": "gateway_affiliation_id9",
                  "next_billing_at": "2016-03-13T12:52:32.123Z",
                  "billing_day": 219,
                  "minimum_price": 77,
                  "canceled_at": "2016-03-13T12:52:32.123Z",
                  "discounts": [
                    {}
                  ],
                  "increments": [
                    {},
                    {}
                  ],
                  "boleto_due_days": 191,
                  "split": {
                    "enabled": true,
                    "rules": [
                      {
                        "type": "type7",
                        "amount": 151,
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
                                  "key0": "metadata6"
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
                                }
                              ],
                              "metadata": {
                                "key0": "metadata2"
                              },
                              "automatic_anticipation_settings": {
                                "enabled": true,
                                "type": "type9",
                                "volume_percentage": 173,
                                "delay": 117,
                                "days": [
                                  93,
                                  94,
                                  95
                                ]
                              },
                              "transfer_settings": {
                                "transfer_enabled": true,
                                "transfer_interval": "transfer_interval9",
                                "transfer_day": 83
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
                            "volume_percentage": 243,
                            "delay": 47,
                            "days": [
                              23,
                              24,
                              25
                            ]
                          },
                          "transfer_settings": {
                            "transfer_enabled": true,
                            "transfer_interval": "transfer_interval9",
                            "transfer_day": 153
                          },
                          "code": "code3",
                          "payment_mode": "payment_mode9"
                        },
                        "gateway_id": "gateway_id7",
                        "options": {
                          "liable": true,
                          "charge_processing_fee": true,
                          "charge_remainder_fee": "charge_remainder_fee9"
                        },
                        "id": "id3"
                      },
                      {
                        "type": "type6",
                        "amount": 152,
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
                                  "key1": "metadata4"
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
                                }
                              ],
                              "metadata": {
                                "key0": "metadata3",
                                "key1": "metadata2",
                                "key2": "metadata1"
                              },
                              "automatic_anticipation_settings": {
                                "enabled": false,
                                "type": "type0",
                                "volume_percentage": 172,
                                "delay": 118,
                                "days": [
                                  94
                                ]
                              },
                              "transfer_settings": {
                                "transfer_enabled": false,
                                "transfer_interval": "transfer_interval8",
                                "transfer_day": 82
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
                            "volume_percentage": 242,
                            "delay": 48,
                            "days": [
                              24
                            ]
                          },
                          "transfer_settings": {
                            "transfer_enabled": false,
                            "transfer_interval": "transfer_interval8",
                            "transfer_day": 152
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
                        "amount": 153,
                        "recipient": {
                          "id": "id7",
                          "name": "name7",
                          "email": "email9",
                          "document": "document9",
                          "description": "description7",
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
                                  "key0": "metadata4",
                                  "key1": "metadata3",
                                  "key2": "metadata2"
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
                                },
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
                                "key0": "metadata4",
                                "key1": "metadata3"
                              },
                              "automatic_anticipation_settings": {
                                "enabled": true,
                                "type": "type1",
                                "volume_percentage": 171,
                                "delay": 119,
                                "days": [
                                  95,
                                  96
                                ]
                              },
                              "transfer_settings": {
                                "transfer_enabled": true,
                                "transfer_interval": "transfer_interval7",
                                "transfer_day": 81
                              },
                              "code": "code5",
                              "payment_mode": "payment_mode1"
                            },
                            "metadata": {
                              "key0": "metadata2",
                              "key1": "metadata1"
                            },
                            "pix_key": "pix_key1"
                          },
                          "gateway_recipients": [
                            {},
                            {},
                            {}
                          ],
                          "metadata": {
                            "key0": "metadata6",
                            "key1": "metadata7"
                          },
                          "automatic_anticipation_settings": {
                            "enabled": true,
                            "type": "type9",
                            "volume_percentage": 241,
                            "delay": 49,
                            "days": [
                              25,
                              26
                            ]
                          },
                          "transfer_settings": {
                            "transfer_enabled": true,
                            "transfer_interval": "transfer_interval7",
                            "transfer_day": 151
                          },
                          "code": "code5",
                          "payment_mode": "payment_mode1"
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
                      "days": 155,
                      "type": "type3",
                      "amount": 229
                    },
                    "fine": {
                      "days": 135,
                      "type": "type5",
                      "amount": 209
                    },
                    "max_days_to_pay_past_due": 123
                  },
                  "manual_billing": true
                },
                "status": "status9",
                "duration": 5,
                "created_at": "created_at5",
                "updated_at": "updated_at3",
                "cycle": 201
              },
              "payment_method": "payment_method9",
              "currency": "currency9",
              "installments": 189,
              "status": "status1",
              "created_at": "2016-03-13T12:52:32.123Z",
              "updated_at": "2016-03-13T12:52:32.123Z",
              "customer": {},
              "card": {
                "id": "id3",
                "last_four_digits": "last_four_digits9",
                "brand": "brand7",
                "holder_name": "holder_name9",
                "exp_month": 83,
                "exp_year": 123,
                "status": "status5",
                "created_at": "2016-03-13T12:52:32.123Z",
                "updated_at": "2016-03-13T12:52:32.123Z",
                "billing_address": {
                  "street": "street5",
                  "number": "number3",
                  "zip_code": "zip_code9",
                  "neighborhood": "neighborhood1",
                  "city": "city5",
                  "state": "state1",
                  "country": "country9",
                  "complement": "complement1",
                  "line_1": "line_11",
                  "line_2": "line_23"
                },
                "customer": {},
                "metadata": {
                  "key0": "metadata0",
                  "key1": "metadata9"
                },
                "type": "type3",
                "holder_document": "holder_document7",
                "deleted_at": "2016-03-13T12:52:32.123Z",
                "first_six_digits": "first_six_digits3",
                "label": "label3"
              },
              "items": [
                {},
                {}
              ],
              "statement_descriptor": "statement_descriptor9",
              "metadata": {
                "key0": "metadata0",
                "key1": "metadata9"
              },
              "setup": {
                "id": "id3",
                "description": "description3",
                "amount": 213,
                "status": "status5"
              },
              "gateway_affiliation_id": "gateway_affiliation_id5",
              "next_billing_at": "2016-03-13T12:52:32.123Z",
              "billing_day": 161,
              "minimum_price": 19,
              "canceled_at": "2016-03-13T12:52:32.123Z",
              "discounts": [
                {},
                {},
                {}
              ],
              "increments": [
                {}
              ],
              "boleto_due_days": 133,
              "split": {
                "enabled": true,
                "rules": [
                  {},
                  {}
                ]
              },
              "boleto": {
                "interest": {
                  "days": 59,
                  "type": "type1",
                  "amount": 133
                },
                "fine": {
                  "days": 77,
                  "type": "type1",
                  "amount": 151
                },
                "max_days_to_pay_past_due": 65
              },
              "manual_billing": true
            },
            "subscription_item": {}
          },
          {
            "id": "id4",
            "value": 180.76,
            "discount_type": "discount_type2",
            "status": "status6",
            "created_at": "2016-03-13T12:52:32.123Z",
            "cycles": 180,
            "deleted_at": "2016-03-13T12:52:32.123Z",
            "description": "description4",
            "subscription": {
              "id": "id0",
              "code": "code8",
              "start_at": "2016-03-13T12:52:32.123Z",
              "interval": "interval8",
              "interval_count": 22,
              "billing_type": "billing_type4",
              "current_cycle": {
                "start_at": "2016-03-13T12:52:32.123Z",
                "end_at": "2016-03-13T12:52:32.123Z",
                "id": "id8",
                "billing_at": "2016-03-13T12:52:32.123Z",
                "subscription": {
                  "id": "id4",
                  "code": "code2",
                  "start_at": "2016-03-13T12:52:32.123Z",
                  "interval": "interval2",
                  "interval_count": 80,
                  "billing_type": "billing_type8",
                  "current_cycle": {
                    "start_at": "2016-03-13T12:52:32.123Z",
                    "end_at": "2016-03-13T12:52:32.123Z",
                    "id": "id2",
                    "billing_at": "2016-03-13T12:52:32.123Z",
                    "subscription": {},
                    "status": "status4",
                    "duration": 64,
                    "created_at": "created_at0",
                    "updated_at": "updated_at8",
                    "cycle": 4
                  },
                  "payment_method": "payment_method6",
                  "currency": "currency4",
                  "installments": 248,
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
                      "customer": {
                        "id": "id0",
                        "name": "name0",
                        "email": "email4",
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
                            "key0": "metadata7",
                            "key1": "metadata8",
                            "key2": "metadata9"
                          },
                          "line_1": "line_10",
                          "line_2": "line_24",
                          "deleted_at": "2016-03-13T12:52:32.123Z"
                        },
                        "metadata": {
                          "key0": "metadata9",
                          "key1": "metadata8",
                          "key2": "metadata7"
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
                        "fb_id": 34,
                        "code": "code8",
                        "document_type": "document_type8"
                      },
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
                      "home_phone": {},
                      "mobile_phone": {}
                    },
                    "fb_id": 240,
                    "code": "code2",
                    "document_type": "document_type2"
                  },
                  "card": {
                    "id": "id8",
                    "last_four_digits": "last_four_digits4",
                    "brand": "brand2",
                    "holder_name": "holder_name4",
                    "exp_month": 114,
                    "exp_year": 182,
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
                      "key1": "metadata6",
                      "key2": "metadata7"
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
                        "price": 141,
                        "scheme_type": "scheme_type3",
                        "price_brackets": [
                          {},
                          {}
                        ],
                        "minimum_price": 45,
                        "percentage": 189.81
                      },
                      "discounts": [
                        {
                          "id": "id2",
                          "value": 187.44,
                          "discount_type": "discount_type0",
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
                          "value": 187.45,
                          "discount_type": "discount_type1",
                          "status": "status5",
                          "created_at": "2016-03-13T12:52:32.123Z",
                          "cycles": 81,
                          "deleted_at": "2016-03-13T12:52:32.123Z",
                          "description": "description3",
                          "subscription": {},
                          "subscription_item": {}
                        }
                      ],
                      "increments": [
                        {
                          "id": "id0",
                          "value": 42.72,
                          "increment_type": "increment_type2",
                          "status": "status2",
                          "created_at": "2016-03-13T12:52:32.123Z",
                          "cycles": 56,
                          "deleted_at": "2016-03-13T12:52:32.123Z",
                          "description": "description0",
                          "subscription": {},
                          "subscription_item": {}
                        },
                        {
                          "id": "id1",
                          "value": 42.73,
                          "increment_type": "increment_type3",
                          "status": "status3",
                          "created_at": "2016-03-13T12:52:32.123Z",
                          "cycles": 55,
                          "deleted_at": "2016-03-13T12:52:32.123Z",
                          "description": "description1",
                          "subscription": {},
                          "subscription_item": {}
                        },
                        {
                          "id": "id2",
                          "value": 42.74,
                          "increment_type": "increment_type4",
                          "status": "status4",
                          "created_at": "2016-03-13T12:52:32.123Z",
                          "cycles": 54,
                          "deleted_at": "2016-03-13T12:52:32.123Z",
                          "description": "description2",
                          "subscription": {},
                          "subscription_item": {}
                        }
                      ],
                      "subscription": {},
                      "name": "name1",
                      "quantity": 125,
                      "cycles": 145,
                      "deleted_at": "2016-03-13T12:52:32.123Z"
                    }
                  ],
                  "statement_descriptor": "statement_descriptor4",
                  "metadata": {
                    "key0": "metadata1"
                  },
                  "setup": {
                    "id": "id8",
                    "description": "description8",
                    "amount": 16,
                    "status": "status0"
                  },
                  "gateway_affiliation_id": "gateway_affiliation_id0",
                  "next_billing_at": "2016-03-13T12:52:32.123Z",
                  "billing_day": 220,
                  "minimum_price": 78,
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
                  "boleto_due_days": 192,
                  "split": {
                    "enabled": false,
                    "rules": [
                      {
                        "type": "type6",
                        "amount": 152,
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
                                  "key1": "metadata4"
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
                                }
                              ],
                              "metadata": {
                                "key0": "metadata3",
                                "key1": "metadata2",
                                "key2": "metadata1"
                              },
                              "automatic_anticipation_settings": {
                                "enabled": false,
                                "type": "type0",
                                "volume_percentage": 172,
                                "delay": 118,
                                "days": [
                                  94
                                ]
                              },
                              "transfer_settings": {
                                "transfer_enabled": false,
                                "transfer_interval": "transfer_interval8",
                                "transfer_day": 82
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
                            "volume_percentage": 242,
                            "delay": 48,
                            "days": [
                              24
                            ]
                          },
                          "transfer_settings": {
                            "transfer_enabled": false,
                            "transfer_interval": "transfer_interval8",
                            "transfer_day": 152
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
                      }
                    ]
                  },
                  "boleto": {
                    "interest": {
                      "days": 154,
                      "type": "type4",
                      "amount": 228
                    },
                    "fine": {
                      "days": 136,
                      "type": "type4",
                      "amount": 210
                    },
                    "max_days_to_pay_past_due": 124
                  },
                  "manual_billing": false
                },
                "status": "status0",
                "duration": 6,
                "created_at": "created_at6",
                "updated_at": "updated_at4",
                "cycle": 202
              },
              "payment_method": "payment_method0",
              "currency": "currency0",
              "installments": 190,
              "status": "status2",
              "created_at": "2016-03-13T12:52:32.123Z",
              "updated_at": "2016-03-13T12:52:32.123Z",
              "customer": {},
              "card": {
                "id": "id4",
                "last_four_digits": "last_four_digits0",
                "brand": "brand8",
                "holder_name": "holder_name0",
                "exp_month": 84,
                "exp_year": 124,
                "status": "status6",
                "created_at": "2016-03-13T12:52:32.123Z",
                "updated_at": "2016-03-13T12:52:32.123Z",
                "billing_address": {
                  "street": "street6",
                  "number": "number4",
                  "zip_code": "zip_code0",
                  "neighborhood": "neighborhood2",
                  "city": "city6",
                  "state": "state2",
                  "country": "country0",
                  "complement": "complement2",
                  "line_1": "line_10",
                  "line_2": "line_24"
                },
                "customer": {},
                "metadata": {
                  "key0": "metadata1"
                },
                "type": "type4",
                "holder_document": "holder_document8",
                "deleted_at": "2016-03-13T12:52:32.123Z",
                "first_six_digits": "first_six_digits4",
                "label": "label4"
              },
              "items": [
                {},
                {},
                {}
              ],
              "statement_descriptor": "statement_descriptor0",
              "metadata": {
                "key0": "metadata9",
                "key1": "metadata8",
                "key2": "metadata7"
              },
              "setup": {
                "id": "id4",
                "description": "description4",
                "amount": 214,
                "status": "status6"
              },
              "gateway_affiliation_id": "gateway_affiliation_id6",
              "next_billing_at": "2016-03-13T12:52:32.123Z",
              "billing_day": 162,
              "minimum_price": 20,
              "canceled_at": "2016-03-13T12:52:32.123Z",
              "discounts": [
                {}
              ],
              "increments": [
                {},
                {}
              ],
              "boleto_due_days": 134,
              "split": {
                "enabled": false,
                "rules": [
                  {},
                  {},
                  {}
                ]
              },
              "boleto": {
                "interest": {
                  "days": 60,
                  "type": "type0",
                  "amount": 134
                },
                "fine": {
                  "days": 78,
                  "type": "type2",
                  "amount": 152
                },
                "max_days_to_pay_past_due": 66
              },
              "manual_billing": false
            },
            "subscription_item": {}
          },
          {
            "id": "id5",
            "value": 180.77,
            "discount_type": "discount_type3",
            "status": "status7",
            "created_at": "2016-03-13T12:52:32.123Z",
            "cycles": 181,
            "deleted_at": "2016-03-13T12:52:32.123Z",
            "description": "description5",
            "subscription": {
              "id": "id1",
              "code": "code9",
              "start_at": "2016-03-13T12:52:32.123Z",
              "interval": "interval9",
              "interval_count": 23,
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
                  "interval_count": 81,
                  "billing_type": "billing_type9",
                  "current_cycle": {
                    "start_at": "2016-03-13T12:52:32.123Z",
                    "end_at": "2016-03-13T12:52:32.123Z",
                    "id": "id3",
                    "billing_at": "2016-03-13T12:52:32.123Z",
                    "subscription": {},
                    "status": "status5",
                    "duration": 65,
                    "created_at": "created_at1",
                    "updated_at": "updated_at9",
                    "cycle": 5
                  },
                  "payment_method": "payment_method5",
                  "currency": "currency5",
                  "installments": 249,
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
                            "key0": "metadata8"
                          },
                          "line_1": "line_11",
                          "line_2": "line_25",
                          "deleted_at": "2016-03-13T12:52:32.123Z"
                        },
                        "metadata": {
                          "key0": "metadata8"
                        },
                        "phones": {
                          "home_phone": {
                            "country_code": "country_code3",
                            "number": "number1",
                            "area_code": "area_code3"
                          },
                          "mobile_phone": {
                            "country_code": "country_code3",
                            "number": "number1",
                            "area_code": "area_code3"
                          }
                        },
                        "fb_id": 35,
                        "code": "code9",
                        "document_type": "document_type9"
                      },
                      "metadata": {
                        "key0": "metadata8",
                        "key1": "metadata7",
                        "key2": "metadata6"
                      },
                      "line_1": "line_15",
                      "line_2": "line_29",
                      "deleted_at": "2016-03-13T12:52:32.123Z"
                    },
                    "metadata": {
                      "key0": "metadata2",
                      "key1": "metadata1"
                    },
                    "phones": {
                      "home_phone": {},
                      "mobile_phone": {}
                    },
                    "fb_id": 241,
                    "code": "code3",
                    "document_type": "document_type3"
                  },
                  "card": {
                    "id": "id9",
                    "last_four_digits": "last_four_digits5",
                    "brand": "brand3",
                    "holder_name": "holder_name5",
                    "exp_month": 113,
                    "exp_year": 183,
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
                    {
                      "id": "id2",
                      "description": "description2",
                      "status": "status4",
                      "created_at": "2016-03-13T12:52:32.123Z",
                      "updated_at": "2016-03-13T12:52:32.123Z",
                      "pricing_scheme": {
                        "price": 140,
                        "scheme_type": "scheme_type4",
                        "price_brackets": [
                          {},
                          {},
                          {}
                        ],
                        "minimum_price": 44,
                        "percentage": 189.82
                      },
                      "discounts": [
                        {
                          "id": "id3",
                          "value": 187.45,
                          "discount_type": "discount_type1",
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
                          "value": 187.46,
                          "discount_type": "discount_type2",
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
                          "value": 187.47,
                          "discount_type": "discount_type3",
                          "status": "status7",
                          "created_at": "2016-03-13T12:52:32.123Z",
                          "cycles": 83,
                          "deleted_at": "2016-03-13T12:52:32.123Z",
                          "description": "description5",
                          "subscription": {},
                          "subscription_item": {}
                        }
                      ],
                      "increments": [
                        {
                          "id": "id1",
                          "value": 42.73,
                          "increment_type": "increment_type3",
                          "status": "status3",
                          "created_at": "2016-03-13T12:52:32.123Z",
                          "cycles": 55,
                          "deleted_at": "2016-03-13T12:52:32.123Z",
                          "description": "description1",
                          "subscription": {},
                          "subscription_item": {}
                        }
                      ],
                      "subscription": {},
                      "name": "name2",
                      "quantity": 126,
                      "cycles": 146,
                      "deleted_at": "2016-03-13T12:52:32.123Z"
                    },
                    {
                      "id": "id3",
                      "description": "description3",
                      "status": "status5",
                      "created_at": "2016-03-13T12:52:32.123Z",
                      "updated_at": "2016-03-13T12:52:32.123Z",
                      "pricing_scheme": {
                        "price": 139,
                        "scheme_type": "scheme_type5",
                        "price_brackets": [
                          {}
                        ],
                        "minimum_price": 43,
                        "percentage": 189.83
                      },
                      "discounts": [
                        {
                          "id": "id4",
                          "value": 187.46,
                          "discount_type": "discount_type2",
                          "status": "status6",
                          "created_at": "2016-03-13T12:52:32.123Z",
                          "cycles": 82,
                          "deleted_at": "2016-03-13T12:52:32.123Z",
                          "description": "description4",
                          "subscription": {},
                          "subscription_item": {}
                        }
                      ],
                      "increments": [
                        {
                          "id": "id2",
                          "value": 42.74,
                          "increment_type": "increment_type4",
                          "status": "status4",
                          "created_at": "2016-03-13T12:52:32.123Z",
                          "cycles": 54,
                          "deleted_at": "2016-03-13T12:52:32.123Z",
                          "description": "description2",
                          "subscription": {},
                          "subscription_item": {}
                        },
                        {
                          "id": "id3",
                          "value": 42.75,
                          "increment_type": "increment_type5",
                          "status": "status5",
                          "created_at": "2016-03-13T12:52:32.123Z",
                          "cycles": 53,
                          "deleted_at": "2016-03-13T12:52:32.123Z",
                          "description": "description3",
                          "subscription": {},
                          "subscription_item": {}
                        }
                      ],
                      "subscription": {},
                      "name": "name3",
                      "quantity": 127,
                      "cycles": 147,
                      "deleted_at": "2016-03-13T12:52:32.123Z"
                    }
                  ],
                  "statement_descriptor": "statement_descriptor5",
                  "metadata": {
                    "key0": "metadata2",
                    "key1": "metadata1",
                    "key2": "metadata0"
                  },
                  "setup": {
                    "id": "id9",
                    "description": "description9",
                    "amount": 17,
                    "status": "status1"
                  },
                  "gateway_affiliation_id": "gateway_affiliation_id1",
                  "next_billing_at": "2016-03-13T12:52:32.123Z",
                  "billing_day": 221,
                  "minimum_price": 79,
                  "canceled_at": "2016-03-13T12:52:32.123Z",
                  "discounts": [
                    {},
                    {},
                    {}
                  ],
                  "increments": [
                    {}
                  ],
                  "boleto_due_days": 193,
                  "split": {
                    "enabled": true,
                    "rules": [
                      {
                        "type": "type5",
                        "amount": 153,
                        "recipient": {
                          "id": "id7",
                          "name": "name7",
                          "email": "email9",
                          "document": "document9",
                          "description": "description7",
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
                                  "key0": "metadata4",
                                  "key1": "metadata3",
                                  "key2": "metadata2"
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
                                },
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
                                "key0": "metadata4",
                                "key1": "metadata3"
                              },
                              "automatic_anticipation_settings": {
                                "enabled": true,
                                "type": "type1",
                                "volume_percentage": 171,
                                "delay": 119,
                                "days": [
                                  95,
                                  96
                                ]
                              },
                              "transfer_settings": {
                                "transfer_enabled": true,
                                "transfer_interval": "transfer_interval7",
                                "transfer_day": 81
                              },
                              "code": "code5",
                              "payment_mode": "payment_mode1"
                            },
                            "metadata": {
                              "key0": "metadata2",
                              "key1": "metadata1"
                            },
                            "pix_key": "pix_key1"
                          },
                          "gateway_recipients": [
                            {},
                            {},
                            {}
                          ],
                          "metadata": {
                            "key0": "metadata6",
                            "key1": "metadata7"
                          },
                          "automatic_anticipation_settings": {
                            "enabled": true,
                            "type": "type9",
                            "volume_percentage": 241,
                            "delay": 49,
                            "days": [
                              25,
                              26
                            ]
                          },
                          "transfer_settings": {
                            "transfer_enabled": true,
                            "transfer_interval": "transfer_interval7",
                            "transfer_day": 151
                          },
                          "code": "code5",
                          "payment_mode": "payment_mode1"
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
                        "amount": 154,
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
                                "volume_percentage": 170,
                                "delay": 120,
                                "days": [
                                  96,
                                  97,
                                  98
                                ]
                              },
                              "transfer_settings": {
                                "transfer_enabled": false,
                                "transfer_interval": "transfer_interval6",
                                "transfer_day": 80
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
                            "volume_percentage": 240,
                            "delay": 50,
                            "days": [
                              26,
                              27,
                              28
                            ]
                          },
                          "transfer_settings": {
                            "transfer_enabled": false,
                            "transfer_interval": "transfer_interval6",
                            "transfer_day": 150
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
                      }
                    ]
                  },
                  "boleto": {
                    "interest": {
                      "days": 153,
                      "type": "type5",
                      "amount": 227
                    },
                    "fine": {
                      "days": 137,
                      "type": "type3",
                      "amount": 211
                    },
                    "max_days_to_pay_past_due": 125
                  },
                  "manual_billing": true
                },
                "status": "status1",
                "duration": 7,
                "created_at": "created_at7",
                "updated_at": "updated_at5",
                "cycle": 203
              },
              "payment_method": "payment_method1",
              "currency": "currency1",
              "installments": 191,
              "status": "status3",
              "created_at": "2016-03-13T12:52:32.123Z",
              "updated_at": "2016-03-13T12:52:32.123Z",
              "customer": {},
              "card": {
                "id": "id5",
                "last_four_digits": "last_four_digits1",
                "brand": "brand9",
                "holder_name": "holder_name1",
                "exp_month": 85,
                "exp_year": 125,
                "status": "status7",
                "created_at": "2016-03-13T12:52:32.123Z",
                "updated_at": "2016-03-13T12:52:32.123Z",
                "billing_address": {
                  "street": "street7",
                  "number": "number5",
                  "zip_code": "zip_code1",
                  "neighborhood": "neighborhood3",
                  "city": "city7",
                  "state": "state3",
                  "country": "country1",
                  "complement": "complement3",
                  "line_1": "line_19",
                  "line_2": "line_25"
                },
                "customer": {},
                "metadata": {
                  "key0": "metadata2",
                  "key1": "metadata1",
                  "key2": "metadata0"
                },
                "type": "type5",
                "holder_document": "holder_document9",
                "deleted_at": "2016-03-13T12:52:32.123Z",
                "first_six_digits": "first_six_digits5",
                "label": "label5"
              },
              "items": [
                {}
              ],
              "statement_descriptor": "statement_descriptor1",
              "metadata": {
                "key0": "metadata8"
              },
              "setup": {
                "id": "id5",
                "description": "description5",
                "amount": 215,
                "status": "status7"
              },
              "gateway_affiliation_id": "gateway_affiliation_id7",
              "next_billing_at": "2016-03-13T12:52:32.123Z",
              "billing_day": 163,
              "minimum_price": 21,
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
              "boleto_due_days": 135,
              "split": {
                "enabled": true,
                "rules": [
                  {}
                ]
              },
              "boleto": {
                "interest": {
                  "days": 61,
                  "type": "type9",
                  "amount": 135
                },
                "fine": {
                  "days": 79,
                  "type": "type3",
                  "amount": 153
                },
                "max_days_to_pay_past_due": 67
              },
              "manual_billing": true
            },
            "subscription_item": {}
          }
        ],
        "increments": [
          {}
        ],
        "subscription": {},
        "name": "name2",
        "quantity": 224,
        "cycles": 244,
        "deleted_at": "2016-03-13T12:52:32.123Z"
      },
      "code": "code4",
      "group": "group4",
      "amount": 122
    }
  ],
  "paging": {
    "total": 6,
    "previous": "previous2",
    "next": "next8"
  }
}
```

