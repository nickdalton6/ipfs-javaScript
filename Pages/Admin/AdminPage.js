class AdminPage{

    constructor() {

        //Associated User Drail down locators
        this.associatedUserPageLink=page.locator("a[title='AssociatedUserPage']");
        this.webAccCode=page.locator("#SecurityCode");
        this.addBtn=page.locator("#UserAddButton");
        this.delBtn=page.locator("#UserDeleteButton");
        this.delBtn=page.locator("#UserDeleteButton");
        this.psCode=page.locator("#ZIPCode");
        this.psCode=page.locator("#EmailAddress");
        this.psCode=page.locator("#EmailAddress");
        this.adminCkBox=page.locator("//input[@id='role_7fa7405a-ce56-4fb8-b129-3dd3726f31c8']");
        this.qutngCkBox=page.locator("//input[@id='role_302643c6-fee1-436e-8308-addbae0f6d63']");






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
        this.FaceLink=page.locator("img[src='/Images/Buttons/facebook_button.png']");
        this.TwitLink=page.locator("img[src='/Images/Buttons/twitter_button.png']");
        //Integration Tab
        this.IntegTab=page.locator("a[title='Integration']");
        this.InteMainTit=page.locator("input#hdnSelectedTabIndex");
        this.CovTab=page.locator("#CoverageTabPanel");
        this.namRadBtn=page.locator("#filterOnNameCoverage");
        this.namRadBtn=page.locator("#filterOnNameCoverage");
        this.ipfsValRadBtn=page.locator("#filterOnValueCoverage");
        this.strtWitRadBtn=page.locator("#startsWithRadioCoverage");
        this.CntnsRadBtn=page.locator("#containsRadioCoverage");
        this.itmPrPgDd=page.locator("#selectCoveragePageSize");
        this.totRec=page.locator("button[onclick=\"stringTextGeneralAgent.value = ''\"]");
        this.entTxtInBox=page.locator("#stringTextCoverage");//This locator send text for contains radio btn to search
        this.xSearchIcon=page.locator("button[onclick=\"stringTextCoverage.value = ''\"]"); //This locator clean the search box enter in line 43 (B)
        this.srchBtn=page.locator("#searchButtonCoverage");
        this.srhResTbl=page.locator(".bootstrap-table");
        this.srhResTblChBox=page.locator("input[name='btSelectAll']");
        this.srhResTblName=page.locator("div[class='th-inner sortable both']").nth(0);
        this.srhResTblIpfsVal=page.locator("div[class='th-inner sortable both']").nth(1);
        this.srhResTblCovTyp=page.locator("div[class='th-inner sortable both']").nth(2);
        this.FaceLink=page.locator("img[src='/Images/Buttons/facebook_button.png']");
        this.TwitLink=page.locator("img[src='/Images/Buttons/twitter_button.png']");
        //Edit Cover mapping edit btn waiting to be located.
        //Changing pages for table awaiting for a locator selections
        this.addBtn=page.locator("#CoverageAddButton");
        this.DelBtn=page.locator("#CoverageDeleteButton");
        //company tab related locators
        this.compnayTab=page.locator("#CompanyTabPanel");
        this.nameRadioBtn=page.locator("#filterOnNameCompany");
        this.idRadioBtn=page.locator("filterOnUniqueIDCompany");
        this.ipfsRadioBtn=page.locator("filterOnUniqueIDCompany");
        this.strtsWRadBtn=page.locator("#startsWithRadioCompany");
        this.cntnsRaBtn=page.locator("#containsRadioCompany");
        this.txtBoxAr=page.locator("#stringTextCompany");
        this.ClrTxtIcon=page.locator("button[onclick=\"stringTextCompany.value = ''\"]");
        this.srchIcon=page.locator("#searchButtonCompany");
        this.srchIcon=page.locator("#searchButtonCompany");
        this.paginIcon =page.locator("li.page-item page-pre a.page-link");//Not sure if playwright can interact with this or no
        this.SrhRstTable=page.locator("#companyTable");
        this.FaceLink=page.locator("img[src='/Images/Buttons/facebook_button.png']");
        this.TwitLink=page.locator("img[src='/Images/Buttons/twitter_button.png']");
        this.itmPrPgDd=page.locator("#selectCompanyPageSize");
        ///Edit Cover mapping edit btn waiting to be located.
        this.addBtn=page.locator("#CompanyAddButton");
        this.delBtn=page.locator("#CompanyDeleteButton");
        this.AgnCoDisc=page.locator("#AgentCompensationDisclosureLink");
        this.WebSitPrTeCon=page.locator("#TermsLink");
        this.IPFSFaLeInfSpCA=page.locator("#PrivacyLink");
        //Integration Maintenance-General Agent Tab
        this.generalAgentTab=page.locator("#GATabPanel");
        this.namRadBtnGA=page.locator("#filterOnNameGeneralAgent");
        this.unqID=page.locator("#filterOnUniqueIDGeneralAgent");
        this.ipfsVal=page.locator("#filterOnValueGeneralAgent");
        this.strtWiGA=page.locator("#startsWithRadioGeneralAgent");
        this.contRad=page.locator("#containsRadioGeneralAgent");
        this.srchTxtBox=page.locator("#stringTextGeneralAgent");
        this.ClrTxtIconGA=page.locator("button[onclick=\"stringTextGeneralAgent.value = ''\"]");
        this.srchBtnGA=page.locator("#searchButtonGeneralAgent");
        this.tabGA=page.locator("#gaTable");
        this.itmPrPgDd=page.locator("#selectGAPageSize");
        this.AgnCoDisc=page.locator("#AgentCompensationDisclosureLink");
        this.WebSitPrTeCon=page.locator("#TermsLink");
        this.IPFSFaLeInfSpCA=page.locator("#PrivacyLink");
        this.FaceLink=page.locator("img[src='/Images/Buttons/facebook_button.png']");
        this.TwitLink=page.locator("img[src='/Images/Buttons/twitter_button.png']");
        //Integration Maintenance-Broker Agent Tab
        this.brokerTab=page.locator("#BrokerTabPanel");
        this.namRadBtn=page.locator("#filterOnNameBroker");
        this.unIDBrok=page.locator("#filterOnUniqueIDBroker");
        this.ipfsBrok=page.locator("#filterOnValueBroker");
        this.strtWRadBtnBro=page.locator("#startsWithRadioBroker");
        this.cntinRadBtnBro=page.locator("#containsRadioBroker");
        this.txtBxBrok=page.locator("#stringTextBroker");
        this.xSrchIcnBrok=page.locator("button[onclick=\"stringTextBroker.value = ''\"]");
        this.SrchBtnBrok=page.locator("#searchButtonBroker");
        this.adBtnBrok=page.locator("#BrokerAddButton");
        this.DelBtnBrok=page.locator("BrokerDeleteButton");
        this.AgnCoDiscBrok=page.locator("#AgentCompensationDisclosureLink");
        this.WebSitPrTeConBrok=page.locator("#TermsLink");
        this.IPFSFaLeInfSpCABrok=page.locator("#PrivacyLink");
        this.FaceLink=page.locator("img[src='/Images/Buttons/facebook_button.png']");
        this.TwitLink=page.locator("img[src='/Images/Buttons/twitter_button.png']");
///Edit Cover mapping edit btn waiting to be located.
        //Integration Maintenance-Insured Tab
        this.insuredTab=page.locator("#InsuredTabPanel");
        this.namRadBtnIns=page.locator("#filterOnNameInsured");
        this.unqIDIn=page.locator("#filterOnUniqueIDInsured");
        this.ipfsValIn=page.locator("#filterOnValueInsured");
        this.addRdBtnIns=page.locator("#filterOnAddressInsured");
        this.SrtRdBtnIns=page.locator("#startsWithRadioInsured");
        this.cntnsRaBtnInsu=page.locator("#containsRadioInsured");
        this.xSrchIcnBrok=page.locator("button[onclick=\"stringTextBroker.value = ''\"]");
        this.cntnsRaBtnInsu=page.locator("#searchButtonInsured");
        //Total records need to be located
        this.ItmPDd=page.locator("#selectInsuredPageSize");
        this.AdBtnIsur=page.locator("#InsuredAddButton");
        this.dlBtn=page.locator("#InsuredDeleteButton");
        this.AgnCoDiscInsur=page.locator("#AgentCompensationDisclosureLink");
        this.WebSitPrTeConBrok=page.locator("#TermsLink");
        this.IPFSFaLeInfSpCABrok=page.locator("#PrivacyLink");
        this.FaceLink=page.locator("img[src='/Images/Buttons/facebook_button.png']");
        this.TwitLink=page.locator("img[src='/Images/Buttons/twitter_button.png']");
//AssociatedUserPage- Integration Tab
        this.intTab=page.locator("a[title='Integration']");
        this.helForUsManInt=page.locator("text=Help for User Manager");
        this.helForUsPopTxt=page.locator(".walkme-custom-balloon-title");
        this.helForUsPpUpAdUs=page.locator("helForUsPopTxt");
        this.helForUsPpUpEdUs=page.locator("text=Edit a User");
        this.helForUsPpUpRsPsWRE=page.locator("text=Reset Password with Registration Email");
        this.ClzhelForUsPpUp=page.locator("div[title='Stop Walk-thru']");
        this.addBtnUsmTab=page.locator("button[id='UserAddButton']");
        this.delBtnUsmTab=page.locator("button[id='UserDeleteButton']");
        this.AgnCoDiscUsmTab=page.locator("#AgentCompensationDisclosureLink");
        this.WebSitPrTeConBrok=page.locator("#TermsLink");
        this.IPFSFaLeInfSpCABrok=page.locator("#PrivacyLink");
        this.FaceLink=page.locator("img[src='/Images/Buttons/facebook_button.png']");
        this.TwitLink=page.locator("img[src='/Images/Buttons/twitter_button.png']");


    }


}