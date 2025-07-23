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

	async getLength() {
		return this.elLocators.length;
	}

	// async clearAndType(value, timeout = 5000) {
	// 	if (await this.isEnabled(timeout)) {
	// 		try {
	// 			await this.elLocator.clearValue();
	// 			await this.elLocator.setValue(value);
	// 		} catch (err) {
	// 			console.error(`Error clearing and typing value: ${err.message}`);
	// 		}
	// 	}
	// }

	async clearAndType(text, timeout = 5000) {


		if (await this.isEnabled(timeout)) {
			try {
				// await this.elLocator.clearValue();

				const selectorValue = await this.getValue();
				const selector = this.elLocator;
				if ((await this.elLocator.getValue()).length > 0) {
					let empty = new Array(selectorValue.length).fill(``);
					await selector.setValue(empty);
				} else {
					await selector.setValue(text);
				}
			} catch (err) {
				console.error(`Error clearing and typing value: ${err.message}`);
			}
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
