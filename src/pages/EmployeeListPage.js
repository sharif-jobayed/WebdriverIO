import { BasePage } from '../framework/basePage.js';
import { readJSON } from '../framework/utils/randomData.js'
import { BaseElement } from '../framework/baseElement.js';

class EmployeeList extends BasePage {
	constructor() {
		super(`/pim/viewEmployeeList`);

		this.addBtn = new BaseElement(`//button[normalize-space()='Add']`);
		this.empIdSearchField = new BaseElement(`//label[text()='Employee Id']/ancestor::div[contains(@class, 'oxd-input-group')]/div[@class='']/input`);
		this.searchBtn = new BaseElement(`//button[@type='submit']`);
		this.resultCount = new BaseElement(`//div[contains(@class,'orangehrm-horizontal-padding')]/span[contains(@class,'oxd-text')]`);
		this.empTableHeader = new BaseElement(`//div[@role='table']/div[1]`);
		this.empIdsColumn = new BaseElement(`//div[contains(@class, 'oxd-table-row')]/div[contains(@class, 'oxd-table-cell')][2]`);
		this.profileEditBtn = new BaseElement(`//div[@class='oxd-table-cell-actions']//i[contains(@class,'bi-pencil-fill')]`);
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
			await this.empIdSearchField.clearAndType(empId);
			await this.searchBtn.doClick();
			await this.resultCount.isVisible();
		} else {
			const employeeId = await this.getEmployeeCreds().then(data => data.employeeId);
			await this.empIdSearchField.clearAndType(employeeId);
			await this.searchBtn.doClick();
			await this.resultCount.isVisible();
		}
	}

	async isEmployeeInList(empId) {
		if (empId) {
			const empIds = this.empIdsColumn.elLocators;
			for (let i = 0; i < await empIds.length; i++) {
				const empIdText = await empIds[i].getText();
				if (empIdText === empId.toString()) {
					return true;
				}
			}
			return false;
		} else {
			const employeeId = await this.getEmployeeCreds().then(data => data.employeeId);
			const empIds = this.empIdsColumn.elLocators;
			for (let i = 0; i < await empIds.length; i++) {
				const empIdText = await empIds[i].getText();
				if (empIdText === employeeId) {
					return true;
				}
			}
			return false;
		}
	}

	async clickEditProfileBtn() {
		await this.profileEditBtn.doClick();
	}
}

export { EmployeeList }
