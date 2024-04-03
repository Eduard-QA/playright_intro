import { test, expect } from "@playwright/test";

test.describe('first test', () => {
    test('verify page title', async ({ page }) => {
        await page.goto('https://demoqa.com');
            let title = await page.title();
            console.log(title);

        expect(title).toEqual('DEMOQA');
    })
}),

test.describe('first test', () => {
        test('fill out the text box', async ({ page }) => {
            await page.goto('https://demoqa.com');

            await page.locator('.card-body>h5').first().click();
            await page.locator('ul.menu-list>li>span:text-is("Text Box")').click();
            await page.locator('#userName').fill('Maria');
           
        })

})
