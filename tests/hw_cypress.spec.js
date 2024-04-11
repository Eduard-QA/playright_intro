import { test, expect } from "@playwright/test";

test.describe('hw_cypress_test', () => {
    test.beforeEach(async ({page}) => {
    await page.goto('https://example.cypress.io/todo#/');
});

test('destroy_button', async ({ page }) => {
    
await page.locator('text="Walk the dog"').hover();
      await page.locator('button.destroy.todo-button').last().click();

      await expect(page.getByText('Walk the dog')).not.toBeVisible();
  });

  test('add_task', async ({ page }) => {

    await page.getByPlaceholder("What needs to be done?").click();
    await page.keyboard.type('walk the rabbit');
    await page.keyboard.press('Enter');
  
  await expect(page.getByText('walk the rabbit')).toBeVisible();

  });

  test('edit_task', async({page}) =>{

    await page.locator('text="Walk the dog"').click({ clickCount: 3 }); // выделить весь текст в поле
    await page.keyboard.press('Delete');
    await page.keyboard.type('walk the cat');
    await page.keyboard.press('Enter');

    await expect(page.getByText('walk the cat')).toBeVisible();
    
  });

});