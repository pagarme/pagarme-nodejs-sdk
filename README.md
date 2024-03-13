
# Getting Started with PagarmeApiSDK

## Introduction

Pagarme API

## Building

### Requirements

The SDK relies on **Node.js** and **npm** (to resolve dependencies). It also requires **Typescript version 3.9+**. You can download and install Node.js and [npm](https://www.npmjs.com/) from [the official Node.js website](https://nodejs.org/en/download/).

> **NOTE:** npm is installed by default when Node.js is installed.

### Verify Successful Installation

Run the following commands in the command prompt or shell of your choice to check if Node.js and npm are successfully installed:

* Node.js: `node --version`

* npm: `npm --version`

![Version Check](https://apidocs.io/illustration/typescript?workspaceFolder=PagarmeApiSDK&step=versionCheck)

### Install Dependencies

- To resolve all dependencies, go to the **SDK root directory** and run the following command with npm:

```bash
npm install
```

- This will install all dependencies in the **node_modules** folder.

![Resolve Dependencies](https://apidocs.io/illustration/typescript?workspaceFolder=PagarmeApiSDK&workspaceName=pagarmeapisdklib&step=resolveDependency)

## Installation

The following section explains how to use the generated library in a new project.

### 1. Initialize the Node Project

- Open an IDE/text editor for JavaScript like Visual Studio Code. The basic workflow presented here is also applicable if you prefer using a different editor or IDE.

- Click on **File** and select **Open Folder**. Select an empty folder of your project, the folder will become visible in the sidebar on the left.

![Open Folder](https://apidocs.io/illustration/typescript?step=openProject)

- To initialize the Node project, click on **Terminal** and select **New Terminal**. Execute the following command in the terminal:

```bash
npm init --y
```

![Initialize the Node Project](https://apidocs.io/illustration/typescript?step=initializeProject)

### 2. Add Dependencies to the Client Library

- The created project manages its dependencies using its `package.json` file. In order to add a dependency on the *PagarmeApiSDKLib* client library, double click on the `package.json` file in the bar on the left and add the dependency to the package in it.

![Add Pagarmeapisdklib Dependency](https://apidocs.io/illustration/typescript?workspaceFolder=PagarmeApiSDK&workspaceName=pagarmeapisdklib&step=importDependency)

- To install the package in the project, run the following command in the terminal:

```bash
npm install
```

![Install Pagarmeapisdklib Dependency](https://apidocs.io/illustration/typescript?step=installDependency)

## Initialize the API Client

**_Note:_** Documentation for the client can be found [here.](https://www.github.com/pagarme/pagarme-nodejs-sdk/tree/6.8.7/doc/client.md)

The following parameters are configurable for the API Client:

| Parameter | Type | Description |
|  --- | --- | --- |
| `serviceRefererName` | `string` |  |
| `timeout` | `number` | Timeout for API calls.<br>*Default*: `0` |
| `httpClientOptions` | `Partial<HttpClientOptions>` | Stable configurable http client options. |
| `unstableHttpClientOptions` | `any` | Unstable configurable http client options. |
| `basicAuthCredentials` | [`BasicAuthCredentials`](https://www.github.com/pagarme/pagarme-nodejs-sdk/tree/6.8.7/doc/$a/https://www.github.com/pagarme/pagarme-nodejs-sdk/tree/6.8.7/basic-authentication.md) | The credential object for basicAuth |

### HttpClientOptions

| Parameter | Type | Description |
|  --- | --- | --- |
| `timeout` | `number` | Timeout in milliseconds. |
| `httpAgent` | `any` | Custom http agent to be used when performing http requests. |
| `httpsAgent` | `any` | Custom https agent to be used when performing http requests. |
| `retryConfig` | `Partial<RetryConfiguration>` | Configurations to retry requests. |

### RetryConfiguration

| Parameter | Type | Description |
|  --- | --- | --- |
| `maxNumberOfRetries` | `number` | Maximum number of retries. <br> *Default*: `0` |
| `retryOnTimeout` | `boolean` | Whether to retry on request timeout. <br> *Default*: `true` |
| `retryInterval` | `number` | Interval before next retry. Used in calculation of wait time for next request in case of failure. <br> *Default*: `1` |
| `maximumRetryWaitTime` | `number` | Overall wait time for the requests getting retried. <br> *Default*: `0` |
| `backoffFactor` | `number` | Used in calculation of wait time for next request in case of failure. <br> *Default*: `2` |
| `httpStatusCodesToRetry` | `number[]` | Http status codes to retry against. <br> *Default*: `[408, 413, 429, 500, 502, 503, 504, 521, 522, 524]` |
| `httpMethodsToRetry` | `HttpMethod[]` | Http methods to retry against. <br> *Default*: `['GET', 'PUT']` |

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

## Authorization

This API uses the following authentication schemes.

* [`httpBasic (Basic Authentication)`](https://www.github.com/pagarme/pagarme-nodejs-sdk/tree/6.8.7/doc/$a/https://www.github.com/pagarme/pagarme-nodejs-sdk/tree/6.8.7/basic-authentication.md)

## API Errors

Here is the list of errors that the API might throw.

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Invalid request | [`CustomError`](https://www.github.com/pagarme/pagarme-nodejs-sdk/tree/6.8.7/doc/models/custom-error.md) |
| 401 | Invalid API key | [`CustomError`](https://www.github.com/pagarme/pagarme-nodejs-sdk/tree/6.8.7/doc/models/custom-error.md) |
| 404 | An informed resource was not found | [`CustomError`](https://www.github.com/pagarme/pagarme-nodejs-sdk/tree/6.8.7/doc/models/custom-error.md) |
| 412 | Business validation error | [`CustomError`](https://www.github.com/pagarme/pagarme-nodejs-sdk/tree/6.8.7/doc/models/custom-error.md) |
| 422 | Contract validation error | [`CustomError`](https://www.github.com/pagarme/pagarme-nodejs-sdk/tree/6.8.7/doc/models/custom-error.md) |
| 500 | Internal server error | [`CustomError`](https://www.github.com/pagarme/pagarme-nodejs-sdk/tree/6.8.7/doc/models/custom-error.md) |

## List of APIs

* [Subscriptions](https://www.github.com/pagarme/pagarme-nodejs-sdk/tree/6.8.7/doc/controllers/subscriptions.md)
* [Orders](https://www.github.com/pagarme/pagarme-nodejs-sdk/tree/6.8.7/doc/controllers/orders.md)
* [Plans](https://www.github.com/pagarme/pagarme-nodejs-sdk/tree/6.8.7/doc/controllers/plans.md)
* [Invoices](https://www.github.com/pagarme/pagarme-nodejs-sdk/tree/6.8.7/doc/controllers/invoices.md)
* [Customers](https://www.github.com/pagarme/pagarme-nodejs-sdk/tree/6.8.7/doc/controllers/customers.md)
* [Charges](https://www.github.com/pagarme/pagarme-nodejs-sdk/tree/6.8.7/doc/controllers/charges.md)
* [Recipients](https://www.github.com/pagarme/pagarme-nodejs-sdk/tree/6.8.7/doc/controllers/recipients.md)
* [Tokens](https://www.github.com/pagarme/pagarme-nodejs-sdk/tree/6.8.7/doc/controllers/tokens.md)
* [Transactions](https://www.github.com/pagarme/pagarme-nodejs-sdk/tree/6.8.7/doc/controllers/transactions.md)
* [Transfers](https://www.github.com/pagarme/pagarme-nodejs-sdk/tree/6.8.7/doc/controllers/transfers.md)
* [Payables](https://www.github.com/pagarme/pagarme-nodejs-sdk/tree/6.8.7/doc/controllers/payables.md)
* [Balance Operations](https://www.github.com/pagarme/pagarme-nodejs-sdk/tree/6.8.7/doc/controllers/balance-operations.md)

## Classes Documentation

* [ApiResponse](https://www.github.com/pagarme/pagarme-nodejs-sdk/tree/6.8.7/doc/api-response.md)
* [ApiError](https://www.github.com/pagarme/pagarme-nodejs-sdk/tree/6.8.7/doc/api-error.md)

