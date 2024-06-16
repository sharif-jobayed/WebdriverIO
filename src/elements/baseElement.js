const {$, $$} = require('@wdio/globals');

class BaseElement {
	constructor(elementLocator, elementName) {
		this.locator = $(elementLocator);
		this.locators = $$(elementLocator);
		this.name = elementName;
	}

	async doClick() {
		console.log(`Operating on ${this.name}`);
		return (await this.locator).click();
	}
	async elementText() {
		console.log(`Operating on ${this.name}`);
		return this.locator.getText();
	}
	async clearAndType(value) {
		console.log(`Operating on ${this.name}`);
		(await this.locator).clearValue();
		return (await this.locator).addValue(value);
	}
}

module.exports = BaseElement;
