import { Given, When, Then } from '@wdio/cucumber-framework';
import { PageBuilder } from '../framework/pageBuilder.js';
import { assert } from 'chai';
import { readJSON } from '../framework/utils/randomData.js';

const pageBuilder = new PageBuilder();
const appData = readJSON(`../../data/appData.json`);
let page;

Given(
	/^I open the "(.*)" page$/,
	async function (pageName) {
		page = await pageBuilder.getPage(pageName);
		await page.open();
	}
);

Then(
	/^the "(.*)" page is open$/,
	async function (pageName) {
		page = await pageBuilder.getPage(pageName);
		assert.isTrue(await page.isPageOpen(), `The ${pageName} page is not open`);
	}
);

Then(
	/^the "(.*)" page is loaded$/,
	async function (pageName) {
		page = await pageBuilder.getPage(pageName);
		assert.isTrue(await page.isPageLoaded(), `The ${pageName} page is not loaded`);
	}
);

Given(
	/^I wait on the "(.*)" page$/,
	async function (pageName) {
		page = await pageBuilder.getPage(pageName);
		assert.isTrue(await page.getProfileNameEl().isVisible(appData.Timeouts.Med), `Not waited on the ${pageName} page`);
	}
);

When(
	/^I login with valid admin credentials on the "(.*)" page$/,
	async function (pageName) {
		page = await pageBuilder.getPage(pageName);
		await page.validAdminLogin();
	}
);

Then(
	/^I should see the "(.*)" page$/,
	async function (pageName) {
		page = await pageBuilder.getPage(pageName);
		assert.isTrue(await page.isPageVisible(), `The ${pageName} page is not visible`);
	}
);

When(
	/^I click on the PIM menu on "(.*)" page$/,
	async function (pageName) {
		page = await pageBuilder.getPage(pageName);
		await page.clickPIMLink();
	}
);

When(
	/^I click the Add button on "(.*)" page$/,
	async function (pageName) {
		page = await pageBuilder.getPage(pageName);
		await page.clickAddEmployeeButton();
	}
);

Given(
	/^I am on the "(.*)" page$/,
	async function (pageName) {
		page = await pageBuilder.getPage(pageName);
		await page.isPageOpen();
		assert.isTrue(await page.isPageOpen(), `The ${pageName} page is not open`);
	}
);

When(
	/^I fill up and submit the employee creation form on "(.*)" page$/,
	async function (pageName) {
		page = await pageBuilder.getPage(pageName);
		await page.enterEmployeeInfo();
		await page.enableCreateLoginDetailsToggle();
		await page.enterLoginDetails();
		await page.clickSubmit();
	}
);

Then(
	/^And I should see the newly created employee's full name on "(.*)" page$/,
	async (pageName) => {
		page = await pageBuilder.getPage(pageName);
		assert.strictEqual(await page.getFullName(), await page.getNameFromCreds(), 'The profile name does not match');
	}
);

When(
	/^I search for employee's id in search field on "(.*)" page$/,
	async function (pageName) {
		page = await pageBuilder.getPage(pageName);
		await page.enterEmployeeIdAndSearch();
	}
);

Then(
	/^I should see the employee's profile in search results on "(.*)" page$/,
	async function (pageName) {
		page = await pageBuilder.getPage(pageName);
		const isEmployeeInList = await page.isEmployeeInList();
		assert.isTrue(await isEmployeeInList, 'The employee is not found in the list');
	}
);

Then(
	/^I click on the Directory menu on "(.*)" page$/,
	async function (pageName) {
		page = await pageBuilder.getPage(pageName);
		await page.clickDirectoryLink();
	}
);

When(
	/^I enter a name in the search field on "(.*)" page$/,
	async function (pageName) {
		page = await pageBuilder.getPage(pageName);
		await page.enterSearchContent();
	}
);

Then(
	/^the names dropdown is opened on "(.*)" page$/,
	async function (pageName) {
		page = await pageBuilder.getPage(pageName);
		assert.isTrue(await (await page.getNamesDropdown()).isVisible(), 'The names dropdown is not visible');
	}
);

When(
	/^I select a name from the names dropdown on "(.*)" page$/,
	async function (pageName) {
		page = await pageBuilder.getPage(pageName);
		await page.pickAName(1);
	}
);

Then(
	/^I click the employee card on "(.*)" page and the profile is opened$/,
	async function (pageName) {
		page = await pageBuilder.getPage(pageName);
		await page.viewEmployeeProfile();
		assert.isTrue(await page.viewEmployeeProfile(), 'The employee profile is not opened');
	}
);

When(
	/^I click edit button for the employee on "(.*)" page$/,
	async (pageName) => {
		page = await pageBuilder.getPage(pageName);
		await page.clickEditProfileBtn();
	}
);

When(
	/^I click nationality drop down arrow on "(.*)" page$/,
	async (pageName) => {
		page = await pageBuilder.getPage(pageName);
		await page.clickNationalitySelectionArrow();
	}
);

Then(
	/^country list is opened on "(.*)" page$/,
	async (pageName) => {
		page = await pageBuilder.getPage(pageName);
		assert.isTrue(await (await page.getCountryList()).isVisible(), 'The country list is not visible');
	}
);

When(
	/^$/,
	async () => {}
);

When(
	/^$/,
	async () => {}
);

When(
	/^$/,
	async () => {}
);

When(
	/^$/,
	async () => {}
);

When(
	/^$/,
	async () => {}
);

When(
	/^$/,
	async () => {}
);

When(
	/^$/,
	async () => {}
);

When(
	/^$/,
	async () => {}
);

When(
	/^$/,
	async () => {}
);
