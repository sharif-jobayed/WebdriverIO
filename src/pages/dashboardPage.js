import {BasePage} from '../framework/basePage.js';
import {readFileSync} from 'fs';
const userData = JSON.parse(readFileSync(new URL('../data/userData.json', import.meta.url)));
import {BaseElement} from '../framework/baseElement.js';

class DashboardPage extends BasePage {

	constructor() {
		super(`/dashboard/index`);

		this.body = new BaseElement(`//div[@id='app']`);
		this.pimLink = new BaseElement(`//span[normalize-space()='PIM']`);
		this.directoryLink = new BaseElement(`//span[normalize-space()='Directory']`);

	}

	async isPageVisible() {
		try {
			await this.body.isVisible();
			return true;
		} catch (error) {
			console.error(`Dashboard page is not visible: ${error.message}`);
			return false;
		}
	}

	async clickPIMLink() {
		try {
			await this.pimLink.doClick();
		} catch (error) {
			console.error(`Failed to click on PIM link: ${error.message}`);
		}
	}

	async clickDirectoryLink() {
		try {
			await this.directoryLink.doClick();
		} catch (error) {
			console.error(`Failed to click on Directory link: ${error.message}`);
		}
	}
}

export {DashboardPage}
