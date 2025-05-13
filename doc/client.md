
# Client Class Documentation

The following parameters are configurable for the API Client:

| Parameter | Type | Description |
|  --- | --- | --- |
| serviceRefererName | `string` |  |
| timeout | `number` | Timeout for API calls.<br>*Default*: `0` |
| httpClientOptions | [`Partial<HttpClientOptions>`](../doc/http-client-options.md) | Stable configurable http client options. |
| unstableHttpClientOptions | `any` | Unstable configurable http client options. |
| basicAuthCredentials | [`BasicAuthCredentials`](auth/basic-authentication.md) | The credential object for basicAuth |

The API client can be initialized as follows:

```ts
const client = new Client({
  basicAuthCredentials: {
    username: 'BasicAuthUserName',
    password: 'BasicAuthPassword'
  },
  serviceRefererName: 'ServiceRefererName',
  timeout: 0,
});
```

## PagarmeApiSDK Client

The gateway for the SDK. This class acts as a factory for the Controllers and also holds the configuration of the SDK.

## Controllers

| Name | Description |
|  --- | --- |
| subscriptions | Gets SubscriptionsController |
| orders | Gets OrdersController |
| plans | Gets PlansController |
| invoices | Gets InvoicesController |
| customers | Gets CustomersController |
| charges | Gets ChargesController |
| recipients | Gets RecipientsController |
| tokens | Gets TokensController |
| transactions | Gets TransactionsController |
| transfers | Gets TransfersController |
| payables | Gets PayablesController |
| balanceOperations | Gets BalanceOperationsController |

