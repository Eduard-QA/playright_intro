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

}),

test('has title', async ({ page }) => {
    await page.goto('https://playwright.dev/');
  
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle("Fast and reliable end-to-end testing for modern web apps | Playwright");
  }),

  test('get started link', async ({ page }) => {
    await page.goto('https://playwright.dev/');
  
    // Click the get started link.
    await page.locator('.getStarted_Sjon').click();
  
    // Expects page to have a heading with the name of Installation.
    await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
  });
  
