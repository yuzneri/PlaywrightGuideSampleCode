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
    console.log(await page.getByText('todoを追加').isVisible());
    console.log(await page.getByText('todoを追加', {exact: true}).isVisible());
    console.log(await page.getByText('ToDoを追加してみましょう', {exact: true}).isVisible());
    console.log(await page.getByText(/[A-Za-z]+を追加/i,).isVisible());

    await browser.close();
})();
