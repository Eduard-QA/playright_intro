import {test, expect} from "@playwright/test";
import data from "./test_data.json";

test.describe('locators', () => {
    test.beforeEach(async ({page}) => {
        await page.goto('https://example.cypress.io/todo#/');
    });

    test('find_checkBox', async ({ page }) => {
    
        const firstCheckbox = page.locator('.toggle').first();
        const secondCheckbox = page.locator('.toggle').last();
        const itemDone1 = page.locator('.todo-list li label').first();
        
        await firstCheckbox.check();
        await secondCheckbox.check();

        await expect(firstCheckbox).toBeChecked();
        await expect(secondCheckbox).toBeChecked();
        await expect(itemDone1).toHaveCSS('color', 'rgb(205, 205, 205)');
        await expect(itemDone1).toHaveCSS('text-decoration', /line-through/ );
        await expect(itemDone1).toHaveCSS('background-image', data.greenCheckBox ); //data.greenCheckBox =>import from test_datd
        
        });


test ('drop_down_menu', async ({page}) => {
    
const expectedDropdawnlist = data.commandsList; // data.commandsList => import from test_data

const drpoDownList = page.locator('.dropdown-menu li');
const textDropDownList = await drpoDownList.allInnerTexts();
console.log(textDropDownList);

    const drpoDownList5 = page.locator('.dropdown-menu li').nth(4);
    const textDropDownList5 = await drpoDownList5.innerText();
    console.log(textDropDownList5);

await expect(drpoDownList).toHaveCount(17);
expect(drpoDownList).toHaveText(expectedDropdawnlist);
expect(textDropDownList).toEqual(expectedDropdawnlist);
expect(textDropDownList5).toEqual('Viewport');

});

})