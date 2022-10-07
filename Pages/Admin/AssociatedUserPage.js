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
        this.rolAdminChBox=page.locator("#role_7fa7405a-ce56-4fb8-b129-3dd3726f31c8");
        this.rolQutngChBox=page.locator("#role_302643c6-fee1-436e-8308-addbae0f6d63");
        this.rolDrtChBox=page.locator("#role_b02f78cc-8766-4cc6-b2f5-3850a18738c5");
        this.rolRepChBox=page.locator("#role_8deea0a1-0305-4a6e-93c4-4f840ba5dbb8");
        this.rolAcChBox=page.locator("#role_ea593b47-234e-444e-a3d1-4e33173f3ee7");
        this.rolEsgnChBox=page.locator("#role_5c3e3d9b-39b9-4056-af9a-1fc27d1ecc09");
        this.rolVagFenChBox=page.locator("#role_56b5979c-e021-490e-a2a2-f1297afd4b68");
        this.rolDwPayVccChBox=page.locator("#role_39fb48f9-4f97-4122-9efa-28a5d5689095");
        this.rolFundChBox=page.locator("#role_e4ab7d15-559d-422f-b38a-e9c94765c923");
        this.rolDwnPyAchBox=page.locator("#role_e9052b04-456c-49f4-a6e7-d216be1d0b3f");
        this.rolSbtBtn=page.locator("#AddAssociatedUserSubmitButton");
        this.rolCnclBtn=page.locator("#AddAssociatedUserCancelButton");
        this.AgnCoDiscAssocUs=page.locator("#AgentCompensationDisclosureLink");
        this.WebSitPrTeCon=page.locator("#TermsLink");
        this.IPFSFaLeInfSpCA=page.locator("#PrivacyLink");
        this.FaceLink=page.locator("img[src='/Images/Buttons/facebook_button.png']");
        this.TwitLink=page.locator("img[src='/Images/Buttons/twitter_button.png']");











        //Check boxes need to be located under Associated user.

admin #role_7fa7405a-ce56-4fb8-b129-3dd3726f31c8

        #role_302643c6-fee1-436e-8308-addbae0f6d63
    }

    async openAdminPage(){
       await this.page.goto("https://app-test.ipfs.com/Core/Admin/AssociatedUser")
    }


}
module.exports={AssociatedUserPage};

