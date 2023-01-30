
# List Charges Response

Response object for listing charges

## Structure

`ListChargesResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`GetChargeResponse[] \| null`](../../doc/models/get-charge-response.md) | Required | The charge objects |
| `paging` | [`PagingResponse \| null`](../../doc/models/paging-response.md) | Required | Paging object |

## Example (as JSON)

```json
{
  "data": [
    {
      "id": "id5",
      "code": "code3",
      "gateway_id": "gateway_id5",
      "amount": 121,
      "status": "status7",
      "currency": "currency5",
      "payment_method": "payment_method5",
      "due_at": "2016-03-13T12:52:32.123Z",
      "created_at": "2016-03-13T12:52:32.123Z",
      "updated_at": "2016-03-13T12:52:32.123Z",
      "last_transaction": {
        "gateway_id": "gateway_id7",
        "amount": 179,
        "status": "status9",
        "success": true,
        "created_at": "2016-03-13T12:52:32.123Z",
        "updated_at": "2016-03-13T12:52:32.123Z",
        "attempt_count": 155,
        "max_attempts": 143,
        "splits": [
          {
            "type": "type9",
            "amount": 111,
            "recipient": null,
            "gateway_id": "gateway_id9",
            "options": null,
            "id": "id9"
          },
          {
            "type": "type0",
            "amount": 112,
            "recipient": null,
            "gateway_id": "gateway_id0",
            "options": null,
            "id": "id0"
          }
        ],
        "next_attempt": null,
        "transaction_type": "transaction",
        "id": "id7",
        "gateway_response": {
          "code": "code7",
          "errors": [
            {
              "message": "message4"
            },
            {
              "message": "message5"
            }
          ]
        },
        "antifraud_response": {
          "status": "status7",
          "return_code": "return_code5",
          "return_message": "return_message3",
          "provider_name": "provider_name3",
          "score": "score5"
        },
        "metadata": null,
        "split": [
          {
            "type": "type5",
            "amount": 125,
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
        "key0": "metadata4",
        "key1": "metadata3"
      },
      "paid_at": null,
      "canceled_at": null,
      "canceled_amount": 231,
      "paid_amount": 213,
      "interest_and_fine_paid": null,
      "recurrency_cycle": null
    },
    {
      "id": "id6",
      "code": "code4",
      "gateway_id": "gateway_id6",
      "amount": 122,
      "status": "status8",
      "currency": "currency6",
      "payment_method": "payment_method6",
      "due_at": "2016-03-13T12:52:32.123Z",
      "created_at": "2016-03-13T12:52:32.123Z",
      "updated_at": "2016-03-13T12:52:32.123Z",
      "last_transaction": {
        "gateway_id": "gateway_id8",
        "amount": 180,
        "status": "status0",
        "success": false,
        "created_at": "2016-03-13T12:52:32.123Z",
        "updated_at": "2016-03-13T12:52:32.123Z",
        "attempt_count": 156,
        "max_attempts": 144,
        "splits": [
          {
            "type": "type0",
            "amount": 112,
            "recipient": null,
            "gateway_id": "gateway_id0",
            "options": null,
            "id": "id0"
          },
          {
            "type": "type1",
            "amount": 113,
            "recipient": null,
            "gateway_id": "gateway_id1",
            "options": null,
            "id": "id1"
          },
          {
            "type": "type2",
            "amount": 114,
            "recipient": null,
            "gateway_id": "gateway_id2",
            "options": null,
            "id": "id2"
          }
        ],
        "next_attempt": null,
        "transaction_type": "transaction",
        "id": "id8",
        "gateway_response": {
          "code": "code8",
          "errors": [
            {
              "message": "message5"
            },
            {
              "message": "message6"
            },
            {
              "message": "message7"
            }
          ]
        },
        "antifraud_response": {
          "status": "status8",
          "return_code": "return_code6",
          "return_message": "return_message4",
          "provider_name": "provider_name4",
          "score": "score6"
        },
        "metadata": null,
        "split": [
          {
            "type": "type6",
            "amount": 126,
            "recipient": null,
            "gateway_id": "gateway_id6",
            "options": null,
            "id": "id6"
          },
          {
            "type": "type7",
            "amount": 127,
            "recipient": null,
            "gateway_id": "gateway_id7",
            "options": null,
            "id": "id7"
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
        "key0": "metadata3",
        "key1": "metadata2",
        "key2": "metadata1"
      },
      "paid_at": null,
      "canceled_at": null,
      "canceled_amount": 232,
      "paid_amount": 214,
      "interest_and_fine_paid": null,
      "recurrency_cycle": null
    }
  ],
  "paging": {
    "total": 6,
    "previous": "previous2",
    "next": "next8"
  }
}
```

