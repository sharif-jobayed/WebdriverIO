import { $, $$ } from '@wdio/globals';

class BaseElement {

	constructor(locator) {
		this.locator = locator;
	}

	get elLocator() {
		return $(this.locator);
	}

	get elLocators() {
		return $$(this.locator);
	}

	async isVisible(timeout = 5000) {
		await this.elLocator.waitForDisplayed({ timeout });
		return await this.elLocator.isDisplayed();
	}

	async isExist(timeout = 5000) {
		await this.elLocator.waitForExist({ timeout });
		return await this.elLocator.isExisting();
	}

	async isEnabled(timeout = 5000) {
		try {
			await this.elLocator.waitForEnabled({ timeout });
			return await this.elLocator.isEnabled();
		} catch (err) {
			console.warn(`${this.elementName} not enabled within ${timeout}ms`);
			return false;
		}
	}

	async isClickable(timeout = 5000) {
		await this.elLocator.waitForClickable({ timeout });
		return await this.elLocator.isClickable();
	}

	async isChecked(timeout = 5000) {
		await this.elLocator.waitForChecked({ timeout });
		return await this.elLocator.isChecked();
	}

	async doClick(timeout = 5000) {
		if (await this.isClickable(timeout)) {
			await this.elLocator.click();
		}
	}

	async getText(timeout = 5000) {
		if (await this.isVisible(timeout)) {
			return await this.elLocator.getText();
		}
		return ``;
	}

	async getValue(timeout = 5000) {
		if (await this.isExist(timeout)) {
			return await this.elLocator.getValue();
		}
		return ``;
	}

	async clearAndType(text, timeout = 5000) {
		if (await this.isEnabled(timeout)) {
			await this.elLocator.click();
			await browser.keys(['Control', 'a']);
			await browser.keys('Backspace');
			await this.elLocator.setValue(text);
		}
	}

	async scrollTo(timeout = 5000) {
		if (await this.isExist(timeout)) {
			await this.elLocator.scrollIntoView();
		} else {
			console.warn(`${this.elementName} not found to scroll into view`);
		}
	}

}

export { BaseElement }
