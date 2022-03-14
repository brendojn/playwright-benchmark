const BasePage = require("./base-page");

module.exports = class SearchPage extends BasePage {

    ELEMENT_PRICES_RECOMMENDED = '[class*="cards-holder"]';
    ELEMENT_PRICE_CARD = '.scale-in:nth-child(1) [id*="price-total"] [id*="total-price"]'
    BUTTON_SELECT_CARD = '.scale-in:nth-child(1) button[id*="cia"]'

    async waitPriceRecommended() {
        return page.waitForSelector(this.ELEMENT_PRICES_RECOMMENDED);
    }

    async getPriceCard () {
        await page.waitForSelector(this.ELEMENT_PRICE_CARD);
        return page.textContent(this.ELEMENT_PRICE_CARD);
    }

    async selectCard () {
        return page.click(this.BUTTON_SELECT_CARD)
    }
}