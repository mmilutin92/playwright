import { test, expect } from '@playwright/test'
const { LoginPage } = require('../locators/loginPage').default;
const { InventoryPage } = require('../locators/inventoryPage').default;
const { ShoppingCart } = require('../locators/shoppingCart').default;
const { Information } = require('../locators/information').default;
const { OverviewPage } = require('../locators/overview').default;
const { PurchaseCompletedPage } = require('../locators/purchaseCompleted').default;


test('User can add 3 items to cart and checkout', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const shoppingCartPage = new ShoppingCart(page);
    const informationPage = new Information(page);
    const overviewPage = new OverviewPage(page);
    const purchaseCompletedPage = new PurchaseCompletedPage(page);

    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');

    await inventoryPage.addToCart3Items();
    await inventoryPage.clickOnShoppingCart();

    await shoppingCartPage.clickOnCheckout();
    await informationPage.fillFields('Mario', 'Milutin', '10000');
    await informationPage.clickOnContinue();

    await overviewPage.clickOnFinish();

    await expect(purchaseCompletedPage.finishedImage).toBeVisible();
    await expect(purchaseCompletedPage.finishedHeader).toBeVisible();
    await expect(purchaseCompletedPage.finishedText).toBeVisible();

    await purchaseCompletedPage.clickOnHome();

});