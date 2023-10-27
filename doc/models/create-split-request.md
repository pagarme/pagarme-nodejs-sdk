
# Create Split Request

Split

## Structure

`CreateSplitRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | `string` | Required | Split type |
| `amount` | `number` | Required | Amount |
| `recipientId` | `string` | Required | Recipient id |
| `options` | [`CreateSplitOptionsRequest \| undefined`](../../doc/models/create-split-options-request.md) | Optional | The split options request |
| `splitRuleId` | `string \| undefined` | Optional | Rule code used in cancellation. |

## Example (as JSON)

```json
{
  "type": "type6",
  "amount": 100,
  "recipient_id": "recipient_id6",
  "options": {
    "liable": false,
    "charge_processing_fee": false,
    "charge_remainder_fee": false
  },
  "split_rule_id": "split_rule_id8"
}
```

