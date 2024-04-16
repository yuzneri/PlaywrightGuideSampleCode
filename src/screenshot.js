const { chromium, firefox, webkit } = require('playwright');

(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto('https://yuzneri.github.io/todolist/todo.html');

    await page.screenshot({ path: 'screenshot.png' });

    await browser.close();
})();
