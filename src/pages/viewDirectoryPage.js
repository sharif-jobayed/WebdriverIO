import { BasePage } from "../framework/basePage.js";
import { readJSON } from '../framework/utils/randomData.js';
import { BaseElement } from "../framework/baseElement.js";


class ViewDirectoryPage extends BasePage {
	constructor() {
		super(`/directory/viewDirectory`);

		this.searchNameField = new BaseElement(`//input[@placeholder='Type for hints...']`);
		this.searchBtn = new BaseElement(`//button[@type='submit']`);
	}

	getEmployeeCreds = async () => {
		return readJSON('../../data/employeeCredentials.json');
	}

	async enterEmployeeNameAndSearch() {
		const employee = await this.getEmployeeCreds();
		const fullName = `${employee.firstName} ${employee.lastName}`;
		await this.searchNameField.clearAndType(employee.firstName);
		
	}
}

export { ViewDirectoryPage }
