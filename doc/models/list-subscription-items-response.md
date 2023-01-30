
# List Subscription Items Response

Response model for listing subscription items

## Structure

`ListSubscriptionItemsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`GetSubscriptionItemResponse[] \| null`](../../doc/models/get-subscription-item-response.md) | Required | The subscription items |
| `paging` | [`PagingResponse \| null`](../../doc/models/paging-response.md) | Required | Paging object |

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
            "end_quantity": null,
            "overage_price": null
          },
          {
            "start_quantity": 179,
            "price": 117,
            "end_quantity": null,
            "overage_price": null
          },
          {
            "start_quantity": 180,
            "price": 118,
            "end_quantity": null,
            "overage_price": null
          }
        ],
        "minimum_price": null,
        "percentage": null
      },
      "discounts": [
        {
          "id": "id6",
          "value": 160.38,
          "discount_type": "discount_type4",
          "status": "status8",
          "created_at": "2016-03-13T12:52:32.123Z",
          "cycles": null,
          "deleted_at": null,
          "description": null,
          "subscription": null,
          "subscription_item": null
        },
        {
          "id": "id7",
          "value": 160.39,
          "discount_type": "discount_type5",
          "status": "status9",
          "created_at": "2016-03-13T12:52:32.123Z",
          "cycles": null,
          "deleted_at": null,
          "description": null,
          "subscription": null,
          "subscription_item": null
        },
        {
          "id": "id8",
          "value": 160.4,
          "discount_type": "discount_type6",
          "status": "status0",
          "created_at": "2016-03-13T12:52:32.123Z",
          "cycles": null,
          "deleted_at": null,
          "description": null,
          "subscription": null,
          "subscription_item": null
        }
      ],
      "increments": [
        null
      ],
      "subscription": null,
      "name": "name5",
      "quantity": null,
      "cycles": null,
      "deleted_at": null
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
            "end_quantity": null,
            "overage_price": null
          }
        ],
        "minimum_price": null,
        "percentage": null
      },
      "discounts": [
        {
          "id": "id7",
          "value": 160.39,
          "discount_type": "discount_type5",
          "status": "status9",
          "created_at": "2016-03-13T12:52:32.123Z",
          "cycles": null,
          "deleted_at": null,
          "description": null,
          "subscription": null,
          "subscription_item": null
        }
      ],
      "increments": [
        null,
        null
      ],
      "subscription": null,
      "name": "name6",
      "quantity": null,
      "cycles": null,
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

