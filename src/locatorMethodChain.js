const {chromium, firefox, webkit} = require('playwright');
const {expect} = require("playwright/test");

(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage({
        viewport: {
            width: 640,
            height: 360,
        }
    });

    await page.goto('https://yuzneri.github.io/todolist/todo.html');

    const app = page.locator('#app');
    await app.getByPlaceholder('やること')
        .fill('カレーを作る');
    await app.getByRole('button', {'name': '追加'}).click();
    await page.locator('#todos').screenshot({path: __filename.split('.').shift() + '.png'});

    await browser.close();
})();
