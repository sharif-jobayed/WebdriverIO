import { MainPage } from "../pages/mainPage.js";

class Converters {
	constructor() {
		this.mainPage = new MainPage();
	}

	async getPage(value) {
		switch (true) {
			case this.mainPage.pageName.includes(value):
				return this.mainPage;
			default:
				throw new Error(`Invalid page request: ${value}`);
		}
	}
	
	async getElement(value) {

		throw new Error('getElement method not implemented');
	}
}

export { Converters };
