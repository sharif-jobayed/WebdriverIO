import { BasePage } from "../framework/basePage";
import { readJSON } from '../framework/utils/randomData.js';
import { BaseElement } from "../framework/baseElement.js";


class ViewDirectoryPage extends BasePage {
	constructor() {
		super(`/directory/viewDirectory`);

		this.searchNameField = new BaseElement(`//input[@placeholder='Type for hints...']`);
		this.searchBtn = new BaseElement(`//button[@type='submit']`);
	}

	getEmployeeCreds = async () => {
		const credentials = await readJSON(new URL('../data/employeeCredentials.json', import.meta.url));
		return credentials;		
	}

	async enterEmployeeNameAndSearch() {
		const employeeCreds = await this.getEmployeeCreds();
		await this.searchNameField.clearAndType(employeeCreds.forEach(e => e.firstName));
		await this.searchBtn.doClick();
	}
}

export { ViewDirectoryPage }
