import { readFileSync } from 'fs';
const appData = JSON.parse(readFileSync(new URL('../data/appData.json', import.meta.url)));

class BasePage {

	constructor(pagePath, pageName) {
		this.pagePath = pagePath;
		this.pageName = pageName;
	}

	getPagePath() {
		return this.pagePath;
	}

	getPageName() {
		return this.pageName;
	}

	getPageUrl() {
		const baseUrl = appData.BaseURL;
		const pagePath = this.getPagePath();
		return `${baseUrl}${pagePath}`;
	}

	async open() {
		await browser.url(this.getPageUrl());
	}

	async getCurrentUrl() {
		return browser.getUrl();
	}

	async getTitle() {
		return browser.getTitle();
	}

	async isPageOpen(timeout = 10000) {
		try {
			await browser.waitUntil(
				async () => (await this.getCurrentUrl()) === this.getPageUrl(),
				{
					timeout: timeout,
					timeoutMsg: `Page did not open. Expected URL to be "${this.getPageUrl()}" within ${timeout}ms.`,
				}
			);
			return true;
		} catch (error) {
			console.error(`Error waiting for page to open: ${error.message}`);
			return false;
		}
	}

	async isPageLoaded(timeout = 10000) {
		try {
			await browser.waitUntil(
				async () => (await browser.execute(() => document.readyState)) === 'complete',
				{
					timeout: timeout,
					timeoutMsg: `Page did not reach "complete" readyState within ${timeout}ms.`,
				}
			);
			return true;
		} catch (error) {
			console.error(`Error waiting for page to load: ${error.message}`);
			return false;
		}
	}

	async isAlertOpen(timeout = 10000) {
		try {
			await browser.waitUntil(async () => browser.isAlertOpen(), {
				timeout: timeout,
				timeoutMsg: `Alert was not open within ${timeout}ms.`
			});
			return true;
		} catch (error) {
			console.error(`Error waiting for alert to open: ${error.message}`);
			return false;
		}
	}

	async typeInAlert(text) {
		await browser.sendAlertText(text);
	}

	async getAlertText() {
		return browser.getAlertText();
	}

	async dismissAlert() {
		await browser.dismissAlert();
	}

	async acceptAlert() {
		await browser.acceptAlert();
	}

	async goBack() {
		await browser.back();
	}

	async goForward() {
		await browser.forward();
	}

	async refresh() {
		await browser.refresh();
	}

}

export { BasePage }
