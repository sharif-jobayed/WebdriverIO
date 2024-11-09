class BaseElement {
    constructor(elementLocator, elementName) {
        this.elementLocator = $(elementLocator);
        this.elementLocators = $$(elementLocator);
        this.elementName = elementName;
    }

    async getLocator() {
        return this.elementLocator;
    }

    async getLocators() {
        return this.elementLocators;
    }

    async getName() {
        return this.elementName;
    }

    async doesExist() {
        return (await this.getLocator()).isExisting();
    }

    async isVisible() {
        return (await this.getLocator()).isDisplayed();
    }

    async isClickable() {
        return (await this.getLocator()).isClickable();
    }

    async isEnabled() {
        return (await this.getLocator()).isEnabled();
    }

    async isSelected() {
        return (await this.getLocator()).isSelected();
    }

    async waitTillVisible(timeout = 5000) {
        await (await this.getLocator()).waitForDisplayed({timeout});
    }

    async waitTillInvisible(timeout = 5000) {
        await (await this.getLocator()).waitForDisplayed({timeout, reverse: true});
    }

    async waitTillExists(timeout = 5000) {
        await (await this.getLocator()).waitForExist({timeout});
    }

    async waitTillEnabled(timeout = 5000) {
        await (await this.getLocator()).waitForEnabled({timeout});
    }

    async waitTillFrameIsOpen(timeout = 5000) {
        return await this.waitTill(() => this.doesExist(), timeout, 'Frame did not open within the specified timeout');
    }

    async waitTillFrameIsClose(timeout = 5000) {
        return await this.waitTill(() => !this.doesExist(), timeout, 'Frame did not close within the specified timeout');
    }

    async doClick() {
        await this.waitTillVisible();
        return (await this.getLocator()).click();
    }

    async clearAndType(text) {
        await this.waitTillVisible();
        const locator = await this.getLocator();
        await locator.clearValue();
        await locator.setValue(text);
    }

    async hoverOn() {
        return (await this.getLocator()).moveTo();
    }

    async scrollIntoView() {
        await (await this.getLocator()).scrollIntoView();
    }

    async getText() {
        await this.waitTillVisible();
        return (await this.getLocator()).getText();
    }

    async selectAll() {
        const elements = await this.getLocators();
        await Promise.all(await elements.map(element => element.click()));
    }

    async listText() {
        const elements = await this.getLocators();
        return Promise.all(await elements.map(element => element.getText()));
    }

    async waitTill(conditionFn, timeout = 5000, timeoutMsg = 'Condition not met') {
        return await browser.waitUntil(conditionFn, { timeout, timeoutMsg });
    }
}

export { BaseElement }
