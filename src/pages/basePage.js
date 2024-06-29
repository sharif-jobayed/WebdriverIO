
import { timeoutInMS } from "../utils/constants.js";
import { BaseElement } from "../elements/baseElement.js";

class BasePage {
	constructor(pageURL, pageName) {
		this.pageURL = pageURL;
		this.pageName = pageName;
	}
	linkByText(text) {
		return new BaseElement(
			`//a[text()='${text}']`,
			`${text} link`
		);
	}
	btnByText(text) {
		return new BaseElement(
			`//button[text()='${text}']`,
			`${text} button`
		);
	}

	async openPage(pageURL) {
		if (pageURL) {
			return browser.url(pageURL);
		} else {
			return browser.url(this.pageURL);
		}
	}
	async openInNewWindow(pageURL) {
		if(pageURL) {
			return browser.newWindow(pageURL);
		} else {
			return browser.newWindow();
		}
	}
	async isPageOpen() {
		const currentUrl = await browser.getUrl();
		return currentUrl.includes(this.pageURL);
	}
	async isPageLoaded() {
		await browser.waitUntil(
			async () => {
				const readyState = await browser.execute(() => document.readyState);
				return readyState === 'complete';
			},
			{
				timeout: timeoutInMS.maximum,
				timeoutMsg: `${this.pageName} did not load within ${timeoutInMS.maximum} milliseconds`,
			}
		);
		return true;
	}
	async getLinkByText(text) {
		return this.linkByText(text);
	}
	async getButtonByText(text) {
		return this.btnByText(text);
	}
}

export { BasePage };
