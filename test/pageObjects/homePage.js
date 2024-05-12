const BaseElement = require('../elementObjects/baseElement.js');
const BasePage = require('../pageObjects/basePage.js');


class HomePage extends BasePage {

	constructor(pageURL, pageName) {
		super(pageURL, pageName);

		this.homePageHeading = new BaseElement(`//h1[@class="heading"]`, `Home Page heading`);
		this.abTestingPageLink = new BaseElement(`//a[@href="/abtest"]`, `A/B Testing Page link`);
	}

	async goToHomePage() {
		await this.goToURL(this.url);
	}

}

module.exports = HomePage;
