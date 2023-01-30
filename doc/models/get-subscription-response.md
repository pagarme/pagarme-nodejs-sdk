
# Get Subscription Response

## Structure

`GetSubscriptionResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| null` | Required | - |
| `code` | `string \| null` | Required | - |
| `startAt` | `string \| null` | Required | - |
| `interval` | `string \| null` | Required | - |
| `intervalCount` | `number \| null` | Required | - |
| `billingType` | `string \| null` | Required | - |
| `currentCycle` | [`GetPeriodResponse \| undefined`](../../doc/models/get-period-response.md) | Optional | - |
| `paymentMethod` | `string \| null` | Required | - |
| `currency` | `string \| null` | Required | - |
| `installments` | `number \| null` | Required | - |
| `status` | `string \| null` | Required | - |
| `createdAt` | `string \| null` | Required | - |
| `updatedAt` | `string \| null` | Required | - |
| `customer` | [`GetCustomerResponse \| undefined`](../../doc/models/get-customer-response.md) | Optional | - |
| `card` | [`GetCardResponse \| null`](../../doc/models/get-card-response.md) | Required | - |
| `items` | [`GetSubscriptionItemResponse[] \| null`](../../doc/models/get-subscription-item-response.md) | Required | - |
| `statementDescriptor` | `string \| null` | Required | - |
| `metadata` | `Record<string, string> \| null` | Required | - |
| `setup` | [`GetSetupResponse \| null`](../../doc/models/get-setup-response.md) | Required | - |
| `gatewayAffiliationId` | `string \| null` | Required | Affiliation Code |
| `nextBillingAt` | `string \| undefined` | Optional | - |
| `billingDay` | `number \| undefined` | Optional | - |
| `minimumPrice` | `number \| undefined` | Optional | - |
| `canceledAt` | `string \| undefined` | Optional | - |
| `discounts` | [`GetDiscountResponse[] \| undefined`](../../doc/models/get-discount-response.md) | Optional | Subscription discounts |
| `increments` | [`GetIncrementResponse[] \| null`](../../doc/models/get-increment-response.md) | Required | Subscription increments |
| `boletoDueDays` | `number \| undefined` | Optional | Days until boleto expires |
| `split` | [`GetSubscriptionSplitResponse \| null`](../../doc/models/get-subscription-split-response.md) | Required | Subscription's split response |
| `boleto` | [`GetSubscriptionBoletoResponse \| undefined`](../../doc/models/get-subscription-boleto-response.md) | Optional | - |
| `manualBilling` | `boolean \| null` | Required | - |

## Example (as JSON)

```json
{
  "id": "id0",
  "code": "code8",
  "start_at": "2016-03-13T12:52:32.123Z",
  "interval": "interval2",
  "interval_count": 82,
  "billing_type": "billing_type6",
  "current_cycle": null,
  "payment_method": "payment_method0",
  "currency": "currency0",
  "installments": 250,
  "status": "status8",
  "created_at": "2016-03-13T12:52:32.123Z",
  "updated_at": "2016-03-13T12:52:32.123Z",
  "customer": null,
  "card": {
    "id": "id6",
    "last_four_digits": "last_four_digits2",
    "brand": "brand0",
    "holder_name": "holder_name2",
    "exp_month": 228,
    "exp_year": 68,
    "status": "status2",
    "created_at": "2016-03-13T12:52:32.123Z",
    "updated_at": "2016-03-13T12:52:32.123Z",
    "billing_address": {
      "street": "street8",
      "number": "number4",
      "zip_code": "zip_code2",
      "neighborhood": "neighborhood4",
      "city": "city2",
      "state": "state6",
      "country": "country2",
      "complement": "complement6",
      "line_1": "line_18",
      "line_2": "line_26"
    },
    "customer": null,
    "metadata": {
      "key0": "metadata7"
    },
    "type": "type4",
    "holder_document": "holder_document0",
    "deleted_at": null,
    "first_six_digits": "first_six_digits6",
    "label": "label6"
  },
  "items": [
    {
      "id": "id7",
      "description": "description7",
      "status": "status1",
      "created_at": "2016-03-13T12:52:32.123Z",
      "updated_at": "2016-03-13T12:52:32.123Z",
      "pricing_scheme": {
        "price": 149,
        "scheme_type": "scheme_type1",
        "price_brackets": [
          {
            "start_quantity": 60,
            "price": 2,
            "end_quantity": null,
            "overage_price": null
          },
          {
            "start_quantity": 61,
            "price": 1,
            "end_quantity": null,
            "overage_price": null
          },
          {
            "start_quantity": 62,
            "price": 0,
            "end_quantity": null,
            "overage_price": null
          }
        ],
        "minimum_price": null,
        "percentage": null
      },
      "discounts": [
        {
          "id": "id8",
          "value": 236.1,
          "discount_type": "discount_type6",
          "status": "status0",
          "created_at": "2016-03-13T12:52:32.123Z",
          "cycles": null,
          "deleted_at": null,
          "description": null,
          "subscription": null,
          "subscription_item": null
        },
        {
          "id": "id9",
          "value": 236.11,
          "discount_type": "discount_type7",
          "status": "status1",
          "created_at": "2016-03-13T12:52:32.123Z",
          "cycles": null,
          "deleted_at": null,
          "description": null,
          "subscription": null,
          "subscription_item": null
        },
        {
          "id": "id0",
          "value": 236.12,
          "discount_type": "discount_type8",
          "status": "status2",
          "created_at": "2016-03-13T12:52:32.123Z",
          "cycles": null,
          "deleted_at": null,
          "description": null,
          "subscription": null,
          "subscription_item": null
        }
      ],
      "increments": [
        null
      ],
      "subscription": null,
      "name": "name7",
      "quantity": null,
      "cycles": null,
      "deleted_at": null
    },
    {
      "id": "id8",
      "description": "description8",
      "status": "status0",
      "created_at": "2016-03-13T12:52:32.123Z",
      "updated_at": "2016-03-13T12:52:32.123Z",
      "pricing_scheme": {
        "price": 150,
        "scheme_type": "scheme_type0",
        "price_brackets": [
          {
            "start_quantity": 59,
            "price": 3,
            "end_quantity": null,
            "overage_price": null
          },
          {
            "start_quantity": 60,
            "price": 2,
            "end_quantity": null,
            "overage_price": null
          }
        ],
        "minimum_price": null,
        "percentage": null
      },
      "discounts": [
        {
          "id": "id9",
          "value": 236.11,
          "discount_type": "discount_type7",
          "status": "status1",
          "created_at": "2016-03-13T12:52:32.123Z",
          "cycles": null,
          "deleted_at": null,
          "description": null,
          "subscription": null,
          "subscription_item": null
        }
      ],
      "increments": [
        null,
        null,
        null
      ],
      "subscription": null,
      "name": "name8",
      "quantity": null,
      "cycles": null,
      "deleted_at": null
    }
  ],
  "statement_descriptor": "statement_descriptor0",
  "metadata": {
    "key0": "metadata3",
    "key1": "metadata4",
    "key2": "metadata5"
  },
  "setup": {
    "id": "id6",
    "description": "description4",
    "amount": 110,
    "status": "status2"
  },
  "gateway_affiliation_id": "gateway_affiliation_id4",
  "next_billing_at": null,
  "billing_day": null,
  "minimum_price": null,
  "canceled_at": null,
  "discounts": null,
  "increments": [
    {
      "id": "id7",
      "value": 124.19,
      "increment_type": "increment_type9",
      "status": "status1",
      "created_at": "2016-03-13T12:52:32.123Z",
      "cycles": null,
      "deleted_at": null,
      "description": null,
      "subscription": null,
      "subscription_item": null
    }
  ],
  "boleto_due_days": null,
  "split": {
    "enabled": false,
    "rules": [
      {
        "type": "type4",
        "amount": 246,
        "recipient": null,
        "gateway_id": "gateway_id4",
        "options": null,
        "id": "id6"
      },
      {
        "type": "type3",
        "amount": 245,
        "recipient": null,
        "gateway_id": "gateway_id3",
        "options": null,
        "id": "id7"
      }
    ]
  },
  "boleto": null,
  "manual_billing": false
}
```

