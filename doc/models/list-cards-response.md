
# List Cards Response

Response object for listing cards

## Structure

`ListCardsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`GetCardResponse[] \| null \| undefined`](../../doc/models/get-card-response.md) | Optional | The card objects |
| `paging` | [`PagingResponse \| null \| undefined`](../../doc/models/paging-response.md) | Optional | Paging object |

## Example (as JSON)

```json
{
  "data": [
    {
      "id": "id0",
      "last_four_digits": "last_four_digits6",
      "brand": "brand4",
      "holder_name": "holder_name6",
      "exp_month": 240
    },
    {
      "id": "id0",
      "last_four_digits": "last_four_digits6",
      "brand": "brand4",
      "holder_name": "holder_name6",
      "exp_month": 240
    },
    {
      "id": "id0",
      "last_four_digits": "last_four_digits6",
      "brand": "brand4",
      "holder_name": "holder_name6",
      "exp_month": 240
    }
  ],
  "paging": {
    "total": 6,
    "previous": "previous2",
    "next": "next8"
  }
}
```

