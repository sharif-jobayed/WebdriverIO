import { BasePage } from '../framework/basePage.js';
import { BaseElement } from '../framework/baseElement.js';
import {readJSON} from '../framework/utils/randomData.js';

class PersonalDetailsPage extends BasePage {
	constructor() {
		super(/\/pim\/viewPersonalDetails\/empNumber\/\d+/);

		this.profileNameEl = new BaseElement(`//div[contains(@class,'orangehrm-edit-employee-name')]/h6`);
		this.firstNameField = new BaseElement(`//input[@placeholder='First Name']`);
		this.lastNameField = new BaseElement(`//input[@placeholder='Last Name']`);
		this.employeeIdField = new BaseElement(`//label[text()='Employee Id']/ancestor::div[contains(@class, 'oxd-input-group')]//input`);
		this.employeeListBtn = new BaseElement(`//a[normalize-space()='Employee List']`);
		this.savePersonalDetailsBtn = new BaseElement(`//div[@class='orangehrm-horizontal-padding orangehrm-vertical-padding']//button[@type='submit'][normalize-space()='Save']`);
		this.nationalityDropdownArrow = new BaseElement(`//div[contains(@class, 'oxd-select-text--active')]//i[contains(@class, 'oxd-select-text--arrow')]`);
	}

	getEmployeeCreds = async () => {
		return readJSON('../../data/employeeCredentials.json');
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

	getProfileName() {
		console.log(`Profile name: ${this.profileNameEl.getText(30000)}`);
		return this.profileNameEl.getText(30000);
	}

	async getNameFromCreds() {
		console.log(`From creds: ${await this.getEmployeeCreds().firstName} ${await this.getEmployeeCreds().lastName}`);
		return this.getProfileName() == `${await this.getEmployeeCreds().firstName} ${await this.getEmployeeCreds().lastName}`;
		
	}
}

export { PersonalDetailsPage }
