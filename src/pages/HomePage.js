import {BasePage} from '../framework/BasePage.js'
import {BaseElement} from "../framework/BaseElement.js";

class HomePage extends BasePage {
    constructor(pageURL, pageName) {
        super(pageURL, pageName);
        this.siteLogo = new BaseElement(
            `//a[@aria-label='store logo']//img`,
            `Site logo`
        );
        this.trainingMenuItem = new BaseElement(
            `//span[normalize-space()='Training']`,
            `Training Menu link`,
        );
        this.trainingDropdownMenu = new BaseElement(
            `//ul[@aria-expanded='true']`,
            `Training Dropdown menu`
        );
    }

    async clickSiteLogo() {
        return this.siteLogo.doClick();
    }

    async hoverTrainingMenu() {
        return this.trainingMenuItem.hoverOn();
    }
}

export {HomePage}
