class AssociatedUserPage {

    constructor(page) {
        this.page=page
        this.assocUserText=page.locator("a[title='Associated Users']");
       // this.AssocUserPage=page.locator("h2[xpath='1']"); We are not sure about this one
        this.pageTable=page.locator(".col-sm-6"); //the complete table on that page
        this.firstColHeaderVal=page.locator("th[data-field='1']");
        this.secondColHeaderVal=page.locator("//div[normalize-space()='Name']");
        this.thirdColHeaderVal=page.locator("//div[normalize-space()='Email']");
        this.addBtn=page.locator("#UserAddButton").last();
        this.deletBtn=page.locator("button[id='UserDeleteButton']");
    }

    async openAdminPage(){
       await this.page.goto("https://app-test.ipfs.com/Core/Admin/AssociatedUser")
    }

    getMainTextFrmPage(){

        return this.assocUserText

    }

    getFirstColHeader(){
        return this.firstColHeaderVal
    }
    getSecondHeaderLoc(){
        return this.secondColHeaderVal
    }

    getThirdHeaderLoc()
    {
        return this.thirdColHeaderVal
    }

    getAddBtnLoc(){
        return this.addBtn;
    }

    getDeleteBtnLoc(){
        return this.deletBtn;
    }

}
module.exports={AssociatedUserPage};

