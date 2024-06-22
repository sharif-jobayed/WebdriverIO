import { MainPage } from "../pages/mainPage.js";
import { ABTestingPage } from "../pages/abTestingPage.js";
import { AddRemoveElementsPage } from "../pages/addRemoveElementsPage.js";

class Converters {
	constructor() {
		this.mainPage = new MainPage();
		this.abTestingPage = new ABTestingPage();
		this.addRemoveElementsPage = new AddRemoveElementsPage();
	}

	async getPage(value) {
		switch (true) {
			case this.mainPage.pageName.includes(value):
				return this.mainPage;
			case this.abTestingPage.pageName.includes(value):
				return this.abTestingPage;
			case this.addRemoveElementsPage.pageName.includes(value):
				return this.addRemoveElementsPage;
			default:
				throw new Error(`Invalid page request: ${value}`);
		}
	}
}

export { Converters };
