const {expect} = require("@playwright/test");

class OrderPreviewPage{

    constructor(page){
        this.page = page;
        this.itemsAdded = page.locator("div.cart_item");
        this.total = page.locator("div.summary_subtotal_label");
    }

async verifyCountAndPrice(count,price){
    const quantity = await this.itemsAdded.count();
    await expect(quantity).toEqual(count);

    const text = await this.total.textContent();
    console.log(text);
    const total = parseFloat(text.split("$")[1]);
    console.log(total);
    await expect(total).toEqual(price);
    }
}

module.exports = {OrderPreviewPage}