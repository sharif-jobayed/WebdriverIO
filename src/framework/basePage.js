const { BaseElement } = require('../framework/baseElement.js');
const { MS } = require('../framework/utils/constants.js');

class BasePage {
	constructor(pageURL, pageName) {
		this.pURL = pageURL;
		this.pName = pageName;
	}

	async openPage() {
		await browser.url(this.pURL);
	}

	async isPageOpen() {
		return await browser.getUrl() === this.pURL;
	}

	async isPageLoaded() {
		await browser.waitUntil(
			async () => {
				const readyState = await browser.execute(() => document.readyState);
				return readyState === `complete`;
			},
			{
				timeout: MS.max,
				timeoutMsg: `The ${this.pName} page is not fully loaded yet`
			}
		);
		return await browser.execute(() => document.readyState === `complete`);
	}

	async openInNewWindow(url) {
		await browser.newWindow(url);
	}

	async closeCurrentWindow() {
		await browser.closeWindow();
	}

	async getTitle() {
		return await browser.getTitle();
	}

	async switchToWindow(index) {
		const handles = await browser.getWindowHandles();
		await browser.switchToWindow(handles[index]);
	}

	async switchToFrame(frameElement) {
		await browser.switchToFrame(frameElement);
	}

	async switchToParentFrame() {
		await browser.switchToParentFrame();
	}

	async refreshPage() {
		await browser.refresh();
	}

	async goBack() {
		await browser.back();
	}

	async goForward() {
		await browser.forward();
	}

	async maximizeWindow() {
		await browser.maximizeWindow();
	}

	async getPageSource() {
		return await browser.getPageSource();
	}

	async acceptAlert() {
		await browser.acceptAlert();
	}

	async dismissAlert() {
		await browser.dismissAlert();
	}

	async getAlertText() {
		return await browser.getAlertText();
	}

	async setAlertText(text) {
		await browser.sendAlertText(text);
	}

	async takeScreenshot(fileName) {
		await browser.saveScreenshot(fileName);
	}

	async getLinkByText(text) {
		return new BaseElement(
			`//a[contains(text(),'${text}')]`,
			`${text} link`
		);
	}
}

module.exports = { BasePage };
