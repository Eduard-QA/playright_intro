import { test, expect } from "@playwright/test";
import image from "./test_data.json";
import exp from "constants";

test.describe('demoqa test', () => {
    test('webtables 2', async ({ page }) => {
        await page.goto('https://demoqa.com/webtables');

        await page.getByLabel('rows per page').selectOption('5');

        await expect(page.getByRole('rowgroup')).toHaveCount(5);

        await expect(page.getByRole('button', { name: 'Next' })).toBeDisabled();

        for (let i = 1; i <= 3; i++) {
            await page.getByRole('button', { name: 'Add' }).click();

            await page.getByPlaceholder('First Name').fill('Peter_' + i);
            await page.getByPlaceholder('Last Name').fill('Smith');
            await page.getByPlaceholder('name@example.com').fill('s@gmail.com');
            await page.getByPlaceholder('Age').fill('25');
            await page.getByPlaceholder('Salary').fill('5000');
            await page.getByPlaceholder('Department').fill('QA');

            await page.getByRole('button', { name: 'Submit' }).click();
        }

        await expect(page.getByRole('button', { name: 'Next' })).toBeEnabled();
        await expect(page.getByRole('button', { name: 'Previous' })).toBeDisabled();

        // const row3 = page.getByRole('row').nth(3);
        // // console.log(await row3.innerText());
        // const rowText = (await row3.innerText()).split('\n');
        // await expect(rowText).toEqual(['Kierra', 'Gentry', '29', 'kierra@example.com', '2000', 'Legal', ' ']);

        await page.getByPlaceholder('Type to search').fill('QA');
        const rowQA = await page.locator(".rt-tbody [role='row']:not(.-padRow)").count();
        await expect(rowQA).toBe(3);
    })
});