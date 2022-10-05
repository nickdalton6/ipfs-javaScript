const { test, expect } = require('@playwright/test');
const {AdminPage}=require('../Pages/AdminPage');


test('Verifying HomePage MainTabs Displayed', async ({ page }) => {

    const homePage = new HomePage(page);
    await page.goto("https://test.ipfs.com")
    await expect(homePage.homeNavElem.isVisible());

    console.log(page);
});