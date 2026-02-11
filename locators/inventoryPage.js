class InventoryPage {

    constructor(page){
        this.page = page;
        this.addToCartButton = page.locator('button[id="add-to-cart-sauce-labs-backpack"]');
        this.removeFromCartButton = page.locator('button[id="remove-sauce-labs-backpack"]');
        this.cartIndicator = page.locator('span[data-test="shopping-cart-badge"]');
    }

    async addToCart(){
        await this.addToCartButton.click();
    }

    async removeFromCart(){
        await this.removeFromCartButton.click();
    }
}

export default { InventoryPage };