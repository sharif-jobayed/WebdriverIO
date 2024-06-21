
import { timeoutInMS } from "../utils/constants.js";

class BasePage {
	constructor(pageURL, pageName) {
		this.pageURL = pageURL;
		this.pageName = pageName;
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
				timeoutMsg: `${this.pageName} did not load within ${timeoutInMS.maximum} milliseconds`
			}
		);
	}
}

export { BasePage };
