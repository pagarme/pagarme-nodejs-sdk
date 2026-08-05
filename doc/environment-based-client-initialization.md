
# Environment-Based Client Initialization

The SDK client can be initialized directly from environment variables using the `fromEnvironment` static method available on the `Client` class. This allows you to configure the SDK through environment variables, making it easier to manage different settings across different environments.

## Node.js Environment

In Node.js environments, you can use the `dotenv` package to load environment variables from a `.env` file and pass `process.env` to the configuration.

The `fromEnvironment` method accepts an optional parameter for environment variables. If not provided, it defaults to `process.env`.

```ts
import * as dotenv from 'dotenv';
import * as path from 'path';
import * as fs from 'fs';
import { Client, Configuration } from 'pagarmeapisdklib';

// Optional - Provide absolute path for the .env file
const absolutePath = path.resolve('.env');

if (fs.existsSync(absolutePath)) {
  // Load environment variables from .env file
  dotenv.config({ path: absolutePath, override: true });
}

// Initialize client using environment variables
const client = Client.fromEnvironment(process.env);
```

## Browser Environment

In browser environments, you can pass configuration values directly as key-value pairs to the `fromEnvironment` method.  Since `process.env` is not available in browsers, environment variables must be passed as an object.

```ts
import { Client, Configuration } from 'pagarmeapisdklib';

const client = Client.fromEnvironment({
  TIMEOUT: '30000',
  ENVIRONMENT: 'testing'
});
```

## Example .env File

```env
# Basic Configuration
TIMEOUT=30000
ENVIRONMENT=production
SERVICE_REFERER_NAME=servicereferername

# Authentication Credentials
USERNAME=username
PASSWORD=password

# Retry Configuration
MAX_NUMBER_OF_RETRIES=3
RETRY_ON_TIMEOUT=true
RETRY_INTERVAL=10
MAX_RETRY_WAIT_TIME=120
RETRY_BACKOFF_FACTOR=2
HTTP_STATUS_CODES_TO_RETRY=408,413,429,500,502
HTTP_METHODS_TO_RETRY=GET,PUT,DELETE

# Proxy Settings
PROXY_ADDRESS=http://localhost:3000
PROXY_PORT=8080
PROXY_AUTH_USERNAME=username
PROXY_AUTH_PASSWORD=password
```

