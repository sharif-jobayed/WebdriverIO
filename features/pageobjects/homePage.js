const BaseElement = require('../elementObjects/baseElement.js');
const BasePage = require('../pageobjects/basePage.js');


class HomePage extends BasePage {

	constructor(pageURL, pageName) {
		super(pageURL, pageName);
	}

	async goToHomePage() {
		await this.goToURL(this.url);
	}

}

module.exports = HomePage;
