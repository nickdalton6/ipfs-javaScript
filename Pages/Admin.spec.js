class Admin{

    constructor(page) {

        this.page=page
        this.Admin=page.locator("a[title='Admin']");
        this.AssocUser=page.locator("a[title='Associated Users']");
        this.AssocUserPage=page.locator("h2[xpath='1']");
        this.AssocUserPageTable=page.locator(".col-sm-6");
        this.AssoUsTLog=page.locator("th[data-field='1']");
        this.AssoUsNam=page.locator("text=Name");
        this.AssoUsEmai=page.locator("tex=Email");
        this.AssoAddBtn=page.locator("#UserAddButton").last();
        this.AssoDelBtn=page.locator("button[id='UserDeleteButton']");
        //Entity Setting Tab
        this.EntitySetTab=page.locator("a[title='Entity Settings']");
        this.PFFeeVerb=page.locator("select.col-xs-12.col-md-6").first();
        this.PFFeeDiscNonCA=page.locator("select.col-xs-12.col-md-6").nth(1);
        this.PFFeeDiscCA=page.locator("select.col-xs-12.col-md-6").nth(2);
        this.weleMailToInsChkBox=page.locator("//input[@type='checkbox']");
        this.saveBtn=page.locator("button#SaveButton");
        this.cancelBtn=page.locator("button#CancelButton");
        this.FaceLink=page.locator("img[src='/Images/Buttons/facebook_button.png']");
        this.TwitLink=page.locator("img[src='/Images/Buttons/twitter_button.png']");
        //Insured Branding Tab
        this.InsBranTab=page.locator("a[title='Insured Branding']");
        this.AgeComDisLink=page.locator("#AgentCompensationDisclosureLink");
        this.WebSitPrTeCon=page.locator("#TermsLink");
        this.IPFSFaLeInfSpCA=page.locator("#PrivacyLink");
        this.InBranText=page.locator("#HeaderLabel");
        this.ChosFile=page.locator("input#file-upload");
        this.DelBraImg=page.locator("img#branding-image");
        this.PrevFrame=page.locator("img#branding-image");
        //Integration Tab
        this.IntegTab=page.locator("a[title='Integration']");
        this.InteMainTit=page.locator("input#hdnSelectedTabIndex");
        this.CovTab=page.locator("#CoverageTabPanel");
        this.namRadBtn=page.locator("#filterOnNameCoverage");
        this.namRadBtn=page.locator("#filterOnNameCoverage");
        this.ipfsValRadBtn=page.locator("#filterOnValueCoverage");
        this.strtWitRadBtn=page.locator("#startsWithRadioCoverage");
        this.CntnsRadBtn=page.locator("#containsRadioCoverage");
        this.entTxtBox=page.locator("#stringTextCoverage");//This locator send text for contains radio btn to search
        this.xSearchIcon=page.locator("button[onclick=\"stringTextCoverage.value = ''\"]"); //This locator clean the search box enter in line 43 (B)
        this.srchBtn=page.locator("#searchButtonCoverage");
        this.srhResTbl=page.locator(".bootstrap-table");
        this.srhResTblChBox=page.locator("input[name='btSelectAll']");
        this.srhResTblName=page.locator("div[class='th-inner sortable both']").nth(0);
        this.srhResTblIpfsVal=page.locator("div[class='th-inner sortable both']").nth(1);
        this.srhResTblCovTyp=page.locator("div[class='th-inner sortable both']").nth(2);
        //Edit Cover mapping edit btn waiting to be located.
        //Changing pages for table awaiting for a locator selections
        this.addBtn=page.locator("#CoverageAddButton");
        this.DelBtn=page.locator("#CoverageDeleteButton");


















    }}


