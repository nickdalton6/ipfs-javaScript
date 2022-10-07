const {test, expect} = require('@playwright/test');
const {AssociatedUserPage} = require("../../Pages/Admin/AssociatedUserPage");
const {LoginPage} = require("../../Pages/LoginPage");


test('@ipfs @regression @admin Verify page contents', async ({page}) => {

    let aup;
    aup = new AssociatedUserPage(page);
    const loginPage = new LoginPage(page);
    await loginPage.login("pfsit", "pfs1ttest");
    await page.waitForLoadState('networkidle');
    await aup.openAdminPage();

    await expect(aup.assocUserText).toHaveText("Associated Users")
    await expect(aup.firstColHeaderVal).toHaveText("Login");
    await expect(aup.secondColHeaderVal).toHaveText("Name");
    await expect(aup.thirdColHeaderVal).toHaveText("Email");
    await expect(aup.addBtn).toHaveText("Add");
    await expect(aup.deletBtn).toHaveText("Delete");


});