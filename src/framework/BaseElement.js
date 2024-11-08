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

    async getElement() {
        return this;
    }

    async doesExist() {
        return await this.elementLocator.isExisting();
    }

    async isVisible() {
        return await this.elementLocator.isDisplayed();
    }

    async isClickable() {
        return await this.elementLocator.isClickable();
    }

    async isEnabled() {
        return await this.elementLocator.isEnabled();
    }

    async isSelected() {
        return await this.elementLocator.isSelected();
    }

    async wait(timeout = 5000) {
        return await browser.pause(timeout);
    }

    async waitTillVisible(timeout = 5000) {
        return await this.elementLocator.waitForDisplayed({ timeout });
    }

    async waitTillInvisible(timeout = 5000) {
        return await this.elementLocator.waitForDisplayed({ timeout, reverse: true });
    }

    async waitTillExists(timeout = 5000) {
        return await this.elementLocator.waitForExist({ timeout });
    }

    async waitTillEnabled(timeout = 5000) {
        return await this.elementLocator.waitForEnabled({ timeout });
    }

    async waitTillAlertIsOpen(timeout = 5000) {
        return await browser.waitUntil(
            async () => await browser.isAlertOpen(),
            { timeout, timeoutMsg: 'Alert did not open within the specified timeout' }
        );
    }

    async waitTillAlertIsClose(timeout = 5000) {
        return await browser.waitUntil(
            async () => !(await browser.isAlertOpen()),
            { timeout, timeoutMsg: 'Alert did not close within the specified timeout' }
        );
    }

    async waitTillFrameIsOpen(timeout = 5000) {
        return await browser.waitUntil(
            async () => await this.doesExist(),
            { timeout, timeoutMsg: 'Frame did not open within the specified timeout' }
        );
    }

    async waitTillFrameIsClose(timeout = 5000) {
        return await browser.waitUntil(
            async () => !(await this.doesExist()),
            { timeout, timeoutMsg: 'Frame did not close within the specified timeout' }
        );
    }

    async acceptAlert() {
        if (await browser.isAlertOpen()) {
            await browser.acceptAlert();
        }
    }

    async declineAlert() {
        if (await browser.isAlertOpen()) {
            await browser.dismissAlert();
        }
    }

    async fillAlertAndAccept(text) {
        if (await browser.isAlertOpen()) {
            await browser.sendAlertText(text);
            await browser.acceptAlert();
        }
    }

    async doClick() {
        await this.waitTillVisible();
        await this.elementLocator.click();
    }

    async clearAndType(text) {
        await this.waitTillVisible();
        await this.elementLocator.clearValue();
        await this.elementLocator.setValue(text);
    }

    async scrollIntoView() {
        await this.elementLocator.scrollIntoView();
    }

    async getText() {
        await this.waitTillVisible();
        return await this.elementLocator.getText();
    }

    async selectAll() {
        const elements = await this.getLocators();
        for (const element of elements) {
            await element.click();
        }
    }

    async listText() {
        const elements = await this.getLocators();
        const texts = [];
        for (const element of elements) {
            texts.push(await element.getText());
        }
        return texts;
    }
}

module.exports = { BaseElement };
