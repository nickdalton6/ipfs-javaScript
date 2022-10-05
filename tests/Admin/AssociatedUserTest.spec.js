const {test, expect} = require('@playwright/test');
const {AssociatedUserPage} = require("../../Pages/Admin/AssociatedUserPage");
const {LoginPage} = require("../../Pages/LoginPage");


test('@ipfs @regression @admin Verify page contents', async ({browser}) => {

    let aup;
    const context = await browser.newContext({
        storageState: "auth.jason"
    })
    const page = await context.newPage();
    aup = new AssociatedUserPage(page);
    const loginPage = new LoginPage(page);
    await loginPage.login("pfsit", "pfs1ttest");
    await page.waitForLoadState('networkidle');
    await aup.openAdminPage();
    await expect(aup.getMainTextFrmPage()).toHaveText("Associated Users")
    await expect(aup.getFirstColHeader()).toHaveText("Login");
    await expect(aup.getSecondHeaderLoc()).toHaveText("Name");
    await expect(aup.getThirdHeaderLoc()).toHaveText("Email");
    await expect(aup.getAddBtnLoc()).toHaveText("Add");
    await expect(aup.getDeleteBtnLoc()).toHaveText("Delete");


});