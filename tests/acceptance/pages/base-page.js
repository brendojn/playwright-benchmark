module.exports = class BasePage {

    /**
     * @param {import("playwright").Page} page
     */
    constructor (page) {
        this.page = page;
    }

}