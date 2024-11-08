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
        await (await this.getLocator()).isExisting();
    }

    async isVisible() {
        await (await this.getLocator()).isDisplayed();
    }

    async isClickable() {
        this.getLocator().isClickable();
    }

    async isEnabled() {
        this.getLocator().isEnabled();
    }

    async isSelected() {
        await this.getLocator().isSelected();
    }

    async wait(timeout = 5000) {
        return await browser.pause(timeout);
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
        this.getLocator().waitForEnabled({timeout});
    }

    async waitTillFrameIsOpen(timeout = 5000) {
        return await browser.waitUntil(
            async () => await this.doesExist(),
            {timeout, timeoutMsg: 'Frame did not open within the specified timeout'}
        );
    }

    async waitTillFrameIsClose(timeout = 5000) {
        return await browser.waitUntil(
            async () => !(await this.doesExist()),
            {timeout, timeoutMsg: 'Frame did not close within the specified timeout'}
        );
    }

    async doClick() {
        await this.waitTillVisible();
        await this.getLocator().click();
    }

    async clearAndType(text) {
        await this.waitTillVisible();
        await (await this.getLocator()).clearValue();
        await (await this.getLocator()).setValue(text);
    }

    async hoverOn() {
        return this.getLocator().moveTo();
    }

    async scrollIntoView() {
        await this.getLocator().scrollIntoView();
    }

    async getText() {
        await this.waitTillVisible();
        this.getLocator().getText();
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

export {BaseElement};
