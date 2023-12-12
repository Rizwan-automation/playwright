const { LoginPage } = require('../pages_task3/LoginPage');
const { DashboardPage } = require("../pages_task3/DashboardPage");
const { MycartPage } = require("../pages_task3/MycartPage");
const { CheckoutPage } = require("../pages_task3/CheckoutPage");
const { OrderPreviewPage } = require("../pages_task3/OrderPreviewPage");

class POManagerTask3 {

    constructor(page) {
        this.page = page;
        this.loginPage = new LoginPage(this.page);
        this.dashboardPage = new DashboardPage(this.page);
        this.myCartPage = new MycartPage(this.page);
        this.checkoutPage = new CheckoutPage(this.page);
        this.orderPreviewPage = new OrderPreviewPage(this.page);
    }

    getLoginPage() {
        return this.loginPage;
    }

    getDashBoardPage() {
        return this.dashboardPage;
    }

    getMyCartPage() {
        return this.myCartPage;
    }

    getCheckoutPage() {
        return this.checkoutPage;
    }

    getOrderPreviewPage() {
        return this.orderPreviewPage;
    }

}

module.exports = { POManagerTask3 }