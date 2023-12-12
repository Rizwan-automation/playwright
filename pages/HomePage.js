const { expect } = require("@playwright/test");
// const { helper } = require("../../utils/helper");
class HomePage {

    constructor(page) {
        this.page = page;
        this.loginLink = page.getByText('Login or register');
        this.welcomeMsg = page.getByText('Welcome back Rizwan');
        this.currencyDropdown = page.locator('ul.language.pull-left');
        this.checkout = page.locator('ul#main_menu_top a.top.menu_checkout');

    }

    async goTo(url, title) {
        await this.page.goto(url);
        console.log(await this.page.title());
        await expect(this.page).toHaveTitle(title)
    }


    async navigateToLoginPage() {
        await this.loginLink.click();
    }

    async verifyUserisLoggedIn(text) {
        await expect(this.welcomeMsg).toContainText(text)
    }

    async selectCurrency(currency) {
        await this.currencyDropdown.hover();
        await this.page.locator("[href*='"+currency+"']").click();
    }

    async selectMainMenu(menu, subMenu){
        await this.page.locator(`(//section[@id='categorymenu']//a[contains(text(),'${menu}')])[2]`).hover();
        await this.page.locator(`(//section[@id='categorymenu']//a[contains(text(),'${menu}')])[2]/following-sibling::div//a[contains(text(),'${subMenu}')]`).click();
    }

    async selectMenu(menu){
        await this.page.locator(`(//section[@id='categorymenu']//a[contains(text(),'${menu}')])[1]`).click();
    }

    async clickCheckout(){
        await this.checkout.click();
    }

}

module.exports = { HomePage }