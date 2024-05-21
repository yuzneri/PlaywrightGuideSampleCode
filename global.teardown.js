const {chromium, firefox, webkit} = require('playwright');

async function globalTeardown(config) {
    console.log('globalTeardown');
}

module.exports = globalTeardown;
