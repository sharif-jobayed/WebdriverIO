import { BasePage } from '../framework/basePage.js';
import { readFileSync } from 'fs';
const userData = JSON.parse(readFileSync(new URL('../data/userData.json', import.meta.url)));
import { BaseElement } from '../framework/baseElement.js';

class PersonalDetailsPage extends BasePage {

	constructor() {
		super(`/\/pim\/viewPersonalDetails\/empNumber\/\d+/`, `Personal Details Page`);
	}

}

export { PersonalDetailsPage }
