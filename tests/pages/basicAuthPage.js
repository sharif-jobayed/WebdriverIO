const BaseElement = require("../elements/baseElement.js");
const BasePage = require("./basePage.js");


class BasicAuthPage extends BasePage {

	constructor(pageURL, pageName) {
		super(pageURL, pageName);

		this.ConfirmationMessage = new BaseElement(
			`//div[contains(@class,"example")]/p`,
			`ConfirmationMessage`
		);
	}

}

module.exports = BasicAuthPage;
