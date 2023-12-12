const { LoginPage } = require('../pages/LoginPage');
const { DashboardPage } = require("../pages/DashBoardPage");
const { MycartPage } = require("../pages/MycartPage");
const { CheckoutPage } = require("../pages/CheckoutPage");
const { OrderconfirmationPage } = require("../pages/OrderconfirmationPage");
const { FragranceMenuPage } = require("../pages/FragranceMenuPage");
const { OrdersummaryPage } = require("../pages/OrdersummaryPage");
const { HomePage } = require("../pages/HomePage");

class POManager{

    constructor(page){
        this.page=page;
        this.loginPage = new LoginPage(this.page);
        this.dashboardPage = new DashboardPage(this.page);
        this.myCartPage = new MycartPage(this.page);
        this.checkoutPage = new CheckoutPage(this.page);
        this.orderConfirmationPage = new OrderconfirmationPage(this.page);
        this.fragranceMenuPage = new FragranceMenuPage(this.page);
        this.orderSummaryPage = new OrdersummaryPage(this.page);
        this.homePage = new HomePage(this.page);
    }

getLoginPage(){
    return this.loginPage;
}

getDashBoardPage(){
    return this.dashboardPage;
}

getMyCartPage(){
    return this.myCartPage;
}

getCheckoutPage(){
    return this.checkoutPage;
}

getOrderConfirmationPage(){
    return this.orderConfirmationPage;
}

getFragranceMenuPagePage(){
    return this.fragranceMenuPage;
}

getOrderSummaryPage(){
    return this.orderSummaryPage;
}

getHomePage(){
    return this.homePage;
}

}

module.exports = {POManager}