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


    test.only('@TC1 @admin @ipfsSmoke @smoke  @ipfsRegression  @allWebAppsRegression @regression verifying the tabel data',async ({page})=>{
        const tableRow=integrationPage.rstTableCov;
 const rowCount=   await tableRow.count();
 console.log(rowCount);
 for(let i=0;i<rowCount;i++){
     if(tableRow.)
 }

});
