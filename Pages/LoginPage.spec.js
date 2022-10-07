

class LoginPage{

    constructor(page) {
        this.page=page;
        this.username=page.locator("#txtUserID");
        this.password=page.locator("#txtPassword");
        this.loginBtn=page.locator("#loginSubmit");
        this.welcMsg=page.locator("#GreetingMessage")

    }

    goToLoginPage(){
        this.page.goTo("https://app-test.ipfs.com/login");
    }

    async login(userName,password){
        goToLoginPage();
        await this.username.fill(userName)
        await this.password.fill(password)
        await this.loginBtn.click();
    }

}
module.exports={LoginPage};