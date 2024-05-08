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

    page.on('dialog', dialog => dialog.accept());
    await page
        .getByRole('listitem')
        .filter({ hasNotText: 'ToDoを追加してみましょう' })
        .getByRole('button', { name: '削除' })
        .click();
    await page.locator('#todos').screenshot({path: __filename.split('.').shift() + '.png'});

    await browser.close();
})();
