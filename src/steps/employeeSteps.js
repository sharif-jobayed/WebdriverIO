import { Given, When, Then } from '@wdio/cucumber-framework';
import { PageBuilder } from '../framework/pageBuilder.js';
import { assert } from 'chai';
import { readFileSync } from 'fs';

const pageBuilder = new PageBuilder();

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
	async function (pageName) {
		this.page = await pageBuilder.getPage(pageName);
		await this.page.open();
	}
);

Then(
	/^the "(.*)" page is open$/,
	async function (pageName) {
		this.page = await pageBuilder.getPage(pageName);
		assert.isTrue(await this.page.isPageOpen(), `The ${pageName} page is not open`);
	}
);

Then(
	/^the "(.*)" page is loaded$/,
	async function (pageName) {
		this.page = await pageBuilder.getPage(pageName);
		assert.isTrue(await this.page.isPageLoaded(), `The ${pageName} page is not loaded`);
	}
);

When(
	/^I login with valid admin credentials on the "(.*)" page$/,
	async function (pageName) {
		this.page = await pageBuilder.getPage(pageName);
		await this.page.validAdminLogin();
	}
);

Then(
	/^I should see the "(.*)" page$/,
	async function (pageName) {
		this.page = await pageBuilder.getPage(pageName);
		assert.isTrue(await this.page.isPageVisible(), `The ${pageName} page is not visible`);
	}
);

When(
	/^I click on the PIM menu on "(.*)" page$/,
	async function (pageName) {
		this.page = await pageBuilder.getPage(pageName);
		await this.page.clickPIMLink();
	}
);

When(
	/^I click the Add button on "(.*)" page$/,
	async function (pageName) {
		this.page = await pageBuilder.getPage(pageName);
		await this.page.clickAddEmployeeButton();
	}
);

Given(
	/^I am on the "(.*)" page$/,
	async function (pageName) {
		this.page = await pageBuilder.getPage(pageName);
		await this.page.isPageOpen();
		assert.isTrue(await this.page.isPageOpen(), `The ${pageName} page is not open`);
	}
);

When(
	/^I enter the employee's first name and last name and ID on "(.*)" page$/,
	async function (pageName) {
		this.page = await pageBuilder.getPage(pageName);
		await this.page.enterEmployeeInfo();
	}
);

When(
	/^I enable the Create Login Details toggle on "(.*)" page$/,
	async function (pageName) {
		this.page = await pageBuilder.getPage(pageName);
		await this.page.enableCreateLoginDetailsToggle();
	}
);

When(
	/^I enter the username and password on "(.*)" page$/,
	async function (pageName) {
		this.page = await pageBuilder.getPage(pageName);
		await this.page.enterLoginDetails();
	}
);

When(
	/^I submit the employee creation form on "(.*)" page$/,
	async function (pageName) {
		this.page = await pageBuilder.getPage(pageName);
		return await this.page.clickSubmit();
	}
);

Then(
	/^I should see the newly created employee's first name and last name on "(.*)" page$/,
	async function (pageName) {
		this.page = await pageBuilder.getPage(pageName);
		const creds = await getEmployeeCreds();
		const actualFirstName = await this.page.getFirstNameValue();
		const actualLastName = await this.page.getLastNameValue();
		assert.equal(actualFirstName, creds.firstName, `The first name does not match: expected ${creds.firstName}`);
		assert.equal(actualLastName, creds.lastName, `The last name does not match: expected ${creds.lastName}`);

		await this.page.setPersonalDetails()
	}
);

// When(
// 	/^I click employee list button on "(.*)" page$/,
// 	async function (pageName) {
// 		this.page = await pageBuilder.getPage(pageName);
// 		await this.page.clickEmployeeListButton();
// 	}
// );

When(
	/^I search for employee's id in search field on "(.*)" page$/,
	async function (pageName) {
		this.page = await pageBuilder.getPage(pageName);
		await this.page.enterEmployeeIdAndSearch();
	}
);

Then(
	/^I should see the employee's profile in search results on "(.*)" page$/,
	async function (pageName) {
		this.page = await pageBuilder.getPage(pageName);
		const isEmployeeInList = await this.page.isEmployeeInList();
		assert.isTrue(isEmployeeInList, 'The employee is not found in the list');
	}
);

Then(
	/^I click on the Directory menu on "(.*)" page$/,
	async function (pageName) {
		this.page = await pageBuilder.getPage(pageName);
		await this.page.clickDirectoryLink();
	}
);

When (
	/^I enter a name in the search field on "(.*)" page$/,
	async function (pageName) {
		this.page = await pageBuilder.getPage(pageName);
		await this.page.enterEmployeeNameAndSearch();
	}
);

Then(
	/^the names dropdown is opened on "(.*)" page$/,
	async function (pageName) {
		// Waiting for the app to be accessible
	}
);

When(
	/^I select a name from the names dropdown on "(.*)" page$/,
	async function (pageName) {
		// Waiting for the app to be accessible
	}
);
