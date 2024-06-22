import { MainPage } from "../pages/mainPage.js";
import { ABTestingPage } from "../pages/abTestingPage.js";

class Converters {
	constructor() {
		this.mainPage = new MainPage();
		this.abTestingPage = new ABTestingPage();
	}

	async getPage(value) {
		switch (true) {
			case this.mainPage.pageName.includes(value):
				return this.mainPage;
			case this.abTestingPage.pageName.includes(value):
				return this.abTestingPage;
			default:
				throw new Error(`Invalid page request: ${value}`);
		}
	}

	async getElement(value) {
		// To set yet...
		throw new Error(`Invalid element request: ${value}`);
	}
}

export { Converters };
