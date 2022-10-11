const { test, expect } = require('@playwright/test');
const {AdminPage}=require('../Pages/Admin/AssociatedUserPage');


test('@TC4 @admin @ipfsSmoke @smoke  @ipfsRegression  @allWebAppsRegression @regression Verifying HomePage MainTabs Displayed', async ({ browser }) => {

    const context=await browser.newContext({
        storageState:"auth.jason"
    })
    const  page=await context.newPage();
    // const homePage = new HomePage(page);
    await page.goto("https://app-test.ipfs.com/Core/AMS/Traininghttps://app-test.ipfs.com/Core/AMS/Training")

});