class PurchaseCompletedPage {

    constructor(page){
        this.page = page
        this.finishedImage = page.locator('img[data-test="pony-express"]');
        this.finishedHeader = page.locator('h2[data-test="complete-header"]');
        this.finishedText = page.locator('div[data-test="complete-text"]');
        this.backToHome = page.locator('button[id="back-to-products"]');
    }

    async clickOnHome(){
        await this.backToHome.click();
    }
}

export default { PurchaseCompletedPage };