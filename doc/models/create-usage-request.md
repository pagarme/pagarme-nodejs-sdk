
# Create Usage Request

Request for creating a usage

## Structure

`CreateUsageRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `quantity` | `number` | Required | - |
| `description` | `string` | Required | - |
| `usedAt` | `string` | Required | - |
| `code` | `string \| undefined` | Optional | Identification code in the client system |
| `group` | `string \| undefined` | Optional | identification group in the client system |
| `amount` | `number \| undefined` | Optional | Field used in item scheme type 'Percent' |

## Example (as JSON)

```json
{
  "quantity": 224,
  "description": "description8",
  "used_at": "2016-03-13T12:52:32.123Z",
  "code": "code0",
  "group": "group0",
  "amount": 110
}
```

