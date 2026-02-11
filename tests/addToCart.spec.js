import { test, expect } from '@playwright/test'
const { LoginPage } = require('../locators/loginPage').default;
const { InventoryPage } = require('../locators/inventoryPage').default;

test('User can add to cart', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');

    await inventoryPage.addToCart();
    await expect(inventoryPage.cartIndicator).toHaveText("1");
    await inventoryPage.removeFromCart();
});