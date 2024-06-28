
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
	async function (pageName) {
		const page = await converters.getPage(pageName);
		assert.isTrue(await page.isPageOpen(), `${pageName} page isn't open yet`);
	}
);

Then(
	/^'(.*)' page is loaded$/,
	async function (pageName) {
		const page = await converters.getPage(pageName);
		assert.isTrue(await page.isPageLoaded(), `${pageName} page isn't fully loaded yet`);
	}
);

When(
	/^I click on the '(.*)' link on '(.*)' page$/,
	async function (linkText, pageName) {
		const page = await converters.getPage(pageName);
		return (await page.getLinkByText(linkText)).doClick();
	}
);

When(
	/^I click on the '(.*)' button on '(.*)' page$/,
	async function (buttonText, pageName) {
		const page = await converters.getPage(pageName);
		const buttonElement = await page.getButtonByText(buttonText);
		await buttonElement.waitForIt();
		return buttonElement.doClick();
	}
);

Then(
	/^I see '(.*)' button is present on '(.*)' page$/,
	async function (buttonText, pageName) {
		const page = await converters.getPage(pageName);
		const buttonElement = await page.getButtonByText(buttonText);
		await buttonElement.waitForIt();
		assert.isTrue(await buttonElement.isVisible(), `${buttonText} button is not visible yet`);
	}
);
