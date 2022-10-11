class EntitySettingsPage {



    constructor(page) {
        this.page=page;
        this.EntitySetTab=page.locator("a[title='Entity Settings']");
        this.PFFeeVerb=page.locator("select.col-xs-12.col-md-6").first();
        this.PFFeeDiscNonCA=page.locator("select.col-xs-12.col-md-6").nth(1);
        this.PFFeeDiscCA=page.locator("select.col-xs-12.col-md-6").nth(2);
        this.weleMailToInsChkBox=page.locator("#entity_esign_preference_1");
        this.saveBtn=page.locator("button#SaveButton");
        this.cancelBtn=page.locator("button#CancelButton");
        this.NoPpBtn=page.locator("(//button[@type='button'][normalize-space()='No'])[2]");

        this.FaceLinkEnt=page.locator("img[alt='Follow us on facebook']");
        this.TwitLinkEnt=page.locator("img[alt='Follow us on twitter']");

    }
    async openEntitySettingsPage(){
        await this.page.goto("https://app-test.ipfs.com/Core/Admin/AgencySettings");
    }

    async wait(){
         await this.page.waitForLoadState('networkidle');
    }

}
module.exports={EntitySettingsPage};