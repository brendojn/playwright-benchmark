const {Given, When, Then} = require('@cucumber/cucumber')
const convertToFloat = require("../helpers/convert-float");
const DashboardPage = require("../pages/dashboard-page");
const SearchPage = require("../pages/search-page");
const CheckoutPage = require("../pages/checkout-page");
let priceSearch = 0.0;
let priceCheckout = 0.0;

Given('que realizo a pesquisa de {string} para {string}', async function (origin, destination) {
    await page.goto('https://123milhas.com');
    let dashboardPage = new DashboardPage();
    await dashboardPage.redirectUrlSearch(origin, destination);
});

When('seleciono um card', async function () {
    let searchPage = new SearchPage();
    await searchPage.waitPriceRecommended();
    priceSearch = await searchPage.getPriceCard();
    await searchPage.selectCard();
});

Then('o valor constado no card deverá ser o mesmo do checkout', async function () {
    let checkoutPage = new CheckoutPage();
    await checkoutPage.waitBoxTaxes();
    priceCheckout = await checkoutPage.getPriceCheckout();
    priceCheckout = convertToFloat(priceCheckout);
    let boolVal = await checkoutPage.validatePrice(priceSearch, priceCheckout);
});
