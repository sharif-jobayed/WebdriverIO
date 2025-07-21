import {Given, When, Then} from '@wdio/cucumber-framework';
import {PageBuilder} from '../framework/pageBuilder.js';
import { faker } from '@faker-js/faker';
import { assert } from 'chai';
import {readFileSync} from 'fs';
const appData = JSON.parse(readFileSync(new URL('../data/appData.json', import.meta.url)));

// Example usage
const randomName = faker.name.fullName();
console.log(randomName);

const pageBuilder = new PageBuilder();
let page;

Given(
	/^I open the "(.*)" page$/,
	async (pageName) => {
		page = await pageBuilder.getPage(pageName);
		await page.open();
	}
);

Then(
	/^the "(.*)" page is open$/,
	async (pageName) => {
		page = await pageBuilder.getPage(pageName);
		assert.isTrue(await page.isPageOpen(), `The ${pageName} page is not open`);
	}
);

Then(
	/^the "(.*)" page is loaded$/,
	async (pageName) => {
		page = await pageBuilder.getPage(pageName);
		assert.isTrue(await page.isPageLoaded(), `The ${pageName} page is not loaded`);
	}
);

When(
	/^I login with valid admin credentials on the "(.*)" page$/,
	async (pageName) => {
		page = await pageBuilder.getPage(pageName);
		await page.validAdminLogin();
	}
);

Then(
	/^I should see the "(.*)" page$/,
	async (pageName) => {
		page = await pageBuilder.getPage(pageName);
		assert.isTrue(await page.isPageVisible(), `The ${pageName} page is not visible`);
	}
);

When(
	/^I click on the PIM menu on "(.*)" page$/,
	async (pageName) => {
		page = await pageBuilder.getPage(pageName);
		await page.clickPIMLink();
	}
);

When(
	/^I click the Add button on "(.*)" page$/,
	async (pageName) => {
		page = await pageBuilder.getPage(pageName);
		await page.clickAddEmployeeButton();
	}
);

Given(
	/^I am on the "(.*)" page$/,
	async (pageName) => {
		page = await pageBuilder.getPage(pageName);
		await page.isPageOpen();
		assert.isTrue(await page.isPageOpen(), `The ${pageName} page is not open`);
	}
);

When(
	/^I enter the employee's first name and last name and ID on "(.*)" page$/,
	async (pageName) => {
		page = await pageBuilder.getPage(pageName);
		await page.enterEmployeeInfo();
	}
);

When(
	/^I enable the Create Login Details toggle on "(.*)" page$/,
	async (pageName) => {
		page = await pageBuilder.getPage(pageName);
		await page.enableCreateLoginDetailsToggle();
	}
);

When(
	/^I enter the username and password on "(.*)" page$/,
	async (pageName) => {
		page = await pageBuilder.getPage(pageName);
		await page.enterLoginDetails();
	}
);

When(
	/^I submit the employee creation form on "(.*)" page$/,
	async (pageName) => {
		page = await pageBuilder.getPage(pageName);
		return await page.clickSubmit();
	}
);
