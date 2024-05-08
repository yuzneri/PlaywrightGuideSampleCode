const {chromium, firefox, webkit} = require('playwright');

(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage({
        viewport: {
            width: 640,
            height: 360,
        }
    });

    await page.goto('https://yuzneri.github.io/todolist/todo.html');

    await page.locator('#todos').screenshot({path: __filename.split('.').shift() + '.png'});

    await browser.close();
})();
