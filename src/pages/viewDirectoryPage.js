import { Timeouts } from '../data/appData.json';
import { readJSON } from '../framework/utils/randomData.js';
import { BasePage } from "../framework/basePage.js";
import { BaseElement } from "../framework/baseElement.js";
import { browser } from '@wdio/globals';


class ViewDirectoryPage extends BasePage {
	constructor() {
		super(`/directory/viewDirectory`);

		this.searchNameField = new BaseElement(`//input[@placeholder='Type for hints...']`);
		this.namesList = new BaseElement(`//div[@role='listbox'][contains(@class,'oxd-autocomplete-dropdown')]`);
		this.nameByIndex = (index) => {
			return new BaseElement(`//div[@role='listbox'][contains(@class,'oxd-autocomplete-dropdown')]//span[${index}]`);
		}
		this.searchBtn = new BaseElement(`//button[@type='submit']`);
		this.employeeCard = new BaseElement(`//div[@class='oxd-sheet oxd-sheet--rounded oxd-sheet--white orangehrm-directory-card']`);
		this.employeeProfileCard = new BaseElement(`//div[@class='orangehrm-corporate-directory-sidebar']//div[@class='oxd-sheet oxd-sheet--rounded oxd-sheet--white orangehrm-directory-card']`);
	}

	getEmployeeCreds = async () => {
		return readJSON(`../../data/employeeCredentials.json`);
	}

	async enterSearchContent() {
		const firstName = await this.getEmployeeCreds().then(data => data.firstName);
		await this.searchNameField.clearAndType(firstName);
	}

	async isNamesDropdownVisible() {
		await this.namesList.isVisible();
		return true;
	}

	async getNames() {
		const names = this.namesList.elLocators;
		return names;
	}

	async pickAName(index) {
		await this.nameByIndex(index).doClick();
	}

	async clickSearchButton() {
		await this.searchBtn.doClick();
	}

	async viewEmployeeProfile() {
		await this.employeeCard.doClick();
		await this.employeeProfileCard.isVisible();
	}
}

export { ViewDirectoryPage }
