const HomePage = require('../pageobjects/homePage.js');

class Pages {

	constructor() {
		this.homePage = new HomePage(`https://the-internet.herokuapp.com/`, `HomePage`);
	}

}

module.exports = Pages;
