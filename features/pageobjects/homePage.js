const BaseElement = require('../elementObjects/baseElement.js');
const BasePage = require('./basePage.js');


class HomePage extends BasePage {

	constructor(pageURL, pageName) {
		super(pageURL, pageName);

		this.paegHeading = new BaseElement(`//h1[@class='heading']`,`HomePage heading`);
		this.abTestingLink = new BaseElement(`//a[@href='/abtest']`, `A/B Testing link`);
	}

	async goToHomePage() {
		await this.goToURL(this.url);
	}	

}

module.exports = HomePage;
