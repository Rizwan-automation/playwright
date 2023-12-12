const {expect} = require("@playwright/test");

class MycartPage{

    constructor(page){
        this.checkout = page.locator("button#checkout");
    }
async navigateToCheckoutPage(){
    // await this.checkout.waitFor();
    await this.checkout.click();
}
}

module.exports = {MycartPage}