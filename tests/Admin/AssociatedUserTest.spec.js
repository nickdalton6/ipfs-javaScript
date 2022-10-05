const { test, expect } = require('@playwright/test');
const {AssociatedUserPage} = require("../../Pages/Admin/AssociatedUserPage");



test('@ipfs @regression @admin Verify page contents', async ({ browser }) => {

  let aup;
    const context=await browser.newContext({
        storageState:"auth.jason"
    })
    const  page=await context.newPage();

     aup= new AssociatedUserPage(page);
     await expect(aup.getMainTextFrmPage()).toHaveText("Associated Users")
    await  expect(aup.getFirstColHeader()).toHaveText("Login");
    await  expect(aup.getSecondHeaderLoc()).toHaveText("Name");
    await  expect(aup.getThirdHeaderLoc()).toHaveText("Email");
    await  expect(aup.getAddBtnLoc()).toHaveText("Add");
    await  expect(aup.getDeleteBtnLoc()).toHaveText("Delete");


});