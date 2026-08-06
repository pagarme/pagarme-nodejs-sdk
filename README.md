
# Getting Started with PagarmeApiSDK

## Introduction

Pagarme API

## Building

### Requirements

The SDK relies on **Node.js** and **npm** (to resolve dependencies). It also requires **Typescript version >=4.1**. You can download and install Node.js and [npm](https://www.npmjs.com/) from [the official Node.js website](https://nodejs.org/en/download/).

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

**_Note:_** Documentation for the client can be found [here.](https://www.github.com/pagarme/pagarme-nodejs-sdk/tree/7.0.1/doc/client.md)

The following parameters are configurable for the API Client:

| Parameter | Type | Description |
|  --- | --- | --- |
| serviceRefererName | `string` |  |
| timeout | `number` | Timeout for API calls.<br>*Default*: `0` |
| httpClientOptions | [`Partial<HttpClientOptions>`](https://www.github.com/pagarme/pagarme-nodejs-sdk/tree/7.0.1/doc/http-client-options.md) | Stable configurable http client options. |
| unstableHttpClientOptions | `any` | Unstable configurable http client options. |
| basicAuthCredentials | [`BasicAuthCredentials`](https://www.github.com/pagarme/pagarme-nodejs-sdk/tree/7.0.1/doc/auth/basic-authentication.md) | The credential object for basicAuth |

The API client can be initialized as follows:

### Code-Based Client Initialization

```ts
import { Client } from 'pagarmeapisdklib';

const client = new Client({
  basicAuthCredentials: {
    username: 'BasicAuthUserName',
    password: 'BasicAuthPassword'
  },
  serviceRefererName: 'ServiceRefererName',
  timeout: 0,
});
```

### Configuration-Based Client Initialization

```ts
import * as path from 'path';
import * as fs from 'fs';
import { Client } from 'pagarmeapisdklib';

// Provide absolute path for the configuration file
const absolutePath = path.resolve('./config.json');

// Read the configuration file content
const fileContent = fs.readFileSync(absolutePath, 'utf-8');

// Initialize client from JSON configuration content
const client = Client.fromJsonConfig(fileContent);
```

See the [Configuration-Based Client Initialization](https://www.github.com/pagarme/pagarme-nodejs-sdk/tree/7.0.1/doc/configuration-based-client-initialization.md) section for details.

### Environment-Based Client Initialization

```ts
import * as dotenv from 'dotenv';
import * as path from 'path';
import * as fs from 'fs';
import { Client } from 'pagarmeapisdklib';

// Optional - Provide absolute path for the .env file
const absolutePath = path.resolve('./.env');

if (fs.existsSync(absolutePath)) {
  // Load environment variables from .env file
  dotenv.config({ path: absolutePath, override: true });
}

// Initialize client using environment variables
const client = Client.fromEnvironment(process.env);
```

See the [Environment-Based Client Initialization](https://www.github.com/pagarme/pagarme-nodejs-sdk/tree/7.0.1/doc/environment-based-client-initialization.md) section for details.

## Authorization

This API uses the following authentication schemes.

* [`httpBasic (Basic Authentication)`](https://www.github.com/pagarme/pagarme-nodejs-sdk/tree/7.0.1/doc/auth/basic-authentication.md)

## API Errors

Here is the list of errors that the API might throw.

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Invalid request | [`CustomError`](https://www.github.com/pagarme/pagarme-nodejs-sdk/tree/7.0.1/doc/models/custom-error.md) |
| 401 | Invalid API key | [`CustomError`](https://www.github.com/pagarme/pagarme-nodejs-sdk/tree/7.0.1/doc/models/custom-error.md) |
| 404 | An informed resource was not found | [`CustomError`](https://www.github.com/pagarme/pagarme-nodejs-sdk/tree/7.0.1/doc/models/custom-error.md) |
| 412 | Business validation error | [`CustomError`](https://www.github.com/pagarme/pagarme-nodejs-sdk/tree/7.0.1/doc/models/custom-error.md) |
| 422 | Contract validation error | [`CustomError`](https://www.github.com/pagarme/pagarme-nodejs-sdk/tree/7.0.1/doc/models/custom-error.md) |
| 500 | Internal server error | [`CustomError`](https://www.github.com/pagarme/pagarme-nodejs-sdk/tree/7.0.1/doc/models/custom-error.md) |

## List of APIs

* [Charges](https://www.github.com/pagarme/pagarme-nodejs-sdk/tree/7.0.1/doc/controllers/charges.md)
* [Customers](https://www.github.com/pagarme/pagarme-nodejs-sdk/tree/7.0.1/doc/controllers/customers.md)
* [Invoices](https://www.github.com/pagarme/pagarme-nodejs-sdk/tree/7.0.1/doc/controllers/invoices.md)
* [Orders](https://www.github.com/pagarme/pagarme-nodejs-sdk/tree/7.0.1/doc/controllers/orders.md)
* [Payables](https://www.github.com/pagarme/pagarme-nodejs-sdk/tree/7.0.1/doc/controllers/payables.md)
* [Plans](https://www.github.com/pagarme/pagarme-nodejs-sdk/tree/7.0.1/doc/controllers/plans.md)
* [Recipients](https://www.github.com/pagarme/pagarme-nodejs-sdk/tree/7.0.1/doc/controllers/recipients.md)
* [Subscriptions](https://www.github.com/pagarme/pagarme-nodejs-sdk/tree/7.0.1/doc/controllers/subscriptions.md)
* [Tokens](https://www.github.com/pagarme/pagarme-nodejs-sdk/tree/7.0.1/doc/controllers/tokens.md)
* [Transactions](https://www.github.com/pagarme/pagarme-nodejs-sdk/tree/7.0.1/doc/controllers/transactions.md)
* [Transfers](https://www.github.com/pagarme/pagarme-nodejs-sdk/tree/7.0.1/doc/controllers/transfers.md)

## SDK Infrastructure

### Configuration

* [HttpClientOptions](https://www.github.com/pagarme/pagarme-nodejs-sdk/tree/7.0.1/doc/http-client-options.md)
* [RetryConfiguration](https://www.github.com/pagarme/pagarme-nodejs-sdk/tree/7.0.1/doc/retry-configuration.md)
* [ProxySettings](https://www.github.com/pagarme/pagarme-nodejs-sdk/tree/7.0.1/doc/proxy-settings.md)
* [Configuration-Based Client Initialization](https://www.github.com/pagarme/pagarme-nodejs-sdk/tree/7.0.1/doc/configuration-based-client-initialization.md)
* [Environment-Based Client Initialization](https://www.github.com/pagarme/pagarme-nodejs-sdk/tree/7.0.1/doc/environment-based-client-initialization.md)

### HTTP

* [HttpRequest](https://www.github.com/pagarme/pagarme-nodejs-sdk/tree/7.0.1/doc/http-request.md)

### Utilities

* [ApiResponse](https://www.github.com/pagarme/pagarme-nodejs-sdk/tree/7.0.1/doc/api-response.md)
* [ApiError](https://www.github.com/pagarme/pagarme-nodejs-sdk/tree/7.0.1/doc/api-error.md)

