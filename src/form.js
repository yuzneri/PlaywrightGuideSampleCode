const {chromium, firefox, webkit} = require('playwright');

(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage({
        viewport: {
            width: 640,
            height: 360,
        }
    });

    const response = await page.goto('https://yuzneri.github.io/playwrighttodolist/form.html');
    await page.getByRole('textbox').first().fill('カレー');
    console.log(await page.getByRole('textbox').first().inputValue())
    await page.getByRole('textbox').first().clear();
    console.log(await page.getByRole('textbox').first().inputValue())

    await page.locator('id=text').fill('カレー');

    await page.getByRole('checkbox').check()
    await page.getByRole('checkbox').uncheck()
    await page.locator('id=radio1').check()

    const selected= await page.getByRole('combobox').selectOption(['ラーメン'])
    console.log(selected);

    const valueSelected= await page.getByRole('combobox').selectOption({ value: 'ramen' })
    console.log(valueSelected);

    const multipleSelected= await page.getByRole('listbox').selectOption(['カレー', 'ラーメン'])
    console.log(multipleSelected);

    await page.locator('id=file').setInputFiles(__filename);

    await page.screenshot({path: __filename.split('.').shift() + '.png'});

    await browser.close();
})();
