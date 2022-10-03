const { test, expect } = require('@playwright/test');
const {LoginPage}=require('../Pages/LoginPage.spec.js')
test('User logs in to Homepage', async ({ page }) => {
   
     const loginPage=new LoginPage(page);

      loginPage.login("pfsit","pfs1ttest");
     

});
