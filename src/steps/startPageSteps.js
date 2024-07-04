const { Given, When, Then } = require('@wdio/cucumber-framework');
const { assert } = require('chai');
const { Converters } = require('../framework/utils/converters.js');

const pages = (pageName) => {
	return new Converters().getPage(pageName);
}

When(
	/^I click on the '(.*)' button on the '(.*)' page$/,
	async (button, pageName) => {}
);
