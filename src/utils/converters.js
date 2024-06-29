
import { MainPage } from "../pages/mainPage.js";
import { ABTestingPage } from "../pages/abTestingPage.js";
import { AddRemoveElementsPage } from "../pages/addRemoveElementsPage.js";
import { BasicAuthPage } from "../pages/basicAuthPage.js";

class Converters {
	constructor() {
		this.pages = {
			"Main": new MainPage(),
			"A/B Testing": new ABTestingPage(),
			"Add/Remove Elements": new AddRemoveElementsPage(),
			"Basic Auth": new BasicAuthPage(),
		};
	}

	getPage(pageName) {
		const page = this.pages[pageName];
		if (!page) {
			throw new Error(`Invalid page request: ${pageName}`);
		}
		return page;
	}
}

export { Converters };
