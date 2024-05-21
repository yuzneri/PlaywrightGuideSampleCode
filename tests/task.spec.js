const {test, expect} = require('@playwright/test');

test('task', async ({ page }) => {
    await page.goto('https://yuzneri.github.io/playwrighttodolist/')

    await expect(
        page.getByRole('listitem').last().locator('.todo-text')
    ).toHaveText('カレーを作る')
})
