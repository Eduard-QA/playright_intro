import { test, expect } from "@playwright/test";

test.describe('demoQA_tests', () => {
    test.beforeEach(async ({page}) => {
    await page.goto('https://demoqa.com/webtables');
});

test('tables', async({page}) => {

    const titel = page.getByRole('heading',{name:'Web Tables'});
    const rowsTable = page.locator('.rt-tbody>div');

    // проверка видимости заголовка / соответствия текста
    await expect (titel).toBeVisible();
    await expect (titel).toHaveText('Web Tables');

    //два способа посчитать количество строк
    expect(await rowsTable.count()).toBe(10);
    await expect(rowsTable).toHaveCount(10);

});

});