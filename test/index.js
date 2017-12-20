const test = require('../src/')

const TestSuite = {
    async 'should connect to the emulator'() {
        await test();
    },
};

module.exports = TestSuite;
