import {BasePage} from '../framework/basePage.js';
import {readFileSync} from 'fs';
const userData = JSON.parse(readFileSync(new URL('../data/userData.json', import.meta.url)));
import {BaseElement} from '../framework/baseElement.js';

class EmployeeList extends BasePage {

	constructor() {
		super(`/pim/viewEmployeeList`, `Employee List Page`);
	
		this.addBtn = new BaseElement(
			`//button[normalize-space()='Add']`,
			`Add Button Element`
		);
	}
	
}

export {EmployeeList}
