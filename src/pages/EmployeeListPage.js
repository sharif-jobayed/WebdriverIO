import { BasePage } from '../framework/basePage.js';
import { readFileSync } from 'fs';
const userData = JSON.parse(readFileSync(new URL('../data/userData.json', import.meta.url)));
import { BaseElement } from '../framework/baseElement.js';

class EmployeeList extends BasePage {

	constructor() {
		super(`/pim/viewEmployeeList`);

		this.addBtn = new BaseElement(`//button[normalize-space()='Add']`);
		this.searchField = new BaseElement(`//label[text()='Employee Id']/ancestor::div[contains(@class, 'oxd-input-group')]/div[@class='']/input`);
		this.searchBtn = new BaseElement(`//button[@type='submit']`);
		this.eomployeesTable = new BaseElement(`//div[@role='table']`);
		this.employeeIds = new BaseElement(`//div[contains(@class, 'oxd-table-row')]/div[contains(@class, 'oxd-table-cell')][2]`);
	}

	async getEmployeeCreds() {
		const credentials = JSON.parse(readFileSync(new URL('../data/employeeCredentials.json', import.meta.url)));
		return credentials;
	}

	async clickAddEmployeeButton() {
		await this.addBtn.doClick();
	}

	async enterEmployeeIdAndSearch() {
		const emplyeeId = await this.getEmployeeCreds().then(data => data.employeeId);
		await this.searchField.clearAndType(emplyeeId);
		await this.searchBtn.doClick();
		console.log(`Employee ID: ${emplyeeId} entered and searched`);
	}

	async isEmployeeInList() {
		if (await this.eomployeesTable.isVisible()) {
			const employeeIds = await this.employeeIds.getText();
			const employeeId = await this.getEmployeeCreds().then(data => data.employeeId);
			for (const id of employeeIds) {
				if (id.includes(employeeId)) {
					return true;
				}
			}
		}
		return false;
	}
}

export { EmployeeList }
