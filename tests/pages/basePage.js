class BasePage {

	constructor(pageURL, pageName) {
		this.url = `${browser.options.baseUrl}${pageURL}`;
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
	async waitForAlert(ms) {
		await browser.waitUntil(() => {
			return browser.isAlertOpen();
		}, {
			interval: ms,
			timeout: ms,
			timeoutMsg: `The alert is not open yet`
		});
	}	
	async handleBasicAuth(userName, passWord) {
		await browser.url(`${userName}:${passWord}@${this.url}`);
	}

}

module.exports = BasePage;
