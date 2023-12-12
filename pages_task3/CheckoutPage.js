const {expect} = require("@playwright/test");

class CheckoutPage{

    constructor(page){
        this.page = page;
        this.firstName = page.locator("input#first-name");
        this.lastName = page.locator("input#last-name");
        this.zipCode = page.locator("input#postal-code");
        this.continueBtn = page.locator("input#continue");
    }

async enterInfo(firstName,lastName,zipCode){
    await this.firstName.fill(firstName);
    await this.lastName.fill(lastName);
    await this.zipCode.fill(zipCode);
    }

async navigateToOrderPreviewPage(){
    await this.continueBtn.click();
    }
}

module.exports = {CheckoutPage}