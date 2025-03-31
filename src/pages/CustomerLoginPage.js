import {BasePage} from "../framework/BasePage.js";
import {BaseElement} from "../framework/BaseElement.js";

class CustomerLoginPage extends BasePage {
    constructor(pageURL, pageName) {
        super(pageURL, pageName);
    }

    get userEmailField() {
        return new BaseElement(
            `//input[@id='email']`,
            `User Email field`
        );
    }

    get userPasswordField() {
        return new BaseElement(
            `//fieldset[@class='fieldset login']//input[@id='pass']`,
            `User Password field`
        );
    }

    get signInButton() {
        return new BaseElement(
            `//fieldset[@class='fieldset login']//span[contains(text(),'Sign In')]`,
            `Sign In button`
        );
    }
}

export {CustomerLoginPage}
