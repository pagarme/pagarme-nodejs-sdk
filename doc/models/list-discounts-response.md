
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
      "created_at": "2016-03-13T12:52:32.123Z"
    },
    {
      "id": "id6",
      "value": 145.68,
      "discount_type": "discount_type4",
      "status": "status8",
      "created_at": "2016-03-13T12:52:32.123Z"
    }
  ],
  "paging": {
    "total": 6,
    "previous": "previous2",
    "next": "next8"
  }
}
```

