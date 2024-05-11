const HomePage = require('../pageobjects/homePage.js');

class CommonActions {

	constructor() {
		this.homePage = new HomePage(`https://the-internet.herokuapp.com/`, `HomePage`);
	}

}

module.exports = CommonActions;
