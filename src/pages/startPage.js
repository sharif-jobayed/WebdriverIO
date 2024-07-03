
const {BasePage} = require('../pages/basePage.js');

class StartPage extends BasePage {
	constructor() {
		super(
			`https://ideascale.com/`,
			`Start page`
		);
	}
}

module.exports = {StartPage}
