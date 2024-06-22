
import { timeoutInMS } from "../utils/constants.js";
import { BaseElement } from "../elements/baseElement.js";

class BasePage {
	constructor(pageURL, pageName) {
		this.pageURL = pageURL;
		this.pageName = pageName;
		this.linkByText = (text) => {
			return new BaseElement(`//a[text()='${text}']`, `${text} link`);
		}
		this.btnByText = (text) => {
			return new BaseElement(`//button[text()='${text}']`,`${text} button`);
		}
	}

	async openPage() {
		return browser.url(this.pageURL);
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
	async getButtonText(text) {
		return this.btnByText(text);
	}
}

export { BasePage };
