const { BaseElement } = require('../framework/baseElement.js');
const { BasePage } = require('../framework/basePage.js');

class StartPage extends BasePage {
	constructor() {
		super(
			`https://ideascale.com/`,
			`Start page`
		);
	}
}

module.exports = { StartPage }
