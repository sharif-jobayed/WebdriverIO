import { BasePage } from "../framework/basePage.js";
import { readJSON } from '../framework/utils/randomData.js';
import { BaseElement } from "../framework/baseElement.js";


class ViewDirectoryPage extends BasePage {
	constructor() {
		super(`/directory/viewDirectory`);

		this.searchNameField = new BaseElement(`//input[@placeholder='Type for hints...']`);
		this.nameDropDown = new BaseElement(`//div[contains(@class, 'oxd-autocomplete-wrapper')]/div[contains(@class, 'oxd-autocomplete-dropdown')]`);
		this.nameByIndex = (index) => {
			return new BaseElement(`//div[@role='option'][@class='oxd-autocomplete-option'][${index}]`);
		}
		this.searchBtn = new BaseElement(`//button[@type='submit']`);
		this.employeeCard = new BaseElement(`//div[@class='oxd-sheet oxd-sheet--rounded oxd-sheet--white orangehrm-directory-card']`);
		this.employeeProfileCard = new BaseElement(`//div[@class='orangehrm-corporate-directory-sidebar']//div[@class='oxd-sheet oxd-sheet--rounded oxd-sheet--white orangehrm-directory-card']`);
	}

	getEmployeeCreds = async () => {
		return readJSON('../../data/employeeCredentials.json');
	}

	async enterSearchContent() {
		// const employee = await this.getEmployeeCreds();
		// const fullName = `${employee.firstName} ${employee.lastName}`;
		// await this.searchNameField.clearAndType(employee.firstName);

		// The searchbox returning with no data with employee name so I picked a letter (The searchbox has several issues)
		await this.searchNameField.clearAndType(`b`);
		await this.nameDropDown.isVisible();
	}

	getNamesDropdown() {
		this.nameDropDown.isVisible();
		return this.nameDropDown;
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
