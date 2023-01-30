
# List Order Response

Response object for listing order objects

## Structure

`ListOrderResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`GetOrderResponse[] \| null`](../../doc/models/get-order-response.md) | Required | The order object |
| `paging` | [`PagingResponse \| null`](../../doc/models/paging-response.md) | Required | Paging object |

## Example (as JSON)

```json
{
  "data": [
    {
      "id": "id5",
      "code": "code3",
      "currency": "currency5",
      "items": [
        {
          "id": "id2",
          "amount": 180,
          "description": "description2",
          "quantity": 38,
          "category": "category0",
          "code": "code0"
        },
        {
          "id": "id3",
          "amount": 181,
          "description": "description3",
          "quantity": 39,
          "category": "category1",
          "code": "code1"
        }
      ],
      "customer": null,
      "status": "status7",
      "created_at": "2016-03-13T12:52:32.123Z",
      "updated_at": "2016-03-13T12:52:32.123Z",
      "charges": [
        {
          "id": "id1",
          "code": "code9",
          "gateway_id": "gateway_id1",
          "amount": 113,
          "status": "status3",
          "currency": "currency1",
          "payment_method": "payment_method1",
          "due_at": "2016-03-13T12:52:32.123Z",
          "created_at": "2016-03-13T12:52:32.123Z",
          "updated_at": "2016-03-13T12:52:32.123Z",
          "last_transaction": {
            "gateway_id": "gateway_id3",
            "amount": 171,
            "status": "status5",
            "success": true,
            "created_at": "2016-03-13T12:52:32.123Z",
            "updated_at": "2016-03-13T12:52:32.123Z",
            "attempt_count": 147,
            "max_attempts": 135,
            "splits": [
              {
                "type": "type5",
                "amount": 103,
                "recipient": null,
                "gateway_id": "gateway_id5",
                "options": null,
                "id": "id5"
              },
              {
                "type": "type6",
                "amount": 104,
                "recipient": null,
                "gateway_id": "gateway_id6",
                "options": null,
                "id": "id6"
              }
            ],
            "next_attempt": null,
            "transaction_type": "transaction",
            "id": "id3",
            "gateway_response": {
              "code": "code3",
              "errors": [
                {
                  "message": "message0"
                },
                {
                  "message": "message1"
                }
              ]
            },
            "antifraud_response": {
              "status": "status3",
              "return_code": "return_code1",
              "return_message": "return_message9",
              "provider_name": "provider_name9",
              "score": "score1"
            },
            "metadata": null,
            "split": [
              {
                "type": "type1",
                "amount": 117,
                "recipient": null,
                "gateway_id": "gateway_id1",
                "options": null,
                "id": "id1"
              }
            ],
            "interest": null,
            "fine": null,
            "max_days_to_pay_past_due": null
          },
          "invoice": null,
          "order": null,
          "customer": null,
          "metadata": {
            "key0": "metadata8",
            "key1": "metadata7"
          },
          "paid_at": null,
          "canceled_at": null,
          "canceled_amount": 223,
          "paid_amount": 205,
          "interest_and_fine_paid": null,
          "recurrency_cycle": null
        },
        {
          "id": "id2",
          "code": "code0",
          "gateway_id": "gateway_id2",
          "amount": 114,
          "status": "status4",
          "currency": "currency2",
          "payment_method": "payment_method2",
          "due_at": "2016-03-13T12:52:32.123Z",
          "created_at": "2016-03-13T12:52:32.123Z",
          "updated_at": "2016-03-13T12:52:32.123Z",
          "last_transaction": {
            "gateway_id": "gateway_id4",
            "amount": 172,
            "status": "status6",
            "success": false,
            "created_at": "2016-03-13T12:52:32.123Z",
            "updated_at": "2016-03-13T12:52:32.123Z",
            "attempt_count": 148,
            "max_attempts": 136,
            "splits": [
              {
                "type": "type6",
                "amount": 104,
                "recipient": null,
                "gateway_id": "gateway_id6",
                "options": null,
                "id": "id6"
              },
              {
                "type": "type7",
                "amount": 105,
                "recipient": null,
                "gateway_id": "gateway_id7",
                "options": null,
                "id": "id7"
              },
              {
                "type": "type8",
                "amount": 106,
                "recipient": null,
                "gateway_id": "gateway_id8",
                "options": null,
                "id": "id8"
              }
            ],
            "next_attempt": null,
            "transaction_type": "transaction",
            "id": "id4",
            "gateway_response": {
              "code": "code4",
              "errors": [
                {
                  "message": "message1"
                },
                {
                  "message": "message2"
                },
                {
                  "message": "message3"
                }
              ]
            },
            "antifraud_response": {
              "status": "status4",
              "return_code": "return_code2",
              "return_message": "return_message0",
              "provider_name": "provider_name0",
              "score": "score2"
            },
            "metadata": null,
            "split": [
              {
                "type": "type2",
                "amount": 118,
                "recipient": null,
                "gateway_id": "gateway_id2",
                "options": null,
                "id": "id2"
              },
              {
                "type": "type3",
                "amount": 119,
                "recipient": null,
                "gateway_id": "gateway_id3",
                "options": null,
                "id": "id3"
              }
            ],
            "interest": null,
            "fine": null,
            "max_days_to_pay_past_due": null
          },
          "invoice": null,
          "order": null,
          "customer": null,
          "metadata": {
            "key0": "metadata7",
            "key1": "metadata6",
            "key2": "metadata5"
          },
          "paid_at": null,
          "canceled_at": null,
          "canceled_amount": 224,
          "paid_amount": 206,
          "interest_and_fine_paid": null,
          "recurrency_cycle": null
        },
        {
          "id": "id3",
          "code": "code1",
          "gateway_id": "gateway_id3",
          "amount": 115,
          "status": "status5",
          "currency": "currency3",
          "payment_method": "payment_method3",
          "due_at": "2016-03-13T12:52:32.123Z",
          "created_at": "2016-03-13T12:52:32.123Z",
          "updated_at": "2016-03-13T12:52:32.123Z",
          "last_transaction": {
            "gateway_id": "gateway_id5",
            "amount": 173,
            "status": "status7",
            "success": true,
            "created_at": "2016-03-13T12:52:32.123Z",
            "updated_at": "2016-03-13T12:52:32.123Z",
            "attempt_count": 149,
            "max_attempts": 137,
            "splits": [
              {
                "type": "type7",
                "amount": 105,
                "recipient": null,
                "gateway_id": "gateway_id7",
                "options": null,
                "id": "id7"
              }
            ],
            "next_attempt": null,
            "transaction_type": "transaction",
            "id": "id5",
            "gateway_response": {
              "code": "code5",
              "errors": [
                {
                  "message": "message2"
                }
              ]
            },
            "antifraud_response": {
              "status": "status5",
              "return_code": "return_code3",
              "return_message": "return_message1",
              "provider_name": "provider_name1",
              "score": "score3"
            },
            "metadata": null,
            "split": [
              {
                "type": "type3",
                "amount": 119,
                "recipient": null,
                "gateway_id": "gateway_id3",
                "options": null,
                "id": "id3"
              },
              {
                "type": "type4",
                "amount": 120,
                "recipient": null,
                "gateway_id": "gateway_id4",
                "options": null,
                "id": "id4"
              },
              {
                "type": "type5",
                "amount": 121,
                "recipient": null,
                "gateway_id": "gateway_id5",
                "options": null,
                "id": "id5"
              }
            ],
            "interest": null,
            "fine": null,
            "max_days_to_pay_past_due": null
          },
          "invoice": null,
          "order": null,
          "customer": null,
          "metadata": {
            "key0": "metadata6"
          },
          "paid_at": null,
          "canceled_at": null,
          "canceled_amount": 225,
          "paid_amount": 207,
          "interest_and_fine_paid": null,
          "recurrency_cycle": null
        }
      ],
      "invoice_url": "invoice_url7",
      "shipping": null,
      "metadata": {
        "key0": "metadata4",
        "key1": "metadata3"
      },
      "checkouts": null,
      "ip": null,
      "session_id": null,
      "location": null,
      "device": null,
      "closed": true
    },
    {
      "id": "id6",
      "code": "code4",
      "currency": "currency6",
      "items": [
        {
          "id": "id3",
          "amount": 181,
          "description": "description3",
          "quantity": 39,
          "category": "category1",
          "code": "code1"
        },
        {
          "id": "id4",
          "amount": 182,
          "description": "description4",
          "quantity": 40,
          "category": "category2",
          "code": "code2"
        },
        {
          "id": "id5",
          "amount": 183,
          "description": "description5",
          "quantity": 41,
          "category": "category3",
          "code": "code3"
        }
      ],
      "customer": null,
      "status": "status8",
      "created_at": "2016-03-13T12:52:32.123Z",
      "updated_at": "2016-03-13T12:52:32.123Z",
      "charges": [
        {
          "id": "id2",
          "code": "code0",
          "gateway_id": "gateway_id2",
          "amount": 114,
          "status": "status4",
          "currency": "currency2",
          "payment_method": "payment_method2",
          "due_at": "2016-03-13T12:52:32.123Z",
          "created_at": "2016-03-13T12:52:32.123Z",
          "updated_at": "2016-03-13T12:52:32.123Z",
          "last_transaction": {
            "gateway_id": "gateway_id4",
            "amount": 172,
            "status": "status6",
            "success": false,
            "created_at": "2016-03-13T12:52:32.123Z",
            "updated_at": "2016-03-13T12:52:32.123Z",
            "attempt_count": 148,
            "max_attempts": 136,
            "splits": [
              {
                "type": "type6",
                "amount": 104,
                "recipient": null,
                "gateway_id": "gateway_id6",
                "options": null,
                "id": "id6"
              },
              {
                "type": "type7",
                "amount": 105,
                "recipient": null,
                "gateway_id": "gateway_id7",
                "options": null,
                "id": "id7"
              },
              {
                "type": "type8",
                "amount": 106,
                "recipient": null,
                "gateway_id": "gateway_id8",
                "options": null,
                "id": "id8"
              }
            ],
            "next_attempt": null,
            "transaction_type": "transaction",
            "id": "id4",
            "gateway_response": {
              "code": "code4",
              "errors": [
                {
                  "message": "message1"
                },
                {
                  "message": "message2"
                },
                {
                  "message": "message3"
                }
              ]
            },
            "antifraud_response": {
              "status": "status4",
              "return_code": "return_code2",
              "return_message": "return_message0",
              "provider_name": "provider_name0",
              "score": "score2"
            },
            "metadata": null,
            "split": [
              {
                "type": "type2",
                "amount": 118,
                "recipient": null,
                "gateway_id": "gateway_id2",
                "options": null,
                "id": "id2"
              },
              {
                "type": "type3",
                "amount": 119,
                "recipient": null,
                "gateway_id": "gateway_id3",
                "options": null,
                "id": "id3"
              }
            ],
            "interest": null,
            "fine": null,
            "max_days_to_pay_past_due": null
          },
          "invoice": null,
          "order": null,
          "customer": null,
          "metadata": {
            "key0": "metadata7",
            "key1": "metadata6",
            "key2": "metadata5"
          },
          "paid_at": null,
          "canceled_at": null,
          "canceled_amount": 224,
          "paid_amount": 206,
          "interest_and_fine_paid": null,
          "recurrency_cycle": null
        }
      ],
      "invoice_url": "invoice_url8",
      "shipping": null,
      "metadata": {
        "key0": "metadata3",
        "key1": "metadata2",
        "key2": "metadata1"
      },
      "checkouts": null,
      "ip": null,
      "session_id": null,
      "location": null,
      "device": null,
      "closed": false
    }
  ],
  "paging": {
    "total": 6,
    "previous": "previous2",
    "next": "next8"
  }
}
```

