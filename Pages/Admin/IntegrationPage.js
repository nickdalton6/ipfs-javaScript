class IntegrationPage {
    constructor(page) {
        this.page=page;
        this.IntegTab=page.locator("a[title='IntegrationPage']");
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
        this.rstTableCov=page.locator("table#coverageTable tr");
        this.srhResTbl=page.locator(".bootstrap-table");
        this.srhResTblChBox=page.locator("input[name='btSelectAll']");
        this.addBtn=page.locator("#CoverageAddButton");
        this.DelBtn=page.locator("#CoverageDeleteButton");
        this.srhResTblName=page.locator("div[class='th-inner sortable both']").nth(0);
        this.srhResTblIpfsVal=page.locator("div[class='th-inner sortable both']").nth(1);
        this.srhResTblCovTyp=page.locator("div[class='th-inner sortable both']").nth(2);
        this.FaceLink=page.locator("img[src='/Images/Buttons/facebook_button.png']");
        this.TwitLink=page.locator("img[src='/Images/Buttons/twitter_button.png']");
    //Waiting for pagination issue to be resloved and edit coverage mapping pop is pending too.


    }


  async  openIntegrationPage(){
      await  this.page.goto("https://localhost")
    }


}