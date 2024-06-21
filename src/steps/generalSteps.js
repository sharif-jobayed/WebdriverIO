
import { Given, When, Then } from '@wdio/cucumber-framework';
import { assert, expect } from 'chai';
import { Converters } from '../utils/converters.js';

const converters = new Converters();

Given(
	/^I am on the '(.*)' page$/,
	async function (pageName) {
		const page = await converters.getPage(pageName);
		return page.openPage();
	}
);

Then(
	/^'(.*)' page is open$/,
	async function (pageName) { }
);

Then(
	/^'(.*)' page is loaded$/,
	async function (pageName) { }
);

When(
	/^I click on the '(.*)' link on '(.*)' page$/,
	async function (linkText, pageName) { }
);
