const BaseElement = require('../elements/baseElement');
const BasePage = require('../pages/basePage.js');


class ABTestingPage extends BasePage {

	constructor(pageURL, pageName) {
		super(pageURL, pageName);

		this.Paragraph = new BaseElement(`//div[@class="example"]/p`, `Paragraph`);
	}

}

module.exports = ABTestingPage;