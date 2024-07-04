
const {Given, When, Then} = require ('@wdio/cucumber-framework');
const {assert} = require ('chai');

Given(
	/^I am on the '(.*)' page$/,
	async (pageName) => {}
);
Then(
	/^The '(.*)' page is open$/,
	async (pageName) => {}
);
Then(
	/^The '(.*)' page is loaded$/,
	async (pageName) => {}
);
