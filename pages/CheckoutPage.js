const { expect } = require("@playwright/test");
const { helper } = require("../utils/helper");


class CheckoutPage {

    constructor(page) {
        this.page = page;
        this.editCart = page.locator("//h4[contains(text(),'Items in your cart')]//a");
        this.addedItemsQuantity = page.locator("//table[@class='table confirm_products']//td[4]");
        this.subTotalprice = page.locator("//span[contains(text(),'Sub-Total')]/parent::td/following-sibling::td/span");
        this.eyeMasterItemPrice = page.locator("(//a[contains(text(),'Eye master')]/parent::td/following-sibling::td[1])[1]");

    }
    helperObj = new helper();
    async verifyQuantityOfAddedItemsInCart(time) {
        const data = await JSON.parse(JSON.stringify(require("../utils/dynamicData1.json")));
        await this.addedItemsQuantity.first().waitFor();
        const count = await this.addedItemsQuantity.count();
        this.receivedQuantity = "0";
        if (time === "first time") {
            const expectedQuantity = await this.helperObj.lengthOfJSONFile("./utils/dynamicData.json")
            await this.helperObj.writeDataToJSONFile("totalItemsInCart", expectedQuantity, "./utils/dynamicData1.json")
            for (let i = 0; i < count; i++) {
                let temp = await this.addedItemsQuantity.nth(i).textContent();
                this.receivedQuantity = parseInt(this.receivedQuantity) + parseInt(temp);
            }
            await expect(this.receivedQuantity).toEqual(expectedQuantity + 1) // for Eye master(Item) it is selecting twice with 1 click so thats why added 1 here
        }
        else {

            for (let i = 0; i < count; i++) {
                let temp = await this.addedItemsQuantity.nth(i).textContent();
                this.receivedQuantity = parseInt(this.receivedQuantity) + parseInt(temp);
            }
            expect(this.receivedQuantity).toEqual(data.total)
        }
    }

    async verifyPriceOfAddedItemsInCart(time) {
        const filePath = './utils/dynamicData1.json'
        const expectedPrice = await this.helperObj.keysOfJSONFile("./utils/dynamicData.json");
        const expectedPriceFinal = await this.helperObj.keysOfJSONFile("./utils/dynamicData2.json");

        console.log("expectedPriceFinal " + expectedPriceFinal)

        let price = await this.subTotalprice.textContent();
        const subTotalReceivedPrice = parseFloat(price.replace(/[^.0-9]/g, ""));

        if (time === "first time") {
            let eyeMasterPrice = await this.eyeMasterItemPrice.textContent();
            const actualEyeMasterPrice = parseFloat(eyeMasterPrice.replace(/[^.0-9]/g, ""));

            const finalSubTotalPrice = expectedPrice + actualEyeMasterPrice
            expect(finalSubTotalPrice).toEqual(subTotalReceivedPrice);
            await this.helperObj.writeDataToJSONFile("subTotalPrice", finalSubTotalPrice, filePath)
        }
        else {
            expect(expectedPriceFinal).toEqual(subTotalReceivedPrice);
        }
    }

    async navigateToEditCart() {
        await this.editCart.click();
    }

    async checkPrice(check_price, itemCount) {
        console.log("total item after deleting " + itemCount)

        let price = await this.subTotalprice.textContent();
        const subTotalReceivedPrice = parseFloat(price.replace(/[^.0-9]/g, ""));
        console.log("subTotalReceivedPrice: " + subTotalReceivedPrice);

        if (check_price >= subTotalReceivedPrice) {
            await this.helperObj.writeDataToJSONFile("previousSubtotal", subTotalReceivedPrice, "./utils/dynamicData2.json")
            return;
        }
        await this.page.locator(`(//table[@class='table table-striped table-bordered']//tbody//tr)[${itemCount}]//td[7]//a`).click();
        itemCount = itemCount - 1;
        console.log("itemCount in checkPrice" + itemCount)
        await this.helperObj.writeDataToJSONFile("items", itemCount, "./utils/dynamicData1.json")
        await this.checkPrice(check_price, itemCount);
    }
}

module.exports = { CheckoutPage }