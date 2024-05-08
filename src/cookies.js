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

    await page.goto('https://yuzneri.github.io/todolist/todo.html');

    page.on('dialog', dialog => dialog.accept());
    await page
        .getByRole('listitem')
        .filter({ hasText: 'ToDoを削除してみましょう' })
        .getByRole('button', { name: '削除' })
        .click();
    await page.getByPlaceholder('やること').fill('カレーを作る');
    await page.getByRole('button', {'name': '追加'}).click();

    const cookies = await page.context().cookies();

    console.log(cookies)
    
    fs.writeFileSync('cookies.json', JSON.stringify(cookies));

    await page.locator('#todos').screenshot({path: __filename.split('.').shift() + '.png'});

    await browser.close();
})();
