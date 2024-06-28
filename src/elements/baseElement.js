
import { $, $$ } from '@wdio/globals';
import { timeoutInMS } from '../utils/constants.js';

class BaseElement {
	constructor(elLocator, elName) {
		this.elLocator = $(elLocator);
		this.elLocators = $$(elLocator);
		this.elName = elName;
	}

	async doClick() {
		await (await this.elLocator).click();
	}

	async clearAndType(text) {
		const element = await this.elLocator;
		await element.clearValue();
		await element.setValue(text);
	}

	async hoverOver() {
		await (await this.elLocator).moveTo();
	}

	async scrollTo() {
		await (await this.elLocator).scrollIntoView();
	}

	async getAll() {
		const elements = await this.elLocators;
		return elements;
	}

	async itsText() {
		const element = await this.elLocator;
		return element.getText();
	}

	async itsName() {
		return this.elName;
	}

	async waitForIt() {
		await (await this.elLocator).waitForExist({
			timeout: timeoutInMS.minimum,
			timeoutMsg: `${this.elName} isn't ready in ${timeoutInMS.minimum} milliseconds`,
		});
	}

	async isVisible() {
		const element = await this.elLocator;
		return element.isDisplayed();
	}
}

export { BaseElement };
