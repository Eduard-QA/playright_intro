import { test, expect } from "@playwright/test";

test.describe('hw_cypress_test', () => {
    test.beforeEach(async ({page}) => {
    await page.goto('https://example.cypress.io/todo#/');
});

test('destroy_button', async ({ page }) => {
    
await page.locator('text="Walk the dog"').click();
let destroy_button = "body > section:nth-child(2) > div:nth-child(1) > section:nth-child(2) > ul:nth-child(3) > li:nth-child(2) > div:nth-child(1) > button:nth-child(3)";
await page.locator(destroy_button).click();

await expect(page.locator('text="Walk the dog"').isVisible()).resolves.toBe(false);
    
  })

});