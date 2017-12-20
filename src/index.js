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
