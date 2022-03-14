const mountUrl = require("../helpers/mount-url");
const BasePage = require("./base-page");

module.exports = class ConfirmationPage extends BasePage {

    async redirectUrlSearch(origin, destination) {
        let url = mountUrl(origin, destination)
        return page.goto(url);
    }

}