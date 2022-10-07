const {test, expect} = require('@playwright/test');
const {AssociatedUserPage} = require("../../Pages/Admin/AssociatedUserPage");
const {LoginPage} = require("../../Pages/LoginPage");

let aup;
let page;
test.beforeAll(async({browser})=>
{
    page= (await browser.newContext()).newPage()
    aup = new AssociatedUserPage(page);
    const loginPage = new LoginPage(page);
    await loginPage.login();
    await page.waitForLoadState('networkidle');
    await aup.openAdminPage();
    
});
test('@ipfs @regression @admin @AUT1 Verify page contents', async ({browser}) => {

    await expect(aup.assocUserText).toHaveText("Associated Users")
    await expect(aup.firstColHeaderVal).toHaveText("Login");
    await expect(aup.secondColHeaderVal).toHaveText("Name");
    await expect(aup.thirdColHeaderVal).toHaveText("Email");
    await expect(aup.addBtn).toHaveText("Add");
    await expect(aup.deletBtn).toHaveText("Delete");
    await aup.addBtn.click();





});

test.only('@ipfs @regression @admin AUT2 Verify page contents', async ({page}) => {



    await expect(aup.assUsTtile).toHaveText("Add Associated User");
    await aup.webAccCode.type("12345");
    await aup.psCode.type("22192");
    await aup.emlId.type("john.mik@yahoo.com");
    await aup.qutngCkBox.click();





});