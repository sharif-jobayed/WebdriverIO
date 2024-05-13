const BaseElement = require('../elements/baseElement.js');
const BasePage = require('./basePage.js');


class HomePage extends BasePage {

	constructor(pageURL, pageName) {
		super(pageURL, pageName);

		this.ABTestingLink = new BaseElement(`//a[@href="/abtest"]`, `A/B Testing link`);
	}

}

module.exports = HomePage;
