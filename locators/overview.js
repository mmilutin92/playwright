class OverviewPage {

    constructor(page){
        this.page = page
        this.finishButton = page.locator('button[id="finish"]');
    }

    async clickOnFinish(){
        await this.finishButton.click();
    }
}

export default { OverviewPage };