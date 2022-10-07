const {Constants}=require('../Pages/utils/Constants');

class LoginPage{

    constructor(page) {
        this.page=page;
        this.username=page.locator("#txtUserID");
        this.password=page.locator("#txtPassword");
        this.loginBtn=page.locator("#loginSubmit");
        this.firstNavItem=page.locator("a[title='Admin']")

    }

   async goToLoginPage(){
        await this.page.goto("https://app-test.ipfs.com/login");
    }

    async login()

    {
        const con=new Constants();

       await this.goToLoginPage();
        await this.username.first().fill(con.userName)
        await this.password.first().fill(con.password)
        await this.loginBtn.first().click();
    }



}
module.exports={LoginPage};