class BasePage {

	constructor(pageURL, pageName) {
		this.url = pageURL;
		this.name = pageName;
		this.title = browser.getTitle();
	}

	async goToURL() {
		await browser.url(this.url);
	}
	async isPageOpen() {
		return this.title !== ``;
	}
	async isPageLoaded(ms) {
		await browser.waitUntil(async () => {
			const readyState = await browser.execute(() => document.readyState);
			return readyState === 'complete';
		}, {
			timeout: ms,
			timeoutMsg: `Page did not load within ${ms} milliseconds`,
		});
	}

}

module.exports = BasePage;
