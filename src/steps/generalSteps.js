
const { Given, When, Then } = require('@wdio/cucumber-framework');
const { assert } = require('chai');
const { Converters } = require('../framework/utils/converters.js');

const pages = (pageName) => {
	return new Converters().getPage(pageName);
}

Given(
	/^I am on the '(.*)' page$/,
	async (pageName) => {
		const page = await pages(pageName);
		return page.openPage();
	}
);
Then(
	/^The '(.*)' page is open$/,
	async (pageName) => {
		const page = await pages(pageName);
		assert.isTrue(await page.isPageOpen(), `The ${pageName} is not open yet`);
	}
);
Then(
	/^The '(.*)' page is loaded$/,
	async (pageName) => {
		const page = await pages(pageName);
		assert.isTrue(await page.isPageLoaded(), `The ${pageName} is not fully loaded yet`);
	}
);
