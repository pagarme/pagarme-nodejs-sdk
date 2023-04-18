
# List Discounts Response

## Structure

`ListDiscountsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`GetDiscountResponse[] \| undefined`](../../doc/models/get-discount-response.md) | Optional | The Discounts response |
| `paging` | [`PagingResponse \| undefined`](../../doc/models/paging-response.md) | Optional | Paging object |

## Example (as JSON)

```json
{
  "data": [
    {
      "id": "id5",
      "value": 145.67,
      "discount_type": "discount_type3",
      "status": "status7",
      "created_at": "2016-03-13T12:52:32.123Z",
      "cycles": 255,
      "deleted_at": "2016-03-13T12:52:32.123Z",
      "description": "description5",
      "subscription": {
        "id": "id1",
        "code": "code9",
        "start_at": "2016-03-13T12:52:32.123Z",
        "interval": "interval9",
        "interval_count": 97,
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
            "interval": "interval7",
            "interval_count": 9,
            "billing_type": "billing_type1",
            "current_cycle": {
              "start_at": "2016-03-13T12:52:32.123Z",
              "end_at": "2016-03-13T12:52:32.123Z",
              "id": "id3",
              "billing_at": "2016-03-13T12:52:32.123Z",
              "subscription": {},
              "status": "status5",
              "duration": 249,
              "created_at": "created_at1",
              "updated_at": "updated_at9",
              "cycle": 189
            },
            "payment_method": "payment_method5",
            "currency": "currency5",
            "installments": 177,
            "status": "status3",
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
                  "type": "type9",
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
                      "key1": "metadata1",
                      "key2": "metadata0"
                    },
                    "line_1": "line_11",
                    "line_2": "line_25",
                    "deleted_at": "2016-03-13T12:52:32.123Z"
                  },
                  "metadata": {
                    "key0": "metadata2",
                    "key1": "metadata3"
                  },
                  "phones": {
                    "home_phone": {
                      "country_code": "country_code3",
                      "number": "number1",
                      "area_code": "area_code3"
                    },
                    "mobile_phone": {
                      "country_code": "country_code7",
                      "number": "number9",
                      "area_code": "area_code3"
                    }
                  },
                  "fb_id": 41,
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
                "key0": "metadata8",
                "key1": "metadata9",
                "key2": "metadata0"
              },
              "phones": {
                "home_phone": {},
                "mobile_phone": {}
              },
              "fb_id": 247,
              "code": "code3",
              "document_type": "document_type3"
            },
            "card": {
              "id": "id1",
              "last_four_digits": "last_four_digits7",
              "brand": "brand5",
              "holder_name": "holder_name7",
              "exp_month": 155,
              "exp_year": 141,
              "status": "status7",
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
                "id": "id2",
                "description": "description2",
                "status": "status4",
                "created_at": "2016-03-13T12:52:32.123Z",
                "updated_at": "2016-03-13T12:52:32.123Z",
                "pricing_scheme": {
                  "price": 76,
                  "scheme_type": "scheme_type6",
                  "price_brackets": [
                    {
                      "start_quantity": 133,
                      "price": 185,
                      "end_quantity": 141,
                      "overage_price": 155
                    }
                  ],
                  "minimum_price": 236,
                  "percentage": 198.14
                },
                "discounts": [
                  {
                    "id": "id3",
                    "value": 63.85,
                    "discount_type": "discount_type1",
                    "status": "status5",
                    "created_at": "2016-03-13T12:52:32.123Z",
                    "cycles": 9,
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
                        "price": 33,
                        "scheme_type": "scheme_type1",
                        "price_brackets": [
                          {}
                        ],
                        "minimum_price": 193,
                        "percentage": 101.29
                      },
                      "discounts": [
                        {}
                      ],
                      "increments": [
                        {
                          "id": "id8",
                          "value": 210.2,
                          "increment_type": "increment_type0",
                          "status": "status0",
                          "created_at": "2016-03-13T12:52:32.123Z",
                          "cycles": 204,
                          "deleted_at": "2016-03-13T12:52:32.123Z",
                          "description": "description8",
                          "subscription": {},
                          "subscription_item": {}
                        },
                        {
                          "id": "id9",
                          "value": 210.21,
                          "increment_type": "increment_type1",
                          "status": "status1",
                          "created_at": "2016-03-13T12:52:32.123Z",
                          "cycles": 203,
                          "deleted_at": "2016-03-13T12:52:32.123Z",
                          "description": "description9",
                          "subscription": {},
                          "subscription_item": {}
                        }
                      ],
                      "subscription": {},
                      "name": "name9",
                      "quantity": 233,
                      "cycles": 253,
                      "deleted_at": "2016-03-13T12:52:32.123Z"
                    }
                  },
                  {
                    "id": "id4",
                    "value": 63.86,
                    "discount_type": "discount_type2",
                    "status": "status6",
                    "created_at": "2016-03-13T12:52:32.123Z",
                    "cycles": 10,
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
                        "price": 32,
                        "scheme_type": "scheme_type2",
                        "price_brackets": [
                          {},
                          {}
                        ],
                        "minimum_price": 192,
                        "percentage": 101.3
                      },
                      "discounts": [
                        {},
                        {}
                      ],
                      "increments": [
                        {
                          "id": "id9",
                          "value": 210.21,
                          "increment_type": "increment_type1",
                          "status": "status1",
                          "created_at": "2016-03-13T12:52:32.123Z",
                          "cycles": 203,
                          "deleted_at": "2016-03-13T12:52:32.123Z",
                          "description": "description9",
                          "subscription": {},
                          "subscription_item": {}
                        },
                        {
                          "id": "id0",
                          "value": 210.22,
                          "increment_type": "increment_type2",
                          "status": "status2",
                          "created_at": "2016-03-13T12:52:32.123Z",
                          "cycles": 202,
                          "deleted_at": "2016-03-13T12:52:32.123Z",
                          "description": "description0",
                          "subscription": {},
                          "subscription_item": {}
                        },
                        {
                          "id": "id1",
                          "value": 210.23,
                          "increment_type": "increment_type3",
                          "status": "status3",
                          "created_at": "2016-03-13T12:52:32.123Z",
                          "cycles": 201,
                          "deleted_at": "2016-03-13T12:52:32.123Z",
                          "description": "description1",
                          "subscription": {},
                          "subscription_item": {}
                        }
                      ],
                      "subscription": {},
                      "name": "name0",
                      "quantity": 234,
                      "cycles": 254,
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
                "name": "name2",
                "quantity": 54,
                "cycles": 182,
                "deleted_at": "2016-03-13T12:52:32.123Z"
              }
            ],
            "statement_descriptor": "statement_descriptor5",
            "metadata": {
              "key0": "metadata8"
            },
            "setup": {
              "id": "id9",
              "description": "description1",
              "amount": 55,
              "status": "status9"
            },
            "gateway_affiliation_id": "gateway_affiliation_id1",
            "next_billing_at": "2016-03-13T12:52:32.123Z",
            "billing_day": 107,
            "minimum_price": 249,
            "canceled_at": "2016-03-13T12:52:32.123Z",
            "discounts": [
              {},
              {}
            ],
            "increments": [
              {},
              {}
            ],
            "boleto_due_days": 121,
            "split": {
              "enabled": true,
              "rules": [
                {
                  "type": "type5",
                  "amount": 175,
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
                            "key1": "metadata7"
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
                          }
                        ],
                        "metadata": {
                          "key0": "metadata0",
                          "key1": "metadata1",
                          "key2": "metadata2"
                        },
                        "automatic_anticipation_settings": {
                          "enabled": true,
                          "type": "type3",
                          "volume_percentage": 73,
                          "delay": 217,
                          "days": [
                            193
                          ]
                        },
                        "transfer_settings": {
                          "transfer_enabled": true,
                          "transfer_interval": "transfer_interval1",
                          "transfer_day": 239
                        },
                        "code": "code1",
                        "payment_mode": "payment_mode7"
                      },
                      "metadata": {
                        "key0": "metadata8",
                        "key1": "metadata7",
                        "key2": "metadata6"
                      },
                      "pix_key": "pix_key5"
                    },
                    "gateway_recipients": [
                      {},
                      {}
                    ],
                    "metadata": {
                      "key0": "metadata0",
                      "key1": "metadata1",
                      "key2": "metadata2"
                    },
                    "automatic_anticipation_settings": {
                      "enabled": true,
                      "type": "type3",
                      "volume_percentage": 143,
                      "delay": 147,
                      "days": [
                        123
                      ]
                    },
                    "transfer_settings": {
                      "transfer_enabled": true,
                      "transfer_interval": "transfer_interval1",
                      "transfer_day": 53
                    },
                    "code": "code1",
                    "payment_mode": "payment_mode3"
                  },
                  "gateway_id": "gateway_id5",
                  "options": {
                    "liable": true,
                    "charge_processing_fee": true,
                    "charge_remainder_fee": "charge_remainder_fee5"
                  },
                  "id": "id5"
                }
              ]
            },
            "boleto": {
              "interest": {
                "days": 87,
                "type": "type5",
                "amount": 161
              },
              "fine": {
                "days": 69,
                "type": "type7",
                "amount": 113
              },
              "max_days_to_pay_past_due": 191
            },
            "manual_billing": true
          },
          "status": "status1",
          "duration": 81,
          "created_at": "created_at7",
          "updated_at": "updated_at5",
          "cycle": 21
        },
        "payment_method": "payment_method9",
        "currency": "currency1",
        "installments": 9,
        "status": "status3",
        "created_at": "2016-03-13T12:52:32.123Z",
        "updated_at": "2016-03-13T12:52:32.123Z",
        "customer": {},
        "card": {
          "id": "id5",
          "last_four_digits": "last_four_digits1",
          "brand": "brand9",
          "holder_name": "holder_name1",
          "exp_month": 97,
          "exp_year": 199,
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
          {}
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
          "amount": 33,
          "status": "status7"
        },
        "gateway_affiliation_id": "gateway_affiliation_id7",
        "next_billing_at": "2016-03-13T12:52:32.123Z",
        "billing_day": 237,
        "minimum_price": 161,
        "canceled_at": "2016-03-13T12:52:32.123Z",
        "discounts": [
          {},
          {},
          {}
        ],
        "increments": [
          {}
        ],
        "boleto_due_days": 209,
        "split": {
          "enabled": true,
          "rules": [
            {},
            {}
          ]
        },
        "boleto": {
          "interest": {
            "days": 137,
            "type": "type1",
            "amount": 211
          },
          "fine": {
            "days": 153,
            "type": "type7",
            "amount": 227
          },
          "max_days_to_pay_past_due": 141
        },
        "manual_billing": true
      },
      "subscription_item": {}
    },
    {
      "id": "id6",
      "value": 145.68,
      "discount_type": "discount_type4",
      "status": "status8",
      "created_at": "2016-03-13T12:52:32.123Z",
      "cycles": 0,
      "deleted_at": "2016-03-13T12:52:32.123Z",
      "description": "description6",
      "subscription": {
        "id": "id2",
        "code": "code0",
        "start_at": "2016-03-13T12:52:32.123Z",
        "interval": "interval0",
        "interval_count": 98,
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
            "interval": "interval8",
            "interval_count": 8,
            "billing_type": "billing_type2",
            "current_cycle": {
              "start_at": "2016-03-13T12:52:32.123Z",
              "end_at": "2016-03-13T12:52:32.123Z",
              "id": "id2",
              "billing_at": "2016-03-13T12:52:32.123Z",
              "subscription": {},
              "status": "status4",
              "duration": 248,
              "created_at": "created_at0",
              "updated_at": "updated_at8",
              "cycle": 188
            },
            "payment_method": "payment_method6",
            "currency": "currency4",
            "installments": 176,
            "status": "status4",
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
                    "customer": {},
                    "metadata": {
                      "key0": "metadata1"
                    },
                    "line_1": "line_12",
                    "line_2": "line_26",
                    "deleted_at": "2016-03-13T12:52:32.123Z"
                  },
                  "metadata": {
                    "key0": "metadata1"
                  },
                  "phones": {
                    "home_phone": {
                      "country_code": "country_code4",
                      "number": "number2",
                      "area_code": "area_code4"
                    },
                    "mobile_phone": {
                      "country_code": "country_code6",
                      "number": "number8",
                      "area_code": "area_code4"
                    }
                  },
                  "fb_id": 42,
                  "code": "code0",
                  "document_type": "document_type0"
                },
                "metadata": {
                  "key0": "metadata9",
                  "key1": "metadata8"
                },
                "line_1": "line_14",
                "line_2": "line_20",
                "deleted_at": "2016-03-13T12:52:32.123Z"
              },
              "metadata": {
                "key0": "metadata7",
                "key1": "metadata8"
              },
              "phones": {
                "home_phone": {},
                "mobile_phone": {}
              },
              "fb_id": 248,
              "code": "code4",
              "document_type": "document_type4"
            },
            "card": {
              "id": "id2",
              "last_four_digits": "last_four_digits8",
              "brand": "brand6",
              "holder_name": "holder_name8",
              "exp_month": 154,
              "exp_year": 142,
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
                "id": "id1",
                "description": "description1",
                "status": "status3",
                "created_at": "2016-03-13T12:52:32.123Z",
                "updated_at": "2016-03-13T12:52:32.123Z",
                "pricing_scheme": {
                  "price": 75,
                  "scheme_type": "scheme_type7",
                  "price_brackets": [
                    {
                      "start_quantity": 134,
                      "price": 184,
                      "end_quantity": 142,
                      "overage_price": 156
                    },
                    {
                      "start_quantity": 135,
                      "price": 183,
                      "end_quantity": 143,
                      "overage_price": 157
                    }
                  ],
                  "minimum_price": 235,
                  "percentage": 198.15
                },
                "discounts": [
                  {
                    "id": "id2",
                    "value": 63.84,
                    "discount_type": "discount_type0",
                    "status": "status4",
                    "created_at": "2016-03-13T12:52:32.123Z",
                    "cycles": 8,
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
                        "price": 34,
                        "scheme_type": "scheme_type0",
                        "price_brackets": [
                          {},
                          {},
                          {}
                        ],
                        "minimum_price": 194,
                        "percentage": 101.28
                      },
                      "discounts": [
                        {},
                        {},
                        {}
                      ],
                      "increments": [
                        {
                          "id": "id7",
                          "value": 210.19,
                          "increment_type": "increment_type9",
                          "status": "status9",
                          "created_at": "2016-03-13T12:52:32.123Z",
                          "cycles": 205,
                          "deleted_at": "2016-03-13T12:52:32.123Z",
                          "description": "description7",
                          "subscription": {},
                          "subscription_item": {}
                        }
                      ],
                      "subscription": {},
                      "name": "name8",
                      "quantity": 232,
                      "cycles": 252,
                      "deleted_at": "2016-03-13T12:52:32.123Z"
                    }
                  }
                ],
                "increments": [
                  {},
                  {}
                ],
                "subscription": {},
                "name": "name1",
                "quantity": 53,
                "cycles": 183,
                "deleted_at": "2016-03-13T12:52:32.123Z"
              },
              {
                "id": "id2",
                "description": "description2",
                "status": "status4",
                "created_at": "2016-03-13T12:52:32.123Z",
                "updated_at": "2016-03-13T12:52:32.123Z",
                "pricing_scheme": {
                  "price": 76,
                  "scheme_type": "scheme_type6",
                  "price_brackets": [
                    {
                      "start_quantity": 133,
                      "price": 185,
                      "end_quantity": 141,
                      "overage_price": 155
                    }
                  ],
                  "minimum_price": 236,
                  "percentage": 198.14
                },
                "discounts": [
                  {
                    "id": "id3",
                    "value": 63.85,
                    "discount_type": "discount_type1",
                    "status": "status5",
                    "created_at": "2016-03-13T12:52:32.123Z",
                    "cycles": 9,
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
                        "price": 33,
                        "scheme_type": "scheme_type1",
                        "price_brackets": [
                          {}
                        ],
                        "minimum_price": 193,
                        "percentage": 101.29
                      },
                      "discounts": [
                        {}
                      ],
                      "increments": [
                        {
                          "id": "id8",
                          "value": 210.2,
                          "increment_type": "increment_type0",
                          "status": "status0",
                          "created_at": "2016-03-13T12:52:32.123Z",
                          "cycles": 204,
                          "deleted_at": "2016-03-13T12:52:32.123Z",
                          "description": "description8",
                          "subscription": {},
                          "subscription_item": {}
                        },
                        {
                          "id": "id9",
                          "value": 210.21,
                          "increment_type": "increment_type1",
                          "status": "status1",
                          "created_at": "2016-03-13T12:52:32.123Z",
                          "cycles": 203,
                          "deleted_at": "2016-03-13T12:52:32.123Z",
                          "description": "description9",
                          "subscription": {},
                          "subscription_item": {}
                        }
                      ],
                      "subscription": {},
                      "name": "name9",
                      "quantity": 233,
                      "cycles": 253,
                      "deleted_at": "2016-03-13T12:52:32.123Z"
                    }
                  },
                  {
                    "id": "id4",
                    "value": 63.86,
                    "discount_type": "discount_type2",
                    "status": "status6",
                    "created_at": "2016-03-13T12:52:32.123Z",
                    "cycles": 10,
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
                        "price": 32,
                        "scheme_type": "scheme_type2",
                        "price_brackets": [
                          {},
                          {}
                        ],
                        "minimum_price": 192,
                        "percentage": 101.3
                      },
                      "discounts": [
                        {},
                        {}
                      ],
                      "increments": [
                        {
                          "id": "id9",
                          "value": 210.21,
                          "increment_type": "increment_type1",
                          "status": "status1",
                          "created_at": "2016-03-13T12:52:32.123Z",
                          "cycles": 203,
                          "deleted_at": "2016-03-13T12:52:32.123Z",
                          "description": "description9",
                          "subscription": {},
                          "subscription_item": {}
                        },
                        {
                          "id": "id0",
                          "value": 210.22,
                          "increment_type": "increment_type2",
                          "status": "status2",
                          "created_at": "2016-03-13T12:52:32.123Z",
                          "cycles": 202,
                          "deleted_at": "2016-03-13T12:52:32.123Z",
                          "description": "description0",
                          "subscription": {},
                          "subscription_item": {}
                        },
                        {
                          "id": "id1",
                          "value": 210.23,
                          "increment_type": "increment_type3",
                          "status": "status3",
                          "created_at": "2016-03-13T12:52:32.123Z",
                          "cycles": 201,
                          "deleted_at": "2016-03-13T12:52:32.123Z",
                          "description": "description1",
                          "subscription": {},
                          "subscription_item": {}
                        }
                      ],
                      "subscription": {},
                      "name": "name0",
                      "quantity": 234,
                      "cycles": 254,
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
                "name": "name2",
                "quantity": 54,
                "cycles": 182,
                "deleted_at": "2016-03-13T12:52:32.123Z"
              },
              {
                "id": "id3",
                "description": "description3",
                "status": "status5",
                "created_at": "2016-03-13T12:52:32.123Z",
                "updated_at": "2016-03-13T12:52:32.123Z",
                "pricing_scheme": {
                  "price": 77,
                  "scheme_type": "scheme_type5",
                  "price_brackets": [
                    {
                      "start_quantity": 132,
                      "price": 186,
                      "end_quantity": 140,
                      "overage_price": 154
                    },
                    {
                      "start_quantity": 133,
                      "price": 185,
                      "end_quantity": 141,
                      "overage_price": 155
                    },
                    {
                      "start_quantity": 134,
                      "price": 184,
                      "end_quantity": 142,
                      "overage_price": 156
                    }
                  ],
                  "minimum_price": 237,
                  "percentage": 198.13
                },
                "discounts": [
                  {
                    "id": "id4",
                    "value": 63.86,
                    "discount_type": "discount_type2",
                    "status": "status6",
                    "created_at": "2016-03-13T12:52:32.123Z",
                    "cycles": 10,
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
                        "price": 32,
                        "scheme_type": "scheme_type2",
                        "price_brackets": [
                          {},
                          {}
                        ],
                        "minimum_price": 192,
                        "percentage": 101.3
                      },
                      "discounts": [
                        {},
                        {}
                      ],
                      "increments": [
                        {
                          "id": "id9",
                          "value": 210.21,
                          "increment_type": "increment_type1",
                          "status": "status1",
                          "created_at": "2016-03-13T12:52:32.123Z",
                          "cycles": 203,
                          "deleted_at": "2016-03-13T12:52:32.123Z",
                          "description": "description9",
                          "subscription": {},
                          "subscription_item": {}
                        },
                        {
                          "id": "id0",
                          "value": 210.22,
                          "increment_type": "increment_type2",
                          "status": "status2",
                          "created_at": "2016-03-13T12:52:32.123Z",
                          "cycles": 202,
                          "deleted_at": "2016-03-13T12:52:32.123Z",
                          "description": "description0",
                          "subscription": {},
                          "subscription_item": {}
                        },
                        {
                          "id": "id1",
                          "value": 210.23,
                          "increment_type": "increment_type3",
                          "status": "status3",
                          "created_at": "2016-03-13T12:52:32.123Z",
                          "cycles": 201,
                          "deleted_at": "2016-03-13T12:52:32.123Z",
                          "description": "description1",
                          "subscription": {},
                          "subscription_item": {}
                        }
                      ],
                      "subscription": {},
                      "name": "name0",
                      "quantity": 234,
                      "cycles": 254,
                      "deleted_at": "2016-03-13T12:52:32.123Z"
                    }
                  },
                  {
                    "id": "id5",
                    "value": 63.87,
                    "discount_type": "discount_type3",
                    "status": "status7",
                    "created_at": "2016-03-13T12:52:32.123Z",
                    "cycles": 11,
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
                        "price": 31,
                        "scheme_type": "scheme_type3",
                        "price_brackets": [
                          {},
                          {},
                          {}
                        ],
                        "minimum_price": 191,
                        "percentage": 101.31
                      },
                      "discounts": [
                        {},
                        {},
                        {}
                      ],
                      "increments": [
                        {
                          "id": "id0",
                          "value": 210.22,
                          "increment_type": "increment_type2",
                          "status": "status2",
                          "created_at": "2016-03-13T12:52:32.123Z",
                          "cycles": 202,
                          "deleted_at": "2016-03-13T12:52:32.123Z",
                          "description": "description0",
                          "subscription": {},
                          "subscription_item": {}
                        }
                      ],
                      "subscription": {},
                      "name": "name1",
                      "quantity": 235,
                      "cycles": 255,
                      "deleted_at": "2016-03-13T12:52:32.123Z"
                    }
                  },
                  {
                    "id": "id6",
                    "value": 63.88,
                    "discount_type": "discount_type4",
                    "status": "status8",
                    "created_at": "2016-03-13T12:52:32.123Z",
                    "cycles": 12,
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
                        "price": 30,
                        "scheme_type": "scheme_type4",
                        "price_brackets": [
                          {}
                        ],
                        "minimum_price": 190,
                        "percentage": 101.32
                      },
                      "discounts": [
                        {}
                      ],
                      "increments": [
                        {
                          "id": "id1",
                          "value": 210.23,
                          "increment_type": "increment_type3",
                          "status": "status3",
                          "created_at": "2016-03-13T12:52:32.123Z",
                          "cycles": 201,
                          "deleted_at": "2016-03-13T12:52:32.123Z",
                          "description": "description1",
                          "subscription": {},
                          "subscription_item": {}
                        },
                        {
                          "id": "id2",
                          "value": 210.24,
                          "increment_type": "increment_type4",
                          "status": "status4",
                          "created_at": "2016-03-13T12:52:32.123Z",
                          "cycles": 200,
                          "deleted_at": "2016-03-13T12:52:32.123Z",
                          "description": "description2",
                          "subscription": {},
                          "subscription_item": {}
                        }
                      ],
                      "subscription": {},
                      "name": "name2",
                      "quantity": 236,
                      "cycles": 0,
                      "deleted_at": "2016-03-13T12:52:32.123Z"
                    }
                  }
                ],
                "increments": [
                  {}
                ],
                "subscription": {},
                "name": "name3",
                "quantity": 55,
                "cycles": 181,
                "deleted_at": "2016-03-13T12:52:32.123Z"
              }
            ],
            "statement_descriptor": "statement_descriptor4",
            "metadata": {
              "key0": "metadata9",
              "key1": "metadata0"
            },
            "setup": {
              "id": "id8",
              "description": "description2",
              "amount": 56,
              "status": "status0"
            },
            "gateway_affiliation_id": "gateway_affiliation_id0",
            "next_billing_at": "2016-03-13T12:52:32.123Z",
            "billing_day": 108,
            "minimum_price": 250,
            "canceled_at": "2016-03-13T12:52:32.123Z",
            "discounts": [
              {}
            ],
            "increments": [
              {},
              {},
              {}
            ],
            "boleto_due_days": 120,
            "split": {
              "enabled": false,
              "rules": [
                {
                  "type": "type6",
                  "amount": 176,
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
                  "gateway_id": "gateway_id6",
                  "options": {
                    "liable": false,
                    "charge_processing_fee": false,
                    "charge_remainder_fee": "charge_remainder_fee6"
                  },
                  "id": "id4"
                },
                {
                  "type": "type5",
                  "amount": 175,
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
                            "key1": "metadata7"
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
                          }
                        ],
                        "metadata": {
                          "key0": "metadata0",
                          "key1": "metadata1",
                          "key2": "metadata2"
                        },
                        "automatic_anticipation_settings": {
                          "enabled": true,
                          "type": "type3",
                          "volume_percentage": 73,
                          "delay": 217,
                          "days": [
                            193
                          ]
                        },
                        "transfer_settings": {
                          "transfer_enabled": true,
                          "transfer_interval": "transfer_interval1",
                          "transfer_day": 239
                        },
                        "code": "code1",
                        "payment_mode": "payment_mode7"
                      },
                      "metadata": {
                        "key0": "metadata8",
                        "key1": "metadata7",
                        "key2": "metadata6"
                      },
                      "pix_key": "pix_key5"
                    },
                    "gateway_recipients": [
                      {},
                      {}
                    ],
                    "metadata": {
                      "key0": "metadata0",
                      "key1": "metadata1",
                      "key2": "metadata2"
                    },
                    "automatic_anticipation_settings": {
                      "enabled": true,
                      "type": "type3",
                      "volume_percentage": 143,
                      "delay": 147,
                      "days": [
                        123
                      ]
                    },
                    "transfer_settings": {
                      "transfer_enabled": true,
                      "transfer_interval": "transfer_interval1",
                      "transfer_day": 53
                    },
                    "code": "code1",
                    "payment_mode": "payment_mode3"
                  },
                  "gateway_id": "gateway_id5",
                  "options": {
                    "liable": true,
                    "charge_processing_fee": true,
                    "charge_remainder_fee": "charge_remainder_fee5"
                  },
                  "id": "id5"
                },
                {
                  "type": "type4",
                  "amount": 174,
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
                            "key0": "metadata9"
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
                          }
                        ],
                        "metadata": {
                          "key0": "metadata1"
                        },
                        "automatic_anticipation_settings": {
                          "enabled": false,
                          "type": "type4",
                          "volume_percentage": 74,
                          "delay": 216,
                          "days": [
                            192,
                            193,
                            194
                          ]
                        },
                        "transfer_settings": {
                          "transfer_enabled": false,
                          "transfer_interval": "transfer_interval2",
                          "transfer_day": 240
                        },
                        "code": "code0",
                        "payment_mode": "payment_mode6"
                      },
                      "metadata": {
                        "key0": "metadata7"
                      },
                      "pix_key": "pix_key6"
                    },
                    "gateway_recipients": [
                      {}
                    ],
                    "metadata": {
                      "key0": "metadata1"
                    },
                    "automatic_anticipation_settings": {
                      "enabled": false,
                      "type": "type4",
                      "volume_percentage": 144,
                      "delay": 146,
                      "days": [
                        122,
                        123,
                        124
                      ]
                    },
                    "transfer_settings": {
                      "transfer_enabled": false,
                      "transfer_interval": "transfer_interval2",
                      "transfer_day": 54
                    },
                    "code": "code0",
                    "payment_mode": "payment_mode4"
                  },
                  "gateway_id": "gateway_id4",
                  "options": {
                    "liable": false,
                    "charge_processing_fee": false,
                    "charge_remainder_fee": "charge_remainder_fee4"
                  },
                  "id": "id6"
                }
              ]
            },
            "boleto": {
              "interest": {
                "days": 86,
                "type": "type4",
                "amount": 160
              },
              "fine": {
                "days": 68,
                "type": "type8",
                "amount": 114
              },
              "max_days_to_pay_past_due": 192
            },
            "manual_billing": false
          },
          "status": "status2",
          "duration": 82,
          "created_at": "created_at8",
          "updated_at": "updated_at6",
          "cycle": 22
        },
        "payment_method": "payment_method8",
        "currency": "currency2",
        "installments": 10,
        "status": "status4",
        "created_at": "2016-03-13T12:52:32.123Z",
        "updated_at": "2016-03-13T12:52:32.123Z",
        "customer": {},
        "card": {
          "id": "id6",
          "last_four_digits": "last_four_digits2",
          "brand": "brand0",
          "holder_name": "holder_name2",
          "exp_month": 96,
          "exp_year": 200,
          "status": "status2",
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
            "key0": "metadata7"
          },
          "type": "type4",
          "holder_document": "holder_document0",
          "deleted_at": "2016-03-13T12:52:32.123Z",
          "first_six_digits": "first_six_digits6",
          "label": "label6"
        },
        "items": [
          {},
          {},
          {}
        ],
        "statement_descriptor": "statement_descriptor2",
        "metadata": {
          "key0": "metadata1",
          "key1": "metadata2"
        },
        "setup": {
          "id": "id6",
          "description": "description6",
          "amount": 34,
          "status": "status8"
        },
        "gateway_affiliation_id": "gateway_affiliation_id8",
        "next_billing_at": "2016-03-13T12:52:32.123Z",
        "billing_day": 238,
        "minimum_price": 160,
        "canceled_at": "2016-03-13T12:52:32.123Z",
        "discounts": [
          {}
        ],
        "increments": [
          {},
          {}
        ],
        "boleto_due_days": 210,
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
            "days": 136,
            "type": "type2",
            "amount": 210
          },
          "fine": {
            "days": 154,
            "type": "type6",
            "amount": 228
          },
          "max_days_to_pay_past_due": 142
        },
        "manual_billing": false
      },
      "subscription_item": {}
    }
  ],
  "paging": {
    "total": 6,
    "previous": "previous2",
    "next": "next8"
  }
}
```

