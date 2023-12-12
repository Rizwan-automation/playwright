const { When, Then, Given } = require('@cucumber/cucumber');
// var { setDefaultTimeout } = require('@cucumber/cucumber');
// setDefaultTimeout(60 * 1000);

Given('I visit {string} and with page {string}', async function (url, title) {
    this.homePage = this.poManager.getHomePage();
    await this.homePage.goTo(url, title);
});

When('I click login link', async function () {
    await this.homePage.navigateToLoginPage();
});

When('I login with username {string} and password {string}', async function (username, password) {
    const loginPage = this.poManager.getLoginPage();
    await loginPage.validLogin(username, password);
});

When('I verify user is logged in as {string}', async function (text) {
    await this.homePage.verifyUserisLoggedIn(text);
});

When('I select currency as {string}', async function (currency) {
    await this.homePage.selectCurrency(currency);
});

When('I select main menu as {string} and sub-menu as {string}', async function (menu, subMenu) {
    await this.homePage.selectMainMenu(menu, subMenu)
});

When('I add items of {string} in cart', async function (subMenu) {
    const orderSummaryPage = this.poManager.getOrderSummaryPage();
    await orderSummaryPage.addItemsToCart(subMenu);
});

When('I click on checkout button', async function () {
    await this.homePage.clickCheckout();
});

Then('I verify items count in cart {string}', async function (time) {
    this.checkoutPage = this.poManager.getCheckoutPage();
    await this.checkoutPage.verifyQuantityOfAddedItemsInCart(time);
});

When('I verify total price {string}', async function (time) {
    await this.checkoutPage.verifyPriceOfAddedItemsInCart(time);
});

When('I click on edit cart button', async function () {
    await this.checkoutPage.navigateToEditCart();
});

When('I check total amount is {float}', async function (check_amount) {
    const data = JSON.parse(JSON.stringify(require("../../utils/dynamicData1.json")));
    await this.checkoutPage.checkPrice(check_amount, data.totalItemsInCart);
});

When('I select main menu as {string}', async function (menu) {
    await this.homePage.selectMenu(menu)
});

When('I check product count is {float}', async function (length) {
    const fragranceMenuPage = this.poManager.getFragranceMenuPagePage();
    await fragranceMenuPage.verifyProductCount(length);
});
