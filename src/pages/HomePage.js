import {BasePage} from '../framework/BasePage.js'
import {BaseElement} from "../framework/BaseElement.js";

class HomePage extends BasePage {
    constructor(pageURL, pageName) {
        super(pageURL, pageName);
        this.siteLogo = new BaseElement(
            `//a[@aria-label='store logo']//img`,
            `Site logo`
        );
    }

    async clickSiteLogo() {
        return this.siteLogo.doClick();
    }
}

export {HomePage}
