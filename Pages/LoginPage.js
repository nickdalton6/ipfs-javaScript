const {data}=require('../Data/Config.json')

class LoginPage{

    constructor(page) {
        this.page=page;
        this.username=page.locator("#txtUserID");
        this.password=page.locator("#txtPassword");
        this.loginBtn=page.locator("#loginSubmit");
        this.firstNavItem=page.locator("a[title='Admin']")

    }

   async goToLoginPage(){

        await this.page.goto(data.URL);
    }

    async login()

    {


       await this.goToLoginPage();
        await this.username.first().fill(data.username)
        await this.password.first().fill(data.password)
        await this.loginBtn.first().click();
    }



}
module.exports={LoginPage};