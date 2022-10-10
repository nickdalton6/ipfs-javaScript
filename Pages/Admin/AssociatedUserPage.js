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
        this.webAccCode=page.locator("#SecurityCode");
        this.addBtn=page.locator("#UserAddButton");
        this.delBtn=page.locator("#UserDeleteButton");
        this.delBtn=page.locator("#UserDeleteButton");
        this.psCode=page.locator("#ZIPCode");
        this.emlId=page.locator("#EmailAddress");
        this.adminCkBox=page.locator("//input[@id='role_7fa7405a-ce56-4fb8-b129-3dd3726f31c8']");
        this.qutngCkBox=page.locator("//input[@id='role_302643c6-fee1-436e-8308-addbae0f6d63']");
        this.vOnQotsOn=page.locator("#role_55cf8419-672a-435f-ba8f-a7a75b11ffb9");
        this.rnQutRad=page.locator("#role_9518c3d0-3b5c-4fc1-96d1-1ad146c22d55");
        this.AlwEApr=page.locator("#role_6f665e21-972e-4b93-a01f-bd2d86d202e5");
        this.hDBAcnt=page.locator("#role_3a425f8a-0f14-42ab-ac13-3a333a919f6b");
        this.rFeA=page.locator("#role_a9d4345b-2324-480e-8b2a-806d955f719d");
        this.assUsTtile=page.locator("#AddUserHeader");

        this.FaceLink=page.locator("img[src='/Images/Buttons/facebook_button.png']");
        this.TwitLink=page.locator("img[src='/Images/Buttons/twitter_button.png']");
    }

    async openAssociatedUserPage(){
       await this.page.goto("https://app-test.ipfs.com/Core/Admin/AssociatedUser")
    }


}
module.exports={AssociatedUserPage};

