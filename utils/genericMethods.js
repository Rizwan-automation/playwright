class genericMethods {

    constructor(page) {
        this.page = page;
    }

    async click(selector) {
        await this.page.locator(selector).click();
    }

    async inputWithFill(selector,text) {
        await this.page.locator(selector).fill(text);
    }

    async inputWithType(selector,text) {
        await this.page.locator(selector).pressSequentially(text,{delay:100});
    }

    async getTextOfSingleElement(selector) {
        return await this.page.locator(selector).textContent();
    }

    async getTextOfMultipleElement(selector) {
        return await this.page.locator(selector).allTextContents();
    }

}
module.exports = {genericMethods}