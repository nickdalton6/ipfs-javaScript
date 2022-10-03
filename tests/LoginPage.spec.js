

class LoginPage{

    constructor(page) {
        this.username=page.locator();
        this.password=page.locator();
        this.login=page.locator();

    }


    async login(userName,password){
        await this.username.fill(userName)
        await this.password.fill(password)
        await this.login.click();
    }

}
module.exports={LoginPage}