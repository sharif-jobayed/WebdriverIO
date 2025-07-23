import { BasePage } from '../framework/basePage.js';
import { readFileSync } from 'fs';
const userData = JSON.parse(readFileSync(new URL('../data/userData.json', import.meta.url)));
import { BaseElement } from '../framework/baseElement.js';

class PersonalDetailsPage extends BasePage {
	constructor() {
		super(/\/pim\/viewPersonalDetails\/empNumber\/\d+/);

		this.firstNameField = new BaseElement(`//input[@placeholder='First Name']`);
		this.lastNameField = new BaseElement(`//input[@placeholder='Last Name']`);
		this.employeeIdField = new BaseElement(`//label[text()='Employee Id']/ancestor::div[contains(@class, 'oxd-input-group')]//input`);
		this.employeeListBtn = new BaseElement(`//a[normalize-space()='Employee List']`);
		this.savePersonalDetailsBtn = new BaseElement(`//div[@class='orangehrm-horizontal-padding orangehrm-vertical-padding']//button[@type='submit'][normalize-space()='Save']`);
		this.nationalityDropdownArrow = new BaseElement(`//div[contains(@class, 'oxd-select-text--active')]//i[contains(@class, 'oxd-select-text--arrow')]`);
	}

	async getFirstNameValue() {
		return await this.firstNameField.getValue();
	}

	async getLastNameValue() {
		return await this.lastNameField.getValue();
	}

	async getEmployeeIdValue() {
		return await this.employeeIdField.getValue();
	}

	async setPersonalDetails() {
		// profile updates here...
		await this.savePersonalDetailsBtn.doClick(60000);
	}

	async clickEmployeeListButton() {
		await this.employeeListBtn.doClick();
	}
}

export { PersonalDetailsPage }
