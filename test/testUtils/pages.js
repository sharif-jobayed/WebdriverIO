const HomePage = require('../pageObjects/homePage.js');
const ABTestingPage = require('../pageObjects/abTestingPage.js');


class Pages {

	constructor() {
		this.homePage = new HomePage(`https://the-internet.herokuapp.com`, `Home Page`)
		this.abtestPage = new ABTestingPage(`https://the-internet.herokuapp.com/abtest`, `A/B Testing Page`);
	}

}

module.exports = Pages;
