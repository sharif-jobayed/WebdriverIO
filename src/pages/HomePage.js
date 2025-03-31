import {BasePage} from "../framework/BasePage.js";
import {BaseElement} from "../framework/BaseElement.js";

class HomePage extends BasePage {
    constructor(pageURL, pageName) {
        super(pageURL, pageName);
    }

    get siteLogo() {
        return new BaseElement(
            `//a[@aria-label='store logo']//img`,
            `Site logo`
        );
    }

    get trainingMenuItem() {
        return new BaseElement(
            `//span[normalize-space()='Training']`,
            `Training Menu link`
        );
    }

    get trainingDropdownMenu() {
        return new BaseElement(
            `//ul[@aria-expanded='true']`,
            `Training Dropdown menu`
        );
    }

    get signInLink() {
        return new BaseElement(
            `//div[@class='panel header']//a[contains(text(),'Sign In')]`,
            `Sign In link`
        );
    }

    async clickSiteLogo() {
        return this.siteLogo.doClick();
    }

    async hoverTrainingMenu() {
        return this.trainingMenuItem.hoverOn();
    }

    async clickSignInLink() {
        return this.signInLink.doClick();
    }
}

export {HomePage};
