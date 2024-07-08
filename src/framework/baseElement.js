const { $, $$ } = require('@wdio/globals');
const {MS} = require('../framework/utils/constants.js');

class BaseElement {
	constructor(elementLocator, elementName) {
		this.elLocator = $(elementLocator);
		this.elLocators = $$(elementLocator);
		this.elName = elementName;
	}

	async isThere() {
		return await this.elLocator.isExisting();
	}

	async isVisible() {
		return await this.elLocator.isDisplayed();
	}

	async isEnabled() {
		return await this.elLocator.isEnabled();
	}

	async isClickable() {
		return await this.elLocator.isClickable();
	}

	async isChecked() {
		return await this.elLocator.isSelected();
	}

	async doClick() {
		return await this.elLocator.click();
	}

	async clearAndType(text) {
		await this.elLocator.clearValue();
		await this.elLocator.setValue(text);
	}

	async getThemAll() {
		return await this.elLocators;
	}

	async waitUntil(condition) {
		await browser.waitUntil(condition, { timeout:MS.min, timeoutMsg: `${this.elName} did not meet the ${condition} condition` });
	}

	async getText() {
		return await this.elLocator.getText();
	}

	async getAttribute(attributeName) {
		return await this.elLocator.getAttribute(attributeName);
	}

	async scrollIntoView() {
		await this.elLocator.scrollIntoView();
	}

	async hover() {
		await this.elLocator.moveTo();
	}

	async doubleClick() {
		await this.elLocator.doubleClick();
	}

	async rightClick() {
		await this.elLocator.rightClick();
	}

	async waitForDisplayed() {
		await this.elLocator.waitForDisplayed({ timeout:MS.min });
	}

	async waitForExist() {
		await this.elLocator.waitForExist({ timeout:MS.min });
	}
}

module.exports = { BaseElement };
