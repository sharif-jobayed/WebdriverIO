
const {BaseElement} = require('../elements/baseElement.js');

class BasePage {
	constructor(pageURL, pageName) {
		this.url = pageURL;
		this.name = pageName;
	}

	async goToPage(url = this.url) {
		await browser.url(url);
	}

	async isPageOpen() {
		return await browser.getUrl() === this.url;
	}

	async isPageLoaded() {
		return await browser.execute(() => document.readyState === 'complete');
	}

	async openInNewWindow(url = this.url) {
		await browser.newWindow(url);
	}

	async closeThisPageWindow() {
		await browser.closeWindow();
	}

	async getTitle() {
		return await browser.getTitle();
	}

	async takeScreenshot(filePath) {
		await browser.saveScreenshot(filePath);
	}

	async waitForPageLoad(timeout = 5000) {
		await browser.waitUntil(async () => {
			const state = await browser.execute(() => document.readyState);
			return state === 'complete';
		}, {timeout});
	}
}

module.exports = {BasePage};
