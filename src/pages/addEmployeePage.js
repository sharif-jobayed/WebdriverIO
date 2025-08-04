import { BasePage } from '../framework/basePage.js';
import { BaseElement } from '../framework/baseElement.js';
import { generateRandomUserData, writeJSON, readJSON } from '../framework/utils/randomData.js';

let cachedEmployeeData = null;
let savedCredentials = null;

class AddEmployeePage extends BasePage {
	constructor() {
		super(`/pim/addEmployee`);

		this.firstNameField = new BaseElement(`//input[@placeholder='First Name']`);
		this.middleNameField = new BaseElement(`//input[@placeholder='Middle Name']`);
		this.lastNameField = new BaseElement(`//input[@placeholder='Last Name']`);
		this.employeeIdField = new BaseElement(`//label[text()='Employee Id']/ancestor::div[contains(@class, 'oxd-input-group')]/div[@class='']/input`);
		this.epmIDErr = new BaseElement(`//span[@class='oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message']`);
		this.saveButton = new BaseElement(`//button[@type='submit']`);
		this.toggleLoginDetailsCheckbox = new BaseElement(`//span[@class='oxd-switch-input oxd-switch-input--active --label-right']`);
		this.usernameField = new BaseElement(`//label[text()='Username']/ancestor::div[contains(@class, 'oxd-input-group')]/div[@class='']/input`);
		this.passwordField = new BaseElement(`//input[@type='password']`);
		this.pssErr = new BaseElement(`//span[@class='oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message']`);
		this.confirmPasswordField = new BaseElement(`//label[text()='Confirm Password']/ancestor::div[contains(@class, 'oxd-input-group')]/div[@class='']/input[@type='password']`);
		this.randomUserData = generateRandomUserData();
	}

	randomEmployeeData() {
		if (cachedEmployeeData === null) {
			cachedEmployeeData = {
				firstName: this.randomUserData.firstName,
				lastName: this.randomUserData.lastName,
				username: this.randomUserData.username,
				password: this.randomUserData.password,
				employeeId: this.randomUserData.employeeId
			};
		}
		return cachedEmployeeData;
	}

	async enterEmployeeInfo() {
		await this.firstNameField.clearAndType(this.randomUserData.firstName);
		await this.lastNameField.clearAndType(this.randomUserData.lastName);
		await this.employeeIdField.clearAndType(this.randomUserData.employeeId);
		if (this.epmIDErr.isVisible()) {
			this.randomEmployeeData();
			return this.employeeIdField.clearAndType(this.randomUserData.employeeId);
		}
	}

	async enableCreateLoginDetailsToggle() {
		await this.toggleLoginDetailsCheckbox.doClick();
		return this.usernameField.scrollTo();
	}

	async enterLoginDetails() {
		await this.usernameField.clearAndType(this.randomUserData.username);
		await this.passwordField.clearAndType(this.randomUserData.password);
		if (this.pssErr.isVisible()) {
			this.randomEmployeeData();
			await this.passwordField.clearAndType(this.randomUserData.password);
		}
		return this.confirmPasswordField.clearAndType(this.randomUserData.password);
	}

	async saveEmployeeCredentials() {
		savedCredentials = {
			employeeId: this.randomUserData.employeeId,
			username: this.randomUserData.username,
			password: this.randomUserData.password,
			firstName: this.randomUserData.firstName,
			lastName: this.randomUserData.lastName
		};
		writeJSON(savedCredentials);
	}

	async clickSubmit() {
		this.saveEmployeeCredentials();
		const result = await this.saveButton.doClick();
		cachedEmployeeData = null;
		return result;
	}

	async getSavedCredentials() {
		return savedCredentials;
	}
}

export { AddEmployeePage, savedCredentials }
