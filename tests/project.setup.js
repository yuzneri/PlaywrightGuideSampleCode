const {test, expect} = require('@playwright/test');

test('Project setup', async ({ page }) => {
    await page.goto('https://yuzneri.github.io/playwrighttodolist/')
    console.log('Project setup');
})
