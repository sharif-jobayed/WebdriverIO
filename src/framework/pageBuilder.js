import { LoginPage } from '../pages/loginPage.js';

class PageBuilder {

    async getPage(pageName) {
        const pn = await pageName.toLowerCase();

        if (pn.includes(`login`)) {
            return new LoginPage();
        } else {
            throw new Error(`Invalid page name: ${pageName}`);
        }

    }

}

export { PageBuilder }
