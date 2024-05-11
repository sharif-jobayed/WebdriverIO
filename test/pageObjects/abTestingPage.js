const BaseElement = require('../elementObjects/baseElement.js');
const BasePage = require('../pageObjects/basePage.js');


class ABTestingPage extends BasePage {

	constructor(pageURL, pageName) {
		super(pageURL, pageName);
	}

}

module.exports = ABTestingPage;
