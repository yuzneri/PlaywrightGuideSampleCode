const {chromium, firefox, webkit} = require('playwright');

(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage({
        viewport: {
            width: 640,
            height: 360,
        }
    });
    await page.goto('https://yuzneri.github.io/playwrighttodolist/');

    await page.screenshot({path: __filename.split('.').shift() + '.png'});
    await page.screenshot({path: __filename.split('.').shift() + '_fullPage.png', fullPage: true});
    await page.locator('#app').screenshot({path: __filename.split('.').shift() + '_app.png'});

    await browser.close();
})();
