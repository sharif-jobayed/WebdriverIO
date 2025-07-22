
class BaseElement {

	constructor(locator) {
		this.locator = locator;
	}

	getLocator() {
		return $(this.locator);
	}

	getLocators() {
		return $$(this.locator);
	}

	async isVisible(timeout = 5000) {
		await this.getLocator().waitForDisplayed({ timeout });
		return await this.getLocator().isDisplayed();
	}

	async isExist(timeout = 5000) {
		await this.getLocator().waitForExist({ timeout });
		return await this.getLocator().isExisting();
	}

	async isEnabled(timeout = 5000) {
		try {
			await this.getLocator().waitForEnabled({ timeout });
			return await this.getLocator().isEnabled();
		} catch (err) {
			console.warn(`${this.elementName} not enabled within ${timeout}ms`);
			return false;
		}
	}

	async isClickable(timeout = 5000) {
		await this.getLocator().waitForClickable({ timeout });
		return await this.getLocator().isClickable();
	}

	async isChecked(timeout = 5000) {
		await this.getLocator().waitForChecked({ timeout });
		return await this.getLocator().isChecked();
	}

	async doClick(timeout = 5000) {
		if (await this.isClickable(timeout)) {
			await this.getLocator().click();
		}
	}

	async getText(timeout = 5000) {
		if (await this.isVisible(timeout)) {
			return await this.getLocator().getText();
		}
		return ``;
	}

	async getValue(timeout = 5000) {
		if (await this.isExist(timeout)) {
			return await this.getLocator().getValue();
		}
		return ``;
	}

	async clearAndType(value, timeout = 5000) {
		if (await this.isEnabled(timeout)) {
			try {
				await this.getLocator().clearValue();
				await this.getLocator().setValue(value);
			} catch (err) {
				console.error(`Error clearing and typing value: ${err.message}`);
			}
		}

	}

	async scrollTo(timeout = 5000) {
		if (await this.isExist(timeout)) {
			await this.getLocator().scrollIntoView();
		} else {
			console.warn(`${this.elementName} not found to scroll into view`);
		}
	}

}

export { BaseElement }
