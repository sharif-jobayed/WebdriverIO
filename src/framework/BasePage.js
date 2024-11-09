class BasePage {
    constructor(pageURL, pageName) {
        this.pageURL = pageURL;
        this.pageName = pageName;
    }

    async goToPage() {
        return browser.url(this.pageURL);
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
        return currentURL.includes(this.pageURL);
    }

    async isPageLoaded(timeout = 5000) {
        return await browser.waitUntil(
            async () => (await browser.execute(() => document.readyState)) === 'complete',
            {timeout, timeoutMsg: 'Page did not load within the specified timeout'}
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

    async waitTillAlertIsOpen(timeout = 5000) {
        return await browser.waitUntil(
            async () => await browser.isAlertOpen(),
            {timeout, timeoutMsg: 'Alert did not open within the specified timeout'}
        );
    }

    async waitTillAlertIsClose(timeout = 5000) {
        return await browser.waitUntil(
            async () => !(await browser.isAlertOpen()),
            {timeout, timeoutMsg: 'Alert did not close within the specified timeout'}
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

    async takeSS() {
        return browser.saveScreenshot(`./src/resources/screenShots/ss.png`);
    }
}

export {BasePage}
