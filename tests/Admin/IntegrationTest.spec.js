const {test, expect} = require('@playwright/test');
const {IntegrationPage} = require("../../Pages/Admin/IntegrationPage");
const {LoginPage} = require("../../Pages/LoginPage");

let integrationPage = undefined;
test.beforeAll(async({browser})=>
{
    let page = await browser.newPage();
    integrationPage = await new IntegrationPage(page);
    const loginPage =await  new LoginPage(page);
    await loginPage.login();
    await page.waitForLoadState('networkidle');
    await integrationPage.openIntegrationPage();

});

test('@TC1 @admin @ipfsSmoke @smoke  @ipfsRegression  @allWebAppsRegression @regression Verify page contents', async ({page}) => {

   /* const ip=new IntegrationPage(page);
    const loginPage = new LoginPage(page);
    await loginPage.login();
    await ip.openIntegrationPage()*/

});