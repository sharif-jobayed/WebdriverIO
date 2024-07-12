const { BaseElement } = require('../framework/baseElement.js');
const { BasePage } = require('../framework/basePage.js');
const { MS } = require('../framework/utils/constants.js');

class StartPage extends BasePage {
	constructor() {
		super(
			`https://ideascale.com/`,
			`Start page`
		);

		this.cookiesPopUp = new BaseElement(
			`//div[@id="cookie-law-info-bar"]`,
			`Cookies popup`
		);
	}

	async acceptCookies(buttonText) {
		await (await this.getLinkByText(buttonText)).waitTillVisible(MS.max);
		return (await this.getLinkByText(buttonText)).doClick();
	}
	async isCookiesPopUpVisible() {
		return this.cookiesPopUp.isVisible();
	}
}

module.exports = { StartPage }
