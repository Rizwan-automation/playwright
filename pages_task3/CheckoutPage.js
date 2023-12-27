const {expect} = require("@playwright/test");
const { webActions } = require("../utils/webActions");

class CheckoutPage{

    constructor(page){
        this.page = page;
        this.firstName = "input#first-name";
        this.lastName = "input#last-name";
        this.zipCode = "input#postal-code";
        this.continueBtn = "input#continue";
        this.WebActions = new webActions(this.page);
    }

async enterInfo(firstName,lastName,zipCode){
    await this.WebActions.enterText(this.firstName, firstName)
    await this.WebActions.enterText(this.lastName, lastName)
    await this.WebActions.enterText(this.zipCode, zipCode)
    }

async navigateToOrderPreviewPage(){
    await this.WebActions.clickElement(this.continueBtn)    
}
}

module.exports = {CheckoutPage}