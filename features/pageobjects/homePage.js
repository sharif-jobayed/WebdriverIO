import BaseElement from "../elementObjects/baseElement.js";
import BasePage from "./basePage.js";


class HomePage extends BasePage {

	constructor() {
		super(`https://the-internet.herokuapp.com/`, `HomePage`);

		this.paegHeading = new BaseElement(`//h1[@class='heading']`,`HomePage heading`);
		this.abTestingLink = new BaseElement(`//a[@href='/abtest']`, `A/B Testing link`);
	}

	async goToHomePage() {
		await this.goToURL(this.url);
	}	

}

export default HomePage;