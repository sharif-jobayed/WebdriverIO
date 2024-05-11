class BasePage {

	constructor(pageURL, pageName) {
		this.url = pageURL;
		this.title = browser.getTitle;
		this.name = pageName;
	}

	async goToURL() {
		await browser.url(this.url);
	}
	async isPageOpen() {
		return this.title !== ``;
	}
	async pageIsLoaded(miliseconds) {
		await browser.waitUntil(() => {
			return browser.execute(() => {
				return document.readyState === `complete`;
			});
			}, {
				timeout: miliseconds,
				timeoutMsg: `The page is not fully loaded yet`,
			}
		);
	}

}

export default new BasePage();