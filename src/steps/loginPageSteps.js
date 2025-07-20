import { Given, When, Then } from '@wdio/cucumber-framework';
import { assert } from 'chai';
import { readFileSync } from 'fs';
const userData = JSON.parse(readFileSync(new URL('../data/userData.json', import.meta.url)));
import { PageBuilder } from '../framework/pageBuilder.js';

const pageBuilder = new PageBuilder();
let page;

Given(
	/^I am on the SauceDemo "(.*)" page$/,
	async (pageName) => {
		page = await pageBuilder.getPage(pageName);
		await page.open();
	}
);

Then(
	/^the "(.*)" page is open$/,
	async (pageName) => {
		assert.isTrue(await page.isPageOpen(), `The "${pageName}" page should be open.`);
	}
);

Then(
	/^the "(.*)" page is loaded$/,
	async (pageName) => {
		assert.isTrue(await page.isPageLoaded(), `The "${pageName}" page should be loaded.`);
	}
);

When(
	/^I enter the username "(.*)" on "(.*)" page$/,
	async (username, pageName) => {
		await page.enterUsername(username);
	}
);

When(
	/^I enter the password "(.*)" on "(.*)" page$/,
	async (password, pageName) => {
		await page.enterPassword(password);
	}
);

When(
	/^I click the "Login" button on "(.*)" page$/,
	async (pageName) => {
		await page.clickLogin();
	}
);

Then(/^I should be redirected to the "Products" page$/, async () => {
	await expect(ProductsPage.pageTitle).toBeDisplayed();
	await expect(browser).toHaveUrlContaining('/inventory.html');
});
