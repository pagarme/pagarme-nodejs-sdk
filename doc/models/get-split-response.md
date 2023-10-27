
# Get Split Response

Split response

## Structure

`GetSplitResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | `string \| null \| undefined` | Optional | Type |
| `amount` | `number \| null \| undefined` | Optional | Amount |
| `recipient` | [`GetRecipientResponse \| null \| undefined`](../../doc/models/get-recipient-response.md) | Optional | Recipient |
| `gatewayId` | `string \| null \| undefined` | Optional | The split rule gateway id |
| `options` | [`GetSplitOptionsResponse \| null \| undefined`](../../doc/models/get-split-options-response.md) | Optional | - |
| `id` | `string \| null \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "type": "type0",
  "amount": 252,
  "recipient": {
    "id": "id8",
    "name": "name8",
    "email": "email8",
    "document": "document8",
    "description": "description2"
  },
  "gateway_id": "gateway_id0",
  "options": {
    "liable": false,
    "charge_processing_fee": false,
    "charge_remainder_fee": "charge_remainder_fee0"
  }
}
```

