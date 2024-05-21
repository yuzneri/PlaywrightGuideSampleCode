const {test, expect} = require('@playwright/test');

test('Project setup', async ({ page }) => {
    await page.goto('https://yuzneri.github.io/playwrighttodolist/')
    await page.getByPlaceholder('やること').fill('カレーを作る');
    await page.getByRole('button', {'name': '追加'}).click();

    await page.context().storageState({path: 'task.json'});
})
