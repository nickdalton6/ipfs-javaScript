const { test, expect } = require('@playwright/test');
const {AssociatedUserPage}=require('Pages/Admin/AssociatedUserPage');


test('@ipfs @regression @admin Verify page contents', async ({ browser }) => {

  let aup;
    const context=await browser.newContext({
        storageState:"auth.jason"
    })
    const  page=await context.newPage();

     aup= new AssociatedUserPage(page);
     await expect(aup.assocUserText()).toHaveText("Associated Users")
    await  expect(aup.firstColHeaderVal()).toHaveText("Login");
    await  expect(aup.secondColHeaderVal()).toHaveText("Name");
    await  expect(aup.thirdColHeaderVal()).toHaveText("Email");
    await  expect(aup.addBtn()).toHaveText("Add");
    await  expect(aup.deletBtn()).toHaveText("Delete");


});