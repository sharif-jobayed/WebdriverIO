import AppData from '../data/appData.json';
import {HomePage} from '../pages/HomePage.js';

class PageBuilder {
    constructor() {
        this.homePage = new HomePage(
            ``,
            `Home page`
        );
    }

    async getPage(pageTitle) {
        const page = pageTitle.toString().toLowerCase();
        console.log(`Page Title: ${pageTitle}`);

        switch (page) {
            case `home`:
                return this.homePage;
            default:
                throw new Error(`Page Title: ${pageTitle} is not a valid page.`);
        }
    }
}

export {PageBuilder};
