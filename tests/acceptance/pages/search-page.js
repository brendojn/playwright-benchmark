const BasePage = require("./base-page");

module.exports = class SearchPage extends BasePage {

    $s = this.$$s.searchSelector;

    async waitPriceRecommended() {
        return page.waitForSelector(this.$s.ELEMENT_PRICES_RECOMMENDED);
    }

    async getPriceCard () {
        await page.waitForSelector(this.$s.ELEMENT_PRICE_CARD);
        return page.textContent(this.$s.ELEMENT_PRICE_CARD);
    }

    async selectCard () {
        return page.click(this.$s.BUTTON_SELECT_CARD)
    }
}