const { Given, When, Then } = require('@wdio/cucumber-framework');
const { assert } = require('chai');
const { Converters } = require('../framework/utils/converters.js');

const pages = (pageName) => {
	return new Converters().getPage(pageName);
}

When(
	/^I click on the '(.*)' button on the '(.*)' page$/,
	async (buttonText, pageName) => {
		const page = await pages(pageName);
		return page.acceptCookies(buttonText);
	}
);
Then(
	/^I see the cookies pop-up is not visible on the '(.*)' page$/,
	async (pageName) => {
		const page = await pages(pageName);
		assert.isFalse(page.isCookiesPopUpVisible(), `Cookies pop-up is still visible`);
	}
);
