const { test, expect } = require('@playwright/test');
const {LoginPage}=require('../Pages/LoginPage.js');
test(`@TC5 @admin @ipfsSmoke @smoke  @ipfsRegression  @allWebAppsRegression @regression User logs in to Homepage`, async ({ page }) => {
   
     const loginPage=new LoginPage(page);

      await loginPage.login();
      await expect(loginPage.firstNavItem).toContainText("Admin");

    console.log(page);

});
