class ShoppingCart {

    constructor(page){
        this.page = page
        this.checkoutButton = page.locator('button[id="checkout"]')
    }

    async clickOnCheckout(){
        await this.checkoutButton.click();
    }

}

export default { ShoppingCart };