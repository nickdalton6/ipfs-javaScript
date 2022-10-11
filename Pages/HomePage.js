class HomePage{

    constructor(page) {
        this.page=page
        this.url="https://test.ipfs.com/";
        this.ipfsCanadaLink=page.locator("text=Visit IPFS Canada");
        this.registerLink=page.locator("//a[text()='Register']");
        this.loginLink=page.locator("//a[text()='Login']").last();
        this.greenPayntBtn=page.locator("#btnMakeAPayment");
        this.homeNavElem=page.locator(".navbar-nav.flex-wrap");
        this.aboutUSTab=page.locator(".nav-link[href='/about-us']");
        this.premFinanTab=page.locator(".nav-link[href='/about-premium-financing']");
        this.PaymTab=page.locator(".nav-link[href='/payments']");
        this.benefTab=page.locator(".nav-link[href='/benefits']");
        this.locTab=page.locator(".nav-link[href='/locations']");
        this.contTab=page.locator(".nav-link[href='/contact']");
        this.ipfsSlogan=page.locator("div[class='col-12 col-md-9'] h1");
        this.benForInsurAgent=page.locator("div[id='body_C015_Col00'] div div[class='callout']");
        this.benForBussOwner=page.locator(" div[id='body_C017_Col00'] div div[class='sfContentBlock sf-Long-text']");
        this.benForInsurComp=page.locator("div[id='body_C046_Col00'] div div[class='sfContentBlock sf-Long-text']");
        this.ipfsNewsUp=page.locator("text=IPFS News & Updates");
        this.ViewAllTab=page.locator("a[href='/news']").first();







    }
}module.exports={HomePage};