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
		this.empIdsColumn = new BaseElement(`//div[contains(@class, 'oxd-table-row')]/div[contains(@class, 'oxd-table-cell')][2]`).elLocators;
		this.profileEditBtn = new BaseElement(`//div[@class='oxd-table-cell-actions']//i[contains(@class,'bi-pencil-fill')]`);
	}

	async getEmployeeCreds() {
		const credentials = readJSON(`../../data/employeeCredentials.json`);
		return credentials;
	}

	async clickAddEmployeeButton() {
		await this.addBtn.doClick();
	}

	async enterEmployeeIdAndSearch() {
		const employeeId = await this.getEmployeeCreds().then(data => data.employeeId);
		await this.empIdSearchField.clearAndType(employeeId);
		await this.searchBtn.doClick();
		await this.resultCount.isVisible();
	}

	async isEmployeeInList() {
		const employeeId = await this.getEmployeeCreds().then(data => data.employeeId);
		for (let i = 0; i < await this.empIdsColumn.length; i++) {
			const empIdText = await this.empIdsColumn[i].getText();
			if (empIdText == employeeId) {
				return true;
			} else {
				return false;
			}
		}
	}

	async clickEditProfileBtn() {
		await this.profileEditBtn.doClick();
	}
}

export { EmployeeList }
