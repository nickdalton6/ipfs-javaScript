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
        this.assocTable=page.locator(".col-sm-6");
    }

    async openAdminPage(){
       await this.page.goto("https://app-test.ipfs.com/Core/Admin/AssociatedUser")
    }


}
module.exports={AssociatedUserPage};

