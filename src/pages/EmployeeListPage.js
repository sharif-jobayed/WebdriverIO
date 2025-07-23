import { BasePage } from '../framework/basePage.js';
import { read, readFileSync } from 'fs';
import {generateRandomUserData, writeJSON, readJSON} from '../framework/utils/randomData.js'
import { BaseElement } from '../framework/baseElement.js';

class EmployeeList extends BasePage {

	constructor() {
		super(`/pim/viewEmployeeList`);

		this.addBtn = new BaseElement(`//button[normalize-space()='Add']`);
		this.searchField = new BaseElement(`//label[text()='Employee Id']/ancestor::div[contains(@class, 'oxd-input-group')]/div[@class='']/input`);
		this.searchBtn = new BaseElement(`//button[@type='submit']`);
		this.eomployeesTableHeader = new BaseElement(`//div[@role='table']/div[1]`);
		this.employeeIds = new BaseElement(`//div[contains(@class, 'oxd-table-row')]/div[contains(@class, 'oxd-table-cell')][2]`);
	}

	async getEmployeeCreds() {
		const credentials = readJSON(`../../data/employeeCredentials.json`);
		return credentials;
	}

	async clickAddEmployeeButton() {
		await this.addBtn.doClick();
	}

	async enterEmployeeIdAndSearch(empId) {
		if (empId) {
			await this.searchField.clearAndType(empId);
			await this.searchBtn.doClick();
			console.log(`Employee ID: ${empId} entered and searched`);
		} else {
			const emplyeeId = await this.getEmployeeCreds().then(data => data.employeeId);
			await this.searchField.clearAndType(emplyeeId);
			await this.searchBtn.doClick();
			console.log(`Employee ID: ${emplyeeId} entered and searched`);
		}
	}

	async isEmployeeInList() {
		if (await this.eomployeesTableHeader.isVisible()) {
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
