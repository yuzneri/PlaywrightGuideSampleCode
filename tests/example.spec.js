const {test, expect} = require('@playwright/test');

test('add task', async ({page}) => {
    await page.goto('https://yuzneri.github.io/playwrighttodolist/');

    await page.getByPlaceholder('やること').fill('カレーを作る');
    await page.getByRole('button', {'name': '追加'}).click();

    await expect(
        page.getByRole('listitem').last().locator('.todo-text')
    ).toHaveText('カレーを作る')
});

test('toBeOK', async ({page}) => {
    const response = await page.request.get('https://yuzneri.github.io/playwrighttodolist/');
    await expect(response).toBeOK();
});

test('toHaveURL', async ({page}) => {
    await page.goto('https://yuzneri.github.io/playwrighttodolist/');
    await expect(page).toHaveURL(/todolist/);
});

test('toHaveTitle', async ({page}) => {
    await page.goto('https://yuzneri.github.io/playwrighttodolist/');
    await expect(page).toHaveTitle('ToDo List');
});

test('toContainText', async ({page}) => {
    await page.goto('https://yuzneri.github.io/playwrighttodolist/');
    await expect(page.getByRole('heading'))
        .toContainText('ToDo');
});

test('toHaveText', async ({page}) => {
    await page.goto('https://yuzneri.github.io/playwrighttodolist/');
    await expect(page.getByRole('heading'))
        .toHaveText('ToDo List');
});

test('toContainTextMulti', async ({page}) => {
    await page.goto('https://yuzneri.github.io/playwrighttodolist/');
    await page.getByPlaceholder('やること').fill('カレーを作る');
    await page.getByRole('button', {'name': '追加'}).click();

    await expect(page.getByRole('listitem'))
        .toContainText([/ToDoを追加してみましょう/, /カレーを作る/]);
});

test('toHaveTextMulti', async ({page}) => {
    await page.goto('https://yuzneri.github.io/playwrighttodolist/');
    await page.getByPlaceholder('やること').fill('カレーを作る');
    await page.getByRole('button', {'name': '追加'}).click();

    await expect(page.getByRole('listitem'))
        .toHaveText([/ToDoを追加してみましょう/, /ToDoを削除してみましょう/, /カレーを作る/]);
});

test('toHaveValue', async ({page}) => {
    await page.goto('https://yuzneri.github.io/playwrighttodolist/');

    const locator = await page.getByPlaceholder('やること')

    await locator.fill('カレーを作る');
    await expect(locator).toHaveValue('カレーを作る');
});

test('toHaveValues', async ({page}) => {
    await page.goto('https://yuzneri.github.io/playwrighttodolist/form.html');

    const locator = await page.getByRole('listbox');
    await locator.selectOption(['カレー', 'ラーメン']);
    await expect(locator).toHaveValues(['curry', 'ramen']);
});

test('toBeCheckedTrue', async ({page}) => {
    await page.goto('https://yuzneri.github.io/playwrighttodolist/form.html');
    const locator = await page.getByRole('checkbox');
    await locator.check();

    await expect(locator).toBeChecked();
});

test('toBeCheckedFalse', async ({page}) => {
    await page.goto('https://yuzneri.github.io/playwrighttodolist/form.html');

    const locator = await page.getByRole('checkbox');
    await locator.uncheck()

    await expect(locator).not.toBeChecked();
    await expect(locator).toBeChecked({checked: false});
});

test('toBeEnabled', async ({page}) => {
    await page.goto('https://yuzneri.github.io/playwrighttodolist/');
    await page.getByPlaceholder('やること').fill('カレーを作る');

    await expect(page.getByRole('button', {'name': '追加'})).toBeEnabled();
});

test('toBeDisabled', async ({page}) => {
    await page.goto('https://yuzneri.github.io/playwrighttodolist/');
    await page.getByPlaceholder('やること').clear();

    await expect(page.getByRole('button', {'name': '追加'})).toBeDisabled();
});

test('toBeEditable', async ({page}) => {
    await page.goto('https://yuzneri.github.io/playwrighttodolist/');

    await expect(page.getByPlaceholder('やること')).toBeEditable();
});

test('toBeVisible', async ({page}) => {
    await page.goto('https://yuzneri.github.io/playwrighttodolist/');

    await page.getByPlaceholder('やること').clear();
    await expect(page.locator('span.warn')).toBeVisible();
});

test('toBeHidden', async ({page}) => {
    await page.goto('https://yuzneri.github.io/playwrighttodolist/');

    await page.getByPlaceholder('やること').fill('カレーを作る');
    await expect(page.locator('span.warn')).toBeHidden();
});

test('toHaveAttribute', async ({page}) => {
    await page.goto('https://yuzneri.github.io/playwrighttodolist/');

    const locator = page.getByRole('button', {'name': '追加'});
    await expect(locator).toHaveAttribute('type', 'button');
    await expect(locator).toHaveAttribute('disabled');
});

test('toHaveId', async ({page}) => {
    await page.goto('https://yuzneri.github.io/playwrighttodolist/');

    await page.getByPlaceholder('やること')
    await expect(page.getByPlaceholder('やること')).toHaveId('new-todo');
});

test('toHaveClass', async ({page}) => {
    await page.goto('https://yuzneri.github.io/playwrighttodolist/');

    const locator = page.getByPlaceholder('やること')
    await expect(locator).toHaveClass('input todo new');
    await expect(locator).toHaveClass(/new/);
    await expect(page.getByRole('listitem')).toHaveClass(['todo', 'todo']);
});

test('toHaveCSS', async ({page}) => {
    await page.goto('https://yuzneri.github.io/playwrighttodolist/');

    await expect(page.locator('span.warn')).toHaveCSS('font-size', '10px');
});


test('toHaveCount', async ({page}) => {
    await page.goto('https://yuzneri.github.io/playwrighttodolist/');

    await expect(page.locator('.todo-text')).toHaveCount(2);
});

test('toHaveScreenshot page', async ({page}) => {
    await page.goto('https://yuzneri.github.io/playwrighttodolist/');

    await expect(page).toHaveScreenshot();
});

test('toHaveScreenshot full page', async ({page}) => {
    await page.goto('https://yuzneri.github.io/playwrighttodolist/');

    await expect(page).toHaveScreenshot({fullPage : true});
});

test('toHaveScreenshot locator', async ({page}) => {
    await page.goto('https://yuzneri.github.io/playwrighttodolist/');

    await expect(page.locator('#todos')).toHaveScreenshot();
});
