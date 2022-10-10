const {JasonReader}=require('../Data/Config.json')

class LoginPage{

    constructor(page) {
        this.page=page;
        this.username=page.locator("#txtUserID");
        this.password=page.locator("#txtPassword");
        this.loginBtn=page.locator("#loginSubmit");
        this.firstNavItem=page.locator("a[title='Admin']")
this.data=new JasonReader();
    }

   async goToLoginPage(){

        await this.page.goto(this.data.URL);
    }

    async login()

    {


       await this.goToLoginPage();
        await this.username.first().fill(this.data.username)
        await this.password.first().fill(this.data.password)
        await this.loginBtn.first().click();
    }



}
module.exports={LoginPage};