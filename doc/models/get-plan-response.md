
# Get Plan Response

Response object for getting a plan

## Structure

`GetPlanResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| null \| undefined` | Optional | - |
| `name` | `string \| null \| undefined` | Optional | - |
| `description` | `string \| null \| undefined` | Optional | - |
| `url` | `string \| null \| undefined` | Optional | - |
| `statementDescriptor` | `string \| null \| undefined` | Optional | - |
| `interval` | `string \| null \| undefined` | Optional | - |
| `intervalCount` | `number \| null \| undefined` | Optional | - |
| `billingType` | `string \| null \| undefined` | Optional | - |
| `paymentMethods` | `string[] \| null \| undefined` | Optional | - |
| `installments` | `number[] \| null \| undefined` | Optional | - |
| `status` | `string \| null \| undefined` | Optional | - |
| `currency` | `string \| null \| undefined` | Optional | - |
| `createdAt` | `string \| null \| undefined` | Optional | - |
| `updatedAt` | `string \| null \| undefined` | Optional | - |
| `items` | [`GetPlanItemResponse[] \| null \| undefined`](../../doc/models/get-plan-item-response.md) | Optional | - |
| `billingDays` | `number[] \| null \| undefined` | Optional | - |
| `shippable` | `boolean \| null \| undefined` | Optional | - |
| `metadata` | `Record<string, string> \| null \| undefined` | Optional | - |
| `trialPeriodDays` | `number \| null \| undefined` | Optional | - |
| `minimumPrice` | `number \| null \| undefined` | Optional | - |
| `deletedAt` | `string \| null \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "id": "id0",
  "name": "name0",
  "description": "description0",
  "url": "url4",
  "statement_descriptor": "statement_descriptor0"
}
```

