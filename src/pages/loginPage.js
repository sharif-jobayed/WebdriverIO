import { BaseElement } from '../framework/baseElement.js';
import { BasePage } from '../framework/basePage.js';

class LoginPage extends BasePage {

	constructor() {
		super(``, `Login Page`);

		this.loginField = new BaseElement(
			`//input[@id='user-name']`,
			`Login Field`
		);
		this.passwordField = new BaseElement(
			`//input[@id='password']`,
			`Password Field`
		);
		this.loginButton = new BaseElement(
			`//input[@id='login-button']`,
			`Login Button`
		);

		this.errorMessage = new BaseElement(
			`//div[@class='error-message-container error']`,
			`Error Message`
		);
	}

	async enterUsername(username) {
		await this.loginField.clearAndType(username);
	}

	async enterPassword(password) {
		await this.passwordField.clearAndType(password);
	}

	async clickLogin() {
		await this.loginButton.doClick();
	}

	async getErrorMessage() {
		return await this.errorMessage.getText();
	}


}

export { LoginPage }
