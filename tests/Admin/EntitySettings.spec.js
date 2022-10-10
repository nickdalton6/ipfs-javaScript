const {test, expect} = require('@playwright/test');
const {EntitySettingsPage} = require("../../Pages/Admin/EntitySettingsPage");
const {LoginPage} = require("../../Pages/LoginPage");

test.beforeAll(async({browser})=>
{
    let page = await browser.newPage();
    entitySettingsPage = await new EntitySettingsPage(page);
    const loginPage =await  new LoginPage(page);
    await loginPage.login();
    await page.waitForLoadState('networkidle');
    await entitySettingsPage.openEntitySettingPage();

});

test.only("entity setting page test case",async (page)=>{
await entitySettingsPage.PFFeeVerb.click();

});