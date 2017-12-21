# datastore-emulator-test
Check if datastore-emulator is working

## setup

```js
const datastore = require('@google-cloud/datastore')

module.exports = async () => {
    console.log(process.env.DATASTORE_EMULATOR_HOST)
    const client = datastore()
    const name = 'Test'
    const data = 'abc'

    const key = client.key([name, 'Some'])
    const entity = {
        key,
        data,
    };
    await client.upsert(entity);
}
```

## test
```js
const test = require('../src/')

const TestSuite = {
    async 'should connect to the emulator'() {
        await test();
    },
};

module.exports = TestSuite;
```

## start the emulator

```
gcloud beta emulators datastore start --no-store-on-disk
```

## run test

```sh
$(gcloud beta emulators datastore env-init)
npm t
```

## @google-cloud/datastore@1.3.2 (without default credentials)

```fs
 test
   index.js
localhost:8081
    ✗  should connect to the emulator
    | Error: Could not load the default credentials. Browse to https://developers.google.com/accounts/docs/application-default-credentials for more information.
    |     at /datastore-emulator-test/node_modules/google-auth-library/lib/auth/googleauth.js:316:21
    |     at /datastore-emulator-test/node_modules/google-auth-library/lib/auth/googleauth.js:346:7
    |     at Request._callback (/datastore-emulator-test/node_modules/google-auth-library/lib/transporters.js:70:30)
    |     at self.callback (/datastore-emulator-test/node_modules/request/request.js:186:22)
    |     at Request.onRequestError (/datastore-emulator-test/node_modules/request/request.js:878:8)
```

## @google-cloud/datastore@1.3.0 (without default credentials)

```fs
 test
   index.js
localhost:8081
    ✓  should connect to the emulator

Executed 1 tests.
```

<hr/>

## @google-cloud/datastore@1.3.2

```fs
 test
   index.js
localhost:8081
    ✓  should connect to the emulator

Executed 1 tests.
```

## @google-cloud/datastore@1.3.0

```fs
 test
   index.js
localhost:8081
    ✗  should connect to the emulator
    | Error: Connect Failed
    |     at /datastore-emulator-test/node_modules/grpc/src/client.js:554:15

test > index.js > should connect to the emulator
  Error: Connect Failed
      at /datastore-emulator-test/node_modules/grpc/src/client.js:554:15

Executed 1 tests: 1 error.
```

## @google-cloud/datastore@1.1.0

```fs
 test
   index.js
localhost:8081
    ✓  should connect to the emulator

Executed 1 tests.
```
