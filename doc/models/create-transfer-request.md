
# Create Transfer Request

Request for creating a transfer

## Structure

`CreateTransferRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amount` | `number` | Required | Transfer amount |
| `metadata` | `Record<string, string>` | Required | Metadata |

## Example (as JSON)

```json
{
  "amount": 148,
  "metadata": {
    "key0": "metadata7",
    "key1": "metadata8",
    "key2": "metadata9"
  }
}
```

