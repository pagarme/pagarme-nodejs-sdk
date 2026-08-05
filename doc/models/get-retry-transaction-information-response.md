
# Get Retry Transaction Information Response

Response object for getting an RetryTransactionInformation

## Structure

`GetRetryTransactionInformationResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `brandFailureReturnCode` | `string \| null` | Required | - |
| `transactionLimit` | `number \| null` | Required | - |
| `transactionDateLimit` | `string \| null` | Required | - |

## Example

```ts
import { GetRetryTransactionInformationResponse } from 'pagarmeapisdklib';

const getRetryTransactionInformationResponse: GetRetryTransactionInformationResponse = {
  brandFailureReturnCode: 'brand_failure_return_code0',
  transactionLimit: 158,
  transactionDateLimit: '2016-03-13T12:52:32.123Z',
};
```

