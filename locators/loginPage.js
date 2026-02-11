class LoginPage {
    
    constructor(page){
        this.page = page;
        this.usernameInput = page.locator('input[id="user-name"]');
        this.passwordInput = page.locator('input[id="password"]');
        this.submitButton = page.locator('input[id="login-button"]');
        this.errorMessage = page.locator('h3[data-test="error"]');
    }

    async goto() {
        await this.page.goto('https://www.saucedemo.com/');
    }

    async login(username, password) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.submitButton.click();
    }
}

export default { LoginPage };