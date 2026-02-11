class Information {

    constructor(page){
        this.page = page
        this.firstNameInputField = page.locator('input[id="first-name"]');
        this.lastNameInputField = page.locator('input[id="last-name"]');
        this.postalCodeInputField = page.locator('input[id="postal-code"]');
        this.continueButton = page.locator('input[id="continue"]')
    }

    async fillFields(firstName, lastName, postalCode){
        await this.firstNameInputField.fill(firstName);
        await this.lastNameInputField.fill(lastName);
        await this.postalCodeInputField.fill(postalCode);
    }

    async clickOnContinue(){
        await this.continueButton.click();
    }
}

export default { Information };