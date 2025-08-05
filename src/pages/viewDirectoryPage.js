import { readJSON } from '../framework/utils/randomData.js';
import { BasePage } from "../framework/basePage.js";
import { BaseElement } from "../framework/baseElement.js";

let firstName;

class ViewDirectoryPage extends BasePage {
	constructor() {
		super(`/directory/viewDirectory`);

		this.searchNameField = new BaseElement(`//input[@placeholder='Type for hints...']`);
		this.namesList = new BaseElement(`//div[@role='listbox'][contains(@class,'oxd-autocomplete-dropdown')]`);
		this.nameByIndex = (index) => {
			return new BaseElement(`//div[@role='listbox'][contains(@class,'oxd-autocomplete-dropdown')]//span[${index}]`);
		}
		this.searchBtn = new BaseElement(`//button[@type='submit']`);
		// this.employeeCards = new BaseElement(`//div[@class='oxd-sheet oxd-sheet--rounded oxd-sheet--white orangehrm-directory-card']`).elLocators;
		this.employeeCard = new BaseElement(`//div[@class='oxd-sheet oxd-sheet--rounded oxd-sheet--white orangehrm-directory-card']`);
		// this.employeeCardName = new BaseElement(`//p[normalize-space()='${firstName}'`);
		this.employeeProfileCard = new BaseElement(`//div[@class='orangehrm-corporate-directory-sidebar']`);
	}

	getEmployeeCreds = async () => {
		return readJSON(`../../data/employeeCredentials.json`);
	}

	async enterSearchContent() {
		firstName = await this.getEmployeeCreds().then(data => data.firstName);
		return this.searchNameField.clearAndType(firstName);
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
		const name = this.nameByIndex(index);
		await name.doClick();
	}

	async clickSearchButton() {
		return this.searchBtn.doClick();
	}

	async viewEmployeeCard() {
		// for (let i = 0; i < await this.employeeCards.length; i++) {
		// 	const empCard = this.employeeCards[i];
		// 	await empCard.isDisplayed();
		// 	await empCard.click();
		// 	break;
		// }

		await this.employeeCard.isVisible(5000);
		return this.employeeCard.doClick();
	}

	async isProfileCardVisible() {
		const iv = await this.employeeProfileCard.isVisible(30000);
		return iv;
	}
}

export { ViewDirectoryPage }
