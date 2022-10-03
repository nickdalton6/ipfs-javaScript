const { test, expect } = require('@playwright/test');
const {LoginPage}=require('LoginPage.spec')
test('User logs in to Homepage', async ({ page }) => {
    let baseUrl='http://hrm.syntaxtechs.net/humanresources/symfony/web/index.php/dashboard';

    await page.goto(baseUrl);
    page.pause()

    await expect(page.locator("id=welcome")).toHaveText("Welcome Admin");

});
