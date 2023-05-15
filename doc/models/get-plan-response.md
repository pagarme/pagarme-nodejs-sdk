
# Get Plan Response

Response object for getting a plan

## Structure

`GetPlanResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | - |
| `name` | `string \| undefined` | Optional | - |
| `description` | `string \| undefined` | Optional | - |
| `url` | `string \| undefined` | Optional | - |
| `statementDescriptor` | `string \| undefined` | Optional | - |
| `interval` | `string \| undefined` | Optional | - |
| `intervalCount` | `number \| undefined` | Optional | - |
| `billingType` | `string \| undefined` | Optional | - |
| `paymentMethods` | `string[] \| undefined` | Optional | - |
| `installments` | `number[] \| undefined` | Optional | - |
| `status` | `string \| undefined` | Optional | - |
| `currency` | `string \| undefined` | Optional | - |
| `createdAt` | `string \| undefined` | Optional | - |
| `updatedAt` | `string \| undefined` | Optional | - |
| `items` | [`GetPlanItemResponse[] \| undefined`](../../doc/models/get-plan-item-response.md) | Optional | - |
| `billingDays` | `number[] \| undefined` | Optional | - |
| `shippable` | `boolean \| undefined` | Optional | - |
| `metadata` | `Record<string, string> \| undefined` | Optional | - |
| `trialPeriodDays` | `number \| undefined` | Optional | - |
| `minimumPrice` | `number \| undefined` | Optional | - |
| `deletedAt` | `string \| undefined` | Optional | - |

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

