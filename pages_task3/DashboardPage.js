const { expect } = require("@playwright/test");
const { webActions } = require("../utils/webActions");

class DashboardPage {

    constructor(page) {
        this.page = page;
        // this.productTitle = page.locator("span.title");
        this.productTitle = "span.title";
        // this.filter = page.locator("select.product_sort_container");
        this.filter = "select.product_sort_container";
        this.itemPrices = page.locator("div.inventory_item_price");
        this.addCartBtn = page.locator("div.inventory_item_price + button");
        // this.cartBtn = page.locator("a.shopping_cart_link");
        this.cartBtn = "a.shopping_cart_link";
        this.WebActions = new webActions(this.page);

    }

    async verifyDashboardPage(title) {
        await this.WebActions.verifyText(this.productTitle, title)
        // await expect(this.productTitle).toContainText(title);
    }

    async selectFilter(filter) {
        await this.WebActions.selectOptionFromDropdown(this.filter, filter);
        // await this.filter.selectOption(filter);
    }

    async verifyPrices() {
        let temp = '';
        const allPrices = await this.itemPrices.allTextContents();

        for (let i = 0; i < allPrices.length; i++) {
            let price = allPrices[i].split("$")
            temp = price[1];
            await expect(temp <= price[1]).toBeTruthy();
        }
    }

    async addItemsToCart(count) {
        let totalPrice = 0;
        for (let i = 0; i < count; i++) {
            await this.addCartBtn.nth(i).click();
            const itemPrice = await this.itemPrices.nth(i).textContent();
            console.log(itemPrice.split("$")[1]);
            totalPrice = totalPrice + parseFloat(itemPrice.split("$")[1]);
        }
        console.log(totalPrice);
        return totalPrice;
    }

    async navigateToCartPage() {
        // await this.cartBtn.click();
        await this.WebActions.clickElement(this.cartBtn);
    }
}

module.exports = { DashboardPage }