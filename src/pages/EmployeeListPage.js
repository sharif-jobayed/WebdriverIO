import {BasePage} from '../framework/basePage.js';
import {readFileSync} from 'fs';
const userData = JSON.parse(readFileSync(new URL('../data/userData.json', import.meta.url)));
import {BaseElement} from '../framework/baseElement.js';

class EmployeeList extends BasePage {

	constructor() {
		super(`/pim/viewEmployeeList`);

		this.addBtn = new BaseElement(`//button[normalize-space()='Add']`);
	}
	
	async clickAddEmployeeButton() {
		await this.addBtn.doClick();
	}
}

export {EmployeeList}
