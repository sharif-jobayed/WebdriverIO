const HomePage = require('../pages/homePage.js');
const ABTestingPage = require('../pages/abTestingPage.js');
const AddRemoveElementsPage = require('../pages/addRemoveElementsPage.js');


class Pages {

	constructor() {

		this.HomePage = new HomePage(
			`https://the-internet.herokuapp.com`,
			`HomePage`
		);
		this.ABTestingPage = new ABTestingPage(
			`https://the-internet.herokuapp.com/abtest` ,
			`ABTestingPage`
		);
		this.AddRemoveElementsPage = new AddRemoveElementsPage(
			`https://the-internet.herokuapp.com/add_remove_elements`,
			`AddRemoveElementsPage`
		);

	}

}

module.exports = Pages;
