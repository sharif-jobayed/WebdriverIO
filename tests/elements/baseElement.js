const { $, $$ } = require('@wdio/globals');


class BaseElement {

	constructor(elementLocator, elementName) {
		this.locator = $(elementLocator);
		this.locators = $$(elementLocator);
		this.name = elementName;
	}

	async clickEl() {
		await (await this.locator).click();
		// console.log(`Clicked on ${this.name}`);
	}
	async clearAndTypeEl(input) {
		await (await this.locator).clearValue();
		await (await this.locator).addValue(input);
		// console.log(`Cleared ${this.name} & typed ${input} into it`);
	}
	async isCheckedEl() {
		return (await this.locator).isSelected();
	}
	async isVisibleEl() {
		return (await this.locator).isDisplayed();
	}
	async isExistInEl(value) {
		return (await this.locator.getText()).includes(value);
	}
	async text(ms) {
		await this.locator.waitUntil(() => {
			return this.locator.isDisplayed()
		}, {
			interval: ms,
			timeout: ms,
			timeoutMsg: `${this.name} isn't displayed yet`
		});
		return (await this.locator.getText()).trim();
	}

}

module.exports = BaseElement;
