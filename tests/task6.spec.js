const { default: test, expect } = require("@playwright/test");
const { POManagerTask3 } = require("../pages_task3/POManagerTask3");

    test('Playwright Assignment Task6', async ({ page }) => {
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
        const pageTitle = "Quick Learner";
        const url = "file:///C:/Workspace/Cypress%20Assignment-Task6/QuickLearn/index.html";

        // CASE # 1
        await loginPage.goTo(url, pageTitle);
        await page.locator("#exploreBtn").click();
        await page.locator("//button[contains(text(),'Designing')]").click();
        await page.locator("//button[contains(text(),'Photo')]").click();
        const begText = await page.locator("//div[@id='beginnerResourceBox']/preceding-sibling::h4").textContent();
        expect("Beginner").toEqual(begText);
        const intText = await page.locator("(//div[@id='intermediateResourceBox']/preceding-sibling::h4)[2]").textContent();
        expect("Intermediate").toEqual(intText);
        const advText = await page.locator("(//div[@id='advancedResourceBox']/preceding-sibling::h4)[3]").textContent();
        expect("Advanced").toEqual(advText);

        // CASE # 2
        await page.locator("#navResourceBtn").click();
        await page.locator("//h2[@id='resourceReferenceHeading']/following-sibling::a").click();
        await page.locator("(//button[contains(text(),'Programming')])[1]").click();
        await page.locator("(//button[contains(text(),'Java')])[1]").click();
        
    });
