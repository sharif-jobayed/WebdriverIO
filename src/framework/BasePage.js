const DEFAULT_TIMEOUT = 5000;

class BasePage {
    constructor(pageURL, pageName) {
        this.pageURL = pageURL;
        this.pageName = pageName;
    }

    async goToPage() {
        await browser.url(this.pageURL);
        return this.isPageOpen();
    }

    async getPageURL() {
        return this.pageURL;
    }

    async getPageName() {
        return this.pageName;
    }

    async getCurrentURL() {
        return await browser.getUrl();
    }

    async getPageTitle() {
        return await browser.getTitle();
    }

    async isPageOpen() {
        const currentURL = await this.getCurrentURL();
        return currentURL === this.pageURL || currentURL.startsWith(this.pageURL);
    }

    async isPageLoaded(timeout = DEFAULT_TIMEOUT) {
        return await browser.waitUntil(
            async () => (await browser.execute(() => document.readyState)) === 'complete',
            { timeout, timeoutMsg: 'Page did not load within the specified timeout' }
        );
    }

    async openInNewTab() {
        await browser.newWindow(this.pageURL);
    }

    async closeThisTab() {
        await browser.closeWindow();
    }

    async goBack() {
        await browser.back();
    }

    async goForward() {
        await browser.forward();
    }

    async doRefresh() {
        await browser.refresh();
    }

    async wait(timeout = DEFAULT_TIMEOUT) {
        return await browser.pause(timeout);
    }

    async waitTillAlertIsOpen(timeout = DEFAULT_TIMEOUT) {
        return await browser.waitUntil(
            async () => await browser.isAlertOpen(),
            { timeout, timeoutMsg: 'Alert did not open within the specified timeout' }
        );
    }

    async waitTillAlertIsClose(timeout = DEFAULT_TIMEOUT) {
        return await browser.waitUntil(
            async () => !(await browser.isAlertOpen()),
            { timeout, timeoutMsg: 'Alert did not close within the specified timeout' }
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

    async backToDefaultWindow() {
        const handles = await browser.getWindowHandles();
        if (handles.length > 0) {
            await browser.switchToWindow(handles[0]);
        }
    }

    async takeSS(fileName = `screenshot-${Date.now()}.png`) {
        return browser.saveScreenshot(`./src/resources/screenShots/${fileName}`);
    }

    async switchToNextTab() {
        const handles = await browser.getWindowHandles();
        const currentHandle = await browser.getWindowHandle();
        const nextIndex = (handles.indexOf(currentHandle) + 1) % handles.length;
        await browser.switchToWindow(handles[nextIndex]);
    }

    async switchToPreviousTab() {
        const handles = await browser.getWindowHandles();
        const currentHandle = await browser.getWindowHandle();
        const prevIndex = (handles.indexOf(currentHandle) - 1 + handles.length) % handles.length;
        await browser.switchToWindow(handles[prevIndex]);
    }
}

export { BasePage };
