const {test, expect} = require('@playwright/test');
const {AssociatedUserPage} = require("../../Pages/Admin/AssociatedUserPage");
const {LoginPage} = require("../../Pages/LoginPage");

let aup;

test.beforeAll(async({browser})=>
{
    let page = await browser.newPage();
    aup = await new AssociatedUserPage(page);
    const loginPage =await  new LoginPage(page);
    await loginPage.login();
    await page.waitForLoadState('networkidle');
    await aup.openAssociatedUserPage();
    
});
test.only('@ipfs @regression @admin @AUT1 Verify page contents', async ({page}) => {

    await expect(aup.assocUserText).toHaveText("Associated Users")
    await expect(aup.firstColHeaderVal).toHaveText("Login");
    await expect(aup.secondColHeaderVal).toHaveText("Name");
    await expect(aup.thirdColHeaderVal).toHaveText("Email");
    await expect(aup.addBtn).toHaveText("Add");
    await expect(aup.deletBtn).toHaveText("Delete");
    await aup.addBtn.click();





});

test('@ipfs @regression @admin AUT2 Verify page contents', async ({page}) => {



    await expect(aup.assUsTtile).toHaveText("Add Associated User");
    await aup.addBtn.click();

    await aup.webAccCode.type("12345");
    await aup.psCode.type("22192");
    await aup.emlId.type("john.mik@yahoo.com");
    await aup.qutngCkBox.click();
    await page.pause();
    await aup.rnQutRad.click();






});