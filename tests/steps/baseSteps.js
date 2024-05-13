const {Given, When, Then,} = require('@wdio/cucumber-framework');
const {assert, expect} = require('chai');
const Pages = require('../utils/pages.js');


const pages = new Pages();

Given(
	/^I am on the '(.*)'$/,
	async(page) => {
		const currentPage = pages[page];

		console.log(`${currentPage.name}`);
		await currentPage.goToURL();
		assert.isTrue(await currentPage.isPageOpen(), `${await currentPage.name} is not open yet`);
	}
);
Then(
	/^'(.*)' is loaded$/,
	async(page) => {
		const currentPage = pages[page];

		await currentPage.isPageLoaded(5000);
	}
);