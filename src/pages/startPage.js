const { BaseElement } = require('../framework/baseElement.js');
const { BasePage } = require('../framework/basePage.js');
const { MS } = require('../framework/utils/constants.js');

class StartPage extends BasePage {
	constructor() {
		super(
			`https://ideascale.com/`,
			`Start page`
		);
	}

	async acceptCookies(buttonText) {
		await (await this.getLinkByText(buttonText)).waitForDisplayed(MS.max);
		return (await this.getLinkByText(buttonText)).doClick();
	}
}

module.exports = { StartPage }
