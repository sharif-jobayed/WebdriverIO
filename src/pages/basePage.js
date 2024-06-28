
import { timeoutInMS } from "../utils/constants.js";
import { BaseElement } from "../elements/baseElement.js";

class BasePage {
	constructor(pageURL, pageName) {
		this.pageURL = pageURL;
		this.pageName = pageName;
		this.linkByText = (text) => {
			return new BaseElement(
				`//a[text()='${text}']`,
				`${text} link`
			);
		};
		this.btnByText = (text) => {
			return new BaseElement(
				`//button[text()='${text}']`,
				`${text} button`
			);
		};
	}

	async openPage() {
		await browser.url(this.pageURL);
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
		const linkElement = this.linkByText(text);
		// console.log(linkElement);
		await linkElement.waitForIt();
		return linkElement;
	}

	async getButtonByText(text) {
		const buttonElement = this.btnByText(text);
		// console.log(buttonElement);
		await buttonElement.waitForIt();
		return buttonElement;
	}
}

export { BasePage };
