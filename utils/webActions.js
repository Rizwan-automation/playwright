class webActions {

    constructor(page) {
        this.page = page;
    }

    async waitForElementAttached(locator)  {
        await this.page.waitForSelector(locator);
    }

    async clickElement(locator)  {
        await this.waitForElementAttached(locator);
        await this.page.click(locator);
    }
    
}
module.exports = { webActions }