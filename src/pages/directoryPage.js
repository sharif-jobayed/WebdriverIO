import {BasePage} from '../framework/basePage.js';
import {readFileSync} from 'fs';
const userData = JSON.parse(readFileSync(new URL('../data/userData.json', import.meta.url)));
import {BaseElement} from '../framework/baseElement.js';

class DirectoryPage extends BasePage {

	constructor() {
		super();		
	}
	
}

export {DirectoryPage}
