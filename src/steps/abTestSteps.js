
import {Given, When, Then} from '@wdio/cucumber-framework'

Then(
	/^I see '(.*)' is present in the '(.*)' heading on '(.*)' page$/,
	async function (text, element, pageName) { }
);
