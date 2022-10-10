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

test.only("entity setting page test case",async (page)=>{
await entitySettingsPage.PFFeeVerb.click();
await entitySettingsPage.PFFeeVerb.selectOption("6");
await entitySettingsPage.PFFeeDiscNonCA.click();
await entitySettingsPage.PFFeeDiscNonCA.selectOption("Letter");
await entitySettingsPage.PFFeeDiscCA.click();
await entitySettingsPage.PFFeeDiscCA.selectOption("Letter");
await entitySettingsPage.weleMailToInsChkBox.click();
await entitySettingsPage.saveBtn.click();
await entitySettingsPage.cancelBtn.click();
await entitySettingsPage.FaceLink.click();
const [newWindow]=await entitySettingsPage.TwitLink.click();
console.log(newWindow.url());




});