const {$, $$} = require('@wdio/globals');


class BaseElement {

	constructor(elementLocator, elementName) {
		this.locator = $(elementLocator);
		this.locators = $$(elementLocator);
		this.name = elementName;
	}

	async doClick() {
		await (await this.locator).click();
	}
	async clearField() {
		await (await this.locator).clearValue();
	}
	async write(input) {
		await (await this.locator).addValue(input);
	}
	async clearAndWrite(input) {
		await this.clearField();
		await this.write(input);
	}
	async waitForElementToExist(miliseconds) {
		await (await this.locator).waitForExist({
			timeout: miliseconds,
		});
	}
	async waitForElementsToExist(miliseconds) {
		await this.locators.forEach(async i => {
			await i.waitForExist({
				timeout: miliseconds,
			});
		});
	}
	async isElementChecked() {
		return (await this.locator).isSelected();
	}
	async areElementsChecked() {
		await this.locators.forEach(async i => {
			return await i.isSelected();
		});
	}
	async isElementEnabled() {
		return (await this.locator).isClickable();
	}
	async areElementsEnabled() {
		await this.locators.forEach(async i => {
			return await i.isEnabled();
		});
	}
	async isElementDisplayed() {
		await (await this.locator).isDisplayed();
	}
	async areElementsDisplayed() {
		await this.locators.forEach(async i => {
			return await i.isDisplayed();
		});
	}

}

module.exports = BaseElement;
