

class LoginPage{

    constructor(page) {
        this.page=page;
        this.username=page.locator("#txtUserID");
        this.password=page.locator("#txtPassword");
        this.login=page.locator("#loginSubmit");
        this.welcMsg=page.locator("#GreetingMessage")

    }

    goToLoginPage(){
        this.page.goTo("https://app-test.ipfs.com/login");
    }

    async login(userName,password){
        this.goToLoginPage();
        await this.username.fill(userName)
        await this.password.fill(password)
        await this.login.click();
    }

}
module.exports={LoginPage};