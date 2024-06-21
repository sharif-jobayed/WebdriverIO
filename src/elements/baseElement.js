
import { $, $$ } from '@wdio/globals';
import { timeoutInMS } from '../utils/constants.js';

class BaseElement {
	constructor(elLocator, elName) {
		this.elLocator = $(elLocator);
		this.elLocators = $$(elLocator);
		this.elName = elName;
	}

	async doClick() {
		return (await this.elLocator).click();
	}
	async clearAndType(text) {
		(await this.elLocator).clearValue();
		return (await this.elLocator).setValue(text);
	}
	async hoverOver() {
		return (await this.elLocator).moveTo();
	}
	async scrollTo() {
		return (await this.elLocator).scrollIntoView();
	}
	async getAll() {
		let elements = [];
		await this.elLocators.forEach((i) => {
			elements.push(i);
		});
		return elements;
	}
	async itsText() {
		return (await this.elLocator).getText();
	}
	async itsName() {
		return this.elName;
	}
	async waitForIt() {
		return (await this.elLocator).waitForExist({
			timeout: timeoutInMS.minimum,
			timeoutMsg: `${this.elName} isn't ready in ${timeoutInMS.minimum} milliseconds`,
		});
	}
	async isVisible() {
		return (await this.elLocator).isDisplayed();
	}
}

export { BaseElement }
