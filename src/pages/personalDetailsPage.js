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
		this.nationalitySelectionArrow = new BaseElement(`//label[text()='Nationality']/ancestor::div[contains(@class, 'oxd-input-group')]//i[contains(@class, 'oxd-select-text--arrow')]`);
		this.countryList = new BaseElement(`//div[@role='listbox'][contains(@class,'oxd-select-dropdown')]`);

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

	getProfileNameEl() {
		return this.profileNameEl;
	}

	async getNameFromCreds() {
		return `${await this.getEmployeeCreds().then(data => data.firstName)} ${await this.getEmployeeCreds().then(data => data.lastName)}`;		
	}

	async getFullName() {
		return `${await this.getFirstNameValue()} ${await this.getLastNameValue()}`;
	}

	async clickNationalitySelectionArrow() {
		await this.nationalityDropdownArrow.doClick();
	}

	async getCountryList() {
		return this.countryList;
	}

}

export { PersonalDetailsPage }
