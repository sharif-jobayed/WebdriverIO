const HomePage = require('../pages/homePage.js');
const ABTestingPage = require('../pages/abTestingPage.js');
const AddRemoveElementsPage = require('../pages/addRemoveElementsPage.js');
const BasicAuthPage = require('../pages/basicAuthPage.js');
const BrokenImagesPage = require('../pages/brokenImagesPage.js');


class Pages {

	constructor() {

		this.HomePage = new HomePage(
			``,
			`HomePage`
		);
		this.ABTestingPage = new ABTestingPage(
			`abtest`,
			`ABTestingPage`
		);
		this.AddRemoveElementsPage = new AddRemoveElementsPage(
			`add_remove_elements`,
			`AddRemoveElementsPage`
		);
		this.BasicAuthPage = new BasicAuthPage(
			`basic_auth`,
			`BasicAuthPage`
		);
		this.BrokenImagesPage = new BrokenImagesPage(
			`broken_images`,
			`BrokenImagesPage`
		);

	}

}

module.exports = Pages;
