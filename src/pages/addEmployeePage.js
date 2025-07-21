import { BasePage } from '../framework/basePage.js';
import { readFileSync } from 'fs';
const userData = JSON.parse(readFileSync(new URL('../data/userData.json', import.meta.url)));
import { BaseElement } from '../framework/baseElement.js';
import { generateRandomUserData, generateStrongPassword, randomEmpId } from '../framework/utils/randomData.js';

class AddEmployeePage extends BasePage {

	constructor() {
		super(`/pim/addEmployee`, `Add Employee Page`);

		this.firstNameField = new BaseElement(
			`//input[@placeholder='First Name']`,
			`First Name Input Field`
		);
		this.middleNameField = new BaseElement(
			`//input[@placeholder='Middle Name']`,
			`Middle Name Input Field`
		);
		this.lastNameField = new BaseElement(
			`//input[@placeholder='Last Name']`,
			`Last Name Input Field`
		);
		this.employeeIdField = new BaseElement(
			`//label[text()='Employee Id']/ancestor::div[contains(@class, 'oxd-input-group')]/div[@class='']/input`,
			`Employee ID Input Field`
		);
		this.saveButton = new BaseElement(
			`//button[@type='submit']`,
			`Save Button`
		);
		this.toggleLoginDetailsCheckbox = new BaseElement(
			`//span[@class='oxd-switch-input oxd-switch-input--active --label-right']`,
			`Toggle Login Details Checkbox`
		);
		this.usernameField = new BaseElement(
			`//input[@class='oxd-input oxd-input--focus']`,
			`Username Input Field`
		);
		this.passwordField = new BaseElement(
			`//input[@type='password']`,
			`Password Input Field`
		);
		this.confirmPasswordField = new BaseElement(
			`//label[text()='Confirm Password']/ancestor::div[contains(@class, 'oxd-input-group')]/div[@class='']/input[@type='password']`,
			`Confirm Password Input Field`
		);
	}

	async randomEmployeeData() {
		const randomUserData = await generateRandomUserData();
		const strongPassword = await generateStrongPassword();

		return {
			firstName: randomUserData.firstName,
			lastName: randomUserData.lastName,
			username: randomUserData.username,
			password: strongPassword,
			employeeId: randomEmpId().toString(),
		};
	}

	async enterEmployeeInfo() {
		await this.firstNameField.clearAndType((await this.randomEmployeeData()).firstName);
		await this.lastNameField.clearAndType((await this.randomEmployeeData()).lastName);
		await this.employeeIdField.clearAndType((await this.randomEmployeeData()).employeeId);
	}

	async enableCreateLoginDetailsToggle() {
		return this.toggleLoginDetailsCheckbox.doClick();
	}

	async enterLoginDetails() {
		await this.usernameField.clearAndType(await this.randomEmployeeData().username);
		await this.passwordField.clearAndType(await this.randomEmployeeData().password);
		await this.confirmPasswordField.clearAndType(await this.randomEmployeeData().password);
	}

	async clickSubmit() {
		return this.saveButton.doClick();
	}

}

export { AddEmployeePage }
