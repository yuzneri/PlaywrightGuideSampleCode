const {chromium, firefox, webkit} = require('playwright');
const {expect} = require("playwright/test");
const fs = require('fs');

(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage({
        viewport: {
            width: 640,
            height: 360,
        }
    });

    const cookies = JSON.parse(fs.readFileSync('cookies.json'));
    await page.context().clearCookies();
    await page.context().addCookies(cookies)
    await page.goto('https://yuzneri.github.io/todolist/todo.html');

    await page.locator('#todos').screenshot({path: __filename.split('.').shift() + '.png'});

    await browser.close();


    
})();
