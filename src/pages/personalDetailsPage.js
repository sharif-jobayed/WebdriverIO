import { BasePage } from '../framework/basePage.js';
import { BaseElement } from '../framework/baseElement.js';
import { readJSON } from '../framework/utils/randomData.js';

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
		this.nationality = (nationality) => {
			return new BaseElement(`//div[@role='option']/span[normalize-space()='${nationality}']`);
		}
		this.selectedNationality = (nationality) => {
			return new BaseElement(`//div[@clear='false'][text()='${nationality}']`);
		}
	}

	getEmployeeCreds = async () => {
		return readJSON('../../data/employeeCredentials.json');
	}

	async getFirstNameValue() {
		return this.firstNameField.getValue();
	}

	async getLastNameValue() {
		return this.lastNameField.getValue();
	}

	async getEmployeeIdValue() {
		return this.employeeIdField.getValue();
	}

	async clickEmployeeListButton() {
		return this.employeeListBtn.doClick();
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
		return this.nationalityDropdownArrow.doClick();
	}

	async getCountryList() {
		return this.countryList;
	}

	async selectNationality(nationality) {
		await this.nationality(nationality).scrollTo();
		return this.nationality(nationality).doClick();
	}

	async getSelectedNationality(nationality) {
		return this.selectedNationality(nationality).getText();
	}

	async setPersonalDetails() {
		return this.savePersonalDetailsBtn.doClick();
	}
}

export { PersonalDetailsPage }
