class InventoryPage {

    constructor(page){
        this.page = page;
        this.addToCartButton = page.locator('button[id="add-to-cart-sauce-labs-backpack"]');
        this.removeFromCartButton = page.locator('button[id="remove-sauce-labs-backpack"]');
        this.cartIndicator = page.locator('span[data-test="shopping-cart-badge"]');
        this.addToCartButtonClass = page.locator('button.btn.btn_primary.btn_small.btn_inventory');
        this.shoppingCartButton = page.locator('a[data-test="shopping-cart-link"]');
    }

    async addToCart(){
        await this.addToCartButton.click();
    }

    async addToCart3Items(){
        await this.addToCartButtonClass.nth(0).click();
        await this.addToCartButtonClass.nth(1).click();
        await this.addToCartButtonClass.nth(2).click();
    }

    async removeFromCart(){
        await this.removeFromCartButton.click();
    }

    async clickOnShoppingCart(){
        await this.shoppingCartButton.click();
    }
}

export default { InventoryPage };