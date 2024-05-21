const {chromium, firefox, webkit} = require('playwright');

(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage({
        viewport: {
            width: 640,
            height: 360,
        }
    });

    const response = await page.goto('https://yuzneri.github.io/playwrighttodolist/');
    await page.getByRole('listitem').first().waitFor();

    console.log(await response.allHeaders());
    console.log(await response.headerValue('last-modified'));
    console.log(await response.headerValues('last-modified'));
    console.log(response.headers());
    console.log(await response.headersArray());

    console.log(response.ok());
    console.log(response.status());
    console.log(response.statusText());

    console.log(await response.text());
    console.log(await response.json());

    await browser.close();
})();
