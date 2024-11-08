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
}

module.exports = {BasePage};
