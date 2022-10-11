const {test, expect} = require('@playwright/test');
const {EntitySettingsPage} = require("../../Pages/Admin/EntitySettingsPage");
const {LoginPage} = require("../../Pages/LoginPage");

let entitySettingsPage = undefined;
test.beforeAll(async({browser})=>
{
    let page = await browser.newPage();
    entitySettingsPage = await new EntitySettingsPage(page);
    const loginPage =await  new LoginPage(page);
    await loginPage.login();
    await page.waitForLoadState('networkidle');
    await entitySettingsPage.openEntitySettingsPage();

});

test("@TC3 @admin @ipfsSmoke @smoke  @ipfsRegression  @allWebAppsRegression @regression entity setting page test case",async (page)=>{
await entitySettingsPage.PFFeeVerb.click();
await entitySettingsPage.PFFeeVerb.selectOption("6");
await entitySettingsPage.PFFeeDiscNonCA.click();
await entitySettingsPage.PFFeeDiscNonCA.selectOption("2");
await entitySettingsPage.PFFeeDiscCA.click();
await entitySettingsPage.PFFeeDiscCA.selectOption("3");
await entitySettingsPage.weleMailToInsChkBox.click();
await entitySettingsPage.saveBtn.click();
await entitySettingsPage.NoPpBtn.click();
await entitySettingsPage.FaceLinkEnt.click();






});