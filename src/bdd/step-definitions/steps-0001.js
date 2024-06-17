const {Given, When, Then} = require('@wdio/cucumber-framework');
const { assert, expect } = require('chai');
const DataProcessor = require('../../utils/dataProcessor.js');

const dataProcessor = new DataProcessor();

Given(
	/^I am on the '(.*)' page$/,
	async function (pageName) {
		const page = await dataProcessor.pageProcessor(pageName);
		return page.goToPage();
	}
);

When(
	/^I click the '(.*)' link on the '(.*)' page$/,
	async function (link, pageName) {
		const page = await dataProcessor.pageProcessor(pageName);
		return (await page.getLinkByText(link)).doClick();
	}
);

Then(
	/^the '(.*)' page is opened$/,
	async function (pageName) {
		const page = await dataProcessor.pageProcessor(pageName);
		expect(browser).toHaveUrl(await page.currentURL(), `Page isn't open`);
	}
);

Then(
	/^the '(.*)' page is loaded$/,
	async function (pageName) {}
);

Then(
	/^I should see '(.*)' paragraph is displayed on the '(.*)' page$/,
	async function (text, pageName) {}
);

When(
	/^I navigate back to the '(.*)' page$/,
	async function (pageName) {}
);
