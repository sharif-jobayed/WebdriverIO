const HomePage = require('../pages/homePage.js');
const ABTestingPage = require('../pages/ABTestingPage.js');


class Pages {

	constructor() {

		this.HomePage = new HomePage(`https://the-internet.herokuapp.com`, `HomePage`);
		this.ABTestingPage = new ABTestingPage(`https://the-internet.herokuapp.com/abtest` , `ABTestingPage`);

	}

}

module.exports = Pages;
