const {chromium, firefox, webkit} = require('playwright');

async function globalSetup(config) {
    console.log('globalSetup');
}

module.exports = globalSetup;
