
const {Given, When, Then} = require('@wdio/cucumber-framework');
const {assert} = require('chai');

Given(
	/^I am on the '(.*)' page$/,
	async (pageName) => {}
);
Then(
	/^The '(.*)' page is open$/,
	async (pageName) => {}
);
When(
	/^The '(.*)' page is loaded$/,
	async (pageName) => {}
);
When(
	/^I click on the '(.*)' button on the '(.*)' page$/,
	async (buttonText, pageName) => {}
);

