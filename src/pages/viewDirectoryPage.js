import { BasePage } from "../framework/basePage.js";
import { readJSON } from '../framework/utils/randomData.js';
import { BaseElement } from "../framework/baseElement.js";


class ViewDirectoryPage extends BasePage {
	constructor() {
		super(`/directory/viewDirectory`);

		this.searchNameField = new BaseElement(`//input[@placeholder='Type for hints...']`);
		this.nameDropDown = new BaseElement(`//div[@role='listbox'][contains(@class,'oxd-autocomplete-dropdown')]`);
		this.nameByIndex = (index) => {
			return new BaseElement(`//div[@role='option'][@class='oxd-autocomplete-option'][${index}]`);
		}
		this.searchBtn = new BaseElement(`//button[@type='submit']`);
	}

	getEmployeeCreds = async () => {
		return readJSON('../../data/employeeCredentials.json');
	}

	async enterSearchContent() {
		// const employee = await this.getEmployeeCreds();
		// const fullName = `${employee.firstName} ${employee.lastName}`;
		// await this.searchNameField.clearAndType(employee.firstName);

		// The searchbox returning with no data with employee name so I picked a letter
		await this.searchNameField.clearAndType(`a`);
		await this.nameDropDown.isVisible();
	}

	getNamesDropdown() {
		return this.nameDropDown;
	}

	async pickAName(index) {
		await this.nameByIndex(index).doClick();
	}

	async clickSearchButton() {
		await this.searchBtn.doClick();
	}
}

export { ViewDirectoryPage }
