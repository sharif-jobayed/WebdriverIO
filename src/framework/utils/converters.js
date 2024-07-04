const { StartPage } = require("../../pages/startPage");

class Converters {
	constructor() {
		this.pages = {
			startPage: new StartPage(),
		};
	}

	async getPage(pageName) {
		if (this.pages.startPage.pName.includes(pageName)) {
			return this.pages.startPage;
		} else {
			throw new Error(`The ${pageName} does not refer to a valid page`);
		}
	}

	async getElement(element, pageName) {
		const page = await this.getPage(pageName);
		if ((await page.getLinkByText(element)).elName.includes(element)) {
			return page.getLinkByText(element);
		} else {
			throw new Error(`The ${element} does not refer to a valid element`);
		}
	}
}

module.exports = { Converters };
