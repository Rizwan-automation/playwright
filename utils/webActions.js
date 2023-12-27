const { expect } = require("@playwright/test");

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

    async enterText(locator, text)  {
        await this.waitForElementAttached(locator);
        await this.page.fill(locator,text);
    }

    async selectOptionFromDropdown(locator, option)  {
        await this.waitForElementAttached(locator);
        const selectDropDownLocator = await this.page.$(locator);
        selectDropDownLocator.type(option);
    }
    
    async verifyText(locator, text)  {
        await this.waitForElementAttached(locator);
        const textValue = await this.page.textContent(locator);
        expect(textValue.trim()).toBe(text);
    }

    async waitForPageNavigation(event)  {
        switch (event.toLowerCase()) {
            case 'networkidle':
                await this.page.waitForLoadState({ waitUntil: 'networkidle', timeout: 10 });
                break;
            case 'load':
                await this.page.waitForLoadState({ waitUntil: 'load', timeout: 10 });
                break;
            case 'domcontentloaded':
                await this.page.waitForLoadState({ waitUntil: 'domcontentloaded', timeout: 10 });
        }
    }


}
module.exports = { webActions }