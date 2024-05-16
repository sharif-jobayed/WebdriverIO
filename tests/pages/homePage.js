const BaseElement = require('../elements/baseElement.js');
const BasePage = require('./basePage.js');


class HomePage extends BasePage {

	constructor(pageURL, pageName) {
		super(pageURL, pageName);

		this.ABTestingLink = new BaseElement(
			`//a[@href="/abtest"]`,
			`ABTestingLink`
		);
		this.AddRemoveElementsLink = new BaseElement(
			`//a[@href="/add_remove_elements/"]`,
			`AddRemoveElementsLink`
		);
		this.BasicAuthLink = new BaseElement(
			`//a[@href="/basic_auth"]`,
			`BasicAuthLink`
		);
	}

}

module.exports = HomePage;
