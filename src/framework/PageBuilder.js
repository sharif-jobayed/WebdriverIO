const {HomePage} = require("../pages/HomePage");

class PageBuilder {
    constructor() {
        this.homePage = new HomePage(
            "https://magento.softwaretestingboard.com/",
            "Home page"
        );
    }

    async getPage(pageTitle) {
        const page = pageTitle.toString().toLowerCase();
        console.log(`Page Title: ${pageTitle}`);

        switch (page) {
            case "home":
                return this.homePage;
            default:
                throw new Error(`Page Title: ${pageTitle} is not a valid page.`);
        }
    }
}

module.exports = {PageBuilder}
