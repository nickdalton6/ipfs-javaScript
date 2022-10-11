const { test, expect } = require('@playwright/test');
const {HomePage}=require('../Pages/HomePage.js');


test(' @TC5 @admin @ipfsSmoke @smoke  @ipfsRegression  @allWebAppsRegression @regression Verifying HomePage MainTabs Displayed', async ({ page }) => {

    let homePage = new HomePage(page);
    await page.goto("https://test.ipfs.com")
    await expect(homePage.homeNavElem.toBeVisible());

console.log(page);
});

