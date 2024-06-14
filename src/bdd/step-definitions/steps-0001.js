const {Given, When, Then} = require('@wdio/cucumber-framework');

Given(
	/^I am on the '(.*)' page$/,
	async function (pageName) {}
);

When(
	/^I click the '(.*)' link on the '(.*)' page$/,
	async function (link, pageName) {}
);

Then(
	/^the '(.*)' page is opened$/,
	async function (pageName) {}
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
