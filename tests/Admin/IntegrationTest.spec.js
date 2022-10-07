const {test, expect} = require('@playwright/test');
const {IntegrationPage} = require("../../Pages/Admin/IntegrationPage");
const {LoginPage} = require("../../Pages/LoginPage");


test('@ipfs @regression @admin Verify page contents', async ({page}) => {

    const ip=new IntegrationPage(page);
    const loginPage = new LoginPage(page);
    await loginPage.login();
    await ip.openIntegrationPage()
    expect()

});