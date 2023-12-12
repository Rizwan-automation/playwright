const { expect } = require("@playwright/test");

class LoginPage {

    constructor(page) {
        this.page = page;
        this.listOfUsers = page.locator("div#login_credentials");
        this.listOfPassword = page.locator("div.login_password");
        this.username = page.locator("input#user-name");
        this.password = page.locator("input#password");
        this.loginBtn = page.locator("input#login-button");
    }

    async goTo(url, title) {
        await this.page.goto(url);
        console.log(await this.page.title())
        await expect(this.page).toHaveTitle(title)
    }

    async getUser(user) {
        let finalUser = "";
        const text = await this.listOfUsers.first().textContent();
        const splitted_text = text.split(":");
        const users = splitted_text[1].split("_user");

        for (let i = 0; i < users.length - 1; i++) {
            if (users[i].includes(user)) {
                finalUser = user.concat("_user");
            }
        }
        console.log(finalUser);
        return finalUser;
    }

    async getPassword() {
        const text = await this.listOfPassword.first().textContent();
        const password = text.split(":");
        console.log(password[1]);
        return password[1];
    }

    async login(user, pass) {
        await this.username.fill(user);
        await this.password.fill(pass);
        await this.loginBtn.click();
    }

}
module.exports = { LoginPage }