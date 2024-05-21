const {test} = require('@playwright/test');

test.beforeAll(async () => {
    console.log('beforeAll')
})
test.beforeEach(async () => {
    console.log('beforeEach')
})

test('Test 1', async () => {
    console.log('Test 1')
})

test('Test 2', async () => {
    console.log('Test 2')
})

test.afterEach(async () => {
    console.log('afterEach')
})

test.afterAll(async () => {
    console.log('afterAll')
})
