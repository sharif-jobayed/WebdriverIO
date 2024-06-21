
import { Given, When, Then } from '@wdio/cucumber-framework';
import { assert, expect } from 'chai';

Then(/^I see '(.*)' is present in the '(.*)' heading on '(.*)' page$/,
	async function (text, headingType, pageName) {});
