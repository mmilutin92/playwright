// @ts-check
import { test, expect } from '@playwright/test'
const { LoginPage } = require('../locators/loginPage').default;

test('User can login', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce')

    await expect(page).toHaveTitle('Swag Labs')
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
});

test('Locked out user receives error message', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login('locked_out_user', 'secret_sauce')

    await expect(loginPage.errorMessage).toBeVisible();

});
