import { test, expect } from "@playwright/test";


test.describe('hw_cypress_test', () => {
    test.beforeEach(async ({page}) => {
    await page.goto('https://example.cypress.io/todo#/');
    
});

test('destroy_button', async ({ page }) => {
  const taskText = "Pay electric bill";
    
  await page.locator(`text='${taskText}'`).click();
  let destroy_button = `//label[text()='${taskText}']/following-sibling::button[contains(@class, 'destroy todo-button')]`;

  await page.locator(destroy_button).click();
  
  await expect(page.locator('text="Pay electric bill"')).not.toBeVisible();
  
  });

  test('add_task', async ({ page }) => {
    const taskText = "walk the rabbit";

    await page.getByPlaceholder("What needs to be done?").click();
    await page.keyboard.type(`${taskText}`);
    await page.keyboard.press('Enter');
  
  await expect(page.getByText(`${taskText}`)).toBeVisible();

  });

  test('edit_task', async({page}) =>{
    const taskTextOld = "Walk the dog";
    const taskTextNew = "Walk the wolf";

    await page.locator(`text=${taskTextOld}`).click({ clickCount: 3 }); // выделить весь текст в поле
    await page.keyboard.press('Delete');
    await page.keyboard.type(`${taskTextNew}`);
    await page.keyboard.press('Enter');

    await expect(page.getByText(`${taskTextNew}`)).toBeVisible();
    
  });

});