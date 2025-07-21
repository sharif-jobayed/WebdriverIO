import {BasePage} from '../framework/basePage.js';
import {readFileSync} from 'fs';
const userData = JSON.parse(readFileSync(new URL('../data/userData.json', import.meta.url)));
import {BaseElement} from '../framework/baseElement.js';
import {generateRandomUserData} from '../framework/utils/fakerUtil.js';

class AddEmployeePage extends BasePage {

	constructor() {
		super(`/pim/addEmployee`, `Add Employee Page`);
	}
	
}

export {AddEmployeePage}
