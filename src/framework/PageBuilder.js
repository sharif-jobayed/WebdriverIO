import {HomePage} from "../pages/HomePage.js";
import {CustomerLoginPage} from "../pages/CustomerLoginPage.js";

class PageBuilder {
    constructor() {
        this.pages = {
            'home': new HomePage('', 'Home page'),
            'customer login': new CustomerLoginPage(
                'https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/',
                'Customer Login page'
            )
            // Add other pages here as the suite grows
        };
    }

    async getPage(pageName) {
        const pageRef = pageName.toString().toLowerCase();

        for (let pageKey in this.pages) {
            const page = this.pages[pageKey];

            const pageNameFromPage = await page.getPageName();
            console.log(`Checking page: ${pageNameFromPage}`);

            if (typeof pageNameFromPage === 'string' && pageNameFromPage.toLowerCase().includes(pageRef)) {
                return page;
            }
        }

        throw new Error(`Invalid page request: ${pageRef}`);
    }
}

export {PageBuilder};
