

class LoginPage{

    constructor(page) {
        this.page=page;
        this.username=page.locator("#txtUserID");
        this.password=page.locator("#txtPassword");
        this.loginBtn=page.locator("#loginSubmit");
        this.firstNavItem=page.locator("a[title='AssociatedUserPage']")

    }

   async goToLoginPage(){
        await this.page.goto("https://app-test.ipfs.com/login");
    }

    async login(userName,password)
    {
       await this.goToLoginPage();
        await this.username.first().fill(userName)
        await this.password.first().fill(password)
        await this.loginBtn.first().click();
    }



}
module.exports={LoginPage};