
class BaseElement {

	constructor(locator, elementName) {
		this.locator = $(locator);
		this.locators = $$(locator);
		this.elementName = elementName;
	}

	getLocator() {
		return this.locator;
	}

	getLocators() {
		return this.locators;
	}

	getElementName() {
		return this.elementName;
	}

	async isVisible(timeout = 5000) {
		await this.getLocator().waitForDisplayed({ timeout });
		return await this.getLocator().isDisplayed();
	}

	async isExisting(timeout = 5000) {
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
		if (await this.isDisplayed(timeout)) {
			return await this.getLocator().getText();
		}
		return ``;
	}

	async clearAndType(value, timeout = 5000) {
		if (await this.isEnabled(timeout)) {
			try {
				if (await this.isEnabled(timeout)) {
					await this.getLocator().clearValue();
					await this.getLocator().setValue(value);
				} else {
					console.warn(`${this.elementName} is not enabled`);
				}
			} catch (err) {
				console.error(`Error clearing and typing value: ${err.message}`);
			}
		}

	}

}

export { BaseElement }
