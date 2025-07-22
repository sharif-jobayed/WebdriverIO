import {BasePage} from '../framework/basePage.js';
import {readFileSync} from 'fs';
const userData = JSON.parse(readFileSync(new URL('../data/userData.json', import.meta.url)));
import {BaseElement} from '../framework/baseElement.js';

class LoginPage extends BasePage {
	constructor() {
		super(``);

		this.usernameField = new BaseElement(
			`//input[@placeholder='Username']`,
			`Username field`
		);
		this.passwordField = new BaseElement(
			`//input[@placeholder='Password']`,
			`Password field`
		);
		this.loginButton = new BaseElement(
			`//button[@type='submit']`,
			`Login button`
		);
	}

	async validAdminLogin () {
		await this.usernameField.clearAndType(userData.Admin.username);
		await this.passwordField.clearAndType(userData.Admin.password);
		await this.loginButton.doClick();
	}
}

export {LoginPage}
