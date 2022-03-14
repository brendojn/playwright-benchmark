const BasePage = require("./base-page");

module.exports = class CheckoutPage extends BasePage {

    ELEMENT_BOX_TAXES = '.checkout-page__wrapper-item price-tax-summary';
    ELEMENT_PRICE_CHECKOUT = '#price-total span';

    async waitBoxTaxes() {
        return page.waitForSelector(this.ELEMENT_BOX_TAXES);
    }

    async getPriceCheckout() {
        await page.waitForSelector(this.ELEMENT_PRICE_CHECKOUT);
        return page.textContent(this.ELEMENT_PRICE_CHECKOUT);
    }

    async validatePrice(priceSerch, priceCheckout) {
        if (priceSerch - priceCheckout < 2 || priceSerch - priceCheckout > -2 ) {
            return true;
        } else {
            return false;
        }
    }

}