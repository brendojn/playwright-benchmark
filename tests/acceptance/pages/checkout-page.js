const BasePage = require("./base-page");

module.exports = class CheckoutPage extends BasePage {

    $s = this.$$s.checkoutSelector;

    async waitBoxTaxes() {
        return page.waitForSelector(this.$s.ELEMENT_BOX_TAXES);
    }

    async getPriceCheckout() {
        await page.waitForSelector(this.$s.ELEMENT_PRICE_CHECKOUT);
        return page.textContent(this.$s.ELEMENT_PRICE_CHECKOUT);
    }

    async validatePrice(priceSerch, priceCheckout) {
        if (priceSerch - priceCheckout < 2 || priceSerch - priceCheckout > -2 ) {
            return true;
        } else {
            return false;
        }
    }

}