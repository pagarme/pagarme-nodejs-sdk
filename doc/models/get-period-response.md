
# Get Period Response

Response object for getting a period

## Structure

`GetPeriodResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `startAt` | `string \| null` | Required | - |
| `endAt` | `string \| null` | Required | - |
| `id` | `string \| null` | Required | - |
| `billingAt` | `string \| null` | Required | - |
| `subscription` | [`GetSubscriptionResponse \| null`](../../doc/models/get-subscription-response.md) | Required | - |
| `status` | `string \| null` | Required | - |
| `duration` | `number \| null` | Required | - |
| `createdAt` | `string \| null` | Required | - |
| `updatedAt` | `string \| null` | Required | - |
| `cycle` | `number \| null` | Required | - |

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
    "current_cycle": null,
    "payment_method": "payment_method4",
    "currency": "currency4",
    "installments": 146,
    "status": "status6",
    "created_at": "2016-03-13T12:52:32.123Z",
    "updated_at": "2016-03-13T12:52:32.123Z",
    "customer": null,
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
      "customer": null,
      "metadata": {
        "key0": "metadata5",
        "key1": "metadata4"
      },
      "type": "type2",
      "holder_document": "holder_document2",
      "deleted_at": null,
      "first_six_digits": "first_six_digits8",
      "label": "label8"
    },
    "items": [
      null,
      null
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
    "next_billing_at": null,
    "billing_day": null,
    "minimum_price": null,
    "canceled_at": null,
    "discounts": null,
    "increments": [
      null
    ],
    "boleto_due_days": null,
    "split": {
      "enabled": false,
      "rules": [
        null,
        null
      ]
    },
    "boleto": null,
    "manual_billing": false
  },
  "status": "status8",
  "duration": 112,
  "created_at": "created_at2",
  "updated_at": "updated_at4",
  "cycle": 52
}
```

