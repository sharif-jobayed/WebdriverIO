import { Given, When, Then } from '@wdio/cucumber-framework';
import { PageBuilder } from '../framework/pageBuilder.js';
import { assert } from 'chai';
import { readFileSync } from 'fs';

const pageBuilder = new PageBuilder();
let page;

const getAppData = async () => {
	const appData = JSON.parse(readFileSync(new URL('../data/appData.json', import.meta.url)));
	return appData;
}

const getEmployeeCreds = async () => {
	const credentials = JSON.parse(readFileSync(new URL('../data/employeeCredentials.json', import.meta.url)));
	return credentials;
}

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

Then(
	/^I should see the newly created employee's first name and last name on "(.*)" page$/,
	async (pageName) => {
		page = await pageBuilder.getPage(pageName);
		const creds = await getEmployeeCreds();
		const actualFirstName = await page.getFirstNameValue();
		const actualLastName = await page.getLastNameValue();
		assert.equal(actualFirstName, creds.firstName, `The first name does not match: expected ${creds.firstName}`);
		assert.equal(actualLastName, creds.lastName, `The last name does not match: expected ${creds.lastName}`);

		await page.setPersonalDetails()
	}
);

// When(
// 	/^I click employee list button on "(.*)" page$/,
// 	async (pageName) => {
// 		page = await pageBuilder.getPage(pageName);
// 		await page.clickEmployeeListButton();
// 	}
// );

When(
	/^I search for employee's id in search field on "(.*)" page$/,
	async (pageName) => {
		page = await pageBuilder.getPage(pageName);
		await page.enterEmployeeIdAndSearch();
	}
);

Then(
	/^I should see the employee's profile in search results on "(.*)" page$/,
	async (pageName) => {
		page = await pageBuilder.getPage(pageName);
		const isEmployeeInList = await page.isEmployeeInList();
		assert.isTrue(isEmployeeInList, 'The employee is not found in the list');
	}
);

Then(
	/^I click on the Directory menu on "(.*)" page$/,
	async (pageName) => {
		page = await pageBuilder.getPage(pageName);
		await page.clickDirectoryLink();
	}
);
