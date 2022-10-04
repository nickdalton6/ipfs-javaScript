const { test, expect } = require('@playwright/test');
const {LoginPage}=require('../Pages/LoginPage.js');
test('User logs in to Homepage', async ({ page }) => {
   
     const loginPage=new LoginPage(page);

      await loginPage.login("pfsit","pfs1ttest");
      await expect(loginPage.firstNavItem).toContainText("Admin");
    console.log(page);

});
