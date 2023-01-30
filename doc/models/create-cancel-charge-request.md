
# Create Cancel Charge Request

Request for canceling a charge.

## Structure

`CreateCancelChargeRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amount` | `number \| undefined` | Optional | The amount that will be canceled. |
| `splitRules` | [`CreateCancelChargeSplitRulesRequest[] \| undefined`](../../doc/models/create-cancel-charge-split-rules-request.md) | Optional | The split rules request |
| `split` | [`CreateSplitRequest[] \| undefined`](../../doc/models/create-split-request.md) | Optional | Splits |
| `operationReference` | `string` | Required | - |

## Example (as JSON)

```json
{
  "amount": null,
  "split_rules": null,
  "split": null,
  "operation_reference": "operation_reference0"
}
```

