import {BasePage} from '../framework/basePage.js';
import {readFileSync} from 'fs';
const userData = JSON.parse(readFileSync(new URL('../data/userData.json', import.meta.url)));
import {BaseElement} from '../framework/baseElement.js';

class DashboardPage extends BasePage {

	constructor() {
		super(`/dashboard/index`, `Dashboard Page`);

		this.body = new BaseElement(`//div[@id='app']`, `Body Element`);
		this.pimLink = new BaseElement(
			`//span[normalize-space()='PIM']`,
			`PIM Link Element`
		);
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
}

export {DashboardPage}
