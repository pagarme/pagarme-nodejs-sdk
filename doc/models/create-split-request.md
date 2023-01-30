
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
  "type": "type0",
  "amount": 46,
  "recipient_id": "recipient_id0",
  "options": null,
  "split_rule_id": null
}
```

