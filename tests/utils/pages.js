const HomePage = require('../pages/homePage.js');


class Pages {

	constructor() {

		this.HomePage = new HomePage(`https://the-internet.herokuapp.com`, `HomePage`);

	}

}

module.exports = Pages;
