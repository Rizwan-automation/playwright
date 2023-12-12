const { default: test , expect} = require("@playwright/test");
const { POManagerTask3 } = require("../pages_task3/POManagerTask3");

test('Playwright Assignment Task3',async ({page})=>
{
    const poManager = new POManagerTask3(page);
    const loginPage = poManager.getLoginPage();
    const dashboardPage = poManager.getDashBoardPage();
    const cartPage = poManager.getMyCartPage();
    const checkoutPage = poManager.getCheckoutPage();
    const orderPreviewPage = poManager.getOrderPreviewPage();

    const user = "standard";
    const firstName = "John";
    const lastName = "Snow";
    const zipCode = "64521";
    const itemsCount = 2;
    const pageTitle= "Swag Labs";
    const url = "https://www.saucedemo.com/";
    
    // Scenario - 1
    await loginPage.goTo(url,pageTitle);
    const loginUser = await loginPage.getUser(user);
    const loginPassword = await loginPage.getPassword();
    await loginPage.login(loginUser,loginPassword);
    await dashboardPage.verifyDashboardPage("Product");

    // Scenario - 2
    await dashboardPage.selectFilter("lohi");
    await dashboardPage.verifyPrices();
    const totalPrice = await dashboardPage.addItemsToCart(itemsCount);
    await dashboardPage.navigateToCartPage();
    await cartPage.navigateToCheckoutPage();
    await checkoutPage.enterInfo(firstName,lastName,zipCode);
    await checkoutPage.navigateToOrderPreviewPage();
    await orderPreviewPage.verifyCountAndPrice(itemsCount,totalPrice);

});
