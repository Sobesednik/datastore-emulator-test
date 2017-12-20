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

## run test

```sh
npm t
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
