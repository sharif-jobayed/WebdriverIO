
const {$, $$} = require('@wdio/globals');

class BaseElement {
	constructor(elementLocator, elementName) {
		this.locator = $(elementLocator);
		this.locators = $$(elementLocator);
		this.name = elementName;
	}

	async doesExist() {
		return await this.locator.isExisting();
	}

	async isVisible() {
		return await this.locator.isDisplayed();
	}

	async isEnabled() {
		return await this.locator.isEnabled();
	}

	async isClickable() {
		return await this.locator.isClickable();
	}

	async isNotVisible() {
		return !(await this.locator.isDisplayed());
	}

	async waitUntil(condition, timeout = 5000) {
		await this.locator.waitUntil(condition, {timeout});
	}

	async doClick() {
		await this.locator.click();
	}

	async clearAndType(text) {
		await this.locator.clearValue();
		await this.locator.setValue(text);
	}

	async getText() {
		return await this.locator.getText();
	}

	async getAttribute(attribute) {
		return await this.locator.getAttribute(attribute);
	}

	async getThemAll() {
		return await this.locators;
	}

	async getCount() {
		return (await this.locators).length;
	}

	async scrollIntoView() {
		await this.locator.scrollIntoView();
	}
}

module.exports = {BaseElement};
