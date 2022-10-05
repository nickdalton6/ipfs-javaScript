const { test, expect } = require('@playwright/test');
const {AdminPage}=require('../Pages/AdminPage');


test('Verifying HomePage MainTabs Displayed', async ({ browser }) => {

    const context=await browser.newContext({
        storageState:"../auth.jason"
    })
    const  page=await context.newPage();
    const homePage = new HomePage(page);
    await page.goto("https://test.ipfs.com")

});