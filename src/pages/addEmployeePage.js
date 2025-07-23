import { BasePage } from '../framework/basePage.js';
import { BaseElement } from '../framework/baseElement.js';
import { generateRandomUserData, writeJSON, readJSON } from '../framework/utils/randomData.js';

let cachedEmployeeData = null;
let	savedCredentials = null;

class AddEmployeePage extends BasePage {
	constructor() {
		super(`/pim/addEmployee`);

		this.firstNameField = new BaseElement(`//input[@placeholder='First Name']`);
		this.middleNameField = new BaseElement(`//input[@placeholder='Middle Name']`);
		this.lastNameField = new BaseElement(`//input[@placeholder='Last Name']`);
		this.employeeIdField = new BaseElement(`//label[text()='Employee Id']/ancestor::div[contains(@class, 'oxd-input-group')]/div[@class='']/input`);
		this.saveButton = new BaseElement(`//button[@type='submit']`);
		this.toggleLoginDetailsCheckbox = new BaseElement(`//span[@class='oxd-switch-input oxd-switch-input--active --label-right']`);
		this.usernameField = new BaseElement(`//label[text()='Username']/ancestor::div[contains(@class, 'oxd-input-group')]/div[@class='']/input`);
		this.passwordField = new BaseElement(`//input[@type='password']`);
		this.confirmPasswordField = new BaseElement(`//label[text()='Confirm Password']/ancestor::div[contains(@class, 'oxd-input-group')]/div[@class='']/input[@type='password']`);
	}

	_currentEmployeeData = null;

	randomEmployeeData() {
		if (!cachedEmployeeData) {
			const randomUserData = generateRandomUserData();
			cachedEmployeeData = {
				firstName: randomUserData.firstName,
				lastName: randomUserData.lastName,
				username: randomUserData.username,
				password: randomUserData.password,
				employeeId: randomUserData.employeeId,
			};
		}

		console.log(`Cached employee data: ${JSON.stringify(cachedEmployeeData, null, 2)}`);
		return cachedEmployeeData;
	}

	async enterEmployeeInfo() {
		const data = await this.randomEmployeeData();
		await this.firstNameField.clearAndType(data.firstName);
		await this.lastNameField.clearAndType(data.lastName);
		await this.employeeIdField.clearAndType(data.employeeId);

		console.log(`Employee info entered: ${JSON.stringify(data, null, 2)}`);
	}

	async enableCreateLoginDetailsToggle() {
		await this.toggleLoginDetailsCheckbox.doClick();
		await this.usernameField.scrollTo();
	}

	async enterLoginDetails() {
		const userData = await this.randomEmployeeData();
		await this.usernameField.clearAndType(userData.username);
		await this.passwordField.clearAndType(userData.password);
		await this.confirmPasswordField.clearAndType(userData.password);

		console.log(`Employee login credentials entered: ${JSON.stringify(userData, null, 2)}`);
	}

	async saveEmployeeCredentials() {
		const userData = await this.randomEmployeeData();
		savedCredentials = {
			employeeId: userData.employeeId,
			username: userData.username,
			password: userData.password,
			firstName: userData.firstName,
			lastName: userData.lastName
		};
		console.log(`Employee credentials saved: ${JSON.stringify(savedCredentials, null, 2)}`)
		writeJSON(savedCredentials);
	}

	async clickSubmit() {
		this.saveEmployeeCredentials();
		const result = await this.saveButton.doClick();
		cachedEmployeeData = null;

		console.log(`Employee saved: ${JSON.stringify(result, null, 2)}`);
		return result;
	}

	async getSavedCredentials() {
		return this.savedCredentials;
	}
}

export { AddEmployeePage }
