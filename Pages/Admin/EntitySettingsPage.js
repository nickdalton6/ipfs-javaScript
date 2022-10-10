class EntitySettingsPage {



    constructor(page) {
        this.page=page;
        this.EntitySetTab=page.locator("a[title='Entity Settings']");
        this.PFFeeVerb=page.locator("select.col-xs-12.col-md-6").first();
        this.PFFeeDiscNonCA=page.locator("select.col-xs-12.col-md-6").nth(1);
        this.PFFeeDiscCA=page.locator("select.col-xs-12.col-md-6").nth(2);
        this.weleMailToInsChkBox=page.locator("//input[@type='checkbox']");
        this.saveBtn=page.locator("button#SaveButton");
        this.cancelBtn=page.locator("button#CancelButton");

        this.FaceLink=page.locator("img[src='/Images/Buttons/facebook_button.png']");
        this.TwitLink=page.locator("img[src='/Images/Buttons/twitter_button.png']");

    }
    async openEntitySettingsPage(){
        await this.page.goto("https://app-test.ipfs.com/Core/Admin/AgencySettings");
    }


}
module.exports={EntitySettingsPage};