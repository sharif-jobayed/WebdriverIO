const {BasePage} = require("../framework/BasePage");

class HomePage extends BasePage {
    constructor(pageURL, pageName) {
        super(pageURL, pageName);
    }
}

module.exports = {HomePage}
