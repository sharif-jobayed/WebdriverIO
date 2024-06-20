
import {Given, When, Then} from '@wdio/cucumber-framework';
import { assert } from 'chai';

Given(
	/^I am on the '(.*)' page$/,
	async function (pageName) { }
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