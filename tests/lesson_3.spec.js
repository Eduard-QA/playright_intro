import { test, expect } from "@playwright/test";

test.describe('first test', () => {
    test.beforeEach(async ({page}) => {
    await page.goto('https://openweathermap.org/');
});

test('handle with new test', async({page}) => {

 const newPage = page.waitForEvent('popup'); // wait = ожидание. Метод ожидает открытия нового окна и присваевает новое значение ({page})
 await page.getByText('Marketplace').first().click()
 const pageMarket = await newPage;

 await expect(pageMarket.getByRole('heading',{name:'Custom Weather Products'})).toBeVisible();
await expect(pageMarket).toHaveURL('https://home.openweathermap.org/marketplace')
});

test('using waitFor()', async({page}) =>{

    await page.getByPlaceholder('Search city').fill('Moscow');
    await page.getByRole('button', {name: 'Search'}).click();

    await page.locator('ul.search-dropdown-menu').waitFor({state: 'attached'});
    await page.locator ('ul.search-dropdown-menu li>span').first().click();


   await expect(page).toHaveURL('https://openweathermap.org/city/524901');
   await expect(page.getByRole ('heading', {name: /Moscow/})).toBeVisible();





});


});