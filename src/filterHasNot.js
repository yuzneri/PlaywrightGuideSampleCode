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

    await page.goto('https://yuzneri.github.io/playwrighttodolist/');
    await page.getByPlaceholder('やること').fill('カレーを作る');
    await page.getByRole('button', {'name': '追加'}).click();

    page.on('dialog', dialog => dialog.accept());
    await page
        .getByRole('listitem')
        .filter({hasNot: page.getByText('ToDoを追加してみましょう')})
        .first()
        .getByRole('button', {name: '削除'})
        .click();
    await page.locator('#todos').screenshot({path: __filename.split('.').shift() + '.png'});

    await browser.close();
})();
