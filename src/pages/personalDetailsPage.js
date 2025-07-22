import { BasePage } from '../framework/basePage.js';
import { readFileSync } from 'fs';
const userData = JSON.parse(readFileSync(new URL('../data/userData.json', import.meta.url)));
import { BaseElement } from '../framework/baseElement.js';

class PersonalDetailsPage extends BasePage {
	constructor() {
		super(/\/pim\/viewPersonalDetails\/empNumber\/\d+/);

		this.firstNameField = new BaseElement(`//input[@placeholder='First Name']`);
		this.lastNameField = new BaseElement(`//input[@placeholder='Last Name']`);
	}

	async getFirstName() {
		return await this.firstNameField.getValue();
	}

	async getLastName() {
		return await this.lastNameField.getValue();
	}

	async setPersonalDetails(firstName, lastName) {
		await this.firstNameField.clearAndType(firstName);
		await this.lastNameField.clearAndType(lastName);
		await this.saveButton.doClick();
	}
}

export { PersonalDetailsPage }
